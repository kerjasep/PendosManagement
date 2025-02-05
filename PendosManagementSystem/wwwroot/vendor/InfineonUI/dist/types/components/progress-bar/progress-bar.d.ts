export declare class ProgressBar {
    value: number;
    size: string;
    showLabel: boolean;
    internalValue: number;
    valueChanged(newValue: number, oldValue: number): void;
    componentWillLoad(): void;
    render(): any;
}
