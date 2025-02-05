import { Event, EventEmitter } from '../../../stencil-public-runtime';
import { Option } from './interfaces';
export declare class Multiselect {
    options: any[] | string;
    batchSize: number;
    size: string;
    disabled: boolean;
    error: boolean;
    internalError: boolean;
    errorMessage: string;
    internalErrorMessage: string;
    label: string;
    persistentSelectedOptions: Option[];
    placeholder: string;
    dropdownOpen: boolean;
    dropdownFlipped: boolean;
    maxItemCount: number;
    zIndex: number;
    static globalZIndex: number;
    private currentIndex;
    isLoading: boolean;
    loadedOptions: Option[];
    filteredOptions: Option[];
    showSearch: boolean;
    showSelectAll: boolean;
    optionCount: number;
    optionsProcessed: boolean;
    ifxSelect: EventEmitter;
    ifxMultiselectIsOpen: EventEmitter;
    el: HTMLElement;
    dropdownElement: HTMLElement;
    loadInitialOptions(): Promise<void>;
    fetchMoreOptions(): Promise<void>;
    handleScroll(event: UIEvent): void;
    fetchOptions(startIndex: number, count: number): Promise<Option[]>;
    /**
     * Collects and returns all options that are selected.
     * When the parent is selected, then the value of the children will be overriden with selected as well.
     * It will only collect the leaves of the tree.
     *
     * @param options A list of options.
     * @returns A list with all selected options
     */
    private collectSelectedOptions;
    /**
     * Collects all leaf children options.
     *
     * @param option A list with all leaf-children.
     */
    private collectLeafOptions;
    /**
     * Count the number of options. Only counts the leaves of the options tree.
     */
    countOptions(options: Option[]): number;
    handleSearch: (...args: any[]) => void;
    componentDidLoad(): void;
    componentWillLoad(): void;
    updateInternalError(): void;
    updateInternalErrorMessage(): void;
    loadedOptionsChanged(): void;
    handleOptionClick(option: Option): void;
    isSelectionLimitReached(option: Option): boolean;
    updateSelection(option: Option): void;
    selectAll(): Promise<void>;
    private selectAllRecursive;
    handleParentOptionClick(option: Option): void;
    handleChildOptionClick(option: Option, wasSelected: boolean): void;
    updateParentSelectedState(): void;
    handleDocumentClick: (event: Event) => void;
    getSizeClass(): "small-select" | "medium-select";
    toggleDropdown(): void;
    waitForElement(querySelectorFunc: Function, callback: Function, maxTries?: number): void;
    handleKeyDown(event: KeyboardEvent): void;
    handleWrapperClick(event: MouseEvent): void;
    clearSelection(): void;
    positionDropdown(): void;
    private updateHighlightedOption;
    private handleArrowDown;
    private handleArrowUp;
    handleOptionKeyDown(e: KeyboardEvent, option: Option): void;
    renderOption(option: Option, index: number): any;
    isOptionSelected(option: Option): boolean;
    isOptionIndeterminate(option: Option): boolean;
    findInOptions(options: Option[], searchTerm: string): Option | null;
    renderSubOption(option: Option, index: string): any;
    private renderSelectAll;
    render(): any;
}
