import sf from '@spiral-toolkit/core';
import { TinyMCE } from './TinyMCE';

sf.registerInstanceType(TinyMCE, TinyMCE.spiralFrameworkCssName);

// Includes version and time in bundle
export const version = `Version ${process.env.VERSION}, built at ${process.env.BUILD_TIME}`

export default TinyMCE; // ES6 default export will not expose us as global
