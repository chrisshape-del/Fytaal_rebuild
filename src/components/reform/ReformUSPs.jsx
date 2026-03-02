import { motion } from 'framer-motion';
import { Users, Sparkles, Zap, Brain } from 'lucide-react';

export default function ReformUSPs({ content }) {
    const tag = content?.tag || "Re:form x Fytaal";
    const title = content?.title || "Slim trainen, duurzaam resultaat";
    const desc = content?.description || "Re:form is onderdeel van Fytaal. Reformer pilates sluit perfect aan op krachttraining, herstel, blessurepreventie en prestatiegericht trainen. Het is geen 'extraatje', maar een slimme aanvulling op je training en leefstijl.";

    const defaultItems = [
        {
            id: 1,
            title: "Duurzaam trainen",
            description: "Trainen met een lange termijn visie. Alles wat we doen is gericht op blijvend resultaat en gezondheid."
        },
        {
            id: 2,
            title: "Verantwoord sterker worden",
            description: "Op een veilige, gecontroleerde manier kracht opbouwen, onderbouwd door onze fysio-kennis."
        },
        {
            id: 3,
            title: "Trainen voor het leven",
            description: "Bewegingen die je dagelijks leven beter maken, zodat je fitter en pijnvrij blijft."
        },
        {
            id: 4,
            title: "Slimme aanvulling",
            description: "Reformer pilates is geen extraatje, maar een perfecte aanvulling op krachttraining of (top)sport."
        }
    ];

    const items = content?.items || defaultItems;
    const icons = [Sparkles, Zap, Users, Brain];

    return (
        <section className="py-24 md:py-32 px-6 md:px-20 bg-[#082F26] text-[#F5F1E8] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0d6452]/5 skew-x-12 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20 md:text-center">
                    <span className="text-[#0d6452] uppercase tracking-[0.3em] font-bold text-sm mb-4 block bg-[#F5F1E8] w-fit px-4 py-1 rounded-full md:mx-auto">
                        {tag}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-heading font-black">
                        {title}
                    </h2>
                    <p className="mt-6 text-[#F5F1E8]/70 text-lg md:text-xl font-light max-w-2xl mx-auto md:text-center">
                        {desc}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-[#0d6452]/10 backdrop-blur-sm border border-[#F5F1E8]/10 p-8 rounded-3xl hover:bg-[#0d6452]/20 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#F5F1E8]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-6 h-6 text-[#F5F1E8]" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-heading">{item.title}</h3>
                                <p className="text-[#F5F1E8]/60 leading-relaxed font-light text-sm">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
