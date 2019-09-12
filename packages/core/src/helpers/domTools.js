/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/**
 This is a collection of useful DOM tools.
 */

module.exports = {

  /**
     * Found first parent node with matched selector(s)
     * @param {Object} elem - dom node
     * @param {String|Array} selectors - selector or array of selectors
     * @returns {Object| Boolean} - node or false
     */

  closest(elem, selectors) {
    selectors = (typeof selectors === 'string') ? [selectors] : selectors;
    let key;
    const l = selectors.length;
    const matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;

    while (elem && elem.parentNode) {
      for (key = 0; key < l; key += 1) {
        if (matchesSelector.call(elem, selectors[key])) {
          return elem;
        }
      }
      elem = elem.parentNode;
    }
    return false;
  },
  /**
     * Found first parent node with matched className(s).
     * TODO Why this? Because old IE....
     * TODO It's not good, because it's a copy of closest @see closest. Refactor
     * @param {Object} elem - dom node
     * @param {String|Array} className - className or array of classNames
     * @returns {Object| Boolean} - node or false
     */

  closestByClassName(elem, className) {
    className = (typeof className === 'string') ? [className] : className;
    let key;
    const l = className.length;

    while (elem && elem.parentNode) {
      for (key = 0; key < l; key += 1) {
        const reg = new RegExp(`(\\s|^)${className[key]}(\\s|$)`);
        if (elem.className.match(reg)) {
          return elem;
        }
      }
      elem = elem.parentNode;
    }
    return false;
  },
};
