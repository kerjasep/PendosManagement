// dropdown-separator.tsx
import { h } from "@stencil/core";
export class DropdownHeader {
    render() {
        return (h("div", { key: 'b38551de7ffa2aada728f95bb453732a9cb8664f', class: 'dropdown-header' }, h("span", { key: 'f077e4f268a8c3da54f3afcde0e36e1261885b9b' }, h("slot", { key: '0b0a786b24f6a9fa25abb82699e44d9c2e7b0cba' }))));
    }
    static get is() { return "ifx-dropdown-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dropdown-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dropdown-header.css"]
        };
    }
}
//# sourceMappingURL=dropdown-header.js.map
