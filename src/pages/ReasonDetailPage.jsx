'use client';

import Lenis from '@studio-freight/lenis';
import { ArrowLeft, ArrowUpRight, PhoneCall } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { reasons } from "../data/reasons";

export default function ReasonDetailPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const reason = reasons.find((r) => r.id === slug);
    const containerRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, [reason]);

    if (!reason) return null;

    const { title, shortDescription, image, stats = [], content = [] } = reason;

    return (
        <main ref={containerRef} className="min-h-screen bg-[#F5F2ED] font-sans text-[#13231F] selection:bg-[#344E41] selection:text-[#F5F2ED]">

            {/* --- NAVIGATION: RESPONSIVE PILL --- */}
            <nav className="fixed top-4 left-4 md:top-8 md:left-8 z-50">
                <button
                    onClick={() => navigate(-1)}
                    className="group inline-flex items-center gap-3 md:gap-4 px-4 py-2.5 md:px-6 md:py-3 bg-white text-[#13231F] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-500 hover:scale-105 active:scale-95 border border-[#13231F]/5"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Return</span>
                </button>
            </nav>

            {/* --- 01. EDITORIAL MASTHEAD --- */}
            <header className="pt-32 md:pt-48 pb-12 md:pb-16 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
                <div className="max-w-4xl">
                    <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-[#344E41] mb-4 md:mb-6 block font-bold italic">Confidential Dossier</span>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif leading-[0.95] md:leading-[0.9] tracking-tighter lowercase text-[#13231F] mb-6 md:mb-8">
                        {title}
                    </h1>
                    <p className="text-lg md:text-2xl font-light text-[#13231F]/60 italic leading-relaxed">
                        {shortDescription}
                    </p>
                </div>
            </header>

            {/* --- 02. CLEAN IMAGE FRAME --- */}
            <section className="px-0 md:px-8 mb-20 md:mb-32">
                <div className="h-[50vh] md:h-[65vh] w-full overflow-hidden md:rounded-sm bg-[#DEDAD5]">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover grayscale-[20%] brightness-95 transition-all duration-700"
                    />
                </div>
            </section>

            {/* --- 03. METRICS GRID --- */}
            <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-24 md:mb-48">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 border-t border-[#13231F]/10 pt-12 md:pt-16">
                    {stats.slice(0, 4).map((s, i) => (
                        <div key={i} className="flex flex-col">
                            <span className="text-4xl md:text-5xl font-serif italic text-[#344E41] mb-2 leading-none">
                                {s.prefix}{s.value.toLocaleString()}{s.suffix}
                            </span>
                            <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-[#13231F]/40 font-bold">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- 04. THE PROTOCOL GALLERY (CLEAN GRID) --- */}
            <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pb-32 md:pb-56">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.map((c, i) => (
                        <div key={i} className="bg-white p-8 md:p-12 border border-[#13231F]/5 group hover:bg-[#13231F] transition-all duration-500 flex flex-col justify-between min-h-[250px] md:min-h-[300px]">
                            <span className="text-2xl md:text-3xl font-serif italic text-[#344E41]/20 group-hover:text-[#A3B18A] transition-colors mb-6 md:mb-8">0{i + 1}</span>
                            <div>
                                <h3 className="text-xl md:text-2xl font-serif text-[#13231F] group-hover:text-white mb-3 md:mb-4 lowercase transition-colors">
                                    {c.heading}
                                </h3>
                                <p className="text-[#13231F]/60 group-hover:text-white/70 text-sm md:text-base font-light leading-relaxed italic transition-colors">
                                    {c.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- 05. COMPACT ACTION TRAY --- */}
            <section className="w-full px-0 md:px-8">
                <div className="bg-[#13231F] md:rounded-t-2xl py-20 md:py-24 px-6 md:px-8 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-serif text-[#F5F2ED] mb-10 md:mb-12 tracking-tighter lowercase italic leading-none">
                            Request <span className="not-italic">Advisory.</span>
                        </h2>

                        <div className="flex flex-col items-center gap-6 md:gap-8">
                            <a href="/contact" className="group w-full sm:w-auto inline-flex items-center justify-center gap-6 md:gap-10 bg-white text-[#13231F] px-8 md:px-12 py-5 md:py-6 hover:bg-[#F5F2ED] transition-all duration-500 rounded-sm">
                                <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold">Initiate Protocol</span>
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>

                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors py-4"
                            >
                                ↑ Scroll to top
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FLOATING CONTACT */}
            <a href="/contact-us" className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-white text-[#13231F] rounded-full shadow-2xl flex items-center justify-center z-50 border border-[#13231F]/10 hover:scale-110 active:scale-95 transition-transform">
                <PhoneCall className="w-5 h-5 md:w-6 md:h-6" />
            </a>
        </main>
    );
}