'use client';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showBanner, setShowBanner] = useState(true);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            {/* UNDER CONSTRUCTION BANNER */}
            {showBanner && (
                <div className="fixed inset-x-0 top-0 z-[70] flex items-center justify-center bg-orange-600 text-white font-semibold py-3 px-6 shadow-lg">
                    <span className="text-sm md:text-base text-center">
                        ⚠️ This website is currently under construction
                    </span>
                    <button
                        onClick={() => setShowBanner(false)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            )}

            {/* MAIN NAVBAR */}
            <nav
                className="fixed inset-x-0 z-50 transition-all duration-300"
                style={{ top: showBanner ? '48px' : '0' }}
            >
                <div className="mx-auto max-w-[100rem] px-6 lg:px-8 flex items-center justify-between h-24">

                    {/* LOGO */}
                    <Link
                        to="/"
                        className={`transition-all duration-500 transform ${isScrolled ? 'opacity-0 -translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'
                            }`}
                    >
                        <div className="flex items-center space-x-3 font-black text-3xl md:text-4xl">
                            {/* The Brand Name */}
                            <div>
                                {/* <span className="text-white">STRAT</span> */}
                                <span className="text-orange-500">STRATBRIDGE</span>
                            </div>

                            {/* The Tagline/Secondary Word */}
                            <span className="text-white">PARTNERS</span>
                        </div>
                    </Link>

                    {/* ACTIONS CONTAINER */}
                    <div className="flex items-center gap-4">
                        {/* CONTACT US BUTTON - Fixed visibility logic */}
                        <Link
                            to="/contact-us"
                            className={`hidden lg:inline-flex rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-8 py-3 text-white font-bold transition-all duration-500 transform ${isScrolled
                                ? 'opacity-0 translate-x-10 pointer-events-none invisible'
                                : 'opacity-100 translate-x-0 visible'
                                }`}
                        >
                            Contact Us
                        </Link>

                        {/* MENU BUTTON - High Z-index to ensure it captures clicks */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`relative z-[60] w-14 h-14 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center ${isScrolled
                                ? 'bg-white border-2 border-orange-500'
                                : 'bg-gradient-to-r from-red-600 to-orange-500'
                                }`}
                        >
                            <div className="w-5 h-5 grid grid-cols-2 gap-1">
                                {[...Array(4)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`block w-2 h-2 rounded-full transition-colors ${isScrolled ? 'bg-orange-500' : 'bg-white'
                                            }`}
                                    />
                                ))}
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* SIDE MENU */}
            <div
                className={`fixed inset-y-0 right-0 z-[100] w-80 md:w-96 transform transition-transform duration-500 ease-in-out bg-white shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ top: showBanner ? '48px' : '0', height: showBanner ? 'calc(100% - 48px)' : '100%' }}
            >
                <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between p-8 border-b">
                        <h2 className="text-2xl font-black italic">
                            STRAT <span className="text-orange-500">BRIDGE</span>
                        </h2>
                        <button onClick={closeMenu} className="p-3 rounded-xl bg-slate-100 hover:bg-orange-100 transition-colors text-slate-900">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <nav className="flex-1 flex flex-col justify-center px-10 space-y-6">
                        {[
                            { name: "Investment & Market Entry", path: "/services/business-consulting" },
                            { name: "Legal & Regulatory ", path: "/services/legal-service" },
                            { name: "Strategy & Policy ", path: "/services/policy" },
                            { name: "Startup & Ventures", path: "/services/startup-support" },
                            { name: "Insights", path: "/services/strategic-insights" }
                        ].map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={closeMenu}
                                className="text-2xl font-bold text-slate-900 hover:text-orange-600 transition-colors border-b border-transparent hover:border-orange-200 pb-2"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            to="/contact-us"
                            onClick={closeMenu}
                            className="text-2xl font-black text-orange-600 pt-4"
                        >
                            Contact Us →
                        </Link>
                    </nav>

                    <div className="p-8 border-t text-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                        © 2025 Strat Bridge | Policy & Strategy
                    </div>
                </div>
            </div>

            {/* OVERLAY */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[90]"
                    onClick={closeMenu}
                    style={{ top: showBanner ? '48px' : '0' }}
                />
            )}
        </>
    );
}