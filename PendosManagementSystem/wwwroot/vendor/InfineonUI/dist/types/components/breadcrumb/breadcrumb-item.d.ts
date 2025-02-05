export declare class BreadcrumbItem {
    isLastItem: boolean;
    el: any;
    private emittedElement;
    handleOutsideClick(event: MouseEvent): void;
    getDropdownMenu(): any;
    menuWrapperEventReEmitter(event: CustomEvent<HTMLElement>): void;
    getMenuIconWrapper(): HTMLElement | undefined;
    handleClassList(el: any, type: any, className: any): void;
    closeDropdownMenu(): void;
    toggleDropdownMenu(): void;
    handleLastItem(): void;
    componentWillLoad(): void;
    componentDidUpdate(): void;
    componentDidLoad(): void;
    render(): any;
}
