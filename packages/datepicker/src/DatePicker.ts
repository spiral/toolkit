import sf, { ICustomInput, IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';
import flatpickr from 'flatpickr';
import confirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate';

const dateWithTS = 'yyyy-MM-dd\'T\'HH:mm:ssZZZ';

const { luxon } = sf.helpers;
const { CUSTOM_INPUT_TARGET_ATTR, CUSTOM_INPUT_ATTR } = sf.constants;

export interface IDatePickerOptions {
  enableTime?: boolean,
  noCalendar?: boolean,
  time24?: boolean,
  value?: string,
  forceConfirmButton?: boolean,
  mode?: string,
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
    forceConfirmButton: false,
    mode: 'single',
    dateFormat: dateWithTS,
    displayFormat: 'yyyy LLL dd',
  };

  el?: HTMLDivElement;

  public readonly optionsToGrab: { [option: string]: IOptionToGrab } = {
    enableTime: {
      value: DatePicker.defaultOptions.enableTime,
      domAttr: 'data-enable-time',
    },
    forceConfirmButton: {
      value: DatePicker.defaultOptions.forceConfirmButton,
      domAttr: 'data-force-confirm-button',
    },
    mode: {
      value: DatePicker.defaultOptions.mode,
      domAttr: 'data-mode',
    },
    time24: {
      value: DatePicker.defaultOptions.enableTime,
      domAttr: 'data-time-24',
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
    value: {
      value: DatePicker.defaultOptions.value,
      domAttr: 'data-value',
    },
  };

  options: IDatePickerOptions = { ...DatePicker.defaultOptions };

  sf!: ISpiralFramework;

  input: HTMLInputElement;

  picker: flatpickr.Instance;

  form?: HTMLFormElement;

  private readonly resetListener?: (ev: Event)=>any;

  static registerInSf = () => {
    sf.registerInstanceType(DatePicker, DatePicker.spiralFrameworkCss);
  };

  constructor(ssf: ISpiralFramework, node: Element, options: Partial<IDatePickerOptions>) {
    super();
    this.init(ssf, node, options, DatePicker.defaultOptions);
    this.input = node.querySelector('input')!;
    const confirmPlugin = new (confirmDatePlugin as any)({
      confirmIcon: "<i class='fa fa-check ml-1'></i>", // your icon's html, if you wish to override
      confirmText: 'Apply',
      showAlways: !!this.options.forceConfirmButton,
      theme: 'light', // or "dark
    });
    this.picker = flatpickr(this.input, {
      enableTime: !!this.options.enableTime,
      noCalendar: !!this.options.noCalendar,
      altInput: true,
      mode: this.options.mode as any,
      time_24hr: !!this.options.time24,
      altFormat: this.options.displayFormat || 'yyyy LLL dd',
      dateFormat: this.options.dateFormat || dateWithTS,
      formatDate: (date, format) => luxon.DateTime.fromJSDate(date).toFormat(format),
      parseDate: (str, format) => luxon.DateTime.fromFormat(str, format).toJSDate(),
      plugins: [confirmPlugin],
    });
    this.input = node.querySelector('input[name]')! as HTMLInputElement;
    (this.input as unknown as ICustomInput).sfSetValue = (value) => {
      // console.log(value, this.picker.l10n.rangeSeparator);
      if (this.options.mode === 'range') {
        const values = value.split(this.picker.l10n.rangeSeparator);
        /* const dates = */ values.map((v) => (luxon.DateTime.fromFormat(v, this.options.dateFormat || dateWithTS).toJSDate()));
        // console.log(this.options.mode, this.picker.l10n.rangeSeparator, values, dates);
        this.picker.setDate(values);
      }
      this.picker.setDate(value);
    };
    this.input.setAttribute(CUSTOM_INPUT_TARGET_ATTR, 'true');
    node.setAttribute(CUSTOM_INPUT_ATTR, 'true');
    if (node.querySelector('[data-toggle]')) {
      node.querySelector('[data-toggle]')!.addEventListener('click', () => this.picker.toggle());
    }
    if (node.querySelector('[data-clear]')) {
      node.querySelector('[data-clear]')!.addEventListener('click', () => this.picker.clear());
    }
    this.form = sf.closest(node, 'form') as HTMLFormElement;

    if (this.form) {
      this.resetListener = () => {
        if (this.options.value) {
          this.picker.setDate(this.options.value);
        } else {
          this.picker.clear();
        }
      };
      this.form.addEventListener('reset', this.resetListener);
    }
  }

  die() {
    if (this.form && this.resetListener) {
      this.form.removeEventListener('reset', this.resetListener);
    }
    if (this.picker) {
      this.picker.destroy();
    }
  }
}
