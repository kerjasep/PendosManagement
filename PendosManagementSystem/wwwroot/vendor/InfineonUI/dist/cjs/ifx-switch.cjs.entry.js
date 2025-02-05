'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');

const switchCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{display:flex;flex-direction:row;align-items:center}.container.gap{gap:16px}.switch__checkbox-container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.switch__checkbox-container:focus{outline:4px solid #0A8276;outline-offset:2px}.switch__checkbox-container:focus:not(:focus-visible){outline:none}.switch__checkbox-container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.switch__checkbox-container.disabled{cursor:default;border-color:#BFBBBB}.switch__label-wrapper label:hover{cursor:pointer}.switch__label-wrapper.disabled{color:#BFBBBB}.switch__checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch__checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch__checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch__checkbox-wrapper .switch.checked.disabled{cursor:default}.switch__checkbox-container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.switch__checkbox-container.checked{background-color:#0A8276;border-color:#0A8276}.switch__checkbox-container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}";
const IfxSwitchStyle0 = switchCss;

const Switch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ifxChange = index.createEvent(this, "ifxChange", 7);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.value = false;
        this.name = '';
        this.disabled = false;
        this.internalValue = false;
    }
    componentWillLoad() {
        this.internalValue = this.value;
    }
    toggleLabelGap() {
        const slot = this.el.shadowRoot.querySelector('slot');
        const container = this.el.shadowRoot.querySelector('.container');
        if (slot.assignedNodes().length) {
            container.classList.add('gap');
        }
        else {
            container.classList.remove('gap');
        }
    }
    componentDidLoad() {
        this.toggleLabelGap();
    }
    valueChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.internalValue = newValue;
        }
    }
    toggleSwitch() {
        if (this.disabled)
            return;
        this.internalValue = !this.internalValue;
        this.internals.setFormValue(this.internalValue ? 'on' : null);
        this.ifxChange.emit(this.internalValue);
    }
    handleKeyDown(event) {
        if (this.disabled)
            return;
        // If the pressed key is either 'Enter' or 'Space' 
        if (event.key === 'Enter' || event.key === ' ') {
            this.toggleSwitch();
        }
    }
    /**
     * Callback for form association.
     * Called whenever the form is reset.
     */
    formResetCallback() {
        this.internals.setFormValue(null);
    }
    render() {
        return (index.h("div", { key: 'ae52a2792ac231db9bcb28449b953a8af0466c8d', class: "container", role: "switch", "aria-checked": this.internalValue ? 'true' : 'false', "aria-label": this.name, onClick: () => this.toggleSwitch(), onKeyDown: (event) => this.handleKeyDown(event) }, index.h("div", { key: 'e58bb8d5d417996eedea16b3007c5b9f94817de8', class: `switch__checkbox-container ${this.internalValue ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}`, tabindex: "0" }, index.h("div", { key: 'e1bbaeeee5bb1cafcb3a18d9df5b9a0074949585', class: "switch__checkbox-wrapper" }, index.h("input", { key: 'c436bba6346eda4a0be0fbc7a257aa32cf51322d', type: "checkbox", hidden: true, name: this.name, disabled: this.disabled, value: `${this.internalValue}` }), index.h("div", { key: 'c6207db98923233406ae326bbdace8217c696331', class: `switch ${this.internalValue ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}` }))), index.h("div", { key: 'f0d6dd8a379b69b5ca370604212ceaa03b6583f4', class: `switch__label-wrapper ${this.disabled ? 'disabled' : ''}` }, index.h("label", { key: 'a6927c48f11f26344cb0aaa27544e6b71a146e6e', htmlFor: "switch" }, index.h("slot", { key: '0af01d2d7a6846fad62024766c6502798c0d375b', onSlotchange: () => this.toggleLabelGap() })))));
    }
    static get formAssociated() { return true; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
};
Switch.style = IfxSwitchStyle0;

exports.ifx_switch = Switch;

//# sourceMappingURL=ifx-switch.cjs.entry.js.map