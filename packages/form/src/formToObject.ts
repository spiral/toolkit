/*
 * github.com/serbanghita/FormToObject.js 1.0.1  (c) 2013 Serban Ghita <serbanghita@gmail.com>
 * @licence MIT
 */
import sf from '@spiral-toolkit/core';

const {CUSTOM_INPUT_TARGET_ATTR} = sf.constants;
const {isNodeInsideCustomSFInput} = sf.tools;

export const formToObject = (form: Element) => {
  const keyRegex = /[^\[\]]+/g;
  const elements = form.querySelectorAll(`input, textarea, select, [${CUSTOM_INPUT_TARGET_ATTR}]`);
  const obj = {};
  const hasMultipleOfName = (name: string) => {
    // eslint-disable-next-line max-len
    const formElements = form.querySelectorAll(`input[name="${name}"], textarea[name="${name}"], select[name="${name}"], [${CUSTOM_INPUT_TARGET_ATTR}][name="${name}"]`);
    return formElements.length > 1;
  }

  const addChild = (result: any, domNode: HTMLElement, keys: string[], value: any, isArray: boolean = false) => {
    // #1 - Single dimensional array.
    if (keys.length === 1) {
      const key = keys[0];

      if (isNodeInsideCustomSFInput(domNode)) {
        // Don't parse inputs that are used as helpers
        return;
      }
      if (domNode.hasAttribute(CUSTOM_INPUT_TARGET_ATTR)) {
        // That is sf custom component specific input
        result[key] = value;
        return;
      }
      // We're only interested in the radio that is checked.
      if (domNode.nodeName === 'INPUT' && (domNode as HTMLInputElement).type === 'radio') {
        if ((domNode as HTMLInputElement).checked) {
          result[key] = value;
          return;
        }
        return;
      }

      // Checkboxes are a special case. We have to grab each checked values
      // and put them into an array.
      if (domNode.nodeName === 'INPUT' && (domNode as HTMLInputElement).type === 'checkbox') {
        if (isArray) { // Looks like checkbox array
          if (!result[key]) {
            result[key] = [];
          }
          if ((domNode as HTMLInputElement).checked) {
            result[key].push(value);
          }
        } else {
          result[key] = (domNode as HTMLInputElement).checked ? value : ''; // Single checkbox
        }
        return;
      }


      // Multiple select is a special case.
      // We have to grab each selected option and put them into an array.
      if (domNode.nodeName === 'SELECT') {
        const selectNode = domNode as HTMLSelectElement;
        const realValue = selectNode.selectedIndex >= 0 ? selectNode.options[selectNode.selectedIndex]?.value : undefined;
        if (selectNode.multiple) {
          result[key] = [];
          const DOMchilds = selectNode.selectedOptions;
          if (DOMchilds) {
            for (let i = 0; i < DOMchilds.length; i++) {
              if (DOMchilds.item(i)!.value) {
                result[key].push(DOMchilds.item(i)!.value);
              }
            }
          }
        } else {
          result[key] = realValue;
        }
        return;
      }

      // Fallback. The default one to one assign.
      result[key] = value;
    }

    // #2 - Multi dimensional array.
    if (keys.length > 1) {
      if (!result[keys[0]]) {
        result[keys[0]] = {};
      }
      addChild(result[keys[0]], domNode, keys.splice(1, keys.length), value);
    }
  }

  for (let i = 0; i < elements.length; i += 1) {
    const el = elements[i] as HTMLInputElement;
    // Ignore the element if the 'name' attribute is empty.
    // Ignore the 'disabled' elements.
    if (el.name && !el.disabled) {
      const test = el.name.match(keyRegex);
      const isArray = hasMultipleOfName(el.name);
      if (test && test.length) {
        addChild(obj, el, test, el.value, isArray);
      }
    }
  }
  return obj;
}
