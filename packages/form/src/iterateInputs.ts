/* eslint-disable no-console */
/* eslint-disable func-names */

// Plugin in formMessages to iterate form inputs

// TODO comment all of this
// TODO ask @Systerr the reason of variable 'prefix'
let notFound: string[] = [];

/**
 *
 * @param {HTMLElement} context
 * @param {Object} names
 * @param {Function} callback
 * @param {String} [prefix]
 */
export function findNodes(context: Element, names: {[key: string]: any}, callback: (node: Element, something: any)=>void, prefix?: string) {
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
        names[name].forEach((el: string) => {
          // TODO refactor this should call recursive, el is not always string
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
          notFound.push(selector);
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
export const iterateInputs = function (context: Element, names: {[key: string]: any}, callback: (node: Element, something: any)=>void, prefix?: string) {
  notFound = [];
  findNodes(context, names, callback, prefix);
  return notFound;
};
