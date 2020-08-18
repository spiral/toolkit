import sf, { IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';
import { SFSocket } from '@spiralscout/websockets';
import { NamesDict } from '@spiralscout/websockets/lib/eventdispatcher/events';
import { EVENT_NAME } from './constants';
import { INCenterOptions, INotification, INotificationEvent } from './types';

export function isNotificationEvent(e: any): e is INotificationEvent {
  if (e.type !== EVENT_NAME || !e.data) {
    return false;
  }
  if (e.data.title && e.data.id && e.data.body) {
    return true;
  }
  return false;
}

export class Notifications extends sf.core.BaseDOMConstructor {
  static readonly spiralFrameworkName: string = 'notifications';

  static readonly spiralFrameworkCssName: string = 'js-sf-notifications';

  static readonly defaultOptions: INCenterOptions = {
    drawerSelector: '.sf-drawer .sf-drawer-body',
    headerSelector: '',
    ws: false,
  };

  public options: INCenterOptions = { ...Notifications.defaultOptions };

  public readonly name = Notifications.spiralFrameworkName;

  public readonly optionsToGrab: { [option: string]: IOptionToGrab } = {};

  public ws?: SFSocket;

  constructor(ssf: ISpiralFramework, node: Element, options: INCenterOptions) {
    super();
    this.init(ssf, node, options);
    this.options = {
      ...Notifications.defaultOptions,
      ...this.options,
    };
    if (this.options.ws) {
      this.ws = new SFSocket(this.options.ws);
      this.ws.subscribe(NamesDict.MESSAGE, (event) => {
        try {
          const e = JSON.parse(event.data || '');
          if (isNotificationEvent(e)) {
            const { data } = e;
            this.onNotification(data);
          }
          // eslint-disable-next-line no-empty
        } catch (ex) {
        }
      });
    }
  }

  onNotification(n: INotification) {

  }
}
