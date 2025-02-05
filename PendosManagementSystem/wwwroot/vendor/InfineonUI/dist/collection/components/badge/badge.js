import { h } from "@stencil/core";
export class Badge {
    render() {
        return (h("div", { key: 'eaa5be7836515fc284e17ed7fb6acfdcc6ce11f1', class: "badge__container" }, h("slot", { key: 'f00f0415cb6cdfa25ce8e7b0df798f8a98eb2373' })));
    }
    static get is() { return "ifx-badge"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["badge.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["badge.css"]
        };
    }
}
//# sourceMappingURL=badge.js.map
