import { h, Host } from "@stencil/core";
import { getIcon } from "@infineon/infineon-icons";
export class InfineonIconStencil {
    constructor() {
        this.icon = "";
        this.ifxIcon = undefined;
    }
    convertStringToHtml(htmlString) {
        const div = document.createElement('div');
        div.innerHTML = htmlString;
        return div.firstChild;
    }
    convertHtmlToObject(htmlElement) {
        let pathToObject = Array
            .from(htmlElement.attributes, ({ name, value }) => ({ name, value }))
            .reduce((acc, current) => {
            acc[current.name] = current.value;
            return acc;
        }, {});
        return pathToObject;
    }
    convertPathsToVnode(htmlPath) {
        let svgPaths = [];
        const parentPath = this.convertHtmlToObject(htmlPath);
        const parentPathToVnode = h("path", parentPath);
        svgPaths.push(parentPathToVnode);
        if (htmlPath.firstChild) {
            const paths = htmlPath.querySelectorAll('path');
            const pathLength = htmlPath.querySelectorAll('path').length;
            for (let i = 0; i < pathLength; i++) {
                let pathToObject = this.convertHtmlToObject(paths[i]);
                let objToVnode = h("path", pathToObject);
                svgPaths.push(objToVnode);
            }
        }
        return svgPaths;
    }
    getSVG(svgPath) {
        return h("svg", { class: "inline-svg", width: this.ifxIcon.width, height: this.ifxIcon.height, xmlns: "http://www.w3.org/2000/svg", fill: this.ifxIcon.fill, viewBox: this.ifxIcon.viewBox }, ...svgPath);
    }
    constructIcon() {
        if (this.ifxIcon) {
            const htmlPath = this.convertStringToHtml(this.ifxIcon.svgContent);
            const svgPath = this.convertPathsToVnode(htmlPath);
            const SVG = this.getSVG(svgPath);
            this.consoleError.emit(false);
            return SVG;
        }
        else if (this.icon !== "") {
            console.error('Icon not found!');
            this.consoleError.emit(true);
            return;
        }
        else {
            return;
        }
    }
    componentWillLoad() {
        const removeHyphen = (str) => str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr);
        this.ifxIcon = getIcon(removeHyphen(this.icon));
    }
    render() {
        return (h(Host, { key: '64f6413c558dec9a8ecf38befddb2e12f8a61421' }, this.constructIcon()));
    }
    static get is() { return "ifx-icon"; }
    static get originalStyleUrls() {
        return {
            "$": ["./infineonIconStencil.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["infineonIconStencil.css"]
        };
    }
    static get properties() {
        return {
            "icon": {
                "type": "string",
                "mutable": true,
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
                "attribute": "icon",
                "reflect": false,
                "defaultValue": "\"\""
            },
            "ifxIcon": {
                "type": "any",
                "mutable": true,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "ifx-icon",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "consoleError",
                "name": "consoleError",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=infineonIconStencil.js.map
