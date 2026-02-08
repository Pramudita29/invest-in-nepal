'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle2, MapPin, Send, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const ProposalPage = () => {
    const [hoveredId, setHoveredId] = useState(null);
    const [showFab, setShowFab] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowFab(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fadeIn = {
        initial: { opacity: 0, y: 15 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: "easeOut" }
    };

    return (
        <div className="min-h-screen bg-[#F5F2ED] text-[#13231F] font-serif overflow-x-hidden relative">
            <Navbar />

            {/* SUBTLE FLOATING ACTION BUTTON */}
            <AnimatePresence>
                {showFab && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-10 right-10 z-[120] pointer-events-none"
                    >
                        <Link
                            to="/agenda"
                            className="pointer-events-auto relative group flex items-center justify-center h-24 w-24 transition-all active:scale-95"
                            onMouseEnter={() => setHoveredId('fab')}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="absolute inset-0 rounded-full bg-[#F5F2ED] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#13231F]/5 z-0" />
                            <div className="absolute inset-0 z-10 p-[1px]">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <circle cx="50" cy="50" r="48.5" fill="none" stroke="#13231F" strokeWidth="1" className="opacity-10" />
                                    <motion.circle
                                        cx="50" cy="50" r="48.5" fill="none" stroke="#2D5A43" strokeWidth="1.5"
                                        strokeDasharray="305"
                                        initial={{ strokeDashoffset: 305 }}
                                        animate={{ strokeDashoffset: hoveredId === 'fab' ? 0 : 260 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </svg>
                            </div>
                            <div className="relative z-20 flex flex-col items-center">
                                <Send size={18} className="mb-1 text-[#2D5A43]" />
                                <span className="text-[9px] font-sans font-bold uppercase tracking-[0.15em] text-center leading-tight">Join The<br />Cohort</span>
                            </div>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* HERO SECTION */}
            <section className="pt-44 pb-20 px-8 lg:px-20 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    <motion.div {...fadeIn} className="lg:col-span-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-8 h-[1px] bg-[#2D5A43]"></span>
                            <span className="font-sans font-bold tracking-[0.2em] text-xs uppercase text-[#2D5A43]">Proposal / 2082</span>
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

            {/* 1. BACKGROUND AND RATIONALE */}
            <section className="py-24 px-8 lg:px-20 max-w-7xl mx-auto border-t border-[#13231F]/10">
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <h2 className="text-sm font-sans font-black uppercase tracking-[0.3em] text-[#2D5A43]">01. Background & Rationale</h2>
                    </div>
                    <div className="lg:col-span-8 space-y-6 font-sans text-lg leading-relaxed opacity-80 text-justify">
                        <p>Nepal stands at a critical democratic moment. With the upcoming election scheduled for Falgun 21, 2082 (March 5, 2026), political parties are finalising their manifestos and campaign agendas. Historically, election agendas in Nepal have largely been shaped by top-level political leadership or a narrow group of experts—often concentrated in Kathmandu. While influential, these processes have frequently failed to capture the lived realities, priorities, and aspirations of citizens across Nepal’s diverse geography and social landscape.</p>
                        <p>This structural gap between citizens and agenda-setting weakens democratic ownership, reduces public trust, and limits the effectiveness of governance after elections. Voting alone, without meaningful participation in defining what is being voted on, constrains the promise of democracy.</p>
                        <p className="italic font-serif text-2xl text-[#13231F] py-6 border-l-2 border-[#2D5A43] pl-8">
                            "Beyond Voting: The Agenda Cohort is conceived as a response to this challenge."
                        </p>
                        <p>It is designed as a long-term, institutionalised platform for citizen-led agenda formation, one that extends beyond a single election cycle. While its immediate focus in 2082 is to inform election agendas, the Cohort is intentionally structured to remain active beyond elections, enabling continuous democratic dialogue between citizens and political actors.</p>
                    </div>
                </div>
            </section>

            {/* 2. VISION */}
            <section className="py-32 px-8 lg:px-20 bg-[#13231F] text-[#F5F2ED]">
                <div className="max-w-7xl mx-auto">
                    <span className="text-xs font-sans font-bold uppercase tracking-[0.4em] opacity-40 block mb-10">02. Vision</span>
                    <h3 className="text-3xl md:text-5xl font-serif italic max-w-5xl leading-tight">
                        To institutionalise a citizen-driven process of agenda-setting in Nepal, ensuring that public priorities, articulated from the grassroots, shape electoral discourse, policy commitments, and governance beyond elections.
                    </h3>
                </div>
            </section>

            {/* 3. OBJECTIVES */}
            <section className="py-24 px-8 lg:px-20 max-w-7xl mx-auto">
                <h2 className="text-sm font-sans font-black uppercase tracking-[0.3em] text-[#2D5A43] mb-16">03. Objectives</h2>
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                    {[
                        "Democratise the process of agenda-setting in elections",
                        "Capture grassroots priorities across diverse contexts",
                        "Bridge the gap between lived realities and political manifestos",
                        "Provide a credible, people-driven framework for candidates",
                        "Strengthen public trust and ownership in the democratic process",
                        "Establish a replicable model that can continue beyond 2082"
                    ].map((obj, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                            <CheckCircle2 className="text-[#2D5A43] mt-1 shrink-0" size={20} />
                            <p className="font-sans text-[15px] font-medium leading-relaxed opacity-80 uppercase tracking-wide group-hover:opacity-100 transition-opacity">{obj}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. UVP */}
            <section className="py-24 px-8 lg:px-20 bg-[#EAE6DF]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-sm font-sans font-black uppercase tracking-[0.3em] text-[#2D5A43] mb-16">04. Unique Value Proposition</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { t: "Beyond Elections", d: "Designed as a long-term civic infrastructure, not a one-time election project." },
                            { t: "Nationwide Reach", d: "Hybrid digital and physical methodology ensuring inclusion of all communities." },
                            { t: "Bottom-Up Formation", d: "Priorities emerge organically from citizens, without pre-defined agendas." },
                            { t: "Action-Oriented", d: "Translates citizen inputs into clear, adoptable agenda and policy points." },
                            { t: "Non-Partisan", d: "Independent of political parties, grounded in democratic integrity." },
                            { t: "Validation-Led", d: "Citizens are involved not only in input, but in validating synthesis." }
                        ].map((item, i) => (
                            <div key={i} className="space-y-3">
                                <h4 className="font-serif text-xl italic">{item.t}</h4>
                                <p className="font-sans text-sm opacity-60 leading-relaxed text-justify">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. METHODOLOGY */}
            <section className="py-24 px-8 lg:px-20 max-w-7xl mx-auto">
                <h2 className="text-sm font-sans font-black uppercase tracking-[0.3em] text-[#2D5A43] mb-16">05. Methodology</h2>
                <div className="grid lg:grid-cols-3 gap-16 font-sans text-[15px]">
                    <div className="space-y-6">
                        <h4 className="font-black text-xs uppercase tracking-widest opacity-40">Digital Engagement</h4>
                        <ul className="space-y-4 opacity-70">
                            <li><strong className="text-[#13231F]">Mobile Surveys:</strong> Optimized for smartphone users.</li>
                            <li><strong className="text-[#13231F]">Low-Bandwidth:</strong> SMS and WhatsApp for remote regions.</li>
                            <li><strong className="text-[#13231F]">Ranking Tools:</strong> Prioritizing concerns by urgency.</li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="font-black text-xs uppercase tracking-widest opacity-40">Physical Engagement</h4>
                        <ul className="space-y-4 opacity-70">
                            <li><strong className="text-[#13231F]">Dialogues:</strong> Discussions with workers, youth, and farmers.</li>
                            <li><strong className="text-[#13231F]">Volunteer Network:</strong> Local youth for door-to-door visits.</li>
                            <li><strong className="text-[#13231F]">Town Halls:</strong> Provincial and district hub consultations.</li>
                        </ul>
                    </div>
                    <div className="bg-[#13231F] p-10 rounded-2xl text-[#F5F2ED] shadow-xl">
                        <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest opacity-40 mb-6">The Validation Loop</h4>
                        <p className="font-serif text-lg italic opacity-90 leading-relaxed">
                            "Drafted points are shared back through radio and meetings. Feedback ensures the synthesis reflects citizen intent and avoids bias."
                        </p>
                    </div>
                </div>
            </section>

            {/* 6. THEMATIC AREAS */}
            <section className="py-24 px-8 lg:px-20 bg-[#13231F] text-[#F5F2ED]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-xs font-sans font-bold uppercase tracking-[0.4em] opacity-40 mb-12">06. Key Thematic Areas</h2>
                    <p className="font-sans text-sm opacity-60 mb-12 max-w-2xl">While the process remains open-ended, the Cohort monitors and clusters inputs across key governance sectors. Indicative themes include:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Employment', 'Cost of Living', 'Agriculture', 'Infrastructure', 'Governance', 'Federalism', 'Youth Migration', 'Opportunities'].map((item) => (
                            <div key={item} className="p-8 border border-white/10 text-center font-sans font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-[#2D5A43] transition-all">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7 & 8. OUTPUTS & IMPACT */}
            <section className="py-24 px-8 lg:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 border-b border-[#13231F]/10">
                <div className="space-y-10">
                    <h2 className="text-sm font-sans font-black uppercase tracking-[0.3em] text-[#2D5A43]">07. Expected Outputs</h2>
                    <div className="space-y-6">
                        <h5 className="font-serif italic text-3xl">The People’s Election Agenda 2082</h5>
                        <ul className="font-sans text-sm space-y-3 opacity-60">
                            <li>• Nationally synthesised agenda document</li>
                            <li>• Issue-wise and region-wise priority briefs</li>
                            <li>• Data-backed insights for political parties</li>
                            <li>• Transparency dashboards for accountability</li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-10">
                    <h2 className="text-sm font-sans font-black uppercase tracking-[0.3em] text-[#2D5A43]">08. Intended Impact</h2>
                    <div className="space-y-6">
                        <ul className="space-y-4 font-sans text-sm opacity-70">
                            <li className="border-l-2 border-[#2D5A43] pl-6">Meaningfully shape political and electoral discourse.</li>
                            <li className="border-l-2 border-[#2D5A43] pl-6">Encourage parties to adopt evidence-based agendas.</li>
                            <li className="border-l-2 border-[#2D5A43] pl-6">Improve alignment between promises and governance.</li>
                            <li className="border-l-2 border-[#2D5A43] pl-6">Establish a participatory and inclusive democratic norm.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 9. BEYOND THE ELECTION */}
            <section className="py-24 px-8 lg:px-20 bg-[#EAE6DF]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-sm font-sans font-black uppercase tracking-[0.3em] text-[#2D5A43] mb-12">09. Beyond the Election</h2>
                    <p className="font-serif text-2xl italic leading-relaxed mb-12 text-[#13231F] text-center">
                        "A permanent democratic mechanism tracking the alignment between adopted agendas and government action."
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 font-sans text-xs font-bold uppercase tracking-widest opacity-60">
                        <div className="p-8 bg-white/50 rounded-lg">Issue-specific cohorts between cycles</div>
                        <div className="p-8 bg-white/50 rounded-lg">Civic repository of public priorities</div>
                    </div>
                </div>
            </section>

            {/* 10. CONCLUSION */}
            <section className="py-40 px-8 lg:px-20 max-w-4xl mx-auto text-center">
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-[#2D5A43] mb-10 block">10. Conclusion</span>
                <p className="font-serif text-xl md:text-2xl italic mb-12 leading-relaxed text-justify opacity-90">
                    Beyond Voting: The Agenda Cohort represents a shift from episodic participation to sustained democratic engagement. At a time when public trust is fragile, this effort offers a credible model for strengthening Nepal’s democracy.
                </p>
                <h3 className="text-4xl md:text-6xl font-serif italic mb-16 leading-tight text-[#13231F] tracking-tighter">
                    How do we act on it <br /> beyond the vote?
                </h3>
                <Link to="/agenda" className="bg-[#13231F] text-[#F5F2ED] px-12 py-8 rounded-full font-bold uppercase text-xs tracking-[0.3em] hover:bg-[#2D5A43] transition-all group shadow-2xl inline-flex items-center gap-4">
                    Submit Your Agenda <ArrowRight size={18} />
                </Link>
            </section>

            <footer className="py-12 border-t border-[#13231F]/5 px-8 text-center opacity-40 text-[10px] font-sans font-bold uppercase tracking-[0.3em]">
                Beyond Voting: The Agenda Cohort © 2082 / Institutionalized by Stratbridge
            </footer>
        </div>
    );
};

export default ProposalPage;