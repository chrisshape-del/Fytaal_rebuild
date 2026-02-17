import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const phases = [
    {
        id: '01',
        title: 'Herstel',
        description: 'Fysiotherapeutische begeleiding van klacht naar belastbaarheid. Wij analyseren de oorzaak en bouwen een fundering voor herstel.',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: '02',
        title: 'Opbouw',
        description: 'Van revalidatie naar verantwoorde training. Stapsgewijs vergroten we de belasting om terugval te voorkomen.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: '03',
        title: 'Kracht',
        description: 'Fundering leggen voor een sterk en weerbaar lichaam. Krachttraining is essentieel voor lange termijn gezondheid.',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: '04',
        title: 'Vitaliteit',
        description: 'Optimaliseren van energie, voeding en leefstijl. Een holistische aanpak voor meer energie in het dagelijks leven.',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: '05',
        title: 'Performance',
        description: 'Topsport begeleiding en grenzen verleggen. Voor wie het maximale uit zichzelf wil halen.',
        image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop'
    }
];

export default function Timeline() {
    const [activeId, setActiveId] = useState('01');

    return (
        <section className="py-24 px-4 bg-surface-DEFAULT relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-light/30 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm">
                        De Fytaal Methode
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 text-primary-dark">
                        Jouw Route Naar <span className="text-primary italic font-serif">Succes</span>
                    </h2>
                </motion.div>

                {/* Desktop Accordion (Horizontal) */}
                <div className="hidden md:flex h-[600px] w-full gap-4">
                    {phases.map((phase) => (
                        <motion.div
                            key={phase.id}
                            layout
                            onClick={() => setActiveId(phase.id)}
                            onHoverStart={() => setActiveId(phase.id)}
                            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeId === phase.id ? 'flex-[3]' : 'flex-1'
                                }`}
                        >
                            {/* Background Image & Overlay */}
                            <div className="absolute inset-0">
                                <img
                                    src={phase.image}
                                    alt={phase.title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                                <div className={`absolute inset-0 transition-opacity duration-300 ${activeId === phase.id
                                    ? 'bg-gradient-to-b from-primary-dark/30 via-primary-dark/60 to-primary-dark/90'
                                    : 'bg-primary-dark/60 hover:bg-primary-dark/40'
                                    }`} />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                                <div className="flex justify-between items-start">
                                    <span className={`text-4xl font-heading font-bold transition-colors duration-300 ${activeId === phase.id ? 'text-white/20' : 'text-white/60'
                                        }`}>
                                        {phase.id}
                                    </span>
                                    {activeId === phase.id && (
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-colors"
                                        >
                                            <ArrowUpRight className="w-5 h-5 text-accent-DEFAULT" />
                                        </motion.button>
                                    )}
                                </div>

                                <div className="relative">
                                    {/* Active State Content */}
                                    {activeId === phase.id ? (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <h3 className="text-4xl font-heading font-bold mb-4 text-white">
                                                {phase.title}
                                            </h3>
                                            <p className="text-white/90 text-lg leading-relaxed max-w-md font-sans">
                                                {phase.description}
                                            </p>
                                        </motion.div>
                                    ) : (
                                        /* Inactive State Vertical Text */
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center pb-8">
                                            <h3 className="text-3xl font-heading font-bold text-white/80 whitespace-nowrap [writing-mode:vertical-rl] rotate-180 tracking-widest uppercase opacity-80 hover:opacity-100 transition-opacity">
                                                {phase.title}
                                            </h3>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Accordion (Vertical) */}
                <div className="md:hidden flex flex-col gap-4">
                    {phases.map((phase) => (
                        <div
                            key={phase.id}
                            onClick={() => setActiveId(activeId === phase.id ? null : phase.id)}
                            className={`rounded-2xl overflow-hidden transition-all duration-500 relative ${activeId === phase.id ? 'h-[400px]' : 'h-24'
                                }`}
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={phase.image}
                                    alt={phase.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-primary-dark/60" />
                            </div>

                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="text-2xl font-heading font-bold text-white/40">{phase.id}</span>
                                    <h3 className="text-2xl font-heading font-bold text-white">{phase.title}</h3>
                                </div>

                                <AnimatePresence>
                                    {activeId === phase.id && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="text-white/90 font-sans"
                                        >
                                            {phase.description}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
