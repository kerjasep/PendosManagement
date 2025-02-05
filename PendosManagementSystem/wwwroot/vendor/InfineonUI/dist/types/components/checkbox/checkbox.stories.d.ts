declare const _default: {
    title: string;
    tags: string[];
    args: {
        error: boolean;
        disabled: boolean;
        value: boolean;
        label: string;
        size: string;
        indeterminate: boolean;
        name: string;
    };
    argTypes: {
        size: {
            description: string;
            options: string[];
            control: {
                type: string;
            };
        };
        ifxChange: {
            action: string;
            description: string;
            table: {
                type: {
                    summary: string;
                    detail: string;
                };
            };
        };
        name: {
            description: string;
        };
    };
};
export default _default;
export declare const Default: any;
