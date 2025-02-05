import { h } from "@stencil/core";
export class Chip {
    constructor() {
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
        return (h("div", { key: '66ee00774eca57b5389ea7cfb40065f671bce287', "aria-value": this.selectedValue, "aria-label": 'chip with a dropdown menu', class: "dropdown container" }, h("div", { key: 'ac5bfe4644ca0dac032272585d2fe2c6abd88aed', class: `wrapper ${this.active ? 'active' : ''} ${this.selectedValue !== '' ? 'selected' : ''}`, onClick: () => this.toggleMenu(), tabIndex: 0 }, h("div", { key: '31f1bb6cb3d4af1315e92a4da72aa595bd7481f7', class: "wrapper-label" }, this.selectedValue ? this.selectedValue : this.placeholder), h("div", { key: '02d8d5aa89c09809349ffa4e57229fdfea3f38c9', class: "wrapper-close-button" }, h("ifx-icon", { key: 'b63abd3e5a5f2409e5704590e79f567b6fed9aed', icon: "chevrondown12" }))), h("slot", { key: '39324c6f72679095e351e30f5d323e608dace15f', name: "menu" })));
    }
    static get is() { return "ifx-chip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["chip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["chip.css"]
        };
    }
    static get properties() {
        return {
            "placeholder": {
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
                "attribute": "placeholder",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "selectedValue": {},
            "active": {}
        };
    }
    static get events() {
        return [{
                "method": "ifxDropdownMenu",
                "name": "ifxDropdownMenu",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "CustomEvent",
                    "resolved": "CustomEvent<any>",
                    "references": {
                        "CustomEvent": {
                            "location": "global",
                            "id": "global::CustomEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "mousedown",
                "method": "handleOutsideClick",
                "target": "document",
                "capture": false,
                "passive": true
            }, {
                "name": "ifxDropdownItem",
                "method": "handleDropdownItemValueEmission",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=chip.js.map
