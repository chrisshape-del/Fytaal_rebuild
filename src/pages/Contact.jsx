import { useState, useEffect, useRef } from 'react';
import { MoveRight, Phone, Mail, MapPin, Clock, Star, Calendar, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import ReviewMarquee from '../components/ReviewMarquee';
import BookingModal from '../components/BookingModal';



// Default reviews if fetch fails or initially
const DEFAULT_REVIEWS = [
    { name: 'Gerard Born', text: 'Ben op zoek gegaan naar fitnesscentrum om gezondheid te stimuleren en niet aan de medicijnen te hoeven na diagnose diabetes 2. En ik ben uitgekomen bij Fytaal. Eerst een personal coach gehad, waar het zeer prettig mee werken was. Afwisselende opdrachten en vooral een duidelijke visie op wat we wilden bereiken. Gevolg ik voel mij duidelijk vitaler en mijn gezondheid is duidelijk verbeterd.', rating: 5, date: '4 maanden geleden' },
    { name: 'Peter Velsen', text: 'Super combinatie van persoonlijke aandacht door de kleine groepen en het groepsgevoel wat je helpt op te komen dagen en je grenzen te verleggen. Goede en laagdrempelige sfeer en professionele en gedreven begeleiding door Koen en Lesly. Na anderhalf jaar nog super tevreden!', rating: 5, date: '9 maanden geleden' },
    { name: 'Denise Boon', text: 'Ik had nooit gedacht dat ik ooit in een Personal Gym zou trainen. En nu doe ik het 2x in de week in alle vroegte met een grote lach op mijn gezicht! Doriene weet waar ze het over heeft. Ze kan goed schakelen als het even anders loopt en maakt iedere keer weer oefeningen op maat. Top en uniek!', rating: 5, date: '1 jaar geleden' },
    { name: 'Marjolein de Wit', text: 'Wat een fijne plek om te sporten! Ik was altijd een beetje bang voor de sportschool, maar bij Fytaal voel ik me helemaal thuis. De trainers kennen je bij naam en weten precies wat je nodig hebt.', rating: 5, date: '2 maanden geleden' },
    { name: 'Rob Hendriks', text: 'Na mijn knieoperatie was ik op zoek naar een plek waar ik veilig kon revalideren. Bij Fytaal hebben ze me stap voor stap geholpen. Nu train ik weer volop en voel me sterker dan voor mijn operatie.', rating: 5, date: '3 maanden geleden' },
    { name: 'Sandra van Dijk', text: 'Al bijna 2 jaar lid en nog steeds enthousiast! De variatie in trainingen houdt het leuk en uitdagend. Koen en Lesly zijn top trainers die je echt pushen op een positieve manier.', rating: 5, date: '5 maanden geleden' },
    { name: 'Hans Bakker', text: 'Als 60-plusser was ik sceptisch of personal training iets voor mij zou zijn. Maar Doriene heeft me overtuigd. Ze past alles aan op mijn niveau en houdt rekening met mijn rugklachten. Ik merk dat ik fitter ben, beter slaap en meer energie heb.', rating: 5, date: '6 maanden geleden' },
    { name: 'Yvonne Mulder', text: 'De Kickstart was voor mij het perfecte startpunt. In 6 weken heb ik niet alleen fysiek resultaat geboekt, maar ook veel geleerd over voeding en leefstijl. Nu ben ik doorgestroomd naar de reguliere groepstrainingen.', rating: 5, date: '7 maanden geleden' }
];

export default function Contact() {
    const [content, setContent] = useState(null);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [submitState, setSubmitState] = useState({ status: 'idle', message: '' });
    const formRef = useRef(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const res = await fetch('/api/content/contact');
                if (res.ok) {
                    const data = await res.json();
                    setContent(data);
                }
            } catch (error) {
                console.error("Failed to fetch contact content:", error);
            }
        };
        fetchContent();
    }, []);

    const heroTitle = content?.hero?.title || "Zin om van start te gaan?";
    const heroSubtitle = content?.hero?.subtitle || "Heb je vragen over onze aanpak of wil je direct een kennismaking plannen? Stefan & Marco staan voor je klaar.";
    const email = content?.info?.email || "info@fytaal.nl";
    const phone = content?.info?.phone || "06 20 63 68 08";
    const address = content?.info?.address || "Amsterdamsestraatweg 21, 3744 MA Baarn";
    const reviews = content?.reviews || DEFAULT_REVIEWS;
    const reviewCount = content?.reviewCount || 57;

    const bookingCardTitle = content?.decisionCards?.bookingCard?.title || "Kennismakingsgesprek boeken";
    const bookingCardSubtitle = content?.decisionCards?.bookingCard?.subtitle || "Gratis en vrijblijvend · 30 minuten · Op locatie";
    const bookingCardButton = content?.decisionCards?.bookingCard?.buttonText || "Plan direct in";

    const messageCardTitle = content?.decisionCards?.messageCard?.title || "Stuur ons een bericht";
    const messageCardSubtitle = content?.decisionCards?.messageCard?.subtitle || "Stel je vraag via het formulier · Reactie binnen 24 uur";
    const messageCardButton = content?.decisionCards?.messageCard?.buttonText || "Ga naar formulier";

    const openBooking = () => {
        setIsBookingOpen(true);
    };

    const handleFieldChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitState({ status: 'sending', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(result?.error || 'Verzenden mislukt');
            }

            setSubmitState({ status: 'success', message: 'Bericht verstuurd. We reageren zo snel mogelijk.' });
            setFormData({ name: '', phone: '', email: '', message: '' });
        } catch (error) {
            setSubmitState({ status: 'error', message: error.message || 'Er ging iets mis.' });
        }
    };

    return (
        <>
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
            <div className="bg-white min-h-screen pt-32 pb-20 overflow-x-hidden">
                <div className="max-w-7xl mx-auto px-4">

                {/* Decision Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
                >
                    {/* Card 1: Boek een kennismakingsgesprek */}
                    <button
                        type="button"
                        onClick={openBooking}
                        className="group text-left bg-white border-2 border-primary/20 hover:border-primary/50 rounded-3xl p-8 transition-all duration-300 relative overflow-hidden hover:shadow-xl hover:shadow-primary/10 focus:outline-none focus:ring-4 focus:ring-primary/15"
                    >
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-primary rounded-l-3xl" />
                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                                <Calendar className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{bookingCardTitle}</h3>
                                <p className="text-slate-500 text-sm mb-4">{bookingCardSubtitle}</p>
                                <span className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                                    {bookingCardButton} <MoveRight className="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                    </button>

                    {/* Card 2: Stuur een bericht */}
                    <button
                        onClick={scrollToForm}
                        className="group text-left bg-white border-2 border-slate-100 hover:border-slate-300 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100"
                    >
                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-slate-200 transition-colors duration-300">
                                <MessageSquare className="w-6 h-6 text-slate-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{messageCardTitle}</h3>
                                <p className="text-slate-500 text-sm mb-4">{messageCardSubtitle}</p>
                                <span className="inline-flex items-center gap-2 text-slate-600 font-bold text-sm group-hover:gap-3 transition-all">
                                    {messageCardButton} <MoveRight className="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                    </button>
                </motion.div>

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
                            <span className="font-bold text-sm">{`5.0 ★ Google Rating (${reviewCount} reviews)`}</span>
                        </div>

                        <h1 className="text-6xl font-serif font-black text-slate-900 mb-8 leading-[1.1]">{heroTitle}</h1>
                        <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl">
                            {heroSubtitle}
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="group flex items-start gap-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <a href={`tel:${phone.replace(/\s/g, '')}`} className="block">
                                    <h4 className="font-bold text-lg text-slate-900">Bellen of Appen</h4>
                                    <p className="text-slate-600 hover:text-primary transition-colors">{phone}</p>
                                </a>
                            </div>

                            <div className="group flex items-start gap-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <a href={`mailto:${email}`} className="block">
                                    <h4 className="font-bold text-lg text-slate-900">Mailen</h4>
                                    <p className="text-slate-600 hover:text-primary transition-colors">{email}</p>
                                </a>
                            </div>

                            <div className="group flex items-start gap-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900">Langskomen</h4>
                                    <p className="text-slate-600">{address}</p>
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
                        ref={formRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-neutral-50 p-10 rounded-[2.5rem] relative"
                    >
                        <div className="absolute top-6 right-10 flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200">
                            <Clock className="w-3 h-3" /> Reactie binnen 24u
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-8">Stuur ons een bericht</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Naam</label>
                                    <input type="text" value={formData.name} onChange={(e) => handleFieldChange('name', e.target.value)} required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all" placeholder="Jouw naam" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Telefoon</label>
                                    <input type="tel" value={formData.phone} onChange={(e) => handleFieldChange('phone', e.target.value)} required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all" placeholder="06 12345678" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Email</label>
                                <input type="email" value={formData.email} onChange={(e) => handleFieldChange('email', e.target.value)} required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all" placeholder="jouw@email.nl" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Bericht</label>
                                <textarea rows="4" value={formData.message} onChange={(e) => handleFieldChange('message', e.target.value)} required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all resize-none" placeholder="Waar kunnen we je mee helpen?"></textarea>
                            </div>

                            {submitState.status !== 'idle' && (
                                <p className={`text-sm font-semibold ${submitState.status === 'success' ? 'text-emerald-700' : submitState.status === 'error' ? 'text-red-600' : 'text-slate-500'}`}>
                                    {submitState.status === 'sending' ? 'Bericht wordt verstuurd...' : submitState.message}
                                </p>
                            )}

                            <button type="submit" disabled={submitState.status === 'sending'} className="group w-full bg-primary text-white font-black px-8 py-5 rounded-2xl hover:bg-[#0a5243] hover:shadow-[0_20px_40px_-10px_rgba(13,100,82,0.4)] transition-all duration-300 flex items-center justify-center gap-3 text-lg tracking-wide uppercase disabled:opacity-60 disabled:cursor-not-allowed">
                                {submitState.status === 'sending' ? 'VERSTUREN...' : 'VERZENDEN'}
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
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{reviewCount} Reviews op Google</span>
                            </div>
                        </div>
                    </div>

                    <ReviewMarquee reviews={reviews} />
                </motion.div>
                </div>
            </div>
        </>
    );
}
