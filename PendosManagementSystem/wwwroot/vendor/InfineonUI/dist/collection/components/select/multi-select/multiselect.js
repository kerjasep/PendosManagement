import { h } from "@stencil/core";
// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
;
export class Multiselect {
    constructor() {
        this.currentIndex = 0; //needed for option selection using keyboard
        this.handleSearch = debounce((targetElement) => {
            const searchTerm = targetElement.value.toLowerCase();
            if (searchTerm === '') {
                this.filteredOptions = this.loadedOptions;
            }
            else {
                this.filteredOptions = this.loadedOptions.filter(option => option.label.toLowerCase().includes(searchTerm));
            }
        }, 300);
        this.handleDocumentClick = (event) => {
            const path = event.composedPath();
            if (!path.includes(this.dropdownElement)) {
                this.dropdownOpen = false;
                document.removeEventListener('click', this.handleDocumentClick);
                // Dispatch the ifxMultiselectIsOpen event
                this.ifxMultiselectIsOpen.emit(this.dropdownOpen);
            }
        };
        this.options = undefined;
        this.batchSize = 50;
        this.size = 'medium (40px)';
        this.disabled = false;
        this.error = false;
        this.internalError = false;
        this.errorMessage = "Error";
        this.internalErrorMessage = undefined;
        this.label = "";
        this.persistentSelectedOptions = [];
        this.placeholder = "";
        this.dropdownOpen = false;
        this.dropdownFlipped = undefined;
        this.maxItemCount = undefined;
        this.zIndex = 1;
        this.isLoading = false;
        this.loadedOptions = [];
        this.filteredOptions = [];
        this.showSearch = true;
        this.showSelectAll = true;
        this.optionCount = 0;
        this.optionsProcessed = false;
    }
    async loadInitialOptions() {
        this.isLoading = true;
        this.internalError = this.error;
        this.internalErrorMessage = this.errorMessage;
        // Load the first batch of options (e.g., first 20)
        this.loadedOptions = await this.fetchOptions(0, this.batchSize);
        this.isLoading = false;
    }
    async fetchMoreOptions() {
        this.isLoading = true;
        const moreOptions = await this.fetchOptions(this.loadedOptions.length, this.batchSize);
        this.loadedOptions = [...this.loadedOptions, ...moreOptions];
        this.isLoading = false;
    }
    handleScroll(event) {
        const element = event.target;
        const halfwayPoint = Math.floor((element.scrollHeight - element.clientHeight) / 2); //loading more options when the user has scrolled halfway through the current list
        if (element.scrollTop >= halfwayPoint) {
            this.fetchMoreOptions();
        }
    }
    async fetchOptions(startIndex, count) {
        let allOptions = [];
        // Parse options if it's a string, or use directly if it's an array
        if (typeof this.options === 'string') {
            try {
                allOptions = JSON.parse(this.options);
            }
            catch (err) {
                console.error('Failed to parse options:', err);
            }
        }
        else if (Array.isArray(this.options)) {
            allOptions = this.options;
        }
        else {
            console.error('Unexpected value for options:', this.options);
        }
        if (!this.optionsProcessed) {
            this.optionCount = this.countOptions(allOptions);
            const initiallySelected = this.collectSelectedOptions(allOptions);
            const initallySelectedNotInState = initiallySelected.filter(init => !this.persistentSelectedOptions.some(opt => opt.value == init.value));
            this.persistentSelectedOptions = [...this.persistentSelectedOptions, ...initallySelectedNotInState];
            this.optionsProcessed = true;
        }
        // Slice the options array based on startIndex and count
        const slicedOptions = allOptions.slice(startIndex, startIndex + count);
        return slicedOptions;
    }
    /**
     * Collects and returns all options that are selected.
     * When the parent is selected, then the value of the children will be overriden with selected as well.
     * It will only collect the leaves of the tree.
     *
     * @param options A list of options.
     * @returns A list with all selected options
     */
    collectSelectedOptions(options) {
        let selectedOptions = [];
        for (const option of options) {
            if (option.selected) {
                if (option.children && option.children.length > 0) {
                    // if parent is selected, then select all child options
                    selectedOptions = selectedOptions.concat(this.collectLeafOptions(option.children));
                }
                else {
                    selectedOptions.push(option);
                }
            }
            else {
                if (option.children && option.children.length > 0) {
                    selectedOptions = selectedOptions.concat(this.collectSelectedOptions(option.children));
                }
            }
        }
        return selectedOptions;
    }
    /**
     * Collects all leaf children options.
     *
     * @param option A list with all leaf-children.
     */
    collectLeafOptions(children) {
        let leafOptions = [];
        for (const child of children) {
            if (child.children && child.children.length > 0) {
                leafOptions = leafOptions.concat(this.collectLeafOptions(child.children));
            }
            else {
                leafOptions.push(child);
            }
        }
        return leafOptions;
    }
    /**
     * Count the number of options. Only counts the leaves of the options tree.
     */
    countOptions(options) {
        let count = 0;
        for (const option of options) {
            if (option.children && option.children.length >= 0) {
                count += this.countOptions(option.children);
            }
            else {
                count++;
            }
        }
        return count;
    }
    componentDidLoad() {
        setTimeout(() => {
            this.positionDropdown();
        }, 500);
        // setInterval(this.handleScroll, 5000); // Runs every 5 seconds (5000 milliseconds)
    }
    componentWillLoad() {
        this.loadInitialOptions();
        this.filteredOptions = [...this.loadedOptions];
    }
    updateInternalError() {
        this.internalError = this.error;
    }
    updateInternalErrorMessage() {
        this.internalErrorMessage = this.errorMessage;
    }
    loadedOptionsChanged() {
        this.filteredOptions = [...this.loadedOptions];
    }
    handleOptionClick(option) {
        this.internalError = false;
        if (!option.selected && this.isSelectionLimitReached(option)) {
            option.checkboxRef.toggleCheckedState(false);
            this.internalError = true;
            this.internalErrorMessage = "Please consider the maximum number of items to choose from";
            return;
        }
        this.updateSelection(option);
        this.ifxSelect.emit(this.persistentSelectedOptions);
    }
    isSelectionLimitReached(option) {
        let newOptionsLength = option.children ? option.children.length : 1;
        return this.maxItemCount && this.persistentSelectedOptions.length + newOptionsLength > this.maxItemCount &&
            !this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value);
    }
    updateSelection(option) {
        const wasSelected = this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value);
        if (option.children && option.children.length > 0) {
            this.handleParentOptionClick(option);
        }
        else {
            this.handleChildOptionClick(option, wasSelected);
        }
    }
    async selectAll() {
        const allOptions = await this.fetchOptions(0, this.optionCount);
        this.selectAllRecursive(allOptions);
        this.ifxSelect.emit(this.persistentSelectedOptions);
    }
    selectAllRecursive(options) {
        for (const opt of options) {
            if (opt.children && opt.children.length > 0) {
                this.selectAllRecursive(opt.children);
            }
            else {
                if (!this.persistentSelectedOptions.some((some) => some.value === opt.value)) {
                    opt.selected = true;
                    this.persistentSelectedOptions = [...this.persistentSelectedOptions, opt];
                }
            }
        }
    }
    handleParentOptionClick(option) {
        const allChildrenSelected = option.children.every(child => this.persistentSelectedOptions.some(selectedOption => selectedOption.value === child.value));
        if (allChildrenSelected) {
            this.persistentSelectedOptions = [...this.persistentSelectedOptions.filter(selectedOption => !option.children.some(child => child.value === selectedOption.value))];
            option.selected = false;
            option.children.forEach(child => {
                child.selected = false;
            });
        }
        else {
            const newChildren = [...option.children.filter(childOption => !this.persistentSelectedOptions.some(selectedOption => selectedOption.value === childOption.value))];
            option.selected = true;
            option.children.forEach(child => {
                child.selected = true;
            });
            this.persistentSelectedOptions = [...this.persistentSelectedOptions, ...newChildren];
        }
    }
    handleChildOptionClick(option, wasSelected) {
        if (wasSelected) {
            this.persistentSelectedOptions = [...this.persistentSelectedOptions.filter(selectedOption => selectedOption.value !== option.value)];
            option.selected = false;
        }
        else {
            this.persistentSelectedOptions = [...this.persistentSelectedOptions, option];
            option.selected = true;
        }
        this.updateParentSelectedState();
    }
    updateParentSelectedState() {
        this.loadedOptions.forEach(option => {
            var _a;
            if (((_a = option.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                if (option.children.every(child => child.selected === true))
                    option.selected = true;
                else {
                    option.selected = false;
                    if (this.isOptionIndeterminate(option)) {
                        option.indeterminate = true;
                    }
                    else {
                        option.indeterminate = false;
                    }
                }
            }
        });
    }
    getSizeClass() {
        return `${this.size}` === "s"
            ? "small-select"
            : "medium-select";
    }
    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
        setTimeout(() => {
            if (this.dropdownOpen) {
                document.addEventListener('click', this.handleDocumentClick);
            }
            // Dispatch the ifxMultiselectIsOpen event
            this.ifxMultiselectIsOpen.emit(this.dropdownOpen);
        }, 0);
        this.zIndex = Multiselect.globalZIndex++;
    }
    waitForElement(querySelectorFunc, callback, maxTries = 50) {
        let tries = 0;
        function request() {
            requestAnimationFrame(() => {
                const elements = querySelectorFunc();
                if (elements.length > 0 || tries > maxTries) {
                    callback(elements);
                }
                else {
                    tries++;
                    request();
                }
            });
        }
        request();
    }
    handleKeyDown(event) {
        if (this.disabled)
            return; // If it's disabled, don't do anything.
        const options = this.dropdownElement.querySelectorAll('.option');
        switch (event.code) {
            case 'Enter' || ' ':
                this.toggleDropdown();
                // Wait a bit for the dropdown to finish rendering
                this.waitForElement(() => {
                    return this.dropdownElement.querySelectorAll('.option');
                }, (options) => {
                    this.updateHighlightedOption(options);
                });
                break;
            case 'Space':
                this.toggleDropdown();
                // Wait a bit for the dropdown to finish rendering
                this.waitForElement(() => {
                    return this.dropdownElement.querySelectorAll('.option');
                }, (options) => {
                    this.updateHighlightedOption(options);
                });
                break;
            case 'ArrowDown':
                this.handleArrowDown(options);
                if (this.dropdownOpen) {
                    this.updateHighlightedOption(options);
                }
                break;
            case 'ArrowUp':
                this.handleArrowUp(options);
                if (this.dropdownOpen) {
                    this.updateHighlightedOption(options);
                }
                break;
        }
    }
    handleWrapperClick(event) {
        // This is your existing logic for positioning the dropdown
        this.positionDropdown();
        // Check if the event target is the wrapper itself and not a child element.
        if (event.currentTarget === event.target) {
            this.toggleDropdown();
        }
    }
    clearSelection() {
        this.persistentSelectedOptions = [];
        this.ifxSelect.emit(this.persistentSelectedOptions); // if you want to emit empty selection after clearing
    }
    positionDropdown() {
        var _a;
        const wrapperRect = (_a = this.el.shadowRoot.querySelector('.ifx-multiselect-wrapper')) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        const spaceBelow = window.innerHeight - wrapperRect.bottom;
        const spaceAbove = wrapperRect.top;
        // If there's more space above than below the trigger and the dropdown doesn't fit below
        if ((spaceAbove > spaceBelow && wrapperRect.height > spaceBelow) || (wrapperRect.bottom > window.innerHeight)) {
            this.dropdownFlipped = true;
        }
        else {
            this.dropdownFlipped = false;
        }
    }
    // Helper function to update highlighted option based on currentIndex
    updateHighlightedOption(options) {
        // Clear all highlights
        options.forEach((option) => option.classList.remove('is-highlighted'));
        // Apply highlight to the current option
        if (this.currentIndex >= 0 && this.currentIndex < options.length) {
            options[this.currentIndex].classList.add('is-highlighted');
            options[this.currentIndex].focus();
        }
    }
    // Helper function to handle arrow down navigation
    handleArrowDown(options) {
        if (this.currentIndex < options.length - 1) {
            this.currentIndex++;
        }
        else {
            this.currentIndex = 0; // Wrap to the beginning.
        }
    }
    // Helper function to handle arrow up navigation
    handleArrowUp(options) {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
        else {
            this.currentIndex = options.length - 1; // Wrap to the end.
        }
    }
    handleOptionKeyDown(e, option) {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown')
            e.stopPropagation();
        if (e.key === 'Enter' || e.key === ' ') {
            this.handleOptionClick(option);
        }
    }
    renderOption(option, index) {
        var _a;
        const isIndeterminate = this.isOptionIndeterminate(option);
        const isSelected = option.children ? isIndeterminate || this.isOptionSelected(option) : this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value);
        const disableCheckbox = !isSelected && this.maxItemCount && this.persistentSelectedOptions.length >= this.maxItemCount;
        const uniqueId = `checkbox-${option.value}-${index}`; // Generate a unique ID using the index
        return (h("div", { class: "option-wrapper" }, h("div", { class: `option ${isSelected ? 'selected' : ''} ${disableCheckbox ? 'disabled' : ''} 
        ${this.getSizeClass()}`, "data-value": option.value, onKeyDown: (e) => !disableCheckbox && this.handleOptionKeyDown(e, option), onClick: () => !disableCheckbox && this.handleOptionClick(option), tabindex: "0", role: `${((_a = option.children) === null || _a === void 0 ? void 0 : _a.length) > 0 ? "treeitem" : "option"}` }, h("ifx-checkbox", { tabIndex: -1, ref: (el) => option.checkboxRef = el, id: uniqueId, size: "s", value: isIndeterminate ? false : isSelected, indeterminate: isIndeterminate, disabled: disableCheckbox }), h("label", { htmlFor: uniqueId, onClick: (e) => e.stopPropagation() }, option.label)), option.children && option.children.map((child, childIndex) => this.renderSubOption(child, `${index}-${childIndex}`))));
    }
    isOptionSelected(option) {
        if (!option.children)
            return false;
        return option.children.every(child => this.persistentSelectedOptions.some(persistentOption => persistentOption.value === child.value));
    }
    isOptionIndeterminate(option) {
        if (!option.children)
            return false;
        const selectedChildren = option.children.filter(child => this.persistentSelectedOptions.some(persistentOption => persistentOption.value === child.value)).length;
        return selectedChildren > 0 && selectedChildren < option.children.length;
    }
    findInOptions(options, searchTerm) {
        for (const option of options) {
            if (option.value === searchTerm) {
                return option;
            }
            if (option.children) {
                const foundInChildren = this.findInOptions(option.children, searchTerm);
                if (foundInChildren) {
                    return foundInChildren;
                }
            }
        }
        return null;
    }
    renderSubOption(option, index) {
        var _a;
        const isSelected = this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value);
        const disableCheckbox = !isSelected && this.maxItemCount && this.persistentSelectedOptions.length >= this.maxItemCount;
        const uniqueId = `checkbox-${option.value}-${index}`;
        return (h("div", { class: `option sub-option ${isSelected ? 'selected' : ''} ${this.getSizeClass()} ${disableCheckbox ? 'disabled' : ''}`, "data-value": option.value, role: `${((_a = option.children) === null || _a === void 0 ? void 0 : _a.length) > 0 ? "option" : "treeitem"}`, onKeyDown: (e) => !disableCheckbox && this.handleOptionKeyDown(e, option), onClick: () => !disableCheckbox && this.handleOptionClick(option), tabindex: "0" }, h("ifx-checkbox", { tabIndex: -1, ref: (el) => option.checkboxRef = el, id: uniqueId, size: "s", value: isSelected, disabled: disableCheckbox }), h("label", { htmlFor: uniqueId, onClick: (e) => e.stopPropagation() }, option.label)));
    }
    renderSelectAll() {
        const allSelected = this.persistentSelectedOptions.length === this.optionCount;
        const noneSelected = this.persistentSelectedOptions.length === 0;
        const indeterminate = this.optionCount > 0 && !noneSelected && !allSelected;
        const that = this;
        function toggleSelectAll() {
            if (allSelected) {
                that.clearSelection();
            }
            else {
                that.selectAll();
            }
        }
        function handleSelectAllKeydown(e) {
            if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown')
                e.stopPropagation();
            if (e.key === 'Enter' || e.key === ' ') {
                toggleSelectAll();
            }
        }
        return h("div", { class: "select-all-wrapper" }, h("div", { class: `option ${this.getSizeClass()}`, tabindex: '0', onKeyDown: (e) => handleSelectAllKeydown(e), onClick: toggleSelectAll }, h("ifx-checkbox", { tabIndex: -1, id: 'selectAll', value: allSelected, indeterminate: indeterminate, size: "s" }), h("label", { htmlFor: 'selectAll' }, "Select all")), h("ifx-dropdown-separator", null));
    }
    render() {
        // Create a label for the selected options
        const selectedOptionsLabels = this.persistentSelectedOptions
            .filter(option => {
            // check if option is a child and its parent is selected
            const isChildSelectedWithParent = this.persistentSelectedOptions.some(parentOption => parentOption.children &&
                parentOption.children.some(child => child.value === option.value) &&
                parentOption.selected);
            return !isChildSelectedWithParent;
        })
            .map(option => option.label)
            .join(', ');
        return (h("div", { class: `ifx-multiselect-container`, ref: el => this.dropdownElement = el }, this.label ?
            h("div", { class: "ifx-label-wrapper" }, h("span", null, this.label)) : null, h("div", { class: `ifx-multiselect-wrapper 
        ${this.getSizeClass()} 
        ${this.dropdownOpen ? 'active' : ''} 
        ${this.dropdownFlipped ? 'is-flipped' : ''}
        ${this.internalError ? 'error' : ""}
        ${this.disabled ? 'disabled' : ""}`, tabindex: "0", onClick: this.disabled ? undefined : (event) => this.handleWrapperClick(event), onKeyDown: this.disabled ? undefined : (event) => this.handleKeyDown(event) }, h("div", { class: `ifx-multiselect-input 
          ${this.persistentSelectedOptions.length === 0 ? 'placeholder' : ""}
          `, onClick: this.disabled ? undefined : () => this.toggleDropdown() }, this.persistentSelectedOptions.length > 0 ? selectedOptionsLabels : 'Placeholder'), this.dropdownOpen && (h("div", { class: "ifx-multiselect-dropdown-menu", onScroll: (event) => this.handleScroll(event), style: { '--dynamic-z-index': this.zIndex.toString() } }, this.showSearch && h("input", { type: "text", role: "textbox", class: "search-input", onKeyDown: (e) => { e.stopPropagation(); }, onInput: (event) => this.handleSearch(event.target), placeholder: "Search..." }), this.showSelectAll && this.renderSelectAll(), this.filteredOptions.map((option, index) => this.renderOption(option, index)), this.isLoading && h("div", null, "Loading more options..."))), h("div", { class: "ifx-multiselect-icon-container" }, this.persistentSelectedOptions.length > 0 && (h("div", { class: "ifx-clear-button", onClick: this.disabled ? undefined : () => this.clearSelection() }, h("ifx-icon", { icon: "cremove24" }))), h("div", { class: "icon-wrapper-up", onClick: this.disabled ? undefined : () => this.toggleDropdown() }, h("ifx-icon", { key: 'icon-up', icon: 'chevronup-16' })), h("div", { class: "icon-wrapper-down", onClick: this.disabled ? undefined : () => this.toggleDropdown() }, h("ifx-icon", { key: 'icon-down', icon: 'chevron-down-16' })))), this.internalError ?
            h("div", { class: "ifx-error-message-wrapper" }, h("span", null, this.internalErrorMessage)) : null));
    }
    static get is() { return "ifx-multiselect"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["multiselect.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["multiselect.css"]
        };
    }
    static get properties() {
        return {
            "options": {
                "type": "string",
                "mutable": false,
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
            "batchSize": {
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
                "attribute": "batch-size",
                "reflect": false,
                "defaultValue": "50"
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
                "defaultValue": "\"Error\""
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
                "defaultValue": "\"\""
            },
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
                "reflect": false,
                "defaultValue": "\"\""
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
                "reflect": false,
                "defaultValue": "true"
            },
            "showSelectAll": {
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
                "attribute": "show-select-all",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "internalError": {},
            "internalErrorMessage": {},
            "persistentSelectedOptions": {},
            "dropdownOpen": {},
            "dropdownFlipped": {},
            "zIndex": {},
            "isLoading": {},
            "loadedOptions": {},
            "filteredOptions": {},
            "optionCount": {},
            "optionsProcessed": {}
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
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "ifxMultiselectIsOpen",
                "name": "ifxMultiselectIsOpen",
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
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "error",
                "methodName": "updateInternalError"
            }, {
                "propName": "errorMessage",
                "methodName": "updateInternalErrorMessage"
            }, {
                "propName": "loadedOptions",
                "methodName": "loadedOptionsChanged"
            }];
    }
}
Multiselect.globalZIndex = 1; // This will be shared among all instances of the component.
//# sourceMappingURL=multiselect.js.map
