import { h } from "@stencil/core";
export class DatePicker {
    constructor() {
        this.size = 's';
        this.error = false;
        this.success = false;
        this.disabled = false;
    }
    getDate(e) {
        const selectedDate = new Date(e.target.value);
        const day = selectedDate.getDate();
        const month = selectedDate.getMonth() + 1;
        const year = selectedDate.getFullYear();
        if (day && month && year) {
            this.internals.setFormValue(selectedDate.toISOString().substring(0, 10));
            this.ifxDate.emit({ day, month, year });
        }
    }
    handleInputFocusOnIconClick() {
        const input = this.el.shadowRoot.querySelector('.date__picker-input');
        if (input) {
            input.focus();
        }
    }
    getBrowser() {
        if (navigator.userAgent.indexOf("Chrome") != -1) {
            return "Chrome";
        }
        else if (navigator.userAgent.indexOf("Opera") != -1) {
            return "Opera";
        }
        else if (navigator.userAgent.indexOf("MSIE") != -1) {
            return "IE";
        }
        else if (navigator.userAgent.indexOf("Firefox") != -1) {
            return "Firefox";
        }
        else {
            return "unknown";
        }
    }
    setFireFoxClasses() {
        const browser = this.getBrowser();
        const input = this.el.shadowRoot.querySelector('.date__picker-input');
        if (browser === 'Firefox') {
            input.classList.add('firefox__classes');
        }
        else if (input.classList.contains('firefox__classes')) {
            input.classList.remove('firefox__classes');
        }
    }
    componentDidLoad() {
        this.setFireFoxClasses();
    }
    /**
     * Callback for form association.
     * Called whenever the form is reset.
     */
    formResetCallback() {
        this.internals.setFormValue(null);
    }
    render() {
        return (h("div", { key: '177307ac5be8987028627ed003fe8dade70faf2a', class: `input__wrapper ${this.size === 'l' ? 'large' : 'small'} ${this.disabled ? 'disabled' : ""}` }, h("input", { key: '74216ec4152dafa0e501226e658f3df4ac357695', class: `date__picker-input ${this.error ? 'error' : ""} ${this.success ? "success" : ""}`, type: "date", disabled: this.disabled, onChange: (e) => this.getDate(e) }), h("div", { key: '2643aaf8597d47900e07a61c8dcb1375f116fb28', class: "icon__wrapper", onClick: () => this.handleInputFocusOnIconClick() }, h("ifx-icon", { key: 'cffcf69ab5ce99ccad8335a5cb1ba749dacd259c', icon: 'calendar16' }))));
    }
    static get is() { return "ifx-date-picker"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["date-picker.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["date-picker.css"]
        };
    }
    static get properties() {
        return {
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
                "defaultValue": "'s'"
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
            }
        };
    }
    static get events() {
        return [{
                "method": "ifxDate",
                "name": "ifxDate",
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
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=date-picker.js.map
