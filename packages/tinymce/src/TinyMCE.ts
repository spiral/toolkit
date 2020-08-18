import sf, { ICustomInput, IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';
import { ITinyMCEOptions } from './types';

export class TinyMCE extends sf.core.BaseDOMConstructor {
  static readonly spiralFrameworkName: string = 'tinymce';

  static readonly spiralFrameworkCssName: string = 'js-sf-tinymce';

  static readonly defaultOptions: ITinyMCEOptions = {
    value: '',
    name: '',
    options: {},
  };

  public options: ITinyMCEOptions = { ...TinyMCE.defaultOptions };

  public readonly name = TinyMCE.spiralFrameworkName;

  public textarea!: HTMLTextAreaElement;

  public readonly optionsToGrab: { [option: string]: IOptionToGrab } = {
    name: {
      value: TinyMCE.defaultOptions.name,
      domAttr: 'data-name',
    },
  };

  private tinyMCE: any;

  constructor(ssf: ISpiralFramework, node: Element, options: ITinyMCEOptions) {
    super();
    this.init(ssf, node, options);
    this.options = {
      ...TinyMCE.defaultOptions,
      ...this.options,
    };
    this.textarea = node.querySelector('textarea') as HTMLTextAreaElement;
    this.tinyMCE = (window as any).tinymce;
    if (!this.tinyMCE) {
      throw new Error('Please include tiny mce to head scripts');
    }
    const tinyMCEOptions = { selector: this.textarea, ...this.options.options };
    this.setExternalValue = this.setExternalValue.bind(this);
    (this.textarea as unknown as ICustomInput).sfSetValue = this.setExternalValue;
    this.tinyMCE.init(tinyMCEOptions);
  }

  setExternalValue(value: string) {
    this.tinyMCE.setContent(value);
  }
}
