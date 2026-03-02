import { motion } from 'framer-motion';

export default function MedicalGoals() {
    const title = "Medical Training bij Fytaal: voor wie verder wil dan 'klachtenvrij'";

    const goals = [
        {
            subtitle: "Veilig en Verantwoord",
            text: "Jouw belastbaarheid is ons startpunt."
        },
        {
            subtitle: "Structuur en Resultaat",
            text: "We testen, meten en bouwen stap voor stap de intensiteit op."
        },
        {
            subtitle: "Aandacht voor de oorzaak",
            text: "We kijken verder dan alleen de pijnplek en lossen de kern van het probleem op."
        },
        {
            subtitle: "Bewezen aanpak",
            text: "Oefeningen die echt effect hebben op jouw herstel en prestaties."
        }
    ];

    return (
        <section className="py-32 px-6 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">

                {/* Left Side: Title */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-5/12"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#082F26] leading-tight">
                        {title}
                    </h2>
                </motion.div>

                {/* Right Side: List items */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-7/12"
                >
                    <div className="space-y-12">
                        {goals.map((goal, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="flex gap-6 items-start"
                            >
                                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-primary font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-heading font-bold text-[#082F26] mb-2">
                                        {goal.subtitle}
                                    </h3>
                                    <p className="text-[#082F26]/70 text-lg leading-relaxed font-light">
                                        {goal.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
