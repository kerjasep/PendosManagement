// dropdown-trigger-button.tsx
import { h } from "@stencil/core";
export class DropdownItem {
    constructor() {
        this.isOpen = false;
        this.theme = 'default';
        this.variant = undefined;
        this.size = 'm';
        this.disabled = undefined;
        this.hideArrow = false;
    }
    render() {
        return (h("ifx-button", { key: '3775e34ae02e28c92227b0e187dc915aee424d8b', variant: this.variant, theme: this.theme, size: this.size, disabled: this.disabled, class: "dropdown-trigger-button" }, h("slot", { key: 'b32e78e63a2af7a172b9f7034077f01be9f84ea1' }), !this.hideArrow &&
            h("ifx-icon", { icon: "chevron-down-12", class: `icon${this.isOpen ? ' rotate' : ''}` })));
    }
    static get is() { return "ifx-dropdown-trigger-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dropdown-trigger-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dropdown-trigger-button.css"]
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
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary'",
                    "resolved": "\"primary\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "variant",
                "reflect": false
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'s' | 'm'",
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
                "reflect": false
            },
            "hideArrow": {
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
                "attribute": "hide-arrow",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=dropdown-trigger-button.js.map
