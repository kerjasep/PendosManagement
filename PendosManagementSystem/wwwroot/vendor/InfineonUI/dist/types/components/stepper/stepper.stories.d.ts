declare const _default: {
    title: string;
    args: {
        activeStep: number;
        amountOfSteps: number;
        errorStep: number;
        indicatorPosition: string;
        showStepNumber: boolean;
        variant: string;
    };
    argTypes: {
        activeStep: {
            control: {
                type: string;
                min: number;
            };
            description: string;
            table: {
                defaultValue: {
                    summary: number;
                };
            };
        };
        amountOfSteps: {
            name: string;
            control: string;
            description: string;
        };
        completeStep: {
            name: string;
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
                type: {
                    summary: string;
                };
            };
        };
        errorStep: {
            name: string;
            control: string;
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        indicatorPosition: {
            control: string;
            defaultValue: {
                summary: string;
            };
            description: string;
            options: string[];
            if: {
                arg: string;
                eq: string;
            };
        };
        showStepNumber: {
            control: string;
            defaultValue: {
                summary: string;
            };
            description: string;
            if: {
                arg: string;
                eq: string;
            };
        };
        variant: {
            options: string[];
            defaultValue: {
                summary: string;
            };
            description: string;
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
export declare const Compact: any;
