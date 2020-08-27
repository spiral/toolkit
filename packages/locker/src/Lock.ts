/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */

import sf, { IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';
import './styles.css';

enum LockType {
  default = 'default',
  spinner = 'spinner',
  progress = 'progress',
}

type ProgressFunc = (current: number, total: number) => any;

export interface IOptions {
  type: LockType;
}

export interface IType {
  html: string,
  progress?: ProgressFunc,
  className?: string,
}

const types: { [t: string]: IType } = {
  spinner: {
    html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
  },
  progress: {
    html: '<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"></div></div>',
    progress(current: number, total: number) {
      // @ts-ignore
      const progress = this.context.getElementsByClassName('progress-bar')[0];
      progress.style.width = `${100 * (current / total)}%`;
    },
  },
};

export class Lock extends sf.core.BaseDOMConstructor {
  static readonly spiralFrameworkName: string = 'lock';

  // static readonly spiralFrameworkCssName: string = 'js-sf-qrcode';

  static readonly defaultOptions: IOptions = {
    type: LockType.default,
  };

  static types: { [t: string]: IType } = {
    default: types.spinner,
    ...types,
  };

  public options: IOptions = { ...Lock.defaultOptions };

  public readonly name = Lock.spiralFrameworkName;

  public readonly optionsToGrab: { [option: string]: IOptionToGrab } = {};

  public progress?: ProgressFunc;

  constructor(ssf: ISpiralFramework, node: Element, options: IOptions) {
    super();
    this.init(ssf, node, options);
    this.options = {
      ...Lock.defaultOptions,
      ...this.options,
    };
    this.progress = this.add(this.options.type, this.node);
  }

  die() {
    this.remove();
  }

  remove() {
    this.node.classList.remove('locked');
    const sfLock = this.node.querySelector('.js-sf-lock'); // TODO this.lockNode ?
    if (sfLock) {
      this.node.removeChild(sfLock);
    }
    return true;
  }

  add(type: LockType, context: Element = this.node) {
    // eslint-disable-next-line no-prototype-builtins
    if (!Lock.types.hasOwnProperty(type)) {
      return undefined;
    }
    const node = document.createElement('div');
    node.classList.add(Lock.types[type].className || 'js-sf-lock');
    node.classList.add('locker');
    node.innerHTML = Lock.types[type].html;
    context.appendChild(node);
    context.classList.add('locked');
    return Lock.types[type].progress;
  }
}

export default Lock;
