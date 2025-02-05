declare const _default: {
    title: string;
    args: {
        icon: boolean;
        applicationName: string;
        showFooter: boolean;
        showHeader: boolean;
        initialCollapse: boolean;
        termsOfUse: string;
        imprint: string;
        privacyPolicy: string;
        copyrightText: string;
    };
    argTypes: {
        ifxSidebarNavigationItem: {
            action: string;
            description: string;
        };
        ifxSidebarActionItem: {
            action: string;
            description: string;
        };
        ifxSidebarMenu: {
            action: string;
            description: string;
        };
        imprint: {
            if: {
                arg: string;
                eq: boolean;
            };
        };
        termsOfUse: {
            if: {
                arg: string;
                eq: boolean;
            };
        };
        privacyPolicy: {
            if: {
                arg: string;
                eq: boolean;
            };
        };
    };
};
export default _default;
export declare const Default: any;
export declare const WithSubmenu: any;
export declare const WithNumberIndicator: any;
