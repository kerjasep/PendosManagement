import { r as registerInstance, h, g as getElement } from './index-f742c724.js';

const cardHeadlineCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}:host{pointer-events:none}.card__headline-wrapper{padding-bottom:16px}.card__headline-wrapper.withDesc{padding-bottom:8px}.card-headline{margin-top:0;padding-top:0;font-family:var(--ifx-font-family);font-weight:600;font-size:1.5rem;line-height:2rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card-headline.isHovered{color:#0A8276}.card-headline.horizontal{font-size:1.25rem;line-height:28px}";
const IfxCardHeadlineStyle0 = cardHeadlineCss;

const CardHeadline = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.direction = undefined;
        this.hasDesc = undefined;
        this.isHovered = false;
    }
    componentWillLoad() {
        var _a;
        const cardElement = this.el.closest('ifx-card');
        if (cardElement) {
            const cardClass = (_a = cardElement.shadowRoot.querySelector('.card')) === null || _a === void 0 ? void 0 : _a.className;
            if (cardClass && cardClass.includes('horizontal')) {
                this.direction = 'horizontal';
            }
            const desc = cardElement.querySelector('ifx-card-text');
            if (desc) {
                this.hasDesc = true;
            }
        }
    }
    render() {
        return (h("div", { key: '9433ff789abb135f340b7597d4abac96d1fa9983', class: `card__headline-wrapper ${this.hasDesc ? 'withDesc' : ""}` }, h("div", { key: '0de5cdecbd7b8d518e2fdd51ed9d29dc0aee33e1', class: `card-headline ${this.direction} ${this.isHovered ? 'isHovered' : ""}` }, h("slot", { key: '00a616ae175bfe6d63e595b1363cee8cc895c7f2' }))));
    }
    get el() { return getElement(this); }
};
CardHeadline.style = IfxCardHeadlineStyle0;

export { CardHeadline as ifx_card_headline };

//# sourceMappingURL=ifx-card-headline.entry.js.map