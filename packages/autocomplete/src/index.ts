import sf from '@spiral-toolkit/core';
import Autocomplete from './Autocomplete';

sf.registerInstanceType(Autocomplete, 'js-sf-autocomplete');

// Includes version and time in bundle
export const version = `Version ${process.env.VERSION}, built at ${process.env.BUILD_TIME}`;

export default Autocomplete; // ES6 default export will not expose us as global
