import { h } from "@stencil/core";
export class CardImage {
    constructor() {
        this.src = undefined;
        this.alt = undefined;
        this.position = undefined;
    }
    handlePosition(position) {
        this.imgPosition.emit(position);
    }
    componentWillLoad() {
        this.handlePosition(this.position);
    }
    componentDidUpdate() {
        this.handlePosition(this.position);
    }
    render() {
        return (h("img", { key: '53db92d5367942bede0fe5956279972f888d2f0a', src: this.src, alt: this.alt, class: "card-image" }));
    }
    static get is() { return "ifx-card-image"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["card-image.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card-image.css"]
        };
    }
    static get properties() {
        return {
            "src": {
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
                "attribute": "src",
                "reflect": false
            },
            "alt": {
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
                "attribute": "alt",
                "reflect": false
            },
            "position": {
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
                "attribute": "position",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "imgPosition",
                "name": "imgPosition",
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
}
//# sourceMappingURL=card-image.js.map
