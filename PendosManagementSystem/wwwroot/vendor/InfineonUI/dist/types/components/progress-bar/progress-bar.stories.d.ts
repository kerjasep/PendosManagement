declare const _default: {
    title: string;
    tags: string[];
    args: {
        size: string;
        percentage: number;
        showLabel: boolean;
    };
    argTypes: {
        percentage: {
            control: {
                type: string;
                min: number;
                max: number;
            };
        };
        size: {
            description: string;
            options: string[];
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const Default: any;
export declare const Small: any;
export declare const WithLabel: any;
