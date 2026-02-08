import React, { useState } from 'react';
import {
    Search, Bell, ArrowRight, CalendarDays, Calendar, CalendarRange,
    MoreHorizontal, Bookmark, Zap, Eye, Dumbbell, ChevronRight, ChevronLeft,
    Users, Heart, Trophy, Timer
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Service Definitions
const SERVICES = [
    { id: 'all', label: 'Alle Sessies', icon: CalendarDays },
    { id: 'pt', label: 'Personal Training', icon: Dumbbell },
    { id: 'vitaliteit', label: 'Vitaliteit', icon: Heart },
    { id: 'hyrox', label: 'Hyrox', icon: Trophy },
    { id: 'pgt', label: 'Personal Group Training', icon: Users },
    { id: 'kickstart', label: '6-Weekse Kickstart', icon: Zap },
];

const WEEK_DAYS = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'];

// Helper to get the Monday of the current week
const getStartOfWeek = () => {
    const now = new Date();
    const day = now.getDay();
    const diff = now.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
    return new Date(now.setDate(diff));
};

const startOfWeek = getStartOfWeek();
const todayIndex = (new Date().getDay() + 6) % 7; // 0 = Monday, 6 = Sunday

// Mock Schedule Data
const SCHEDULE_DATA = {
    'Maandag': [
        { id: 1, time: '07:00 - 08:00', title: 'Hyrox Foundation', type: 'hyrox', trainer: 'Koen', status: 'available' },
        { id: 2, time: '09:00 - 10:00', title: 'Vitaliteit Check-in', type: 'vitaliteit', trainer: 'Sarah', status: 'full' },
        { id: 3, time: '19:00 - 20:00', title: 'Kickstart Group A', type: 'kickstart', trainer: 'Marcus', status: 'available' },
    ],
    'Dinsdag': [
        { id: 4, time: '08:00 - 09:00', title: '1-on-1 PT', type: 'pt', trainer: 'Koen', status: 'booked' },
        { id: 5, time: '18:30 - 19:30', title: 'Small Group Strength', type: 'pgt', trainer: 'Julian', status: 'available' },
    ],
    'Woensdag': [
        { id: 6, time: '07:00 - 08:00', title: 'Hyrox WOD', type: 'hyrox', trainer: 'Koen', status: 'available' },
        { id: 7, time: '10:00 - 11:00', title: 'Vitaliteit Coaching', type: 'vitaliteit', trainer: 'Sarah', status: 'available' },
    ],
    'Donderdag': [
        { id: 8, time: '19:00 - 20:00', title: 'Small Group HIIT', type: 'pgt', trainer: 'Julian', status: 'last_spots' },
        { id: 9, time: '20:00 - 21:00', title: 'Kickstart Group B', type: 'kickstart', trainer: 'Marcus', status: 'available' },
    ],
    'Vrijdag': [
        { id: 10, time: '07:00 - 08:00', title: 'Hyrox Endurance', type: 'hyrox', trainer: 'Koen', status: 'available' },
        { id: 11, time: '11:00 - 12:00', title: '1-on-1 PT', type: 'pt', trainer: 'Sarah', status: 'available' },
    ],
    'Zaterdag': [
        { id: 12, time: '09:00 - 10:30', title: 'Hyrox Simulation', type: 'hyrox', trainer: 'Koen', status: 'waitlist', isWeekend: true },
    ],
    'Zondag': [] // Closed
};

export default function SchedulePage() {
    const [view, setView] = useState('weekly');
    const [filter, setFilter] = useState('all');
    const [currentDayIndex, setCurrentDayIndex] = useState(todayIndex); // Initialize with actual today

    const handleNextDay = () => {
        setCurrentDayIndex((prev) => (prev + 1) % WEEK_DAYS.length);
    };

    const handlePrevDay = () => {
        setCurrentDayIndex((prev) => (prev - 1 + WEEK_DAYS.length) % WEEK_DAYS.length);
    };

    // Filter Logic
    const getFilteredSessions = (day) => {
        const sessions = SCHEDULE_DATA[day] || [];
        if (filter === 'all') return sessions;
        return sessions.filter(session => session.type === filter);
    };

    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen pb-20 pt-32">
            <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-10">
                {/* Dashboard Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-3 block">Fytaal Experience</span>
                        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-4 leading-none">
                            Studio <span className="text-transparent border-slate-900 border px-2 py-0 inline-block" style={{ WebkitTextStroke: '1px #0f172a' }}>Rooster</span>
                        </h1>
                        <p className="text-slate-500 text-lg max-w-xl font-light">
                            Filter op jouw voorkeur en plan direct je volgende sessie in.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center gap-2 h-fit self-end group">
                            <span>Boek Privé Sessie</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Filter & View Selector */}
                <div className="flex flex-col md:flex-row items-center justify-between border-y border-slate-200 py-6 mb-8 gap-6">
                    <div className="flex items-center gap-3 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto custom-scrollbar">
                        {SERVICES.map((service) => {
                            const Icon = service.icon;
                            const isActive = filter === service.id;
                            return (
                                <button
                                    key={service.id}
                                    onClick={() => setFilter(service.id)}
                                    className={`
                                        pl-4 pr-6 py-2.5 font-bold text-xs uppercase tracking-widest rounded-full whitespace-nowrap transition-all flex items-center gap-3 border
                                        ${isActive
                                            ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105'
                                            : 'bg-white border-slate-200 text-slate-500 hover:border-primary/30 hover:text-slate-700'}
                                    `}
                                >
                                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                                    {service.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* View Toggles */}
                    <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-sm shrink-0">
                        <button
                            onClick={() => setView('weekly')}
                            className={`px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all ${view === 'weekly' ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            <CalendarDays className="w-4 h-4" />
                            Week
                        </button>
                        <button
                            onClick={() => setView('daily')}
                            className={`px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all ${view === 'daily' ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            <Calendar className="w-4 h-4" />
                            Dag
                        </button>
                    </div>
                </div>

                {/* Schedule Grid Container */}
                <div className="overflow-x-auto custom-scrollbar pb-12">
                    <div className="min-w-[1400px]">
                        {/* Calendar Week Header */}
                        <div className={`grid mb-4 gap-4 ${view === 'weekly' ? 'grid-cols-7' : 'grid-cols-1 max-w-md mx-auto relative'}`}>
                            {view === 'daily' && (
                                <>
                                    <button
                                        onClick={handlePrevDay}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-100 rounded-full transition-colors"
                                    >
                                        <ChevronLeft className="w-5 h-5 text-slate-400" />
                                    </button>
                                    <button
                                        onClick={handleNextDay}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-100 rounded-full transition-colors"
                                    >
                                        <ChevronRight className="w-5 h-5 text-slate-400" />
                                    </button>
                                </>
                            )}

                            {WEEK_DAYS.map((day, i) => {
                                const isToday = i === todayIndex;
                                if (view === 'daily' && i !== currentDayIndex) return null;

                                // Calculate dynamic date
                                const date = new Date(startOfWeek);
                                date.setDate(startOfWeek.getDate() + i);
                                const dayNumber = date.getDate();

                                return (
                                    <div key={day} className={`flex flex-col items-center py-4 ${view === 'weekly' && i < 6 ? 'border-r border-slate-200' : ''} ${isToday ? 'bg-primary/5 rounded-t-xl' : ''} ${i > 4 ? 'opacity-70' : ''}`}>
                                        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-1 ${isToday ? 'text-primary' : 'text-slate-500'}`}>{day}</span>
                                        <span className={`text-3xl font-black ${isToday ? 'text-primary' : 'text-slate-900'}`}>{dayNumber}</span>
                                        {isToday && <div className="size-1.5 bg-primary rounded-full mt-2"></div>}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Grid Rows */}
                        <div className={`grid border-t border-slate-200 relative min-h-[600px] ${view === 'weekly' ? 'grid-cols-7' : 'grid-cols-1 max-w-md mx-auto'}`}>
                            {WEEK_DAYS.map((day, i) => {
                                const sessions = getFilteredSessions(day);
                                const isToday = i === todayIndex;
                                const isWeekend = i > 4;

                                if (view === 'daily' && i !== currentDayIndex) return null;

                                return (
                                    <div key={day} className={`flex flex-col gap-4 p-4 ${view === 'weekly' && i < 6 ? 'border-r border-slate-200' : ''} ${isToday ? 'bg-primary/[0.02]' : ''} ${isWeekend ? 'bg-slate-50/50' : ''} min-h-[600px] transition-colors duration-500`}>
                                        <AnimatePresence mode='popLayout'>
                                            {sessions.length > 0 ? (
                                                sessions.map((session) => (
                                                    <motion.div
                                                        key={session.id}
                                                        layout
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.9 }}
                                                        className={`
                                                            group border p-5 rounded-xl transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1
                                                            ${session.isWeekend ? 'bg-slate-900 text-white border-slate-800' : 'bg-white border-slate-200 hover:border-primary/50'}
                                                            ${session.status === 'booked' ? 'border-l-4 border-l-primary' : ''}
                                                        `}
                                                    >
                                                        <div className="flex justify-between items-start mb-4">
                                                            <span className={`text-[10px] font-bold uppercase tracking-widest ${session.isWeekend ? 'text-primary' : 'text-primary'}`}>
                                                                {session.time}
                                                            </span>
                                                            {/* Status Indicators */}
                                                            {session.status === 'booked' && (
                                                                <div className="px-2 py-0.5 bg-primary/10 text-primary text-[8px] font-black uppercase tracking-widest rounded">Geboekt</div>
                                                            )}
                                                            {session.status === 'full' && (
                                                                <span className="text-slate-500 text-[10px] font-bold uppercase">Vol</span>
                                                            )}
                                                            {session.status === 'last_spots' && (
                                                                <span className="text-amber-500 text-[10px] font-bold uppercase">Nog 2 Plekken</span>
                                                            )}
                                                            {session.status === 'waitlist' && (
                                                                <Bookmark className="w-4 h-4 text-slate-400" />
                                                            )}
                                                            {session.status === 'available' && (
                                                                <MoreHorizontal className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
                                                            )}
                                                        </div>

                                                        <h3 className="text-lg font-extrabold uppercase leading-tight mb-4">{session.title}</h3>

                                                        <div className="flex items-center gap-3">
                                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${session.isWeekend ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-500'}`}>
                                                                {session.trainer.charAt(0)}
                                                            </div>
                                                            <div>
                                                                <p className={`text-[10px] font-bold uppercase tracking-widest ${session.isWeekend ? 'text-slate-500' : 'text-slate-400'}`}>Trainer</p>
                                                                <p className="text-xs font-bold uppercase">{session.trainer}</p>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))
                                            ) : (
                                                <div className="h-full flex flex-col items-center justify-center opacity-30 mt-10">
                                                    {isWeekend ? (
                                                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] rotate-90 whitespace-nowrap text-slate-400">Gesloten</p>
                                                    ) : (
                                                        <div className="text-center">
                                                            <div className="w-1 mx-auto h-8 bg-slate-300 mb-2 rounded-full"></div>
                                                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Leeg</span>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Footer Legend */}
                <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-slate-200 pt-8 gap-6">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="size-2 rounded-full bg-primary"></div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Jouw Boekingen</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="size-2 rounded-full bg-amber-500"></div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Bijna Vol</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="size-2 rounded-full border border-slate-600"></div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Wachtlijst</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="text-xs text-slate-500 font-medium">Vragen over het rooster?</p>
                        <a className="text-primary font-black uppercase text-xs tracking-widest hover:underline decoration-2 underline-offset-4 transition-all" href="/contact">Neem Contact Op</a>
                    </div>
                </div>
            </main>

        </div>
    );
}
