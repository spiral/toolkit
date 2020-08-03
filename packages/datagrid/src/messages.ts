import sf from '@spiral-toolkit/core';

export class Messages {
  public templates: { [key: string]: (data: any) => string } = {};

  constructor(public definitions: { [key: string]: string }, public defaultDefinitions: { [key: string]: string }) {
    const defs = {
      ...defaultDefinitions,
      ...definitions,
    };
    Object.keys(defs).forEach((k) => {
      this.templates[k] = sf.helpers.template.compile(defs[k]);
    });
  }

  getMessage(messageKey: string, values: { [key: string]: any } = {}) {
    return this.templates[messageKey](values);
  }
}
