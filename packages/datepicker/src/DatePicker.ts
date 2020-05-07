import sf, { IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';
import flatpickr from 'flatpickr';

const dateWithTS = 'yyyy-MM-dd\'T\'HH:mm:ssZZZ';

const { luxon } = sf.helpers;

export interface IDatePickerOptions {
  enableTime?: boolean,
  noCalendar?: boolean,
  dateFormat?: string;
  displayFormat?: string;
}

export class DatePicker extends sf.core.BaseDOMConstructor {
  static readonly spiralFrameworkName: string = 'datepicker';

  static readonly spiralFrameworkCss: string = 'js-sf-date';

  public readonly name = DatePicker.spiralFrameworkName;

  static defaultOptions: IDatePickerOptions = {
    enableTime: false,
    noCalendar: false,
    dateFormat: dateWithTS,
    displayFormat: 'yyyy LLL dd',
  };

  el?: HTMLDivElement;

  public readonly optionsToGrab: { [option: string]: IOptionToGrab } = {
    enableTime: {
      value: DatePicker.defaultOptions.enableTime,
      domAttr: 'data-enable-time',
    },
    noCalendar: {
      value: DatePicker.defaultOptions.noCalendar,
      domAttr: 'data-no-calendar',
    },
    dateFormat: {
      value: DatePicker.defaultOptions.dateFormat,
      domAttr: 'data-format',
    },
    displayFormat: {
      value: DatePicker.defaultOptions.displayFormat,
      domAttr: 'data-display-format',
    },
  };

  options: IDatePickerOptions = { ...DatePicker.defaultOptions };

  sf!: ISpiralFramework;

  input: HTMLInputElement;

  picker: flatpickr.Instance;

  static registerInSf = () => {
    sf.registerInstanceType(DatePicker, DatePicker.spiralFrameworkCss);
  };

  constructor(ssf: ISpiralFramework, node: Element, options: Partial<IDatePickerOptions>) {
    super();
    this.init(ssf, node, options, DatePicker.defaultOptions);
    this.input = node.querySelector('input')!;
    this.picker = flatpickr(this.input, {
      enableTime: !!this.options.enableTime,
      noCalendar: !!this.options.noCalendar,
      altInput: true,
      altFormat: this.options.displayFormat || 'yyyy LLL dd',
      dateFormat: this.options.dateFormat || dateWithTS,
      formatDate: (date, format) => luxon.DateTime.fromJSDate(date).toFormat(format),
      parseDate: (str, format) => luxon.DateTime.fromFormat(str, format).toJSDate(),
    });
  }
}
