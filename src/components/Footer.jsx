import { Facebook, Instagram, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white/60 py-20 px-4 border-t border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="lg:col-span-1">
                        <span className="text-2xl font-bold text-white tracking-tight font-serif uppercase">FYTAAL</span>
                        <p className="mt-6 text-sm leading-relaxed">
                            Personal Training, Fysiotherapie & Vitaliteitstraining in het hart van Baarn.
                            Van klacht naar kracht.
                        </p>
                        <div className="flex gap-4 mt-8">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:scale-110"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:scale-110"><Instagram className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h5 className="text-white font-bold mb-6">Navigatie</h5>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/aanbod" className="hover:text-primary transition-colors">Aanbod</Link></li>
                            <li><Link to="/onze-aanpak" className="hover:text-primary transition-colors">Onze Aanpak</Link></li>
                            <li><Link to="/team" className="hover:text-primary transition-colors">Ons Team</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white font-bold mb-6">Contact</h5>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary" /> 06 20 63 68 08</li>
                            <li className="flex items-center gap-3 italic text-primary/80">info@fytaal.nl</li>
                            <li className="mt-4 text-white/80">
                                Amsterdamsestraatweg 21 <br />
                                3744 MA Baarn
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white font-bold mb-6">Openingstijden</h5>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Ma - Vr</span> <span>07:00 - 21:00</span></li>
                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Zaterdag</span> <span>08:00 - 13:00</span></li>
                            <li className="flex justify-between text-white/40"><span>Zondag</span> <span>Gesloten</span></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} Fytaal Baarn. Alle rechten voorbehouden.</p>
                    <div className="flex gap-8">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Voorwaarden</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
