import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function ReformNewBadge({ content }) {
    const text1 = content?.text1 || "Nieuw bij Fytaal Baarn";
    const text2 = content?.text2 || "Reformer Pilates, exclusief in een privé boutique setting";

    return (
        <section className="relative bg-[#082F26] overflow-hidden">
            {/* Subtle animated gradient */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d6452] via-[#082F26] to-[#0d6452] animate-pulse" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-7xl mx-auto px-6 py-5 flex items-center justify-center gap-3 text-[#F5F1E8]"
            >
                <Sparkles className="w-4 h-4 text-[#0d6452]" />
                <span className="text-sm md:text-base font-medium tracking-wide">
                    <span className="font-bold text-[#0d6452]">{text1}</span>
                    <span className="mx-2 opacity-40">—</span>
                    <span className="opacity-80">{text2}</span>
                </span>
                <Sparkles className="w-4 h-4 text-[#0d6452]" />
            </motion.div>
        </section>
    );
}
