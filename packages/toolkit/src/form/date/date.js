/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */

import core from '@spiral-toolkit/core';
// import moment from 'moment';
import flatpickr from 'flatpickr';

export const DateInput = function (sf, node, options) {
  this._construct(sf, node, options);
};

/**
 * @lends sf.Form.prototype
 */
DateInput.prototype = Object.create(core.core.BaseDOMConstructor.prototype);

/**
 * Name to register
 * @type {string}
 */
DateInput.prototype.name = 'date';

DateInput.prototype._construct = function (sf, node, options) {
  this.init(sf, node, options);
  this.input = node.querySelector('input');
  this.picker = flatpickr(this.input, {
    enableTime: !!this.options.enableTime,
    noCalendar: !!this.options.noCalendar,
    altInput: true,
    altFormat: this.options.displayFormat || 'Y-m-d',
    dateFormat: this.options.dateFormat || 'Y-m-d',
    onChange: () => {

    },
  });
  console.log(this.options);
};

/**
 * @override
 * @inheritDoc
 * @enum {string}
 */
DateInput.prototype.optionsToGrab = {
  enableTime: {
    value: false,
    domAttr: 'data-enable-time',
  },
  noCalendar: {
    value: false,
    domAttr: 'data-no-calendar',
  },
  dateFormat: {
    value: 'Y-m-d',
    domAttr: 'data-format',
  },
  displayFormat: {
    value: 'Y-m-d',
    domAttr: 'data-display-format',
  },
};


DateInput.prototype.die = function () {
  delete this;
};

export { DateInput as default };
