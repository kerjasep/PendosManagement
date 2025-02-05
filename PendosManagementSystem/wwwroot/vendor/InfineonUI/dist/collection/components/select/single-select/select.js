import { h } from "@stencil/core";
import ChoicesJs from "choices.js";
import { filterObject, isDefined, isJSONParseable } from "./utils";
export class Choices {
    constructor() {
        this.value = undefined;
        this.name = undefined;
        this.items = undefined;
        this.choices = undefined;
        this.renderChoiceLimit = undefined;
        this.maxItemCount = undefined;
        this.addItems = undefined;
        this.removeItems = undefined;
        this.removeItemButton = undefined;
        this.editItems = undefined;
        this.duplicateItemsAllowed = undefined;
        this.delimiter = undefined;
        this.paste = undefined;
        this.showSearch = undefined;
        this.searchChoices = undefined;
        this.searchFields = undefined;
        this.searchFloor = undefined;
        this.searchResultLimit = undefined;
        this.position = undefined;
        this.resetScrollPosition = undefined;
        this.shouldSort = undefined;
        this.shouldSortItems = undefined;
        this.sorter = undefined;
        this.placeholder = undefined;
        this.searchPlaceholderValue = undefined;
        this.prependValue = undefined;
        this.appendValue = undefined;
        this.renderSelectedChoices = undefined;
        this.loadingText = undefined;
        this.noResultsText = undefined;
        this.noChoicesText = undefined;
        this.itemSelectText = undefined;
        this.addItemText = undefined;
        this.maxItemText = undefined;
        this.uniqueItemText = undefined;
        this.classNames = undefined;
        this.fuseOptions = undefined;
        this.addItemFilter = undefined;
        this.customAddItemText = undefined;
        this.callbackOnInit = undefined;
        this.callbackOnCreateTemplates = undefined;
        this.valueComparer = undefined;
        this.error = false;
        this.errorMessage = 'Error';
        this.label = '';
        this.disabled = false;
        this.placeholderValue = 'Placeholder';
        this.options = undefined;
        this.size = 'medium (40px)';
        this.selectedOption = null;
    }
    watchDisabled(newValue) {
        if (newValue) {
            this.disable();
        }
        else {
            this.enable();
        }
    }
    async handleChange() {
        this.ifxSelect.emit(this.choice.getValue());
        this.selectedOption = this.choice.getValue(); //store the selected option to reflect it in the template function
        this.setPreSelected(this.selectedOption.value); //set previously selected items from the input array to false and the new selection to true
        this.closeDropdown();
    }
    async highlightItem(item, runEvent) {
        this.choice.highlightItem(item, runEvent);
        return this;
    }
    async unhighlightItem(item) {
        this.choice.unhighlightItem(item);
        return this;
    }
    async highlightAll() {
        this.choice.highlightAll();
        return this;
    }
    async unhighlightAll() {
        this.choice.unhighlightAll();
        return this;
    }
    async removeActiveItemsByValue(value) {
        this.choice.removeActiveItemsByValue(value);
        return this;
    }
    async removeActiveItems(excludedId) {
        this.choice.removeActiveItems(excludedId);
        return this;
    }
    async removeHighlightedItems(runEvent) {
        this.choice.removeHighlightedItems(runEvent);
        return this;
    }
    async showDropdown(focusInput) {
        this.choice.showDropdown(focusInput);
        return this;
    }
    async hideDropdown(blurInput) {
        this.choice.hideDropdown(blurInput);
        return this;
    }
    async getValue(valueOnly) {
        return this.choice.getValue(valueOnly);
    }
    async setValue(args) {
        this.choice.setValue(args);
        return this;
    }
    async setChoiceByValue(value) {
        this.choice.setChoiceByValue(value);
        return this;
    }
    async setChoices(choices, value, label, replaceChoices) {
        let listOfChoices;
        if (typeof choices === 'string') {
            try {
                if (!isJSONParseable(choices)) {
                    //meaning the input string comes from storybook as a non valid json string to be displayed in a beautified version on storybook
                    choices = choices
                        .replace(/'/g, '"')
                        .replace(/"false"/g, 'false')
                        .replace(/"true"/g, 'true');
                }
                listOfChoices = [...JSON.parse(choices)];
            }
            catch (err) {
                console.error('Failed to parse choices:', err);
            }
        }
        else if (Array.isArray(choices) || typeof choices === 'object') {
            listOfChoices = [...choices];
        }
        else {
            console.error('Unexpected value for choices:', this.options);
        }
        this.choice.setChoices(listOfChoices, value, label, replaceChoices);
        return this;
    }
    async clearChoices() {
        this.choice.clearChoices();
        return this;
    }
    async clearStore() {
        this.choice.clearStore();
        return this;
    }
    async clearInput() {
        this.choice.clearInput();
        return this;
    }
    async enable() {
        this.choice.enable();
        this.disabled = false;
        return this;
    }
    async disable() {
        this.choice.disable();
        this.disabled = true;
        return this;
    }
    async ajax(fn) {
        this.choice.ajax(fn);
        return this;
    }
    componentDidLoad() {
        this.init();
        this.addEventListenersToHandleCustomFocusAndActiveState();
    }
    componentDidUpdate() {
        this.init();
    }
    disconnectedCallback() {
        this.destroy();
    }
    render() {
        const attributes = {
            'data-selector': 'root',
            'name': this.name || null,
            // 'remove-item-button': false,
        };
        const choicesWrapperClass = `ifx-choices__wrapper ${this.getSizeClass()}`;
        // destroy choices element to restore previous dom structure
        // so vdom can replace the element correctly
        this.destroy();
        return (h("div", { key: '70e9893bfcc8a12540373c83c6a88a029596019d', class: `ifx-select-container` }, this.label ? (h("div", { class: "ifx-label-wrapper" }, h("span", null, this.label))) : null, h("div", { key: 'fb8bf540b45ce01155d2e963c717f12eee0155ce', class: `${choicesWrapperClass} 
            ${this.disabled ? 'disabled' : ''} 
            ${this.error ? 'error' : ''}`, onClick: this.disabled ? undefined : () => this.toggleDropdown(), onKeyDown: event => this.handleKeyDown(event) }, h("select", Object.assign({ key: 'b262d6c8129922f84c36b8a64ba7e4d41a2632dc', disabled: this.disabled }, attributes, { "data-trigger": true, onChange: () => this.handleChange() }), this.createSelectOptions(this.options)), h("div", { key: '5af9837e16d35a33f902a334f6e85a12260265cd', class: "ifx-choices__icon-wrapper-up" }, h("ifx-icon", { key: "icon-up", icon: "chevronup-16" })), h("div", { key: '0557113bcaa3aa1511711e0c1c4e18569fed25be', class: "ifx-choices__icon-wrapper-down" }, h("ifx-icon", { key: "icon-down", icon: "chevron-down-16" }))), this.error ? (h("div", { class: "ifx-error-message-wrapper" }, h("span", null, this.errorMessage))) : null));
    }
    toggleDropdown() {
        const div = this.root.querySelector('.ifx-choices__wrapper');
        if (div.classList.contains('active') || this.choice.dropdown.isActive) {
            this.hideDropdown();
            div.classList.remove('active');
        }
        else {
            this.choice.showDropdown();
            div.classList.add('active');
        }
        const choicesElement = this.root.querySelector('.choices');
        choicesElement.classList.add('is-focused'); // Add the 'is-focused' class, cause a click on the wrapper (and not the embedded select element) doesnt add this automatically to the choices instance
    }
    closeDropdown() {
        const ifxChoicesWrapper = this.root.querySelector('.ifx-choices__wrapper');
        ifxChoicesWrapper.classList.remove('active');
    }
    handleOutsideClick(event) {
        const path = event.composedPath();
        const ifxChoicesContainer = this.root.querySelector('.ifx-choices__wrapper');
        if (!path.includes(this.root)) {
            ifxChoicesContainer.classList.remove('active');
        }
    }
    handleKeyDown(event) {
        if (this.disabled)
            return;
        const isSearchInput = event.target.classList.contains('choices__input');
        // If the event originated from the search input and the key is 'Space', do nothing.
        if (isSearchInput && event.code === 'Space') {
            return;
        }
        if (event.code === 'Enter' || (event.code === 'Space' && !isSearchInput)) {
            this.toggleDropdown();
        }
        // Only prevent default space behavior when it's not from the search input.
        if (event.code === 'Space' && !isSearchInput) {
            event.preventDefault(); // Prevent default page scrolling.
        }
    }
    getSizeClass() {
        return `${this.size}` === 's' ? 'small-select' : 'medium-select';
    }
    init() {
        const props = {
            allowHTML: true,
            items: this.items,
            choices: this.choices,
            renderChoiceLimit: this.renderChoiceLimit,
            maxItemCount: this.maxItemCount,
            addItems: this.addItems,
            removeItems: this.removeItems,
            removeItemButton: this.removeItemButton,
            editItems: this.editItems,
            duplicateItemsAllowed: this.duplicateItemsAllowed,
            delimiter: this.delimiter,
            paste: this.paste,
            searchEnabled: this.showSearch,
            searchChoices: this.searchChoices,
            searchFields: this.searchFields,
            searchFloor: this.searchFloor,
            searchResultLimit: this.searchResultLimit,
            position: this.position,
            resetScrollPosition: this.resetScrollPosition,
            shouldSort: false, // choices/groups will appear in the order they were given.
            shouldSortItems: this.shouldSortItems,
            sorter: this.sorter,
            placeholder: this.placeholder,
            searchPlaceholderValue: this.searchPlaceholderValue,
            prependValue: this.prependValue,
            appendValue: this.appendValue,
            renderSelectedChoices: this.renderSelectedChoices,
            loadingText: this.loadingText,
            noResultsText: this.noResultsText,
            noChoicesText: this.noChoicesText,
            itemSelectText: this.itemSelectText,
            addItemText: this.addItemText,
            maxItemText: this.maxItemText,
            uniqueItemText: this.uniqueItemText,
            classNames: this.classNames,
            fuseOptions: this.fuseOptions,
            callbackOnInit: this.callbackOnInit,
            callbackOnCreateTemplates: this.callbackOnCreateTemplates,
            valueComparer: this.valueComparer,
            addItemFilter: this.addItemFilter,
            customAddItemText: this.customAddItemText,
        };
        const settings = filterObject(props, isDefined);
        //type check
        const element = this.root.querySelector('[data-selector="root"]');
        if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
            // this.choice = new ChoicesJs(element, settings); //standard, without using custom templates
            const self = this; // save the context of this in a variable outside of the function to access it in the following
            this.choice = new ChoicesJs(element, Object.assign({}, settings, {
                callbackOnCreateTemplates: function (template) {
                    return {
                        //modifying the selected item template
                        item: ({ classNames }, data) => {
                            var _a, _b, _c, _d, _e, _f, _g;
                            let removeButtonHTML = '';
                            if (data.placeholder && !((_a = self.selectedOption) === null || _a === void 0 ? void 0 : _a.value)) {
                                // For placeholders, use data-id="placeholder"
                                return template(`
                  <div class="choices__placeholder" data-item data-id="${data.id}" data-value="${data.value}" ${data.disabled ? 'aria-disabled="true"' : ''}>
                    ${data.label === undefined ? this.placeholderValue : data.label}
                    ${removeButtonHTML}
                  </div>
                `);
                            }
                            else {
                                // For non-placeholder items, use the actual data ID
                                return template(`
                <div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable}" 
                      data-item 
                      data-id="${((_b = self.selectedOption) === null || _b === void 0 ? void 0 : _b.id) !== undefined ? (_c = self.selectedOption) === null || _c === void 0 ? void 0 : _c.id : self.choice.getValue().id}" 
                      data-value="${((_d = self.selectedOption) === null || _d === void 0 ? void 0 : _d.value) !== undefined ? (_e = self.selectedOption) === null || _e === void 0 ? void 0 : _e.value : self.choice.getValue().value}" 
                      ${data.disabled ? 'aria-disabled="true"' : ''}>
                  <span>${((_f = self.selectedOption) === null || _f === void 0 ? void 0 : _f.label) !== undefined ? (_g = self.selectedOption) === null || _g === void 0 ? void 0 : _g.label : self.choice.getValue().label}</span>
                  <!-- Add your remove button here if needed -->
                </div>
              `);
                            }
                        },
                        input: ({ classNames }) => {
                            return template(`
              <input type="search" name="search_terms" 
              class="${classNames.input} ${classNames.inputCloned} ${self.getSizeClass()}"
              autocomplete="off"
              autocapitalize="off"
              spellcheck="false"
              role="textbox"
              aria-autocomplete="list"
              aria-label="${this.showSearch ? this.searchPlaceholderValue : ''}"   >     
              `);
                        },
                        //modifying the template of each item in the options list
                        choice: ({ classNames }, data) => {
                            var _a, _b, _c, _d;
                            return template(`
              <div class="${classNames.item} ${classNames.itemChoice} ${self.getSizeClass()} 
              ${data.selected || ((_a = self.selectedOption) === null || _a === void 0 ? void 0 : _a.value) === data.value || ((_b = self.getPreSelected(self)) === null || _b === void 0 ? void 0 : _b.value) === data.value ? 'selected' : ''} 
              ${data.placeholder ? classNames.placeholder : ''} 
              ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable} 
                    role="${data.groupId && data.groupId > 0 ? 'treeitem' : 'option'}"
                    data-choice ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'}                     data-id="${data.id}"
                    data-value="${data.value}"
                    data-select-text="${this.config.itemSelectText}">
                <span>${data.label}</span>
                ${data.selected || ((_c = self.selectedOption) === null || _c === void 0 ? void 0 : _c.value) === data.value || ((_d = self.getPreSelected(self)) === null || _d === void 0 ? void 0 : _d.value) === data.value ? '<ifx-icon icon="check16"></ifx-icon>' : ''}
              </div>
            `);
                        },
                    };
                },
            }));
            //set select options
            this.setChoices(this.options, 'value', 'label', true);
            //set custom event listener to listen for search input
            self.addSearchEventListener(self, this.choice);
        }
        else {
            // handle the case when the element is neither an HTMLInputElement nor an HTMLSelectElement
        }
    }
    addEventListenersToHandleCustomFocusAndActiveState() {
        const div = this.root.querySelector('.ifx-choices__wrapper');
        if (!div) {
            console.error('.ifx-choices__wrapper not found');
            return;
        }
        div.tabIndex = 0;
        div.addEventListener('focus', function () {
            if (!this.classList.contains('disabled')) {
                this.classList.add('focus');
            }
        });
        div.addEventListener('blur', function () {
            this.classList.remove('focus');
        });
    }
    addSearchEventListener(self, choiceElement) {
        choiceElement.passedElement.element.addEventListener('search', function (event) {
            self.ifxInput.emit(event.detail.value);
        }, false);
        return choiceElement;
    }
    destroy() {
        if (this.element) {
            this.element = null;
        }
        if (this.choice) {
            this.choice.destroy();
            this.choice = null;
        }
    }
    //get selected values from input array
    getPreSelected(self) {
        const optionsArray = Array.isArray(self.options) ? self.options : JSON.parse(self.options);
        return optionsArray.find(option => option.selected === true) || null;
    }
    //set previously marked as selected items in the input array to unselected and select new ones
    setPreSelected(newValue) {
        const optionsArray = Array.isArray(this.options) ? this.options : JSON.parse(this.options);
        this.options = optionsArray.map(obj => {
            return Object.assign(Object.assign({}, obj), { selected: obj.value === newValue });
        });
    }
    //setting the value that gets displayed in the select at component start (either the value prop or a placeholder)
    createSelectOptions(ifxOptions) {
        var _a;
        if (this.value !== 'undefined' || ((_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.value) !== '') {
            let options;
            if (isJSONParseable(ifxOptions)) {
                options = [...JSON.parse(ifxOptions)];
            }
            else if (Array.isArray(ifxOptions) || typeof ifxOptions === 'object') {
                options = [...ifxOptions];
            }
            const optionValueBasedOnAvailableOptions = options === null || options === void 0 ? void 0 : options.find(option => { var _a; return option.value === this.value || ((_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.value); });
            if (optionValueBasedOnAvailableOptions) {
                return [h("option", { value: optionValueBasedOnAvailableOptions.value }, optionValueBasedOnAvailableOptions.label)];
            }
        }
        // Assign a unique id for the placeholder
        return this.placeholder !== 'false' ? [h("option", { value: "" }, this.placeholderValue)] : [h("option", { value: "" })];
    }
    static get is() { return "ifx-select"; }
    static get originalStyleUrls() {
        return {
            "$": ["select.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["select.css"]
        };
    }
    static get properties() {
        return {
            "value": {
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
                "attribute": "value",
                "reflect": false
            },
            "name": {
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
                "attribute": "name",
                "reflect": false
            },
            "items": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Array<any>",
                    "resolved": "any[]",
                    "references": {
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "choices": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Array<any> | string",
                    "resolved": "any[] | string",
                    "references": {
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "choices",
                "reflect": false
            },
            "renderChoiceLimit": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "render-choice-limit",
                "reflect": false
            },
            "maxItemCount": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "max-item-count",
                "reflect": false
            },
            "addItems": {
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
                "attribute": "add-items",
                "reflect": false
            },
            "removeItems": {
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
                "attribute": "remove-items",
                "reflect": false
            },
            "removeItemButton": {
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
                "attribute": "remove-item-button",
                "reflect": false
            },
            "editItems": {
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
                "attribute": "edit-items",
                "reflect": false
            },
            "duplicateItemsAllowed": {
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
                "attribute": "duplicate-items-allowed",
                "reflect": false
            },
            "delimiter": {
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
                "attribute": "delimiter",
                "reflect": false
            },
            "paste": {
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
                "attribute": "paste",
                "reflect": false
            },
            "showSearch": {
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
                "attribute": "show-search",
                "reflect": false
            },
            "searchChoices": {
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
                "attribute": "search-choices",
                "reflect": false
            },
            "searchFields": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Array<string> | string",
                    "resolved": "string | string[]",
                    "references": {
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "search-fields",
                "reflect": false
            },
            "searchFloor": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "search-floor",
                "reflect": false
            },
            "searchResultLimit": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "search-result-limit",
                "reflect": false
            },
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'auto' | 'top' | 'bottom'",
                    "resolved": "\"auto\" | \"bottom\" | \"top\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "position",
                "reflect": false
            },
            "resetScrollPosition": {
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
                "attribute": "reset-scroll-position",
                "reflect": false
            },
            "shouldSort": {
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
                "attribute": "should-sort",
                "reflect": false
            },
            "shouldSortItems": {
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
                "attribute": "should-sort-items",
                "reflect": false
            },
            "sorter": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "SortFn",
                    "resolved": "(el1: any, el2: any) => number",
                    "references": {
                        "SortFn": {
                            "location": "import",
                            "path": "./interfaces",
                            "id": "src/components/select/single-select/interfaces.tsx::SortFn"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "placeholder": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "boolean | string",
                    "resolved": "boolean | string",
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
            },
            "searchPlaceholderValue": {
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
                "attribute": "search-placeholder-value",
                "reflect": false
            },
            "prependValue": {
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
                "attribute": "prepend-value",
                "reflect": false
            },
            "appendValue": {
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
                "attribute": "append-value",
                "reflect": false
            },
            "renderSelectedChoices": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'always' | 'auto'",
                    "resolved": "\"always\" | \"auto\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "render-selected-choices",
                "reflect": false
            },
            "loadingText": {
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
                "attribute": "loading-text",
                "reflect": false
            },
            "noResultsText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | NoResultsTextFn",
                    "resolved": "(() => string) | string",
                    "references": {
                        "NoResultsTextFn": {
                            "location": "import",
                            "path": "./interfaces",
                            "id": "src/components/select/single-select/interfaces.tsx::NoResultsTextFn"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "no-results-text",
                "reflect": false
            },
            "noChoicesText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | NoChoicesTextFn",
                    "resolved": "(() => string) | string",
                    "references": {
                        "NoChoicesTextFn": {
                            "location": "import",
                            "path": "./interfaces",
                            "id": "src/components/select/single-select/interfaces.tsx::NoChoicesTextFn"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "no-choices-text",
                "reflect": false
            },
            "itemSelectText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "''",
                    "resolved": "\"\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "item-select-text",
                "reflect": false
            },
            "addItemText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | AddItemTextFn",
                    "resolved": "((value: string) => string) | string",
                    "references": {
                        "AddItemTextFn": {
                            "location": "import",
                            "path": "./interfaces",
                            "id": "src/components/select/single-select/interfaces.tsx::AddItemTextFn"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "add-item-text",
                "reflect": false
            },
            "maxItemText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | MaxItemTextFn",
                    "resolved": "((maxItemCount: number) => string) | string",
                    "references": {
                        "MaxItemTextFn": {
                            "location": "import",
                            "path": "./interfaces",
                            "id": "src/components/select/single-select/interfaces.tsx::MaxItemTextFn"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "max-item-text",
                "reflect": false
            },
            "uniqueItemText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UniqueItemText",
                    "resolved": "((value: string) => string) | string",
                    "references": {
                        "UniqueItemText": {
                            "location": "import",
                            "path": "./interfaces",
                            "id": "src/components/select/single-select/interfaces.tsx::UniqueItemText"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "unique-item-text",
                "reflect": false
            },
            "classNames": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ClassNames",
                    "resolved": "{ containerOuter?: string; containerInner?: string; input?: string; inputCloned?: string; list?: string; listItems?: string; listSingle?: string; listDropdown?: string; item?: string; itemSelectable?: string; itemDisabled?: string; itemChoice?: string; placeholder?: string; group?: string; groupHeading?: string; button?: string; activeState?: string; focusState?: string; openState?: string; disabledState?: string; highlightedState?: string; selectedState: string; flippedState?: string; loadingState?: string; noResults?: string; noChoices?: string; }",
                    "references": {
                        "ClassNames": {
                            "location": "import",
                            "path": "./interfaces",
                            "id": "src/components/select/single-select/interfaces.tsx::ClassNames"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "fuseOptions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FuseOptions",
                    "resolved": "{ id?: string; caseSensitive?: boolean; includeMatches?: boolean; includeScore?: boolean; shouldSort?: boolean; keys?: string[] | object[] | WeightedField[]; verbose?: boolean; tokenize?: boolean; tokenSeparator?: RegExp; matchAllTokens?: boolean; location?: number; distance?: number; threshold?: number; maxPatternLength?: number; minMatchCharLength?: number; findAllMatches?: boolean; sortFn?(a: { score: number; }, b: { score: number; }): number; getFn?(obj: any, path: string): any; }",
                    "references": {
                        "FuseOptions": {
                            "location": "import",
                            "path": "./interfaces",
                            "id": "src/components/select/single-select/interfaces.tsx::FuseOptions"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "addItemFilter": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | RegExp | ItemFilterFn",
                    "resolved": "((value: string) => boolean) | RegExp | string",
                    "references": {
                        "RegExp": {
                            "location": "global",
                            "id": "global::RegExp"
                        },
                        "ItemFilterFn": {
                            "location": "import",
                            "path": "./interfaces",
                            "id": "src/components/select/single-select/interfaces.tsx::ItemFilterFn"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "add-item-filter",
                "reflect": false
            },
            "customAddItemText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "CustomAddItemText",
                    "resolved": "((value: string) => string) | string",
                    "references": {
                        "CustomAddItemText": {
                            "location": "import",
                            "path": "./interfaces",
                            "id": "src/components/select/single-select/interfaces.tsx::CustomAddItemText"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "custom-add-item-text",
                "reflect": false
            },
            "callbackOnInit": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "OnInit",
                    "resolved": "() => void",
                    "references": {
                        "OnInit": {
                            "location": "import",
                            "path": "./interfaces",
                            "id": "src/components/select/single-select/interfaces.tsx::OnInit"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "callbackOnCreateTemplates": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "OnCreateTemplates",
                    "resolved": "(template: any) => any",
                    "references": {
                        "OnCreateTemplates": {
                            "location": "import",
                            "path": "./interfaces",
                            "id": "src/components/select/single-select/interfaces.tsx::OnCreateTemplates"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "valueComparer": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ValueCompareFunction",
                    "resolved": "(value1: string, value2: string) => boolean",
                    "references": {
                        "ValueCompareFunction": {
                            "location": "import",
                            "path": "./interfaces",
                            "id": "src/components/select/single-select/interfaces.tsx::ValueCompareFunction"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "error": {
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
                "attribute": "error",
                "reflect": false,
                "defaultValue": "false"
            },
            "errorMessage": {
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
                "attribute": "error-message",
                "reflect": false,
                "defaultValue": "'Error'"
            },
            "label": {
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
                "attribute": "label",
                "reflect": false,
                "defaultValue": "''"
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
            "placeholderValue": {
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
                "attribute": "placeholder-value",
                "reflect": false,
                "defaultValue": "'Placeholder'"
            },
            "options": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "any[] | string",
                    "resolved": "any[] | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "options",
                "reflect": false
            },
            "size": {
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
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'medium (40px)'"
            }
        };
    }
    static get states() {
        return {
            "selectedOption": {}
        };
    }
    static get events() {
        return [{
                "method": "ifxSelect",
                "name": "ifxSelect",
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
            }, {
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
    static get methods() {
        return {
            "handleChange": {
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
            },
            "highlightItem": {
                "complexType": {
                    "signature": "(item: HTMLElement, runEvent?: boolean) => Promise<this>",
                    "parameters": [{
                            "name": "item",
                            "type": "HTMLElement",
                            "docs": ""
                        }, {
                            "name": "runEvent",
                            "type": "boolean",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    },
                    "return": "Promise<this>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "unhighlightItem": {
                "complexType": {
                    "signature": "(item: HTMLElement) => Promise<this>",
                    "parameters": [{
                            "name": "item",
                            "type": "HTMLElement",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    },
                    "return": "Promise<this>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "highlightAll": {
                "complexType": {
                    "signature": "() => Promise<this>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<this>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "unhighlightAll": {
                "complexType": {
                    "signature": "() => Promise<this>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<this>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "removeActiveItemsByValue": {
                "complexType": {
                    "signature": "(value: string) => Promise<this>",
                    "parameters": [{
                            "name": "value",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<this>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "removeActiveItems": {
                "complexType": {
                    "signature": "(excludedId?: number) => Promise<this>",
                    "parameters": [{
                            "name": "excludedId",
                            "type": "number",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<this>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "removeHighlightedItems": {
                "complexType": {
                    "signature": "(runEvent?: boolean) => Promise<this>",
                    "parameters": [{
                            "name": "runEvent",
                            "type": "boolean",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<this>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "showDropdown": {
                "complexType": {
                    "signature": "(focusInput?: boolean) => Promise<this>",
                    "parameters": [{
                            "name": "focusInput",
                            "type": "boolean",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<this>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "hideDropdown": {
                "complexType": {
                    "signature": "(blurInput?: boolean) => Promise<this>",
                    "parameters": [{
                            "name": "blurInput",
                            "type": "boolean",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<this>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "getValue": {
                "complexType": {
                    "signature": "(valueOnly?: boolean) => Promise<string | Array<string>>",
                    "parameters": [{
                            "name": "valueOnly",
                            "type": "boolean",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        }
                    },
                    "return": "Promise<string | string[]>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "setValue": {
                "complexType": {
                    "signature": "(args: Array<any>) => Promise<this>",
                    "parameters": [{
                            "name": "args",
                            "type": "any[]",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        }
                    },
                    "return": "Promise<this>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "setChoiceByValue": {
                "complexType": {
                    "signature": "(value: string | Array<string>) => Promise<this>",
                    "parameters": [{
                            "name": "value",
                            "type": "string | string[]",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        }
                    },
                    "return": "Promise<this>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "setChoices": {
                "complexType": {
                    "signature": "(choices: any[] | string, value: string, label: string, replaceChoices?: boolean) => Promise<this>",
                    "parameters": [{
                            "name": "choices",
                            "type": "string | any[]",
                            "docs": ""
                        }, {
                            "name": "value",
                            "type": "string",
                            "docs": ""
                        }, {
                            "name": "label",
                            "type": "string",
                            "docs": ""
                        }, {
                            "name": "replaceChoices",
                            "type": "boolean",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<this>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "clearChoices": {
                "complexType": {
                    "signature": "() => Promise<this>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<this>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "clearStore": {
                "complexType": {
                    "signature": "() => Promise<this>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<this>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "clearInput": {
                "complexType": {
                    "signature": "() => Promise<this>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<this>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "enable": {
                "complexType": {
                    "signature": "() => Promise<this>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<this>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "disable": {
                "complexType": {
                    "signature": "() => Promise<this>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<this>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "ajax": {
                "complexType": {
                    "signature": "(fn: AjaxFn) => Promise<this>",
                    "parameters": [{
                            "name": "fn",
                            "type": "(callback: any) => void",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "AjaxFn": {
                            "location": "import",
                            "path": "./interfaces",
                            "id": "src/components/select/single-select/interfaces.tsx::AjaxFn"
                        }
                    },
                    "return": "Promise<this>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "disabled",
                "methodName": "watchDisabled"
            }];
    }
    static get listeners() {
        return [{
                "name": "mousedown",
                "method": "handleOutsideClick",
                "target": "document",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=select.js.map
