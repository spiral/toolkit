import sf from '@spiral-toolkit/core';
import { Notifications } from './Notifications';

sf.registerInstanceType(Notifications, Notifications.spiralFrameworkCssName);

// Includes version and time in bundle
export const version = `Version ${process.env.VERSION}, built at ${process.env.BUILD_TIME}`

export default Notifications; // ES6 default export will not expose us as global
