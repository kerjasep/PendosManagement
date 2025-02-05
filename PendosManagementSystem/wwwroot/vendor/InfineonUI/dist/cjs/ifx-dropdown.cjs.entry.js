'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');
const popper = require('./popper-9a6aec9e.js');

const dropdownCss = ":host{display:inline-block}";
const IfxDropdownStyle0 = dropdownCss;

const Dropdown = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ifxOpen = index.createEvent(this, "ifxOpen", 7);
        this.ifxClose = index.createEvent(this, "ifxClose", 7);
        this.ifxDropdown = index.createEvent(this, "ifxDropdown", 7);
        this.placement = 'bottom-start';
        this.defaultOpen = false;
        this.internalIsOpen = false;
        this.noAppendToBody = false;
        this.disabled = undefined;
        this.noCloseOnOutsideClick = false;
        this.noCloseOnMenuClick = false;
        this.trigger = undefined;
        this.menu = undefined;
    }
    componentWillLoad() {
        //maybe not needed
        this.updateSlotContent();
        this.watchHandlerIsOpen(this.defaultOpen, this.internalIsOpen);
    }
    watchHandlerIsOpen(newValue, oldValue) {
        if (newValue !== oldValue && newValue !== this.internalIsOpen) {
            if (newValue) {
                this.openDropdown();
            }
            else {
                this.closeDropdown();
            }
        }
    }
    watchHandlerDisabled(newValue) {
        if (this.trigger) {
            this.trigger.disabled = newValue;
        }
    }
    watchHandlerSlot() {
        this.updateSlotContent();
    }
    // handling assignment of trigger and menu
    updateSlotContent() {
        // Get dropdown trigger. name has to start with ifx-dropdown-trigger
        this.trigger = this.el.querySelector('ifx-dropdown-trigger-button, ifx-dropdown-trigger');
        if (this.trigger) {
            this.trigger.disabled = this.disabled;
            this.trigger.removeEventListener('click', this.triggerClickHandler.bind(this));
            this.trigger.addEventListener('click', this.triggerClickHandler.bind(this));
        }
        // Remove menu if exists from body
        if (!this.noAppendToBody) {
            if (this.menu) {
                this.menu.remove();
            }
            // Get new menu and add to body
            this.menu = this.el.querySelector('ifx-dropdown-menu');
            // event handler for closing dropdown on menu click
            document.body.append(this.menu);
        }
        else {
            this.menu = this.el.querySelector('ifx-dropdown-menu');
        }
        this.menu.removeEventListener('click', this.menuClickHandler.bind(this));
        this.menu.addEventListener('click', this.menuClickHandler.bind(this));
    }
    menuClickHandler() {
        if (!this.noCloseOnMenuClick) {
            this.closeDropdown();
        }
    }
    triggerClickHandler() {
        if (!this.internalIsOpen) {
            this.openDropdown();
        }
        else {
            this.closeDropdown();
        }
    }
    disconnectedCallback() {
        // Destroy popper instance if exists
        if (this.popperInstance) {
            this.popperInstance.destroy();
            this.popperInstance = null;
        }
        // Remove menu if exists
        if (this.menu) {
            this.menu.remove();
        }
    }
    async isOpen() {
        return this.internalIsOpen;
    }
    async closeDropdown() {
        if (this.internalIsOpen) {
            this.internalIsOpen = false;
            // sets isOpen prop on trigger and menu
            this.trigger.isOpen = false;
            this.menu.isOpen = false;
            // Emit close event
            this.ifxClose.emit();
        }
        // Destroy popper instance if exists
        if (this.popperInstance) {
            this.popperInstance.destroy();
            this.popperInstance = null;
        }
    }
    async openDropdown() {
        if (!this.internalIsOpen && !this.disabled) {
            this.internalIsOpen = true;
            // sets isOpen prop on trigger and menu
            this.trigger.isOpen = true;
            this.menu.isOpen = true;
            // Create popper instance for positioning
            this.popperInstance = popper.createPopper(this.el, this.menu, { placement: this.placement });
            this.ifxOpen.emit();
        }
    }
    //emitted by and listening to it from the dropdown menu right now
    // @Listen('ifxDropdownMenu')
    // handleDropdownMenuEvents(event: CustomEvent) {
    //   this.ifxDropdown.emit(event.detail)
    //   console.log('Selected item received in higher-level parent:');
    // }
    handleOutsideClick(event) {
        const target = event.target;
        // Close dropdown if outside click
        if (!this.noCloseOnOutsideClick && !this.el.contains(target) && !this.menu.contains(target)) {
            this.closeDropdown();
        }
    }
    render() {
        return (index.h("div", { key: 'af1b5f1d06a61ae11d7c5060716c4a302b422dca', "aria-label": 'dropdown menu', class: 'dropdown' }, index.h("slot", { key: '846c87b78cf11029eb5486c91b2203599f93508f' })));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "defaultOpen": ["watchHandlerIsOpen"],
        "disabled": ["watchHandlerDisabled"]
    }; }
};
Dropdown.style = IfxDropdownStyle0;

exports.ifx_dropdown = Dropdown;

//# sourceMappingURL=ifx-dropdown.cjs.entry.js.map