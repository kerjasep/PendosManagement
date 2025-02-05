import { h, Host } from "@stencil/core";
export class Card {
    constructor() {
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
    static get is() { return "ifx-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card.css"]
        };
    }
    static get properties() {
        return {
            "direction": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'horizontal' | 'vertical'",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "direction",
                "reflect": false,
                "defaultValue": "'vertical'"
            },
            "href": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "href",
                "reflect": false,
                "defaultValue": "\"\""
            },
            "target": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "target",
                "reflect": false,
                "defaultValue": "\"_self\""
            }
        };
    }
    static get states() {
        return {
            "noBtns": {},
            "alignment": {},
            "noImg": {},
            "internalHref": {}
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "imgPosition",
                "method": "setImgPosition",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=card.js.map
