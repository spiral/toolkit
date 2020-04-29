import type { Ajax } from '../Ajax';
import type { Events } from '../Events';

export const attachDefaultActions = (ajaxInstance: Ajax, globalEvents: Events) => {
  ajaxInstance.events.on('load', (options: any) => {
    const { response } = options;
    if (!response || !response.data) return;

    const { data } = response;
    if (!data.action) return;

    if (typeof data.action === 'string') { // "action":"reload"
      globalEvents.trigger(data.action);
    } else if (typeof data.action === 'object') {
      const keys = Object.keys(data.action);
      // TODO: notifications
      // if (keys.indexOf('flash') !== -1) {
      //   const { flash } = data.action;
      //   const timestamp = Date.now();
      //   let sfFlashMessage = {};

      //   if (typeof data.action.flash === 'object') {
      //     sfFlashMessage = flash;
      //     sfFlashMessage.timestamp = timestamp;
      //   } else {
      //     sfFlashMessage = {
      //       message: flash,
      //       timestamp,
      //     };
      //   }

      //   sessionStorage.setItem('sfFlashMessage', JSON.stringify(sfFlashMessage));
      // }

      if (keys.indexOf('redirect') !== -1) {
        setTimeout(() => {
          globalEvents.trigger('redirect', { url: data.action.redirect, options });
        }, +data.action.delay || 0);
      } else if (keys.indexOf('name') !== -1) {
        setTimeout(() => {
          globalEvents.trigger(data.action.name, data.action.url);
        }, +data.action.delay || 0);
      }
    } else {
      console.error('Action from server. Something wrong. ', data.action);
    }
  });
};
