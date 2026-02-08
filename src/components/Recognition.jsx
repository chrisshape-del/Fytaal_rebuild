import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const situations = [
    {
        title: 'Na Fysio',
        description: 'Revalidatie afgerond, nu verder bouwen aan kracht',
    },
    {
        title: 'Weer Sporten',
        description: 'Lang niet gesport, onzeker waar te beginnen',
    },
    {
        title: 'Sterker Worden',
        description: 'Blessurevrij blijven en blijvend presteren',
    },
];

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function Recognition() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });
    const photoY = useTransform(scrollYProgress, [0, 1], [0, -60]);

    return (
        <section ref={sectionRef} className="min-h-[600px] relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-0 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        className="p-12 md:p-16 lg:p-24"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
                            Herken je dit?
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-8 text-slate-900">
                            We Begrijpen Je
                        </h2>

                        <div className="space-y-6">
                            {situations.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-start gap-4"
                                    custom={i}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-1 text-slate-900">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Large Gym Photo with Diagonal Cut */}
                    <div className="relative h-full min-h-[400px] md:min-h-[600px]">
                        <motion.div
                            className="absolute inset-0 bg-cover bg-center warm-filter"
                            style={{
                                backgroundImage:
                                    'url(/381A1635-edited-scaled.webp)',
                                clipPath:
                                    'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
                                y: photoY,
                            }}
                        />
                        {/* Warm teal overlay */}
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"
                            style={{
                                clipPath:
                                    'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
