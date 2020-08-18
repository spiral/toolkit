import sf from '@spiral-toolkit/core';
import { Notifications } from './Notifications';

sf.registerInstanceType(Notifications, Notifications.spiralFrameworkCssName);

export default Notifications; // ES6 default export will not expose us as global
