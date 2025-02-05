import { EventEmitter } from '../../stencil-public-runtime';
export declare class Checkbox {
    private inputElement;
    el: any;
    disabled: boolean;
    value: boolean;
    error: boolean;
    size: string;
    internalValue: boolean;
    indeterminate: boolean;
    internalIndeterminate: boolean;
    internals: ElementInternals;
    ifxChange: EventEmitter;
    handleCheckbox(): void;
    toggleCheckedState(newVal: boolean): Promise<void>;
    valueChanged(newValue: boolean, oldValue: boolean): void;
    indeterminateChanged(newValue: boolean, oldValue: boolean): void;
    handleKeydown(event: any): void;
    componentWillLoad(): void;
    componentDidRender(): void;
    /**
     * Callback for form association.
     * Called whenever the form is reset.
     */
    formResetCallback(): void;
    getCheckedClassName(): "" | "error" | "checked error" | "checked";
    render(): any;
}
