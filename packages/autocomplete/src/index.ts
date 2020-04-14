import sf from '@spiral-toolkit/core';
import Autocomplete from './Autocomplete';

sf.registerInstanceType(Autocomplete, 'sf-js-autocomplete');

export default Autocomplete; // ES6 default export will not expose us as global
