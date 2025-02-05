import { h } from "@stencil/core";
export class RadioButton {
    constructor() {
        this.disabled = false;
        this.value = false;
        this.error = false;
        this.size = "s";
        this.internalValue = undefined;
        this.hasSlot = true;
    }
    valueChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.internalValue = newValue;
        }
    }
    componentWillLoad() {
        this.internalValue = this.value;
        const slot = this.el.innerHTML;
        if (slot) {
            this.hasSlot = true;
        }
        else
            this.hasSlot = false;
    }
    handleRadioButtonClick() {
        if (!this.disabled && !this.error && !this.internalValue) {
            this.internalValue = !this.internalValue;
            this.el.shadowRoot.querySelector('.radioButton__wrapper').focus();
            this.ifxChange.emit(this.internalValue);
            this.internals.setFormValue(this.internalValue ? 'on' : null);
        }
    }
    formResetCallback() {
        this.internals.setFormValue(null);
    }
    render() {
        return (h("div", { key: 'aad602331a5499267d9aec10d0656955f10b650a', "aria-label": 'a radio button', "aria-value": this.value, "aria-disabled": this.disabled, class: `radioButton__container ${this.size} ${this.disabled ? 'disabled' : ''}`, onClick: this.handleRadioButtonClick.bind(this) }, h("div", { key: 'e398e215b77578e6e58900c5ee5dfa81e6f1ddf7', class: `radioButton__wrapper 
          ${this.internalValue ? 'checked' : ''} 
          ${this.disabled ? 'disabled' : ''} 
          ${this.error ? 'error' : ''}`, tabIndex: this.disabled ? -1 : 0 }, this.internalValue && h("div", { class: "radioButton__wrapper-mark" })), this.hasSlot && (h("div", { class: `label ${this.size === "m" ? "label-m" : ""} ${this.disabled ? 'disabled' : ''}` }, h("slot", null)))));
    }
    static get is() { return "ifx-radio-button"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["radio-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["radio-button.css"]
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
                    "original": "\"s\" | \"m\"",
                    "resolved": "\"m\" | \"s\"",
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
                "defaultValue": "\"s\""
            }
        };
    }
    static get states() {
        return {
            "internalValue": {},
            "hasSlot": {}
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
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "valueChanged"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=radio-button.js.map
