import { h } from "@stencil/core";
export class Pagination {
    constructor() {
        this.CLASS_DISABLED = "disabled";
        this.CLASS_ACTIVE = "active";
        this.CLASS_SIBLING_ACTIVE = "active-sibling";
        this.DATA_KEY = "pagination";
        this.currentPage = 0;
        this.internalPage = 1;
        this.itemsPerPage = 10;
        this.numberOfPages = [];
        this.total = 1;
    }
    setItemsPerPage(e) {
        this.itemsPerPage = parseInt(e.detail.label);
    }
    componentDidLoad() {
        this.calculateVisiblePageIndices();
        var paginationElement = this.el.shadowRoot.querySelector(".pagination");
        let leftArrow = paginationElement.querySelector('.prev');
        this.navigateSinglePage(leftArrow, true);
    }
    calculateNumberOfPages() {
        if (isNaN(this.currentPage)) {
            this.currentPage = 1;
        }
        const total = this.total <= this.itemsPerPage ? this.itemsPerPage : this.total;
        const itemsPerPage = this.itemsPerPage;
        const totalPageNumber = Math.ceil(total / itemsPerPage);
        if (this.currentPage <= 0) {
            this.internalPage = 1;
        }
        else if (this.currentPage > totalPageNumber) {
            this.internalPage = totalPageNumber;
        }
        else
            this.internalPage = this.currentPage;
        this.numberOfPages = Array.from({ length: totalPageNumber }, (_, index) => index + 1);
    }
    componentWillLoad() {
        this.calculateNumberOfPages();
    }
    componentDidUpdate() {
        var paginationElement = this.el.shadowRoot.querySelector(".pagination");
        var listItems = paginationElement.querySelectorAll("li");
        this.addEventListenersToPageItems(listItems, paginationElement);
        if (paginationElement.dataset[this.DATA_KEY] < this.numberOfPages) {
            paginationElement.dataset[this.DATA_KEY] = paginationElement.dataset[this.DATA_KEY];
        }
        else
            paginationElement.dataset[this.DATA_KEY] = 0;
        this.changePage(paginationElement, false);
    }
    componentWillUpdate() {
        this.calculateNumberOfPages();
    }
    handleEventEmission(currActive) {
        let currentPage = currActive + 1;
        let totalPages = this.numberOfPages.length;
        let prevPage = currActive === 0 ? null : currActive;
        let nextPage = currActive + 2 > totalPages ? null : currActive + 2;
        let itemsPerPage = this.itemsPerPage;
        this.ifxPageChange.emit({ currentPage, totalPages, prevPage, nextPage, itemsPerPage });
    }
    addEventListenersToPageItems(listItems, paginationContainer) {
        listItems.forEach((item) => {
            item.addEventListener("click", (e) => {
                var parent = paginationContainer;
                let listItems = parent.querySelectorAll("li");
                parent.dataset[this.DATA_KEY] = Array.from(listItems).indexOf(e.currentTarget);
                this.changePage(parent, false);
            });
        });
    }
    initPagination(paginationContainer) {
        var listItems = paginationContainer.querySelectorAll("li");
        paginationContainer.dataset[this.DATA_KEY] = Array.from(listItems).indexOf(paginationContainer.querySelector(".active"));
        paginationContainer.querySelector(".prev").addEventListener("click", (e) => this.navigateSinglePage(e, false));
        paginationContainer.querySelector(".next").addEventListener("click", (e) => this.navigateSinglePage(e, false));
        this.addEventListenersToPageItems(listItems, paginationContainer);
    }
    navigateSinglePage(e, initialValue) {
        let el = e;
        if (typeof e.target === 'object') {
            el = e.target;
        }
        if (!el.classList.contains(this.CLASS_DISABLED)) {
            var parent = el.closest(".pagination");
            var currActive = parseInt(parent.dataset[this.DATA_KEY], 10);
            currActive += 1 * (el.classList.contains("prev") ? -1 : 1);
            if (currActive === -1) {
                currActive = 0;
            }
            parent.dataset[this.DATA_KEY] = currActive;
            this.changePage(parent, initialValue);
        }
    }
    changePage(pagination, initialValue) {
        const paginationContainer = pagination;
        var listItems = paginationContainer.querySelectorAll("li");
        var currActive = parseInt(paginationContainer.dataset[this.DATA_KEY], 10);
        listItems.forEach((item) => {
            item.classList.remove(this.CLASS_ACTIVE);
            item.classList.remove(this.CLASS_SIBLING_ACTIVE);
        });
        if (initialValue && this.internalPage > 1) {
            currActive = Math.floor(this.internalPage - 1);
            paginationContainer.dataset[this.DATA_KEY] = currActive;
        }
        this.handleEventEmission(currActive);
        listItems[currActive].classList.add(this.CLASS_ACTIVE);
        if (currActive === 0) {
            paginationContainer.querySelector(".prev").classList.add(this.CLASS_DISABLED);
            paginationContainer.querySelector(".prev").disabled = true;
        }
        else {
            listItems[currActive - 1].classList.add(this.CLASS_SIBLING_ACTIVE);
            paginationContainer.querySelector(".prev").classList.remove(this.CLASS_DISABLED);
            paginationContainer.querySelector(".prev").disabled = false;
        }
        if (currActive === (listItems.length - 1)) {
            paginationContainer.querySelector(".next").classList.add(this.CLASS_DISABLED);
            paginationContainer.querySelector(".next").disabled = true;
        }
        else {
            paginationContainer.querySelector(".next").classList.remove(this.CLASS_DISABLED);
            paginationContainer.querySelector(".next").disabled = false;
        }
    }
    calculateVisiblePageIndices() {
        var paginationElement = this.el.shadowRoot.querySelector(".pagination");
        this.initPagination(paginationElement);
    }
    render() {
        return (h("div", { key: '69783cc7eaa8f47dfb1f53c718c8fd7f660e66d4', "aria-label": 'a pagination', "aria-value": this.currentPage, class: "container" }, h("div", { key: '057e7d840db0d7eb2e16da6119aa8bdf54999d48', class: 'items__per-page-wrapper' }, h("div", { key: '4b027d115d39a232642637e5e5cccaa6857a103d', class: 'items__per-page-label' }, "Results per Page"), h("div", { key: '822e1b9b2b2fe488a17ff25dfa535a1ad6e0cfe5', class: 'items__per-page-field' }, h("ifx-select", { key: '76565e2d30cab18cf66418b3e7dd331c2deb93d0', value: 'undefined', size: 's', placeholder: 'false', "show-search": 'false', "search-placeholder-value": 'Search...', disabled: false, error: false, "error-message": 'Error', label: '', "placeholder-value": 'Placeholder', options: '[{"value":"ten","label":"10","selected":true}, {"value":"Twenty","label":"20","selected":false}, {"value":"Thirty","label":"30","selected":false}]' }))), h("div", { key: '25a1179982861a7903fffd31b8e46ffd8e89b310', class: 'items__total-wrapper' }, h("div", { key: '2cbe9f653e3089c00d7feda1608131e115cd043e', class: 'page__numbers-wrapper' }, h("div", { key: '2d9a57292018657deed09235303f5b8ccb190402', class: "pagination" }, h("ifx-icon-button", { key: 'c3d36e037957fcd970bda7330314818a7e894856', variant: 'secondary', class: "prev", color: 'primary', icon: 'arrow-left-24' }), h("ol", { key: '1cc4831fec24d2fc5b03a7a96232af93d5f388d1' }, this.numberOfPages.map((item) => h("li", { class: `${this.internalPage === item ? 'active' : ""}` }, h("a", { href: undefined }, item)))), h("ifx-icon-button", { key: '37ff3804641f2c8e41efdb25f27d11aac29cb84b', class: "next", variant: 'secondary', color: 'primary', icon: 'arrow-right-24' }))))));
    }
    static get is() { return "ifx-pagination"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["pagination.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["pagination.css"]
        };
    }
    static get properties() {
        return {
            "currentPage": {
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
                "attribute": "current-page",
                "reflect": false,
                "defaultValue": "0"
            },
            "total": {
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
                "attribute": "total",
                "reflect": false,
                "defaultValue": "1"
            }
        };
    }
    static get states() {
        return {
            "internalPage": {},
            "itemsPerPage": {},
            "numberOfPages": {}
        };
    }
    static get events() {
        return [{
                "method": "ifxPageChange",
                "name": "ifxPageChange",
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
                "method": "ifxNextPage",
                "name": "ifxNextPage",
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
                "method": "ifxPrevPage",
                "name": "ifxPrevPage",
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
    static get listeners() {
        return [{
                "name": "ifxSelect",
                "method": "setItemsPerPage",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=pagination.js.map
