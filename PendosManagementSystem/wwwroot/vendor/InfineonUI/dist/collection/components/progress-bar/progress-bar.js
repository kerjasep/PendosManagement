import { h } from "@stencil/core";
export class ProgressBar {
    constructor() {
        this.value = 0;
        this.size = undefined;
        this.showLabel = false;
        this.internalValue = undefined;
    }
    valueChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.internalValue = newValue;
        }
    }
    componentWillLoad() {
        this.internalValue = this.value;
    }
    render() {
        return (h("div", { key: 'd7a615ea8ed7c328d3d31c3caf76628b16b1658b', "aria-label": 'a progress bar', "aria-value": this.value, class: `progress-bar ${this.size}` }, h("div", { key: 'bc005965f91ddf678559a5d7dff787d08f72a912', class: "progress", style: { width: `${this.internalValue}%` } }, this.showLabel && this.size !== "s" && this.internalValue !== 0 && h("span", { class: "label" }, `${this.internalValue}%`))));
    }
    static get is() { return "ifx-progress-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["progress-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["progress-bar.css"]
        };
    }
    static get properties() {
        return {
            "value": {
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
                "attribute": "value",
                "reflect": false,
                "defaultValue": "0"
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
                "reflect": false
            },
            "showLabel": {
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
                "attribute": "show-label",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "internalValue": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "valueChanged"
            }];
    }
}
//# sourceMappingURL=progress-bar.js.map
