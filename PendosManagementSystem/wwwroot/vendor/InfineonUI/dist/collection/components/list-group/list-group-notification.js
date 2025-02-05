import { h } from "@stencil/core";
export class ListGroupNotification {
    constructor() {
        this.titleText = "";
        this.isFlush = false;
        this.creationTime = undefined;
        this.postTime = undefined;
        this.shownTime = undefined;
    }
    setDisplayTime(seconds, minutes, hours, days) {
        if (seconds <= 60) {
            this.shownTime = `Just now`;
        }
        else if (minutes <= 60) {
            this.shownTime = `${minutes} min. ago`;
        }
        else if (hours <= 24) {
            this.shownTime = hours > 1 ? `${hours} hr. ago` : `${hours} hrs. ago`;
        }
        else if (days) {
            this.shownTime = hours < 48 ? `1 day ago` : `${days} days ago`;
            if (hours > 168) {
                this.shownTime = `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`;
            }
        }
    }
    stringToDate(dataString) {
        if (!dataString)
            return null;
        let dateParts = dataString.split("/");
        if (dateParts[2]) {
            if (dateParts[2].split(" ")[1]) {
                let timeParts = dateParts[2].split(" ")[1].split(":");
                dateParts[2] = dateParts[2].split(" ")[0];
                return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0], timeParts[0], timeParts[1], timeParts[2]);
            }
        }
    }
    getElapsedTime(time) {
        let date = this.stringToDate(time);
        if (date) {
            let miliseconds = Date.now() - date.getTime();
            let seconds = Math.floor(miliseconds / 1000);
            let minutes = Math.floor(miliseconds / 60000);
            let hours = Math.floor(minutes / 60);
            let days = Math.floor(hours / 24);
            this.setDisplayTime(seconds, minutes, hours, days);
        }
    }
    setTimeInterval(time) {
        this.postTime = window.setInterval(() => {
            this.getElapsedTime(time);
        }, 1000);
    }
    ;
    componentWillLoad() {
        this.getElapsedTime(this.creationTime);
        this.setTimeInterval(this.creationTime); //if time update on refresh, delete this & clear interval
        const ifxListGroup = this.el.closest('ifx-list-group');
        if (ifxListGroup.flush) {
            this.isFlush = true;
        }
        else
            this.isFlush = false;
    }
    disconnectedCallback() {
        window.clearInterval(this.postTime);
    }
    render() {
        return (h("div", { key: 'bec590860291b85448a95098d5c224b8d6eabc52', class: `list-group-notification ${this.isFlush ? 'flush' : ""}` }, h("div", { key: 'b287c2fc91f12fee863a1cd4b4bacefabc91d83a', class: "heading__section" }, h("h6", { key: 'd5850e58c47132a11236a4e21cc26c9f6d2085c5', class: "heading__section-title" }, this.titleText), h("div", { key: 'f2366da150a4347ea14a1d99dac2426e4573297a', class: "heading__section-time" }, this.shownTime)), h("div", { key: 'cb85e48b832290b1d818b72fd88fb4f7d13e956f', class: "description__section" }, h("slot", { key: 'a6e50922a5a55d099cceeb3787ed7ae1461bef72' }))));
    }
    static get is() { return "ifx-list-notification"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["list-group-notification.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["list-group-notification.css"]
        };
    }
    static get properties() {
        return {
            "titleText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "title-text",
                "reflect": false,
                "defaultValue": "\"\""
            },
            "isFlush": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is-flush",
                "reflect": false,
                "defaultValue": "false"
            },
            "creationTime": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "creation-time",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "postTime": {},
            "shownTime": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=list-group-notification.js.map
