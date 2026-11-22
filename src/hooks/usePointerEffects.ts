import { useEffect } from "react";

/**
 * Global, delegated pointer choreography.
 *
 * Instead of attaching a listener to every card, one passive listener updates
 * CSS custom properties on the element under the cursor. Components opt in with
 * `data-tilt` or `data-magnetic`; the matching styles live in animations.css.
 *
 * Disabled for reduced-motion users and coarse pointers so touch devices never
 * pay for hover-only work.
 */
export const usePointerEffects = () => {
    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const fine = window.matchMedia("(pointer: fine)").matches;
        if (reduce || !fine) return;

        const clear = (el: HTMLElement) => {
            el.style.removeProperty("--tilt-x");
            el.style.removeProperty("--tilt-y");
            el.style.removeProperty("--glow-x");
            el.style.removeProperty("--glow-y");
            el.style.removeProperty("--mag-x");
            el.style.removeProperty("--mag-y");
        };

        const onMove = (event: PointerEvent) => {
            const target = event.target;
            if (!(target instanceof HTMLElement)) return;

            const tilt = target.closest<HTMLElement>("[data-tilt]");
            if (tilt) {
                const rect = tilt.getBoundingClientRect();
                const px = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
                const py = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));

                tilt.style.setProperty("--tilt-x", `${(0.5 - py) * 9}deg`);
                tilt.style.setProperty("--tilt-y", `${(px - 0.5) * 11}deg`);
                tilt.style.setProperty("--glow-x", `${px * 100}%`);
                tilt.style.setProperty("--glow-y", `${py * 100}%`);
            }

            const magnetic = target.closest<HTMLElement>("[data-magnetic]");
            if (magnetic) {
                const rect = magnetic.getBoundingClientRect();
                const px = (event.clientX - rect.left) / rect.width - 0.5;
                const py = (event.clientY - rect.top) / rect.height - 0.5;

                magnetic.style.setProperty("--mag-x", `${px * 12}px`);
                magnetic.style.setProperty("--mag-y", `${py * 10}px`);
            }
        };

        const onOut = (event: PointerEvent) => {
            if (!(event.target instanceof HTMLElement)) return;
            const next = event.relatedTarget;

            for (const selector of ["[data-tilt]", "[data-magnetic]"]) {
                const el = event.target.closest<HTMLElement>(selector);
                if (el && !(next instanceof Node && el.contains(next))) clear(el);
            }
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        window.addEventListener("pointerout", onOut, { passive: true });

        return () => {
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerout", onOut);
            document.querySelectorAll<HTMLElement>("[data-tilt], [data-magnetic]").forEach(clear);
        };
    }, []);
};
