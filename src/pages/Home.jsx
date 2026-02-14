import { MoveRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import VideoHero from '../components/VideoHero';
import Recognition from '../components/Recognition';
import BentoGrid from '../components/BentoGrid';
import Timeline from '../components/Timeline';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useContent } from '../hooks/useContent';

function FullWidthPhotoCTA({ content }) {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const {
        heading = "Start Vandaag Nog!",
        text = "Benieuwd wat wij voor jou kunnen betekenen?\nVraag nu een gratis kennismakingsgesprek aan.",
        ctaText = "AFSPRAAK MAKEN",
        ctaLink = "/contact"
    } = content || {};

    const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={sectionRef} className="relative h-[600px] overflow-hidden bg-slate-900">
            {/* Dynamic Mesh Gradient Background (Option 1) */}
            <div
                className="absolute inset-0 animate-gradient opacity-60"
                style={{
                    background:
                        'radial-gradient(at 0% 0%, #0d6452 0%, transparent 50%), radial-gradient(at 100% 0%, #082F26 0%, transparent 50%), radial-gradient(at 100% 100%, #0d6452 0%, transparent 50%), radial-gradient(at 0% 100%, #082F26 0%, transparent 50%), #0F172A',
                    backgroundSize: '200% 200%',
                }}
            />

            {/* Subtle Teal Gradient Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />

            {/* Centered Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.0, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl"
                >
                    <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
                        {heading}
                    </h2>

                    <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed whitespace-pre-line">
                        {text}
                    </p>

                    <Link
                        to={ctaLink}
                        className="inline-flex items-center gap-3 bg-primary text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-[#0a5243] hover:shadow-[0_0_40px_rgba(13,100,82,0.6)] transition-all duration-300 shadow-2xl"
                    >
                        {ctaText}
                        <MoveRight className="w-6 h-6" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default function Home() {
    const { content, loading } = useContent('home');

    if (loading) return null; // Or a loading spinner

    return (
        <>
            {/* HERO */}
            <VideoHero content={content?.hero} />


            {/* SECTIE 1: Split-Screen met Diagonal Cut */}
            <Reveal width="100%">
                <Recognition />
            </Reveal>

            {/* SECTIE 2: Photo Grid met Hover Reveals */}
            <Reveal width="100%" delay={0.2}>
                <BentoGrid />
            </Reveal>

            {/* SECTIE 3: Horizontal Scroll Journey */}
            <Reveal width="100%" delay={0.1}>
                <Timeline />
            </Reveal>

            {/* SECTIE 4: Trainer Carousel */}
            <Reveal width="100%" delay={0.2}>
                <Testimonials />
            </Reveal>

            {/* SECTIE 5: Full-Width Photo CTA */}
            <FullWidthPhotoCTA content={content?.cta} />
        </>
    );
}
