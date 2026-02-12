'use client';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, Zap } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { practiceAreas } from "../data/legalContent";

gsap.registerPlugin(ScrollTrigger);

export default function LegalSupportPage() {
    const mainRef = useRef(null);
    const cardsRef = useRef(null);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance for Hero Elements
            gsap.from(".hero-reveal", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "expo.out",
            });

            if (cardsRef.current) {
                gsap.fromTo(
                    cardsRef.current.children,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: cardsRef.current,
                            start: "top 90%"
                        },
                    }
                );
            }
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="min-h-screen bg-[#F5F2ED] text-[#13231F] selection:bg-[#004b33] selection:text-white">
            {/* FONT IMPORT */}
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;1,9..144,400&display=swap');
                    .font-heading { font-family: 'Fraunces', serif; }
                    .font-body { font-family: 'Inter', sans-serif; }
                    .font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
                `}
            </style>

            <Navbar />

            {/* SEQUOIA INSTITUTIONAL HERO */}
            <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 border-b border-[#13231F]/10">
                <div className="max-w-7xl mx-auto">
                    <div className="hero-reveal mb-12">
                        <button
                            onClick={() => navigate(-1)}
                            className="group flex items-center gap-3 text-[#004b33] font-mono text-[10px] font-bold uppercase tracking-[0.4em] transition-all hover:translate-x-[-4px]"
                        >
                            <ArrowLeft size={14} /> Back
                        </button>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8">
                            <p className="hero-reveal font-mono text-[10px] uppercase tracking-[0.6em] text-[#004b33] font-bold mb-6">
                                Professional Services / 2026
                            </p>
                            <h1 className="hero-reveal text-6xl md:text-[7rem] font-heading font-normal tracking-tighter leading-[0.85] mb-10 lowercase">
                                Legal <span className="italic text-[#004b33]">Frameworks.</span>
                            </h1>
                            <p className="hero-reveal text-xl md:text-2xl text-[#13231F]/60 font-heading italic max-w-2xl leading-relaxed">
                                "Navigating regulatory complexity with the precision of a strategic partner."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Visual Accent */}
                <div className="absolute right-0 top-0 w-1/3 h-full bg-[#004b33]/5 -z-10 hidden lg:block" />
            </header>

            {/* PRACTICE AREAS GRID */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
                <div
                    ref={cardsRef}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#13231F]/10 border border-[#13231F]/10"
                >
                    {practiceAreas.map((area, i) => {
                        const Icon = area.icon;
                        return (
                            <div
                                key={i}
                                className="group bg-[#F5F2ED] p-10 hover:bg-white transition-all duration-500 cursor-pointer flex flex-col min-h-[400px]"
                                onClick={() => navigate(`/legal/${area.id}`)}
                            >
                                <div className="flex justify-between items-start mb-12">
                                    <div className="text-[#004b33] group-hover:scale-110 transition-transform duration-500">
                                        <Icon size={32} strokeWidth={1.2} />
                                    </div>
                                    <span className="font-mono text-[10px] text-[#13231F]/30 group-hover:text-[#004b33] transition-colors">
                                        0{i + 1}
                                    </span>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="text-3xl font-heading italic text-[#13231F] mb-6 lowercase group-hover:text-[#004b33] transition-colors">
                                        {area.title}
                                    </h3>

                                    <p className="font-body text-sm text-[#13231F]/50 leading-relaxed mb-10 line-clamp-3">
                                        {area.desc}
                                    </p>

                                    <div className="flex items-center justify-between pt-6 border-t border-[#13231F]/5">
                                        <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-[#13231F]/40 group-hover:text-[#004b33]">
                                            Establish Protocol
                                        </span>
                                        <div className="w-8 h-8 rounded-full border border-[#13231F]/10 flex items-center justify-center group-hover:bg-[#004b33] group-hover:border-[#004b33] transition-all">
                                            <ArrowRight size={14} className="group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* INSTITUTIONAL SIGN-OFF */}
            <footer className="bg-[#13231F] py-24 px-6 lg:px-12 text-center overflow-hidden relative">
                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-6xl font-heading text-[#F5F2ED] italic lowercase mb-8">
                        Ready to <span className="not-italic text-[#fffff]">Scale?</span>
                    </h2>
                    <p className="text-[#F5F2ED]/40 font-body text-lg mb-12 italic">
                        Our strategic intelligence bridges the gap between vision and regulation.
                    </p>
                    <button
                        onClick={() => navigate('/consultation')}
                        className="inline-flex items-center gap-4 bg-[#004b33] text-white font-mono font-bold py-6 px-12 uppercase tracking-[0.4em] text-[10px] hover:bg-white hover:text-[#13231F] transition-all group"
                    >
                        Inquire Protocol <Zap size={14} fill="currentColor" />
                    </button>
                </div>

                {/* Back Decor */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15vw] font-heading font-bold text-white/[0.02] whitespace-nowrap pointer-events-none">
                    INSTITUTIONAL ADVISORY
                </div>
            </footer>
        </div>
    );
}