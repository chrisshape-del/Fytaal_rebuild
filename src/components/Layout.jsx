import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout() {
    const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col font-sans text-slate-800">
            <Navbar />

            {/* Background Elements (Global) */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Subtle Grain Overlay */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                {/* Organic Gradient Blob 1 */}
                <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[100px] animate-pulse-slow"></div>

                {/* Organic Gradient Blob 2 */}
                <div className="absolute top-[40%] -left-[10%] w-[40vw] h-[40vw] bg-primary-dark/5 rounded-full blur-[120px] animate-pulse-slower"></div>
            </div>

            {/* Main Content Area */}
            {/* AnimatePresence for smooth route transitions */}
            <div className="flex-grow z-10 relative pt-20">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </div>

            <Footer />
        </div>
    );
}
