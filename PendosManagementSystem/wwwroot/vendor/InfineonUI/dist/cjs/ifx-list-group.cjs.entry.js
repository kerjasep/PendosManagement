'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');

const listGroupCss = ":host{display:inline-flex}.list-group-container{display:inline-flex;flex-direction:column;gap:3px}";
const IfxListGroupStyle0 = listGroupCss;

const ListGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.flush = false;
        this.bulletpoint = false;
        this.notification = false;
    }
    render() {
        return (index.h(index.Host, { key: 'd1d547c9b85580d29bd9d896702ffb4e44bbd908' }, index.h("div", { key: '57e525e3945f07254ad2829247258f44db21a2b1', class: `list-group-container 
        ${this.flush ? 'flush' : ""} 
        ${this.bulletpoint ? 'bulletpoint' : ""}` }, index.h("slot", { key: 'ebbf55492250ca4be267e41f1ce557e9f0c0a382', name: 'list-item' }), index.h("slot", { key: 'e5821a37ff4dccf747ef8f85df91e090386759a5', name: "list-notification" }))));
    }
    get el() { return index.getElement(this); }
};
ListGroup.style = IfxListGroupStyle0;

exports.ifx_list_group = ListGroup;

//# sourceMappingURL=ifx-list-group.cjs.entry.js.map