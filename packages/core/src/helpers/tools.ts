/**
 * @module tools
 * @namespace
 */
export function resolveKeyPath(path: string, obj: any, safe?: boolean) {
  // eslint-disable-next-line no-restricted-globals,no-nested-ternary
  return path.split('.').reduce((prev, curr) => (!safe ? prev[curr] : (prev ? prev[curr] : undefined)), obj || self);
}

export { isNodeInsideCustomSFInput } from './formInput';
