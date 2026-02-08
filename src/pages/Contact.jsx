import React, { useState } from 'react';
import { MoveRight, Phone, Mail, MapPin, Clock, Star, Quote, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
    {
        name: 'Gerard Born',
        text: 'Ben op zoek gegaan naar fitnesscentrum om gezondheid te stimuleren en niet aan de medicijnen te hoeven na diagnose diabetes 2. En ik ben uitgekomen bij Fytaal. Eerst een personal coach gehad, waar het zeer prettig mee werken was. Afwisselende opdrachten en vooral een duidelijke visie op wat we wilden bereiken. Na de zomer overgestapt naar circuit plus in een groep. Ook daar deskundige en enthousiaste trainers en een afwisselend programma. Gevolg ik voel mij duidelijk vitaler en mijn gezondheid is duidelijk verbeterd (zichtbaar in halfjaarlijkse controles). Dat stimuleert om te blijven trainen bij Fytaal.',
        rating: 5,
        date: '4 maanden geleden'
    },
    {
        name: 'Peter Velsen',
        text: 'Super combinatie van persoonlijke aandacht door de kleine groepen en het groepsgevoel wat je helpt op te komen dagen en je grenzen te verleggen. Goede en laagdrempelige sfeer en professionele en gedreven begeleiding door Koen en Lesly. Na anderhalf jaar nog super tevreden!',
        rating: 5,
        date: '9 maanden geleden'
    },
    {
        name: 'Denise Boon',
        text: 'Ik had nooit gedacht dat ik ooit in een Personal Gym zou trainen. En nu doe ik het 2x in de week in alle vroegte met een grote lach op mijn gezicht! Omdat ik hoofdklasse competitie golf speel, wil ik altijd het beste uit mezelf halen. Daarom heb ik dit jaar besloten om ook mijn lichaam hier zo optimaal mogelijk op voor te bereiden. Ik wil sterker zijn en heb daarom de hulp van Doriene ingeschakeld. Doriene weet waar ze het over heeft. Ze kan goed schakelen als het even anders loopt, zoals met een blessure en maakt iedere keer weer oefeningen op maat die aansluiten bij mijn doel, maar juist ook bij hoe mijn lichaam reageert. Op maat dus. En dat is top en uniek. Veel dank Doriene!',
        rating: 5,
        date: '1 jaar geleden'
    }
];

export default function Contact() {
    const [selectedReview, setSelectedReview] = useState(null);

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* Contact Info & Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 text-amber-500 mb-4 bg-amber-50 w-fit px-4 py-1.5 rounded-full border border-amber-100">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <span className="font-bold text-sm">5.0 ★ Google Rating (52 reviews)</span>
                        </div>

                        <h1 className="text-6xl font-serif font-black text-slate-900 mb-8 leading-[1.1]">Zin om van start te gaan?</h1>
                        <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl">
                            Heb je vragen over onze aanpak of wil je direct een kennismaking plannen?
                            Stefan & Marco staan voor je klaar.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="group flex items-start gap-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <a href="tel:0620636808" className="block">
                                    <h4 className="font-bold text-lg text-slate-900">Bellen of Appen</h4>
                                    <p className="text-slate-600 hover:text-primary transition-colors">06 20 63 68 08</p>
                                </a>
                            </div>

                            <div className="group flex items-start gap-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <a href="mailto:info@fytaal.nl" className="block">
                                    <h4 className="font-bold text-lg text-slate-900">Mailen</h4>
                                    <p className="text-slate-600 hover:text-primary transition-colors">info@fytaal.nl</p>
                                </a>
                            </div>

                            <div className="group flex items-start gap-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900">Langskomen</h4>
                                    <p className="text-slate-600">Amsterdamsestraatweg 21, 3744 MA Baarn</p>
                                    <p className="text-primary text-sm font-semibold mt-1 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        Gratis Parkeren & Centrale Locatie
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-neutral-50 p-10 rounded-[2.5rem] relative"
                    >
                        <div className="absolute top-6 right-10 flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200">
                            <Clock className="w-3 h-3" /> Reactie binnen 24u
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-8">Stuur ons een bericht</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Naam</label>
                                    <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all" placeholder="Jouw naam" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Telefoon</label>
                                    <input type="tel" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all" placeholder="06 12345678" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Email</label>
                                <input type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all" placeholder="jouw@email.nl" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Bericht</label>
                                <textarea rows="4" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all resize-none" placeholder="Waar kunnen we je mee helpen?"></textarea>
                            </div>

                            <button className="group w-full bg-primary text-white font-black px-8 py-5 rounded-2xl hover:bg-[#0a5243] hover:shadow-[0_20px_40px_-10px_rgba(13,100,82,0.4)] transition-all duration-300 flex items-center justify-center gap-3 text-lg tracking-wide uppercase">
                                VERZENDEN
                                <MoveRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Social Proof Section (Google Reviews) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="border-t border-slate-100 pt-16"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                        <div>
                            <span className="sub-heading mb-3 block">Wat klanten zeggen</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Echte Ervaringen</h2>
                        </div>
                        <div className="flex items-center gap-4 bg-white border border-slate-100 px-6 py-4 rounded-2xl shadow-sm">
                            <span className="text-3xl font-black text-slate-900">5.0</span>
                            <div className="flex flex-col">
                                <div className="flex text-amber-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">52 Reviews op Google</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {reviews.map((review, index) => (
                            <motion.div
                                key={review.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedReview(review)}
                                className="bg-neutral-50/50 p-8 rounded-[2rem] border border-slate-50 relative group cursor-pointer hover:bg-white hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
                            >
                                <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100 group-hover:text-primary/5 transition-colors" />
                                <div className="flex text-amber-500 mb-6">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-slate-600 mb-8 italic leading-relaxed text-lg line-clamp-4">
                                    "{review.text}"
                                </p>
                                <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                                    <span className="font-black text-slate-900 text-lg uppercase tracking-tight">{review.name}</span>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{review.date}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Review Modal */}
            <AnimatePresence>
                {selectedReview && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedReview(null)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={selectedReview.name}
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white max-w-2xl w-full rounded-[3rem] p-10 md:p-14 relative z-10 shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedReview(null)}
                                className="absolute top-8 right-8 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <Quote className="absolute -top-10 -left-10 w-40 h-40 text-slate-50 -z-10 opacity-50" />

                            <div className="flex text-amber-500 mb-8">
                                {[...Array(selectedReview.rating)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-current" />
                                ))}
                            </div>

                            <p className="text-xl md:text-2xl text-slate-600 mb-10 italic leading-relaxed font-medium">
                                "{selectedReview.text}"
                            </p>

                            <div className="flex items-center justify-between border-t border-slate-100 pt-8">
                                <div>
                                    <h5 className="font-black text-slate-900 text-xl md:text-2xl uppercase tracking-tighter">{selectedReview.name}</h5>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 block px-2 py-0.5 bg-slate-50 rounded-full w-fit">Geverifieerde Klant</span>
                                </div>
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{selectedReview.date}</span>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
