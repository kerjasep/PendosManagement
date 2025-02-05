declare const _default: {
    title: string;
    tags: string[];
    args: {
        disabled: boolean;
        size: string;
        success: boolean;
        error: boolean;
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
        name: {
            description: string;
        };
        ifxDate: {
            action: string;
            description: string;
            table: {
                type: {
                    summary: string;
                    detail: string;
                };
            };
        };
    };
};
export default _default;
export declare const Default: any;
