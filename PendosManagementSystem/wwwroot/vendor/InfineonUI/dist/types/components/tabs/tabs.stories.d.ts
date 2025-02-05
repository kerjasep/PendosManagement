declare const _default: {
    title: string;
    tags: string[];
    component: string;
    argTypes: {
        amountOfTabs: {
            name: string;
            control: string;
        };
        orientation: {
            name: string;
            options: string[];
            control: {
                type: string;
            };
        };
        icon: {
            name: string;
            control: {
                type: string;
            };
        };
        iconPosition: {
            name: string;
            options: string[];
            control: {
                type: string;
            };
            if: {
                arg: string;
                eq: boolean;
            };
        };
        activeTabIndex: {
            name: string;
            description: string;
        };
        ifxTabChange: {
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
export declare const Disabled: any;
