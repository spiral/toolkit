import sf, { ICustomInput, IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';
import { ICodeEditorOptions } from './types';

export class CodeEditor extends sf.core.BaseDOMConstructor {
  static readonly spiralFrameworkName: string = 'CodeEditor';

  static readonly spiralFrameworkCssName: string = 'js-sf-codeeditor';

  static readonly defaultOptions: ICodeEditorOptions = {
    value: '',
    name: '',
    formatJson: true,
    options: {
      mode: "application/json",
      lineNumbers: true,
      gutters: ["CodeMirror-lint-markers"],
      lint: true,
    },
  };

  public options: ICodeEditorOptions = { ...CodeEditor.defaultOptions };

  public readonly name = CodeEditor.spiralFrameworkName;

  public textarea!: HTMLTextAreaElement;

  public readonly optionsToGrab: { [option: string]: IOptionToGrab } = {
    name: {
      value: CodeEditor.defaultOptions.name,
      domAttr: 'data-name',
    },
  };

  private CodeEditor: any;

  constructor(ssf: ISpiralFramework, node: Element, options: ICodeEditorOptions) {
    super();
    this.init(ssf, node, options);
    this.options = {
      ...CodeEditor.defaultOptions,
      ...this.options,
    };
    this.textarea = node.querySelector('textarea') as HTMLTextAreaElement;
    let id = this.textarea.getAttribute('id');
    if (!id) {
      id = `sf-${Date.now()}${Math.floor(Math.random() * 1000)}`;
      this.textarea.setAttribute('id', id);
    }
    const { CodeMirror } = (window as any);
    if (!CodeMirror) {
      throw new Error('Please include CodeMirror to head scripts');
    }
    const CodeEditorOptions = { ...this.options.options };
    this.setExternalValue = this.setExternalValue.bind(this);
    (this.textarea as unknown as ICustomInput).sfSetValue = this.setExternalValue;
    this.textarea.value = this.normalizeValue(this.textarea.value);
    this.CodeEditor = CodeMirror.fromTextArea(this.textarea, CodeEditorOptions);
    this.CodeEditor.off('change');
    this.CodeEditor.on('change', () => {
      this.textarea.value = this.denormalizeValue(this.CodeEditor.getValue());
    });
  }

  normalizeValue(value: string) {
    let newVal = value;
    if(this.options.formatJson) {
      try {
        const obj = JSON.parse(value);
        newVal = JSON.stringify(obj, undefined, 2);
      } catch (e) {

      }
    }
    return newVal;
  }

  denormalizeValue(value: string) {
    let newVal = value;
    if(this.options.formatJson) {
      try {
        const obj =  JSON.parse(value);
        newVal = JSON.stringify(obj);
      } catch (e) {

      }
    }
    return newVal;
  }

  setExternalValue(value: string) {
    this.CodeEditor.setValue(this.normalizeValue(value));
  }

  die() {
    super.die();
    this.CodeEditor.toTextArea();
  }
}
