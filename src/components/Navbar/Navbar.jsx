'use client';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            {/* MAIN NAVBAR */}
            <nav className="fixed inset-x-0 top-0 z-50 pointer-events-none">
                <div className="mx-auto max-w-[100rem] px-6 lg:px-8 relative flex items-center justify-between h-24">

                    {/* LOGO */}
                    <div
                        className={`pointer-events-auto transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-16' : 'opacity-100'
                            }`}
                    >
                        <Link to="/" className="flex items-center gap-1 hover:scale-105 transition">
                            <span className="font-black text-3xl md:text-4xl text-white">
                                STRAT <span className="text-orange-500">BRIDGE</span>
                            </span>
                        </Link>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-4 pointer-events-auto">
                        <Link
                            to="/contact-us"
                            className={`hidden lg:inline-flex rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-8 py-3 text-white font-bold transition ${isScrolled ? 'opacity-0 translate-x-20' : 'opacity-100'
                                }`}
                        >
                            Contact Us
                        </Link>

                        {/* MENU BUTTON */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`w-14 h-14 rounded-full shadow-xl transition ${isScrolled
                                ? 'bg-white border-2 border-orange-500'
                                : 'bg-gradient-to-r from-red-600 to-orange-500'
                                }`}
                        >
                            <div className="relative w-5 h-5 mx-auto grid grid-cols-2 gap-1">
                                {[...Array(4)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`block w-2 h-2 rounded-full ${isScrolled ? 'bg-orange-500' : 'bg-white'
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
                className={`fixed inset-y-0 right-0 z-50 w-80 md:w-96 transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" />

                <div className="relative h-full flex flex-col">
                    <div className="flex items-center justify-between p-8 border-b">
                        <h2 className="text-2xl font-bold">
                            STRAT <span className="text-orange-500">BRIDGE</span>
                        </h2>
                        <button onClick={closeMenu} className="p-3 rounded-xl bg-black/10">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <nav className="flex-1 flex flex-col justify-center px-12 space-y-8">
                        <Link to="/services/business-consulting" onClick={closeMenu} className="text-3xl font-semibold hover:text-orange-600">
                            Business Consulting
                        </Link>

                        <Link to="/services/legal-service" onClick={closeMenu} className="text-3xl font-semibold hover:text-orange-600">
                            Legal Support
                        </Link>

                        <Link to="/services/strategic-insights" onClick={closeMenu} className="text-3xl font-semibold hover:text-orange-600">
                            Strategic Insights
                        </Link>

                        {/* ✅ UPDATED */}
                        <Link to="/services/startup-support" onClick={closeMenu} className="text-3xl font-semibold hover:text-orange-600">
                            Startup Support
                        </Link>

                        <Link to="/contact-us" onClick={closeMenu} className="text-3xl font-bold text-orange-600">
                            Contact Us
                        </Link>
                    </nav>

                    <div className="p-8 border-t text-center text-sm text-gray-500">
                        © 2025 Invest in Nepal
                    </div>
                </div>
            </div>

            {isOpen && <div className="fixed inset-0 bg-black/40 z-40" onClick={closeMenu} />}
        </>
    );
}
