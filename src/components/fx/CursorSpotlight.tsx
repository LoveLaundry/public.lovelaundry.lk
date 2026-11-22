import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/**
 * A soft brand-coloured spotlight that trails the pointer. Rendered only for
 * fine pointers without reduced motion, and never intercepts clicks.
 */
const CursorSpotlight = () => {
    const reduce = useReducedMotion();
    const [enabled, setEnabled] = useState(false);
    const x = useMotionValue(-600);
    const y = useMotionValue(-600);
    const smoothX = useSpring(x, { stiffness: 160, damping: 24, mass: 0.4 });
    const smoothY = useSpring(y, { stiffness: 160, damping: 24, mass: 0.4 });

    useEffect(() => {
        setEnabled(!reduce && window.matchMedia("(pointer: fine)").matches);
    }, [reduce]);

    useEffect(() => {
        if (!enabled) return;

        const onMove = (event: PointerEvent) => {
            x.set(event.clientX);
            y.set(event.clientY);
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
    }, [enabled, x, y]);

    if (!enabled) return null;

    return (
        <motion.div
            aria-hidden="true"
            className="cursor-spotlight"
            style={{ x: smoothX, y: smoothY }}
        />
    );
};

export default CursorSpotlight;
