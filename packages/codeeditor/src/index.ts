import sf from '@spiral-toolkit/core';
import { CodeEditor } from './CodeEditor';

sf.registerInstanceType(CodeEditor, CodeEditor.spiralFrameworkCssName);

// Includes version and time in bundle
export const version = `Version ${process.env.VERSION}, built at ${process.env.BUILD_TIME}`

export default CodeEditor; // ES6 default export will not expose us as global
