const preventDefault = (rawEvent) => {
  const e = rawEvent || window.event;
  if (e.touches.length > 1) return true;
  if (e.preventDefault) e.preventDefault();
  return false;
};

let hasPassiveEvents = false;
if (typeof window !== 'undefined') {
  const passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    },
  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

export function disableBodyScroll() {
  document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
}

export function enableBodyScroll() {
  document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
}
