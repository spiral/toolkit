import core from '@spiral-toolkit/core';

require('./template');
// require('./form/input');
require('./ui/localdate/LocalDate');
// require('./form/pattern/PatternInput');

require('@spiral-toolkit/locker');
require('@spiral-toolkit/datepicker');
require('@spiral-toolkit/form');
require('@spiral-toolkit/datagrid');

// Includes version and time in bundle
export const version = `Version ${process.env.VERSION}, built at ${process.env.BUILD_TIME}`;
core.version = version;

export default core;
