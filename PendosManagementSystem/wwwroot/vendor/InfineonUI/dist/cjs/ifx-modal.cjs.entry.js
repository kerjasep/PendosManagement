'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');

/**
 * Copy/pasted from https://github.com/andreasbm/focus-trap
 */
/**
 * Traverses the slots of the open shadowroots and returns all children matching the query.
 * We need to traverse each child-depth one at a time because if an element should be skipped
 * (for example because it is hidden) we need to skip all of it's children. If we use querySelectorAll("*")
 * the information of whether the children is within a hidden parent is lost.
 * @param {ShadowRoot | HTMLElement} root
 * @param skipNode
 * @param isMatch
 * @param {number} maxDepth
 * @param {number} depth
 * @returns {HTMLElement[]}
 */
function queryShadowRoot(root, skipNode, isMatch, maxDepth = 20, depth = 0) {
    const matches = [];
    // If the depth is above the max depth, abort the searching here.
    if (depth >= maxDepth) {
        return matches;
    }
    // Traverses a slot element
    const traverseSlot = ($slot) => {
        // Only check nodes that are of the type Node.ELEMENT_NODE
        // Read more here https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
        const assignedNodes = $slot
            .assignedNodes()
            .filter((node) => node.nodeType === 1);
        if (assignedNodes.length > 0) {
            const $slotParent = assignedNodes[0].parentElement;
            return queryShadowRoot($slotParent, skipNode, isMatch, maxDepth, depth + 1);
        }
        return [];
    };
    // Go through each child and continue the traversing if necessary
    // Even though the typing says that children can't be undefined, Edge 15 sometimes gives an undefined value.
    // Therefore we fallback to an empty array if it is undefined.
    const children = Array.from(root.children || []);
    for (const $child of children) {
        // Check if the element and its descendants should be skipped
        if (skipNode($child)) {
            // console.log('-- SKIP', $child);
            continue;
        }
        // console.log('$child', $child);
        // If the element matches we always add it
        if (isMatch($child)) {
            matches.push($child);
        }
        if ($child.shadowRoot != null) {
            // If the element has a shadow root we need to traverse it
            matches.push(...queryShadowRoot($child.shadowRoot, skipNode, isMatch, maxDepth, depth + 1));
        }
        else if ($child.tagName === 'SLOT') {
            // If the child is a slot we need to traverse each assigned node
            matches.push(...traverseSlot($child));
        }
        else {
            // Traverse the children of the element
            matches.push(...queryShadowRoot($child, skipNode, isMatch, maxDepth, depth + 1));
        }
    }
    return matches;
}
/**
 * Returns whether the element is hidden.
 * @param $elem
 */
function isHidden($elem) {
    return ($elem.hasAttribute('hidden') ||
        ($elem.hasAttribute('aria-hidden') &&
            $elem.getAttribute('aria-hidden') !== 'false') ||
        // A quick and dirty way to check whether the element is hidden.
        // For a more fine-grained check we could use "window.getComputedStyle" but we don't because of bad performance.
        // If the element has visibility set to "hidden" or "collapse", display set to "none" or opacity set to "0" through CSS
        // we won't be able to catch it here. We accept it due to the huge performance benefits.
        $elem.style.display === `none` ||
        $elem.style.opacity === `0` ||
        $elem.style.visibility === `hidden` ||
        $elem.style.visibility === `collapse`);
    // If offsetParent is null we can assume that the element is hidden
    // https://stackoverflow.com/questions/306305/what-would-make-offsetparent-null
    // || $elem.offsetParent == null;
}
/**
 * Returns whether the element is disabled.
 * @param $elem
 */
function isDisabled($elem) {
    return ($elem.hasAttribute('disabled') ||
        ($elem.hasAttribute('aria-disabled') &&
            $elem.getAttribute('aria-disabled') !== 'false'));
}
/**
 * Determines whether an element is focusable.
 * Read more here: https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus/1600194#1600194
 * Or here: https://stackoverflow.com/questions/18261595/how-to-check-if-a-dom-element-is-focusable
 * @param $elem
 */
function isFocusable($elem) {
    // Discard elements that are removed from the tab order.
    if ($elem.getAttribute('tabindex') === '-1' ||
        isHidden($elem) ||
        isDisabled($elem)) {
        return false;
    }
    return (
    // At this point we know that the element can have focus (eg. won't be -1) if the tabindex attribute exists
    $elem.hasAttribute('tabindex') ||
        // Anchor tags or area tags with a href set
        (($elem instanceof HTMLAnchorElement || $elem instanceof HTMLAreaElement) &&
            $elem.hasAttribute('href')) ||
        // Form elements which are not disabled
        $elem instanceof HTMLButtonElement ||
        $elem instanceof HTMLInputElement ||
        $elem instanceof HTMLTextAreaElement ||
        $elem instanceof HTMLSelectElement ||
        // IFrames
        $elem instanceof HTMLIFrameElement);
}

function animationTo(element, keyframes, options) {
    const animated = element.animate(keyframes, Object.assign(Object.assign({}, options), { fill: 'both' }));
    animated.addEventListener('finish', () => {
        // @ts-ignore
        animated.commitStyles();
        animated.cancel();
    });
    return animated;
}
const keyframeDefaults = {
    easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
};
const KEYFRAMES = {
    fadeIn: [
        Object.assign(Object.assign({ offset: 0 }, keyframeDefaults), { opacity: 0 }),
        Object.assign(Object.assign({ offset: 1 }, keyframeDefaults), { opacity: 1 }),
    ],
    fadeOut: [
        Object.assign(Object.assign({ offset: 0 }, keyframeDefaults), { opacity: 1 }),
        Object.assign(Object.assign({ offset: 1 }, keyframeDefaults), { opacity: 0 }),
    ],
};

const modalCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.modal-container{display:none;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1060;overflow-y:auto;font-family:var(--ifx-font-family)}.modal-container.open{display:flex}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5;z-index:0}.modal-content-container{position:absolute;display:flex;justify-content:center;width:90%;min-height:218px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden;box-sizing:border-box;align-items:stretch}@media screen and (min-width: 768px){.modal-content-container{width:540px;min-height:132px}.modal-content-container.m,.modal-content-container.l,.modal-content-container.s{width:90%}}@media screen and (min-width: 1024px){.modal-content-container.s{width:47vw}.modal-content-container.m{width:63vw}.modal-content-container.l{width:80%}}.modal-content{display:flex;flex-direction:column;width:100%;max-height:90vh}.modal-icon-container{display:flex;align-items:center;justify-content:center;width:32px;background-color:#0A8276;align-self:stretch}.modal-icon-container.danger{background-color:#CD002F}.modal-icon-container ifx-icon{color:#FFFFFF}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:24px;min-height:76px;max-height:105px;box-sizing:border-box;border-radius:1px 1px 0px 0px;border-bottom:1px solid #EEEDED}.modal-caption{max-height:56px;display:-webkit-box;overflow:hidden;white-space:pre-wrap;word-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:28px}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-close-button{align-self:flex-start;margin-right:-8px}.modal-body{padding:16px 24px;min-height:56px;box-sizing:border-box;flex:1;overflow-y:auto}.modal-footer.buttons-present ::slotted(*){display:flex;justify-content:flex-end;gap:16px;padding:16px 24px 32px 16px}.modal-border{display:flex;align-items:center;justify-content:center;width:100%;font-size:1.5em;flex-grow:1}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}.modal-border.orange{background-color:#E16B25}.modal-border.ocean{background-color:#0A8276}.modal-border.grey{background-color:#575352}.modal-border.grey-200{background-color:#EEEDED}.modal-border.red{background-color:#CD002F}.modal-border.green{background-color:#4CA460}.modal-border.berry{background-color:#9C216E}";
const IfxModalStyle0 = modalCss;

const IfxModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ifxModalOpen = index.createEvent(this, "ifxModalOpen", 7);
        this.ifxModalClose = index.createEvent(this, "ifxModalClose", 7);
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
        return (index.h(index.Host, { key: '8943a629830ea52e8ebbab7bcf7ff5789d113849' }, index.h("div", { key: 'bc87419fa2c51df2eac092d1ecd137cef71dd882', ref: (el) => (this.modalContainer = el), class: `modal-container ${this.showModal ? 'open' : ''}` }, index.h("div", { key: '83df27716c8e71e20aeb1f4c9039cd9c446dc75c', class: "modal-overlay", onClick: () => this.handleOverlayClick() }), index.h("div", { key: 'a0c5b344dde5bd6dca1c55c85a311339b53ab2bc', "data-focus-trap-edge": true, onFocus: this.handleTopFocus, tabindex: "0" }), index.h("div", { key: '7380c752fb05bbf3a4f87598f106191f41a3f2d1', class: `modal-content-container ${this.size}`, role: "dialog", "aria-modal": "true", "aria-label": this.caption }, isAlertVariant ? (index.h("div", { class: `modal-icon-container ${this.variant === 'alert-brand' ? '' : 'danger'}` }, this.alertIcon ? index.h("ifx-icon", { icon: this.alertIcon }) : null)) : null, index.h("div", { key: '48ffaea7f7e470613e8892052d66f761e39ede91', class: "modal-content" }, index.h("div", { key: 'e75a07f1b512f0133c4d7442ae66fc12be6d893c', class: "modal-header" }, index.h("h2", { key: '4f39c5420bf60b8cfd1546546bed9502751ad9fc', class: "modal-caption" }, this.caption), this.showCloseButton &&
            index.h("ifx-icon-button", { class: 'modal-close-button', ref: (el) => (this.closeButton = el), icon: "cross-24", variant: "tertiary", onClick: () => this.doBeforeClose('CLOSE_BUTTON') })), index.h("div", { key: '89a45884724ce2f37c1e3d19b2134495b64a19a6', class: "modal-body" }, index.h("slot", { key: '7b99638c0cbd9fe05145177b556275a57a42e583', name: "content" /*onSlotchange={() => console.log('slots children modified')}*/ })), index.h("div", { key: '6a406e99b47f452579ec73856d94166a6f53ed3d', class: `modal-footer ${this.slotButtonsPresent ? 'buttons-present' : ''}` }, index.h("slot", { key: '8e829f0a17482bb4da76fb444111cb67306f4999', name: "buttons", onSlotchange: (e) => this.handleButtonsSlotChange(e) })))), index.h("div", { key: 'e8b2d9aa3f73bb573581d33269a8b57424fafddd', "data-focus-trap-edge": true, onFocus: this.handleBottomFocus, tabindex: "0" }))));
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "opened": ["openedChanged"]
    }; }
};
IfxModal.style = IfxModalStyle0;

exports.ifx_modal = IfxModal;

//# sourceMappingURL=ifx-modal.cjs.entry.js.map