declare const _default: {
    title: string;
    args: {
        tableHeight: string;
        rowHeight: number;
    };
    argTypes: {
        tableHeight: {
            table: {
                type: {
                    summary: string;
                    detail: string;
                };
            };
        };
        rowHeight: {
            options: string[];
            control: {
                type: string;
            };
        };
        columnDefs: {
            table: {
                type: {
                    summary: string;
                    detail: string;
                };
            };
        };
        rowData: {
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
export declare const FixedHeight: any;
