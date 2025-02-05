import { h } from "@stencil/core";
export class SidebarTitle {
    render() {
        return (h("div", { key: '979c813f99b78a271aa264db919097dfd1b9bd64', class: 'sidebar__title' }, h("div", { key: '326194a7dfeff4e04cb35bac6ed35f84aa2dac6d', class: 'sidebar__title-label' }, h("slot", { key: 'd7a1fd685efadcc1f575c532d015543a45417278' }))));
    }
    static get is() { return "ifx-sidebar-title"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["sidebar-title.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["sidebar-title.css"]
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=sidebar-title.js.map
