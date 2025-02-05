import { EventEmitter } from '../../stencil-public-runtime';
export declare class Chip {
    el: any;
    placeholder: string;
    selectedValue: string;
    active: boolean;
    ifxDropdownMenu: EventEmitter<CustomEvent>;
    handleOutsideClick(event: MouseEvent): void;
    handleDropdownItemValueEmission(event: CustomEvent): void;
    getDropdownMenu(): any;
    closedMenu(): void;
    toggleMenu(): void;
    toggleCloseIcon(): void;
    render(): any;
}
