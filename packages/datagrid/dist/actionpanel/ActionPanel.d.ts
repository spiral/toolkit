import sf, { IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';
import type { IActionDescriptor, IActionPanelOptions, IActionPanelState } from '../types';
export declare type FlexibleRenderDefinition = string | Element | ((state: IActionPanelState) => string | Element);
export declare class ActionPanel<Item = any> extends sf.core.BaseDOMConstructor {
    static readonly spiralFrameworkName: string;
    readonly name: string;
    static defaultOptions: IActionPanelOptions;
    el?: HTMLDivElement;
    readonly optionsToGrab: {
        [option: string]: IOptionToGrab;
    };
    options: IActionPanelOptions;
    sf: ISpiralFramework;
    state: IActionPanelState<Item>;
    constructor(ssf: ISpiralFramework, node: Element, options: IActionPanelOptions);
    reconfigure(options: Partial<IActionPanelOptions>): void;
    unlock(): void;
    lock(): void;
    setSelection(selectedKeys: Set<string>, selectedItems: Array<Item>): void;
    renderAs(el: Element, definition: FlexibleRenderDefinition): void;
    renderAction(actionId: string, action: IActionDescriptor, options: IActionPanelOptions): HTMLDivElement;
    render(): void;
}
export default ActionPanel;
