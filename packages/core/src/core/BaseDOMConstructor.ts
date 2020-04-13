import type { IOptionToGrab, ISFInstanceClass, ISpiralFramework } from '../types';

/**
 * This a base constructor (class) for any DOM based instance.
 * This constructor just grab all node attributes and generates options. All processed options stored at this.options
 * @example
 * We have html like this:
 * <div data-test="testValue" data-value="value123">.....</div>
 * this.options will be:
 * {
 *  test:"testValue",
 *  value:"value"
 * }
 * Note: data-test and data-value should be described in attributesToGrab
 * @constructor
 */
export class BaseDOMConstructor implements ISFInstanceClass {
  public name: string = '';

  public sf!: ISpiralFramework;

  public node!: Element;

  public options: any;

  /**
     * This is a options to generate.
     * You should provide processor or value.
     * @type {Object}
     * @property {Object} propertyKey - object of property
     * @property {String} propertyKey.value - default value to return
     * @property {String} [propertyKey.domAttr] - dom attribute to grab data
     * @property {Function} [propertyKey.processor] -  processor to process data before return
     * @property {Object}  ... - Another object of one property
     * @type {{}}
     *  @example
     * "someAttribute": {// key
     *      value: true, //default Value
     *      domAttr: "data-some-attribute", // attribute from node to grab
     *      processor: function (node,val,self) { //processor to process values before return
     *          //some calculations
     *      return someValue;
     *      }
     *  },
     *  "anotherAttribute":{...},
     *  "..."
     *
     *  @example
     *  //return node as value
     *  "context": {
     *      "processor": function (node,val,key) { //processor
     *          return node;
     *      }
     *  },
     *  "Another-key":{...},
     *  "..."
     * @example
     * //Grab attribute "data-attribute" as "MyAttribute" if attribute not provided return "DefaultValue"
     * // Dom node <div data-attribute="someValue"></div>
     * "MyAttribute": {
     *      value: "DefaultValue",
     *      domAttr: "data-attribute"
     *  }
     *  //after processing we should have
     *  {"MyAttribute":"someValue"}
     *
     *  @example
     * //Grab attribute "data-attribute" as "MyAttribute" and return some value instead
     * //Dom node  <div data-attribute="someValue"></div>
     * "MyAttribute": {
     *      domAttr: "data-attribute",
     *      processor: function (node,val,self) {
     *          return val+"SomeCalculation";
     *      }
     *  }
     *  //after processing we should have
     *  {"MyAttribute":"someValueSomeCalculation"}
     *
     * @example
     * //return function as value
     * processAnswer: {
     *      "value": function (options) {
     *         return "someVal";
     *      }
     *  //after processing we should have
     *  {"processAnswer":function (options) {
     *         return "someVal";
     *      }
     *   }
     *
     * @example
     * //return init time as value
     * initTime: {
     *      "processor": function (node,val,self) {
     *         return new Date().getTime;
     *      }
     *  //after processing we should have
     *  {"initTime":1429808977404}
     * @example
     * //return other value instead of real one
     * processAnswer: {
     *      "processor": function (node,val,self) {
     *         return "someVal";
     *      }
     *  //after processing we should have
     *  {"processAnswer":"someVal"}
     */
  public readonly optionsToGrab: {
    [option: string]: IOptionToGrab
  } = {};

  /**
     * Init method. Call after construct instance
     * @param {Object} sf
     * @param {Object} node  DomNode of form
     * @param {Object} [options] all options to override default
     */
  public init(sf: ISpiralFramework, node: Element, options: any) {
    this.sf = sf;
    this.node = node;
    this.options = Object.assign(this.grabOptions(node), options);
  }

  /**
     * Grab all options that described in optionsToGrab
     * @param {Object} node domNode
     * @return {Object}
     */
  grabOptions(node: Element) {
    const options: { [key: string]: any } = {};
    let currentOptionValue;
    let currentOption;

    // eslint-disable-next-line no-proto
    const optionsToGrab = this.optionsToGrab || (this as any).__proto__.optionsToGrab || {}; // TODO: get rid of __proto__, replace with static(?)
    // for (const option in this.optionsToGrab) {
    Object.keys(optionsToGrab).forEach((option) => {
      currentOptionValue = null;

      currentOption = optionsToGrab[option];
      if (currentOption.value) { // we have default option. Let's grab it for first
        currentOptionValue = currentOption.value;
      }

      if (this.sf.options.instances[this.name] && this.sf.options.instances[this.name][option]) {
        currentOptionValue = this.sf.options.instances[this.name][option];
      }

      if (currentOption.domAttr && node.hasAttribute(currentOption.domAttr)) { // we can grab the attribute of node
        currentOptionValue = node.getAttribute(currentOption.domAttr);
      }

      if (currentOption.processor) { // we have processor. Let's execute it
        currentOptionValue = currentOption.processor.call(this, node, currentOptionValue, currentOption);
      }

      if (currentOptionValue !== null) {
        options[option] = currentOptionValue;
      }
    });
    return options;
  }
}

export default BaseDOMConstructor;
