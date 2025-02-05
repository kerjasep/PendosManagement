import { h } from "@stencil/core";
export class Switch {
    constructor() {
        this.value = false;
        this.name = '';
        this.disabled = false;
        this.internalValue = false;
    }
    componentWillLoad() {
        this.internalValue = this.value;
    }
    toggleLabelGap() {
        const slot = this.el.shadowRoot.querySelector('slot');
        const container = this.el.shadowRoot.querySelector('.container');
        if (slot.assignedNodes().length) {
            container.classList.add('gap');
        }
        else {
            container.classList.remove('gap');
        }
    }
    componentDidLoad() {
        this.toggleLabelGap();
    }
    valueChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.internalValue = newValue;
        }
    }
    toggleSwitch() {
        if (this.disabled)
            return;
        this.internalValue = !this.internalValue;
        this.internals.setFormValue(this.internalValue ? 'on' : null);
        this.ifxChange.emit(this.internalValue);
    }
    handleKeyDown(event) {
        if (this.disabled)
            return;
        // If the pressed key is either 'Enter' or 'Space' 
        if (event.key === 'Enter' || event.key === ' ') {
            this.toggleSwitch();
        }
    }
    /**
     * Callback for form association.
     * Called whenever the form is reset.
     */
    formResetCallback() {
        this.internals.setFormValue(null);
    }
    render() {
        return (h("div", { key: 'ae52a2792ac231db9bcb28449b953a8af0466c8d', class: "container", role: "switch", "aria-checked": this.internalValue ? 'true' : 'false', "aria-label": this.name, onClick: () => this.toggleSwitch(), onKeyDown: (event) => this.handleKeyDown(event) }, h("div", { key: 'e58bb8d5d417996eedea16b3007c5b9f94817de8', class: `switch__checkbox-container ${this.internalValue ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}`, tabindex: "0" }, h("div", { key: 'e1bbaeeee5bb1cafcb3a18d9df5b9a0074949585', class: "switch__checkbox-wrapper" }, h("input", { key: 'c436bba6346eda4a0be0fbc7a257aa32cf51322d', type: "checkbox", hidden: true, name: this.name, disabled: this.disabled, value: `${this.internalValue}` }), h("div", { key: 'c6207db98923233406ae326bbdace8217c696331', class: `switch ${this.internalValue ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}` }))), h("div", { key: 'f0d6dd8a379b69b5ca370604212ceaa03b6583f4', class: `switch__label-wrapper ${this.disabled ? 'disabled' : ''}` }, h("label", { key: 'a6927c48f11f26344cb0aaa27544e6b71a146e6e', htmlFor: "switch" }, h("slot", { key: '0af01d2d7a6846fad62024766c6502798c0d375b', onSlotchange: () => this.toggleLabelGap() })))));
    }
    static get is() { return "ifx-switch"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["switch.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["switch.css"]
        };
    }
    static get properties() {
        return {
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
            "name": {
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
                "attribute": "name",
                "reflect": false,
                "defaultValue": "''"
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
            }
        };
    }
    static get states() {
        return {
            "internalValue": {}
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
                    "original": "boolean",
                    "resolved": "boolean",
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
//# sourceMappingURL=switch.js.map
