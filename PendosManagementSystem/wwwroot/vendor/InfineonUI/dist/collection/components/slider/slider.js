import { h } from "@stencil/core";
export class IfxSlider {
    constructor() {
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.value = undefined;
        this.minValueHandle = undefined;
        this.maxValueHandle = undefined;
        this.disabled = false;
        this.showPercentage = false;
        this.leftIcon = undefined;
        this.rightIcon = undefined;
        this.leftText = undefined;
        this.rightText = undefined;
        this.type = 'single';
        this.internalValue = 0;
        this.percentage = 0;
        this.internalMinValue = 0;
        this.internalMaxValue = 100;
    }
    valueChanged(newValue) {
        this.internalValue = newValue;
        this.updateValuePercent();
    }
    minValueChanged(newValue) {
        this.internalMinValue = newValue;
        this.updateValuePercent();
    }
    maxValueChanged(newValue) {
        this.internalMaxValue = newValue;
        this.updateValuePercent();
    }
    getRangeSliderWrapper() {
        const rangeSliderWrapper = this.el.shadowRoot.querySelector('.range-slider__wrapper');
        return rangeSliderWrapper;
    }
    handleInputChangeOfRangeSlider(event) {
        const target = event.target;
        if (parseFloat(this.maxInputRef.value) - parseFloat(this.minInputRef.value) <= 0) {
            if (target.id === 'max-slider') {
                this.maxInputRef.value = this.minInputRef.value;
            }
            else {
                this.minInputRef.value = this.maxInputRef.value;
            }
        }
        if (target.id === 'max-slider') {
            this.internalMaxValue = parseFloat(this.maxInputRef.value);
        }
        else {
            this.internalMinValue = parseFloat(this.minInputRef.value);
        }
        this.ifxChange.emit({ minVal: this.internalMinValue, maxVal: this.internalMaxValue });
        this.updateValuePercent();
    }
    handleOnMouseLeaveOfRangeSlider(event) {
        const target = event.target;
        const sliderWrapper = this.getRangeSliderWrapper();
        if (target.id === 'max-slider') {
            sliderWrapper.insertBefore(this.maxInputRef, this.minInputRef);
        }
        else {
            sliderWrapper.insertBefore(this.minInputRef, this.maxInputRef);
        }
    }
    calculatePercentageValue() {
        const num = (this.internalValue - this.min) * 1.0;
        const den = this.max - this.min;
        this.percentage = +parseFloat(String((num / den) * 100)).toFixed(2);
    }
    handleInputChange(event) {
        const target = event.target;
        this.internalValue = parseFloat(target.value);
        this.ifxChange.emit(this.internalValue);
        this.calculatePercentageValue();
        this.updateValuePercent();
    }
    roundToValidStep(value) {
        const relativeValue = value - this.min;
        const remainder = relativeValue % this.step;
        if (remainder >= this.step / 2) {
            return this.min + relativeValue + (this.step - remainder);
        }
        else {
            return this.min + relativeValue - remainder;
        }
    }
    updateValuePercent() {
        const den = this.max - this.min;
        if (this.type === 'double') {
            if (this.minInputRef) {
                const num = (this.roundToValidStep(this.internalMinValue) - this.min) * 1.0;
                const minPercent = (num / den) * 100;
                this.minInputRef.parentElement.style.setProperty('--min-value-percent', `${minPercent}%`);
            }
            if (this.maxInputRef) {
                const num = (this.roundToValidStep(this.internalMaxValue) - this.min) * 1.0;
                const maxPercent = (num / den) * 100;
                this.maxInputRef.parentElement.style.setProperty('--max-value-percent', `${maxPercent}%`);
            }
        }
        else {
            if (this.inputRef) {
                const num = (this.roundToValidStep(this.internalValue) - this.min) * 1.0;
                const den = this.max - this.min;
                const percentage = (num / den) * 100;
                this.inputRef.style.setProperty('--value-percent', `${percentage}%`);
            }
        }
    }
    componentWillLoad() {
        if (this.value === undefined) {
            this.internalValue = (this.max - this.min) / 2;
        }
        else {
            this.internalValue = Math.max(this.min, Math.min(this.max, this.value));
        }
        this.calculatePercentageValue();
        if (this.minValueHandle !== undefined)
            this.internalMinValue = this.minValueHandle;
        else
            this.internalMinValue = this.min;
        if (this.maxValueHandle !== undefined)
            this.internalMaxValue = this.maxValueHandle;
        else
            this.internalMaxValue = this.max;
    }
    componentDidLoad() {
        this.updateValuePercent();
    }
    render() {
        return (h("div", { key: '97c393e3b354c418466ffc4250cee09c41a2d2ff', class: "ifx-slider" }, this.leftText && (h("span", { class: `left-text` }, this.leftText)), this.leftIcon && (h("ifx-icon", { icon: this.leftIcon, class: `left-icon${this.disabled ? ' disabled' : ''}` })), (this.type !== 'double') ?
            h("input", { type: "range", min: this.min, max: this.max, step: this.step, value: this.internalValue, disabled: this.disabled, ref: (el) => (this.inputRef = el), onInput: (event) => this.handleInputChange(event), "aria-label": 'a slider', "aria-value": this.value, "aria-disabled": this.disabled })
            :
                h("div", { class: 'range-slider__wrapper', "aria-label": 'a range slider', "aria-value": this.value, "aria-disabled": this.disabled }, h("input", { id: 'min-slider', type: 'range', min: this.min, max: this.max, step: this.step, value: this.internalMinValue, disabled: this.disabled, ref: (el) => (this.minInputRef = el), onInput: (event) => this.handleInputChangeOfRangeSlider(event), onMouseUp: (event) => this.handleOnMouseLeaveOfRangeSlider(event) }), h("input", { id: 'max-slider', type: 'range', min: this.min, max: this.max, step: this.step, value: this.internalMaxValue, disabled: this.disabled, ref: (el) => (this.maxInputRef = el), onInput: (event) => this.handleInputChangeOfRangeSlider(event), onMouseUp: (event) => this.handleOnMouseLeaveOfRangeSlider(event) })), this.rightIcon && (h("ifx-icon", { icon: this.rightIcon, class: `right-icon${this.disabled ? ' disabled' : ''}` })), this.rightText && (h("span", { class: `right-text${this.disabled ? ' disabled' : ''}` }, this.rightText)), this.showPercentage && (this.type !== "double") && (h("span", { class: `percentage-display${this.disabled ? ' disabled' : ''}` }, this.percentage, "%"))));
    }
    static get is() { return "ifx-slider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["slider.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["slider.css"]
        };
    }
    static get properties() {
        return {
            "min": {
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
                "attribute": "min",
                "reflect": false,
                "defaultValue": "0"
            },
            "max": {
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
                "attribute": "max",
                "reflect": false,
                "defaultValue": "100"
            },
            "step": {
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
                "attribute": "step",
                "reflect": false,
                "defaultValue": "1"
            },
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
                "reflect": false
            },
            "minValueHandle": {
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
                "attribute": "min-value-handle",
                "reflect": false
            },
            "maxValueHandle": {
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
                "attribute": "max-value-handle",
                "reflect": false
            },
            "disabled": {
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
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "showPercentage": {
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
                "attribute": "show-percentage",
                "reflect": false,
                "defaultValue": "false"
            },
            "leftIcon": {
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
                "attribute": "left-icon",
                "reflect": false
            },
            "rightIcon": {
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
                "attribute": "right-icon",
                "reflect": false
            },
            "leftText": {
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
                "attribute": "left-text",
                "reflect": false
            },
            "rightText": {
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
                "attribute": "right-text",
                "reflect": false
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'single' | 'double'",
                    "resolved": "\"double\" | \"single\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'single'"
            }
        };
    }
    static get states() {
        return {
            "internalValue": {},
            "percentage": {},
            "internalMinValue": {},
            "internalMaxValue": {}
        };
    }
    static get events() {
        return [{
                "method": "ifxChange",
                "name": "ifxChange",
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
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "valueChanged"
            }, {
                "propName": "minValueHandle",
                "methodName": "minValueChanged"
            }, {
                "propName": "maxValueHandle",
                "methodName": "maxValueChanged"
            }];
    }
}
//# sourceMappingURL=slider.js.map
