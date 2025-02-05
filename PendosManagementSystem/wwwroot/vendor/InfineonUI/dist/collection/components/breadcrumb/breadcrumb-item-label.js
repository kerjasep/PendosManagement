import { h } from "@stencil/core";
export class BreadcrumbItemLabel {
    constructor() {
        this.icon = undefined;
        this.url = undefined;
        this.target = "_self";
    }
    componentDidLoad() {
        const container = this.el.shadowRoot.querySelector('.breadcrumb-item-label-container');
        const menuWrapper = container.querySelector('.menu-icon-wrapper');
        this.breadcrumbMenuIconWrapper.emit(menuWrapper);
    }
    render() {
        return (h("a", { key: '23014bd1046884a5bba5c45b6094cdd65da0cb48', href: this.url, target: this.target, class: "breadcrumb-item-label-container" }, h("ifx-icon", { key: '24e194ed23024bb098158758bf24ec987579734d', icon: this.icon }), h("span", { key: 'c937ded23f9aca1d006d7b46e76261bbfbc12287', class: "label-wrapper" }, h("slot", { key: '1a4a615e8aad5c6a5d69a7fade3bb0258d998288' })), h("span", { key: '8e7969432b40933f5f759881f4df3a3f1871f104', class: "menu-icon-wrapper" }, h("ifx-icon", { key: 'e6eb474d100b436c614b7a8ec19746aca07d6adc', icon: "chevron-down-12" }))));
    }
    static get is() { return "ifx-breadcrumb-item-label"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["breadcrumb-item-label.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["breadcrumb-item-label.css"]
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
            "url": {
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
                "attribute": "url",
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
                "defaultValue": "\"_self\""
            }
        };
    }
    static get events() {
        return [{
                "method": "breadcrumbMenuIconWrapper",
                "name": "breadcrumbMenuIconWrapper",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "CustomEvent",
                    "resolved": "CustomEvent<any>",
                    "references": {
                        "CustomEvent": {
                            "location": "global",
                            "id": "global::CustomEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=breadcrumb-item-label.js.map
