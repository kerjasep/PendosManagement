import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { ButtonInterface } from './interfaces';
export declare class ButtonCellRenderer implements ICellRendererComp {
    eGui: HTMLDivElement;
    eButton: any;
    eValue: any;
    cellValue: any;
    eventListener: () => void;
    init(params: ICellRendererParams): void;
    getGui(): HTMLDivElement;
    refresh(params: ICellRendererParams): boolean;
    destroy(): void;
    getFieldValueToDisplay(params: ICellRendererParams): any;
    isObject(value: any): value is Object;
    hasRequiredKeys(obj: any): obj is ButtonInterface;
}
