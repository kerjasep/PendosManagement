'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');
const icons = require('./icons-497a0772.js');

const infineonIconStencilCss = "ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}";
const IfxIconStyle0 = infineonIconStencilCss;

const InfineonIconStencil = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.consoleError = index.createEvent(this, "consoleError", 7);
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
        const parentPathToVnode = index.h("path", parentPath);
        svgPaths.push(parentPathToVnode);
        if (htmlPath.firstChild) {
            const paths = htmlPath.querySelectorAll('path');
            const pathLength = htmlPath.querySelectorAll('path').length;
            for (let i = 0; i < pathLength; i++) {
                let pathToObject = this.convertHtmlToObject(paths[i]);
                let objToVnode = index.h("path", pathToObject);
                svgPaths.push(objToVnode);
            }
        }
        return svgPaths;
    }
    getSVG(svgPath) {
        return index.h("svg", { class: "inline-svg", width: this.ifxIcon.width, height: this.ifxIcon.height, xmlns: "http://www.w3.org/2000/svg", fill: this.ifxIcon.fill, viewBox: this.ifxIcon.viewBox }, ...svgPath);
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
        this.ifxIcon = icons.getIcon(removeHyphen(this.icon));
    }
    render() {
        return (index.h(index.Host, { key: '64f6413c558dec9a8ecf38befddb2e12f8a61421' }, this.constructIcon()));
    }
};
InfineonIconStencil.style = IfxIconStyle0;

exports.ifx_icon = InfineonIconStencil;

//# sourceMappingURL=ifx-icon.cjs.entry.js.map