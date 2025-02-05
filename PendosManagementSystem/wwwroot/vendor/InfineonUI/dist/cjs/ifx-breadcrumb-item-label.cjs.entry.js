'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');

const breadcrumbItemLabelCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}.breadcrumb-item-label-container{display:flex;align-items:center;gap:8px;text-decoration:none;color:#1D1D1D}.breadcrumb-item-label-container.margin{margin-left:16px}.breadcrumb-item-label-container ifx-icon:empty{display:none}.breadcrumb-item-label-container .label-icon-wrapper{display:inline-flex}.breadcrumb-item-label-container .menu-icon-wrapper{display:flex;justify-content:center;align-items:center;width:16px;height:16px}.breadcrumb-item-label-container .menu-icon-wrapper.hide{display:none}.breadcrumb-item-label-container .menu-icon-wrapper ifx-icon{transition:0.3s}.breadcrumb-item-label-container .menu-icon-wrapper.show ifx-icon{transition:0.3s;transform:rotate(180deg)}";
const IfxBreadcrumbItemLabelStyle0 = breadcrumbItemLabelCss;

const BreadcrumbItemLabel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.breadcrumbMenuIconWrapper = index.createEvent(this, "breadcrumbMenuIconWrapper", 7);
        this.icon = undefined;
        this.url = undefined;
        this.target = "_self";
    }
    componentDidLoad() {
        const container = this.el.shadowRoot.querySelector('.breadcrumb-item-label-container');
        const menuWrapper = container.querySelector('.menu-icon-wrapper');
        this.breadcrumbMenuIconWrapper.emit(menuWrapper);
    }
    render() {
        return (index.h("a", { key: '23014bd1046884a5bba5c45b6094cdd65da0cb48', href: this.url, target: this.target, class: "breadcrumb-item-label-container" }, index.h("ifx-icon", { key: '24e194ed23024bb098158758bf24ec987579734d', icon: this.icon }), index.h("span", { key: 'c937ded23f9aca1d006d7b46e76261bbfbc12287', class: "label-wrapper" }, index.h("slot", { key: '1a4a615e8aad5c6a5d69a7fade3bb0258d998288' })), index.h("span", { key: '8e7969432b40933f5f759881f4df3a3f1871f104', class: "menu-icon-wrapper" }, index.h("ifx-icon", { key: 'e6eb474d100b436c614b7a8ec19746aca07d6adc', icon: "chevron-down-12" }))));
    }
    get el() { return index.getElement(this); }
};
BreadcrumbItemLabel.style = IfxBreadcrumbItemLabelStyle0;

exports.ifx_breadcrumb_item_label = BreadcrumbItemLabel;

//# sourceMappingURL=ifx-breadcrumb-item-label.cjs.entry.js.map