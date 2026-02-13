'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Added Menu icon for mobile
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        // Prevent scrolling when menu is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    const SingleStrokeScribble = ({ isSmall = false }) => (
        <motion.div
            className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <svg
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
                className={`${isSmall ? 'w-[160%] h-[190%]' : 'w-[140%] h-[160%]'} overflow-visible`}
            >
                <defs>
                    <filter id="pencil-grit">
                        <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
                    </filter>
                </defs>
                <g filter="url(#pencil-grit)" fill="none" stroke="#2D5A43" strokeLinecap="round">
                    <motion.path
                        d="M5,20 C5,5 95,5 95,20 C95,35 5,35 5,22"
                        strokeWidth={isSmall ? "1.8" : "1.4"}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                </g>
            </svg>
        </motion.div>
    );

    const serviceItems = [
        { name: "Investment", id: "01", path: "/services/business-consulting" },
        { name: "Legal Advisory", id: "02", path: "/services/legal-service" },
        { name: "Public Policy", id: "03", path: "/services/policy" },
        { name: "Venture Capital", id: "04", path: "/services/startup-support" },
        { name: "Strategic Insights", id: "05", path: "/services/strategic-insights" }
    ];

    return (
        <>
            <nav className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 bg-[#F5F2ED] ${isScrolled ? 'h-16 shadow-sm' : 'h-20'}`}>
                <div className="mx-auto max-w-[100rem] h-full px-6 md:px-16 flex items-center justify-between text-[#13231F]">

                    <Link to="/" className="flex flex-col relative z-[120]" onClick={closeMenu}>
                        <span className="text-xl md:text-2xl font-serif tracking-tighter uppercase font-semibold leading-none">Stratbridge</span>
                        <span className="text-[9px] font-bold tracking-[0.4em] uppercase mt-1 text-[#344E41] opacity-60 font-sans">Partners</span>
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden md:flex items-center gap-2 lg:gap-6 text-[11px] lg:text-[13px] font-serif font-bold uppercase tracking-widest">
                        <Link to="/about" className="relative px-4 py-2 flex items-center justify-center group" onMouseEnter={() => setHoveredId('nav-about')} onMouseLeave={() => setHoveredId(null)}>
                            <span className="relative z-10">About</span>
                            <AnimatePresence>{hoveredId === 'nav-about' && <SingleStrokeScribble isSmall />}</AnimatePresence>
                        </Link>

                        <Link to="/initiatives" className="relative px-4 py-2 flex items-center justify-center group" onMouseEnter={() => setHoveredId('nav-init')} onMouseLeave={() => setHoveredId(null)}>
                            <span className="relative z-10">Initiatives</span>
                            <AnimatePresence>{hoveredId === 'nav-init' && <SingleStrokeScribble isSmall />}</AnimatePresence>
                        </Link>

                        <Link to="/contact-us" className="relative px-4 py-2 flex items-center justify-center group" onMouseEnter={() => setHoveredId('nav-contact')} onMouseLeave={() => setHoveredId(null)}>
                            <span className="relative z-10">Contact</span>
                            <AnimatePresence>{hoveredId === 'nav-contact' && <SingleStrokeScribble isSmall />}</AnimatePresence>
                        </Link>
                    </div>

                    {/* TOGGLE BUTTON (Mobile: Menu Icon | Desktop: "Services" label) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-[120] flex items-center gap-2 px-4 py-2 group"
                        onMouseEnter={() => setHoveredId('nav-services')}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <span className="hidden md:block text-[13px] font-serif font-bold uppercase tracking-widest relative z-10">
                            {isOpen ? 'Close' : 'Services'}
                        </span>
                        <div className="md:hidden relative z-10 p-2">
                            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                        </div>
                        <AnimatePresence>
                            {(hoveredId === 'nav-services' || (isOpen && hoveredId === null)) && <SingleStrokeScribble isSmall />}
                        </AnimatePresence>
                    </button>
                </div>
            </nav>

            {/* SERVICES OVERLAY */}
            <div className={`fixed inset-0 z-[110] transform transition-transform duration-[0.8s] cubic-bezier(0.19,1,0.22,1) ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="h-full w-full bg-[#F5F2ED] flex flex-col pt-32 md:pt-40 px-6 md:px-20 overflow-y-auto overflow-x-hidden">
                    <div className="max-w-7xl mx-auto w-full pb-20">
                        <div className="grid lg:grid-cols-12 gap-12 text-[#13231F]">

                            {/* SERVICES COLUMN */}
                            <nav className="lg:col-span-8 flex flex-col space-y-2 md:space-y-4">
                                <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#344E41] opacity-40 mb-4 md:mb-6 font-sans block">
                                    Our Services 2026
                                </span>

                                {serviceItems.map((item) => (
                                    <Link
                                        key={item.id}
                                        to={item.path}
                                        onClick={closeMenu}
                                        onMouseEnter={() => setHoveredId(item.id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                        className="group flex items-center gap-4 md:gap-8 border-b border-[#13231F]/5 pb-3 md:pb-4 w-full md:max-w-fit transition-colors hover:border-[#13231F]/20"
                                    >
                                        <span className="text-[10px] md:text-[11px] font-mono text-[#13231F]/20">{item.id}</span>
                                        <div className="relative inline-block px-4 md:px-10 py-2 md:py-3 flex items-center">
                                            <span className="relative z-10 text-lg md:text-3xl lg:text-4xl font-serif font-semibold tracking-tight uppercase group-hover:italic transition-all duration-300">
                                                {item.name}
                                            </span>
                                            <AnimatePresence>
                                                {hoveredId === item.id && <SingleStrokeScribble />}
                                            </AnimatePresence>
                                        </div>
                                    </Link>
                                ))}

                                {/* MOBILE-ONLY SECONDARY LINKS */}
                                <div className="flex flex-col space-y-6 pt-12 md:hidden border-t border-[#13231F]/10 mt-8">
                                    <Link to="/about" onClick={closeMenu} className="text-xl font-serif font-semibold uppercase tracking-tight">About</Link>
                                    <Link to="/initiatives" onClick={closeMenu} className="text-xl font-serif font-semibold uppercase tracking-tight">Initiatives</Link>
                                    <Link to="/contact-us" onClick={closeMenu} className="text-xl font-serif font-semibold uppercase tracking-tight">Contact Us</Link>
                                </div>
                            </nav>

                            {/* INFO COLUMN */}
                            <div className="lg:col-span-4 flex flex-col justify-start space-y-10 md:space-y-12 pt-6 md:pt-10 font-serif uppercase tracking-tight">
                                <div className="space-y-2 md:space-y-4">
                                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#344E41] opacity-40 block font-sans">Corporate office</span>
                                    <p className="text-lg md:text-2xl font-semibold italic">Kathmandu, Nepal</p>
                                </div>
                                <div className="space-y-2 md:space-y-4">
                                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#344E41] opacity-40 block font-sans">Partnership Portal</span>
                                    <a href="mailto:stratbpartners@gmail.com"
                                        className="relative group inline-flex items-center text-base md:text-xl font-semibold italic break-all"
                                        onMouseEnter={() => setHoveredId('email')}
                                        onMouseLeave={() => setHoveredId(null)}>
                                        <span className="relative z-10">stratbpartners@gmail.com</span>
                                        <AnimatePresence>
                                            {hoveredId === 'email' && <SingleStrokeScribble isSmall />}
                                        </AnimatePresence>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}