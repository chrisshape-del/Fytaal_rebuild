import { motion } from 'framer-motion';

export default function ReformExplainer({ content }) {
    const tag = content?.tag || "Wat is het?";
    const title = content?.title || "Wat is Reformer Pilates?";
    const desc1 = content?.description1 || "Reformer pilates is een vorm van pilates waarbij je traint op een speciaal toestel: de reformer. Met veren, katrollen en een glijdend platform train je kracht, mobiliteit, stabiliteit en controle in één workout.";
    const desc2 = content?.description2 || "Het is:\n• 💪 Krachttraining zonder je gewrichten te overbelasten\n• 🧘‍♀️ Mobiliteit & houding in één";
    const desc3 = content?.description3 || "• 🧠 Focus op controle, ademhaling en lichaamsbewustzijn\n• 🔥 Verrassend intens (ja, echt)";
    const tags = content?.tags || ['Kracht & Controle', 'Mobiliteit', 'Intens'];
    const image = content?.image || "https://images.unsplash.com/photo-1754257320382-95b43e9f797c?q=80&w=1200&auto=format&fit=crop";
    const statNumber = content?.statNumber || "Max 8";
    const statText = content?.statText || "deelnemers per les";

    return (
        <section className="py-24 md:py-32 px-6 md:px-20 bg-white relative overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#0d6452]/[0.03]" />

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[#0d6452] uppercase tracking-[0.3em] font-bold text-sm mb-4 block">
                        {tag}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-[#082F26] mb-8 leading-tight">
                        {title}
                    </h2>

                    <div className="space-y-6 text-lg text-[#082F26]/70 leading-relaxed font-light whitespace-pre-line">
                        <p>{desc1}</p>
                        <p>{desc2}</p>
                        <p>{desc3}</p>
                    </div>

                    {/* Key difference badges */}
                    <div className="flex flex-wrap gap-3 mt-8">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center px-4 py-2 rounded-full bg-[#0d6452]/10 text-[#0d6452] text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl">
                        <img
                            src={image}
                            alt="Reformer Pilates machine in een boutique studio"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#082F26]/30 to-transparent" />
                    </div>

                    {/* Floating stat */}
                    <div className="absolute -bottom-6 -left-6 bg-[#082F26] text-[#F5F1E8] rounded-2xl px-6 py-4 shadow-xl">
                        <div className="text-3xl font-heading font-black text-[#0d6452]">{statNumber}</div>
                        <div className="text-sm opacity-70">{statText}</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
