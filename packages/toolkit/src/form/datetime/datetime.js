/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */

import core from '@spiral-toolkit/core';
import moment from 'moment';
import Pikaday from 'pikaday';

const Datetime = function (sf, node, options) {
  this._construct(sf, node, options);
};

/**
 * @lends sf.Form.prototype
 */
Datetime.prototype = Object.create(core.core.BaseDOMConstructor.prototype);

/**
 * Name to register
 * @type {string}
 */
Datetime.prototype.name = 'datetime';

Datetime.prototype._construct = function (sf, node, options) {
  this.init(sf, node, options); // call parent

  if (options) {
    // if we pass options extend all options by passed options
    this.options = Object.assign(this.options, options);
  }

  this.options = Object.assign(this.options, options, this.options.config);

  // Elements
  this.els = {
    node,
  };

  this.picker = new Pikaday({ field: this.els.node });

  const momentDate = moment(this.els.node.dataset.value || Math.floor(Date.now() / 1000), this.options.valueMask);

  this.els.node.value = momentDate.format(this.options.inputFormat);
  this.els.node.classList.add('datetime');

  this.els.hiddenInput = document.createElement('input');
  this.els.hiddenInput.setAttribute('type', 'hidden');
  this.els.hiddenInput.setAttribute('name', this.els.node.name);
  this.els.node.parentNode.appendChild(this.els.hiddenInput);
  if (this.options.dateClass) this.els.node.classList.add(this.options.dateClass);
  this.els.node.name = ''; // remove name from date-input since passed data will be in hidden input

  this.generateTimePicker();

  this.addEventListeners();
};

/**
 * @override
 * @inheritDoc
 * @enum {string}
 */
Datetime.prototype.optionsToGrab = {
  /**
     *  Predefined value in any format
     */
  value: {
    domAttr: 'data-value',
  },
  /**
     *  Mask of predefined value, for example: "X" - Unix timestamp, "x" - Unix ms timestamp, "YYYY" - 4 or 2 digit year
     *  http://momentjs.com/docs/  Section: "String+Format"
     */
  valueMask: {
    domAttr: 'data-value-mask',
    value: 'X',
  },
  /**
     *  Format of value in input
     *  http://momentjs.com/docs/  Section: "String+Format"
     */
  inputFormat: {
    domAttr: 'data-input-format',
    value: 'YYYY-MM-DD',
  },
  /**
     *  Format of value to pass into the hidden input
     *  http://momentjs.com/docs/  Section: "String+Format"
     */
  format: {
    domAttr: 'data-format',
    value: 'X',
  },
  /**
     *  Separator between hours and minutes
     */
  timeSeparator: {
    domAttr: 'data-time-separator',
    value: ' : ',
  },
  /**
     *  Pass all other custom options of Pikaday via json
     */
  config: {
    value: {},
    domAttr: 'data-config',
    processor(node, val, self) {
      if (!val) return this.value;
      if (typeof val === 'string') {
        try {
          // eslint-disable-next-line no-param-reassign
          val = JSON.parse(val);
        } catch (e) {
          console.error('Config JSON.parse error: ', e);
        }
      }
      return Object.assign(self.value, val);
    },
  },
  /**
     *  Show time in 24/12 hours format
     */
  hours24: {
    domAttr: 'data-hours-24',
    value: false,
  },
  /**
     *  Step in minutes select
     */
  minuteStep: {
    domAttr: 'data-minutes-step',
    value: 1,
  },
  dateClass: {
    domAttr: 'data-date-class',
    value: '',
  },
  hourClass: {
    domAttr: 'data-hour-class',
    value: '',
  },
  minuteClass: {
    domAttr: 'data-minute-class',
    value: '',
  },
  periodClass: {
    domAttr: 'data-period-class',
    value: '',
  },
  separatorClass: {
    domAttr: 'data-separator-class',
    value: '',
  },
};

Datetime.prototype.generateTimePicker = function () {
  const that = this;

  this.els.minuteSelect = document.createElement('select');
  this.els.minuteSelect.classList.add('datetime');
  if (this.options.minuteClass) this.els.minuteSelect.classList.add(this.options.minuteClass);
  this.els.hourSelect = document.createElement('select');
  this.els.hourSelect.classList.add('datetime');
  if (this.options.separatorClass) this.els.hourSelect.classList.add(this.options.separatorClass);

  this.els.timeSeparator = document.createElement('span');
  this.els.timeSeparator.innerHTML = this.options.timeSeparator;
  if (this.options.hourClass) this.els.timeSeparator.classList.add(this.options.hourClass);

  this.els.node.parentNode.appendChild(this.els.hourSelect);
  this.els.node.parentNode.appendChild(this.els.timeSeparator);
  this.els.node.parentNode.appendChild(this.els.minuteSelect);

  for (let i = 0; i <= 59; i += that.options.minuteStep) {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    that.els.minuteSelect.appendChild(option);
  }
  if (this.options.hours24) {
    for (let i = 0; i <= 23; i += 1) {
      const option = document.createElement('option');
      option.value = i;
      option.text = i;
      that.els.hourSelect.appendChild(option);
    }
  } else {
    for (let i = 1; i <= 12; i += 1) {
      const option = document.createElement('option');
      option.value = i;
      option.text = i;
      that.els.hourSelect.appendChild(option);
    }
    this.els.periodSelect = document.createElement('select');
    this.els.periodSelect.classList.add('datetime');
    if (that.options.periodClass) this.els.periodSelect.classList.add(that.options.periodClass);
    this.els.node.parentNode.appendChild(this.els.periodSelect);

    const am = document.createElement('option');
    am.value = 'am';
    am.text = 'am';
    that.els.periodSelect.appendChild(am);

    const pm = document.createElement('option');
    pm.value = 'pm';
    pm.text = 'pm';
    that.els.periodSelect.appendChild(pm);
  }
};

Datetime.prototype.onTimeChange = function () {
  const time = `${this.els.node.value} ${
    this.els.hourSelect.value} ${this.els.minuteSelect.value
  }${typeof this.els.periodSelect !== 'undefined' ? ` ${this.els.periodSelect.value}` : ''}`;

  const mask = this.options.inputFormat + (this.options.hours24 ? ' HH mm' : ' hh mm aa');
  const momentDate = moment.utc(time, mask);
  this.els.hiddenInput.value = momentDate.utc().format(this.options.format);
};

Datetime.prototype.addEventListeners = function () {
  const that = this;

  this._timeChange = function (e) {
    that.onTimeChange(e);
  };

  if (this.els.node) {
    this.els.node.addEventListener('change', this._timeChange);
  }
  if (this.els.minuteSelect) {
    this.els.minuteSelect.addEventListener('change', this._timeChange);
  }
  if (this.els.hourSelect) {
    this.els.hourSelect.addEventListener('change', this._timeChange);
  }
  if (this.els.periodSelect) {
    this.els.periodSelect.addEventListener('change', this._timeChange);
  }
};

Datetime.prototype.die = function () {
  delete this;
};

export { Datetime as default };
