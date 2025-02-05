import { h } from "@stencil/core";
import { Grid } from "ag-grid-community";
export class Table {
    constructor() {
        this.gridOptions = undefined;
        this.cols = undefined;
        this.rows = undefined;
        this.columnDefs = [];
        this.rowData = [];
        this.rowHeight = 'default';
        this.uniqueKey = undefined;
        this.tableHeight = 'auto';
    }
    componentWillLoad() {
        this.uniqueKey = `unique-${Math.floor(Math.random() * 1000000)}`;
        if (typeof this.rows === 'string' && typeof this.cols === 'string') {
            try {
                this.columnDefs = JSON.parse(this.cols);
                this.rowData = JSON.parse(this.rows);
            }
            catch (err) {
                console.error('Failed to parse input:', err);
            }
        }
        else if ((Array.isArray(this.rows) || typeof this.rows === 'object') && (Array.isArray(this.cols) || typeof this.cols === 'object')) {
            this.columnDefs = this.cols;
            this.rowData = this.rows;
        }
        else {
            console.error('Unexpected value for cols and rows:', this.rows, this.cols);
        }
        this.gridOptions = {
            rowHeight: this.rowHeight === 'default' ? 40 : 32,
            headerHeight: 40,
            defaultColDef: {
                resizable: true,
            },
            suppressCellFocus: true,
            suppressDragLeaveHidesColumns: true,
            suppressRowHoverHighlight: true,
            onFirstDataRendered: this.onFirstDataRendered,
            columnDefs: this.columnDefs,
            rowData: this.rowData,
            icons: {
                sortAscending: '<ifx-icon icon="arrowtriangleup16"></ifx-icon>',
                sortDescending: '<ifx-icon icon="arrowtriangledown16"></ifx-icon>',
                sortUnSort: '<a class="unsort-icon-custom-color"><ifx-icon icon="arrowtrianglevertikal16"></ifx-icon></a>'
            },
            rowDragManaged: this.columnDefs.some(col => col.dndSource === true) ? true : false,
            animateRows: this.columnDefs.some(col => col.dndSource === true) ? true : false,
        };
        // console.log("grid options ", this.gridOptions);
    }
    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
    }
    componentWillUpdate() {
        this.gridOptions.columnDefs = this.columnDefs;
        this.gridOptions.rowData = this.rowData;
        if (this.gridOptions.api) {
            this.gridOptions.api.setRowData(this.rowData);
            this.gridOptions.api.setColumnDefs(this.columnDefs);
        }
    }
    componentDidLoad() {
        new Grid(document.getElementById(`ifxTable-${this.uniqueKey}`), this.gridOptions);
        if (this.gridOptions.api) {
            this.gridOptions.api.sizeColumnsToFit();
        }
    }
    render() {
        return (h("div", { key: '149091b4d0233b73f112d091fee5727fc99d43e0', id: "grid-wrapper", class: { 'auto-height': this.tableHeight === 'auto' ? true : false } }, h("div", { key: '85ac4545c487e2e26317bdf8fe32f6896cd04ed4', id: `ifxTable-${this.uniqueKey}`, class: "ifx-ag-grid ag-theme-alpine", style: {
                'height': `${this.tableHeight}`, width: '100%'
            } })));
    }
    static get is() { return "ifx-basic-table"; }
    static get originalStyleUrls() {
        return {
            "$": ["table.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["table.css"]
        };
    }
    static get properties() {
        return {
            "cols": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "any[] | string",
                    "resolved": "any[] | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "cols",
                "reflect": false
            },
            "rows": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "any[] | string",
                    "resolved": "any[] | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "rows",
                "reflect": false
            },
            "columnDefs": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "any[]",
                    "resolved": "any[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "[]"
            },
            "rowData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "any[]",
                    "resolved": "any[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "[]"
            },
            "rowHeight": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "row-height",
                "reflect": false,
                "defaultValue": "'default'"
            },
            "uniqueKey": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "unique-key",
                "reflect": false
            },
            "tableHeight": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "table-height",
                "reflect": false,
                "defaultValue": "'auto'"
            }
        };
    }
    static get states() {
        return {
            "gridOptions": {}
        };
    }
}
//# sourceMappingURL=table.js.map
