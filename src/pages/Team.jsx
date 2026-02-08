import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Quote, ArrowRight, X } from 'lucide-react';


const teamMembers = [
    {
        name: "Doriene Verzijlenberg",
        role: "Vitaliteitstherapeut",
        img: "/Doriene-683x1024.webp",
        link: "/trainer/doriene-verzijlenberg",
        quote: "Je kunt vaak veel meer dan je zelf denkt.",
        bio: "Doriene is oprichter en eigenaar van Fytaal. Daarnaast is zij Fysiotherapeut, Personal Trainer en Vitaliteitstherapeut.",
        detailedBio: [
            "Als fysiotherapeut merkte ik dat de lichamelijke klacht van de klant niet altijd op zichzelf staat, maar dat o.a. de leefstijl een belangrijk deel van het probleem én van de oplossing kan zijn.",
            "Fytaal is in 2010 opgericht door Doriene Verzijlenberg en is sinds april 2014 gevestigd in het centrum van Baarn. Regelmatig ziek zijn behoort nu tot een ander leven en ik kan alles doen zonder beperkt te worden.",
            "Doriene vindt het vooral bijzonder wat het lichaam eigenlijk allemaal kan als je er mee aan de slag gaat. Het samen puzzelen wat voor jou werkt is haar leukste uitdaging."
        ]
    },
    {
        name: "Lesly Krijnen",
        role: "Personal Trainer",
        img: "/Lesly-683x1024.webp",
        link: "/trainer/lesly-krijnen",
        quote: "Je wilt altijd meer, en nooit minder, van wat jou sterk maakt!",
        bio: "Lesly is Personal (Group) trainer en met haar bruisende energie weet ze jou te triggeren net dat stapje harder te zetten.",
        detailedBio: [
            "Lesly weet jou met haar bruisende energie net even dat stapje harder te laten zetten.",
            "Lesly heeft vroeger veel sporten gedaan, van paardrijden naar turnen en polefitness. Zij merkte dat zij bij pole fitness kracht mistte en kwam zo in de gym terecht voor krachttraining.",
            "Zij is nog elke dag dankbaar dat ze dit werk mag doen en kijkt er naar uit jou te mogen begeleiden."
        ]
    },
    {
        name: "Peter Hollander",
        role: "Personal Trainer",
        img: "/Peter-683x1024.webp",
        link: "/trainer/peter-hollander",
        quote: "Hard trainen en de juiste voeding zijn de sleutel tot succes.",
        bio: "De specialiteit van Peter als Trainer/Coach is het vinden van een training die meer balans geeft aan jouw lijf.",
        detailedBio: [
            "Mijn naam is Peter Hollander. Sinds mijn 15e ben ik al actief bezig met fitnessen. Door mijn vroege start heb ik al 10 jaar ervaring.",
            "Mijn kracht ligt in het motiveren en inspireren van mensen. Je ontwikkelt niet alleen je spieren en je conditie, maar werkt ook actief aan je welzijn en geest.",
            "Ik geloof niet in een wondermiddel. Hard trainen en de juiste voeding zijn de twee belangrijkste elementen."
        ]
    },
    {
        name: "Koen 't Hart",
        role: "Personal Trainer",
        img: "/Koen-683x1024.webp",
        link: "/trainer/koen-t-hart",
        quote: "Gedreven om het beste bij jou naar boven te halen.",
        bio: "Koen is gedreven om jou te helpen om het beste bij jou naar boven te halen. Hij is personal trainer om jou te helpen jou te zien groeien en jouw doel te laten behalen.",
        detailedBio: [
            "Koen is gedreven om jou te helpen om het beste bij jou naar boven te halen.",
            "Hij is personal trainer om jou te helpen jou te zien groeien en jouw doel te laten behalen. Samen werken we aan een sterker lichaam en een sterkere geest."
        ]
    }
];

export default function Team() {
    const containerRef = useRef(null);

    return (
        <div ref={containerRef} className="bg-surface-DEFAULT min-h-screen">
            {/* Team Hero */}
            <section className="relative pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-heading font-black text-primary-dark mb-6"
                    >
                        Ons Team
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl text-slate-600 max-w-2xl mx-auto font-sans"
                    >
                        Maak kennis met de experts die jou helpen je doelen te bereiken.
                        De drijvende kracht achter Fytaal.
                    </motion.p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="pb-32 px-4 relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} member={member} index={index} />
                    ))}
                </div>
            </section>
        </div>
    );
}

