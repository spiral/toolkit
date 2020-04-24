import sf from '@spiral-toolkit/core';

const { assert } = sf.helpers;

export const templates = {};

export class Template extends sf.core.BaseDOMConstructor {
    static spiralFrameworkName = 'template';

    static spiralFrameworkCssClass = 'js-sf-template';

    name = Template.spiralFrameworkName;

    static defaultOptions = {}

    optionsToGrab = {};

    options = {};

    /**
     *
     * @param ssf
     * @param node HTMLElement
     * @param options
     */
    constructor(ssf, node, options) {
      super();
      console.log(ssf, node, options);
      const id = node.getAttribute('data-id');
      assert.ok(id, 'Template node should have id');
      assert.strictEqual(node.tagName.toUpperCase(), 'SCRIPT', 'Template node should be script');
      assert.strictEqual(node.getAttribute('type'), 'text/html', 'Template type should be text/html');
      assert.ok(!templates[id], `Template ${id} already registered`);
      templates[id] = ssf.helpers.handlebars.compile(node.innerHTML);
      ssf.removeInstance(Template.spiralFrameworkName, node); // self destruct
    }
}

sf.registerInstanceType(Template, Template.spiralFrameworkCssClass);

window.SFTemplates = templates;
