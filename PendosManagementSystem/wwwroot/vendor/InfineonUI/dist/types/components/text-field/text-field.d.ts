import { EventEmitter } from '../../stencil-public-runtime';
export declare class TextField {
    private inputElement;
    el: any;
    placeholder: string;
    value: string;
    error: boolean;
    label: string;
    icon: string;
    caption: string;
    size: string;
    required: boolean;
    optional: boolean;
    success: boolean;
    disabled: boolean;
    maxlength?: number;
    ifxInput: EventEmitter<String>;
    internals: ElementInternals;
    valueWatcher(newValue: string): void;
    reset(): Promise<void>;
    handleInput(): void;
    formResetCallback(): void;
    render(): any;
}
