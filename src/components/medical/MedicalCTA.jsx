import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Mail, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MedicalCTA() {
    return (
        <section className="py-24 px-6 bg-[#F5F1E8]">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-heading font-black text-[#082F26] mb-6"
                >
                    Klaar om verantwoord terug in beweging te komen?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-[#082F26]/70 mb-12"
                >
                    Kies de volgende stap die bij jou past.
                </motion.p>

                <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            to="/contact"
                            className="w-full md:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:bg-[#0a4d3f] transition-all duration-300"
                        >
                            <Calendar className="w-5 h-5" />
                            Plan je intake
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            to="/contact"
                            className="w-full md:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:bg-[#0a4d3f] transition-all duration-300"
                        >
                            <ArrowRight className="w-5 h-5" />
                            Start met Medical Training
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <a
                            href="https://mavisio.nl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:bg-[#0a4d3f] transition-all duration-300"
                        >
                            <Stethoscope className="w-5 h-5" />
                            In contact met MA Visio
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link
                            to="/contact"
                            className="w-full md:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:bg-[#0a4d3f] transition-all duration-300"
                        >
                            <Mail className="w-5 h-5" />
                            Meer weten?
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
