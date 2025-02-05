import { h } from "@stencil/core";
import { Grid } from "ag-grid-community";
import { ButtonCellRenderer } from "./buttonCellRenderer";
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
        this.pagination = false;
        this.paginationPageSize = 10;
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
        this.setButtonRenderer();
        this.gridOptions = {
            rowHeight: this.rowHeight === 'default' ? 40 : 32,
            headerHeight: 40,
            defaultColDef: {
                resizable: true,
            },
            suppressDragLeaveHidesColumns: true,
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
            pagination: this.pagination,
            paginationPageSize: this.paginationPageSize,
        };
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
        // if (this.gridOptions.rowDragManaged) {
        //   // console.log("draggable table render")
        // }
        return (h("div", { key: 'cca0e7344be4b18d9fdc3dddfb24d91e5fbc2bbd', id: "grid-wrapper", class: { 'auto-height': this.tableHeight === 'auto' ? true : false } }, h("div", { key: '0276fd71e420e47379b03f435ad45725ad9e6122', id: `ifxTable-${this.uniqueKey}`, class: "ag-theme-alpine", style: {
                'height': `${this.tableHeight}`, width: '100%'
            } })));
    }
    hasButtonCol() {
        return this.columnDefs.some(column => column.field === 'button');
    }
    setButtonRenderer() {
        const buttonColumn = this.columnDefs.find(column => column.field === 'button');
        if (buttonColumn) {
            buttonColumn.cellRenderer = ButtonCellRenderer;
        }
    }
    // setIconButtonRenderer() {
    //   const iconButtonColumn = this.columnDefs.find(column => column.field === 'iconButton');
    //   if (iconButtonColumn) {
    //     iconButtonColumn.cellRenderer = IconButtonCellRenderer;
    //   }
    // }
    // setLinkRenderer() {
    //   const linkColumn = this.columnDefs.find(column => column.field === 'link');
    //   if (linkColumn) {
    //     linkColumn.cellRenderer = LinkCellRenderer;
    //   }
    // }
    onDragOver(event) {
        var dragSupported = event.dataTransfer.length;
        if (dragSupported) {
            event.dataTransfer.dropEffect = 'move';
        }
        event.preventDefault();
    }
    onDrop(event) {
        var jsonData = event.dataTransfer.getData('application/json');
        var eJsonRow = document.createElement('div');
        eJsonRow.classList.add('json-row');
        eJsonRow.innerText = jsonData;
        var eJsonDisplay = document.querySelector('#eJsonDisplay');
        eJsonDisplay.appendChild(eJsonRow);
        event.preventDefault();
    }
    static get is() { return "ifx-table"; }
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
            },
            "pagination": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "pagination",
                "reflect": false,
                "defaultValue": "false"
            },
            "paginationPageSize": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "pagination-page-size",
                "reflect": false,
                "defaultValue": "10"
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
