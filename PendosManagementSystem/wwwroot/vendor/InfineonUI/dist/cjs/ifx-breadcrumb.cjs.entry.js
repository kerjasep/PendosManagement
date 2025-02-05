'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');

const breadcrumbCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.breadcrumb{list-style:none;padding:0px;margin:0px;display:flex;flex-direction:row;font-family:var(--ifx-font-family);font-size:0.875rem;align-items:flex-start}";
const IfxBreadcrumbStyle0 = breadcrumbCss;

const Breadcrumb = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentDidLoad() {
        const element = this.el.shadowRoot.firstChild;
        this.addEventListenersToHandleCustomFocusState(element);
    }
    addEventListenersToHandleCustomFocusState(element) {
        if (!element) {
            console.error('element not found');
            return;
        }
        element.tabIndex = -1;
        const slot = element.querySelector('slot');
        if (slot) {
            const assignedNodes = slot.assignedNodes();
            for (let i = 0; i < assignedNodes.length; i++) {
                const node = assignedNodes[i];
                if (node.nodeName === 'IFX-BREADCRUMB-ITEM') {
                    const breadcrumbLabel = node;
                    if (!breadcrumbLabel.hasAttribute('url')) {
                        breadcrumbLabel.tabIndex = -1;
                        breadcrumbLabel.addEventListener('focus', () => {
                            if (breadcrumbLabel.hasAttribute('url')) {
                                breadcrumbLabel.blur();
                            }
                        });
                    }
                }
            }
        }
    }
    render() {
        return (index.h("nav", { key: '3d872812aad4bc3e1242eb53226d1deb7ec8cdf3', "aria-label": "Page navigation breadcrumb" }, index.h("ol", { key: '1fdcf35c1ecb1164d4043f12cdf56566c3b38147', class: "breadcrumb" }, index.h("slot", { key: 'ec7c4843b9d03ab41d3bc5e714a54229f351dc5f' }))));
    }
    get el() { return index.getElement(this); }
};
Breadcrumb.style = IfxBreadcrumbStyle0;

exports.ifx_breadcrumb = Breadcrumb;

//# sourceMappingURL=ifx-breadcrumb.cjs.entry.js.map