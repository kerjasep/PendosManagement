export declare class Card {
    el: any;
    noBtns: boolean;
    direction: 'horizontal' | 'vertical';
    alignment: string;
    noImg: boolean;
    href: string;
    internalHref: string;
    target: string;
    setImgPosition(event: any): void;
    handleComponentAdjustment(): void;
    handleClassList(el: any, type: any, className: any): void;
    handleHovering(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private addEventListenersToHandleCustomFocusState;
    componentWillUpdate(): void;
    render(): any;
}
