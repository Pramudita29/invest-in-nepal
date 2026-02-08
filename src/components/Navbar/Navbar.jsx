'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    // SINGLE ROUND STROKE
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

    return (
        <>
            <nav className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 bg-[#F5F2ED] ${isScrolled ? 'h-16' : 'h-20'}`}>
                <div className="mx-auto max-w-[100rem] h-full px-8 lg:px-16 flex items-center justify-between text-[#13231F]">

                    <Link to="/" className="flex flex-col">
                        <span className="text-xl md:text-2xl font-serif tracking-tighter uppercase font-semibold leading-none">Stratbridge</span>
                        <span className="text-[9px] font-bold tracking-[0.4em] uppercase mt-1 text-[#344E41] opacity-60 font-sans">Partners</span>
                    </Link>

                    <div className="flex items-center gap-6 text-[13px] font-serif font-bold uppercase tracking-widest">
                        <div className="hidden md:flex items-center gap-4">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'The Agenda', path: '/proposal' },
                                { name: 'Contact', path: '/contact-us' }
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="relative px-5 py-2 flex items-center justify-center"
                                    onMouseEnter={() => setHoveredId(`nav-${item.name}`)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <AnimatePresence>{hoveredId === `nav-${item.name}` && <SingleStrokeScribble isSmall />}</AnimatePresence>
                                </Link>
                            ))}
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative px-5 py-2 flex items-center justify-center"
                            onMouseEnter={() => setHoveredId('nav-menu')}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <span className="relative z-10">{isOpen ? 'Close' : 'MENU'}</span>
                            <AnimatePresence>{hoveredId === 'nav-menu' && <SingleStrokeScribble isSmall />}</AnimatePresence>
                        </button>
                    </div>
                </div>
            </nav>

            {/* INNER MENU */}
            <div className={`fixed inset-0 z-[110] transform transition-transform duration-[0.8s] ease-[cubic-bezier(0.19,1,0.22,1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="h-full w-full bg-[#F5F2ED] flex flex-col pt-36 px-8 md:px-20 overflow-y-auto">
                    <div className="max-w-7xl mx-auto w-full pb-20">
                        <div className="grid lg:grid-cols-12 gap-12 text-[#13231F]">

                            <nav className="lg:col-span-8 flex flex-col space-y-4">
                                <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#344E41] opacity-40 mb-6 font-sans block">Directory 2026</span>
                                {
                                    [
                                        { name: "About StratB", id: "00", path: "/about" },
                                        { name: "The Agenda", id: "01", path: "/proposal" },
                                        { name: "Investment", id: "02", path: "/services/business-consulting" },
                                        { name: "Legal Advisory", id: "03", path: "/services/legal-service" },
                                        { name: "Public Policy", id: "04", path: "/services/policy" },
                                        { name: "Venture Capital", id: "05", path: "/services/startup-support" },
                                        { name: "Insights", id: "06", path: "/services/strategic-insights" }
                                    ].map((item) => (
                                        <Link
                                            key={item.id}
                                            to={item.path}
                                            onClick={closeMenu}
                                            onMouseEnter={() => setHoveredId(item.id)}
                                            onMouseLeave={() => setHoveredId(null)}
                                            className="group flex items-baseline gap-6 border-b border-[#13231F]/5 pb-4 max-w-fit"
                                        >
                                            <span className="text-[11px] font-mono text-[#13231F]/20">{item.id}</span>
                                            <div className="relative inline-block px-10 py-3 flex items-center justify-center">
                                                <span className="relative z-10 text-xl md:text-2xl font-serif font-semibold tracking-tight uppercase group-hover:italic transition-all">
                                                    {item.name}
                                                </span>
                                                <AnimatePresence>
                                                    {hoveredId === item.id && <SingleStrokeScribble />}
                                                </AnimatePresence>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </nav>

                            <div className="lg:col-span-4 flex flex-col justify-start space-y-12 pt-10 font-serif uppercase tracking-tight">
                                <div className="space-y-4">
                                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#344E41] opacity-40 block font-sans">Corporate office</span>
                                    <p className="text-xl md:text-2xl font-semibold">Kathmandu, Nepal</p>
                                </div>
                                <div className="space-y-4">
                                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#344E41] opacity-40 block font-sans">Partnership Portal</span>
                                    <a href="mailto:stratbpartners@gmail.com"
                                        className="relative flex items-center justify-center px-10 py-4 text-lg md:text-xl font-semibold italic hover:opacity-50 transition-opacity max-w-fit"
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
                <button onClick={closeMenu} className="absolute top-10 right-10 text-[#13231F] hover:rotate-90 transition-transform duration-300">
                    <X size={32} strokeWidth={1} />
                </button>
            </div>
        </>
    );
}