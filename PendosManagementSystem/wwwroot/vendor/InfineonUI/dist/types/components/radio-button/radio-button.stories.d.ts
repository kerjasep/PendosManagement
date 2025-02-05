declare const _default: {
    title: string;
    args: {
        error: boolean;
        disabled: boolean;
        value: boolean;
        size: string;
        label: string;
        name: string;
    };
    argTypes: {
        ifxChange: {
            description: string;
            table: {
                type: {
                    summary: string;
                    detail: string;
                };
            };
            action: string;
        };
        size: {
            description: string;
            options: string[];
            control: {
                type: string;
            };
        };
        name: {
            description: string;
        };
    };
};
export default _default;
export declare const Default: any;
