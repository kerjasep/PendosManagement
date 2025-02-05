import { h } from "@stencil/core";
export class CardLinks {
    render() {
        return (h("div", { key: '96edcf08684ca9e2ba86f3a2d520ea566a661ba1', class: 'container' }, h("slot", { key: '8e676403d9e486f1c6410aeea1c03b3808bace0c' })));
    }
    static get is() { return "ifx-card-links"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["card-links.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card-links.css"]
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=card-links.js.map
