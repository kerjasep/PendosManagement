import { h } from "@stencil/core";
import classNames from "classnames";
export class SearchField {
    constructor() {
        this.handleInput = () => {
            const query = this.inputElement.value;
            this.value = query; // update the value property when input changes
            this.ifxInput.emit(this.value);
        };
        this.handleDelete = () => {
            this.inputElement.value = '';
            this.value = "";
            this.ifxInput.emit(null);
        };
        this.value = '';
        this.insideDropdown = false;
        this.showDeleteIcon = false;
        this.showDeleteIconInternalState = false;
        this.disabled = false;
        this.size = 'l';
        this.isFocused = false;
        this.placeholder = "Search...";
        this.maxlength = null;
    }
    handleOutsideClick(event) {
        const path = event.composedPath();
        if (!path.includes(this.inputElement)) {
            this.isFocused = false;
        }
    }
    valueWatcher(newValue) {
        if (newValue !== this.inputElement.value) {
            this.inputElement.value = newValue;
        }
    }
    focusInput() {
        this.inputElement.focus();
        this.isFocused = true;
    }
    componentWillUpdate() {
        if (this.value !== "") {
            this.showDeleteIconInternalState = true;
        }
        else
            this.showDeleteIconInternalState = false;
    }
    render() {
        return (h("div", { key: '95eb84292a2d29de7767b23cf32c40e472c702c3', "aria-label": "a search field for user input", "aria-disabled": this.disabled, "aria-value": this.value, class: 'search-field' }, h("div", { key: '0494c89f3f7612f850a7a55620ec7c72585a4cfc', class: this.getWrapperClassNames(), tabindex: 1, onFocus: () => this.focusInput(), onClick: () => this.focusInput() }, h("ifx-icon", { key: '938168431dd311ab8c5d29c78607adbd341f527f', icon: "search-16", class: "search-icon" }), h("input", { key: '76964feb15f545d3d2e27b17e42b3068d1265e15', ref: (el) => (this.inputElement = el), type: "text", onInput: () => this.handleInput(), placeholder: this.placeholder, disabled: this.disabled, maxlength: this.maxlength, value: this.value }), this.showDeleteIcon && this.showDeleteIconInternalState ? (h("ifx-icon", { icon: "cremove16", class: "delete-icon", onClick: this.handleDelete })) : null)));
    }
    getSizeClass() {
        return `${this.size}` === "s"
            ? "search-field__wrapper-s"
            : "";
    }
    getWrapperClassNames() {
        return classNames(`search-field__wrapper`, `search-field__wrapper ${this.getSizeClass()}`, `${this.isFocused ? 'focused' : ""}`);
    }
    static get is() { return "ifx-search-field"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["search-field.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["search-field.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "mutable": true,
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
                "attribute": "value",
                "reflect": false,
                "defaultValue": "''"
            },
            "showDeleteIcon": {
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
                "attribute": "show-delete-icon",
                "reflect": false,
                "defaultValue": "false"
            },
            "disabled": {
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
                "attribute": "disabled",
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
            },
            "placeholder": {
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
                "attribute": "placeholder",
                "reflect": false,
                "defaultValue": "\"Search...\""
            },
            "maxlength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "maxlength",
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "insideDropdown": {},
            "showDeleteIconInternalState": {},
            "isFocused": {}
        };
    }
    static get events() {
        return [{
                "method": "ifxInput",
                "name": "ifxInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "String",
                    "resolved": "String",
                    "references": {
                        "String": {
                            "location": "global",
                            "id": "global::String"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "valueWatcher"
            }];
    }
    static get listeners() {
        return [{
                "name": "mousedown",
                "method": "handleOutsideClick",
                "target": "document",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=search-field.js.map
