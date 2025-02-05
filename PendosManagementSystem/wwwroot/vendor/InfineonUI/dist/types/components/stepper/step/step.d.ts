import { StepperState } from "../interfaces";
export declare class Step {
    /**
     * Sets the complete status of the step.
     *
     * @Default false
     */
    complete?: boolean;
    /**
     * Sets the error status of the step.
     *
     * @Default false
     */
    error?: boolean;
    /**
     * An internal prop to identify the last step of the stepper.
     */
    lastStep: boolean;
    /**
     * An unique step id assigned to every step in the stepper.
     */
    stepId: number;
    /**
     * An internal prop to store the current state of the parent (stepper) components.
     */
    stepperState: StepperState;
    /**
     * Stores the active state of the step.
     */
    active: boolean;
    /**
     * Internal state which sets to true when the step is clickable.
     */
    clickable: boolean;
    onStepChange(event: CustomEvent): void;
    updateCurrentStep(newStepperState: any): void;
    updateErrorState(): void;
    handleStepClick(): void;
    handleStepKeyDown(event: KeyboardEvent): void;
    /**
     * Lifecycle methods
     */
    render(): any;
}
