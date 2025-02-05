import { h } from "@stencil/core";
export class Step {
    constructor() {
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
        return (h("div", { key: '2f6483f80ea9395f9ba39c5f2ec106afa9d8e297', "aria-current": this.active ? 'step' : false, "aria-disabled": this.active || this.complete ? false : true, class: `step-wrapper ${this.stepId === 1 ? 'first-step' : ''} 
                        ${this.error ? 'error' : ''}
                        ${this.stepperState.variant}
                        ${this.complete ? 'complete' : ''}
                        ${this.lastStep ? 'last-step' : ''}
                        indicator-${this.stepperState.indicatorPosition}
                        ${this.active ? 'active' : ''}
                        ${this.clickable ? 'clickable' : ''}` }, h("div", { key: '4487e287f2ec717e28597eb2dc174d15b2197d1b', class: 'step-icon-wrapper' }, this.stepperState.variant === 'default' && h("span", { class: 'step-connector-l' }), 
        /* Active, complete or incomplete */
        (this.stepperState.variant === 'default' && (!this.error || (this.error && this.active))) &&
            h("div", { class: 'step-icon' }, (this.stepperState.showStepNumber && !this.complete && !this.active) ? this.stepId : '', (this.complete && !this.active) && h("ifx-icon", { icon: 'check16' }), this.active && h("span", { class: 'active-indic' })), (this.stepperState.variant === 'default' && this.error && !this.active) && h("ifx-icon", { icon: 'warningf24' }), this.stepperState.variant === 'default' && h("span", { class: `step-connector-r ${this.active ? 'active' : ''}` })), 
        /* Step labels */
        (this.stepperState.variant === 'default' || (this.stepperState.variant === 'compact' && (this.active || this.stepId === this.stepperState.activeStep + 1))) &&
            h("div", { tabIndex: this.complete && !this.active ? 0 : -1, class: `step-label ${this.stepperState.variant === 'compact' ? (this.active ? 'curr-label' : 'next-label') : ''}`, onClick: () => { this.handleStepClick(); }, onKeyDown: (e) => { this.handleStepKeyDown(e); } }, (this.stepperState.variant === 'default') &&
                h("ifx-link", { variant: 'underlined' }, h("slot", null)), this.stepperState.variant === 'compact' && !this.active ? 'Next: ' : '', this.stepperState.variant === 'compact' && h("slot", null))));
    }
    ;
    static get is() { return "ifx-step"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["step.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["step.css"]
        };
    }
    static get properties() {
        return {
            "complete": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "Default",
                            "text": "false"
                        }],
                    "text": "Sets the complete status of the step."
                },
                "attribute": "complete",
                "reflect": false,
                "defaultValue": "false"
            },
            "error": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "Default",
                            "text": "false"
                        }],
                    "text": "Sets the error status of the step."
                },
                "attribute": "error",
                "reflect": false,
                "defaultValue": "false"
            },
            "lastStep": {
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
                    "text": "An internal prop to identify the last step of the stepper."
                },
                "attribute": "last-step",
                "reflect": false,
                "defaultValue": "false"
            },
            "stepId": {
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
                    "text": "An unique step id assigned to every step in the stepper."
                },
                "attribute": "step-id",
                "reflect": false,
                "defaultValue": "1"
            },
            "stepperState": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "StepperState",
                    "resolved": "StepperState",
                    "references": {
                        "StepperState": {
                            "location": "import",
                            "path": "../interfaces",
                            "id": "src/components/stepper/interfaces.tsx::StepperState"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "An internal prop to store the current state of the parent (stepper) components."
                },
                "defaultValue": "{ activeStep: 1, \n                                                             showStepNumber: false, \n                                                             variant: 'default', \n                                                             indicatorPosition: 'left' }"
            }
        };
    }
    static get states() {
        return {
            "active": {},
            "clickable": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "stepperState",
                "methodName": "updateCurrentStep"
            }, {
                "propName": "active",
                "methodName": "updateErrorState"
            }];
    }
    static get listeners() {
        return [{
                "name": "ifxChange",
                "method": "onStepChange",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=step.js.map
