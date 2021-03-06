import { ISFSocketConfig } from '@spiralscout/websockets/build/SFSocket';

export interface INCenterOptions {
  drawer: {
    container: string,
    body: string,
    counter: string,
    mask: string,
    btn: string,
  },
  header: {
    toggle: string,
    counter: string,
  },
  api: {
    getList: string,
    setAsRead: string,
  },
  ws: false | ISFSocketConfig | string,
}

export interface INCenterUiElements {
  drawer: {
    container: HTMLElement,
    body: HTMLElement,
    counter: HTMLElement,
    mask: HTMLElement,
    btn: HTMLElement,
  },
  header: {
    toggle: HTMLElement,
    counter: HTMLElement,
  },
}

export interface INotification {
  id: string;
  icon?: string;
  date: number;
  read: boolean;
  title: string;
  body: string;
}

export interface INotificationEvent {
  type: string;
  data: INotification;
}
