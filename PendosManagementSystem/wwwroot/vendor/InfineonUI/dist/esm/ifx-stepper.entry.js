import { r as registerInstance, c as createEvent, h, g as getElement } from './index-f742c724.js';

const stepperCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}.stepper{display:flex;align-items:center}.stepper.compact{justify-content:space-between;align-items:center}.stepper.compact.compact-right{flex-direction:row-reverse;text-align:left}.stepper.compact .stepper-wrapper{flex-direction:column}.stepper-wrapper{display:flex;flex-direction:row}.stepper-progress{display:flex;justify-content:center;align-items:center;font:600 0.875rem/1.25rem \"Source Sans 3\";min-width:56px;height:56px;border-radius:9999px;background:conic-gradient(#0A8276 var(--pb, 0%), #8D8786 0)}.stepper-progress .progress-detail{display:flex;justify-content:center;align-items:center;text-align:center;width:48px;height:48px;border-radius:9999px;background:white}";
const IfxStepperStyle0 = stepperCss;

const Stepper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ifxChange = createEvent(this, "ifxChange", 7);
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
    get el() { return getElement(this); }
    static get watchers() { return {
        "activeStep": ["handleActiveStep"]
    }; }
};
Stepper.style = IfxStepperStyle0;

export { Stepper as ifx_stepper };

//# sourceMappingURL=ifx-stepper.entry.js.map