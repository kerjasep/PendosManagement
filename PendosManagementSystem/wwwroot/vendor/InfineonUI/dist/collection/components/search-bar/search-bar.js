import { h } from "@stencil/core";
export class SearchBar {
    constructor() {
        this.handleCloseButton = () => {
            this.internalState = !this.internalState;
            this.ifxSearchBarIsOpen.emit(this.internalState);
        };
        this.handleFocus = () => {
            this.internalState = true;
        };
        this.isOpen = true;
        this.disabled = false;
        this.internalState = undefined;
        this.value = undefined;
        this.maxlength = undefined;
    }
    async onNavbarMobile() {
        this.ifxSearchBarIsOpen.emit(false);
        this.internalState = false;
    }
    handlePropChange() {
        this.internalState = this.isOpen;
    }
    setInitialState() {
        this.internalState = this.isOpen;
    }
    componentWillLoad() {
        this.setInitialState();
        this.ifxSearchBarIsOpen.emit(this.internalState);
    }
    handleInput(event) {
        this.value = event.detail;
    }
    render() {
        return (h("div", { key: '07463fda77bb204a7ff8274bbd983b23b945d26b', "aria-label": 'a search bar', "aria-disabled": this.disabled, class: `search-bar ${this.internalState ? 'open' : 'closed'}` }, this.internalState ? (h("div", { class: "search-bar-wrapper" }, h("ifx-search-field", { disabled: this.disabled, value: this.value, maxlength: this.maxlength, onIfxInput: this.handleInput.bind(this) }, h("ifx-icon", { icon: "search-16", slot: "search-icon" })), h("a", { tabindex: "-1", href: 'javascript:void(0)', onClick: this.handleCloseButton }, "Close"))) : (h("div", { class: "search-bar__icon-wrapper", onClick: this.handleCloseButton }, h("ifx-icon", { icon: "search-16" })))));
    }
    static get is() { return "ifx-search-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["search-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["search-bar.css"]
        };
    }
    static get properties() {
        return {
            "isOpen": {
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
                "attribute": "is-open",
                "reflect": false,
                "defaultValue": "true"
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
                "reflect": false,
                "defaultValue": "false"
            },
            "value": {
                "type": "string",
                "mutable": true,
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
                "attribute": "value",
                "reflect": false
            },
            "maxlength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "maxlength",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "internalState": {}
        };
    }
    static get events() {
        return [{
                "method": "ifxInput",
                "name": "ifxInput",
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
                "method": "ifxSearchBarIsOpen",
                "name": "ifxSearchBarIsOpen",
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
            "onNavbarMobile": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
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
                "propName": "isOpen",
                "methodName": "handlePropChange"
            }];
    }
}
//# sourceMappingURL=search-bar.js.map
