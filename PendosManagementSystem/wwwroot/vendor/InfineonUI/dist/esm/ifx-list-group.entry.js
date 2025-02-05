import { r as registerInstance, h, a as Host, g as getElement } from './index-f742c724.js';

const listGroupCss = ":host{display:inline-flex}.list-group-container{display:inline-flex;flex-direction:column;gap:3px}";
const IfxListGroupStyle0 = listGroupCss;

const ListGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.flush = false;
        this.bulletpoint = false;
        this.notification = false;
    }
    render() {
        return (h(Host, { key: 'd1d547c9b85580d29bd9d896702ffb4e44bbd908' }, h("div", { key: '57e525e3945f07254ad2829247258f44db21a2b1', class: `list-group-container 
        ${this.flush ? 'flush' : ""} 
        ${this.bulletpoint ? 'bulletpoint' : ""}` }, h("slot", { key: 'ebbf55492250ca4be267e41f1ce557e9f0c0a382', name: 'list-item' }), h("slot", { key: 'e5821a37ff4dccf747ef8f85df91e090386759a5', name: "list-notification" }))));
    }
    get el() { return getElement(this); }
};
ListGroup.style = IfxListGroupStyle0;

export { ListGroup as ifx_list_group };

//# sourceMappingURL=ifx-list-group.entry.js.map