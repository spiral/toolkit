/* eslint-disable func-names */
/**
 * Object.assign polyfill
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
if (typeof Object.assign !== 'function') {
  (function () {
    Object.assign = function (target) {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      const output = Object(target);
      for (let index = 1; index < arguments.length; index += 1) {
        // eslint-disable-next-line prefer-rest-params
        const source = arguments[index];
        if (source !== undefined && source !== null) {
          // for (const nextKey in source) {
          Object.keys(source).forEach((nextKey) => {
            // eslint-disable-next-line no-prototype-builtins
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          });
        }
      }
      return output;
    };
  }());
}
