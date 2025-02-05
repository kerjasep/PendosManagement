import { h } from "@stencil/core";
import classNames from "classnames";
export class Link {
    constructor() {
        this.href = undefined;
        this.target = '_self';
        this.variant = 'bold';
        this.size = undefined;
        this.disabled = false;
        this.internalHref = '';
        this.internalTarget = '';
        this.internalVariant = '';
    }
    setInternalStates() {
        if (this.href) {
            this.internalHref = this.href.trim();
        }
        else {
            this.internalHref = undefined;
        }
        this.internalTarget = this.target.trim();
        this.internalVariant = this.variant.trim().toLowerCase();
    }
    componentWillRender() {
        this.setInternalStates();
    }
    render() {
        return (h("a", { key: '509d025ee650e4596ca4a75bdb03c218db4f8cd6', "aria-label": 'a navigation link button', href: this.internalHref, target: this.internalTarget, class: this.linkClassNames() }, h("slot", { key: '83e58bbd5203b98aec4b7dc8cb8e99c2c89aa62f' })));
    }
    getSizeClass() {
        const small = this.size === 's' ? 'small' : null;
        const medium = this.size === 'm' ? 'medium' : null;
        const large = this.size === 'l' ? 'large' : null;
        const extraLarge = this.size === 'xl' ? 'extraLarge' : null;
        if (small) {
            return small;
        }
        else if (medium) {
            return medium;
        }
        else if (large) {
            return large;
        }
        else if (extraLarge && this.internalVariant === 'underlined') {
            return 'large';
        }
        else if (extraLarge && this.internalVariant !== 'underlined') {
            return extraLarge;
        }
        else
            return "";
    }
    getVariantClass() {
        const bold = this.internalVariant === 'bold' ? 'bold' : null;
        const title = this.internalVariant === 'title' ? 'title' : null;
        const underlined = this.internalVariant === 'underlined' ? 'underlined' : null;
        const menu = this.internalVariant === 'menu' ? 'menu' : null;
        if (bold) {
            return bold;
        }
        else if (title) {
            return title;
        }
        else if (underlined) {
            return underlined;
        }
        else if (menu) {
            return menu;
        }
        else
            return bold;
    }
    linkClassNames() {
        return classNames('link', 'primary', this.getVariantClass(), this.getSizeClass(), this.disabled ? 'disabled' : '');
    }
    static get is() { return "ifx-link"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["link.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["link.css"]
        };
    }
    static get properties() {
        return {
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
                "reflect": false,
                "defaultValue": "undefined"
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
            "variant": {
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
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'bold'"
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
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "internalHref": {},
            "internalTarget": {},
            "internalVariant": {}
        };
    }
}
//# sourceMappingURL=link.js.map
