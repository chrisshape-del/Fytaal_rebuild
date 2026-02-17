import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin } from 'lucide-react';

/**
 * BookingModal — Cal.com kennismakingsgesprek embed
 *
 * Setup stappen:
 * 1. Maak een Cal.com account aan op https://cal.com
 * 2. Maak een "Kennismakingsgesprek" event van 30 min
 * 3. Vervang CAL_LINK hieronder met jouw Cal.com link
 * 4. Koppel je agenda (Google/Outlook) in Cal.com settings
 */

const CAL_LINK = 'https://cal.com'; // TODO: Vervang met jouw Cal.com link, bijv. 'https://cal.com/fytaal/kennismaking'

export default function BookingModal({ isOpen, onClose }) {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-[#082F26]/60 backdrop-blur-sm"
                    />

                    {/* Modal Container — centered */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
                        >
                            {/* Header */}
                            <div className="bg-[#082F26] text-[#F5F1E8] px-8 py-6 relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                    aria-label="Sluiten"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#0d6452] flex items-center justify-center">
                                        <Calendar className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-heading font-bold">Kennismakingsgesprek</h2>
                                        <p className="text-sm text-[#F5F1E8]/60">Fytaal Baarn</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 text-sm text-[#F5F1E8]/70 mt-4">
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4 text-[#0d6452]" /> 30 minuten
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4 text-[#0d6452]" /> Op locatie
                                    </span>
                                </div>
                            </div>

                            {/* Cal.com Embed */}
                            <div className="flex-1 overflow-auto">
                                <iframe
                                    src={`${CAL_LINK}?embed=true&theme=light&layout=month_view`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        minHeight: '500px',
                                        border: 'none',
                                    }}
                                    title="Boek een kennismakingsgesprek bij Fytaal"
                                    allow="payment"
                                />
                            </div>

                            {/* Footer */}
                            <div className="px-8 py-4 border-t border-slate-100 text-center">
                                <p className="text-xs text-slate-400">
                                    Powered by Cal.com · Je gegevens worden veilig verwerkt
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
