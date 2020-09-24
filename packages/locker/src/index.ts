import sf from '@spiral-toolkit/core';
import { Lock } from './Lock';

sf.registerInstanceType(Lock);

// Includes version and time in bundle
export const version = `Version ${process.env.VERSION}, built at ${process.env.BUILD_TIME}`

export default Lock; // ES6 default export will not expose us as global
