'use client';

import { ArrowLeft, BarChart3, Briefcase, Globe, Target, TrendingUp, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function BusinessConsultingPage() {
    const navigate = useNavigate();

    const services = [
        { icon: Target, title: "Business Strategy", desc: "Clear growth strategies and market entry plans tailored to Nepal’s unique market realities." },
        { icon: TrendingUp, title: "Growth & Scale", desc: "Operational improvements, pricing models, and expansion roadmaps for high-growth firms." },
        { icon: BarChart3, title: "Financial Advisory", desc: "Sophisticated business planning, financial modeling, and investment readiness." },
        { icon: Users, title: "Organization & Talent", desc: "Structure, leadership alignment, and performance systems for growing teams." },
        { icon: Briefcase, title: "Family Business", desc: "Governance, succession planning, and professionalization of legacy businesses." },
        { icon: Globe, title: "Market & Policy", desc: "Regulatory analysis and policy risk assessment for informed strategic decisions." }
    ];

    return (
        <div className="min-h-screen bg-[#F5F2ED] text-[#13231F] antialiased">
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=JetBrains+Mono:wght@500&display=swap');
                    
                    .font-heading { font-family: 'Playfair Display', serif; }
                    .font-body { font-family: 'Hanken Grotesk', sans-serif; }
                    .font-mono { font-family: 'JetBrains Mono', monospace; }
                    
                    /* Global base font size adjustment for desktop, stays default for mobile */
                    @media (min-width: 1024px) {
                        html { font-size: 18px; } 
                    }
                `}
            </style>

            <Navbar />

            {/* --- HERO: BOLD & LARGE --- */}
            <header className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-3 text-[#004b33] font-mono text-[10px] md:text-sm uppercase tracking-[0.3em] mb-8 md:mb-12 hover:gap-5 transition-all font-bold"
                >
                    <ArrowLeft size={18} /> Back
                </button>

                <div className="space-y-6 md:space-y-10">
                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-black font-bold">
                        Practice Area // 01
                    </span>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-heading font-bold tracking-tight leading-[1.1] text-black">
                        Business <br className="hidden sm:block" />
                        <span className="italic font-normal text-[#004b33]">Consulting.</span>
                    </h1>
                    <p className="font-body text-xl md:text-3xl font-light text-black/70 max-w-3xl leading-snug">
                        Practical strategy for growing businesses in Nepal. We help founders make clear decisions and fix execution gaps.
                    </p>
                </div>
            </header>

            {/* --- 01.0 WHAT WE DO: BOLD GRID --- */}
            <section className="bg-white border-y border-black/10">
                <div className="px-6 md:px-12 lg:px-24 py-8 md:py-12 border-b border-black/5 flex justify-between items-center bg-[#FDFCFB]">
                    <span className="font-mono text-[10px] md:text-sm uppercase tracking-[0.4em] text-black font-bold">01.0 / What We Do</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((item, i) => (
                        <div key={i} className="group p-8 md:p-12 border-b border-black/5 md:border-r last:border-b-0 lg:[&:nth-child(3n)]:border-r-0 transition-all duration-500 hover:bg-[#13231F]">
                            <div className="flex flex-col h-full">
                                <item.icon size={32} strokeWidth={1.5} className="text-[#004b33] group-hover:text-white transition-colors mb-8 md:mb-12" />
                                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 md:mb-6 group-hover:text-white transition-colors">
                                    {item.title}
                                </h3>
                                <p className="font-body text-base md:text-lg font-light text-black/60 group-hover:text-white/70 leading-relaxed">
                                    {item.desc}
                                </p>
                                <div className="mt-8 md:mt-12 pt-6 border-t border-black/5 group-hover:border-white/10">
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#004b33] group-hover:text-white">Expertise // 0{i + 1}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- 02.0 APPROACH: LEGIBLE & STRONG --- */}
            <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start">
                    <div>
                        <span className="font-mono text-[10px] md:text-sm uppercase tracking-[0.4em] text-black font-bold block mb-6 md:mb-10">02.0 / Our Approach</span>
                        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight">
                            Consulting that <span className="italic font-normal text-[#004b33]">actually works.</span>
                        </h2>
                        <p className="font-body text-lg md:text-xl text-black/70 leading-relaxed mb-6 md:mb-10">
                            We don’t deliver slide decks that sit on shelves. Our work is grounded in Nepal’s regulatory environment, capital constraints, and operational realities.
                        </p>
                    </div>

                    <div className="space-y-4 md:space-y-8 lg:pt-20">
                        {[
                            "Understanding of local markets and institutions",
                            "Direct access to senior consultants, not juniors",
                            "Actionable recommendations with clear steps",
                            "Alignment with promoters and management"
                        ].map((text, i) => (
                            <div key={i} className="flex gap-4 md:gap-6 p-6 md:p-8 bg-white border border-black/5 hover:border-[#004b33] transition-all group">
                                <span className="font-mono text-lg md:text-xl text-[#004b33] font-bold">0{i + 1}</span>
                                <p className="font-body text-sm md:text-lg font-bold uppercase tracking-wider text-black group-hover:text-[#004b33]">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 03.0 FOCUS SECTORS --- */}
            <section className="bg-[#13231F] py-20 md:py-32 px-6 md:px-12 lg:px-24 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 md:mb-20">
                        <span className="font-mono text-[10px] md:text-sm uppercase tracking-[0.4em] text-white/40 font-bold block mb-4 md:mb-6">03.0 / Focus Sectors</span>
                        <h2 className="font-heading text-4xl md:text-7xl font-bold italic">Industries We Work With</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {["Hydropower & Energy", "Manufacturing & Trading", "Tourism & Hospitality", "Banking & Financial Services", "Startups & Technology", "Infrastructure & Real Estate"].map((sector, i) => (
                            <div key={i} className="border-l-2 border-[#004b33] pl-6 md:pl-8 py-2 md:py-4">
                                <h3 className="font-heading text-xl md:text-3xl font-light">{sector}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CALL TO ACTION: COMMANDING --- */}
            <section className="py-24 md:py-40 px-6 text-center bg-white border-t border-black/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-heading text-5xl md:text-8xl font-bold mb-6 md:mb-10 text-black tracking-tight">
                        Let’s talk.
                    </h2>
                    <p className="font-body text-lg md:text-2xl text-black/60 mb-10 md:mb-16 max-w-2xl mx-auto font-light">
                        Whether you’re planning growth, restructuring, or a major decision, we’ll help you move forward.
                    </p>
                    <button
                        onClick={() => navigate('/consultation')}
                        className="group relative inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-12 bg-[#13231F] text-white px-8 sm:px-16 py-6 sm:py-8 hover:bg-[#004b33] transition-all overflow-hidden w-full sm:w-auto"
                    >
                        <span className="font-mono text-xs md:text-sm uppercase tracking-[0.5em] font-bold relative z-10">Start a Conversation</span>
                        <Zap size={20} className="relative z-10 group-hover:scale-125 transition-transform hidden sm:block" fill="currentColor" />
                    </button>
                </div>
            </section>
        </div>
    );
}