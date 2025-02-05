import { EventEmitter } from '../../stencil-public-runtime';
export declare class RadioButton {
    el: any;
    disabled: boolean;
    value: boolean;
    error: boolean;
    size: "s" | "m";
    internalValue: boolean;
    hasSlot: boolean;
    ifxChange: EventEmitter;
    internals: ElementInternals;
    valueChanged(newValue: boolean, oldValue: boolean): void;
    componentWillLoad(): void;
    handleRadioButtonClick(): void;
    formResetCallback(): void;
    render(): any;
}
