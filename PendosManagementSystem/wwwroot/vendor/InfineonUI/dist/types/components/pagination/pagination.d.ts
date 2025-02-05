import { EventEmitter } from '../../stencil-public-runtime';
export declare class Pagination {
    el: any;
    ifxPageChange: EventEmitter;
    ifxNextPage: EventEmitter;
    ifxPrevPage: EventEmitter;
    currentPage: number;
    internalPage: number;
    itemsPerPage: number;
    numberOfPages: number[];
    total: number;
    private CLASS_DISABLED;
    private CLASS_ACTIVE;
    private CLASS_SIBLING_ACTIVE;
    private DATA_KEY;
    setItemsPerPage(e: any): void;
    componentDidLoad(): void;
    calculateNumberOfPages(): void;
    componentWillLoad(): void;
    componentDidUpdate(): void;
    componentWillUpdate(): void;
    handleEventEmission(currActive: any): void;
    addEventListenersToPageItems(listItems: any, paginationContainer: any): void;
    initPagination(paginationContainer: any): void;
    navigateSinglePage(e: any, initialValue: any): void;
    changePage(pagination: any, initialValue: any): void;
    calculateVisiblePageIndices(): void;
    render(): any;
}
