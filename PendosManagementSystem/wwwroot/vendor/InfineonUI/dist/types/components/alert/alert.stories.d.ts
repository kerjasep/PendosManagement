declare const _default: {
    title: string;
    tags: string[];
    args: {
        label: string;
        variant: string;
        showIcon: boolean;
        closable: boolean;
        iconName: string;
    };
    argTypes: {
        variant: {
            options: string[];
            control: {
                type: string;
            };
        };
        iconName: {
            options: any[];
            control: {
                type: string;
            };
        };
        closable: {
            control: string;
            default: boolean;
        };
        ifxClose: {
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
export declare const Info: any;
