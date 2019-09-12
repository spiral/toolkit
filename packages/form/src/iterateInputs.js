"use strict";
// Plugin in formMessages to iterate form inputs

// TODO comment all of this
// TODO ask @Systerr the reason of variable 'prefix'
var notFound = [];

/**
 *
 * @param {HTMLElement} context
 * @param {Object} names
 * @param {Function} callback
 * @param {String} [prefix]
 */
function findNodes(context, names, callback, prefix) {
    for (var name in names) {
        if (!names.hasOwnProperty(name)) {
            continue;
        }

        var partOfSelector = (prefix) ? prefix + "[" + name + "]" : name;
        var type = Object.prototype.toString.call(names[name]);
        var selector = "[name='" + partOfSelector + "']";

        switch (type) {
            case '[object Object]':
                findNodes(context, names[name], callback, partOfSelector);
                break;
            case '[object Array]':
                names[name].forEach(function (el) {
                    "use strict";
                    // TODO refactor this should call recursive
                    var sel = "[name='" + partOfSelector + "[]']" + "[value='" + el + "']";
                    var nodes = context.querySelectorAll(sel);
                    if (nodes.length === 0) {
                        notFound.push(sel);
                    }
                    for (var i = 0, max = nodes.length; i < max; i++) {
                        callback(nodes[i], true);
                    }
                });
                break;
            case '[object String]':
            case '[object Number]':
                var nodes = context.querySelectorAll(selector);
                if (nodes.length === 0) {
                    var obj = {};
                    obj[partOfSelector] = names[name];
                    notFound.push(obj);
                }
                for (var i = 0, max = nodes.length; i < max; i++) {
                    callback(nodes[i], names[name]);
                }
                break;

            default :
                console.error("unknown type -", type, " and message", names[name]);
        }
    }
}

/**
 * @param {HTMLElement} context
 * @param {Object} names
 * @param {Function} callback
 * @param {String} [prefix]
 * @return {String[]}
 */
var iterateInputs = function (context, names, callback, prefix) {
    notFound = [];
    findNodes(context, names, callback, prefix);
    if (notFound.length !== 0) {
        console.log("Some element not found in form", notFound);
    }
    return notFound;
};

module.exports = iterateInputs;
