export const closest = (el: Element, selector: string | string[]) => {
  const selectors = (typeof selector === 'string') ? [selector] : selector;
  let key;
  let elem = el;
  const l = selectors.length;
  const matchesSelector: (selectors: string) => boolean = elem.matches || (elem as any).msMatchesSelector;

  while (elem && elem.parentElement) {
    for (key = 0; key < l; key += 1) {
      if (matchesSelector.call(elem, selectors[key])) {
        return elem;
      }
    }
    elem = elem.parentElement;
  }
  return false;
};

export default { closest };
