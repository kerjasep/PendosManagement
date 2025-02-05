export declare class Tooltip {
    el: HTMLElement;
    tooltipVisible: boolean;
    header: string;
    text: string;
    position: 'bottom-start' | 'top-start' | 'left' | 'bottom-end' | 'top-end' | 'right' | 'bottom' | 'top' | 'auto';
    internalPosition: 'bottom-start' | 'top-start' | 'left' | 'bottom-end' | 'top-end' | 'right' | 'bottom' | 'top' | 'auto';
    variant: 'compact' | 'dismissible' | 'extended';
    icon: string;
    tooltipEl: HTMLElement;
    referenceEl: HTMLElement;
    popperInstance: any;
    componentWillLoad(): void;
    componentDidLoad(): void;
    initializePopper(): void;
    determineBestPosition(): "left" | "right" | "bottom-start" | "top" | "top-start" | "top-end" | "bottom" | "bottom-end";
    positionChanged(newVal: any): void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    disconnectedCallback(): void;
    onClick: () => void;
    onDismissClick: () => void;
    render(): any;
}
