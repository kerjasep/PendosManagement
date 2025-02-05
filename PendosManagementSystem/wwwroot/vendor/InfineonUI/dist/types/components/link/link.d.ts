export declare class Link {
    href: string;
    target: string;
    variant: string;
    size: string;
    disabled: boolean;
    internalHref: string;
    internalTarget: string;
    internalVariant: string;
    setInternalStates(): void;
    componentWillRender(): void;
    render(): any;
    getSizeClass(): "" | "large" | "small" | "medium" | "extraLarge";
    getVariantClass(): "title" | "menu" | "bold" | "underlined";
    linkClassNames(): string;
}
