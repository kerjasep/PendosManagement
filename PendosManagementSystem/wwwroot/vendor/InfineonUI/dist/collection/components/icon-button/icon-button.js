import { h, Host } from "@stencil/core";
import classNames from "classnames";
export class IconButton {
    constructor() {
        this.variant = undefined;
        this.size = undefined;
        this.disabled = undefined;
        this.icon = undefined;
        this.href = undefined;
        this.target = '_self';
        this.shape = 'round';
    }
    async setFocus() {
        this.focusableElement.focus();
    }
    componentWillLoad() {
        if (this.shape === '') {
            this.shape = 'round';
        }
    }
    render() {
        return (h(Host, { key: 'e87b9b5f655f7a3e0f6220d4113e33427bde3a35' }, this.href ? (h("a", { "aria-disabled": this.disabled, "aria-label": 'a clickable icon button', ref: (el) => (this.focusableElement = el), class: this.getClassNames(), href: !this.disabled ? this.href : undefined, target: this.target, rel: this.target === '_blank' ? 'noopener noreferrer' : undefined }, h("ifx-icon", { icon: this.icon }))) : (h("button", { class: this.getClassNames(), type: "button" }, h("ifx-icon", { icon: this.icon })))));
    }
    getVariantClass() {
        return `${this.variant}` === "secondary"
            ? `secondary`
            : `${this.variant}` === 'tertiary'
                ? `tertiary`
                : `primary`;
    }
    getSizeClass() {
        if (`${this.size}` === "xs") {
            return "xs";
        }
        else if (`${this.size}` === "s") {
            return "s";
        }
        else if (`${this.size}` === "l") {
            return "l";
        }
        else
            return "";
    }
    getClassNames() {
        return classNames('btn icon-button', `btn-${this.shape}`, this.size && `btn-${this.getSizeClass()}`, `btn-${this.getVariantClass()}`, this.disabled ? 'disabled' : '');
    }
    static get is() { return "ifx-icon-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["icon-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["icon-button.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary' | 'tertiary'",
                    "resolved": "\"primary\" | \"secondary\" | \"tertiary\"",
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
                "attribute": "size",
                "reflect": false
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
                "defaultValue": "'_self'"
            },
            "shape": {
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
                "attribute": "shape",
                "reflect": false,
                "defaultValue": "'round'"
            }
        };
    }
    static get methods() {
        return {
            "setFocus": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=icon-button.js.map
