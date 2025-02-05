import { r as registerInstance, h, a as Host, g as getElement } from './index-f742c724.js';

const cardCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#FFFFFF;background-clip:border-box;border:1px solid #EEEDED;border-radius:1px;width:350px;height:auto;font-family:var(--ifx-font-family)}.card.linkHovered{border-color:#EEEDED}.card.cardHovered{border-color:#0A8276}.card.noBtns .vertical .lower__body-wrapper{padding-bottom:24px}.card.noBtns .horizontal .lower__body-wrapper{padding-bottom:24px}.card .horizontal{display:flex;flex-direction:row;min-height:218px}.card .horizontal .card-img{flex:1;text-decoration:none}.card .horizontal .card-img.noImage{display:none}.card .horizontal .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .horizontal .lower__body-wrapper{flex:1;display:grid;grid-template-rows:1fr auto}.card .horizontal .lower__body-wrapper .upper-body{display:flex;flex-direction:column;text-decoration:none;color:#1D1D1D;padding:24px 24px 0px 24px}.card .vertical .upper__body-wrapper{text-decoration:none;color:#1D1D1D}.card .vertical .upper__body-wrapper .card-img{height:190px}.card .vertical .upper__body-wrapper .card-img.noImage{display:none}.card .vertical .upper__body-wrapper .upper-body{padding:24px 24px 0px 24px}.card .vertical .lower__body-wrapper:hover{border-color:#EEEDED}.card.horizontal{flex-direction:row;width:538px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.left .horizontal .card-img{order:1}.card.horizontal.left .horizontal .lower__body-wrapper{order:2}.card:focus,.card:focus-visible,.focus{outline:none;border-color:#0A8276 !important}";
const IfxCardStyle0 = cardCss;

const Card = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.noBtns = undefined;
        this.direction = 'vertical';
        this.alignment = undefined;
        this.noImg = undefined;
        this.href = "";
        this.internalHref = "";
        this.target = "_self";
    }
    setImgPosition(event) {
        this.alignment = event.detail;
    }
    handleComponentAdjustment() {
        const image = this.el.querySelector('ifx-card-image');
        const links = this.el.querySelector('ifx-card-links');
        if (!image) {
            this.noImg = true;
        }
        else
            this.noImg = false;
        if (!links) {
            this.noBtns = true;
        }
        else
            this.noBtns = false;
        if (this.href.trim() === "") {
            this.internalHref = undefined;
        }
        else
            this.internalHref = this.href;
    }
    handleClassList(el, type, className) {
        el.classList[type](className);
    }
    handleHovering() {
        const card = this.el.shadowRoot.querySelector('.card');
        let cardHeadline = this.el.querySelector('ifx-card-headline');
        if (this.href) {
            card.addEventListener('mouseover', (ev) => {
                // const target = ev.target;
                // const relatedTarget = ev.relatedTarget;
                // if (relatedTarget && relatedTarget !== target && !target.contains(relatedTarget)) {
                //   this.handleClassList(card, 'add', 'borderHovered')
                // }
                if (ev.target.nodeName === 'IFX-CARD-LINKS' || ev.target.nodeName === 'IFX-BUTTON') {
                    this.handleClassList(card, 'add', 'linkHovered');
                }
                else {
                    this.handleClassList(card, 'add', 'cardHovered');
                    if (cardHeadline) {
                        cardHeadline.isHovered = true;
                    }
                }
            });
            card.addEventListener('mouseout', () => {
                if (cardHeadline) {
                    cardHeadline.isHovered = false;
                }
                //this.handleClassList(card, 'remove', 'borderHovered')
                this.handleClassList(card, 'remove', 'cardHovered');
                this.handleClassList(card, 'add', 'linkHovered');
            });
        }
    }
    componentWillLoad() {
        this.handleComponentAdjustment();
    }
    componentDidLoad() {
        this.handleHovering();
        this.addEventListenersToHandleCustomFocusState();
    }
    addEventListenersToHandleCustomFocusState() {
        const element = this.el.shadowRoot;
        if (!element) {
            console.error('element not found');
            return;
        }
        const upperBodyWrapper = element.querySelector('.upper__body-wrapper');
        if (!upperBodyWrapper) {
            console.error('upper body wrapper not found');
            return;
        }
        element.tabIndex = -1;
        upperBodyWrapper.tabIndex = -1;
    }
    componentWillUpdate() {
        this.handleComponentAdjustment();
    }
    render() {
        return (h(Host, { key: '92e643805fa0886d6a99a0082792af3ba1f4d441' }, h("div", { key: 'e2f5129d0123e6390aae5dac5388167ab91dc8f1', "aria-labelledby": "label", class: `card 
          ${this.noBtns ? 'noBtns' : ""}
          ${this.direction} 
          ${this.alignment}` }, this.direction === 'horizontal' &&
            h("div", { class: "horizontal" }, h("a", { class: `card-img ${this.noImg ? 'noImage' : ""}`, href: this.internalHref }, h("slot", { name: "img" })), h("div", { class: 'lower__body-wrapper' }, h("a", { class: 'upper-body', href: this.internalHref }, h("slot", null)), h("div", null, h("slot", { name: 'buttons' })))), this.direction === 'vertical' &&
            h("div", { class: "vertical" }, h("a", { class: 'upper__body-wrapper', href: this.internalHref, target: this.target }, h("div", { class: `card-img ${this.noImg ? 'noImage' : ""}` }, h("slot", { name: "img" })), h("div", { class: 'upper-body' }, h("slot", null))), h("div", { class: 'lower__body-wrapper' }, h("slot", { name: 'buttons' }))))));
    }
    get el() { return getElement(this); }
};
Card.style = IfxCardStyle0;

export { Card as ifx_card };

//# sourceMappingURL=ifx-card.entry.js.map