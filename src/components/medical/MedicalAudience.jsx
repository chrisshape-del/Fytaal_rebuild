import { motion } from 'framer-motion';
import { Activity, Bone, ArrowUpCircle, AlertCircle, Baby } from 'lucide-react';

export default function MedicalAudience() {
    const title = "Voor wie is Medical Training?";

    // Mapping the provided list to cards with icons
    const audienceItems = [
        {
            icon: Activity,
            title: "Revalidatie",
            desc: "Revalidatie na een blessure of operatie (zoals een nieuwe heup/knie, kniebandletsel of hernia)."
        },
        {
            icon: AlertCircle,
            title: "Chronische Klachten",
            desc: "Chronische of terugkerende klachten (zoals rug-, nek-, knie- of schouderklachten)."
        },
        {
            icon: Baby,
            title: "Zwangerschap",
            desc: "Zwangerschap gerelateerde klachten (bekkeninstabiliteit, stuitpijn)."
        },
        {
            icon: ArrowUpCircle,
            title: "Lage Rugpijn",
            desc: "Lage rugpijn (zowel acuut als chronisch)."
        },
        {
            icon: Bone,
            title: "Artrose",
            desc: "Artrose of andere gewrichtsklachten waarbij gerichte krachttraining noodzakelijk is."
        }
    ];

    return (
        <section className="py-32 px-6 bg-[#082F26]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
                        Jouw Doelgroep
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight">
                        {title}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {audienceItems.slice(0, 4).map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-[#103D33] p-8 rounded-3xl border border-white/5 border-b-4 border-b-transparent hover:border-b-primary hover:bg-[#154a3e] transition-all duration-300 group flex flex-col"
                            >
                                <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-white/60 leading-relaxed text-lg">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}

                    {/* Empty spacer div to push Artrose to the far right column on large screens */}
                    <div className="hidden lg:block lg:col-span-1 border border-transparent"></div>

                    {/* Artrose Item */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 4 * 0.1 }}
                        className="bg-[#103D33] p-8 rounded-3xl border border-white/5 border-b-4 border-b-transparent hover:border-b-primary hover:bg-[#154a3e] transition-all duration-300 group flex flex-col lg:col-start-3"
                    >
                        <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                            <Bone className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-white mb-4">
                            {audienceItems[4].title}
                        </h3>
                        <p className="text-white/60 leading-relaxed text-lg">
                            {audienceItems[4].desc}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
