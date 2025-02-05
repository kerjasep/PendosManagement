import { h } from "@stencil/core";
export class CardText {
    constructor() {
        this.hasBtn = undefined;
    }
    componentWillLoad() {
        const link = this.el.closest('ifx-card').querySelector('ifx-link');
        const button = this.el.closest('ifx-card').querySelector('ifx-button');
        if (link || button) {
            this.hasBtn = true;
        }
    }
    render() {
        return (h("div", { key: 'f5f5fee07fd8de6a5a134c967254b9e9b89b6101', class: `card__text-wrapper ${this.hasBtn ? 'hasBtn' : ""}` }, h("div", { key: '3af40a2b5acd57dba8a9f71399f76b2fdb6a0f50', class: `card-text` }, h("slot", { key: 'b91de45e148ff040f1168a6bd087144a7cd2b4c5' }))));
    }
    static get is() { return "ifx-card-text"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./card-text.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card-text.css"]
        };
    }
    static get states() {
        return {
            "hasBtn": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=card-text.js.map
