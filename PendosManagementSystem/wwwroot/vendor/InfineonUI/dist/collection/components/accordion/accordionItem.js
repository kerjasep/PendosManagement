//ifxAccordionItem
import { h } from "@stencil/core";
export class IfxAccordionItem {
    constructor() {
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
    static get is() { return "ifx-accordion-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["accordionItem.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["accordionItem.css"]
        };
    }
    static get properties() {
        return {
            "caption": {
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
                "attribute": "caption",
                "reflect": false
            },
            "open": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "open",
                "reflect": false,
                "defaultValue": "false"
            },
            "initialCollapse": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "initial-collapse",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "internalOpen": {}
        };
    }
    static get events() {
        return [{
                "method": "ifxItemOpen",
                "name": "ifxItemOpen",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "ifxItemClose",
                "name": "ifxItemClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "openChanged"
            }];
    }
}
//# sourceMappingURL=accordionItem.js.map
