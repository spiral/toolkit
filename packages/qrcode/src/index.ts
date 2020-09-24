import sf from '@spiral-toolkit/core';
import { QRCode } from './QRCode';

sf.registerInstanceType(QRCode, QRCode.spiralFrameworkCssName);

// Includes version and time in bundle
export const version = `Version ${process.env.VERSION}, built at ${process.env.BUILD_TIME}`

export default QRCode; // ES6 default export will not expose us as global
