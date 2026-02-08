import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

const trainers = [
    {
        name: 'Doriene',
        photo: '/Doriene-683x1024.webp',
        role: 'Fysiotherapeut & Personal Trainer',
        quote: 'Ik help je van klacht naar kracht, met persoonlijke aandacht en medische expertise.',
    },
    {
        name: 'Koen',
        photo: '/Koen-683x1024.webp',
        role: 'Personal Trainer',
        quote: 'Samen bouwen we aan jouw kracht, stap voor stap en volledig op jouw tempo.',
    },
    {
        name: 'Lesly',
        photo: '/Lesly-683x1024.webp',
        role: 'Personal Trainer',
        quote: 'Kleinschalig betekent dat ik jou echt zie en begrijp wat jij nodig hebt.',
    },
    {
        name: 'Peter',
        photo: '/Peter-683x1024.webp',
        role: 'Personal Trainer',
        quote: 'Met de juiste begeleiding haal je meer uit jezelf dan je dacht mogelijk was.',
    },
];

export default function Testimonials() {
    const [activeTrainer, setActiveTrainer] = useState(0);

    const next = useCallback(() => {
        setActiveTrainer((prev) => (prev + 1) % trainers.length);
    }, []);

    // Auto-rotate every 5 seconds
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section className="py-24 px-4 bg-[#F5F1E8]">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-heading font-bold mb-16 text-center text-slate-900"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Ons Team
                </motion.h2>

                {/* Carousel */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTrainer}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="grid md:grid-cols-2 gap-12 items-center"
                        >
                            {/* Trainer Portrait */}
                            <div className="relative">
                                <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                                    <img
                                        src={trainers[activeTrainer].photo}
                                        alt={trainers[activeTrainer].name}
                                        className="w-full h-full object-cover warm-filter"
                                    />
                                </div>
                                {/* Teal accent border */}
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-primary rounded-3xl -z-10" />
                            </div>

                            {/* Quote & Info */}
                            <div>
                                {/* Quote mark */}
                                <svg
                                    className="w-16 h-16 text-primary/20 mb-6"
                                    viewBox="0 0 32 32"
                                    fill="currentColor"
                                >
                                    <path d="M6.5 10c0-3.5 2.5-6.5 6.5-6.5v3c-2 0-3.5 1.5-3.5 3.5h3.5v7h-7v-7h.5zm13 0c0-3.5 2.5-6.5 6.5-6.5v3c-2 0-3.5 1.5-3.5 3.5h3.5v7h-7v-7h.5z" />
                                </svg>

                                <blockquote className="text-2xl text-slate-700 mb-6 leading-relaxed">
                                    &ldquo;{trainers[activeTrainer].quote}&rdquo;
                                </blockquote>

                                <div>
                                    <p className="text-xl font-bold text-slate-900">
                                        {trainers[activeTrainer].name}
                                    </p>
                                    <p className="text-primary font-semibold">
                                        {trainers[activeTrainer].role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Carousel Dots */}
                    <div className="flex justify-center gap-2 mt-12">
                        {trainers.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTrainer(index)}
                                className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                                    index === activeTrainer
                                        ? 'bg-primary w-8'
                                        : 'bg-slate-300 hover:bg-slate-400 w-3'
                                }`}
                                aria-label={`Bekijk ${trainers[index].name}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
