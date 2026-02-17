import { useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, LogOut, ArrowLeft } from 'lucide-react';
import { clsx } from 'clsx';

export default function AdminLayout() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await fetch('/api/adminAuth', { method: 'DELETE' }); // Typo fix: /api/auth -> /api/adminAuth if that's the file
        navigate('/baaslogin');
    };

    useEffect(() => {
        const checkAuth = async () => {
            // Bypass for local development if needed, but safer to check API
            if (window.location.hostname === 'localhost') return;

            try {
                const res = await fetch('/api/adminAuth');
                if (!res.ok) {
                    throw new Error('Not authenticated');
                }
            } catch (err) {
                console.log("Not authenticated, redirecting...");
                navigate('/baaslogin');
            }
        };
        checkAuth();
    }, [navigate]);

    const navItems = [
        { icon: LayoutDashboard, label: "Overzicht", path: "/admin" },
        { icon: FileText, label: "Home", path: "/admin/pages/home" },
        { icon: FileText, label: "Aanbod", path: "/admin/pages/aanbod" },
        { icon: FileText, label: "Reform", path: "/admin/pages/reform" },
        { icon: FileText, label: "Team", path: "/admin/pages/team" },
        { icon: FileText, label: "Aanpak", path: "/admin/pages/aanpak" },
        { icon: Settings, label: "Instellingen", path: "/admin/settings" },
    ];

    return (
        <div className="flex h-screen bg-slate-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
                <div className="p-6 border-b border-slate-100">
                    <Link to="/" className="flex items-center gap-2 mb-1">
                        <ArrowLeft className="w-4 h-4 text-slate-400" />
                        <span className="text-xs text-slate-400 font-medium hover:text-primary">Naar website</span>
                    </Link>
                    <h2 className="text-xl font-bold text-primary">Fytaal Admin</h2>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={clsx(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium",
                                location.pathname === item.path
                                    ? "bg-primary text-white"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-100">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full text-left text-red-500 hover:bg-red-50 rounded-xl transition-colors text-sm font-medium"
                    >
                        <LogOut className="w-5 h-5" />
                        Uitloggen
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                <Outlet />
            </main>
        </div>
    );
}
