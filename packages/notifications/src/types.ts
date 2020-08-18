import { ISFSocketConfig } from '@spiralscout/websockets/build/SFSocket';

export interface INCenterOptions {
  drawerSelector: string,
  headerSelector: string,
  ws: false | ISFSocketConfig,
}

export interface INotification {
  id: string;
  title: string;
  body: string;
}

export interface INotificationEvent {
  type: string;
  data: INotification;
}
