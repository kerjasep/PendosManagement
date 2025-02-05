import { h } from "@stencil/core";
import { createPopper } from "@popperjs/core";
export class Tooltip {
    constructor() {
        this.popperInstance = null;
        this.onMouseEnter = () => {
            var _a, _b;
            // Enable the event listeners immediately
            (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.setOptions((options) => (Object.assign(Object.assign({}, options), { modifiers: [
                    ...options.modifiers,
                    { name: 'eventListeners', enabled: true },
                ] })));
            // Initialize the popper instance
            this.initializePopper();
            // Make the tooltip visible
            this.tooltipVisible = true;
            this.tooltipEl.style.display = 'block';
            // Update the popper instance immediately after initialization
            (_b = this.popperInstance) === null || _b === void 0 ? void 0 : _b.update();
        };
        this.onMouseLeave = () => {
            this.tooltipVisible = false;
            this.tooltipEl.style.display = 'none';
        };
        this.onClick = () => {
            var _a;
            if (this.variant.toLowerCase() === 'dismissible') {
                this.initializePopper();
                this.tooltipVisible = !this.tooltipVisible;
                this.tooltipEl.style.display = this.tooltipVisible ? 'block' : 'none';
                (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.update();
            }
        };
        this.onDismissClick = () => {
            this.tooltipVisible = false;
            this.tooltipEl.style.display = 'none';
        };
        this.tooltipVisible = false;
        this.header = '';
        this.text = '';
        this.position = 'auto';
        this.internalPosition = 'auto';
        this.variant = 'compact';
        this.icon = undefined;
    }
    componentWillLoad() {
        if (this.variant.toLowerCase().trim() === "") {
            this.variant = 'compact';
        }
    }
    componentDidLoad() {
        const slotElement = this.el.shadowRoot.querySelector('.tooltip__container').firstChild;
        if (this.variant.toLowerCase() === 'compact' || this.variant.toLowerCase() === 'extended') {
            slotElement.addEventListener('mouseenter', this.onMouseEnter);
            slotElement.addEventListener('mouseleave', this.onMouseLeave);
        }
        else {
            slotElement.addEventListener('click', this.onClick);
        }
    }
    initializePopper() {
        if (this.popperInstance)
            return;
        this.referenceEl = this.el;
        this.tooltipEl;
        if (this.variant.toLowerCase() === 'compact') {
            this.tooltipEl = this.el.shadowRoot.querySelector('.tooltip-compact');
        }
        else if (this.variant.toLowerCase() === 'dismissible') {
            this.tooltipEl = this.el.shadowRoot.querySelector('.tooltip-dismissible');
        }
        else {
            this.tooltipEl = this.el.shadowRoot.querySelector('.tooltip-extended');
        }
        const effectivePosition = this.position === 'auto' ? this.determineBestPosition() : this.position;
        // Set the internalPosition
        this.internalPosition = effectivePosition;
        if (this.tooltipEl && this.referenceEl) {
            this.popperInstance = createPopper(this.referenceEl, this.tooltipEl, {
                placement: this.internalPosition,
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 8] // this offset should be adjusted to ensure the tooltip doesn't overlap its reference element
                        }
                    },
                    {
                        name: 'arrow',
                        options: {
                            element: '.tooltip-arrow-svg'
                        }
                    }
                ]
            });
        }
        // Add this line to set the 'data-placement' attribute on the tooltip
        this.tooltipEl.setAttribute('data-placement', effectivePosition);
    }
    determineBestPosition() {
        // This is a simplified version, you can enhance this based on available viewport space.
        const rect = this.referenceEl.getBoundingClientRect();
        const yOffset = window.scrollY; // Get current scroll position
        const xOffset = window.scrollX; // Get current horizontal scroll position
        const verticalHalfwayPoint = rect.top + yOffset + rect.height / 2;
        const horizontalHalfwayPoint = rect.left + xOffset + rect.width / 2;
        if (this.position === 'auto') {
            if (verticalHalfwayPoint > window.innerHeight / 2) {
                if (horizontalHalfwayPoint > window.innerWidth / 2) {
                    return 'top-end';
                }
                else {
                    return 'top-start';
                }
            }
            else {
                if (horizontalHalfwayPoint > window.innerWidth / 2) {
                    return 'bottom-end';
                }
                else {
                    return 'bottom-start';
                }
            }
        }
        else {
            return this.position;
        }
    }
    positionChanged(newVal) {
        var _a;
        this.internalPosition = newVal;
        (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.destroy();
        this.popperInstance = null; // Force re-initialization on next mouse enter
    }
    disconnectedCallback() {
        var _a;
        (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    render() {
        const tooltipDismissible = {
            'tooltip-dismissible': true,
            'visible': this.tooltipVisible,
        };
        const tooltipCompact = {
            'tooltip-compact': true,
            'visible': this.tooltipVisible,
        };
        const tooltipExtended = {
            'tooltip-extended': true,
            'visible': this.tooltipVisible,
        };
        return (h("div", { key: 'eab55ae528d700f4d5ea29dd772f6f37b2ff1a70', "aria-label": "a tooltip showing important information", "aria-value": this.header, class: "tooltip__container" }, h("slot", { key: '17803b63d887f381734ddecda9c5c11c6d433044' }), this.variant.toLowerCase() === 'dismissible' && h("div", { class: tooltipDismissible }, h("button", { "aria-label": "Close Tooltip", class: "close-button", onClick: this.onDismissClick }, h("ifx-icon", { icon: "cross16" })), h("div", { class: "tooltip-dismissible-content" }, this.header && h("div", { class: "tooltip-dismissible-header" }, this.header), h("div", { class: "tooltip-dismissible-body" }, this.text)), h("svg", { class: "tooltip-arrow-svg", width: "12", height: "8", viewBox: "0 0 12 8", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { id: "Indicator", d: "M6 0L12 8L0 8L6 0Z", fill: "#1D1D1D" }))), this.variant.toLowerCase() === 'compact' &&
            h("div", { class: tooltipCompact }, this.text, h("svg", { class: "tooltip-arrow-svg", width: "12", height: "8", viewBox: "0 0 12 8", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { id: "Indicator", d: "M6 0L12 8L0 8L6 0Z", fill: "#1D1D1D" }))), this.variant.toLowerCase() === 'extended' &&
            h("div", { class: tooltipExtended }, h("slot", { name: "icon" }, this.icon ? h("div", { class: "extended_icon" }, h("ifx-icon", { icon: this.icon })) :
                h("svg", { class: "extended_icon", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "none", viewBox: "0 0 24 24" }, h("path", { stroke: "#fff", "stroke-linecap": "round", "stroke-linejoin": "round", d: "M20.5 2.5h-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2Z" }), h("path", { stroke: "#fff", d: "M19 17H6l2.5-4 2.097 2.516.405.486.379-.506 4.118-5.49.003-.002L19 17Z" }), h("path", { fill: "#fff", d: "M10 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" }))), h("div", { class: "tooltip-extended-content" }, this.header && h("div", { class: "tooltip-extended-header" }, this.header), h("div", { class: "tooltip-extended-body" }, this.text)), h("svg", { class: "tooltip-arrow-svg", width: "12", height: "8", viewBox: "0 0 12 8", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { id: "Indicator", d: "M6 0L12 8L0 8L6 0Z", fill: "#1D1D1D" })))));
    }
    static get is() { return "ifx-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["tooltip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tooltip.css"]
        };
    }
    static get properties() {
        return {
            "header": {
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
                "attribute": "header",
                "reflect": false,
                "defaultValue": "''"
            },
            "text": {
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
                "attribute": "text",
                "reflect": false,
                "defaultValue": "''"
            },
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'bottom-start' | 'top-start' | 'left' | 'bottom-end' | 'top-end' | 'right' | 'bottom' | 'top' | 'auto'",
                    "resolved": "\"auto\" | \"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"right\" | \"top\" | \"top-end\" | \"top-start\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "position",
                "reflect": false,
                "defaultValue": "'auto'"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'compact' | 'dismissible' | 'extended'",
                    "resolved": "\"compact\" | \"dismissible\" | \"extended\"",
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
                "defaultValue": "'compact'"
            },
            "icon": {
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
                "attribute": "icon",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "tooltipVisible": {},
            "internalPosition": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "position",
                "methodName": "positionChanged"
            }];
    }
}
//# sourceMappingURL=tooltip.js.map
