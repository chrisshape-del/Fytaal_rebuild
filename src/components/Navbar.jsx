import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import { clsx } from 'clsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import BookingModal from './BookingModal';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isAanbodOpen, setIsAanbodOpen] = useState(false);

    const aanbodItems = [
        { name: "Fysiotherapie", path: "/aanbod/fysiotherapie" },
        { name: "Personal Training", path: "/aanbod/personal-training" },
        { name: "Vitaliteit", path: "/aanbod/vitaliteit" },
        { name: "Hyrox", path: "/aanbod/hyrox" },
        { name: "Personal Group Training", path: "/aanbod/personal-group-training" },
        { name: "6-Weekse Kickstart", path: "/aanbod/kickstart" },
        { name: "Rooster", path: "/rooster" },
    ];

    // Dynamic styles based on scroll
    const width = useTransform(scrollY, [0, 100], ["90%", "80%"]);
    const top = useTransform(scrollY, [0, 100], ["24px", "16px"]);
    const backdropBlur = useTransform(scrollY, [0, 100], ["blur(12px)", "blur(20px)"]);
    const bgOpacity = useTransform(scrollY, [0, 100], [0.7, 0.9]);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
        return () => unsubscribe();
    }, [scrollY]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileOpen]);

    const closeMobile = () => {
        setIsMobileOpen(false);
        setIsAanbodOpen(false);
    };

    return (
        <>
            {/* Desktop Floating Island */}
            <motion.nav
                style={{
                    width,
                    top,
                    backdropFilter: backdropBlur,
                    backgroundColor: `rgba(255, 255, 255, ${isScrolled ? 0.9 : 0.7})`
                }}
                className="fixed left-1/2 -translate-x-1/2 z-50 rounded-full border border-white/20 shadow-xl hidden md:flex items-center justify-between px-8 py-4 transition-all duration-500"
            >
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-2 group shrink-0">
                    <img
                        src="/Fytaal-Logo-pakket_01-04-e1620634541526-300x300.webp"
                        alt="Fytaal Logo"
                        className="w-16 h-16 object-contain transition-transform group-hover:rotate-12"
                    />
                </Link>

                {/* Center Navigation Links */}
                <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
                    <NavLink to="/" className={({ isActive }) => clsx("hover:text-primary transition-colors relative", isActive && "text-primary font-bold")}>
                        {({ isActive }) => (
                            <>
                                Home
                                {isActive && <motion.div layoutId="nav-pill" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />}
                            </>
                        )}
                    </NavLink>

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <Link to="/aanbod" className="flex items-center gap-1 hover:text-primary transition-colors py-2">
                            Aanbod
                        </Link>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-2">
                            {aanbodItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="block py-2 px-4 rounded-xl hover:bg-slate-50 hover:text-primary transition-colors text-sm"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <NavLink to="/reform" className={({ isActive }) => clsx("hover:text-primary transition-colors relative flex items-center gap-1.5", isActive && "text-primary font-bold")}>
                        {({ isActive }) => (
                            <>
                                Re·Form
                                <span className="text-[9px] bg-accent text-white px-1.5 py-0.5 rounded-full font-bold tracking-wider leading-none">NEW</span>
                                {isActive && <motion.div layoutId="nav-pill" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />}
                            </>
                        )}
                    </NavLink>

                    <NavLink to="/onze-aanpak" className={({ isActive }) => clsx("hover:text-primary transition-colors relative", isActive && "text-primary font-bold")}>
                        {({ isActive }) => (
                            <>
                                Onze Aanpak
                                {isActive && <motion.div layoutId="nav-pill" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />}
                            </>
                        )}
                    </NavLink>

                    <NavLink to="/team" className={({ isActive }) => clsx("hover:text-primary transition-colors relative", isActive && "text-primary font-bold")}>
                        {({ isActive }) => (
                            <>
                                Ons Team
                                {isActive && <motion.div layoutId="nav-pill" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />}
                            </>
                        )}
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) => clsx("hover:text-primary transition-colors relative", isActive && "text-primary font-bold")}>
                        {({ isActive }) => (
                            <>
                                Contact
                                {isActive && <motion.div layoutId="nav-pill" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />}
                            </>
                        )}
                    </NavLink>
                </div>

                {/* CTA Button */}
                <button
                    onClick={() => setIsBookingOpen(true)}
                    className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 flex items-center gap-2 hover:scale-105 active:scale-95 shrink-0 text-sm font-bold"
                >
                    Boek een kennismakingsgesprek <MoveRight className="w-4 h-4" />
                </button>
            </motion.nav>

            {/* Mobile Nav Bar */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md p-4 flex justify-between items-center border-b border-slate-100">
                <Link to="/" className="flex items-center gap-2" onClick={closeMobile}>
                    <img src="/Fytaal-Logo-pakket_01-04-e1620634541526-300x300.webp" alt="Fytaal Logo" className="w-16 h-16 object-contain" />
                </Link>
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="p-2 text-slate-800 relative z-50"
                    aria-label={isMobileOpen ? "Sluit menu" : "Open menu"}
                    aria-expanded={isMobileOpen}
                >
                    <svg className="w-6 h-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMobileOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={false}
                animate={isMobileOpen ? { opacity: 1, visibility: "visible" } : { opacity: 0, visibility: "hidden" }}
                transition={{ duration: 0.2 }}
                className="md:hidden fixed inset-0 bg-black/30 z-40"
                onClick={closeMobile}
            />

            {/* Mobile Menu Panel */}
            <motion.div
                initial={false}
                animate={isMobileOpen ? { x: 0 } : { x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="md:hidden fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-40 bg-white shadow-2xl flex flex-col pt-24 overflow-y-auto"
            >
                <nav className="flex flex-col px-6 gap-1">
                    <NavLink
                        to="/"
                        end
                        onClick={closeMobile}
                        className={({ isActive }) => clsx(
                            "py-3 px-4 rounded-xl text-base font-medium transition-colors",
                            isActive ? "bg-primary/10 text-primary font-bold" : "text-slate-700 hover:bg-slate-50"
                        )}
                    >
                        Home
                    </NavLink>

                    {/* Aanbod with expandable sub-items */}
                    <div>
                        <button
                            onClick={() => setIsAanbodOpen(!isAanbodOpen)}
                            className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                            Aanbod
                            <svg
                                className={clsx("w-4 h-4 transition-transform duration-200", isAanbodOpen && "rotate-180")}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <motion.div
                            initial={false}
                            animate={isAanbodOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                        >
                            <div className="pl-4 flex flex-col gap-0.5 pb-1">
                                <Link
                                    to="/aanbod"
                                    onClick={closeMobile}
                                    className="py-2.5 px-4 rounded-lg text-sm text-slate-500 hover:bg-slate-50 hover:text-primary transition-colors font-medium"
                                >
                                    Overzicht
                                </Link>
                                {aanbodItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={closeMobile}
                                        className="py-2.5 px-4 rounded-lg text-sm text-slate-500 hover:bg-slate-50 hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <NavLink
                        to="/reform"
                        onClick={closeMobile}
                        className={({ isActive }) => clsx(
                            "py-3 px-4 rounded-xl text-base font-medium transition-colors flex items-center gap-2",
                            isActive ? "bg-primary/10 text-primary font-bold" : "text-slate-700 hover:bg-slate-50"
                        )}
                    >
                        Re·Form
                        <span className="text-[9px] bg-accent text-white px-1.5 py-0.5 rounded-full font-bold tracking-wider leading-none">NEW</span>
                    </NavLink>

                    <NavLink
                        to="/onze-aanpak"
                        onClick={closeMobile}
                        className={({ isActive }) => clsx(
                            "py-3 px-4 rounded-xl text-base font-medium transition-colors",
                            isActive ? "bg-primary/10 text-primary font-bold" : "text-slate-700 hover:bg-slate-50"
                        )}
                    >
                        Onze Aanpak
                    </NavLink>

                    <NavLink
                        to="/team"
                        onClick={closeMobile}
                        className={({ isActive }) => clsx(
                            "py-3 px-4 rounded-xl text-base font-medium transition-colors",
                            isActive ? "bg-primary/10 text-primary font-bold" : "text-slate-700 hover:bg-slate-50"
                        )}
                    >
                        Ons Team
                    </NavLink>

                    <NavLink
                        to="/contact"
                        onClick={closeMobile}
                        className={({ isActive }) => clsx(
                            "py-3 px-4 rounded-xl text-base font-medium transition-colors",
                            isActive ? "bg-primary/10 text-primary font-bold" : "text-slate-700 hover:bg-slate-50"
                        )}
                    >
                        Contact
                    </NavLink>
                </nav>

                {/* Mobile CTA */}
                <div className="mt-auto p-6 border-t border-slate-100">
                    <button
                        onClick={() => { closeMobile(); setIsBookingOpen(true); }}
                        className="w-full bg-primary text-white py-3.5 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 font-bold text-sm"
                    >
                        Boek een kennismakingsgesprek <MoveRight className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>

            {/* Booking Modal */}
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </>
    );
}
