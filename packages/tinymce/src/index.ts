import sf from '@spiral-toolkit/core';
import { TinyMCE } from './TinyMCE';

sf.registerInstanceType(TinyMCE, TinyMCE.spiralFrameworkCssName);

export default TinyMCE; // ES6 default export will not expose us as global
