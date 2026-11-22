import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const HeroScene = lazy(() => import("./HeroScene"));

/**
 * Lazy, capability-gated wrapper for the WebGL hero T-shirt sculpture.
 *
 * The scene is only imported when a WebGL context exists, the hero is near the
 * viewport, and the user has not requested reduced motion. A CSS aurora stays
 * visible as the fallback (and on small screens, where WebGL is skipped).
 */
const HeroCanvas = () => {
    const host = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();
    const [supported, setSupported] = useState(false);
    const [nearViewport, setNearViewport] = useState(false);

    useEffect(() => {
        try {
            const probe = document.createElement("canvas");
            setSupported(Boolean(probe.getContext("webgl2") || probe.getContext("webgl")));
        } catch {
            setSupported(false);
        }
    }, []);

    useEffect(() => {
        const el = host.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => setNearViewport(Boolean(entry?.isIntersecting)),
            { rootMargin: "240px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const showScene = supported && nearViewport && !reduce;

    return (
        <div ref={host} aria-hidden="true" className="hero-3d">
            <div className="hero-3d__fallback" />
            <div className="hero-3d__halo" />
            {showScene ? (
                <Suspense fallback={null}>
                    <HeroScene />
                </Suspense>
            ) : null}
        </div>
    );
};

export default HeroCanvas;
