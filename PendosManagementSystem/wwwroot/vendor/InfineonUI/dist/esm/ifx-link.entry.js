import { r as registerInstance, h } from './index-f742c724.js';
import { c as classNames } from './index-72ac5051.js';

const linkCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.link{display:inline-flex;align-items:center;font-weight:400;font-size:1rem;text-decoration:none;color:#0A8276;gap:8px;line-height:1.6;font-family:var(--ifx-font-family)}.link:focus{outline-width:2px;outline-style:solid;outline-color:#0A8276;outline-offset:4px;border-radius:3px}.link.bold{font-weight:600}.link.bold:hover{text-decoration:underline}.link.bold:active{color:#08665C;font-style:normal;font-weight:600;text-decoration:underline}.link.underlined{text-decoration:underline;text-decoration-color:#0A8276;color:#1D1D1D;text-underline-offset:8px}.link.underlined:hover{color:#0A8276}.link.underlined:active{color:#0A8276}.link.underlined:disabled,.link.underlined.disabled{text-decoration-color:#BFBBBB}.link.title{text-decoration:none;font-weight:600;color:#1D1D1D}.link.title:hover{color:#0A8276}.link.title:active{color:#08665C}.link.menu{font-weight:400;font-style:normal;line-height:26px;color:#1D1D1D}.link.menu:hover{color:#0A8276}.link.menu:active{color:#08665C}.link.small{font-size:0.875rem}.link.medium{font-size:1rem}.link.large{font-size:1.125rem}.link.extraLarge{font-size:1.25rem}.link.underline{text-decoration:underline}.link:disabled,.link.disabled{color:#BFBBBB;cursor:default;pointer-events:none}";
const IfxLinkStyle0 = linkCss;

const Link = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.href = undefined;
        this.target = '_self';
        this.variant = 'bold';
        this.size = undefined;
        this.disabled = false;
        this.internalHref = '';
        this.internalTarget = '';
        this.internalVariant = '';
    }
    setInternalStates() {
        if (this.href) {
            this.internalHref = this.href.trim();
        }
        else {
            this.internalHref = undefined;
        }
        this.internalTarget = this.target.trim();
        this.internalVariant = this.variant.trim().toLowerCase();
    }
    componentWillRender() {
        this.setInternalStates();
    }
    render() {
        return (h("a", { key: '509d025ee650e4596ca4a75bdb03c218db4f8cd6', "aria-label": 'a navigation link button', href: this.internalHref, target: this.internalTarget, class: this.linkClassNames() }, h("slot", { key: '83e58bbd5203b98aec4b7dc8cb8e99c2c89aa62f' })));
    }
    getSizeClass() {
        const small = this.size === 's' ? 'small' : null;
        const medium = this.size === 'm' ? 'medium' : null;
        const large = this.size === 'l' ? 'large' : null;
        const extraLarge = this.size === 'xl' ? 'extraLarge' : null;
        if (small) {
            return small;
        }
        else if (medium) {
            return medium;
        }
        else if (large) {
            return large;
        }
        else if (extraLarge && this.internalVariant === 'underlined') {
            return 'large';
        }
        else if (extraLarge && this.internalVariant !== 'underlined') {
            return extraLarge;
        }
        else
            return "";
    }
    getVariantClass() {
        const bold = this.internalVariant === 'bold' ? 'bold' : null;
        const title = this.internalVariant === 'title' ? 'title' : null;
        const underlined = this.internalVariant === 'underlined' ? 'underlined' : null;
        const menu = this.internalVariant === 'menu' ? 'menu' : null;
        if (bold) {
            return bold;
        }
        else if (title) {
            return title;
        }
        else if (underlined) {
            return underlined;
        }
        else if (menu) {
            return menu;
        }
        else
            return bold;
    }
    linkClassNames() {
        return classNames('link', 'primary', this.getVariantClass(), this.getSizeClass(), this.disabled ? 'disabled' : '');
    }
};
Link.style = IfxLinkStyle0;

export { Link as ifx_link };

//# sourceMappingURL=ifx-link.entry.js.map