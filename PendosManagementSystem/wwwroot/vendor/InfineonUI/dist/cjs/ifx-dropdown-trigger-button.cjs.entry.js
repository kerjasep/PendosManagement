'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');

const dropdownTriggerButtonCss = ":host{display:inline-block}.rotate{transition:transform 0.2s ease-in-out;transform:rotate(-180deg);margin-top:0em}.icon{margin-top:0em;transition:transform 0.2s ease-in-out}";
const IfxDropdownTriggerButtonStyle0 = dropdownTriggerButtonCss;

const DropdownItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isOpen = false;
        this.theme = 'default';
        this.variant = undefined;
        this.size = 'm';
        this.disabled = undefined;
        this.hideArrow = false;
    }
    render() {
        return (index.h("ifx-button", { key: '3775e34ae02e28c92227b0e187dc915aee424d8b', variant: this.variant, theme: this.theme, size: this.size, disabled: this.disabled, class: "dropdown-trigger-button" }, index.h("slot", { key: 'b32e78e63a2af7a172b9f7034077f01be9f84ea1' }), !this.hideArrow &&
            index.h("ifx-icon", { icon: "chevron-down-12", class: `icon${this.isOpen ? ' rotate' : ''}` })));
    }
};
DropdownItem.style = IfxDropdownTriggerButtonStyle0;

exports.ifx_dropdown_trigger_button = DropdownItem;

//# sourceMappingURL=ifx-dropdown-trigger-button.cjs.entry.js.map