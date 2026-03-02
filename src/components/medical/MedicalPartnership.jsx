import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Galaxy } from './Galaxy';

export default function MedicalPartnership() {
    const title = "Samenwerking met MA Visio Fysiotherapie";
    const description = "Binnen Fytaal werken we intensief samen met de fysiotherapeuten van MA Visio Fysiotherapie. Heb je fysiotherapie nodig? Dan combineren we de behandelkracht van MA Visio met onze expertise in Movement & Performance. Samen zorgen we voor het optimale hersteltraject.";
    const btnText = "Naar MA Visio Fysiotherapie";
    const btnLink = "https://mavisio.nl/";

    return (
        <section className="py-24 px-6 bg-[#F5F1E8]">
            {/* The outer container handles the mouse events and passes them down via CSS or directly to the canvas context if needed. 
                For the canvas to get events, the overlaying divs must not block it, or we capture events on the container. */}
            <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden relative group">

                <div className="absolute inset-0 z-0 bg-[#051F1A]">
                    <div className="absolute inset-0 opacity-80 mix-blend-screen overflow-hidden">
                        <Galaxy
                            starSpeed={0.5}
                            density={1.5}
                            hueShift={160} // Adjusted to match the teal/green palette
                            speed={1}
                            glowIntensity={0.6}
                            repulsionStrength={2.5}
                            twinkleIntensity={0.4}
                            rotationSpeed={0.05}
                            transparent={true}
                        />
                    </div>
                </div>

                {/* Subtle overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#051F1A] via-transparent to-[#051F1A]/50 z-10 pointer-events-none" />

                {/* Make this wrapper pointer-events-none so mouse goes through to canvas, but make the button pointer-events-auto so it remains clickable */}
                <div className="relative z-20 py-24 px-8 md:px-16 flex flex-col items-center text-center pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-8 leading-tight">
                            {title}
                        </h2>

                        <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light mb-12">
                            {description}
                        </p>

                        <a
                            href={btnLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white text-[#082F26] px-8 py-4 rounded-full font-bold hover:scale-105 hover:bg-white/90 transition-all duration-300 pointer-events-auto"
                        >
                            {btnText}
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
