import { EventEmitter } from '../../stencil-public-runtime';
type CloseEventTrigger = 'CLOSE_BUTTON' | 'ESCAPE_KEY' | 'BACKDROP';
export interface BeforeCloseEventDetail {
    trigger: CloseEventTrigger;
}
export declare class IfxModal {
    opened?: boolean;
    showModal: boolean;
    caption: string;
    closeOnOverlayClick: boolean;
    ifxModalOpen: EventEmitter;
    ifxModalClose: EventEmitter;
    variant: 'default' | 'alert-brand' | 'alert-danger';
    size: 's' | 'm' | 'l';
    alertIcon: string;
    okButtonLabel: string;
    cancelButtonLabel: string;
    hostElement: HTMLElement;
    slotButtonsPresent: boolean;
    showCloseButton: boolean;
    private modalContainer;
    private focusableElements;
    private closeButton;
    componentDidLoad(): void;
    getFirstFocusableElement(): HTMLElement | null;
    getLastFocusableElement(): HTMLElement | null;
    handleTopFocus: () => void;
    handleBottomFocus: () => void;
    attemptFocus(element: HTMLElement | null): void;
    open(): void;
    close(): void;
    handleKeypress: (event: KeyboardEvent) => void;
    doBeforeClose(trigger: CloseEventTrigger): void;
    openedChanged(newValue: any): void;
    handleOverlayClick(): void;
    handleButtonsSlotChange(e: any): void;
    render(): any;
}
export {};
