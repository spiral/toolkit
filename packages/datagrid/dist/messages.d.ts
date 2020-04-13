export declare class Messages<T extends Object> {
    definitions: Partial<T>;
    defaultDefinitions: T;
    constructor(definitions: Partial<T>, defaultDefinitions: T);
    getMessage(messageKey: keyof T, values: {
        [key: string]: any;
    }): string;
}
