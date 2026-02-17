import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const defaultSteps = [
    {
        id: "01",
        title: "Flow & Herstel",
        description: "We beginnen met het losmaken van het lichaam. Vloeiende bewegingen op de reformer zorgen voor ruimte in je gewrichten en een rustige ademhaling.",
        image: "/reform-1.png"
    },
    {
        id: "02",
        title: "Core & Stabiliteit",
        description: "De basis van alles. We bouwen kracht op vanuit je kernspieren. Je leert je lichaam controleren en stabiliseren voor een sterke houding.",
        image: "/reform-2.png"
    },
    {
        id: "03",
        title: "Kracht & Performance",
        description: "We verhogen de weerstand. Dynamische en krachtige bewegingen dagen je spieren uit. Je bouwt aan een atletisch, sterk lichaam.",
        image: "/reform-3.png"
    }
];

export default function ReformMethod({ content }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const tag = content?.tag || "De Methode";
    const title = content?.title || "Jouw Transformatie";
    const steps = content?.steps || defaultSteps;

    return (
        <section ref={containerRef} className="relative bg-[#F5F1E8]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
                {/* Left: Content (Scrolls) */}
                <div className="w-full md:w-1/2 py-20 px-6 md:px-12 relative z-10 order-2 md:order-1">
                    <div className="mb-20">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm block mb-2">
                            {tag}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-heading font-black text-[#082F26]">
                            {title}
                        </h2>
                    </div>

                    <div className="flex flex-col gap-[40vh]">
                        {steps.map((step, index) => (
                            <StepContent key={step.id} step={step} index={index} />
                        ))}
                    </div>
                    <div className="h-[20vh]" />
                </div>

                {/* Right: Sticky Image Frame (Gallery Style) */}
                <div className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center order-1 md:order-2">
                    <div className="relative w-full max-w-xl aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50">
                        {steps.map((step, index) => (
                            <ImageSlide
                                key={step.id}
                                step={step}
                                index={index}
                                total={steps.length}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function StepContent({ step, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.8 }}
            className="min-h-[50vh] flex flex-col justify-center"
        >
            <span className="text-9xl font-heading font-black text-[#082F26]/5 absolute -z-10 -translate-x-10 -translate-y-10">
                {step.id}
            </span>
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-primary" />
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#082F26]">
                    {step.title}
                </h3>
            </div>

            <p className="text-xl text-[#082F26]/70 leading-relaxed max-w-md font-light">
                {step.description}
            </p>

            {/* Mobile Image Fallback */}
            <div className="md:hidden mt-8 rounded-2xl overflow-hidden aspect-video shadow-lg">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
            </div>
        </motion.div>
    );
}

function ImageSlide({ step, index, total, scrollYProgress }) {
    // Opacity logic for cross-fading images
    const opacity = useTransform(
        scrollYProgress,
        // Calculate transition points based on total steps
        [(index - 1) / total + 0.1, index / total],
        index === 0 ? [1, 1] : [0, 1]
    );

    return (
        <motion.div
            style={{ opacity: index === 0 ? 1 : opacity, zIndex: index }}
            className="absolute inset-0 w-full h-full bg-white"
        >
            <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover"
            />
        </motion.div>
    );
}
