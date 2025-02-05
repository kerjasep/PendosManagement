import { h } from "@stencil/core";
export class Card {
    render() {
        return (h("div", { key: '2a1593f8b15b826572bc8765a5bc4f11b2bec329', class: "col" }, h("slot", { key: '3c2b3137f886bda737ee9653638fe184bf98c61e', name: "title" }), h("span", { key: '3e7c92502b1a9b7df7e77650c4000c76944bdda2', "aria-label": 'navigation link' }, h("slot", { key: '0b2a7d593241587c816410b90a68486c19807b66', name: "link" }))));
    }
    static get is() { return "ifx-footer-column"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./footer-column.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["footer-column.css"]
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=footer-column.js.map
