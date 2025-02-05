import { EventEmitter } from "../../stencil-public-runtime";
export declare class Stepper {
    /**
     * Reference to the host element.
     */
    el: HTMLElement;
    /**
     * An event emmited when the active step is changed.
     */
    ifxChange: EventEmitter;
    /**
     * Represents the active step of the stepper.
     */
    activeStep: number;
    /**
     * (Optional) Defines the position of the indicator in a compact variant.
     *
     * @Default 'left'
     */
    indicatorPosition?: 'left' | 'right';
    /**
     * (Optional) Control whether to show step number or not in a DEFAULT variant.
     *
     * @Default false
     */
    showStepNumber?: boolean;
    /**
     * (Optional) Defines the variant of the stepper.
     *
     * @Default 'default'
     */
    variant?: 'default' | 'compact';
    /**
     * An internal state for activeStep prop.
     */
    internalActiveStep: number;
    /**
     * Stores total number of steps in a stepper.
     */
    stepsCount: number;
    onStepChange(event: CustomEvent): void;
    handleActiveStep(): void;
    addStepIdsToStepsAndCountSteps(): void;
    getSteps(): NodeListOf<HTMLIfxStepElement>;
    setActiveStep(stepId: number): void;
    setStepsBeforeActiveToComplete(): void;
    syncIfxSteps(): void;
    updateActiveStep(stepId?: number): void;
    /**
     * Lifecycle methods
     */
    componentWillLoad(): void;
    componentWillUpdate(): void;
    render(): any;
    componentDidRender(): void;
}
