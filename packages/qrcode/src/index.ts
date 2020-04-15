import sf from '@spiral-toolkit/core';
import { QRCode } from './QRCode';

sf.registerInstanceType(QRCode, QRCode.spiralFrameworkCssName);

export default QRCode; // ES6 default export will not expose us as global
