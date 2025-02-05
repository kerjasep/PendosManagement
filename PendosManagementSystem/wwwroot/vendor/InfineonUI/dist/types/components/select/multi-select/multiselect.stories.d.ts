declare const _default: {
    title: string;
    args: {
        size: string;
        batchSize: number;
        maxItemCount: number;
        showSearch: boolean;
        showSelectAll: boolean;
        error: boolean;
        errorMessage: string;
        label: string;
        disabled: boolean;
        placeholder: string;
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
        batchSize: {
            description: string;
            control: {
                type: string;
            };
        };
        maxItemCount: {
            control: {
                type: string;
            };
            description: string;
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
        showSelectAll: {
            description: string;
            options: boolean[];
            control: {
                type: string;
            };
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
        placeholder: {
            control: string;
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
export declare const Default: any;
export declare const WithLazyLoading: any;
