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
    const ctaTitle = content?.cta?.title || "Opening & Try-out pakketten";
    const ctaDesc = content?.cta?.description || "In april openen we officieel de deuren van Re:form.\nVoor de opening kun je je al inschrijven voor:\n\n🎉 Try-out pakketten\n🎉 Kennismakingslessen\n🎉 Early bird memberships\n\n👉 Houd onze socials en website in de gaten of schrijf je in voor de wachtlijst.";
    const btn1Text = content?.cta?.button1Text || "Contact / Wachtlijst";
    const btn1Link = content?.cta?.button1Link || "/contact";
    const btn2Text = content?.cta?.button2Text || "Instagram";
    const btn2Link = content?.cta?.button2Link || "https://instagram.com/fytaal";

    return (
        <div className="bg-[#F5F1E8] font-sans selection:bg-[#0d6452] selection:text-white">
            <main>
                {/* 1. Hero */}
                <ReformHero content={content?.hero} />

                {/* 3. Wat is Reformer Pilates — Uitleg */}
                <ReformExplainer content={content?.explainer} />

                {/* 4. Voor Wie? — Doelgroepen */}
                <ReformAudience content={content?.audience} />

                {/* 6. De Methode — 3 Stappen */}
                <ReformMethod content={content?.method} />

                {/* 7. USP's / Voordelen */}
                <ReformUSPs content={content?.usps} />

                {/* 9. CTA */}
                <section className="py-32 px-6 bg-[#F5F1E8] text-[#082F26] text-center relative overflow-hidden">
                    {/* Abstract background shape */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                        <div className="absolute top-[-50%] left-[-20%] w-[1000px] h-[1000px] rounded-full bg-[#0d6452] blur-[150px]" />
                        <div className="absolute bottom-[-50%] right-[-20%] w-[1000px] h-[1000px] rounded-full bg-[#0d6452] blur-[150px]" />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-6xl md:text-8xl font-heading font-black mb-8 text-[#082F26]">
                            {ctaTitle}
                        </h2>
                        <p className="text-xl md:text-2xl text-[#082F26]/70 mb-12 font-light max-w-2xl mx-auto whitespace-pre-line">
                            {ctaDesc}
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                            <Link
                                to={btn1Link}
                                className="inline-flex items-center justify-center gap-3 bg-[#082F26] text-[#F5F1E8] hover:bg-[#0d6452] px-10 py-5 rounded-full font-bold transition-all text-lg tracking-wide hover:scale-105"
                            >
                                {btn1Text} <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to={btn2Link}
                                className="inline-flex items-center justify-center gap-3 border border-[#082F26]/30 hover:bg-[#082F26]/10 text-[#082F26] px-10 py-5 rounded-full font-bold transition-all text-lg tracking-wide"
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
