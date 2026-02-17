import { motion, useScroll, useTransform } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function VideoHero({ content }) {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    // Default fallback content if not provided
    const {
        title = "DÉ PERSONAL GYM",
        subtitle = "van Baarn",
        videoUrl = "https://www.youtube.com/embed/zoHJYXeDXuM?autoplay=1&mute=1&controls=0&loop=1&playlist=zoHJYXeDXuM&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1",
        ctaText = "Start Jouw Kickstart",
        ctaLink = "/aanbod/kickstart"
    } = content || {};

    const reveal = {
        hidden: { y: 100, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            clipPath: 'inset(0 0 0% 0)',
            transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: i * 0.15 }
        })
    };

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] md:w-[150%] md:h-[150%] min-w-full min-h-full">
                    <iframe
                        className="w-full h-full object-cover opacity-90"
                        src={videoUrl}
                        title="Hero Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#082F26_90%)] mix-blend-multiply opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082F26] via-transparent to-[#082F26]/50" />
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4 max-w-7xl mx-auto w-full">
                <motion.div initial="hidden" animate="visible" className="flex flex-col items-center">
                    <motion.span custom={0} variants={reveal} className="inline-block text-white font-bold tracking-[0.4em] mb-8 text-sm md:text-base drop-shadow-md">
                        Baarn • Personal Gym • Fysiotherapie
                    </motion.span>

                    <div className="relative mb-10">
                        <motion.h1 custom={1} variants={reveal} className="text-7xl md:text-9xl lg:text-[11rem] font-heading font-bold leading-[0.85] tracking-tight text-white drop-shadow-2xl">
                            {title.split(' ').slice(0, -1).join(' ')}
                        </motion.h1>
                        <motion.div custom={2} variants={reveal} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 translate-y-[-10px] md:translate-y-[-20px]">
                            <span className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                                {title.split(' ').slice(-1)}
                            </span>
                            <span className="font-serif italic text-4xl md:text-5xl text-white drop-shadow-md transform translate-y-2">
                                {subtitle}
                            </span>
                        </motion.div>
                    </div>

                    <motion.div custom={4} variants={reveal} className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <MagneticButton to={ctaLink}>
                            {ctaText} <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </MagneticButton>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
