//dropdown.tsx
import { h } from "@stencil/core";
import { createPopper } from "@popperjs/core";
export class Dropdown {
    constructor() {
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
            this.popperInstance = createPopper(this.el, this.menu, { placement: this.placement });
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
        return (h("div", { key: 'af1b5f1d06a61ae11d7c5060716c4a302b422dca', "aria-label": 'dropdown menu', class: 'dropdown' }, h("slot", { key: '846c87b78cf11029eb5486c91b2203599f93508f' })));
    }
    static get is() { return "ifx-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dropdown.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dropdown.css"]
        };
    }
    static get properties() {
        return {
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Placement",
                    "resolved": "\"auto\" | \"auto-end\" | \"auto-start\" | \"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
                    "references": {
                        "Placement": {
                            "location": "local",
                            "path": "/home/runner/work/infineon-design-system-stencil/infineon-design-system-stencil/packages/components/src/components/dropdown/dropdown.tsx",
                            "id": "src/components/dropdown/dropdown.tsx::Placement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "placement",
                "reflect": false,
                "defaultValue": "'bottom-start'"
            },
            "defaultOpen": {
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
                "attribute": "default-open",
                "reflect": false,
                "defaultValue": "false"
            },
            "noAppendToBody": {
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
                "attribute": "no-append-to-body",
                "reflect": false,
                "defaultValue": "false"
            },
            "disabled": {
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
                "attribute": "disabled",
                "reflect": false
            },
            "noCloseOnOutsideClick": {
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
                "attribute": "no-close-on-outside-click",
                "reflect": false,
                "defaultValue": "false"
            },
            "noCloseOnMenuClick": {
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
                "attribute": "no-close-on-menu-click",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "internalIsOpen": {},
            "trigger": {},
            "menu": {}
        };
    }
    static get events() {
        return [{
                "method": "ifxOpen",
                "name": "ifxOpen",
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
                "method": "ifxClose",
                "name": "ifxClose",
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
                "method": "ifxDropdown",
                "name": "ifxDropdown",
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
    static get methods() {
        return {
            "isOpen": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "closeDropdown": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "IOpenable": {
                            "location": "import",
                            "path": "./IOpenable",
                            "id": "src/components/dropdown/IOpenable.ts::IOpenable"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "openDropdown": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "IOpenable": {
                            "location": "import",
                            "path": "./IOpenable",
                            "id": "src/components/dropdown/IOpenable.ts::IOpenable"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "defaultOpen",
                "methodName": "watchHandlerIsOpen"
            }, {
                "propName": "disabled",
                "methodName": "watchHandlerDisabled"
            }];
    }
    static get listeners() {
        return [{
                "name": "slotchange",
                "method": "watchHandlerSlot",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "mousedown",
                "method": "handleOutsideClick",
                "target": "document",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=dropdown.js.map
