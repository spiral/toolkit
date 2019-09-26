/* eslint-disable no-restricted-globals */

/**
 * @module tools
 * @namespace
 */
const tools = {
  resolveKeyPath(path, obj, safe) {
    // eslint-disable-next-line no-nested-ternary
    return path.split('.').reduce((prev, curr) => (!safe ? prev[curr] : (prev ? prev[curr] : undefined)), obj || self);
  },
};

module.exports = tools;
