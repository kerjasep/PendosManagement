import { h } from "@stencil/core";
export class Status {
    constructor() {
        this.label = undefined;
        this.border = false;
        this.color = 'orange';
    }
    render() {
        const containerClass = this.border ? `container border-${this.color}` : 'container no-border';
        return (h("div", { key: '281adf99c2351d42be81b120fce2afc35a39dc8a', "aria-label": "a status indicator", "aria-value": this.label, class: containerClass }, h("span", { key: '1f3485e7683f72fdd433cd90ea705ae398a38ea1', class: `dot ${this.color}` }), h("p", { key: 'd1f808310311891d4baf621ac84965dd9b2db311', class: "text" }, this.label)));
    }
    static get is() { return "ifx-status"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["status.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["status.css"]
        };
    }
    static get properties() {
        return {
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
                "reflect": false
            },
            "border": {
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
                "attribute": "border",
                "reflect": false,
                "defaultValue": "false"
            },
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'orange' | 'ocean' | 'grey' | 'light-grey' | 'red' | 'green' | 'berry'",
                    "resolved": "\"berry\" | \"green\" | \"grey\" | \"light-grey\" | \"ocean\" | \"orange\" | \"red\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "color",
                "reflect": false,
                "defaultValue": "'orange'"
            }
        };
    }
}
//# sourceMappingURL=status.js.map
