// js/animations.js

export function a(e) {
    if (!e) return;
    e.animate(
        [
        { transform: "rotateY(90deg) scale(0.98)", opacity: 0.6 },
        { transform: "rotateY(0deg) scale(1)", opacity: 1 }
        ],
        { duration: 220, easing: "ease-out", fill: "both" }
    );
}

export function b(e) {
    if (!e) return;
    e.animate(
        [
        { transform: "translateX(0)" },
        { transform: "translateX(-8px)" },
        { transform: "translateX(8px)" },
        { transform: "translateX(-6px)" },
        { transform: "translateX(6px)" },
        { transform: "translateX(0)" }
        ],
        { duration: 260, easing: "ease-in-out" }
    );
}

export function c(e) {
    if (!e) return;
    e.animate(
        [
        { transform: "scale(1)" },
        { transform: "scale(1.08)" },
        { transform: "scale(1)" }
        ],
        { duration: 260, easing: "ease-out" }
    );
}

export function d(e) {
    if (!e) return;
    e.animate(
        [{ opacity: 0.4, transform: "scale(0.995)" }, { opacity: 1, transform: "scale(1)" }],
        { duration: 180, easing: "ease-out" }
    );
}
