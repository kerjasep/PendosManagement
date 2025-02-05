import { r as registerInstance, c as createEvent, h } from './index-f742c724.js';

const cardImageCss = ".card-image{width:100%;height:100%;vertical-align:bottom;object-fit:cover}";
const IfxCardImageStyle0 = cardImageCss;

const CardImage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.imgPosition = createEvent(this, "imgPosition", 7);
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
        return (h("img", { key: '53db92d5367942bede0fe5956279972f888d2f0a', src: this.src, alt: this.alt, class: "card-image" }));
    }
};
CardImage.style = IfxCardImageStyle0;

export { CardImage as ifx_card_image };

//# sourceMappingURL=ifx-card-image.entry.js.map