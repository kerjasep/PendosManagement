export declare class IconButton {
    variant: 'primary' | 'secondary' | 'tertiary';
    size: string;
    disabled: boolean;
    icon: string;
    href: string;
    target: string;
    shape: string;
    el: any;
    private focusableElement;
    setFocus(): Promise<void>;
    componentWillLoad(): void;
    render(): any;
    getVariantClass(): "primary" | "secondary" | "tertiary";
    getSizeClass(): "" | "s" | "xs" | "l";
    getClassNames(): string;
}
