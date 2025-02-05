declare const _default: {
    title: string;
    args: {
        disabled: boolean;
        size: string;
        success: boolean;
        label: string;
        placeholder: string;
        error: boolean;
        caption: string;
        required: boolean;
        optional: boolean;
        icon: string;
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
        icon: {
            options: any[];
            control: {
                type: string;
            };
        };
        name: {
            description: string;
        };
        maxlength: {
            description: string;
            control: {
                type: string;
            };
        };
        ifxInput: {
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
