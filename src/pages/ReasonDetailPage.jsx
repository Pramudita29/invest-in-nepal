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

            {/* --- NAVIGATION: HIGH-VIS WHITE PILL --- */}
            <nav className="fixed top-8 left-8 z-50">
                <button
                    onClick={() => navigate(-1)}
                    className="group inline-flex items-center gap-4 px-6 py-3 bg-white text-[#13231F] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-500 hover:scale-105 active:scale-95 border border-[#13231F]/5"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">Return to Index</span>
                </button>
            </nav>

            {/* --- 01. EDITORIAL MASTHEAD --- */}
            <header className="pt-48 pb-16 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
                <div className="max-w-4xl">
                    <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#344E41] mb-6 block font-bold">Confidential Dossier</span>
                    <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter lowercase text-[#13231F] mb-8">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-[#13231F]/60 italic leading-relaxed">
                        {shortDescription}
                    </p>
                </div>
            </header>

            {/* --- 02. CLEAN IMAGE FRAME --- */}
            <section className="px-4 md:px-8 mb-32">
                <div className="h-[65vh] w-full overflow-hidden rounded-sm bg-[#DEDAD5]">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover grayscale-[20%] brightness-95 transition-all duration-700"
                    />
                </div>
            </section>

            {/* --- 03. METRICS GRID --- */}
            <section className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 mb-48">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-[#13231F]/10 pt-16">
                    {stats.slice(0, 4).map((s, i) => (
                        <div key={i} className="flex flex-col">
                            <span className="text-4xl md:text-5xl font-serif italic text-[#344E41] mb-2 leading-none">
                                {s.prefix}{s.value.toLocaleString()}{s.suffix}
                            </span>
                            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#13231F]/40 font-bold">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- 04. THE PROTOCOL GALLERY (CLEAN GRID) --- */}
            <section className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pb-56">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.map((c, i) => (
                        <div key={i} className="bg-white p-12 border border-[#13231F]/5 group hover:bg-[#13231F] transition-all duration-500 flex flex-col justify-between min-h-[300px]">
                            <span className="text-3xl font-serif italic text-[#344E41]/20 group-hover:text-[#A3B18A] transition-colors mb-8">0{i + 1}</span>
                            <div>
                                <h3 className="text-2xl font-serif text-[#13231F] group-hover:text-white mb-4 lowercase transition-colors">
                                    {c.heading}
                                </h3>
                                <p className="text-[#13231F]/60 group-hover:text-white/70 text-base font-light leading-relaxed italic transition-colors">
                                    {c.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- 05. COMPACT ACTION TRAY (NO BOTTOM GAP) --- */}
            <section className="w-full px-4 md:px-8">
                <div className="bg-[#13231F] rounded-t-2xl py-24 px-8 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-serif text-[#F5F2ED] mb-12 tracking-tighter lowercase italic leading-none">
                            Request <span className="not-italic">Advisory.</span>
                        </h2>

                        <div className="flex flex-col items-center gap-8">
                            <a href="/contact" className="group inline-flex items-center gap-10 bg-white text-[#13231F] px-12 py-6 hover:bg-[#F5F2ED] transition-all duration-500 rounded-sm">
                                <span className="font-mono text-[10px] uppercase tracking-[0.4em] font-bold">Initiate Protocol</span>
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>

                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors"
                            >
                                ↑ Scroll to top
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FLOATING CONTACT */}
            <a href="/contact-us" className="fixed bottom-8 right-8 w-14 h-14 bg-white text-[#13231F] rounded-full shadow-2xl flex items-center justify-center z-50 border border-[#13231F]/10 hover:scale-110 transition-transform">
                <PhoneCall size={20} />
            </a>
        </main>
    );
}