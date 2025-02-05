declare const _default: {
    title: string;
    tags: string[];
    args: {
        direction: string;
        overline: string;
        headline: string;
        description: string;
        button: string;
        href: string;
        target: string;
        position: string;
        src: string;
    };
    argTypes: {
        button: {
            options: string[];
            control: {
                type: string;
            };
        };
        direction: {
            options: string[];
            control: {
                type: string;
            };
        };
        position: {
            options: string[];
            control: {
                type: string;
            };
            if: {
                arg: string;
                eq: string;
            };
        };
        target: {
            options: string[];
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const Default: any;
export declare const Horizontal: any;
