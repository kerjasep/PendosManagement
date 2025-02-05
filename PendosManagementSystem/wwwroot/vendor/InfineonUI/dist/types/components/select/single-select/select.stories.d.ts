declare const _default: {
    title: string;
    args: {
        size: string;
        showSearch: boolean;
        searchPlaceholderValue: string;
        placeholder: boolean;
        placeholderValue: string;
        error: boolean;
        errorMessage: string;
        label: string;
        disabled: boolean;
    };
    argTypes: {
        size: {
            options: {
                'small (36px)': string;
                'medium (40px)': string;
            };
            control: {
                type: string;
            };
        };
        placeholder: {
            options: boolean[];
            control: {
                type: string;
            };
        };
        placeholderValue: {
            control: string;
        };
        error: {
            options: boolean[];
            control: {
                type: string;
            };
        };
        errorMessage: {
            control: string;
        };
        label: {
            control: string;
        };
        disabled: {
            options: boolean[];
            control: {
                type: string;
            };
        };
        showSearch: {
            options: boolean[];
            control: {
                type: string;
            };
        };
        searchPlaceholderValue: {
            control: {
                type: string;
            };
        };
        options: {
            description: string;
        };
        ifxSelect: {
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
export declare const Single: any;
