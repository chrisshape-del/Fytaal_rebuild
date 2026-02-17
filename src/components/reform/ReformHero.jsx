import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function ReformHero({ content }) {
    const tag = content?.tag || "Bewegen vanuit de Fysio";
    const title = content?.title || "Re·Form";
    const subtitle = content?.subtitle || "Hervorm je lichaam, reset je geest.";
    const description = content?.description || "Een fusie van kracht, flexibiliteit en mindfulness op de reformer.";
    const buttonText = content?.buttonText || "BOEK EEN LES";
    const subText = content?.subText || "Fytaal Baarn";
    const image = content?.image || "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop";

    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#082F26] text-[#F5F1E8]">


            <div className="grid md:grid-cols-2 h-full relative z-10">
                {/* Left: Content */}
                <div className="flex flex-col justify-center px-6 md:px-20 h-full relative order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="block text-primary text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4">
                            {tag}
                        </span>
                        <h1 className="text-7xl md:text-9xl font-heading font-black uppercase leading-[0.9] tracking-tighter mb-6">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-md font-light leading-relaxed mb-10">
                            {subtitle}
                            <span className="block mt-2 text-white/60 text-lg">
                                {description}
                            </span>
                        </p>

                        <div className="flex items-center gap-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#F5F1E8] text-[#082F26] px-8 py-4 rounded-full font-bold tracking-wider hover:bg-white transition-colors"
                            >
                                {buttonText}
                            </motion.button>
                            <div className="w-12 h-[1px] bg-white/30 hidden md:block" />
                            <span className="text-xs uppercase tracking-widest opacity-60 hidden md:block">
                                {subText}
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Slanted Image */}
                <div className="h-full w-full relative order-1 md:order-2">
                    <motion.div
                        initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                        animate={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="absolute inset-0 h-full w-full bg-black"
                    >
                        <div className="absolute inset-0 bg-[#082F26]/20 mix-blend-multiply z-10" />
                        <img
                            src={image}
                            alt="Reformer Pilates Aesthetic"
                            className="w-full h-full object-cover opacity-90"
                        />
                        {/* Gradient overlay for text readability on mobile if needed */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#082F26] via-transparent to-transparent md:hidden" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-20 md:translate-x-0 flex flex-col items-center gap-2 text-white/40"
            >
                <span className="text-[10px] uppercase tracking-widest">Scroll to Flow</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
            </motion.div>
        </section>
    );
}
