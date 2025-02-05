export function animationTo(element, keyframes, options) {
    const animated = element.animate(keyframes, Object.assign(Object.assign({}, options), { fill: 'both' }));
    animated.addEventListener('finish', () => {
        // @ts-ignore
        animated.commitStyles();
        animated.cancel();
    });
    return animated;
}
const keyframeDefaults = {
    easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
};
export const KEYFRAMES = {
    fadeIn: [
        Object.assign(Object.assign({ offset: 0 }, keyframeDefaults), { opacity: 0 }),
        Object.assign(Object.assign({ offset: 1 }, keyframeDefaults), { opacity: 1 }),
    ],
    fadeOut: [
        Object.assign(Object.assign({ offset: 0 }, keyframeDefaults), { opacity: 1 }),
        Object.assign(Object.assign({ offset: 1 }, keyframeDefaults), { opacity: 0 }),
    ],
};
//# sourceMappingURL=animation.js.map
