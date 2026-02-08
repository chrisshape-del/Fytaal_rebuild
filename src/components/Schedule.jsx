import { motion } from 'framer-motion';
import { Clock, User, MapPin, Calendar, Filter } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const scheduleData = [
    {
        day: "Maandag",
        classes: [
            { time: "09:00", name: "Hyrox Foundation", trainer: "Koen", type: "Hyrox" },
            { time: "18:30", name: "Circuit Basic", trainer: "Doriene", type: "Circuit" },
            { time: "19:30", name: "Hyrox WOD", trainer: "Koen", type: "Hyrox" }
        ]
    },
    {
        day: "Dinsdag",
        classes: [
            { time: "07:00", name: "Morning Flow", trainer: "Sanne", type: "Yoga" },
            { time: "19:00", name: "Strength & Conditioning", trainer: "Jeroen", type: "Strength" },
            { time: "20:00", name: "Boks Fit", trainer: "Jeroen", type: "Cardio" }
        ]
    },
    {
        day: "Woensdag",
        classes: [
            { time: "09:00", name: "Mamma Fit", trainer: "Doriene", type: "Special" },
            { time: "18:30", name: "Hyrox Foundation", trainer: "Koen", type: "Hyrox" },
            { time: "19:30", name: "Circuit Plus", trainer: "Koen", type: "Circuit" }
        ]
    },
    {
        day: "Donderdag",
        classes: [
            { time: "18:30", name: "Bootcamp Outdoor", trainer: "Tim", type: "Outdoor" },
            { time: "19:30", name: "Power Yoga", trainer: "Sanne", type: "Yoga" }
        ]
    },
    {
        day: "Vrijdag",
        classes: [
            { time: "07:00", name: "Early Bird Circuit", trainer: "Doriene", type: "Circuit" },
            { time: "09:00", name: "Senior Fit", trainer: "Koen", type: "Special" },
            { time: "17:00", name: "Vrijdagmiddag Borrel Workout", trainer: "All", type: "Fun" }
        ]
    },
    {
        day: "Zaterdag",
        isWeekend: true,
        classes: [
            { time: "09:00", name: "Hyrox Simulation", trainer: "Koen", type: "Hyrox" },
            { time: "10:30", name: "Weekend Warrior", trainer: "Jeroen", type: "Circuit" }
        ]
    },
    {
        day: "Zondag",
        isWeekend: true,
        classes: [
            { time: "10:00", name: "Family Fit", trainer: "Doriene", type: "Special" }
        ]
    }
];

const filters = ["Alle", "Hyrox", "Circuit", "Strength", "Yoga"];

export default function Schedule() {
    const [activeFilter, setActiveFilter] = useState("Alle");

    return (
        <div className="w-full">
            {/* Filter Bar */}
            <div className="flex flex-wrap gap-3 mb-10">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={clsx(
                            "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border border-transparent",
                            activeFilter === filter
                                ? "bg-accent text-white shadow-lg shadow-accent/20"
                                : "bg-white border-slate-200 text-slate-600 hover:border-accent/50 hover:text-accent"
                        )}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Grid Layout - The Bento Week */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scheduleData.map((day, index) => (
                    <motion.div
                        key={day.day}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={clsx(
                            "relative overflow-hidden rounded-[2rem] border transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl",
                            day.isWeekend
                                ? "bg-primary-dark border-primary-dark text-white"
                                : "bg-white border-slate-100 text-slate-900"
                        )}
                    >
                        {/* Header */}
                        <div className={clsx(
                            "p-6 border-b",
                            day.isWeekend ? "border-white/10 bg-white/5" : "border-slate-100 bg-slate-50"
                        )}>
                            <h3 className={clsx(
                                "text-2xl font-heading font-bold flex items-center gap-3",
                                day.isWeekend ? "text-accent" : "text-primary-dark"
                            )}>
                                {day.day}
                            </h3>
                        </div>

                        {/* Classes List */}
                        <div className="p-6 space-y-4">
                            {day.classes.filter(c => activeFilter === "Alle" || c.type === activeFilter).length > 0 ? (
                                day.classes
                                    .filter(c => activeFilter === "Alle" || c.type === activeFilter)
                                    .map((session, i) => (
                                        <div key={i} className={clsx(
                                            "flex items-center gap-4 p-3 rounded-xl transition-colors",
                                            day.isWeekend ? "hover:bg-white/10" : "hover:bg-slate-50"
                                        )}>
                                            <div className={clsx(
                                                "w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shrink-0",
                                                day.isWeekend ? "bg-accent/20 text-accent" : "bg-primary/10 text-primary"
                                            )}>
                                                {session.time}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-bold truncate">{session.name}</h4>
                                                <div className={clsx(
                                                    "flex items-center gap-2 text-xs",
                                                    day.isWeekend ? "text-white/60" : "text-slate-500"
                                                )}>
                                                    <User className="w-3 h-3" /> {session.trainer}
                                                </div>
                                            </div>
                                            <div className={clsx(
                                                "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider",
                                                day.isWeekend ? "bg-white/10 text-white/80" : "bg-slate-100 text-slate-500"
                                            )}>
                                                {session.type}
                                            </div>
                                        </div>
                                    ))
                            ) : (
                                <div className="py-8 text-center opacity-50 italic">
                                    Geen {activeFilter} lessen
                                </div>
                            )}
                        </div>

                        {/* Decorative Gradient for Weekend Cards */}
                        {day.isWeekend && (
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Bottom Note */}
            <div className="mt-12 p-6 bg-accent/10 rounded-2xl flex items-start gap-4 mx-auto max-w-3xl">
                <Calendar className="w-6 h-6 text-accent shrink-0 mt-1" />
                <p className="text-primary-dark font-medium leading-relaxed">
                    * Dit is een indicatief rooster. Check altijd de <span className="font-bold underline cursor-pointer">Fytaal App</span> voor de actuele tijden en het reserveren van je plek.
                </p>
            </div>
        </div>
    );
}
