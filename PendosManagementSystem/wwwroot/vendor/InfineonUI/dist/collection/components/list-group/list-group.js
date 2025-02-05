import { h, Host } from "@stencil/core";
export class ListGroup {
    constructor() {
        this.flush = false;
        this.bulletpoint = false;
        this.notification = false;
    }
    render() {
        return (h(Host, { key: 'd1d547c9b85580d29bd9d896702ffb4e44bbd908' }, h("div", { key: '57e525e3945f07254ad2829247258f44db21a2b1', class: `list-group-container 
        ${this.flush ? 'flush' : ""} 
        ${this.bulletpoint ? 'bulletpoint' : ""}` }, h("slot", { key: 'ebbf55492250ca4be267e41f1ce557e9f0c0a382', name: 'list-item' }), h("slot", { key: 'e5821a37ff4dccf747ef8f85df91e090386759a5', name: "list-notification" }))));
    }
    static get is() { return "ifx-list-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["list-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["list-group.css"]
        };
    }
    static get properties() {
        return {
            "flush": {
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
                "attribute": "flush",
                "reflect": false,
                "defaultValue": "false"
            },
            "bulletpoint": {
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
                "attribute": "bulletpoint",
                "reflect": false,
                "defaultValue": "false"
            },
            "notification": {
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
                "attribute": "notification",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=list-group.js.map
