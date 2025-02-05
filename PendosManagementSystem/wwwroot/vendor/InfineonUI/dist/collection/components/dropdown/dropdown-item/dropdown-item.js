// dropdown-item.tsx
import { h } from "@stencil/core";
export class DropdownItem {
    constructor() {
        this.icon = undefined;
        this.href = "";
        this.target = "_self";
        this.hide = false;
        this.size = 'l';
    }
    handleMenuSize(event) {
        this.size = event.detail;
    }
    handleEventEmission() {
        this.ifxDropdownItem.emit(this.el.textContent);
    }
    render() {
        let hrefAttr = this.href ? { href: this.href, target: this.target } : {};
        return (h("a", Object.assign({ key: '338eb1a1ca3d1ca3240a0aa0465e80a7ac7fbd9e' }, hrefAttr, { onClick: () => this.handleEventEmission(), class: `dropdown-item ${this.size === 's' ? 'small' : ""} ${this.hide ? 'hide' : ""}` }), this.icon && h("ifx-icon", { class: "icon", icon: this.icon }), h("span", { key: 'ee62e58dbd035e3ba1cde37bd27947b718dd12a7' }, h("slot", { key: 'cc2e22d42df728024c928e7b7812c39006c501ac' }))));
    }
    static get is() { return "ifx-dropdown-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dropdown-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dropdown-item.css"]
        };
    }
    static get properties() {
        return {
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
                "reflect": false
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
                "reflect": false,
                "defaultValue": "\"\""
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
                "defaultValue": "\"_self\""
            },
            "hide": {
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
                "attribute": "hide",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "size": {}
        };
    }
    static get events() {
        return [{
                "method": "ifxDropdownItem",
                "name": "ifxDropdownItem",
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
    static get listeners() {
        return [{
                "name": "menuSize",
                "method": "handleMenuSize",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=dropdown-item.js.map
