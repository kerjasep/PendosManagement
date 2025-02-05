import { h } from "@stencil/core";
export class CardHeadline {
    constructor() {
        this.direction = undefined;
        this.hasDesc = undefined;
        this.isHovered = false;
    }
    componentWillLoad() {
        var _a;
        const cardElement = this.el.closest('ifx-card');
        if (cardElement) {
            const cardClass = (_a = cardElement.shadowRoot.querySelector('.card')) === null || _a === void 0 ? void 0 : _a.className;
            if (cardClass && cardClass.includes('horizontal')) {
                this.direction = 'horizontal';
            }
            const desc = cardElement.querySelector('ifx-card-text');
            if (desc) {
                this.hasDesc = true;
            }
        }
    }
    render() {
        return (h("div", { key: '9433ff789abb135f340b7597d4abac96d1fa9983', class: `card__headline-wrapper ${this.hasDesc ? 'withDesc' : ""}` }, h("div", { key: '0de5cdecbd7b8d518e2fdd51ed9d29dc0aee33e1', class: `card-headline ${this.direction} ${this.isHovered ? 'isHovered' : ""}` }, h("slot", { key: '00a616ae175bfe6d63e595b1363cee8cc895c7f2' }))));
    }
    static get is() { return "ifx-card-headline"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["card-headline.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card-headline.css"]
        };
    }
    static get properties() {
        return {
            "isHovered": {
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
                "attribute": "is-hovered",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "direction": {},
            "hasDesc": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=card-headline.js.map
