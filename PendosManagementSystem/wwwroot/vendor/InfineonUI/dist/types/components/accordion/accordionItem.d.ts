import { EventEmitter } from '../../stencil-public-runtime';
export declare class IfxAccordionItem {
    caption: string;
    open: boolean;
    initialCollapse: boolean;
    internalOpen: boolean;
    ifxItemOpen: EventEmitter;
    ifxItemClose: EventEmitter;
    private contentEl;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    openChanged(newValue: boolean): void;
    toggleOpen(): void;
    openAccordionItem(): void;
    handleSlotChange(e: any): void;
    render(): any;
}