function TeamCard({ member, index }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = (e) => {
        if (e) e.stopPropagation();
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="h-[650px] w-full perspective-brand group/card">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full h-full"
            >
                <div
                    className={clsx(
                        "relative w-full h-full transition-all duration-700 transform-style-3d shadow-2xl rounded-[2.5rem]",
                        isFlipped ? "rotate-y-180" : ""
                    )}
                >
                    {/* --- FRONT SIDE --- */}
                    <div
                        className={clsx(
                            "absolute inset-0 w-full h-full backface-hidden rounded-[2.5rem] overflow-hidden bg-primary-dark",
                            isFlipped ? "z-0 pointer-events-none" : "z-20 pointer-events-auto"
                        )}
                    >
                        {/* Background */}
                        <div className="absolute inset-0">
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity" />
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-30">
                            <span className="inline-block px-3 py-1 bg-accent text-primary-dark text-xs font-bold tracking-widest uppercase mb-4 rounded-full">
                                {member.role}
                            </span>
                            <h3 className="text-4xl md:text-5xl font-black font-heading text-white mb-4 leading-none uppercase">
                                {member.name.split(' ')[0]} <br />
                                <span className="text-white/60">{member.name.split(' ').slice(1).join(' ')}</span>
                            </h3>

                            <div className="mt-4">
                                <p className="text-white/80 text-lg leading-relaxed border-t border-white/10 pt-4 font-sans line-clamp-2">
                                    {member.bio}
                                </p>
                                {/* Front Button */}
                                <div className="mt-6">
                                    <button
                                        onClick={handleFlip}
                                        className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold transition-all cursor-pointer border border-white/20 flex items-center gap-2 group/btn relative z-50 pointer-events-auto"
                                        type="button"
                                    >
                                        <span className="text-accent group-hover/btn:text-white transition-colors">Lees filosofie</span>
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- BACK SIDE (EDITORIAL DESIGN) --- */}
                    <div
                        className={clsx(
                            "absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-[2.5rem] overflow-hidden bg-primary-dark",
                            isFlipped ? "z-20 pointer-events-auto" : "z-0 pointer-events-none"
                        )}
                    >
                        {/* Blurred Background with Darker Overlay for Text Readability */}
                        <div className="absolute inset-0">
                            <img
                                src={member.img}
                                alt=""
                                className="w-full h-full object-cover blur-2xl opacity-30 scale-125"
                            />
                            {/* Gradient overlay to ensure text contrast at bottom/top */}
                            <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary-dark/80 to-primary-dark/95" />
                        </div>

                        {/* Close Button (Top Right) */}
                        <button
                            onClick={handleFlip}
                            className="absolute top-8 right-8 z-50 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/60 hover:text-white transition-colors cursor-pointer border border-white/5"
                            aria-label="Sluit"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="absolute inset-0 px-8 py-10 md:px-12 md:py-12 flex flex-col z-30">

                            {/* Decorative Quote Icon */}
                            <div className="mb-4">
                                <Quote className="w-10 h-10 text-accent opacity-60 rotate-180" />
                            </div>

                            {/* Main Quote - Headline */}
                            <blockquote className="text-2xl md:text-3xl font-serif italic text-white leading-tight mb-8">
                                "{member.quote}"
                            </blockquote>

                            {/* Detailed Bio - Scrollable Area */}
                            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4 text-white/80 font-sans tracking-wide leading-relaxed text-lg">
                                {member.detailedBio.map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                            </div>

                            {/* Bottom Actions */}
                            <div className="mt-8 pt-6 border-t border-white/10 flex justify-center w-full">
                                <button
                                    onClick={handleFlip}
                                    className="text-white/40 hover:text-white text-sm uppercase tracking-widest transition-colors cursor-pointer flex items-center gap-2 group/back"
                                    type="button"
                                >
                                    <span className="group-hover/back:-translate-x-1 transition-transform">←</span>
                                    Terug
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
