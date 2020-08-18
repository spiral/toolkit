import { ISFSocketConfig } from '@spiralscout/websockets/build/SFSocket';

export interface INCenterOptions {
  drawerSelector: string,
  headerSelector: string,
  ws: false | ISFSocketConfig,
}
