import { Host, h } from "@stencil/core";
import { queryShadowRoot, isHidden, isFocusable } from "../../global/utils/focus-trap";
import { animationTo, KEYFRAMES } from "../../global/utils/animation";
export class IfxModal {
    constructor() {
        this.focusableElements = [];
        this.handleTopFocus = () => {
            this.attemptFocus(this.getLastFocusableElement());
        };
        this.handleBottomFocus = () => {
            this.attemptFocus(this.getFirstFocusableElement());
        };
        this.handleKeypress = (event) => {
            if (!this.showModal) {
                return;
            }
            if (event.key === 'Escape') {
                this.doBeforeClose('ESCAPE_KEY');
            }
        };
        this.opened = false;
        this.showModal = this.opened || false;
        this.caption = 'Modal Title';
        this.closeOnOverlayClick = true;
        this.variant = 'default';
        this.size = 's';
        this.alertIcon = '';
        this.okButtonLabel = 'OK';
        this.cancelButtonLabel = 'Cancel';
        this.slotButtonsPresent = false;
        this.showCloseButton = true;
    }
    componentDidLoad() {
        // Query all focusable elements and store them in `focusableElements`.
        // Needed for the "focus trap" functionality.
        this.focusableElements = queryShadowRoot(this.hostElement.shadowRoot, (el) => isHidden(el) || el.matches('[data-focus-trap-edge]'), isFocusable);
    }
    getFirstFocusableElement() {
        return this.focusableElements[0];
    }
    getLastFocusableElement() {
        return this.focusableElements[this.focusableElements.length - 1];
    }
    attemptFocus(element) {
        if (element == null) {
            setTimeout(() => {
                this.closeButton.focus();
            });
            return;
        }
        setTimeout(() => {
            element.focus();
        }, 0);
    }
    open() {
        this.showModal = true;
        try {
            const anim = animationTo(this.modalContainer, KEYFRAMES.fadeIn, {
                duration: 200,
            });
            anim.addEventListener('finish', () => {
                // Setting focus on last item and removing immediately
                // so, on tab press first element is focused
                setTimeout(() => {
                    var _a, _b;
                    (_a = this.getLastFocusableElement()) === null || _a === void 0 ? void 0 : _a.focus();
                    (_b = this.getLastFocusableElement()) === null || _b === void 0 ? void 0 : _b.blur();
                }, 0);
                this.ifxModalOpen.emit();
            });
            this.hostElement.addEventListener('keydown', this.handleKeypress);
        }
        catch (err) {
            this.ifxModalOpen.emit();
        }
    }
    close() {
        try {
            const anim = animationTo(this.modalContainer, KEYFRAMES.fadeOut, {
                duration: 200,
            });
            anim.addEventListener('finish', () => {
                this.showModal = false;
                this.ifxModalClose.emit();
            });
            this.hostElement.removeEventListener('keydown', this.handleKeypress);
        }
        catch (err) {
            this.showModal = false;
            this.ifxModalClose.emit();
        }
    }
    doBeforeClose(trigger) {
        const triggers = [];
        triggers.push(trigger);
        const prevented = triggers.some((event) => event.defaultPrevented);
        if (!prevented) {
            this.opened = false;
        }
    }
    openedChanged(newValue) {
        if (newValue === true) {
            this.open();
        }
        else {
            this.close();
        }
    }
    handleOverlayClick() {
        if (this.closeOnOverlayClick) {
            this.doBeforeClose('BACKDROP');
        }
    }
    handleButtonsSlotChange(e) {
        var _a;
        if (((_a = e.currentTarget.assignedElements()[0]) === null || _a === void 0 ? void 0 : _a.childElementCount) > 0) {
            this.slotButtonsPresent = true;
        }
        else {
            this.slotButtonsPresent = false;
        }
    }
    render() {
        const isAlertVariant = this.variant !== 'default';
        return (h(Host, { key: '8943a629830ea52e8ebbab7bcf7ff5789d113849' }, h("div", { key: 'bc87419fa2c51df2eac092d1ecd137cef71dd882', ref: (el) => (this.modalContainer = el), class: `modal-container ${this.showModal ? 'open' : ''}` }, h("div", { key: '83df27716c8e71e20aeb1f4c9039cd9c446dc75c', class: "modal-overlay", onClick: () => this.handleOverlayClick() }), h("div", { key: 'a0c5b344dde5bd6dca1c55c85a311339b53ab2bc', "data-focus-trap-edge": true, onFocus: this.handleTopFocus, tabindex: "0" }), h("div", { key: '7380c752fb05bbf3a4f87598f106191f41a3f2d1', class: `modal-content-container ${this.size}`, role: "dialog", "aria-modal": "true", "aria-label": this.caption }, isAlertVariant ? (h("div", { class: `modal-icon-container ${this.variant === 'alert-brand' ? '' : 'danger'}` }, this.alertIcon ? h("ifx-icon", { icon: this.alertIcon }) : null)) : null, h("div", { key: '48ffaea7f7e470613e8892052d66f761e39ede91', class: "modal-content" }, h("div", { key: 'e75a07f1b512f0133c4d7442ae66fc12be6d893c', class: "modal-header" }, h("h2", { key: '4f39c5420bf60b8cfd1546546bed9502751ad9fc', class: "modal-caption" }, this.caption), this.showCloseButton &&
            h("ifx-icon-button", { class: 'modal-close-button', ref: (el) => (this.closeButton = el), icon: "cross-24", variant: "tertiary", onClick: () => this.doBeforeClose('CLOSE_BUTTON') })), h("div", { key: '89a45884724ce2f37c1e3d19b2134495b64a19a6', class: "modal-body" }, h("slot", { key: '7b99638c0cbd9fe05145177b556275a57a42e583', name: "content" /*onSlotchange={() => console.log('slots children modified')}*/ })), h("div", { key: '6a406e99b47f452579ec73856d94166a6f53ed3d', class: `modal-footer ${this.slotButtonsPresent ? 'buttons-present' : ''}` }, h("slot", { key: '8e829f0a17482bb4da76fb444111cb67306f4999', name: "buttons", onSlotchange: (e) => this.handleButtonsSlotChange(e) })))), h("div", { key: 'e8b2d9aa3f73bb573581d33269a8b57424fafddd', "data-focus-trap-edge": true, onFocus: this.handleBottomFocus, tabindex: "0" }))));
    }
    static get is() { return "ifx-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["modal.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["modal.css"]
        };
    }
    static get properties() {
        return {
            "opened": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "opened",
                "reflect": true,
                "defaultValue": "false"
            },
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
                "reflect": false,
                "defaultValue": "'Modal Title'"
            },
            "closeOnOverlayClick": {
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
                "attribute": "close-on-overlay-click",
                "reflect": false,
                "defaultValue": "true"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'alert-brand' | 'alert-danger'",
                    "resolved": "\"alert-brand\" | \"alert-danger\" | \"default\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'default'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'s' | 'm' | 'l'",
                    "resolved": "\"l\" | \"m\" | \"s\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'s'"
            },
            "alertIcon": {
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
                "attribute": "alert-icon",
                "reflect": false,
                "defaultValue": "''"
            },
            "okButtonLabel": {
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
                "attribute": "ok-button-label",
                "reflect": false,
                "defaultValue": "'OK'"
            },
            "cancelButtonLabel": {
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
                "attribute": "cancel-button-label",
                "reflect": false,
                "defaultValue": "'Cancel'"
            },
            "showCloseButton": {
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
                "attribute": "show-close-button",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "showModal": {},
            "slotButtonsPresent": {}
        };
    }
    static get events() {
        return [{
                "method": "ifxModalOpen",
                "name": "ifxModalOpen",
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
                "method": "ifxModalClose",
                "name": "ifxModalClose",
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
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "opened",
                "methodName": "openedChanged"
            }];
    }
}
//# sourceMappingURL=modal.js.map
