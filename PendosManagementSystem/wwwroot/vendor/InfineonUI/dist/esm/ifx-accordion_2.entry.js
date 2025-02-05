import { r as registerInstance, h, g as getElement, c as createEvent } from './index-f742c724.js';

const accordionCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px;font-family:var(--ifx-font-family)}";
const IfxAccordionStyle0 = accordionCss;

const Accordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.autoCollapse = false;
    }
    async onItemOpen(event) {
        if (this.autoCollapse) {
            const items = Array.from(this.el.querySelectorAll('ifx-accordion-item'));
            for (const item of items) {
                const itemElement = item;
                if (itemElement !== event.target && (await itemElement.open)) {
                    itemElement.open = false;
                }
            }
        }
    }
    render() {
        return (h("div", { key: '975256f6d34c36f5eecdcedab9c4f05227336626', class: "accordion-wrapper" }, h("slot", { key: '10cf4057057d95596240cc83fb3f6d9c1fe3e4e2' })));
    }
    get el() { return getElement(this); }
};
Accordion.style = IfxAccordionStyle0;

const accordionItemCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s;font-family:var(--ifx-font-family)}.accordion-title:hover{border:1px solid #EEEDED;color:#08665C}.accordion-title{display:flex;align-items:center;padding:12px 16px;gap:12px;color:#0A8276;background-color:#FFFFFF;border:1px solid #EEEDED;cursor:pointer}.accordion-caption{font-weight:600;font-size:1.125rem}.accordion-content{gap:8px;max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out;line-height:24px;font-size:1rem;font-weight:400}.inner-content{background-color:#FFFFFF;padding:24px;word-wrap:break-word;overflow-wrap:anywhere;align-self:stretch;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s}.accordion-icon:hover{color:#08665C}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}";
const IfxAccordionItemStyle0 = accordionItemCss;

const IfxAccordionItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ifxItemOpen = createEvent(this, "ifxItemOpen", 7);
        this.ifxItemClose = createEvent(this, "ifxItemClose", 7);
        this.caption = undefined;
        this.open = false;
        this.initialCollapse = true;
        this.internalOpen = false;
    }
    componentWillLoad() {
        this.internalOpen = this.open;
        if (!this.initialCollapse) {
            this.internalOpen = true;
        }
    }
    componentDidLoad() {
        this.openAccordionItem();
    }
    componentDidUpdate() {
        this.openAccordionItem();
    }
    openChanged(newValue) {
        this.internalOpen = newValue;
    }
    toggleOpen() {
        this.internalOpen = !this.internalOpen;
        this.open = this.internalOpen;
        if (this.internalOpen) {
            this.ifxItemOpen.emit({ isOpen: this.internalOpen });
        }
        else {
            this.ifxItemClose.emit({ isClosed: !this.internalOpen });
        }
    }
    openAccordionItem() {
        if (this.internalOpen) {
            this.contentEl.style.maxHeight = `${this.contentEl.scrollHeight}px`;
        }
        else {
            this.contentEl.style.maxHeight = '0';
        }
    }
    handleSlotChange(e) {
        const slotElement = e.target;
        const nodes = slotElement.assignedNodes();
        if (nodes.length > 0) {
            nodes.forEach(node => {
                const observer = new MutationObserver((mutationsList, _) => {
                    for (let mutation of mutationsList) {
                        if (mutation.type === 'childList') {
                            if (this.internalOpen) {
                                this.openAccordionItem();
                            }
                        }
                    }
                });
                observer.observe(node, { attributes: true, childList: true, subtree: true });
            });
        }
        if (this.internalOpen) {
            this.openAccordionItem();
        }
    }
    render() {
        return (h("div", { key: '07f1b7982c1f9d5ff86afe165cb170f38b546944', "aria-label": this.caption, class: `accordion-item ${this.internalOpen ? 'open' : ''}` }, h("div", { key: '1f6268a5392e0a8f772bd4ba6c34087982b16e2e', class: "accordion-title", onClick: () => this.toggleOpen() }, h("span", { key: 'f05542ae5676a9e1c71da72c6594577494cabf9a', class: "accordion-icon" }, h("ifx-icon", { key: '6ef259ee86a0f967e885102559668d0f22459f54', icon: "chevron-down-12" })), h("span", { key: 'f62dc7583d81420c558e923d52f8932a8ebc0ca1', class: "accordion-caption" }, this.caption)), h("div", { key: '381b7e40f5cc202f0697e93157883c4546fd4542', class: "accordion-content", ref: (el) => (this.contentEl = el) }, h("div", { key: '0b27bed885f8ef477ebf66510759ab041f6e4873', class: "inner-content" }, h("slot", { key: '8e7293105ae43e904346cb8bf9cf5a17d092ac86', onSlotchange: (e) => this.handleSlotChange(e) })))));
    }
    static get watchers() { return {
        "open": ["openChanged"]
    }; }
};
IfxAccordionItem.style = IfxAccordionItemStyle0;

export { Accordion as ifx_accordion, IfxAccordionItem as ifx_accordion_item };

//# sourceMappingURL=ifx-accordion_2.entry.js.map