import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

/**
 * Reveal Component
 * 
 * Wraps children in a motion.div that animates when it enters the viewport.
 * 
 * @param {ReactNode} children - Content to animate
 * @param {string} width - 'fit-content' or '100%' (default: 'fit-content')
 * @param {number} delay - Delay in seconds (default: 0)
 * @param {number} duration - Animation duration in seconds (default: 0.5)
 * @param {string} direction - 'up', 'down', 'left', 'right', 'none' (default: 'up')
 * @param {number} distance - Distance to move in pixels (default: 75)
 * @param {boolean} triggerOnce - Whether to trigger animation only once (default: true)
 * @param {number} threshold - Viewport threshold (0 to 1) (default: 0.5)
 */
export const Reveal = ({
    children,
    width = "fit-content",
    delay = 0,
    duration = 2.0,
    direction = "up",
    distance = 75,
    triggerOnce = true,
    threshold = 0.5,
    className = ""
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: triggerOnce, margin: "-100px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const getVariants = () => {
        const variants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: { duration, delay, ease: [0.25, 1, 0.5, 1] }
            },
        };

        if (direction === "up") variants.hidden.y = distance;
        if (direction === "down") variants.hidden.y = -distance;
        if (direction === "left") variants.hidden.x = distance;
        if (direction === "right") variants.hidden.x = -distance;

        if (direction !== "none") {
            variants.visible.x = 0;
            variants.visible.y = 0;
        }

        return variants;
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={mainControls}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
