import { h } from "@stencil/core";
export class ListGroupItem {
    constructor() {
        this.isFlush = false;
        this.hasBulletpoint = false;
        this.badge = false;
        this.badgeValue = 0;
    }
    componentWillLoad() {
        const ifxListGroup = this.el.closest('ifx-list-group');
        if (ifxListGroup.flush) {
            this.isFlush = true;
        }
        else
            this.isFlush = false;
        if (ifxListGroup.bulletpoint && !this.badge) {
            this.hasBulletpoint = true;
        }
        else
            this.hasBulletpoint = false;
    }
    render() {
        return (h("div", { key: 'df440a56cb3c6f18e3115010b55468b9202a5715', class: `list-group-item 
        ${this.isFlush ? 'flush' : ""}
        ${this.hasBulletpoint ? 'bulletpoint' : ""}` }, h("div", { key: '12b381db2c43ad1049295efc543f4f2c6ec184bd', class: "list-group-item-content" }, h("slot", { key: '5bab8f59920a5a750b628973b8e5962a41eaa7fc' })), this.badge && h("ifx-number-indicator", null, this.badgeValue)));
    }
    static get is() { return "ifx-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["list-group-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["list-group-item.css"]
        };
    }
    static get properties() {
        return {
            "isFlush": {
                "type": "boolean",
                "mutable": true,
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
                "attribute": "is-flush",
                "reflect": false,
                "defaultValue": "false"
            },
            "badge": {
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
                "attribute": "badge",
                "reflect": false,
                "defaultValue": "false"
            },
            "badgeValue": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "badge-value",
                "reflect": false,
                "defaultValue": "0"
            }
        };
    }
    static get states() {
        return {
            "hasBulletpoint": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=list-group-item.js.map
