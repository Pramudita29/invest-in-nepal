'use client';

import { ArrowLeft, ArrowUpRight, Zap } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { practiceAreas } from "../data/legalContent";

export default function LegalTemplate() {
    const { areaId } = useParams();
    const navigate = useNavigate();

    const area = practiceAreas.find(a => a.id === areaId);

    if (!area) {
        return (
            <div className="min-h-screen bg-[#F5F2ED] flex items-center justify-center font-mono text-xs uppercase tracking-widest text-[#004b33]">
                Protocol not found / 404
            </div>
        );
    }

    const Icon = area.icon;
    const contact = area.contactInfo || { phone: '+977 1 000000', email: 'advisory@firm.com' };

    return (
        <div className="min-h-screen bg-[#F5F2ED] text-[#13231F] selection:bg-[#004b33] selection:text-white antialiased">
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=JetBrains+Mono:wght@500&display=swap');
                    
                    /* RESTORING PREVIOUS FONT TOKENS */
                    .font-heading { font-family: 'Playfair Display', serif; }
                    .font-body { font-family: 'Hanken Grotesk', sans-serif; }
                    .font-mono { font-family: 'JetBrains Mono', monospace; }

                    .hide-scrollbar::-webkit-scrollbar { display: none; }
                    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                    
                    .text-balance { text-wrap: balance; }
                `}
            </style>

            <Navbar />

            {/* 1. FIXED LEFT PANEL */}
            <div className="lg:fixed lg:inset-y-0 lg:left-0 lg:w-1/2 p-8 lg:p-24 flex flex-col justify-between pointer-events-none z-10 bg-[#F5F2ED]">
                <div className="pointer-events-auto">
                    <button
                        onClick={() => navigate(-1)}
                        className="group flex items-center gap-3 text-[#004b33] font-mono text-[10px] uppercase tracking-[0.5em] mb-24 transition-all hover:opacity-50"
                    >
                        <ArrowLeft size={12} /> Return to Index
                    </button>

                    <div className="flex items-center gap-4 mb-8 text-[#004b33]">
                        <Icon size={20} strokeWidth={1.5} />
                        <span className="font-mono text-[9px] uppercase tracking-[0.6em] font-medium opacity-60">Archive // {areaId}</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-heading font-normal tracking-tight leading-[0.9] text-balance">
                        {area.title} <br />
                        <span className="italic font-normal text-[#004b33]">Protocol</span>
                    </h1>
                </div>

                <div className="hidden lg:block pointer-events-auto max-w-sm border-l border-[#004b33]/20 pl-8">
                    <p className="text-base font-body font-light text-[#13231F]/60 leading-relaxed uppercase tracking-widest">
                        {area.shortDescription || area.desc}
                    </p>
                </div>
            </div>

            {/* 2. SCROLLING RIGHT PANEL - ALL FONTS RESTORED */}
            <main className="lg:ml-[50%] min-h-screen bg-white shadow-[-20px_0_40px_rgba(0,0,0,0.02)]">

                {/* 01 Briefing */}
                <section className="px-8 lg:px-24 pt-48 pb-32">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-4 mb-16">
                            <span className="font-mono text-[10px] text-[#004b33] font-bold tracking-tighter">01.0</span>
                            <div className="h-[1px] flex-grow bg-[#13231F]/10" />
                        </div>

                        <h2 className="font-heading text-4xl mb-12 italic">Strategic Context</h2>

                        <div className="font-body text-xl text-[#13231F]/80 leading-relaxed space-y-12">
                            <p className="font-light tracking-tight">
                                {area.content}
                            </p>
                            <div className="p-10 bg-[#F5F2ED] border-r-4 border-[#004b33]">
                                <p className="text-sm uppercase tracking-[0.2em] leading-loose text-[#13231F]/60">
                                    Our firm operates at the frontier of {area.title.toLowerCase()}—where institutional stability meets high-velocity growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 02 Capability Matrix - NO GAP / FULL WIDTH START */}
                {area.keyServices && area.keyServices.length > 0 && (
                    <section className="pb-48">
                        <div className="px-8 lg:px-24 mb-16 flex items-center gap-4">
                            <span className="font-mono text-[10px] text-[#004b33] font-bold tracking-tighter">02.0</span>
                            <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#13231F]/40">Capability Matrix</h3>
                        </div>

                        <div className="flex overflow-x-auto hide-scrollbar border-y border-[#13231F]/10">
                            {area.keyServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="flex-none w-[320px] aspect-[3/4] bg-white p-12 group hover:bg-[#004b33] transition-all duration-700 cursor-default border-r border-[#13231F]/10 last:border-r-0"
                                >
                                    <div className="h-full flex flex-col justify-between">
                                        <span className="font-mono text-[10px] text-[#004b33] font-bold group-hover:text-white/30">
                                            ({index + 1})
                                        </span>
                                        <div>
                                            {/* Headings back to Playfair Serif */}
                                            <h4 className="font-heading text-3xl text-[#13231F] group-hover:text-white transition-colors leading-none mb-6 italic">
                                                {service}
                                            </h4>
                                            <div className="h-[1px] w-0 group-hover:w-full bg-white/20 transition-all duration-700" />
                                            <ArrowUpRight className="mt-6 w-4 h-4 text-[#004b33] opacity-0 group-hover:opacity-100 transition-all" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* 03 Advisory */}
                <section className="px-8 lg:px-24 pb-48">
                    <div className="bg-[#13231F] text-white p-12 lg:p-20 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="font-heading text-5xl mb-20 italic">Initiate Briefing</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
                                <div className="space-y-4">
                                    <p className="font-mono text-[9px] text-white/30 uppercase tracking-[0.5em]">Global Line</p>
                                    <p className="text-2xl font-body font-light tracking-tighter">{contact.phone}</p>
                                </div>
                                <div className="space-y-4">
                                    <p className="font-mono text-[9px] text-white/30 uppercase tracking-[0.5em]">Direct Endpoint</p>
                                    <p className="text-2xl font-body font-light tracking-tighter">{contact.email}</p>
                                </div>
                            </div>

                            <button className="group flex items-center gap-8 border border-white/20 hover:border-[#004b33] px-10 py-6 transition-all">
                                <span className="font-mono text-[10px] uppercase tracking-[0.6em]">Request Protocol</span>
                                <Zap size={14} className="group-hover:text-[#004b33] transition-colors" fill="currentColor" />
                            </button>
                        </div>

                        <div className="absolute -right-12 -bottom-12 text-[24rem] font-heading font-bold text-white/[0.02] select-none pointer-events-none">
                            S
                        </div>
                    </div>
                </section>

                <footer className="px-8 lg:px-24 py-16 flex justify-between items-center bg-[#F5F2ED]/30">
                    <span className="font-mono text-[9px] text-[#13231F]/30 uppercase tracking-[0.6em]">Ref: Stratbridge_V.26</span>
                    <div className="h-[1px] w-24 bg-[#13231F]/10 hidden md:block" />
                    <span className="font-mono text-[9px] text-[#13231F]/30 uppercase tracking-[0.6em]">Institutional Excellence</span>
                </footer>
            </main>
        </div>
    );
}