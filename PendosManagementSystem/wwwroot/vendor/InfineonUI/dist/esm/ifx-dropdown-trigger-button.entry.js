import { r as registerInstance, h } from './index-f742c724.js';

const dropdownTriggerButtonCss = ":host{display:inline-block}.rotate{transition:transform 0.2s ease-in-out;transform:rotate(-180deg);margin-top:0em}.icon{margin-top:0em;transition:transform 0.2s ease-in-out}";
const IfxDropdownTriggerButtonStyle0 = dropdownTriggerButtonCss;

const DropdownItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isOpen = false;
        this.theme = 'default';
        this.variant = undefined;
        this.size = 'm';
        this.disabled = undefined;
        this.hideArrow = false;
    }
    render() {
        return (h("ifx-button", { key: '3775e34ae02e28c92227b0e187dc915aee424d8b', variant: this.variant, theme: this.theme, size: this.size, disabled: this.disabled, class: "dropdown-trigger-button" }, h("slot", { key: 'b32e78e63a2af7a172b9f7034077f01be9f84ea1' }), !this.hideArrow &&
            h("ifx-icon", { icon: "chevron-down-12", class: `icon${this.isOpen ? ' rotate' : ''}` })));
    }
};
DropdownItem.style = IfxDropdownTriggerButtonStyle0;

export { DropdownItem as ifx_dropdown_trigger_button };

//# sourceMappingURL=ifx-dropdown-trigger-button.entry.js.map