'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');
const index$1 = require('./index-5b0b9d4c.js');

const searchFieldCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.search-field{box-sizing:border-box;background-color:#FFFFFF;width:100%;font-family:var(--ifx-font-family)}.search-field .search-field__wrapper{box-sizing:border-box;height:40px;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;padding:8px 16px;gap:12px;flex:none;order:0;align-self:stretch;flex-grow:0;position:relative;width:100%;outline:none;color:#8D8786}.search-field .search-field__wrapper.focused{border:1px solid #0A8276}.search-field .search-field__wrapper.focused ifx-icon{color:#575352}.search-field .search-field__wrapper.search-field__wrapper-s{height:36px}.search-field .search-field__wrapper:hover:not(.focused,:focus){border:1px solid #3C3A39}.search-field .search-field__wrapper:focus{outline:none;border:1px solid #0A8276}.search-field .search-field__wrapper .delete-icon{right:12px;cursor:pointer}.search-field .search-field__wrapper input[type=text]{font-style:normal;font-weight:400;font-size:16px;color:#8D8786;border:none;width:100%;outline:none;height:16px}.search-field .search-field__wrapper input[type=text]:focus{outline:none;color:#1d1d1d}.search-field .search-field__wrapper input[type=text]:disabled{background-color:#EEEDED}.search-field .search-field__wrapper:has(input[disabled]){background-color:#EEEDED}";
const IfxSearchFieldStyle0 = searchFieldCss;

const SearchField = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ifxInput = index.createEvent(this, "ifxInput", 7);
        this.handleInput = () => {
            const query = this.inputElement.value;
            this.value = query; // update the value property when input changes
            this.ifxInput.emit(this.value);
        };
        this.handleDelete = () => {
            this.inputElement.value = '';
            this.value = "";
            this.ifxInput.emit(null);
        };
        this.value = '';
        this.insideDropdown = false;
        this.showDeleteIcon = false;
        this.showDeleteIconInternalState = false;
        this.disabled = false;
        this.size = 'l';
        this.isFocused = false;
        this.placeholder = "Search...";
        this.maxlength = null;
    }
    handleOutsideClick(event) {
        const path = event.composedPath();
        if (!path.includes(this.inputElement)) {
            this.isFocused = false;
        }
    }
    valueWatcher(newValue) {
        if (newValue !== this.inputElement.value) {
            this.inputElement.value = newValue;
        }
    }
    focusInput() {
        this.inputElement.focus();
        this.isFocused = true;
    }
    componentWillUpdate() {
        if (this.value !== "") {
            this.showDeleteIconInternalState = true;
        }
        else
            this.showDeleteIconInternalState = false;
    }
    render() {
        return (index.h("div", { key: '95eb84292a2d29de7767b23cf32c40e472c702c3', "aria-label": "a search field for user input", "aria-disabled": this.disabled, "aria-value": this.value, class: 'search-field' }, index.h("div", { key: '0494c89f3f7612f850a7a55620ec7c72585a4cfc', class: this.getWrapperClassNames(), tabindex: 1, onFocus: () => this.focusInput(), onClick: () => this.focusInput() }, index.h("ifx-icon", { key: '938168431dd311ab8c5d29c78607adbd341f527f', icon: "search-16", class: "search-icon" }), index.h("input", { key: '76964feb15f545d3d2e27b17e42b3068d1265e15', ref: (el) => (this.inputElement = el), type: "text", onInput: () => this.handleInput(), placeholder: this.placeholder, disabled: this.disabled, maxlength: this.maxlength, value: this.value }), this.showDeleteIcon && this.showDeleteIconInternalState ? (index.h("ifx-icon", { icon: "cremove16", class: "delete-icon", onClick: this.handleDelete })) : null)));
    }
    getSizeClass() {
        return `${this.size}` === "s"
            ? "search-field__wrapper-s"
            : "";
    }
    getWrapperClassNames() {
        return index$1.classNames(`search-field__wrapper`, `search-field__wrapper ${this.getSizeClass()}`, `${this.isFocused ? 'focused' : ""}`);
    }
    static get watchers() { return {
        "value": ["valueWatcher"]
    }; }
};
SearchField.style = IfxSearchFieldStyle0;

exports.ifx_search_field = SearchField;

//# sourceMappingURL=ifx-search-field.cjs.entry.js.map