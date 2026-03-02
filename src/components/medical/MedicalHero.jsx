import { motion, useScroll, useTransform } from 'framer-motion';

export default function MedicalHero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 300]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    const tag = "Medical Training";
    const title = "Medical Training bij Fytaal";
    const subtitle = "Van klacht naar kracht. Verantwoord terug naar bewegen.";
    const description = "Heb je (of had je) last van lichamelijke klachten? Ben je “uitbehandeld” bij de fysio, maar nog niet klaar om zelfstandig te trainen? Of wil je voorkomen dat klachten terugkomen?\n\nDan is Medical Training bij Fytaal precies waar jij hoort.\n\nWij slaan de brug tussen zorg en sport. Je traint bij ons onder begeleiding van gespecialiseerde trainers, met aandacht voor herstel, belastbaarheid en duurzame vooruitgang. Geen quick fixes, wél een doordachte aanpak.";

    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#F5F1E8]">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] bg-[#0d6452]/5 rounded-full blur-[100px]" />
                <div className="absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-[#082F26]/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row items-center gap-16">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-1/2"
                >
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
                        {tag}
                    </span>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-black text-[#082F26] mb-6 leading-[0.9]">
                        {title.split('bij Fytaal')[0]}
                        <br />
                        <span className="text-primary">bij Fytaal</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#082F26]/80 mb-8 italic">
                        {subtitle}
                    </h2>

                    <div className="text-lg md:text-xl text-[#082F26]/70 leading-relaxed font-light space-y-4 whitespace-pre-line max-w-xl">
                        {description}
                    </div>
                </motion.div>

                {/* Hero Image / Visual */}
                <motion.div
                    style={{ y, opacity }}
                    className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative rounded-[3rem] overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                    <img
                        src="/381A1610-1-edited-2048x1152.webp"
                        alt="Medical Training"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
