// dropdown-menu.tsx
import { h } from "@stencil/core";
export class DropdownMenu {
    constructor() {
        this.isOpen = false;
        this.size = 'l';
        this.hideTopPadding = false;
        this.filteredItems = [];
    }
    handleMenuFilter(event) {
        const searchValue = event.detail;
        this.filterDropdownItems(searchValue);
    }
    handleDropdownItemValueEmission(event) {
        this.ifxDropdownMenuItem.emit(event.detail);
    }
    filterDropdownItems(searchValue) {
        const allItems = Array.from(this.el.querySelectorAll('ifx-dropdown-item'));
        let dropdownItem, txtValue;
        let query = searchValue.toUpperCase();
        for (let i = 0; i < allItems.length; i++) {
            dropdownItem = allItems[i];
            txtValue = dropdownItem.textContent || dropdownItem.innerText;
            if (txtValue.toUpperCase().indexOf(query) > -1) {
                dropdownItem.setAttribute('hide', false);
            }
            else {
                dropdownItem.setAttribute('hide', true);
            }
        }
    }
    componentWillUpdate() {
        this.menuSize.emit(this.size);
    }
    componentWillLoad() {
        this.filteredItems = Array.from(this.el.querySelectorAll('ifx-dropdown-item'));
        const searchField = this.el.querySelector('ifx-search-field');
        const dropdownHeader = this.el.querySelector('ifx-dropdown-header');
        if (searchField || dropdownHeader) {
            this.hideTopPadding = true;
        }
        else
            this.hideTopPadding = false;
    }
    render() {
        return (h("div", { key: '24583268df1fced1b9346399e0b97f8a2ff4259b', class: `dropdown-menu 
      ${this.isOpen ? 'show' : ''} 
      ${this.hideTopPadding ? 'hideTopPadding' : ""}
      ${this.size === 's' ? 'small' : ""}` }, h("slot", { key: '7497285c6cb5c7540a0588e6a594efd1900227d8' })));
    }
    static get is() { return "ifx-dropdown-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dropdown-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dropdown-menu.css"]
        };
    }
    static get properties() {
        return {
            "isOpen": {
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
                "attribute": "is-open",
                "reflect": false,
                "defaultValue": "false"
            },
            "size": {
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
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'l'"
            }
        };
    }
    static get states() {
        return {
            "hideTopPadding": {},
            "filteredItems": {}
        };
    }
    static get events() {
        return [{
                "method": "menuSize",
                "name": "menuSize",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "ifxDropdownMenuItem",
                "name": "ifxDropdownMenuItem",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "CustomEvent",
                    "resolved": "CustomEvent<any>",
                    "references": {
                        "CustomEvent": {
                            "location": "global",
                            "id": "global::CustomEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "ifxInput",
                "method": "handleMenuFilter",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "ifxDropdownItem",
                "method": "handleDropdownItemValueEmission",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=dropdown-menu.js.map
