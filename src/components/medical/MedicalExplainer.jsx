import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export default function MedicalExplainer() {
    const title = "De schakel tussen fysiotherapie en zelfstandig trainen";
    const preface = "Veel mensen vallen in een gat na hun behandeltraject. De pijn is weg, maar vertrouwen in het lichaam is er nog niet.\n\nBij Medical Training zorgen we dat je:";

    const listItems = [
        "veilig weer leert bewegen",
        "sterker wordt rondom je klacht",
        "grip krijgt op je belastbaarheid",
        "voorkomt dat klachten terugkomen",
        "met vertrouwen zelfstandig kunt trainen"
    ];

    const conclusion = "Wij werken nauw samen met MA Visio, die de fysiotherapeutische behandelingen verzorgt. Zo sluiten behandeling en training perfect op elkaar aan.";

    const routes = [
        {
            title: "Ben je nog onder behandeling?",
            desc: "Dan stemmen we jouw training af met de fysiotherapeut van MA Visio."
        },
        {
            title: "Uitbehandeld?",
            desc: "Dan helpen wij je verantwoord de stap te maken naar zelfstandig en duurzaam trainen."
        }
    ];

    return (
        <section className="py-32 px-6 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">

                {/* Left Side: Copy */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#082F26] mb-8 leading-tight">
                        {title}
                    </h2>

                    <p className="text-xl text-[#082F26]/70 leading-relaxed font-light mb-8 whitespace-pre-line">
                        {preface}
                    </p>

                    <ul className="space-y-4 mb-12">
                        {listItems.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 text-lg text-[#082F26] font-medium"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-primary font-bold">✓</span>
                                </div>
                                {item}
                            </motion.li>
                        ))}
                    </ul>

                    <p className="text-xl text-[#082F26]/70 leading-relaxed font-light mb-12">
                        {conclusion}
                    </p>
                </motion.div>

                {/* Right Side: Visual Cards for Routes */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 space-y-6 lg:mt-32"
                >
                    {routes.map((route, i) => (
                        <div
                            key={i}
                            className="bg-[#F5F1E8] p-8 md:p-10 rounded-3xl border border-[#082F26]/5 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-white rounded-2xl shadow-sm">
                                    <Target className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold font-heading text-[#082F26] mb-3">
                                        {route.title}
                                    </h3>
                                    <p className="text-[#082F26]/70 text-lg leading-relaxed">
                                        {route.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
