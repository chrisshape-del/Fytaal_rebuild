import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MoveRight, Dumbbell, HeartPulse, Trophy, Users, Zap, Calendar } from 'lucide-react';
import { servicesData } from '../data/services';

const icons = {
    fysiotherapie: HeartPulse,
    vitaliteit: Zap,
    hyrox: Trophy,
    "personal-group-training": Users,
    kickstart: Dumbbell,
    rooster: Calendar
};

const colors = {
    fysiotherapie: "bg-blue-50 text-blue-600",
    vitaliteit: "bg-green-50 text-green-600",
    hyrox: "bg-yellow-50 text-yellow-600",
    "personal-group-training": "bg-purple-50 text-purple-600",
    kickstart: "bg-red-50 text-red-600",
    rooster: "bg-slate-50 text-slate-600"
};

import { useState, useEffect } from 'react';

export default function ServicesOverview() {
    const [content, setContent] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const res = await fetch('/api/content/aanbod');
                if (res.ok) {
                    const data = await res.json();
                    setContent(data);
                }
            } catch (error) {
                console.error("Failed to fetch services overview content:", error);
            }
        };
        fetchContent();
    }, []);

    const SERVICES_LIST = content?.services_list || Object.entries(servicesData).map(([slug, data]) => ({ slug, ...data }));

    const heroTitle = content?.hero?.title || "ONS AANBOD";
    const heroSubtitle = content?.hero?.subtitle || "Of je nu wilt revalideren, presteren of gewoon lekker wilt bewegen. Wij hebben de expertise en de faciliteiten om jou te helpen.";

    const ctaTitle = content?.cta_section?.title || "Bekijk het Rooster";
    const ctaDescription = content?.cta_section?.description || "Benieuwd wanneer je favoriete training plaatsvindt? Bekijk ons actuele weekrooster.";
    const ctaButtonText = content?.cta_section?.buttonText || "Naar het rooster";
    const ctaButtonLink = content?.cta_section?.buttonLink || "/rooster";

    return (
        <div className="pt-20 bg-neutral-50 min-h-screen">
            {/* Header Section */}
            <section className="py-20 px-4 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-heading font-black mb-6 text-slate-900"
                >
                    {heroTitle}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
                >
                    {heroSubtitle}
                </motion.p>
            </section>

            {/* Services Grid */}
            <section className="px-4 pb-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES_LIST.map((service, index) => {
                        const slug = service.slug;
                        const Icon = icons[slug] || Zap;
                        const colorClass = colors[slug] || "bg-slate-50 text-slate-600";
                        const image = service.image;

                        // Don't show Rooster in the main services grid, keep it separate or last
                        if (slug === 'rooster') return null;

                        return (
                            <Link key={slug} to={`/aanbod/${slug}`} className="group relative block h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-3xl p-8 h-full border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                                >
                                    {/* Image Background (Semi-transparent) */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                        <img src={image} alt="" className="w-full h-full object-cover grayscale" />
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-2xl ${colorClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md`}>
                                        <Icon className="w-7 h-7" />
                                    </div>

                                    <h3 className="text-2xl font-heading font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-500 mb-8 line-clamp-3 leading-relaxed">
                                        {service.subtitle}
                                        {/* A simple hack to get a bit more text if subtitle is short, usually we'd want a separate description field */}
                                    </p>

                                    <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide uppercase group/link">
                                        Bekijk aanbod <MoveRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>

                {/* Rooster / Schedule CTA */}
                <div className="mt-16 bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl scale-150" />

                    <div className="relative z-10">
                        <Calendar className="w-12 h-12 text-primary mx-auto mb-6" />
                        <h2 className="text-3xl font-heading font-bold mb-4">{ctaTitle}</h2>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            {ctaDescription}
                        </p>
                        <Link to={ctaButtonLink} className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all">
                            {ctaButtonText} <MoveRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
