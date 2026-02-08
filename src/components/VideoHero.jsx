import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

// MagneticButton moved to ./MagneticButton.jsx
import MagneticButton from './MagneticButton';

export default function VideoHero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    // Animation Variants
    const reveal = {
        hidden: { y: 100, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            clipPath: 'inset(0 0 0% 0)',
            transition: {
                duration: 1.2,
                ease: [0.25, 1, 0.5, 1],
                delay: i * 0.15
            }
        })
    };

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] md:w-[150%] md:h-[150%] min-w-full min-h-full">
                    <iframe
                        className="w-full h-full object-cover opacity-90"
                        src="https://www.youtube.com/embed/zoHJYXeDXuM?autoplay=1&mute=1&controls=0&loop=1&playlist=zoHJYXeDXuM&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1"
                        title="Fytaal Hero Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                {/* Cinematic Vignette Overlay (New Design) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#082F26_90%)] mix-blend-multiply opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082F26] via-transparent to-[#082F26]/50" />

                {/* Grain Texture */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4 max-w-7xl mx-auto w-full">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    <motion.span
                        custom={0}
                        variants={reveal}
                        className="inline-block text-accent-DEFAULT font-bold tracking-[0.4em] uppercase mb-8 text-sm md:text-base"
                    >
                        Baarn • Personal Gym • Fysiotherapie
                    </motion.span>

                    <div className="relative mb-10">
                        <motion.h1
                            custom={1}
                            variants={reveal}
                            className="text-7xl md:text-9xl lg:text-[11rem] font-heading font-bold leading-[0.85] tracking-tight text-white drop-shadow-2xl"
                        >
                            DÉ PERSONAL
                        </motion.h1>
                        <motion.div
                            custom={2}
                            variants={reveal}
                            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 translate-y-[-10px] md:translate-y-[-20px]"
                        >
                            <span className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                                GYM
                            </span>
                            <span className="font-serif italic text-4xl md:text-5xl text-accent-DEFAULT transform translate-y-2">
                                van Baarn
                            </span>
                        </motion.div>
                    </div>

                    <motion.p
                        custom={3}
                        variants={reveal}
                        className="text-xl md:text-2xl text-surface-DEFAULT/80 max-w-2xl mx-auto mb-12 font-serif italic leading-relaxed"
                    >
                        "Ben jij klaar om <span className="text-white font-semibold">jouw fysieke en mentale grens</span> te verleggen?"
                    </motion.p>

                    <motion.div
                        custom={4}
                        variants={reveal}
                        className="flex flex-col md:flex-row items-center justify-center gap-6"
                    >
                        <MagneticButton to="/aanbod/kickstart">
                            Start Jouw Kickstart <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </MagneticButton>

                        <MagneticButton to="/aanbod" variant="secondary">
                            Ontdek Aanbod
                        </MagneticButton>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
            >
                <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center p-1 backdrop-blur-sm">
                    <div className="w-1 h-2 bg-accent-DEFAULT rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
