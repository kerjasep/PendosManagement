import { h } from "@stencil/core";
export class Checkbox {
    constructor() {
        this.disabled = false;
        this.value = false;
        this.error = false;
        this.size = 'm';
        this.internalValue = undefined;
        this.indeterminate = false;
        this.internalIndeterminate = undefined;
    }
    handleCheckbox() {
        if (!this.disabled) {
            if (this.inputElement.indeterminate) {
                this.internalValue = true;
                this.internalIndeterminate = false;
            }
            else {
                this.internalValue = !this.internalValue;
            }
            this.internals.setFormValue(this.internalValue ? 'on' : null);
            this.ifxChange.emit(this.internalValue);
        }
    }
    async toggleCheckedState(newVal) {
        this.internalValue = newVal;
    }
    valueChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.internalValue = newValue;
            this.inputElement.checked = this.internalValue; // update the checkbox's checked property
        }
    }
    indeterminateChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.internalIndeterminate = newValue;
            this.inputElement.indeterminate = this.internalIndeterminate; // update the checkbox's indeterminate property
        }
    }
    handleKeydown(event) {
        // Keycode 32 corresponds to the Space key, 13 corresponds to the Enter key
        if (event.keyCode === 32 || event.keyCode === 13) {
            this.handleCheckbox();
            event.preventDefault(); // prevent the default action when space or enter is pressed
        }
    }
    componentWillLoad() {
        this.internalValue = this.value;
        this.internalIndeterminate = this.indeterminate;
    }
    componentDidRender() {
        this.inputElement.indeterminate = this.internalIndeterminate;
    }
    /**
     * Callback for form association.
     * Called whenever the form is reset.
     */
    formResetCallback() {
        this.internals.setFormValue(null);
    }
    getCheckedClassName() {
        if (this.error) {
            if (this.internalValue) {
                return "checked error";
            }
            else {
                return "error";
            }
        }
        else if (this.internalValue) {
            return "checked";
        }
        else
            return "";
    }
    render() {
        const slot = this.el.innerHTML;
        let hasSlot = false;
        if (slot) {
            hasSlot = true;
        }
        return (h("div", { key: '219d61be45d28a83518ba1a00dd3889a282b1cce', class: "checkbox__container" }, h("input", { key: 'aa4c37dc2f5b8fbc5013d35fa14ac15121feeca4', type: "checkbox", hidden: true, ref: (el) => (this.inputElement = el), checked: this.internalValue, onChange: this.handleCheckbox.bind(this), id: 'checkbox', value: `${this.internalValue}` }), h("div", { key: 'cb50e0379b2e6ba31fb2de1c16020cfbb6716db5', tabindex: "0", onClick: this.handleCheckbox.bind(this), onKeyDown: this.handleKeydown.bind(this), role: "checkbox" // role attribute
            ,
            "aria-value": this.internalValue, "aria-disabled": this.disabled, "aria-labelledby": "label", class: `checkbox__wrapper 
          ${this.getCheckedClassName()}
        ${this.size === "m" ? "checkbox-m" : ""}
        ${this.indeterminate ? 'indeterminate' : ""}
        ${this.disabled ? 'disabled' : ""}` }, this.internalValue && h("ifx-icon", { icon: "check-12" })), hasSlot &&
            h("div", { id: "label", class: `label ${this.size === "m" ? "label-m" : ""} ${this.disabled ? 'disabled' : ""} `, onClick: this.handleCheckbox.bind(this) }, h("slot", null))));
    }
    static get is() { return "ifx-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["checkbox.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["checkbox.css"]
        };
    }
    static get properties() {
        return {
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
            "value": {
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
                "attribute": "value",
                "reflect": false,
                "defaultValue": "false"
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
            "indeterminate": {
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
                "attribute": "indeterminate",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "internalValue": {},
            "internalIndeterminate": {}
        };
    }
    static get events() {
        return [{
                "method": "ifxChange",
                "name": "ifxChange",
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
            }];
    }
    static get methods() {
        return {
            "toggleCheckedState": {
                "complexType": {
                    "signature": "(newVal: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "newVal",
                            "type": "boolean",
                            "docs": ""
                        }],
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
                "methodName": "valueChanged"
            }, {
                "propName": "indeterminate",
                "methodName": "indeterminateChanged"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=checkbox.js.map
