'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');

const cardImageCss = ".card-image{width:100%;height:100%;vertical-align:bottom;object-fit:cover}";
const IfxCardImageStyle0 = cardImageCss;

const CardImage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.imgPosition = index.createEvent(this, "imgPosition", 7);
        this.src = undefined;
        this.alt = undefined;
        this.position = undefined;
    }
    handlePosition(position) {
        this.imgPosition.emit(position);
    }
    componentWillLoad() {
        this.handlePosition(this.position);
    }
    componentDidUpdate() {
        this.handlePosition(this.position);
    }
    render() {
        return (index.h("img", { key: '53db92d5367942bede0fe5956279972f888d2f0a', src: this.src, alt: this.alt, class: "card-image" }));
    }
};
CardImage.style = IfxCardImageStyle0;

exports.ifx_card_image = CardImage;

//# sourceMappingURL=ifx-card-image.cjs.entry.js.map