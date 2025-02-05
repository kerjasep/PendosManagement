declare const _default: {
    title: string;
    tags: string[];
    args: {
        header: string;
        text: string;
        position: string;
        variant: string;
        icon: string;
    };
    argTypes: {
        icon: {
            options: any[];
            control: {
                type: string;
            };
        };
        position: {
            options: string[];
            control: {
                type: string;
            };
        };
        variant: {
            options: string[];
            control: {
                type: string;
            };
        };
        header: {
            control: string;
            if: {
                arg: string;
                neq: string;
            };
        };
    };
};
export default _default;
export declare const Default: any;
