import sf, { ISpiralFramework } from '@spiral-toolkit/core';
import type { IOptionToGrab } from '@spiral-toolkit/core';

export interface IOptions {
  value: string;
  format: string;
  titleFormat?: string;
  errorValue?: string;
  sourceFormat?: string;
}


export class LocalDate extends sf.core.BaseDOMConstructor {
  static spiralFrameworkName = 'localdate';

  static spiralFrameworkCssClass = 'js-sf-localdate';

  name = LocalDate.spiralFrameworkName;

  static defaultOptions: IOptions = {
    value: '',
    format: '',
  };

  public readonly optionsToGrab: { [option: string]: IOptionToGrab } = {
    value: {
      value: LocalDate.defaultOptions.value,
      domAttr: 'data-value',
    },
    errorValue: {
      value: LocalDate.defaultOptions.errorValue,
      domAttr: 'data-error-value',
    },
    format: {
      value: LocalDate.defaultOptions.format,
      domAttr: 'data-format',
    },
    titleFormat: {
      value: LocalDate.defaultOptions.titleFormat,
      domAttr: 'data-title-format',
    },
    sourceFormat: {
      value: LocalDate.defaultOptions.sourceFormat,
      domAttr: 'data-source-format',
    },
  };

  options: IOptions = { ...LocalDate.defaultOptions };

  constructor(ssf: ISpiralFramework, node: Element, options: any) {
    super();
    this.init(ssf, node, options);
    const date = this.options.sourceFormat
      ? sf.helpers.luxon.DateTime.fromFormat(this.options.value, this.options.sourceFormat)
      : sf.helpers.luxon.DateTime.fromJSDate(new Date(this.options.value));
    if (date.isValid) {
      // eslint-disable-next-line no-param-reassign
      node.innerHTML = date.toFormat(this.options.format);
      if (this.options.titleFormat) {
        node.setAttribute('title', date.toFormat(this.options.titleFormat));
      }
    } else {
      // eslint-disable-next-line no-console
      console.error(date.invalidExplanation, this.options);
      // eslint-disable-next-line no-param-reassign
      node.innerHTML = this.options.errorValue || '';
      node.setAttribute('title', this.options.errorValue || '');
    }
  }
}

sf.registerInstanceType(LocalDate, LocalDate.spiralFrameworkCssClass);
