'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');

const stepCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}.step-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;max-width:160px;font:400 1rem/1.5rem \"Source Sans 3\"}.step-wrapper.compact{gap:0;max-width:100%}.step-wrapper.compact .step-label{max-width:100%}.step-wrapper.compact.indicator-left{align-items:flex-end;text-align:right}.step-wrapper.compact.indicator-right{align-items:flex-start}.step-wrapper.compact .step-label{cursor:auto}.step-wrapper .step-label{max-width:144px;color:#8D8786;word-wrap:break-word}.step-wrapper .step-label.curr-label{font:600 1.25rem/1.75rem \"Source Sans 3\"}.step-wrapper .step-label.next-label{font:400 0.75rem/1rem \"Source Sans 3\"}.step-wrapper.first-step .step-connector-l{height:0px}.step-wrapper.last-step .step-connector-r{height:0px}.step-wrapper.complete .step-connector-l,.step-wrapper.complete .step-connector-r,.step-wrapper.complete .step-icon,.step-wrapper.active .step-connector-l,.step-wrapper.active .step-connector-r,.step-wrapper.active .step-icon{background:#0A8276}.step-wrapper.complete .step-connector-l.active,.step-wrapper.complete .step-connector-l.error,.step-wrapper.complete .step-connector-r.active,.step-wrapper.complete .step-connector-r.error,.step-wrapper.complete .step-icon.active,.step-wrapper.complete .step-icon.error,.step-wrapper.active .step-connector-l.active,.step-wrapper.active .step-connector-l.error,.step-wrapper.active .step-connector-r.active,.step-wrapper.active .step-connector-r.error,.step-wrapper.active .step-icon.active,.step-wrapper.active .step-icon.error{background:#8D8786}.step-wrapper.complete .step-label,.step-wrapper.active .step-label{color:#1D1D1D}.step-wrapper.complete .step-label,.step-wrapper.clickable .step-label{cursor:pointer}.step-wrapper.active .step-label{cursor:auto}.step-wrapper.error:not(.active){color:#CD002F}.step-wrapper.error:not(.active) .step-label{color:#CD002F}.active-indic{width:16px;height:16px;border-radius:9999px;background:white}.step-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center}.step-icon{width:24px;height:24px;background-color:#8D8786;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:white}.step-connector-r,.step-connector-l{height:2px;width:68px;background-color:#8D8786}";
const IfxStepStyle0 = stepCss;

const Step = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.complete = false;
        this.error = false;
        this.lastStep = false;
        this.stepId = 1;
        this.stepperState = { activeStep: 1,
            showStepNumber: false,
            variant: 'default',
            indicatorPosition: 'left' };
        this.active = undefined;
        this.clickable = false;
    }
    onStepChange(event) {
        const previousActiveStep = event.detail.previousActiveStep;
        if (previousActiveStep === this.stepId && this.error) {
            this.clickable = true;
        }
    }
    updateCurrentStep(newStepperState) {
        this.active = (newStepperState.activeStep === this.stepId);
    }
    updateErrorState() {
        if (this.active && this.error) {
            this.error = false;
        }
    }
    /* Handle the click event on step label. */
    handleStepClick() {
        if (this.stepperState.variant === 'default' && (this.clickable || this.complete)) {
            this.stepperState.setActiveStep(this.stepId);
        }
    }
    /* Handle the 'Enter' key press on step label. */
    handleStepKeyDown(event) {
        if (this.stepperState.variant === 'default' && (this.clickable || this.complete) && event.key === 'Enter') {
            this.stepperState.setActiveStep(this.stepId);
        }
    }
    /**
     * Lifecycle methods
     */
    render() {
        return (index.h("div", { key: '2f6483f80ea9395f9ba39c5f2ec106afa9d8e297', "aria-current": this.active ? 'step' : false, "aria-disabled": this.active || this.complete ? false : true, class: `step-wrapper ${this.stepId === 1 ? 'first-step' : ''} 
                        ${this.error ? 'error' : ''}
                        ${this.stepperState.variant}
                        ${this.complete ? 'complete' : ''}
                        ${this.lastStep ? 'last-step' : ''}
                        indicator-${this.stepperState.indicatorPosition}
                        ${this.active ? 'active' : ''}
                        ${this.clickable ? 'clickable' : ''}` }, index.h("div", { key: '4487e287f2ec717e28597eb2dc174d15b2197d1b', class: 'step-icon-wrapper' }, this.stepperState.variant === 'default' && index.h("span", { class: 'step-connector-l' }), 
        /* Active, complete or incomplete */
        (this.stepperState.variant === 'default' && (!this.error || (this.error && this.active))) &&
            index.h("div", { class: 'step-icon' }, (this.stepperState.showStepNumber && !this.complete && !this.active) ? this.stepId : '', (this.complete && !this.active) && index.h("ifx-icon", { icon: 'check16' }), this.active && index.h("span", { class: 'active-indic' })), (this.stepperState.variant === 'default' && this.error && !this.active) && index.h("ifx-icon", { icon: 'warningf24' }), this.stepperState.variant === 'default' && index.h("span", { class: `step-connector-r ${this.active ? 'active' : ''}` })), 
        /* Step labels */
        (this.stepperState.variant === 'default' || (this.stepperState.variant === 'compact' && (this.active || this.stepId === this.stepperState.activeStep + 1))) &&
            index.h("div", { tabIndex: this.complete && !this.active ? 0 : -1, class: `step-label ${this.stepperState.variant === 'compact' ? (this.active ? 'curr-label' : 'next-label') : ''}`, onClick: () => { this.handleStepClick(); }, onKeyDown: (e) => { this.handleStepKeyDown(e); } }, (this.stepperState.variant === 'default') &&
                index.h("ifx-link", { variant: 'underlined' }, index.h("slot", null)), this.stepperState.variant === 'compact' && !this.active ? 'Next: ' : '', this.stepperState.variant === 'compact' && index.h("slot", null))));
    }
    ;
    static get watchers() { return {
        "stepperState": ["updateCurrentStep"],
        "active": ["updateErrorState"]
    }; }
};
Step.style = IfxStepStyle0;

exports.ifx_step = Step;

//# sourceMappingURL=ifx-step.cjs.entry.js.map