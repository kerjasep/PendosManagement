import { r as registerInstance, c as createEvent, h, g as getElement } from './index-f742c724.js';

const dropdownMenuCss = ":host{position:relative;z-index:1000}.dropdown-menu{display:none;visibility:hidden;flex-direction:column;width:224px;max-height:289px;min-width:224px;overflow-y:auto;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.dropdown-menu.small{max-height:266px;max-width:186px;overflow-y:auto}.dropdown-menu.hideTopPadding{padding-top:0px}.dropdown-menu.show{display:flex;visibility:visible;position:absolute}";
const IfxDropdownMenuStyle0 = dropdownMenuCss;

const DropdownMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.menuSize = createEvent(this, "menuSize", 7);
        this.ifxDropdownMenuItem = createEvent(this, "ifxDropdownMenuItem", 7);
        this.isOpen = false;
        this.size = 'l';
        this.hideTopPadding = false;
        this.filteredItems = [];
    }
    handleMenuFilter(event) {
        const searchValue = event.detail;
        this.filterDropdownItems(searchValue);
    }
    handleDropdownItemValueEmission(event) {
        this.ifxDropdownMenuItem.emit(event.detail);
    }
    filterDropdownItems(searchValue) {
        const allItems = Array.from(this.el.querySelectorAll('ifx-dropdown-item'));
        let dropdownItem, txtValue;
        let query = searchValue.toUpperCase();
        for (let i = 0; i < allItems.length; i++) {
            dropdownItem = allItems[i];
            txtValue = dropdownItem.textContent || dropdownItem.innerText;
            if (txtValue.toUpperCase().indexOf(query) > -1) {
                dropdownItem.setAttribute('hide', false);
            }
            else {
                dropdownItem.setAttribute('hide', true);
            }
        }
    }
    componentWillUpdate() {
        this.menuSize.emit(this.size);
    }
    componentWillLoad() {
        this.filteredItems = Array.from(this.el.querySelectorAll('ifx-dropdown-item'));
        const searchField = this.el.querySelector('ifx-search-field');
        const dropdownHeader = this.el.querySelector('ifx-dropdown-header');
        if (searchField || dropdownHeader) {
            this.hideTopPadding = true;
        }
        else
            this.hideTopPadding = false;
    }
    render() {
        return (h("div", { key: '24583268df1fced1b9346399e0b97f8a2ff4259b', class: `dropdown-menu 
      ${this.isOpen ? 'show' : ''} 
      ${this.hideTopPadding ? 'hideTopPadding' : ""}
      ${this.size === 's' ? 'small' : ""}` }, h("slot", { key: '7497285c6cb5c7540a0588e6a594efd1900227d8' })));
    }
    get el() { return getElement(this); }
};
DropdownMenu.style = IfxDropdownMenuStyle0;

export { DropdownMenu as ifx_dropdown_menu };

//# sourceMappingURL=ifx-dropdown-menu.entry.js.map