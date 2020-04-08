export const closest = (el: Element, selectors: string | string[]) => {
    selectors = (typeof selectors === 'string') ? [selectors] : selectors;
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
