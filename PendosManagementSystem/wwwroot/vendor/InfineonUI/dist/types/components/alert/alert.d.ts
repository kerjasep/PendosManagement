import { EventEmitter } from '../../stencil-public-runtime';
export declare class Alert {
    variant: 'primary' | 'success' | 'danger' | 'warning' | 'info';
    icon: string;
    ifxClose: EventEmitter;
    closable: boolean;
    handleClose(): void;
    render(): any;
}
