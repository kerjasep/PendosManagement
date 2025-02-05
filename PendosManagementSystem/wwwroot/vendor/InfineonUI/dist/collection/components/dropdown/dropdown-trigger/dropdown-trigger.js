// dropdown-trigger-button.tsx
import { h } from "@stencil/core";
export class DropdownItem {
    constructor() {
        this.isOpen = false;
    }
    render() {
        return (h("slot", { key: 'fa5c96b865666a44aab707b25102c1aefbd78969' }));
    }
    static get is() { return "ifx-dropdown-trigger"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dropdown-trigger.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dropdown-trigger.css"]
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
            }
        };
    }
}
//# sourceMappingURL=dropdown-trigger.js.map
