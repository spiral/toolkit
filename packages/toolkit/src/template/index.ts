import sf, { IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';

const { assert } = sf.helpers;

export const templates: { [id:string]: (item: any)=>any } = {};

export class Template extends sf.core.BaseDOMConstructor {
  static spiralFrameworkName = 'template';

  static spiralFrameworkCssClass = 'js-sf-template';

  name = Template.spiralFrameworkName;

  static defaultOptions = {};

  public readonly optionsToGrab: { [option: string]: IOptionToGrab } = {};

  options: { } = {};

  /**
     * @param ssf
     * @param node HTMLElement
     */
  constructor(ssf: ISpiralFramework, node: Element) {
    super();
    const id = node.getAttribute('data-id');
    assert.ok(id, 'Template node should have id');
    assert.strictEqual(node.tagName.toUpperCase(), 'SCRIPT', 'Template node should be script');
    assert.strictEqual(node.getAttribute('type'), 'text/html', 'Template type should be text/html');
    assert.ok(!templates[id!], `Template ${id} already registered`);
    templates[id!] = ssf.helpers.handlebars.compile(node.innerHTML);
    ssf.removeInstance(Template.spiralFrameworkName, node); // self destruct
  }
}

sf.registerInstanceType(Template, Template.spiralFrameworkCssClass);

(window as any).SFTemplates = templates;
