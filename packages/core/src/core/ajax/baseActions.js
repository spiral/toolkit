/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable func-names */

/**
 * This plugin adds ability to perform actions from the server.
 * @param {Object} sf
 * "action":"reload"
 * "action":{"redirect":"/account"}
 * "action":{"redirect":"/account","delay":3000}
 * "action":{"name":"redirect","url":"/account","delay":3000}
 */
module.exports = function (sf) {
  sf.ajax.events.on('load', (options) => {
    const { response } = options;
    if (!response || !response.data) return;

    const { data } = response;
    if (!data.action) return;

    if (typeof data.action === 'string') { // "action":"reload"
      sf.events.trigger(data.action);
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
          sf.events.trigger('redirect', data.action.redirect, options);
        }, +data.action.delay || 0);
      } else if (keys.indexOf('name') !== -1) {
        setTimeout(() => {
          sf.events.trigger(data.action.name, data.action.url);
        }, +data.action.delay || 0);
      }
    } else {
      console.error('Action from server. Something wrong. ', data.action);
    }
  });

  // (function (sfFlashMessage) {
  //   if (!sfFlashMessage) return;

  //   const message = JSON.parse(sfFlashMessage);
  //   const timestamp = Date.now();
  //   let flashClass;

  //   if (timestamp - message.timestamp > 10000) return;

  //   if (message.type === 'debug' || message.type === 'success') {
  //     flashClass = 'debug';
  //   } else if (message.type === 'info' || !message.type || message.type === 'notice') {
  //     flashClass = 'info';
  //   } else {
  //     flashClass = 'danger';
  //   }

  //   const node = document.createElement('div');
  //   const nodeWrapper = document.createElement('div');
  //   nodeWrapper.classList.add('flash-wrapper');
  //   node.classList.add('flash', flashClass);
  //   node.innerHTML = message.message;
  //   document.body.appendChild(nodeWrapper);
  //   nodeWrapper.appendChild(node);

  //   setTimeout(() => {
  //     nodeWrapper.classList.add('show');
  //   }, 1);

  //   setTimeout(() => {
  //     nodeWrapper.classList.remove('show');
  //   }, message.timeout || 5000);

  //   sessionStorage.removeItem('sfFlashMessage');
  // }(sessionStorage.getItem('sfFlashMessage')));
};
