import { motion } from 'framer-motion';
import { Activity, Heart, Dumbbell } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export default function ReformAudience({ content }) {
    const tag = content?.tag || "Voor Wie?";
    const title = content?.title || "Re·Form is er voor iedereen";
    const desc = content?.description || "Of je nu herstellende bent, achter een bureau zit of al fanatiek sport — de reformer past zich aan jouw niveau aan.";

    // Default items fallback
    const defaultItems = [
        {
            title: "Herstel & Revalidatie",
            description: "Na een blessure, operatie of fysiotherapie. De reformer biedt een veilige, gecontroleerde manier om kracht en mobiliteit op te bouwen — zonder overbelasting.",
            tags: ["Na fysio", "Rugklachten", "Schouder/knie herstel"]
        },
        {
            title: "Vitaliteit & Balans",
            description: "Voor wie dagelijks veel zit, stress ervaart of simpelweg fitter wil worden. Reformer Pilates verbetert je houding, flexibiliteit en energie.",
            tags: ["Kantoorwerk", "Stressklachten", "Houding"]
        },
        {
            title: "Sport & Performance",
            description: "Als aanvulling op je sport. Verbeter je core stability, voorkom blessures en vergroot je bewegingsbereik. Veel topsporters trainen op de reformer.",
            tags: ["Hardlopen", "Tennis", "Cross-training"]
        }
    ];

    const items = content?.items || defaultItems;
    const icons = [Heart, Activity, Dumbbell];

    return (
        <section className="py-24 md:py-32 px-6 md:px-20 bg-[#F5F1E8] relative">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <span className="text-[#0d6452] uppercase tracking-[0.3em] font-bold text-sm mb-4 block">
                    {tag}
                </span>
                <h2 className="text-4xl md:text-6xl font-heading font-black text-[#082F26] mb-6 leading-tight">
                    {title}
                </h2>
                <p className="text-xl text-[#082F26]/60 max-w-2xl mx-auto font-light">
                    {desc}
                </p>
            </div>

            {/* Cards */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8"
            >
                {items.map((item, index) => {
                    const Icon = icons[index % icons.length];
                    return (
                        <motion.div
                            key={item.title}
                            variants={cardVariants}
                            className="group bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#082F26]/5 hover:border-[#0d6452]/20 cursor-default flex flex-col"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-[#0d6452]/10 flex items-center justify-center mb-6 group-hover:bg-[#0d6452] transition-colors duration-500">
                                <Icon className="w-6 h-6 text-[#0d6452] group-hover:text-white transition-colors duration-500" />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-heading font-bold text-[#082F26] mb-4">
                                {item.title}
                            </h3>
                            <p className="text-[#082F26]/60 leading-relaxed mb-6 font-light">
                                {item.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto pt-6">
                                {item.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-3 py-1 rounded-full bg-[#F5F1E8] text-[#082F26]/60 font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
