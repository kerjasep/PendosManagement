'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');

const progressBarCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex;width:100%}.progress-bar{height:16px;bottom:0;right:0;top:0;left:0;display:flex;height:20px;border-radius:1px;width:100%;overflow:hidden;background-color:#EEEDED;font-family:var(--ifx-font-family, sans-serif)}.progress-bar.s{height:4px}.progress-bar .label{font-style:normal;font-size:0.875rem;font-weight:400;line-height:1.25rem;color:#FFFFFF}.progress-bar .progress{display:flex;align-items:center;justify-content:center;min-width:fit-content;height:100%;background-color:#0A8276;transition:width 0.2s ease}";
const IfxProgressBarStyle0 = progressBarCss;

const ProgressBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: 'd7a615ea8ed7c328d3d31c3caf76628b16b1658b', "aria-label": 'a progress bar', "aria-value": this.value, class: `progress-bar ${this.size}` }, index.h("div", { key: 'bc005965f91ddf678559a5d7dff787d08f72a912', class: "progress", style: { width: `${this.internalValue}%` } }, this.showLabel && this.size !== "s" && this.internalValue !== 0 && index.h("span", { class: "label" }, `${this.internalValue}%`))));
    }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
};
ProgressBar.style = IfxProgressBarStyle0;

exports.ifx_progress_bar = ProgressBar;

//# sourceMappingURL=ifx-progress-bar.cjs.entry.js.map