export declare class ListGroupNotification {
    el: any;
    titleText: string;
    isFlush: boolean;
    creationTime: any;
    postTime: number;
    shownTime: string;
    setDisplayTime(seconds: any, minutes: any, hours: any, days: any): void;
    stringToDate(dataString: any): Date;
    getElapsedTime(time: any): void;
    setTimeInterval(time: any): void;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
