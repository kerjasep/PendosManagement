declare const _default: {
    title: string;
    component: string;
    args: {
        opened: boolean;
    };
    argTypes: {
        caption: {
            control: string;
            description: string;
        };
        opened: {
            control: {
                disable: boolean;
            };
            table: {
                type: {
                    summary: string;
                    detail: string;
                };
            };
            description: string;
        };
        closeOnOverlayClick: {
            control: string;
            description: string;
        };
        showCloseButton: {
            control: string;
            description: string;
        };
        alertIcon: {
            options: string[];
            control: {
                type: string;
            };
            description: string;
        };
        size: {
            options: string[];
            control: {
                type: string;
            };
            description: string;
        };
        variant: {
            options: string[];
            control: {
                type: string;
            };
        };
        ifxModalOpen: {
            action: string;
            description: string;
            table: {
                type: {
                    summary: string;
                    detail: string;
                };
            };
        };
        ifxModalClose: {
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
export declare const Alert: any;
