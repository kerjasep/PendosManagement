//ifxAccordion.tsx
import { h } from "@stencil/core";
export class Accordion {
    constructor() {
        this.autoCollapse = false;
    }
    async onItemOpen(event) {
        if (this.autoCollapse) {
            const items = Array.from(this.el.querySelectorAll('ifx-accordion-item'));
            for (const item of items) {
                const itemElement = item;
                if (itemElement !== event.target && (await itemElement.open)) {
                    itemElement.open = false;
                }
            }
        }
    }
    render() {
        return (h("div", { key: '975256f6d34c36f5eecdcedab9c4f05227336626', class: "accordion-wrapper" }, h("slot", { key: '10cf4057057d95596240cc83fb3f6d9c1fe3e4e2' })));
    }
    static get is() { return "ifx-accordion"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["accordion.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["accordion.css"]
        };
    }
    static get properties() {
        return {
            "autoCollapse": {
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
                "attribute": "auto-collapse",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "ifxItemOpen",
                "method": "onItemOpen",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=accordion.js.map
