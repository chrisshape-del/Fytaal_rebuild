import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import { clsx } from 'clsx';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

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
                        className="w-8 h-8 object-contain transition-transform group-hover:rotate-12"
                    />
                    <img
                        src="/fytaal-text-logo.png"
                        alt="Fytaal"
                        className="h-8 object-contain"
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
                            {[
                                { name: "Fysiotherapie", path: "/aanbod/fysiotherapie" },
                                { name: "Personal Training", path: "/aanbod/personal-training" },
                                { name: "Vitaliteit", path: "/aanbod/vitaliteit" },
                                { name: "Hyrox", path: "/aanbod/hyrox" },
                                { name: "Personal Group Training", path: "/aanbod/personal-group-training" },
                                { name: "6-Weekse Kickstart", path: "/aanbod/kickstart" },
                                { name: "Rooster", path: "/rooster" },
                            ].map((item) => (
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
                <Link
                    to="/contact"
                    className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 flex items-center gap-2 hover:scale-105 active:scale-95 shrink-0 text-sm font-bold"
                >
                    Kennismaken <MoveRight className="w-4 h-4" />
                </Link>
            </motion.nav>

            {/* Mobile Nav (Simplified for now - fits 'Standard' requirement, but styled to match) */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md p-4 flex justify-between items-center border-b border-slate-100">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/Fytaal-Logo-pakket_01-04-e1620634541526-300x300.webp" alt="Fytaal Logo" className="w-8 h-8 object-contain" />
                    <img src="/fytaal-text-logo.png" alt="Fytaal" className="h-6 object-contain" />
                </Link>
                <button className="p-2 text-slate-800">
                    <span className="sr-only">Menu</span>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                </button>
            </div>
        </>
    );
}
