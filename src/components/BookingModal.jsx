import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin } from 'lucide-react';

const VIRTUAGYM_SCRIPT_ID = 'virtuagym-guest-booking-widget-script';
const VIRTUAGYM_SCRIPT_SRC = 'https://static.virtuagym.com/vg-guest-booking-widget/dist/js/app.js';

function loadVirtuagymScript() {
    const existingScript = document.getElementById(VIRTUAGYM_SCRIPT_ID);

    if (existingScript) {
        if (existingScript.dataset.loaded === 'true') return Promise.resolve();
        return new Promise((resolve, reject) => {
            existingScript.addEventListener('load', resolve, { once: true });
            existingScript.addEventListener('error', reject, { once: true });
        });
    }

    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.id = VIRTUAGYM_SCRIPT_ID;
        script.src = VIRTUAGYM_SCRIPT_SRC;
        script.async = true;
        script.onload = () => {
            script.dataset.loaded = 'true';
            resolve();
        };
        script.onerror = reject;
        document.body.appendChild(script);
    });
}

export default function BookingModal({ isOpen, onClose }) {
    const [scriptState, setScriptState] = useState('idle');

    useEffect(() => {
        if (!isOpen) return;

        let cancelled = false;
        setScriptState('loading');

        loadVirtuagymScript()
            .then(() => {
                if (!cancelled) setScriptState('ready');
            })
            .catch(() => {
                if (!cancelled) setScriptState('error');
            });

        return () => {
            cancelled = true;
        };
    }, [isOpen]);

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
                        className="fixed inset-0 bg-[#082F26]/70 backdrop-blur-sm"
                        style={{ zIndex: 2147483646 }}
                    />

                    {/* Modal Container — centered */}
                    <div
                        className="fixed inset-0 flex items-center justify-center p-3 sm:p-4 pointer-events-none"
                        style={{ zIndex: 2147483647 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full max-w-3xl max-h-[92vh] bg-white rounded-[1.5rem] sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="booking-modal-title"
                        >
                            {/* Header */}
                            <div className="bg-[#082F26] text-[#F5F1E8] px-5 py-5 sm:px-8 sm:py-6 relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white text-[#082F26] shadow-lg hover:bg-[#F5F1E8] flex items-center justify-center transition-colors"
                                    aria-label="Sluiten"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="flex items-center gap-3 mb-3 pr-12">
                                    <div className="w-10 h-10 rounded-xl bg-[#0d6452] flex items-center justify-center">
                                        <Calendar className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h2 id="booking-modal-title" className="text-xl font-heading font-bold">Kennismakingsgesprek boeken</h2>
                                        <p className="text-sm text-[#F5F1E8]/60">Fytaal Baarn</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 text-sm text-[#F5F1E8]/70 mt-4">
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4 text-[#0d6452]" /> Gratis en vrijblijvend
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4 text-[#0d6452]" /> Op locatie
                                    </span>
                                </div>
                            </div>

                            {/* Virtuagym Embed */}
                            <div className="flex-1 overflow-auto bg-[#f7faf8] p-3 sm:p-5 min-h-[560px]">
                                {scriptState === 'loading' && (
                                    <div className="mb-3 rounded-2xl border border-primary/10 bg-white px-4 py-3 text-sm font-semibold text-slate-600">
                                        Boekingsmodule wordt geladen...
                                    </div>
                                )}

                                {scriptState === 'error' && (
                                    <div className="mb-3 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                                        De boekingsmodule kon niet geladen worden. Probeer het later opnieuw of neem contact op met Fytaal.
                                    </div>
                                )}

                                <div className="rounded-2xl bg-white p-2 sm:p-4 shadow-sm ring-1 ring-slate-100 min-h-[520px]">
                                    <vg-guest-booking
                                        widget-key="66793c55330d2f001bea06c1"
                                        club-id="17159"
                                        lang="nl"
                                        source=""
                                    />
                                </div>
                            </div>
                        </motion.div>
                        <button
                            onClick={onClose}
                            className="fixed right-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-black text-[#082F26] shadow-2xl ring-1 ring-black/10 pointer-events-auto hover:bg-[#F5F1E8] transition-colors"
                            style={{ zIndex: 2147483647 }}
                            aria-label="Sluiten"
                            type="button"
                        >
                            Sluiten ×
                        </button>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
