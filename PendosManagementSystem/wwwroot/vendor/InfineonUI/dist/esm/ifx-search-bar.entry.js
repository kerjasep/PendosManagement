import { r as registerInstance, c as createEvent, h, g as getElement } from './index-f742c724.js';

const searchBarCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}:host{width:100%;display:flex}.search-bar{box-sizing:border-box;height:40px;background-color:#FFFFFF;display:flex;flex-direction:row;align-items:center;width:100%;font-family:var(--ifx-font-family)}.search-bar.closed{display:flex;width:auto;justify-content:flex-start}.search-bar .search-bar-wrapper{display:flex;align-items:center;gap:16px;width:100%}.search-bar .search-bar-wrapper a{text-decoration:none;font-size:1rem;font-style:normal;font-weight:600;line-height:1.5rem;color:#0A8276;cursor:pointer}.search-bar .search-bar-wrapper ifx-search-field{width:100%}.search-bar .search-bar__icon-wrapper{display:none;flex-direction:row;align-items:center}.search-bar .search-bar__icon-wrapper ifx-icon:hover{cursor:pointer}.search-bar.closed .search-bar__icon-wrapper{display:flex}.search-bar.closed .search-bar-wrapper{display:none}";
const IfxSearchBarStyle0 = searchBarCss;

const SearchBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ifxInput = createEvent(this, "ifxInput", 7);
        this.ifxSearchBarIsOpen = createEvent(this, "ifxSearchBarIsOpen", 7);
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
    get el() { return getElement(this); }
    static get watchers() { return {
        "isOpen": ["handlePropChange"]
    }; }
};
SearchBar.style = IfxSearchBarStyle0;

export { SearchBar as ifx_search_bar };

//# sourceMappingURL=ifx-search-bar.entry.js.map