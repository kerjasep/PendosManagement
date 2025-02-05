import { FirstDataRenderedEvent, GridOptions } from 'ag-grid-community';
export declare class Table {
    gridOptions: GridOptions;
    cols: any[] | string;
    rows: any[] | string;
    columnDefs: any[];
    rowData: any[];
    rowHeight: string;
    uniqueKey: string;
    tableHeight: string;
    componentWillLoad(): void;
    onFirstDataRendered(params: FirstDataRenderedEvent): void;
    componentWillUpdate(): void;
    componentDidLoad(): void;
    render(): any;
}
