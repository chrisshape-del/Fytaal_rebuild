import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BENEFITS = [
    {
        title: "Reform Your Body",
        description: "Bouw kracht, lengte en flexibiliteit. De Reformer machine biedt weerstand en ondersteuning voor een ongekende spiertonus.",
        img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&q=80",
        color: "#0d6452" // Fytaal Green
    },
    {
        title: "Reset Your Mind",
        description: "Geen afleiding. Alleen jij, je ademhaling en de beweging. Een uur volledige focus en mentale rust.",
        img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80",
        color: "#C6A87C" // Gold
    },
    {
        title: "Low Impact",
        description: "Veilig voor gewrichten, krachtig voor spieren. Perfect voor herstel, opbouw en duurzame fitheid.",
        img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
        color: "#082F26" // Dark Green
    },
    {
        title: "Small Group",
        description: "Exclusieve aandacht in groepen van max 8 personen. De energie van een groep, de precisie van Personal Training.",
        img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80",
        color: "#F5F7FA" // Platinum/White
    }
];

function BenefitCard({ data, index, progress }) {
    // Parallax and fade effects based on scroll progress
    return (
        <div className="h-screen w-full flex items-center justify-center sticky top-0 bg-transparent overflow-hidden">
            <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dimmer */}

            <img
                src={data.img}
                alt={data.title}
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-20 max-w-4xl px-6 text-center text-white">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-heading font-bold mb-6"
                >
                    {data.title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl font-serif max-w-2xl mx-auto leading-relaxed"
                >
                    {data.description}
                </motion.p>
            </div>
        </div>
    );
}

export default function ReformBenefits() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={containerRef} className="relative bg-neutral-900">
            {BENEFITS.map((benefit, i) => (
                <BenefitCard key={i} data={benefit} index={i} />
            ))}
        </section>
    );
}
