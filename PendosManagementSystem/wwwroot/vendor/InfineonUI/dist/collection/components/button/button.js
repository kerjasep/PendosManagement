import { h, Host } from "@stencil/core";
import classNames from "classnames";
export class Button {
    constructor() {
        this.handleClick = (ev) => {
            if (this.el.shadowRoot) {
                const parentForm = this.el.closest('form');
                if (parentForm) {
                    ev.preventDefault();
                    if (this.type === 'reset') {
                        // If the button type is 'reset', manually reset all custom form fields
                        this.resetClickHandler(); //this will reset all ifx-text-fields within a form
                    }
                    else {
                        const fakeButton = document.createElement('button');
                        if (this.type) {
                            fakeButton.type = this.type;
                        }
                        fakeButton.style.display = 'none';
                        parentForm.appendChild(fakeButton);
                        fakeButton.click();
                        fakeButton.remove();
                    }
                }
            }
        };
        this.variant = 'primary';
        this.theme = 'default';
        this.size = 'm';
        this.disabled = false;
        this.internalHref = undefined;
        this.href = undefined;
        this.target = '_self';
        this.type = "button";
        this.fullWidth = false;
    }
    setInternalHref(newValue) {
        this.internalHref = newValue;
    }
    async setFocus() {
        this.focusableElement.focus();
    }
    insertNativeButton() {
        this.nativeButton = document.createElement('button');
        this.nativeButton.type = this.type;
        this.nativeButton.style.display = 'none';
        this.el.closest('form').appendChild(this.nativeButton);
    }
    handleFormAndInternalHref() {
        if (this.el.closest('form')) {
            if (this.el.href) {
                this.el.internalHref = undefined;
            }
            this.insertNativeButton();
        }
        else {
            this.internalHref = this.href;
        }
    }
    handleButtonWidth() {
        if (this.fullWidth) {
            this.el.style.setProperty('--bw', '100%');
        }
        else {
            this.el.style.setProperty('--bw', 'fit-content');
        }
    }
    componentWillLoad() {
        this.handleFormAndInternalHref();
    }
    componentWillRender() {
        this.handleButtonWidth();
    }
    resetClickHandler() {
        const formElement = this.el.closest('form');
        const customElements = formElement.querySelectorAll('ifx-text-field');
        customElements.forEach(element => {
            element.reset();
        });
    }
    handleKeyDown(ev) {
        if (ev.key === 'Enter' && !this.disabled) {
            this.handleClick(ev);
        }
    }
    handleHostClick(event) {
        if (this.disabled === true) {
            event.stopImmediatePropagation();
        }
    }
    handleFocus(event) {
        if (this.disabled) {
            event.preventDefault();
            this.focusableElement.blur();
        }
    }
    render() {
        return (h(Host, { key: '03197977641a301cea15a352d821cdb88bb2f6c7' }, h("a", { key: '5d3bcf0919eddea896a3b956577a3e691799e1fd', tabIndex: 0, ref: (el) => (this.focusableElement = el), class: this.getClassNames(), href: !this.disabled ? this.internalHref : undefined, target: this.target, onClick: this.handleClick, rel: this.target === '_blank' ? 'noopener noreferrer' : undefined, onFocus: (event) => this.handleFocus(event), "aria-disabled": this.disabled, "aria-labelledby": "label" }, h("slot", { key: 'f3b616d292965f93c27f71c9db122b82b4fc3934' }))));
    }
    getVariantClass() {
        return `${this.variant}` === "secondary"
            ? `secondary-${this.theme}`
            : `${this.variant}` === 'tertiary'
                ? `tertiary-${this.theme}`
                : `${this.theme}`;
    }
    getSizeClass() {
        if (`${this.size}` === "xs") {
            return "xs";
        }
        else if (`${this.size}` === "s") {
            return "s";
        }
        else if (`${this.size}` === "l") {
            return "l";
        }
        else
            return "";
    }
    getClassNames() {
        return classNames('btn', this.size && `btn-${this.getSizeClass()}`, `btn-${this.getVariantClass()}`, this.disabled ? 'disabled' : '');
    }
    static get is() { return "ifx-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["button.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary' | 'tertiary'",
                    "resolved": "\"primary\" | \"secondary\" | \"tertiary\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'primary'"
            },
            "theme": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'danger' | 'inverse'",
                    "resolved": "\"danger\" | \"default\" | \"inverse\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "theme",
                "reflect": false,
                "defaultValue": "'default'"
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
            "href": {
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
                "attribute": "href",
                "reflect": false
            },
            "target": {
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
                "attribute": "target",
                "reflect": false,
                "defaultValue": "'_self'"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "\"button\" | \"submit\" | \"reset\"",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "type",
                "reflect": false,
                "defaultValue": "\"button\""
            },
            "fullWidth": {
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
                "attribute": "full-width",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "internalHref": {}
        };
    }
    static get methods() {
        return {
            "setFocus": {
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
                "propName": "href",
                "methodName": "setInternalHref"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "click",
                "method": "handleHostClick",
                "target": undefined,
                "capture": true,
                "passive": false
            }];
    }
}
//# sourceMappingURL=button.js.map
