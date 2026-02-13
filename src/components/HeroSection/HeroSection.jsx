'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
    {
        url: "https://images.pexels.com/photos/2097921/pexels-photo-2097921.jpeg?auto=compress&cs=tinysrgb&w=1920",
        title: "Metropolitan Growth",
        bigTitle: "modernizing",
        highlight: "cities.",
        subtitle: "Directing investment into urban infrastructure and smart-city ecosystems within Kathmandu Valley."
    },
    {
        url: "https://images.pexels.com/photos/6076272/pexels-photo-6076272.jpeg?auto=compress&cs=tinysrgb&w=1920",
        title: "Renewable Assets",
        bigTitle: "harvesting",
        highlight: "energy.",
        subtitle: "Capitalizing on Nepal's hydro-wealth to power the sustainable transition of South Asia."
    },
    {
        url: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920",
        title: "Logistics Backbone",
        bigTitle: "bridging",
        highlight: "markets.",
        subtitle: "Building the physical and digital corridors connecting two of the world’s largest economies."
    },
    {
        url: "https://images.pexels.com/photos/15922603/pexels-photo-15922603.jpeg?auto=compress&cs=tinysrgb&w=1920",
        title: "Strategic Entry",
        bigTitle: "opening",
        highlight: "frontiers.",
        subtitle: "A world-class gateway for investors looking at the next great emerging market."
    }
];

const SLIDE_DURATION = 5000;

export default function HeroSection() {
    const [index, setIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % slides.length);
        }, SLIDE_DURATION);
        return () => clearInterval(timer);
    }, []);

    const currentSlide = slides[index] || slides[0];

    return (
        // Changed h-screen to min-h-screen on mobile to allow content to breathe
        <section className="relative w-full min-h-screen lg:h-screen bg-[#F5F2ED] flex flex-col lg:flex-row overflow-hidden font-sans">

            {/* LEFT: CONTENT - Order-2 on mobile so image stays at top if you prefer, or Order-1 to keep text first */}
            <div className="relative z-20 w-full lg:w-1/2 flex flex-col justify-between p-6 md:p-16 lg:p-24 bg-[#F5F2ED] order-2 lg:order-1">
                <div className="hidden lg:flex items-center gap-4">
                    <div className="w-8 h-[1px] bg-[#13231F]/20" />
                </div>

                <div className="max-w-xl py-12 lg:py-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {/* Heading scales from text-5xl (mobile) to 7.5rem (desktop) */}
                            <h1 className="text-[#13231F] text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-serif leading-[0.9] lg:leading-[0.85] tracking-tighter mb-6 lg:mb-8 lowercase">
                                {currentSlide.bigTitle} <br />
                                <span className="relative inline-block text-[#344E41] italic font-light">
                                    {currentSlide.highlight}
                                    <svg className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-3 lg:h-4 opacity-60" viewBox="0 0 300 20" preserveAspectRatio="none">
                                        <motion.path
                                            key={index}
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 1, delay: 0.3 }}
                                            d="M5 15C50 15 100 5 150 10C200 15 250 5 295 10"
                                            stroke="#344E41" strokeWidth="4" strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </h1>
                            <p className="text-[#13231F]/70 text-base md:text-xl font-light leading-relaxed mb-8 lg:mb-10 border-l border-[#344E41]/20 pl-4 lg:pl-6 max-w-md">
                                {currentSlide.subtitle}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <button
                        onClick={() => setShowModal(true)}
                        className="group relative flex items-center justify-between w-full sm:max-w-xs px-6 lg:px-8 py-4 lg:py-6 bg-[#13231F] overflow-hidden rounded-sm transition-all shadow-xl active:scale-95"
                    >
                        <span className="relative z-10 text-[#F5F2ED] text-[10px] font-bold uppercase tracking-[0.4em]">Start Investing</span>
                        <span className="relative z-10 text-[#F5F2ED] font-light text-xl transition-transform group-hover:translate-x-2">→</span>
                        <div className="absolute inset-0 bg-[#344E41] translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
                    </button>
                </div>

                {/* Progress Bar Area - simplified for mobile */}
                <div className="flex items-end gap-4 lg:gap-6 mt-8 lg:mt-0">
                    <span className="text-[#13231F] font-serif italic text-3xl lg:text-4xl leading-none">0{index + 1}</span>
                    <div className="flex-1 h-[1px] bg-[#13231F]/10 mb-2 relative overflow-hidden">
                        <motion.div
                            key={index}
                            initial={{ width: "0%" }} animate={{ width: "100%" }}
                            transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                            className="h-full bg-[#344E41]"
                        />
                    </div>
                    <span className="text-[#13231F]/30 font-mono text-[10px] lg:text-xs mb-1">04</span>
                </div>
            </div>

            {/* RIGHT: IMAGE - Fixed height on mobile, full height on desktop */}
            <div className="relative w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-full bg-[#13231F] overflow-hidden order-1 lg:order-2">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${currentSlide.url})` }}
                    />
                </AnimatePresence>

                <div className="absolute bottom-0 right-0 p-4 lg:p-12">
                    <div className="bg-[#F5F2ED] px-4 py-2 lg:px-6 lg:py-2 shadow-sm">
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-[#13231F] font-mono text-[8px] lg:text-[9px] tracking-[0.2em] lg:tracking-[0.3em] uppercase"
                        >
                            Portfolio / {currentSlide.title}
                        </motion.p>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#F5F2ED]/20 to-transparent pointer-events-none" />
            </div>

            {/* MODAL - Fully responsive scrolling modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#13231F]/95 backdrop-blur-xl p-4 lg:p-6"
                    >
                        <div className="absolute inset-0" onClick={() => setShowModal(false)} />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={e => e.stopPropagation()}
                            className="relative w-full max-w-4xl bg-[#F5F2ED] p-8 lg:p-20 shadow-2xl max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 lg:top-8 lg:right-8 text-[#13231F] p-2"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            <div className="mb-8 lg:mb-12">
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-[#13231F] tracking-tighter mb-4 leading-tight">How would you like to partner?</h2>
                                <p className="text-[#13231F]/60 text-xs lg:text-sm tracking-wide">Choose the path that best describes your needs.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button onClick={() => navigate('/services/startup-support')} className="group p-6 lg:p-10 border border-[#13231F]/10 bg-white hover:bg-[#13231F] transition-all duration-500 text-left">
                                    <h3 className="text-lg lg:text-xl font-bold text-[#13231F] group-hover:text-[#F5F2ED] mb-2 uppercase tracking-widest font-mono">I am a Founder</h3>
                                    <p className="text-[#13231F]/50 group-hover:text-[#F5F2ED]/70 text-xs lg:text-sm">Looking for capital, mentorship, and scaling support.</p>
                                </button>
                                <button onClick={() => navigate('/services/business-consulting')} className="group p-6 lg:p-10 border border-[#13231F]/10 bg-white hover:bg-[#13231F] transition-all duration-500 text-left">
                                    <h3 className="text-lg lg:text-xl font-bold text-[#13231F] group-hover:text-[#F5F2ED] mb-2 uppercase tracking-widest font-mono">I am an Investor</h3>
                                    <p className="text-[#13231F]/50 group-hover:text-[#F5F2ED]/70 text-xs lg:text-sm">Seeking market insights and institutional advisory.</p>
                                </button>
                            </div>

                            <button onClick={() => setShowModal(false)} className="mt-8 lg:mt-12 text-[#13231F]/40 hover:text-[#13231F] font-mono text-[10px] uppercase tracking-[0.3em] transition-colors">
                                ← Go back
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}