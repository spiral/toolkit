import { closest } from './helpers/domTools';

/**
 * Custom input components are expected to have a wrapper with CUSTOM_INPUT_ATTR
 *
 * Custom input components may have any number of html inputs inside but these inputs should have no 'name' attribute
 * to prevent these inputs to get into native FormData data
 *
 * Custom input component must have a singular input (hidden or not) that has CUSTOM_INPUT_TARGET_ATTR attribute
 *
 * That input should have serialized 'value' of component
 * That input should have name attribute to be able to get into native FormData
 * That input should have additional method named sfSetValue that would allow to deserialize value of component
 */

// Attribute to detect wrapper of custom form input element
export const CUSTOM_INPUT_ATTR = 'data-sf-custom-form-element';
// Attribute to detect internal input that stores serialized value
export const CUSTOM_INPUT_TARGET_ATTR = 'data-sf-custom-form-element-input';

export interface ICustomInput {
  /**
   * Set value of custom input
   */
  sfSetValue: (value: string) => void;
}

/**
 * This method allows to check if specific node is not serializable input
 * @param node
 */
export const isNodeInsideCustomSFInput = (node: Element) => !node.hasAttribute(CUSTOM_INPUT_TARGET_ATTR) && !!closest(node, `[${CUSTOM_INPUT_ATTR}]`);
