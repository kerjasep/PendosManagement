import { r as registerInstance, c as createEvent, h, g as getElement } from './index-f742c724.js';

const checkboxCss = ":host{display:inline-flex;vertical-align:top}.checkbox__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px;font-family:var(--ifx-font-family)}.checkbox__container .checkbox__wrapper{display:flex;position:relative;justify-content:center;align-items:center;width:20px;height:20px;background-color:#FFFFFF;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checkbox-m{height:24px;width:24px}.checkbox__container .checkbox__wrapper.error{border-color:#CD002F}.checkbox__container .checkbox__wrapper:focus-visible{border:1px solid #575352;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper:hover{background-color:#EEEDED;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked{background-color:#0A8276;border-radius:1px;border-color:transparent;flex:none;order:0;flex-grow:0;color:#FFFFFF}.checkbox__container .checkbox__wrapper.checked.error{background-color:#CD002F}.checkbox__container .checkbox__wrapper.checked:focus-visible{border:1px solid transparent;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper.checked:hover{background-color:#08665C;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked.disabled{background:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.indeterminate:before{content:\"\";display:block;width:70%;height:2px;background-color:#08665C;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.checkbox__container .label{height:20px;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.checkbox__container .label.label-m{height:24px;font-size:1rem;line-height:1.5rem}.checkbox__container .label.disabled{color:#BFBBBB}.checkbox__container .checkbox__wrapper:hover,.checkbox__container .label:hover{cursor:pointer}";
const IfxCheckboxStyle0 = checkboxCss;

const Checkbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ifxChange = createEvent(this, "ifxChange", 7);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.disabled = false;
        this.value = false;
        this.error = false;
        this.size = 'm';
        this.internalValue = undefined;
        this.indeterminate = false;
        this.internalIndeterminate = undefined;
    }
    handleCheckbox() {
        if (!this.disabled) {
            if (this.inputElement.indeterminate) {
                this.internalValue = true;
                this.internalIndeterminate = false;
            }
            else {
                this.internalValue = !this.internalValue;
            }
            this.internals.setFormValue(this.internalValue ? 'on' : null);
            this.ifxChange.emit(this.internalValue);
        }
    }
    async toggleCheckedState(newVal) {
        this.internalValue = newVal;
    }
    valueChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.internalValue = newValue;
            this.inputElement.checked = this.internalValue; // update the checkbox's checked property
        }
    }
    indeterminateChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.internalIndeterminate = newValue;
            this.inputElement.indeterminate = this.internalIndeterminate; // update the checkbox's indeterminate property
        }
    }
    handleKeydown(event) {
        // Keycode 32 corresponds to the Space key, 13 corresponds to the Enter key
        if (event.keyCode === 32 || event.keyCode === 13) {
            this.handleCheckbox();
            event.preventDefault(); // prevent the default action when space or enter is pressed
        }
    }
    componentWillLoad() {
        this.internalValue = this.value;
        this.internalIndeterminate = this.indeterminate;
    }
    componentDidRender() {
        this.inputElement.indeterminate = this.internalIndeterminate;
    }
    /**
     * Callback for form association.
     * Called whenever the form is reset.
     */
    formResetCallback() {
        this.internals.setFormValue(null);
    }
    getCheckedClassName() {
        if (this.error) {
            if (this.internalValue) {
                return "checked error";
            }
            else {
                return "error";
            }
        }
        else if (this.internalValue) {
            return "checked";
        }
        else
            return "";
    }
    render() {
        const slot = this.el.innerHTML;
        let hasSlot = false;
        if (slot) {
            hasSlot = true;
        }
        return (h("div", { key: '219d61be45d28a83518ba1a00dd3889a282b1cce', class: "checkbox__container" }, h("input", { key: 'aa4c37dc2f5b8fbc5013d35fa14ac15121feeca4', type: "checkbox", hidden: true, ref: (el) => (this.inputElement = el), checked: this.internalValue, onChange: this.handleCheckbox.bind(this), id: 'checkbox', value: `${this.internalValue}` }), h("div", { key: 'cb50e0379b2e6ba31fb2de1c16020cfbb6716db5', tabindex: "0", onClick: this.handleCheckbox.bind(this), onKeyDown: this.handleKeydown.bind(this), role: "checkbox" // role attribute
            ,
            "aria-value": this.internalValue, "aria-disabled": this.disabled, "aria-labelledby": "label", class: `checkbox__wrapper 
          ${this.getCheckedClassName()}
        ${this.size === "m" ? "checkbox-m" : ""}
        ${this.indeterminate ? 'indeterminate' : ""}
        ${this.disabled ? 'disabled' : ""}` }, this.internalValue && h("ifx-icon", { icon: "check-12" })), hasSlot &&
            h("div", { id: "label", class: `label ${this.size === "m" ? "label-m" : ""} ${this.disabled ? 'disabled' : ""} `, onClick: this.handleCheckbox.bind(this) }, h("slot", null))));
    }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["valueChanged"],
        "indeterminate": ["indeterminateChanged"]
    }; }
};
Checkbox.style = IfxCheckboxStyle0;

const dropdownSeparatorCss = ".dropdown-separator{height:1px;background-color:#EEEDED;margin:8px 16px}";
const IfxDropdownSeparatorStyle0 = dropdownSeparatorCss;

const DropdownSeparator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'b2d40033813be83fc126165b6ed33f90366d6a39', class: 'dropdown-separator' }));
    }
};
DropdownSeparator.style = IfxDropdownSeparatorStyle0;

export { Checkbox as ifx_checkbox, DropdownSeparator as ifx_dropdown_separator };

//# sourceMappingURL=ifx-checkbox_2.entry.js.map