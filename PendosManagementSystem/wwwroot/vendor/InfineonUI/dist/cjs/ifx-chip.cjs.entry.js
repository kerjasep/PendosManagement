'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');

const chipCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.container{position:relative;font-family:var(--ifx-font-family)}.container .wrapper{display:inline-flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;background:#FFFFFF;border:1px solid #BFBBBB;border-radius:100px}.container .wrapper:hover{cursor:pointer;border:1px solid #575352}.container .wrapper.active{border:1px solid #0A8276;outline:none}.container .wrapper .wrapper-label{font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.container .wrapper .wrapper-close-button{display:flex;align-items:center}.container .wrapper .wrapper-close-button ifx-icon{transition:0.3s;width:12px;height:12px}.container .wrapper .wrapper-close-button.show ifx-icon{transition:transform 0.3s;transform:rotate(-180deg)}.container .wrapper.selected{border:1px solid #0A8276;outline:2px solid #0A8276;outline-offset:-3px}.container .wrapper.selected .wrapper-label{font-style:normal;font-weight:600;font-size:0.875rem;line-height:1.25rem;color:#0A8276}.container .wrapper.selected ifx-icon{color:#0A8276}.container .wrapper.selected:hover{border:1px solid #08665C;outline:2px solid #08665C}.container .wrapper.selected:hover ifx-icon,.container .wrapper.selected:hover .wrapper-label{color:#08665C}";
const IfxChipStyle0 = chipCss;

const Chip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ifxDropdownMenu = index.createEvent(this, "ifxDropdownMenu", 7);
        this.placeholder = undefined;
        this.selectedValue = "";
        this.active = false;
    }
    handleOutsideClick(event) {
        const path = event.composedPath();
        const chipWrapper = this.el.shadowRoot.querySelector('.wrapper');
        const dropdownMenu = this.getDropdownMenu();
        if (!path.includes(dropdownMenu) && !path.includes(chipWrapper)) {
            this.closedMenu();
        }
    }
    handleDropdownItemValueEmission(event) {
        this.selectedValue = event.detail;
        this.ifxDropdownMenu.emit(event.detail);
        this.toggleMenu();
    }
    getDropdownMenu() {
        let dropdownMenuComponent = this.el.querySelector('ifx-dropdown-menu');
        return dropdownMenuComponent;
    }
    closedMenu() {
        let dropdownMenuComponent = this.getDropdownMenu();
        if (dropdownMenuComponent.isOpen) {
            this.toggleCloseIcon();
        }
        dropdownMenuComponent.isOpen = false;
        this.active = false;
    }
    toggleMenu() {
        let dropdownMenuComponent = this.getDropdownMenu();
        dropdownMenuComponent.isOpen = !dropdownMenuComponent.isOpen;
        this.active = dropdownMenuComponent.isOpen;
        this.toggleCloseIcon();
    }
    toggleCloseIcon() {
        const closeIconWrapper = this.el.shadowRoot.querySelector('.wrapper-close-button');
        closeIconWrapper.classList.toggle('show');
    }
    render() {
        return (index.h("div", { key: '66ee00774eca57b5389ea7cfb40065f671bce287', "aria-value": this.selectedValue, "aria-label": 'chip with a dropdown menu', class: "dropdown container" }, index.h("div", { key: 'ac5bfe4644ca0dac032272585d2fe2c6abd88aed', class: `wrapper ${this.active ? 'active' : ''} ${this.selectedValue !== '' ? 'selected' : ''}`, onClick: () => this.toggleMenu(), tabIndex: 0 }, index.h("div", { key: '31f1bb6cb3d4af1315e92a4da72aa595bd7481f7', class: "wrapper-label" }, this.selectedValue ? this.selectedValue : this.placeholder), index.h("div", { key: '02d8d5aa89c09809349ffa4e57229fdfea3f38c9', class: "wrapper-close-button" }, index.h("ifx-icon", { key: 'b63abd3e5a5f2409e5704590e79f567b6fed9aed', icon: "chevrondown12" }))), index.h("slot", { key: '39324c6f72679095e351e30f5d323e608dace15f', name: "menu" })));
    }
    get el() { return index.getElement(this); }
};
Chip.style = IfxChipStyle0;

exports.ifx_chip = Chip;

//# sourceMappingURL=ifx-chip.cjs.entry.js.map