import { h } from "@stencil/core";
export class Alert {
    constructor() {
        this.variant = 'primary';
        this.icon = undefined;
        this.closable = true;
    }
    handleClose() {
        this.ifxClose.emit();
    }
    render() {
        return (this.variant === 'info'
            ? h("div", { class: 'alert__info-wrapper' }, h("div", { class: 'info__text-wrapper' }, h("div", { class: "info__headline-wrapper" }, h("slot", { name: 'headline' })), h("div", { class: "info__description-wrapper" }, h("slot", { name: 'desc' }))), this.closable && h("div", { class: "close-icon-wrapper" }, h("a", { href: undefined, onClick: this.handleClose.bind(this) }, h("ifx-icon", { icon: 'cross-16' }))))
            : h("div", { class: `alert ${this.variant}` }, this.icon && (h("div", { class: 'icon-wrapper' }, h("ifx-icon", { icon: this.icon }))), h("div", { class: "alert-text" }, h("slot", null)), this.closable && h("div", { class: "close-icon-wrapper" }, h("a", { href: undefined, onClick: this.handleClose.bind(this) }, h("ifx-icon", { icon: 'cross-16' })))));
    }
    static get is() { return "ifx-alert"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["alert.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["alert.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'success' | 'danger' | 'warning' | 'info'",
                    "resolved": "\"danger\" | \"info\" | \"primary\" | \"success\" | \"warning\"",
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
            "closable": {
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
                "attribute": "closable",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get events() {
        return [{
                "method": "ifxClose",
                "name": "ifxClose",
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
}
//# sourceMappingURL=alert.js.map
