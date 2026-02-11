'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Send, Zap } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const ProposalPage = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const fadeIn = {
        initial: { opacity: 0, y: 15 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: "easeOut" }
    };

    return (
        <div className="min-h-screen bg-[#F5F2ED] text-[#13231F] font-serif overflow-x-hidden relative">
            <Navbar />

            {/* EYE-CATCHING FLOATING ACTION BUTTON */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[120] pointer-events-none"
            >
                <Link
                    to="/volunteer"
                    className="pointer-events-auto relative group flex items-center justify-center h-28 w-28 md:h-32 md:w-32 transition-all active:scale-95"
                    onMouseEnter={() => setHoveredId('fab')}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    {/* Pulsing Outer Ring for Attention */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-[#2D5A43] z-0"
                    />

                    {/* Main Button Body */}
                    <div className="absolute inset-2 rounded-full bg-[#13231F] shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-white/10 z-10 transition-transform duration-500 group-hover:scale-105" />

                    {/* Animated SVG Border */}
                    <div className="absolute inset-0 z-20 p-[2px]">
                        <svg viewBox="0 0 100 100" className="w-full h-full rotate-[-90deg]">
                            <motion.circle
                                cx="50" cy="50" r="48" fill="none" stroke="#F5F2ED" strokeWidth="2"
                                strokeDasharray="302"
                                initial={{ strokeDashoffset: 302 }}
                                animate={{ strokeDashoffset: hoveredId === 'fab' ? 0 : 250 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="opacity-80"
                            />
                        </svg>
                    </div>

                    {/* Content */}
                    <div className="relative z-30 flex flex-col items-center text-[#F5F2ED]">
                        <motion.div
                            animate={{ y: hoveredId === 'fab' ? -3 : 0 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Send size={24} className="mb-1 text-[#EAE6DF]" />
                        </motion.div>
                        <span className="text-[10px] md:text-[11px] font-sans font-black uppercase tracking-[0.1em] text-center leading-tight">
                            Join The<br /><span className="text-[#2D5A43]">Cohort</span>
                        </span>
                    </div>
                </Link>
            </motion.div>

            {/* HERO SECTION */}
            <section className="pt-44 pb-20 px-8 lg:px-20 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    <motion.div {...fadeIn} className="lg:col-span-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-8 h-[1px] bg-[#2D5A43]"></span>
                            <span className="font-sans font-bold tracking-[0.2em] text-xs uppercase text-[#2D5A43]">Agenda Setting / 2082-83</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6">
                            Beyond Voting: <br /><span className="italic font-light">The Agenda Cohort</span>
                        </h1>
                        <p className="font-sans text-sm tracking-widest uppercase font-bold opacity-60 mb-10">
                            Largest Grassroots Agenda-Setting Exercise for Nepal
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-[11px] font-bold uppercase tracking-wider opacity-60 border-t border-[#13231F]/10 pt-8">
                            <div className="flex items-center gap-3"><Calendar size={14} /> Magh – Falgun 2082</div>
                            <div className="flex items-center gap-3"><MapPin size={14} /> Nationwide (7 Provinces)</div>
                            <div className="flex items-center gap-3"><Zap size={14} /> Election Focus Edition</div>
                        </div>
                    </motion.div>

                    <motion.div {...fadeIn} className="lg:col-span-4 lg:pt-24 flex lg:justify-end">
                        <Link to="/agenda" className="bg-[#13231F] text-[#F5F2ED] px-10 py-8 rounded-full font-bold uppercase text-[12px] tracking-widest flex items-center gap-4 hover:bg-[#2D5A43] transition-all group shadow-xl">
                            Set Your Agenda <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* SUB-HEADLINE & INTRO SECTION */}
            <section className="py-24 px-8 lg:px-20 max-w-7xl mx-auto border-t border-[#13231F]/10">
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <h2 className="text-sm font-sans font-black uppercase tracking-[0.3em] text-[#2D5A43]">The Mandate</h2>
                    </div>
                    <div className="lg:col-span-8 space-y-6">
                        <h3 className="text-4xl md:text-5xl font-serif italic leading-tight text-[#13231F]">
                            Democracy Doesn't End at the Ballot Box.
                        </h3>
                        <p className="font-sans text-xl leading-relaxed opacity-80 text-justify">
                            Policy is often decided in closed rooms, far from your reality. We are changing that. Beyond Voting is Nepal’s permanent platform for citizen-led agenda setting—ensuring that governance is shaped by the people, 365 days a year.
                        </p>
                    </div>
                </div>
            </section>

            {/* THE VISION SECTION */}
            <section className="py-32 px-8 lg:px-20 bg-[#13231F] text-[#F5F2ED]">
                <div className="max-w-7xl mx-auto">
                    <span className="text-xl font-sans font-bold uppercase tracking-[0.4em] opacity-80 block mb-10">The Vision</span>
                    <h3 className="text-4xl md:text-6xl font-serif italic mb-16 leading-tight">From Top-Down to Ground-Up</h3>

                    <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
                        <div className="space-y-4">
                            <h4 className="text-[#ffffff] font-sans font-black uppercase tracking-widest text-[10px]">The Problem</h4>
                            <p className="opacity-70 text-lg">Governance fails when it ignores the lived experience of citizens across Nepal’s diverse geography.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-[#ffffff] font-sans font-black uppercase tracking-widest text-[10px]">Our Solution</h4>
                            <p className="opacity-70 text-lg">We capture grassroots priorities to drive real policy decisions—not just during elections, but every day.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-[#ffffff] font-sans font-black uppercase tracking-widest text-[10px]">The Outcome</h4>
                            <p className="opacity-70 text-lg">A credible, public framework that political leaders cannot ignore.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS SECTION */}
            <section className="py-24 px-8 lg:px-20 max-w-7xl mx-auto">
                <h2 className="text-sm font-sans font-black uppercase tracking-[0.3em] text-[#2D5A43] mb-16">How It Works: Your Role in Governance</h2>
                <div className="grid lg:grid-cols-3 gap-12">
                    {[
                        { step: "01", title: "Submit Your Agenda", desc: "Identify critical issues in your community." },
                        { step: "02", title: "We Consolidate", desc: "We aggregate data nationwide to build a 'Citizen’s Mandate.'" },
                        { step: "03", title: "We Impact Policy", desc: "We use this mandate to guide policy discourse and monitor government performance." }
                    ].map((item, i) => (
                        <div key={i} className="p-10 border border-[#13231F]/10 rounded-2xl hover:bg-[#EAE6DF] transition-colors group">
                            <span className="text-[10px] font-sans font-black text-[#2D5A43] mb-4 block opacity-40">{item.step}</span>
                            <h4 className="font-serif text-2xl italic mb-4">{item.title}</h4>
                            <p className="font-sans text-sm opacity-60 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONCLUSION & CTA */}
            <section className="py-40 px-8 lg:px-20 max-w-4xl mx-auto text-center">
                <h3 className="text-4xl md:text-5xl font-serif italic mb-12 leading-tight text-[#13231F]">
                    Be part of the solution. Let us build a government that truly listens.
                </h3>
                <Link to="/agenda" className="bg-[#13231F] text-[#F5F2ED] px-12 py-8 rounded-full font-bold uppercase text-xs tracking-[0.3em] hover:bg-[#2D5A43] transition-all group shadow-2xl inline-flex items-center gap-4 mb-16">
                    Set Your Agenda <ArrowRight size={18} />
                </Link>

                <p className="font-sans text-[10px] italic opacity-50 uppercase tracking-[0.2em] leading-loose max-w-2xl mx-auto">
                    An initiative by StratBridge Partners to bridge the gap between citizens and governance, which is executed in collaboration with partner entities across Nepal.
                </p>
            </section>
        </div>
    );
};

export default ProposalPage;