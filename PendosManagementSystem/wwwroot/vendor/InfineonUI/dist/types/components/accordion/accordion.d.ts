export declare class Accordion {
    el: HTMLElement;
    autoCollapse: boolean;
    onItemOpen(event: CustomEvent): Promise<void>;
    render(): any;
}
