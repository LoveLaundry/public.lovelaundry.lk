import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 220,
        damping: 32,
        restDelta: 0.001,
    });

    return (
        <motion.div
            aria-hidden="true"
            className="scroll-progress"
            style={{ scaleX }}
        />
    );
};

export default ScrollProgress;
