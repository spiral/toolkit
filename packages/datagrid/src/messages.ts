export class Messages<T extends Object> {
  constructor(public definitions: Partial<T>, public defaultDefinitions: T) {
  }
  getMessage(messageKey: keyof T, values: {[key: string]: any} = {}) {
    return Object.keys(values).reduce((prev: string, key)=>{
      return prev.split(`{{${key}}}`).join((typeof values[key] === 'undefined')?'':String(values[key]));
    }, (this.definitions[messageKey] || this.defaultDefinitions[messageKey] || '') as string);
  }
}