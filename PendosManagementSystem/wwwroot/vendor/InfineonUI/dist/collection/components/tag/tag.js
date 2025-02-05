import { h } from "@stencil/core";
export class Tag {
    constructor() {
        this.icon = undefined;
    }
    render() {
        return (h("div", { key: '79060b35d8a8c130ccb194ada196dce28d0ce55c', "aria-label": "a tag", class: "container" }, this.icon && (h("ifx-icon", { icon: this.icon })), h("a", { key: '6ad9485c807b4dda4f650c62a521b5ab67f7740d', href: "javascript:void(null);", class: "label-wrapper" }, h("p", { key: '23927fc162df30ad9b3160182f3115b9dd8a1529', class: "label" }, h("slot", { key: 'a1c7a297b5c50b52ba42c8b20564bad499428657' })))));
    }
    static get is() { return "ifx-tag"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["tag.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tag.css"]
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
            }
        };
    }
}
//# sourceMappingURL=tag.js.map
