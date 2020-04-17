export const extractOptions = (node: Element) => {
  const additionalOptionsEl = node.querySelector('script[role="sf-options"]');
  if (additionalOptionsEl) {
    try {
      return JSON.parse(additionalOptionsEl.innerHTML.trim());
    } catch (e) {
      console.error('Could not parse options inside script, ensure script inside is a JSON');
    }
  }
  return undefined;
};
