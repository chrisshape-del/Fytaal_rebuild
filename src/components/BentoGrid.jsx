import { motion } from 'framer-motion';
import { Users, ShieldCheck, Target } from 'lucide-react';

const photoItems = [
    {
        src: '/381A1367-1024x683.webp',
        alt: 'Training session bij Fytaal',
        title: 'Kleinschalig & Persoonlijk',
        description:
            'Max 6 personen per groep. Echte aandacht voor jouw doelen.',
        icon: Users,
        tall: true,
    },
    {
        src: '/381A1392-1024x683.webp',
        alt: 'Professionele apparatuur',
        title: 'Professionele Apparatuur',
        description: 'Alles wat je nodig hebt voor optimale resultaten',
    },
    {
        src: '/381A1454-2048x1365.webp',
        alt: 'Gym sfeer Fytaal Baarn',
        title: 'Unieke Locatie',
        description: 'Industriële setting in Baarn met gratis parkeren',
    },
    {
        src: '/472620672-2048x1365.webp',
        alt: 'Overzicht trainingsruimte Fytaal',
        title: 'Jouw Tweede Thuis',
        description:
            'Een plek waar je je welkom voelt en resultaat boekt',
        wide: true,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function BentoGrid() {
    return (
        <section className="py-24 px-4 bg-[#F5F1E8]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
                        Onze kracht
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 text-slate-900">
                        Waarom Fytaal Werkt
                    </h2>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {/* Photo 1 - Tall (spans 2 rows) */}
                    <motion.div
                        variants={cardVariants}
                        className="md:row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl"
                    >
                        <img
                            src={photoItems[0].src}
                            alt={photoItems[0].alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 warm-filter"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">
                                    {photoItems[0].title}
                                </h3>
                                <p className="text-white/80">
                                    {photoItems[0].description}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Card - Medical Expertise */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-white rounded-2xl p-8 flex flex-col justify-center border-l-4 border-primary"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-slate-900">
                            Medische Expertise
                        </h3>
                        <p className="text-slate-600">
                            Trainers met fysiotherapie achtergrond. Veilig
                            trainen, ook met blessures.
                        </p>
                    </motion.div>

                    {/* Photo 2 - Medium */}
                    <motion.div
                        variants={cardVariants}
                        className="relative group cursor-pointer overflow-hidden rounded-2xl"
                    >
                        <img
                            src={photoItems[1].src}
                            alt={photoItems[1].alt}
                            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 warm-filter"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-bold mb-1">
                                    {photoItems[1].title}
                                </h3>
                                <p className="text-white/80 text-sm">
                                    {photoItems[1].description}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Photo 3 - Medium */}
                    <motion.div
                        variants={cardVariants}
                        className="relative group cursor-pointer overflow-hidden rounded-2xl"
                    >
                        <img
                            src={photoItems[2].src}
                            alt={photoItems[2].alt}
                            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 warm-filter"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-bold mb-1">
                                    {photoItems[2].title}
                                </h3>
                                <p className="text-white/80 text-sm">
                                    {photoItems[2].description}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Card - Persoonlijke Aandacht */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-white rounded-2xl p-8 flex flex-col justify-center border-l-4 border-primary"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                            <Target className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-slate-900">
                            Persoonlijke Aandacht
                        </h3>
                        <p className="text-slate-600">
                            Bij Fytaal ben je geen nummer. We coachen intensief op
                            techniek, motivatie en jouw persoonlijke groei.
                        </p>
                    </motion.div>

                    {/* Photo 4 - Wide (spans 2 cols) */}
                    <motion.div
                        variants={cardVariants}
                        className="md:col-span-2 relative group cursor-pointer overflow-hidden rounded-2xl h-64"
                    >
                        <img
                            src={photoItems[3].src}
                            alt={photoItems[3].alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 warm-filter"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <h3 className="text-2xl font-bold mb-1">
                                    {photoItems[3].title}
                                </h3>
                                <p className="text-white/80">
                                    {photoItems[3].description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
