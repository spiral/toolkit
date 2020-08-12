import 'core-js';
// import cssVars from 'css-vars-ponyfill';

// cssVars();

// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

try {
  const ce = new window.CustomEvent('test', { cancelable: true });
  ce.preventDefault();
  if (ce.defaultPrevented !== true) {
    // IE has problems with .preventDefault() on custom events
    // http://stackoverflow.com/questions/23349191
    throw new Error('Could not prevent default');
  }
} catch (e) {
  // eslint-disable-next-line func-names
  const CustomEvent = function (event: any, params: any) {
    // eslint-disable-next-line no-param-reassign
    params = params || {};
    // eslint-disable-next-line no-param-reassign
    params.bubbles = !!params.bubbles;
    // eslint-disable-next-line no-param-reassign
    params.cancelable = !!params.cancelable;

    const evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail,
    );
    const origPrevent = evt.preventDefault;
    // eslint-disable-next-line func-names
    evt.preventDefault = function () {
      origPrevent.call(this);
      try {
        Object.defineProperty(this, 'defaultPrevented', {
          get() {
            return true;
          },
        });
      } catch (ex) {
        (this as any).defaultPrevented = true;
      }
    };
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;
  (window as any).CustomEvent = CustomEvent; // expose definition to window
  (window as any).Event = CustomEvent; // expose definition to window
}
