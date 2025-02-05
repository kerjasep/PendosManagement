import { h } from "@stencil/core";
export class CardOverline {
    render() {
        return (h("div", { key: '0cf71da83004bca2ddc5d12dd04648666dc62656', class: "card-overline" }, h("slot", { key: 'b874f21e2e10f4805e74a203aa3245a3e4f9d8f1' })));
    }
    static get is() { return "ifx-card-overline"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["card-overline.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card-overline.css"]
        };
    }
}
//# sourceMappingURL=card-overline.js.map
