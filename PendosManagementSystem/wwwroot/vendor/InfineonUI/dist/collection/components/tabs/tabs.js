//ifxTabs.tsx
import { h } from "@stencil/core";
export class IfxTabs {
    constructor() {
        this.orientation = "horizontal";
        this.activeTabIndex = 0;
        this.internalOrientation = undefined;
        this.internalActiveTabIndex = 0;
        this.internalFocusedTabIndex = 0;
        this.tabRefs = [];
        this.tabHeaderRefs = [];
        this.disabledTabs = [];
        this.tabObjects = [];
    }
    setActiveAndFocusedTab(index) {
        if (index >= this.tabObjects.length) {
            index = this.tabObjects.length - 1;
        }
        if (!this.tabObjects[index].disabled) {
            this.internalActiveTabIndex = index;
            this.internalFocusedTabIndex = index;
        }
    }
    activeTabIndexChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.setActiveAndFocusedTab(newValue);
        }
    }
    componentWillLoad() {
        this.internalOrientation = this.orientation.toLowerCase() === 'vertical' ? 'vertical' : 'horizontal';
        if (this.internalActiveTabIndex !== this.activeTabIndex) {
            this.ifxTabChange.emit({ previousTab: this.internalActiveTabIndex, currentTab: this.activeTabIndex });
        }
        ;
        this.onSlotChange();
        this.setActiveAndFocusedTab(this.activeTabIndex);
        this.updateTabStyles();
    }
    updateTabStyles() {
        this.tabHeaderRefs.forEach((tab, index) => {
            tab.classList.toggle('active', index === this.internalActiveTabIndex);
            tab.setAttribute('aria-selected', index === this.internalActiveTabIndex ? 'true' : 'false');
        });
    }
    // needed for smooth border transition
    reRenderBorder() {
        const borderElement = this.el.shadowRoot.querySelector('.active-border');
        if (borderElement && this.tabHeaderRefs[this.internalActiveTabIndex]) {
            if (this.orientation === 'horizontal') {
                borderElement.style.left = `${this.tabHeaderRefs[this.internalActiveTabIndex].offsetLeft}px`;
                borderElement.style.width = `${this.tabHeaderRefs[this.internalActiveTabIndex].offsetWidth}px`;
                borderElement.style.top = '';
                borderElement.style.height = '';
            }
            else {
                borderElement.style.top = `${this.tabHeaderRefs[this.internalActiveTabIndex].offsetTop}px`;
                borderElement.style.height = `${this.tabHeaderRefs[this.internalActiveTabIndex].offsetHeight}px`;
                borderElement.style.left = '';
                borderElement.style.width = '';
            }
        }
    }
    // when a slot is removed / added
    onSlotChange() {
        const tabs = this.el.querySelectorAll('ifx-tab');
        this.tabObjects = Array.from(tabs).map((tab) => {
            return {
                header: tab === null || tab === void 0 ? void 0 : tab.header,
                disabled: (tab === null || tab === void 0 ? void 0 : tab.disabled) === true,
                icon: tab === null || tab === void 0 ? void 0 : tab.icon,
                iconPosition: tab === null || tab === void 0 ? void 0 : tab.iconPosition
            };
        });
        this.tabRefs = Array.from(tabs);
        this.tabRefs.forEach((tab, index) => {
            tab.setAttribute('slot', `tab-${index}`);
        });
    }
    setDefaultOrientation() {
        const validOrientations = ['horizontal', 'vertical'];
        const lowercaseOrientation = this.orientation.toLowerCase();
        if (!validOrientations.includes(lowercaseOrientation)) {
            this.internalOrientation = 'horizontal';
        }
        else
            this.internalOrientation = this.orientation;
    }
    componentDidLoad() {
        this.updateBorderAndFocus();
        // Add keyboard event listeners for each tab header
        this.tabHeaderRefs.forEach((tab, index) => {
            tab.addEventListener('focus', this.onTabFocus(index));
        });
    }
    onTabFocus(index) {
        return () => {
            this.internalFocusedTabIndex = index;
        };
    }
    disconnectedCallback() {
        // Remove keyboard event listeners when component is unmounted
        this.tabHeaderRefs.forEach((tab, index) => {
            tab.removeEventListener('focus', this.onTabFocus(index));
        });
    }
    componentDidUpdate() {
        this.updateBorderAndFocus();
    }
    updateBorderAndFocus() {
        this.reRenderBorder();
        this.updateTabFocusability();
    }
    updateTabFocusability() {
        this.tabHeaderRefs.forEach((tab, index) => {
            tab.tabIndex = index === this.internalActiveTabIndex ? 0 : -1;
        });
    }
    focusNextTab() {
        let nextIndex = this.internalFocusedTabIndex + 1;
        while (nextIndex < this.tabHeaderRefs.length && this.tabObjects[nextIndex].disabled) {
            nextIndex++;
        }
        if (nextIndex >= 0 && nextIndex < this.tabHeaderRefs.length) {
            this.internalFocusedTabIndex = nextIndex;
            this.tabHeaderRefs[nextIndex].focus();
        }
    }
    focusPreviousTab() {
        let prevIndex = this.internalFocusedTabIndex - 1;
        while ((prevIndex >= 0) && (this.tabObjects[prevIndex].disabled)) {
            prevIndex--;
        }
        if ((prevIndex >= 0) && (prevIndex < this.tabHeaderRefs.length)) {
            this.internalFocusedTabIndex = prevIndex;
            this.tabHeaderRefs[prevIndex].focus();
        }
    }
    getTabItemClass(index) {
        const isActive = index === this.internalActiveTabIndex && !this.tabObjects[index].disabled;
        const isDisabled = this.tabObjects[index].disabled;
        const iconPosition = this.tabObjects[index].iconPosition;
        return `tab-item ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''} ${'icon__' + iconPosition}`;
    }
    handleClick(tab, index) {
        this.ifxTabChange.emit({ previousTab: this.internalActiveTabIndex, currentTab: index });
        if (!tab.disabled)
            this.internalActiveTabIndex = index;
    }
    handleKeyDown(ev) {
        if (ev.key === 'Tab') {
            if (ev.shiftKey) {
                // Shift + Tab
                if (this.internalFocusedTabIndex === 0) {
                    // Allow default behavior to move focus out of component
                    return;
                }
                else {
                    ev.preventDefault();
                    this.focusPreviousTab();
                }
            }
            else {
                // Tab
                if (this.internalFocusedTabIndex === this.tabHeaderRefs.length - 1) {
                    // Allow default behavior to move focus out of component
                    return;
                }
                else {
                    ev.preventDefault();
                    this.focusNextTab();
                }
            }
        }
        else if (ev.key === 'Enter') {
            if (this.internalFocusedTabIndex !== -1 && !this.tabObjects[this.internalFocusedTabIndex].disabled) {
                const previouslyActiveTabIndex = this.internalActiveTabIndex;
                this.internalActiveTabIndex = this.internalFocusedTabIndex;
                this.ifxTabChange.emit({ previousTab: previouslyActiveTabIndex, currentTab: this.internalFocusedTabIndex });
            }
        }
    }
    render() {
        var _a;
        return (h("div", { key: '185dc8486aa6311fc70f1ef7f5ab37c009240ba7', "aria-label": "navigation tabs", class: `tabs ${this.internalOrientation}` }, h("ul", { key: '3468b66e7a4f9748cc03e6f42f1649f77d106186', role: "tablist", class: "tabs-list" }, (_a = this.tabObjects) === null || _a === void 0 ? void 0 :
            _a.map((tab, index) => (h("li", { class: this.getTabItemClass(index), ref: (el) => (this.tabHeaderRefs[index] = el), tabindex: "0", onClick: () => this.handleClick(tab, index), "aria-selected": index === this.internalActiveTabIndex ? 'true' : 'false', "aria-disabled": tab.disabled ? 'true' : 'false', role: "tab" }, (tab === null || tab === void 0 ? void 0 : tab.icon) ? h("ifx-icon", { icon: tab.icon }) : '', tab === null || tab === void 0 ? void 0 :
                tab.header))), h("div", { key: '14e4e6ea48f6895ca12944e88dab9423a275e95e', class: "active-border" })), h("div", { key: 'eb3f2e8c414ef68de615c42b38103d87f09e6b2a', class: "tab-content" }, Array.from(this.tabObjects).map((_, index) => (h("div", { style: { display: index === this.internalActiveTabIndex ? 'block' : 'none' } }, h("slot", { name: `tab-${index}` })))))));
    }
    static get is() { return "ifx-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["tabs.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tabs.css"]
        };
    }
    static get properties() {
        return {
            "orientation": {
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
                "attribute": "orientation",
                "reflect": false,
                "defaultValue": "\"horizontal\""
            },
            "activeTabIndex": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "active-tab-index",
                "reflect": false,
                "defaultValue": "0"
            }
        };
    }
    static get states() {
        return {
            "internalOrientation": {},
            "internalActiveTabIndex": {},
            "internalFocusedTabIndex": {},
            "tabRefs": {},
            "tabHeaderRefs": {},
            "disabledTabs": {},
            "tabObjects": {}
        };
    }
    static get events() {
        return [{
                "method": "ifxTabChange",
                "name": "ifxTabChange",
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
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "activeTabIndex",
                "methodName": "activeTabIndexChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "slotchange",
                "method": "onSlotChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=tabs.js.map
