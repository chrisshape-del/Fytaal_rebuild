import { motion } from 'framer-motion';
import { Clock, Users, ShoppingBag, MapPin, CreditCard, HelpCircle, CheckCircle } from 'lucide-react';

export default function ReformPractical({ content }) {
    const tag = content?.tag || "Praktisch";
    const title = content?.title || "Goed om te weten";
    const image = content?.image || "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2070&auto=format&fit=crop";
    const locationTag = content?.locationTag || "Fytaal Baarn\nReformer Studio";

    const defaultDetails = [
        { label: "Duur", value: "55 minuten" },
        { label: "Locatie", value: "Amsterdamsestraatweg 21, Baarn" },
        { label: "Meenemen", value: "Gripsokken (verplicht), handdoek & water" }
    ];

    const details = content?.details || defaultDetails;
    const icons = [Clock, MapPin, CheckCircle];

    return (
        <section className="py-24 md:py-32 px-6 md:px-20 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative order-2 md:order-1"
                >
                    <div className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden">
                        <img
                            src={image}
                            alt="Reformer Pilates detail"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#082F26]/10" />

                        {/* Location Tag */}
                        <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <div className="text-xs font-bold text-[#082F26] uppercase tracking-wider whitespace-pre-line">
                                    {locationTag}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-1 md:order-2"
                >
                    <span className="text-[#0d6452] uppercase tracking-[0.3em] font-bold text-sm mb-4 block">
                        {tag}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-[#082F26] mb-12">
                        {title}
                    </h2>

                    <div className="space-y-8">
                        {details.map((item, index) => {
                            const Icon = icons[index % icons.length];
                            return (
                                <div key={item.label} className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-full bg-[#F5F1E8] flex items-center justify-center shrink-0 group-hover:bg-[#0d6452] transition-colors duration-300">
                                        <Icon className="w-5 h-5 text-[#0d6452] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-[#082F26]/50 mb-1">
                                            {item.label}
                                        </h4>
                                        <p className="text-xl md:text-2xl font-medium text-[#082F26]">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
