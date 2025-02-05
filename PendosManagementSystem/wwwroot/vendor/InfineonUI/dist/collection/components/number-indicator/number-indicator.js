import { h } from "@stencil/core";
export class NumberIndicator {
    constructor() {
        this.inverted = false;
    }
    render() {
        return (h("div", { key: 'af16f4f8e63099724193284682d9f9952dec93e5', "aria-label": 'a number indicator', class: `numberIndicator__container ${this.inverted ? 'inverted' : ""}` }, h("span", { key: 'c93586a3bc0fadf268c214088e624450cd0d83b0' }, h("slot", { key: '8ee72ea8dabc7801ed555b1f90fe738c5428e6ac' }))));
    }
    static get is() { return "ifx-number-indicator"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["number-indicator.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["number-indicator.css"]
        };
    }
    static get properties() {
        return {
            "inverted": {
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
                "attribute": "inverted",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=number-indicator.js.map
