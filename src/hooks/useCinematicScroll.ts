import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

/**
 * Scroll-driven depth for decorative layers.
 *
 * Elements opt in with `data-parallax="0.08"` (fraction of their height to
 * travel) or `data-scale-in`. GSAP contexts keep every tween and ScrollTrigger
 * scoped and fully reverted on unmount / StrictMode remount.
 */
export const useCinematicScroll = () => {
    useLayoutEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
                const amount = Math.min(0.18, Math.abs(Number(el.dataset.parallax) || 0.08));

                gsap.fromTo(
                    el,
                    { yPercent: -amount * 100, scale: 1.08 },
                    {
                        yPercent: amount * 100,
                        scale: 1.08,
                        ease: "none",
                        scrollTrigger: {
                            trigger: el.closest("section") ?? el,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 0.7,
                        },
                    }
                );
            });

            gsap.utils.toArray<HTMLElement>("[data-scale-in]").forEach((el) => {
                gsap.fromTo(
                    el,
                    { scale: 0.86, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 92%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });
        });

        const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 120);

        return () => {
            window.clearTimeout(refresh);
            ctx.revert();
        };
    }, []);
};
