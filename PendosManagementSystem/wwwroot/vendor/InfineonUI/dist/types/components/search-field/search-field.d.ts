import { EventEmitter } from '../../stencil-public-runtime';
export declare class SearchField {
    private inputElement;
    value: string;
    ifxInput: EventEmitter<String>;
    insideDropdown: boolean;
    showDeleteIcon: boolean;
    showDeleteIconInternalState: boolean;
    disabled: boolean;
    size: string;
    isFocused: boolean;
    placeholder: string;
    maxlength?: number;
    handleOutsideClick(event: MouseEvent): void;
    valueWatcher(newValue: string): void;
    handleInput: () => void;
    handleDelete: () => void;
    focusInput(): void;
    componentWillUpdate(): void;
    render(): any;
    getSizeClass(): "" | "search-field__wrapper-s";
    getWrapperClassNames(): string;
}
