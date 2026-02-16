'use client';

import { ArrowLeft, ArrowUpRight } from "lucide-react";
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

    //  const contact = area.contactInfo || { phone: '+977 1 000000', email: 'advisory@firm.com' };

    return (
        <div className="min-h-screen bg-[#F5F2ED] text-[#13231F] selection:bg-[#004b33] selection:text-white antialiased overflow-x-hidden">
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=JetBrains+Mono:wght@500&display=swap');
                    
                    .font-heading { font-family: 'Playfair Display', serif; }
                    .font-body { font-family: 'Hanken Grotesk', sans-serif; }
                    .font-mono { font-family: 'JetBrains Mono', monospace; }

                    .hide-scrollbar::-webkit-scrollbar { display: none; }
                    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                    
                    .text-balance { text-wrap: balance; }
                `}
            </style>

            <Navbar />

            {/* 1. LEFT PANEL / HEADER ON MOBILE */}
            <div className="lg:fixed lg:inset-y-0 lg:left-0 lg:w-1/2 p-6 md:p-12 lg:p-24 flex flex-col justify-between z-10 bg-[#F5F2ED]">
                <div className="pt-20 lg:pt-0">
                    <button
                        onClick={() => navigate(-1)}
                        className="group flex items-center gap-3 text-[#004b33] font-mono text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-12 lg:mb-24 transition-all hover:opacity-50"
                    >
                        <ArrowLeft size={12} /> Return to Home
                    </button>



                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-normal tracking-tight leading-[1] md:leading-[0.9] text-balance">
                        {area.title} <br />
                        <span className="italic font-normal text-[#004b33]">Protocol</span>
                    </h1>
                </div>

                <div className="mt-12 lg:mt-0 pointer-events-auto max-w-sm border-l border-[#004b33]/20 pl-6 md:pl-8">
                    <p className="text-xs md:text-sm lg:text-base font-body font-light text-[#13231F]/60 leading-relaxed uppercase tracking-widest">
                        {area.shortDescription || area.desc}
                    </p>
                </div>
            </div>

            {/* 2. SCROLLING CONTENT PANEL */}
            <main className="lg:ml-[50%] min-h-screen bg-white shadow-[-20px_0_40px_rgba(0,0,0,0.02)]">

                {/* 01 Briefing */}
                <section className="px-6 md:px-12 lg:px-24 pt-20 md:pt-32 lg:pt-48 pb-20 md:pb-32">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-4 mb-10 md:mb-16">
                            <span className="font-mono text-[10px] text-[#004b33] font-bold tracking-tighter">01.0</span>
                            <div className="h-[1px] flex-grow bg-[#13231F]/10" />
                        </div>

                        <h2 className="font-heading text-3xl md:text-4xl mb-8 md:mb-12 italic text-balance">Strategic Context</h2>

                        <div className="font-body text-lg md:text-xl text-[#13231F]/80 leading-relaxed space-y-8 md:space-y-12">
                            <p className="font-light tracking-tight">
                                {area.content}
                            </p>
                            <div className="p-6 md:p-10 bg-[#F5F2ED] border-r-4 border-[#004b33]">
                                <p className="text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] leading-relaxed md:leading-loose text-[#13231F]/60">
                                    Our firm operates at the frontier of {area.title?.toLowerCase()}—where institutional stability meets high-velocity growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 02 Capability Matrix */}
                {area.keyServices && area.keyServices.length > 0 && (
                    <section className="pb-24 md:pb-48">
                        <div className="px-6 md:px-12 lg:px-24 mb-10 md:mb-16 flex items-center gap-4">
                            <span className="font-mono text-[10px] text-[#004b33] font-bold tracking-tighter">02.0</span>
                            <h3 className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[#13231F]/40">Capability Matrix</h3>
                        </div>

                        <div className="lg:hidden px-6 mb-4 font-mono text-[8px] uppercase tracking-widest text-[#13231F]/40">
                            Slide to explore →
                        </div>

                        <div className="flex overflow-x-auto hide-scrollbar border-y border-[#13231F]/10">
                            {area.keyServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="flex-none w-[280px] md:w-[320px] aspect-[4/5] md:aspect-[3/4] bg-white p-10 md:p-12 group hover:bg-[#004b33] transition-all duration-700 cursor-default border-r border-[#13231F]/10 last:border-r-0"
                                >
                                    <div className="h-full flex flex-col justify-between">
                                        <span className="font-mono text-[10px] text-[#004b33] font-bold group-hover:text-white/30">
                                            ({index + 1})
                                        </span>
                                        <div>
                                            <h4 className="font-heading text-2xl md:text-3xl text-[#13231F] group-hover:text-white transition-colors leading-tight md:leading-none mb-4 md:mb-6 italic">
                                                {service}
                                            </h4>
                                            <div className="h-[1px] w-0 group-hover:w-full bg-white/20 transition-all duration-700" />
                                            <ArrowUpRight className="mt-4 md:mt-6 w-4 h-4 text-[#004b33] md:opacity-0 group-hover:opacity-100 transition-all" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}



            </main>
        </div>
    );
}