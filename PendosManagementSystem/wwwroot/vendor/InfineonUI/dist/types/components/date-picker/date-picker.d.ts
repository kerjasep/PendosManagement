import { EventEmitter } from '../../stencil-public-runtime';
export declare class DatePicker {
    el: HTMLElement;
    size: string;
    error: boolean;
    success: boolean;
    disabled: boolean;
    internals: ElementInternals;
    ifxDate: EventEmitter;
    getDate(e: any): void;
    handleInputFocusOnIconClick(): void;
    getBrowser(): "Chrome" | "Opera" | "IE" | "Firefox" | "unknown";
    setFireFoxClasses(): void;
    componentDidLoad(): void;
    /**
     * Callback for form association.
     * Called whenever the form is reset.
     */
    formResetCallback(): void;
    render(): any;
}
