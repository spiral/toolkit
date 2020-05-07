export const closest = (el: Element, selector: string | string[] | ((e: Element)=>boolean)) => {
  let predicate = selector;
  if (typeof predicate !== 'function') {
    const selectors: string[] = (typeof selector === 'string') ? [selector] : selector as string[];
    // eslint-disable-next-line max-len
    predicate = (elem: Element) => selectors.reduce((matchValid: boolean, sel: string) => matchValid && (elem.matches || (elem as any).msMatchesSelector).call(elem, sel), true);
  }

  let elem = el;

  while (elem && elem.parentElement) {
    if (predicate(elem)) {
      return elem;
    }
    elem = elem.parentElement;
  }
  return false;
};

export default { closest };
