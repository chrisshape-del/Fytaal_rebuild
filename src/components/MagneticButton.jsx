import { motion, useMotionValue } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const MagneticButton = ({ children, className, to, variant = 'primary', onClick }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) / 3);
        y.set((clientY - centerY) / 3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const Content = (
        <div
            className={`relative overflow-hidden group flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 cursor-pointer ${variant === 'primary'
                ? 'bg-primary text-white shadow-[0_0_20px_rgba(13,100,82,0.4)] hover:shadow-[0_0_40px_rgba(13,100,82,0.6)]'
                : 'glass-panel text-white hover:bg-white/20'
                } ${className}`}
        >
            {/* Shine Effect for Primary */}
            {variant === 'primary' && (
                <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
            )}
            <span className="relative z-20 flex items-center gap-2">{children}</span>
        </div>
    );

    return (
        <motion.div
            ref={ref}
            style={{ x, y }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="inline-block"
        >
            {to ? (
                <Link to={to} className="block">
                    {Content}
                </Link>
            ) : (
                <button onClick={onClick} className="w-full text-left" type="button">
                    {Content}
                </button>
            )}
        </motion.div>
    );
};

export default MagneticButton;
