'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');

const cardTextCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}:host{pointer-events:none}.card__text-wrapper{padding-bottom:0px}.card__text-wrapper.hasBtn{padding-bottom:16px}.card-text{line-height:1.5rem;font-size:1rem;font-weight:400;white-space:wrap;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}";
const IfxCardTextStyle0 = cardTextCss;

const CardText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: 'f5f5fee07fd8de6a5a134c967254b9e9b89b6101', class: `card__text-wrapper ${this.hasBtn ? 'hasBtn' : ""}` }, index.h("div", { key: '3af40a2b5acd57dba8a9f71399f76b2fdb6a0f50', class: `card-text` }, index.h("slot", { key: 'b91de45e148ff040f1168a6bd087144a7cd2b4c5' }))));
    }
    get el() { return index.getElement(this); }
};
CardText.style = IfxCardTextStyle0;

exports.ifx_card_text = CardText;

//# sourceMappingURL=ifx-card-text.cjs.entry.js.map