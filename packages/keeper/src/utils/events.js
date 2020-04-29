function createEventWithConstructor(
  eventType,
  detail,
  bubbles,
  cancelable,
) {
  return new CustomEvent(eventType, { bubbles, cancelable, detail });
}

function createEventWithInit(
  eventType,
  detail,
  bubbles,
  cancelable,
) {
  const event = document.createEvent('CustomEvent');

  event.initCustomEvent(eventType, bubbles, cancelable, detail);

  return event;
}

const createEvent = typeof window.CustomEvent === 'function'
  ? createEventWithConstructor
  : createEventWithInit;

export function on(target, eventType, handler, useCapture = false) {
  let eventTarget = target;
  if (typeof target === 'string') {
    eventTarget = document.getElementById(target);
  }

  if (!eventTarget) return null;

  eventTarget.addEventListener(eventType, handler, useCapture);

  return () => eventTarget.removeEventListener(eventType, handler, useCapture);
}

export function dispatch(
  target,
  eventType,
  detail = {},
  options = { bubbles: true, cancelable: true },
) {
  const bubbles = options.bubbles || true;
  const cancelable = options.cancelable || true;
  const event = createEvent(eventType, detail, bubbles, cancelable);

  return target.dispatchEvent(event);
}
