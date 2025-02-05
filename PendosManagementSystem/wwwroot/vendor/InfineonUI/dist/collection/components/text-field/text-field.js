import { h } from "@stencil/core";
export class TextField {
    constructor() {
        this.placeholder = "Placeholder";
        this.value = '';
        this.error = false;
        this.label = "";
        this.icon = "";
        this.caption = "";
        this.size = 'm';
        this.required = false;
        this.optional = false;
        this.success = false;
        this.disabled = false;
        this.maxlength = undefined;
    }
    valueWatcher(newValue) {
        if (newValue !== this.inputElement.value) {
            this.inputElement.value = newValue;
        }
    }
    async reset() {
        this.value = '';
        this.inputElement.value = '';
    }
    handleInput() {
        const query = this.inputElement.value;
        this.value = query; // update the value property when input changes
        this.internals.setFormValue(query); // update form value
        this.ifxInput.emit(this.value);
    }
    formResetCallback() {
        this.internals.setValidity({});
        this.internals.setFormValue("");
    }
    render() {
        return (h("div", { key: '765903be73fed4206aeb538d4642fea5a2091920', "aria-label": "a text field for user input", "aria-value": this.value, "aria-disabled": this.disabled, class: `textInput__container ${this.disabled ? 'disabled' : ""}` }, h("div", { key: 'eaaa7ae95a53eee509b624ba9b9cca961e0c34e4', class: "textInput__top-wrapper" }, h("label", { key: '09169382963601eb4dd7f563fa34d15dbb3bdaa0', htmlFor: "text-field" }, h("slot", { key: 'e20c3c6870fb950860bb22d50e06f6c180ac3ec6' }), this.optional && this.required ? (h("span", { class: "optional-required" }, "(optional) *")) : this.optional ? (h("span", { class: "optional" }, "(optional)")) : this.required ? (h("span", { class: "required" }, "*")) : null)), h("div", { key: '06f4f00ec31d5a5af403d20442046ee1a31aaa34', class: "textInput__bottom-wrapper" }, h("div", { key: 'a9833f5720bd8aae9cb2bab6d803a96fb6bab76f', class: "input-container" }, this.icon && (h("ifx-icon", { icon: this.icon })), h("input", { key: 'ef787cb590470fa91c67f2418d00ce6a94d41c64', ref: (el) => (this.inputElement = el), disabled: this.disabled, type: "text", id: 'text-field', value: this.value, onInput: () => this.handleInput(), placeholder: this.placeholder, maxlength: this.maxlength, class: `${this.icon ? 'icon' : ""}
                ${this.error ? 'error' : ""} 
              ${this.size === "s" ? "input-s" : ""}
              ${this.success ? "success" : ""}` })), this.caption && !this.error &&
            h("div", { class: `textInput__bottom-wrapper-caption ${this.disabled} ? disabled : ""` }, this.caption), this.error &&
            h("div", { class: "textInput__bottom-wrapper-caption error" }, this.caption))));
    }
    static get is() { return "ifx-text-field"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["text-field.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["text-field.css"]
        };
    }
    static get properties() {
        return {
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
                "defaultValue": "\"Placeholder\""
            },
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
            "error": {
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
                "attribute": "error",
                "reflect": false,
                "defaultValue": "false"
            },
            "label": {
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
                "attribute": "label",
                "reflect": false,
                "defaultValue": "\"\""
            },
            "icon": {
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
                "attribute": "icon",
                "reflect": false,
                "defaultValue": "\"\""
            },
            "caption": {
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
                "attribute": "caption",
                "reflect": false,
                "defaultValue": "\"\""
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
                "defaultValue": "'m'"
            },
            "required": {
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
                "attribute": "required",
                "reflect": false,
                "defaultValue": "false"
            },
            "optional": {
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
                "attribute": "optional",
                "reflect": false,
                "defaultValue": "false"
            },
            "success": {
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
                "attribute": "success",
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
                "reflect": false
            }
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
    static get methods() {
        return {
            "reset": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "valueWatcher"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=text-field.js.map
