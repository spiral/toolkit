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
    let id = this.textarea.getAttribute('id');
    if (!id) {
      id = `sf-${Date.now()}${Math.floor(Math.random() * 1000)}`;
      this.textarea.setAttribute('id', id);
    }
    const { tinymce } = (window as any);
    if (!tinymce) {
      throw new Error('Please include tiny mce to head scripts');
    }
    const tinyMCEOptions = { selector: `#${id}`, ...this.options.options };
    this.setExternalValue = this.setExternalValue.bind(this);
    (this.textarea as unknown as ICustomInput).sfSetValue = this.setExternalValue;
    tinymce.init(tinyMCEOptions).then((editors: any[]) => {
      // eslint-disable-next-line prefer-destructuring
      this.tinyMCE = editors[0];
    });
  }

  setExternalValue(value: string) {
    this.tinyMCE.setContent(value);
  }

  die() {
    super.die();
    const { tinymce } = (window as any);
    tinymce.remove(this.tinyMCE);
  }
}
