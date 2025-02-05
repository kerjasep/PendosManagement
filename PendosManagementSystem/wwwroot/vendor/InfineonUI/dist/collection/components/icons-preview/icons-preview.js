import { h } from "@stencil/core";
import { icons } from "@infineon/infineon-icons";
export class IconsPreview {
    constructor() {
        this.iconsArray = [];
        this.isCopied = false;
        this.copiedIndex = undefined;
        this.htmlTag = '<ifx-icon icon="calendar-16"></ifx-icon>';
        this.iconName = `"c-info-24"`;
    }
    handleCopiedText() {
        this.isCopied = true;
        setTimeout(() => {
            this.isCopied = false;
        }, 2000);
    }
    copyIconText(icon) {
        this.htmlTag = `<ifx-icon icon="${icon}"></ifx-icon>`;
        this.iconName = `"${icon}"`;
    }
    copyHtmlString() {
        const copiedTag = `<ifx-icon icon=${this.iconName}></ifx-icon>`;
        navigator.clipboard.writeText(copiedTag);
        this.handleCopiedText();
    }
    componentWillLoad() {
        for (let icon in icons) {
            this.iconsArray.push(icon);
        }
    }
    render() {
        return (h("div", { key: 'abba7c322a84b78d080e0a12c7995a99b5eb6d22', class: 'container' }, h("div", { key: 'c7997ba6c8cb2a3fe8fdc9c5d3a9fe8db8137899', class: 'html-wrapper' }, h("span", { key: 'ea69c5821233fa40ef11ef3ac14d886965c5a575', class: "html-tag" }, "<"), h("span", { key: 'c975541065694eec75fc0ad679ba7a809e0b92d1', class: "component-name" }, "ifx-icon"), h("span", { key: 'e7cffd3b37454da3c457a2c3c59ba352d0b7c083', class: "attribute-name" }, " icon"), "=", h("span", { key: 'fa072b8a61095aa4b383c035a0fae6596a86fc86', class: "attribute-value" }, this.iconName), h("span", { key: '9e672339a4df1572c224fe35d202d831d8e888ef', class: "html-tag" }, ">"), h("span", { key: 'abd9f0b60204110643fd63c81d34be8ec4e8f918', class: "html-tag" }, "</"), h("span", { key: '73beab1226410965f5f350d0e5f620776999d3e5', class: "component-name" }, "ifx-icon"), h("span", { key: 'a177a1cee309c17df06b0af920777204cdf2bf5f', class: "html-tag" }, ">"), h("button", { key: '11530b8d08d49aad5d3de211708692aa3a0b0e40', onClick: () => this.copyHtmlString() }, this.isCopied ? 'Copied' : 'Copy')), h("div", { key: 'c01d434a0c4668b846e1b5c8719f614261556fd4', class: "preview__container" }, this.iconsArray.map((icon, index) => h("div", { class: `preview__container-item ${this.isCopied && this.copiedIndex === index ? 'copied' : ""}`, onClick: () => this.copyIconText(icon) }, h("ifx-icon", { icon: icon }))))));
    }
    static get is() { return "ifx-icons-preview"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./icons-preview.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["icons-preview.css"]
        };
    }
    static get states() {
        return {
            "iconsArray": {},
            "isCopied": {},
            "copiedIndex": {},
            "htmlTag": {},
            "iconName": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=icons-preview.js.map
