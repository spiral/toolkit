export const extractOptions = (node: Element) => {
  let additionalOptionsEl: Element | undefined;
  node.querySelectorAll('script[role="sf-options"]').forEach((n) => {
    if (n.parentElement === node) {
      additionalOptionsEl = n;
    }
  });
  if (additionalOptionsEl) {
    if (additionalOptionsEl.getAttribute('type') === 'text/javascript') {
      try {
        // eslint-disable-next-line
        const one = Function(`"use strict";return ${additionalOptionsEl.innerHTML.trim()}`);
        // console.log('"use strict";return ' + additionalOptionsEl.innerHTML.trim() + '');
        const overrides = one()();
        return overrides;
      } catch (e) {
        console.error('Could not parse options inside script, ensure script inside is an anonymous function returning object');
      }
    } else {
      try {
        return JSON.parse(additionalOptionsEl.innerHTML.trim());
      } catch (e) {
        console.error('Could not parse options inside script, ensure script inside is a JSON');
      }
    }
  }
  return undefined;
};
