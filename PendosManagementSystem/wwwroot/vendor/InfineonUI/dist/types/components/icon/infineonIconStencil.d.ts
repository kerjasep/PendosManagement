import { EventEmitter } from '../../stencil-public-runtime';
export declare class InfineonIconStencil {
    icon: string;
    ifxIcon: any;
    consoleError: EventEmitter<boolean>;
    convertStringToHtml(htmlString: any): ChildNode;
    convertHtmlToObject(htmlElement: any): {};
    convertPathsToVnode(htmlPath: any): any[];
    getSVG(svgPath: any): any;
    constructIcon(): any;
    componentWillLoad(): void;
    render(): any;
}
