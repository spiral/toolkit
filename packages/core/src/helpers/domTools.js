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

    closest: function (elem, selectors) {
        selectors = (typeof selectors === 'string') ? [selectors] : selectors;
        var key;
        var l = selectors.length;
        var matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;

        while (elem && elem.parentNode) {
            for (key = 0; key < l; key++) {
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

    closestByClassName: function (elem, className) {
        className = (typeof className === 'string') ? [className] : className;
        var key;
        var l = className.length;

        while (elem && elem.parentNode) {
            for (key = 0; key < l; key++) {
                var reg = new RegExp("(\\s|^)" + className[key] + "(\\s|$)");
                if (elem.className.match(reg)) {
                    return elem;
                }
            }
            elem = elem.parentNode;
        }
        return false;
    }
};
