import Timeline from '../components/Timeline';
import { motion } from 'framer-motion';

export default function Approach() {
    return (
        <div className="pt-20">
            {/* Minimal Hero for Approach Page */}
            <section className="bg-slate-900 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-heading font-black mb-6"
                    >
                        Onze Aanpak
                    </motion.h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Bij Fytaal werken we niet met quick fixes. Wij geloven in een structurele aanpak
                        waarin we stap voor stap toewerken naar een duurzaam resultaat.
                    </p>
                </div>
            </section>

            {/* The Timeline Component */}
            <Timeline />

            {/* Extra Content - Could be expanded later based on brainstorm */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-heading font-bold mb-6">Waarom deze 5 fases?</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Veel trajecten stranden omdat er stappen worden overgeslagen. Door eerst te focussen op herstel
                        en belastbaarheid (Fase 1 & 2), bouwen we een fundament waarop je veilig kracht kunt opbouwen (Fase 3).
                        Pas daarna is het zinvol om te focussen op maximale vitaliteit en performance (Fase 4 & 5).
                    </p>
                </div>
            </section>
        </div>
    );
}
