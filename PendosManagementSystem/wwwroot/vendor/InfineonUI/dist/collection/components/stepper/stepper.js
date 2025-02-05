import { h } from "@stencil/core";
export class Stepper {
    constructor() {
        this.activeStep = 1;
        this.indicatorPosition = 'left';
        this.showStepNumber = false;
        this.variant = 'default';
        this.internalActiveStep = undefined;
        this.stepsCount = undefined;
    }
    onStepChange(event) {
        const steps = this.getSteps();
        const previousActiveStep = steps[event.detail.previousActiveStep - 1];
        if (previousActiveStep && !previousActiveStep.complete) {
            previousActiveStep.setAttribute('error', 'true');
        }
    }
    handleActiveStep() {
        this.updateActiveStep();
    }
    /* Assigns step Id's to ifx-steps. */
    addStepIdsToStepsAndCountSteps() {
        const steps = this.getSteps();
        steps[steps.length - 1].lastStep = true;
        for (let i = 0; i < steps.length; i++) {
            steps[i].stepId = i + 1;
        }
        this.stepsCount = steps.length;
    }
    /* Returns the reference to all steps from DOM. */
    getSteps() {
        const steps = this.el.querySelectorAll('ifx-step');
        return steps;
    }
    /* Sets the specified step as an active step. */
    setActiveStep(stepId) {
        this.updateActiveStep(stepId);
    }
    /* Sets the step before active to step to complete by default (on load). */
    setStepsBeforeActiveToComplete() {
        const steps = this.getSteps();
        steps.forEach((step, stepId) => {
            if (stepId + 1 < this.activeStep)
                step.complete = true;
        });
    }
    /* Sync steps with parent state. */
    syncIfxSteps() {
        const steps = this.getSteps();
        for (let i = 0; i < steps.length; i++) {
            const stepperState = {
                activeStep: this.internalActiveStep,
                indicatorPosition: (this.indicatorPosition !== 'right' ? 'left' : 'right'),
                showStepNumber: this.showStepNumber,
                variant: (this.variant !== 'compact' ? 'default' : 'compact'),
                setActiveStep: this.setActiveStep.bind(this)
            };
            steps[i].stepperState = stepperState;
        }
    }
    /* Sets the initial active step or assigns new active step. */
    updateActiveStep(stepId = null) {
        let newActiveStep = stepId ? stepId : Math.max(1, Math.min(this.stepsCount + (this.variant !== 'compact' ? 1 : 0), this.activeStep));
        if (newActiveStep != this.internalActiveStep) {
            if (this.internalActiveStep !== undefined) {
                this.ifxChange.emit({ activeStep: newActiveStep,
                    previousActiveStep: this.internalActiveStep,
                    totalSteps: this.stepsCount });
            }
        }
        this.internalActiveStep = newActiveStep;
        this.activeStep = newActiveStep;
    }
    /**
     * Lifecycle methods
     */
    componentWillLoad() {
        this.addStepIdsToStepsAndCountSteps();
        this.updateActiveStep();
        this.setStepsBeforeActiveToComplete();
        this.syncIfxSteps();
    }
    componentWillUpdate() {
        this.syncIfxSteps();
    }
    render() {
        return (h("div", { key: 'cbfa38266ad7640a7a43f15796e5c6badf6900d3', "aria-label": 'a stepper', role: 'navigation', class: `stepper ${this.variant !== 'compact' ? 'default' : 'compact'} ${this.variant === 'compact' ? 'compact-' + this.indicatorPosition : ''}` }, 
        /* Progress bar for compact variant. */
        (this.variant === 'compact') &&
            h("div", { class: 'stepper-progress' }, h("div", { class: 'progress-detail' }, `${Math.min(this.internalActiveStep, this.stepsCount)} of ${this.stepsCount}`)), h("div", { key: '5102c5b9cf6ff0c4920c54fe79c2692dc9effa4e', class: `stepper-wrapper` }, h("slot", { key: '779b09ff03173a3bffd661c8ce44489202696241' }))));
    }
    ;
    componentDidRender() {
        /* Updating progress bar in compact version. */
        if (this.variant == 'compact') {
            const progressBar = this.el.shadowRoot.querySelector('.stepper-progress');
            progressBar.style.setProperty('--pb', `${(this.internalActiveStep / (this.stepsCount)) * 100}%`);
        }
    }
    static get is() { return "ifx-stepper"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["stepper.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["stepper.css"]
        };
    }
    static get properties() {
        return {
            "activeStep": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Represents the active step of the stepper."
                },
                "attribute": "active-step",
                "reflect": false,
                "defaultValue": "1"
            },
            "indicatorPosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'left' | 'right'",
                    "resolved": "\"left\" | \"right\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "Default",
                            "text": "'left'"
                        }],
                    "text": "(Optional) Defines the position of the indicator in a compact variant."
                },
                "attribute": "indicator-position",
                "reflect": false,
                "defaultValue": "'left'"
            },
            "showStepNumber": {
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
                    "text": "(Optional) Control whether to show step number or not in a DEFAULT variant."
                },
                "attribute": "show-step-number",
                "reflect": false,
                "defaultValue": "false"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'compact'",
                    "resolved": "\"compact\" | \"default\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "Default",
                            "text": "'default'"
                        }],
                    "text": "(Optional) Defines the variant of the stepper."
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'default'"
            }
        };
    }
    static get states() {
        return {
            "internalActiveStep": {},
            "stepsCount": {}
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
                    "text": "An event emmited when the active step is changed."
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
                "propName": "activeStep",
                "methodName": "handleActiveStep"
            }];
    }
    static get listeners() {
        return [{
                "name": "ifxChange",
                "method": "onStepChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=stepper.js.map
