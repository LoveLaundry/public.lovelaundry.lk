import { motion } from "framer-motion";
import type { CSSProperties } from "react";

interface WaterBlobProps {
    size?: number | string;
    color?: string;
    opacity?: number;
    blur?: number;
    duration?: number;
    delay?: number;
    giggle?: number;
    borderRadius?: string;
    className?: string;
    style?: CSSProperties;
    position?: "absolute" | "fixed" | "relative";
}

const WaterBlob = ({
    size = 300,
    color = "#DC2626",
    opacity = 0.15,
    blur = 0,
    duration = 4,
    delay = 0,
    giggle = 12,
    borderRadius = "58% 42% 63% 37% / 45% 55% 45% 55%",
    className = "",
    style,
    position = "absolute",
}: WaterBlobProps) => {
    return (
        <motion.div
            aria-hidden="true"
            className={`pointer-events-none ${position} ${className}`}
            initial={{
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
            }}
            animate={{
                x: [0, giggle, -giggle, giggle * 0.5, 0],
                y: [0, -giggle, giggle * 0.7, -giggle * 0.5, 0],
                scale: [1, 1.04, 0.97, 1.03, 1],
                rotate: [0, 3, -3, 2, 0],
                borderRadius: [
                    borderRadius,
                    "42% 58% 36% 64% / 58% 38% 62% 42%",
                    "64% 36% 58% 42% / 40% 60% 40% 60%",
                    "48% 52% 66% 34% / 52% 44% 56% 48%",
                    borderRadius,
                ],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            style={{
                width: size,
                height: size,
                backgroundColor: color,
                opacity,
                filter: blur ? `blur(${blur}px)` : undefined,
                borderRadius,
                ...style,
            }}
        />
    );
};

export default WaterBlob;