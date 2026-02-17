import React from 'react';
import ReformHero from '../components/reform/ReformHero';
import ReformNewBadge from '../components/reform/ReformNewBadge';
import ReformExplainer from '../components/reform/ReformExplainer';
import ReformAudience from '../components/reform/ReformAudience';
import ReformMethod from '../components/reform/ReformMethod';
import ReformUSPs from '../components/reform/ReformUSPs';
import ReformPractical from '../components/reform/ReformPractical';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Reform() {
    const [content, setContent] = React.useState(null);

    React.useEffect(() => {
        const fetchContent = async () => {
            try {
                const res = await fetch('/api/content/reform');
                if (res.ok) {
                    const data = await res.json();
                    setContent(data);
                }
            } catch (error) {
                console.error("Failed to fetch reform content:", error);
            }
        };
        fetchContent();
    }, []);

    // Fallback or loading state could be improved, but for now we pass content (which might be null initially)
    // The components should handle null/undefined gracefully or use defaults.

    // Destructure for direct use in the page
    const expTag = content?.experience?.tag || "De Ervaring";
    const expTitle = content?.experience?.title || "Niet zomaar Pilates. Re·Form Pilates.";
    const expDesc = content?.experience?.description || "Ontsnap aan de drukte. Dit is jouw moment. Geen schreeuwerige muziek, geen spiegels vol ego's. Alleen jij, de machine, en de weg naar een sterker, soepeler lichaam.";

    const ctaTitle = content?.cta?.title || "Start Jouw Transformatie";
    const ctaDesc = content?.cta?.description || "Ervaar het zelf. Boek een proefles of start direct met onze introductiedeal.";
    const btn1Text = content?.cta?.button1Text || "BEKIJK ROOSTER";
    const btn1Link = content?.cta?.button1Link || "/rooster";
    const btn2Text = content?.cta?.button2Text || "NEEM CONTACT OP";
    const btn2Link = content?.cta?.button2Link || "/contact";

    return (
        <div className="bg-[#F5F1E8] font-sans selection:bg-[#0d6452] selection:text-white">
            <main>
                {/* 1. Hero */}
                <ReformHero content={content?.hero} />

                {/* 2. "Nieuw in Baarn" Banner */}
                <ReformNewBadge content={content?.newBadge} />

                {/* 3. Wat is Reformer Pilates — Uitleg */}
                <ReformExplainer content={content?.explainer} />

                {/* 4. Voor Wie? — Doelgroepen */}
                <ReformAudience content={content?.audience} />

                {/* 5. Intro / Transition */}
                <section className="py-24 px-6 md:px-20 bg-[#082F26] text-center relative z-10 overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#0d6452] blur-[150px]" />
                    </div>

                    <div className="max-w-4xl mx-auto relative z-10">
                        <span className="text-[#0d6452] uppercase tracking-[0.3em] font-bold text-sm mb-6 block">
                            {expTag}
                        </span>
                        <h2 className="text-4xl md:text-7xl font-heading font-black text-[#F5F1E8] mb-8 leading-tight">
                            {expTitle}
                        </h2>
                        <p className="text-xl md:text-2xl text-[#F5F1E8]/60 leading-relaxed font-light max-w-2xl mx-auto">
                            {expDesc}
                        </p>
                    </div>
                </section>

                {/* 6. De Methode — 3 Stappen */}
                <ReformMethod content={content?.method} />

                {/* 7. USP's / Voordelen */}
                <ReformUSPs content={content?.usps} />

                {/* 8. Praktische Info */}
                <ReformPractical content={content?.practical} />

                {/* 9. CTA */}
                <section className="py-32 px-6 bg-[#082F26] text-[#F5F1E8] text-center relative overflow-hidden">
                    {/* Abstract background shape */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-[-50%] left-[-20%] w-[1000px] h-[1000px] rounded-full bg-[#0d6452] blur-[150px]" />
                        <div className="absolute bottom-[-50%] right-[-20%] w-[1000px] h-[1000px] rounded-full bg-[#0d6452] blur-[150px]" />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-6xl md:text-8xl font-heading font-black mb-8">
                            {ctaTitle}
                        </h2>
                        <p className="text-xl md:text-2xl text-[#F5F1E8]/70 mb-12 font-light max-w-2xl mx-auto">
                            {ctaDesc}
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                            <Link
                                to={btn1Link}
                                className="inline-flex items-center justify-center gap-3 bg-[#F5F1E8] text-[#082F26] hover:bg-white px-10 py-5 rounded-full font-bold transition-all text-lg tracking-wide hover:scale-105"
                            >
                                {btn1Text} <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to={btn2Link}
                                className="inline-flex items-center justify-center gap-3 border border-[#F5F1E8]/30 hover:bg-[#F5F1E8]/10 text-[#F5F1E8] px-10 py-5 rounded-full font-bold transition-all text-lg tracking-wide"
                            >
                                {btn2Text}
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
