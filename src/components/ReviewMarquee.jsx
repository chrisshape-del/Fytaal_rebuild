import React, { useState } from 'react';
import { Star, X, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReviewMarquee({ reviews = [] }) {
    const [selectedReview, setSelectedReview] = useState(null);

    // Filter out "Local Guide" as per user request
    const validReviews = reviews.filter(r =>
        r.name && !r.name.toLowerCase().includes('local guide')
    );

    if (validReviews.length === 0) return null;

    return (
        <div className="w-full py-20 overflow-hidden bg-white relative">

            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="group flex overflow-hidden">
                <div className="flex gap-8 animate-marquee group-hover:[animation-play-state:paused] w-max px-4">
                    {/* Triple duplication ensures smooth looping even on wide screens */}
                    {[...validReviews, ...validReviews, ...validReviews].map((review, index) => (
                        <ReviewCard
                            key={`${review.name}-${index}`}
                            review={review}
                            onClick={() => setSelectedReview(review)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedReview && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedReview(null)}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white p-8 md:p-12 max-w-2xl w-full relative shadow-2xl rounded-[3rem] overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedReview(null)}
                                className="absolute top-8 right-8 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <Quote className="absolute -top-10 -left-10 w-40 h-40 text-slate-50 -z-10 opacity-50" />

                            <div className="flex text-amber-500 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={24} className="fill-current" />
                                ))}
                            </div>

                            <div className="flex justify-between items-baseline mb-6 border-b border-slate-100 pb-4">
                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                                    {selectedReview.name}
                                </h3>
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                                    {selectedReview.date || 'Review'}
                                </span>
                            </div>

                            <p className="text-xl text-slate-600 leading-relaxed italic font-medium">
                                "{selectedReview.text}"
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); } /* Move by 1/3 since we have 3 sets */
                }
                .animate-marquee {
                    animation: marquee 120s linear infinite; /* Slower 120s loop */
                }
            `}</style>
        </div>
    );
}

function ReviewCard({ review, onClick }) {
    return (
        <div
            onClick={onClick}
            className="w-[350px] md:w-[450px] flex-shrink-0 bg-neutral-50/50 p-8 rounded-[2rem] border border-slate-50 relative group cursor-pointer hover:bg-white hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
        >
            <Quote className="absolute top-8 right-8 w-10 h-10 text-slate-100 group-hover:text-[#082F26]/5 transition-colors" />

            <div className="flex text-amber-500 mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                ))}
            </div>

            <p className="text-slate-600 mb-8 italic leading-relaxed text-lg line-clamp-4">
                "{review.text}"
            </p>

            <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                <span className="font-black text-slate-900 text-base uppercase tracking-tight">
                    {review.name}
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {review.date}
                </span>
            </div>
        </div>
    );
}
