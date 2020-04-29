import sf from '@spiral-toolkit/core';

const { handlebars } = sf.helpers;

export class Messages {
  public templates: { [key: string]: (data: any) => string } = {};

  constructor(public definitions: { [key: string]: string }, public defaultDefinitions: { [key: string]: string }) {
    const defs = {
      ...defaultDefinitions,
      ...definitions,
    };
    Object.keys(defs).forEach((k) => {
      this.templates[k] = handlebars.compile(defs[k]);
    });
  }

  getMessage(messageKey: string, values: { [key: string]: any } = {}) {
    return this.templates[messageKey](values);
  }
}
