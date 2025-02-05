'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');

const listGroupItemCss = "@charset \"UTF-8\";.list-group-item{display:flex;align-items:center;justify-content:space-between;height:40px;width:350px;padding:8px 16px;background-color:#FFFFFF;border:1px solid #EEEDED;border-radius:1px 1px 0px 0px;font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;font-family:var(--ifx-font-family)}.list-group-item.flush{border:none;border-bottom:1px solid #EEEDED}.list-group-item.flush.bulletpoint{padding:8px}.list-group-item.bulletpoint .list-group-item-content::before{content:\"•\";display:inline-block;font-size:1.125rem;padding-right:10px}.list-group-item:hover:not(.show){background-color:#EEEDED}.list-group-item:active:not(.show){background-color:#0A8276;color:#FFFFFF}.list-group-item.show{display:block;height:88px;padding:16px}";
const IfxListItemStyle0 = listGroupItemCss;

const ListGroupItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isFlush = false;
        this.hasBulletpoint = false;
        this.badge = false;
        this.badgeValue = 0;
    }
    componentWillLoad() {
        const ifxListGroup = this.el.closest('ifx-list-group');
        if (ifxListGroup.flush) {
            this.isFlush = true;
        }
        else
            this.isFlush = false;
        if (ifxListGroup.bulletpoint && !this.badge) {
            this.hasBulletpoint = true;
        }
        else
            this.hasBulletpoint = false;
    }
    render() {
        return (index.h("div", { key: 'df440a56cb3c6f18e3115010b55468b9202a5715', class: `list-group-item 
        ${this.isFlush ? 'flush' : ""}
        ${this.hasBulletpoint ? 'bulletpoint' : ""}` }, index.h("div", { key: '12b381db2c43ad1049295efc543f4f2c6ec184bd', class: "list-group-item-content" }, index.h("slot", { key: '5bab8f59920a5a750b628973b8e5962a41eaa7fc' })), this.badge && index.h("ifx-number-indicator", null, this.badgeValue)));
    }
    get el() { return index.getElement(this); }
};
ListGroupItem.style = IfxListItemStyle0;

exports.ifx_list_item = ListGroupItem;

//# sourceMappingURL=ifx-list-item.cjs.entry.js.map