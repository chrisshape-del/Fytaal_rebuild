import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { CheckCircle2, Star, Shield, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import Schedule from '../components/Schedule';

export default function ServicePage({ propSlug }) {
    const { slug } = useParams();
    const activeSlug = propSlug || slug;
    const data = servicesData[activeSlug];
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center text-slate-500">
                <p>Service niet gevonden: {activeSlug}</p>
            </div>
        );
    }

    // Animation Variants
    const reveal = {
        hidden: { y: 20, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.25, 1, 0.5, 1]
            }
        })
    };

    return (
        <div className="bg-surface-DEFAULT relative overflow-hidden min-h-screen">
            {/* 1. Cinematic Hero with Grain & Vignette */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#082F26_90%)] mix-blend-multiply opacity-80" />
                    {/* Grain Texture */}
                    <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </motion.div>

                <div className="absolute inset-0 flex items-center z-10 pt-20">
                    <div className="max-w-7xl mx-auto px-4 w-full">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            className="max-w-4xl"
                        >
                            <motion.span
                                custom={0}
                                variants={reveal}
                                className="inline-block px-4 py-1 border border-accent/30 rounded-full text-accent font-bold tracking-[0.2em] uppercase mb-6 bg-primary-dark/50 backdrop-blur-sm"
                            >
                                {data.subtitle}
                            </motion.span>

                            <motion.h1
                                custom={1}
                                variants={reveal}
                                className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white leading-[0.9] mb-8 drop-shadow-2xl"
                            >
                                {data.title}
                            </motion.h1>

                            <motion.div custom={2} variants={reveal} className="flex flex-wrap gap-4">
                                <span className="text-white/80 font-serif italic text-xl md:text-2xl">
                                    Ervaar de kracht van <span className="text-accent">{data.title.toLowerCase()}</span>
                                </span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Content Section */}
            <section className="py-24 px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">



                        {/* Main Content Column */}
                        <div className="lg:col-span-8">
                            {/* Rooster / Schedule Logic */}
                            {activeSlug === 'rooster' ? (
                                <Schedule />
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="prose prose-lg prose-slate max-w-none"
                                >
                                    {data.content.map((block, index) => {
                                        switch (block.type) {
                                            case 'p': return <p key={index} className="text-slate-600 leading-relaxed mb-6 font-sans text-lg">{block.text}</p>;
                                            case 'bold': return <p key={index} className="font-heading font-bold text-2xl text-primary-dark mb-6">{block.text}</p>;
                                            case 'h3': return <h3 key={index} className="text-3xl font-bold font-heading text-primary-dark mt-12 mb-6 flex items-center gap-3"><span className="text-accent">//</span> {block.text}</h3>;
                                            case 'list': return (
                                                <div key={index} className="grid grid-cols-1 gap-4 my-10">
                                                    {block.items.map((item, i) => (
                                                        <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                                            <div className="bg-accent/10 p-2 rounded-full group-hover:bg-accent/20 transition-colors">
                                                                <CheckCircle2 className="text-accent w-6 h-6 shrink-0" />
                                                            </div>
                                                            <span className="text-slate-700 font-medium text-lg pt-1">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                            case 'divider': return <hr key={index} className="border-t border-slate-200 my-16" />;
                                            case 'bolditalic': return (
                                                <div key={index} className="bg-primary-dark p-10 rounded-3xl my-12 relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 p-8 opacity-10">
                                                        <Zap className="w-32 h-32 text-accent" />
                                                    </div>
                                                    <p className="font-serif italic text-2xl md:text-3xl text-white relative z-10 leading-relaxed">
                                                        "{block.text}"
                                                    </p>
                                                </div>
                                            );
                                            case 'html': return <div key={index} dangerouslySetInnerHTML={{ __html: block.content }} />;
                                            default: return null;
                                        }
                                    })}
                                </motion.div>
                            )}
                        </div>

                        {/* 3. Premium Glass Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="sticky top-8"
                            >
                                <div className="glass-panel-dark p-8 md:p-10 rounded-[2.5rem] border border-accent/20 shadow-2xl relative overflow-hidden">
                                    {/* Sidebar Background Glow */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                    <Star className="w-12 h-12 text-accent mb-6" />

                                    <h3 className="text-3xl font-bold font-heading text-white mb-2">
                                        Start met {data.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-accent rounded-full mb-6" />

                                    <p className="text-white/70 mb-10 leading-relaxed font-sans">
                                        Klaar om de volgende stap te zetten? Plan direct een vrijblijvend gesprek met een van onze experts.
                                    </p>

                                    <div className="space-y-4">
                                        <MagneticButton to={data.ctaLink || "/contact"} className="w-full justify-center !text-base">
                                            {data.cta}
                                        </MagneticButton>
                                    </div>

                                    <div className="mt-10 pt-8 border-t border-white/10">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="flex -space-x-3">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="w-10 h-10 rounded-full bg-slate-700 border-2 border-primary-dark overflow-hidden">
                                                        <img src={`/Koen-683x1024.webp`} className="w-full h-full object-cover opacity-80" alt="" />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex flex-col">
                                                <strong className="text-white text-lg">500+</strong>
                                                <span className="text-xs text-accent uppercase tracking-wider">Sporters</span>
                                            </div>
                                        </div>
                                        <p className="text-white/50 text-sm mt-2">
                                            Sluit je aan bij de Fytaal community.
                                        </p>
                                    </div>
                                </div>

                                {/* Quality Assurance Seal */}
                                <div className="mt-8 bg-white p-6 rounded-3xl border border-slate-100 shadow-lg flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Shield className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Gegarandeerde Kwaliteit</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">
                                            Onze trainers zijn gecertificeerd en werken volgens de nieuwste wetenschappelijke inzichten.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
