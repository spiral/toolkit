import sf from '@spiral-toolkit/core';
import { Lock } from './Lock';

sf.registerInstanceType(Lock);

export default Lock; // ES6 default export will not expose us as global
