import sf, { ISpiralFramework } from '@spiral-toolkit/core';

const { CUSTOM_INPUT_TARGET_ATTR } = sf.constants;

export class PatternInput extends sf.core.BaseDOMConstructor {
  static spiralFrameworkName = 'pattern-input';

  static spiralFrameworkCssClass = 'js-sf-pattern-input';

  focusTimer = null;

  name = PatternInput.spiralFrameworkName;

  static defaultOptions = {
    name: undefined,
    value: '',
    autosubmit: false,
  };

  optionsToGrab = {
    value: {
      value: PatternInput.defaultOptions.value,
      domAttr: 'data-value',
    },
    name: {
      value: PatternInput.defaultOptions.name,
      domAttr: 'data-name',
    },
    autosubmit: {
      value: PatternInput.defaultOptions.autosubmit,
      domAttr: 'data-autosubmit',
    },
  };

  options = { ...PatternInput.defaultOptions };

  chars = [];

  constructor(ssf: ISpiralFramework, node: Element, options: any) {
    super();
    this.init(ssf, node, options);
    this.onInput = this.onInput.bind(this);
    // @ts-ignore
    this.serialInput = node.querySelector(`[${CUSTOM_INPUT_TARGET_ATTR}]`);
    // @ts-ignore
    [...node.querySelectorAll('input[data-pattern-char], input[data-pattern-digit]')].forEach((el) => {
      // @ts-ignore
      this.chars.push(el);
      el.addEventListener('input', this.onInput);
      el.addEventListener('focus', () => el.setSelectionRange(0, 1));
    });
    // @ts-ignore
    this.serialInput.sfSetValue = (value) => {
      this.setValue(this.chars[0], value);
    };
  }

  // @ts-ignore
  nextInput(node) {
    // @ts-ignore
    const n = this.chars.indexOf(node);
    if (n < this.chars.length - 1) {
      return this.chars[n + 1];
    }
    return undefined;
  }

  // @ts-ignore
  prevInput(node) {
    // @ts-ignore
    const n = this.chars.indexOf(node);
    if (n > 0) {
      return this.chars[n - 1];
    }
    return undefined;
  }

  calcValue() {
    let value = '';
    this.chars.forEach((el) => {
      // @ts-ignore
      value += el.value;
    });
    // @ts-ignore
    this.serialInput.value = value;
    // @ts-ignore
    this.serialInput.dispatchEvent(new Event('change', { bubbles: true }));
  }

  // @ts-ignore
  setValue(target, value) {
    const isDigit = target.hasAttribute('data-pattern-digit');
    let char = value.charAt(0);
    if (isDigit) {
      char = char.replace(/\D/g, '');
    }
    const rest = value.substr(1);
    // eslint-disable-next-line no-param-reassign
    target.value = char.toUpperCase();
    // @ts-ignore
    clearTimeout(this.focusTimer);
    let finished = false;
    if (char) {
      const next = this.nextInput(target);
      if (next) {
        // @ts-ignore
        this.focusTimer = setTimeout(() => {
          // @ts-ignore
          next.focus();
        },
        10);
        if (rest.length) {
          this.setValue(next, rest);
        }
      } else {
        target.blur();
        finished = true;
      }
      this.calcValue();

      if (this.options.autosubmit && finished) {
        const form = this.sf.helpers.domTools.closest(this.node, 'form');
        if (form) {
          const data = this.sf.getInstance('form', form);
          if (data) {
            // @ts-ignore
            data.instance.onSubmit({ preventDefault: () => false });
          } else {
            // @ts-ignore
            form.submit();
          }
        }
      }
    }
  }

  // @ts-ignore
  onInput(e) {
    this.setValue(e.target, e.target.value.trim());
  }

  die() {
    super.die();
    this.chars.forEach((el) => {
      // @ts-ignore
      el.removeEventListener('input', this.onInput);
    });
  }
}

sf.registerInstanceType(PatternInput, PatternInput.spiralFrameworkCssClass);
