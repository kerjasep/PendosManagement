import { h } from "@stencil/core";
export class Breadcrumb {
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
        return (h("nav", { key: '3d872812aad4bc3e1242eb53226d1deb7ec8cdf3', "aria-label": "Page navigation breadcrumb" }, h("ol", { key: '1fdcf35c1ecb1164d4043f12cdf56566c3b38147', class: "breadcrumb" }, h("slot", { key: 'ec7c4843b9d03ab41d3bc5e714a54229f351dc5f' }))));
    }
    static get is() { return "ifx-breadcrumb"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["breadcrumb.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["breadcrumb.css"]
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=breadcrumb.js.map
