/* eslint-disable func-names */

// Plugin in formMessages to iterate form inputs

// TODO comment all of this
// TODO ask @Systerr the reason of variable 'prefix'
let notFound = [];

/**
 *
 * @param {HTMLElement} context
 * @param {Object} names
 * @param {Function} callback
 * @param {String} [prefix]
 */
function findNodes(context, names, callback, prefix) {
  // for (const name in names) {
  Object.keys(names).forEach((name) => {
    // eslint-disable-next-line no-prototype-builtins
    if (!names.hasOwnProperty(name)) {
      return;
    }

    const partOfSelector = (prefix) ? `${prefix}[${name}]` : name;
    const type = Object.prototype.toString.call(names[name]);
    const selector = `[name='${partOfSelector}']`;

    switch (type) {
      case '[object Object]':
        findNodes(context, names[name], callback, partOfSelector);
        break;
      case '[object Array]':
        names[name].forEach((el) => {
          // TODO refactor this should call recursive
          const sel = `[name='${partOfSelector}[]'][value='${el}']`;
          const nodes = context.querySelectorAll(sel);
          if (nodes.length === 0) {
            notFound.push(sel);
          }
          for (let i = 0, max = nodes.length; i < max; i += 1) {
            callback(nodes[i], true);
          }
        });
        break;
      case '[object String]':
      case '[object Number]':
        // eslint-disable-next-line no-case-declarations
        const nodes = context.querySelectorAll(selector);
        if (nodes.length === 0) {
          const obj = {};
          obj[partOfSelector] = names[name];
          notFound.push(obj);
        }
        for (let i = 0, max = nodes.length; i < max; i += 1) {
          callback(nodes[i], names[name]);
        }
        break;

      default:
        console.error('unknown type -', type, ' and message', names[name]);
    }
  });
}

/**
 * @param {HTMLElement} context
 * @param {Object} names
 * @param {Function} callback
 * @param {String} [prefix]
 * @return {String[]}
 */
const iterateInputs = function (context, names, callback, prefix) {
  notFound = [];
  findNodes(context, names, callback, prefix);
  if (notFound.length !== 0) {
    // eslint-disable-next-line no-console
    console.log('Some element not found in form', notFound);
  }
  return notFound;
};

module.exports = iterateInputs;
