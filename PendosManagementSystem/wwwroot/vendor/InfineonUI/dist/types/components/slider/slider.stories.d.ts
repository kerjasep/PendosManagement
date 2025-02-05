declare const _default: {
    title: string;
    component: string;
    tags: string[];
    argTypes: {
        min: {
            control: string;
        };
        max: {
            control: string;
        };
        step: {
            control: string;
        };
        type: {
            control: string;
            options: string[];
        };
        value: {
            control: string;
            if: {
                arg: string;
                eq: string;
            };
        };
        minValueHandle: {
            control: string;
            if: {
                arg: string;
                eq: string;
            };
        };
        maxValueHandle: {
            control: string;
            if: {
                arg: string;
                eq: string;
            };
        };
        showPercentage: {
            control: string;
            if: {
                arg: string;
                eq: string;
            };
        };
        disabled: {
            control: string;
        };
        leftIcon: {
            options: any[];
            control: {
                type: string;
            };
        };
        rightIcon: {
            options: any[];
            control: {
                type: string;
            };
        };
        leftText: {
            control: string;
        };
        rightText: {
            control: string;
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
    };
};
export default _default;
export declare const Default: any;
export declare const WithPercentageDisplay: any;
export declare const WithIcons: any;
export declare const WithTexts: any;
export declare const Disabled: any;
