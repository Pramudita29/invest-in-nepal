'use client';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowLeft,
    ArrowRight,
    Briefcase,
    CheckCircle2,
    Gavel,
    Globe,
    PhoneCall,
    Scale,
    ShieldCheck,
    X
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function StrategyPolicyAdvisory() {
    const mainRef = useRef(null);
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // --- SANITY DATA FETCH ---
    useEffect(() => {
        const fetchAdvisoryContent = async () => {
            try {
                const response = await fetch(
                    `https://32iguwoj.api.sanity.io/v2025-01-01/data/query/production?query=*%5B_type%20%3D%3D%20%22article%22%20%26%26%20(category%20match%20%22Policy%22%20%7C%7C%20category%20match%20%22Startup%22)%5D%20%7C%20order(date%20desc)%5B0...4%5D`
                );
                const data = await response.json();
                setArticles(data.result || []);
            } catch (error) {
                console.error("Error loading advisory content:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAdvisoryContent();
    }, []);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!loading) {
                gsap.from(".hero-content", { y: 30, opacity: 0, duration: 1.2, ease: "power3.out" });
                gsap.from(".hero-image", { clipPath: "inset(0 0 100% 0)", duration: 1.5, ease: "expo.inOut", delay: 0.2 });
            }
        }, mainRef);
        return () => ctx.revert();
    }, [loading]);

    if (loading) return (
        <div className="min-h-screen bg-[#F5F2ED] flex items-center justify-center text-[#004b33] font-mono text-[10px] uppercase tracking-[0.5em]">
            Initializing Protocol...
        </div>
    );

    return (
        <div ref={mainRef} className="min-h-screen bg-[#F5F2ED] text-[#13231F] font-serif overflow-x-hidden">
            <style>{`
                .font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>

            <Navbar />

            {/* === CLEAN EDITORIAL HERO === */}
            <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-8 border-b border-[#13231F]/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7 hero-content">
                        <button
                            onClick={() => navigate(-1)}
                            className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#004b33] mb-12 flex items-center gap-3 hover:opacity-60 transition-opacity font-bold"
                        >
                            <ArrowLeft size={16} /> Return to Hub
                        </button>

                        <h1 className="text-6xl md:text-8xl font-serif tracking-tighter leading-tight lowercase mb-8">
                            Strategic <span className="italic text-[#004b33]">Analysis</span> <br />
                            & Policy Advisory.
                        </h1>

                        <p className="text-xl font-light italic text-[#13231F]/60 max-w-xl leading-relaxed border-l border-[#004b33]/20 pl-8">
                            "In an emerging market, policy is the blueprint; strategy is the execution. We navigate both to scale your venture."
                        </p>
                    </div>

                    <div className="lg:col-span-5 hero-image">
                        <div className="aspect-[4/5] bg-[#13231F] relative overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000"
                                alt="Institutional Architecture"
                                className="w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#13231F]/40 to-transparent" />
                        </div>
                    </div>
                </div>
            </header>

            {/* === POLICY SNAPSHOT SECTION === */}
            <section className="py-32 px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-20 items-start">
                    <div className="lg:sticky lg:top-32">
                        <h2 className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#004b33] mb-6 font-bold italic">Frameworks</h2>
                        <h3 className="text-4xl font-serif italic mb-8 lowercase leading-tight">Nepal Regulatory Snapshot</h3>
                        <p className="text-[#13231F]/60 mb-10 text-sm leading-relaxed italic">Understanding the intersection of these legislative pillars is critical for foreign capital entry and startup scaling.</p>
                        <button
                            onClick={() => setIsMapOpen(true)}
                            className="group flex items-center gap-6 bg-[#004b33] text-[#F5F2ED] px-8 py-4 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-[#13231F] transition-all"
                        >
                            <Globe size={16} /> View Policy Map
                        </button>
                    </div>

                    <div className="lg:col-span-2 space-y-4">
                        {[
                            { title: "FITTA (2019)", tags: ["Foreign Capital", "FDI Route"], detail: "The Foreign Investment and Technology Transfer Act provides the legal basis for FDI. It defines the 'Negative List' and the new automatic approval thresholds." },
                            { title: "Startup Policy (2080)", tags: ["Tax Holidays", "Seed Capital"], detail: "A landmark framework providing a legal definition for startups, focusing on turnover under NPR 20M and offering subsidized loan schemes." },
                            { title: "Foreign Exchange Act", tags: ["Repatriation", "NRB"], detail: "Governs the flow of foreign currency. Critical for understanding dividend repatriation and foreign loan approvals via the Central Bank." }
                        ].map((item, i) => (
                            <div key={i} className="group p-10 border border-[#13231F]/5 bg-white hover:bg-[#F5F2ED] transition-all duration-500">
                                <div className="flex gap-4 mb-6">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="font-mono text-[9px] uppercase tracking-widest text-[#004b33] font-bold border-b border-[#004b33]/20">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-serif italic mb-4 group-hover:text-[#004b33] transition-colors">{item.title}</h3>
                                <p className="text-[#13231F]/50 text-sm leading-relaxed font-sans">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === ANALYSIS MATRIX SECTION === */}
            <section className="py-32 px-8 bg-white border-y border-[#13231F]/5">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#004b33] mb-4 font-bold">Deep Dive</h2>
                        <h3 className="text-5xl font-serif italic lowercase tracking-tight">Expert Analysis Matrix</h3>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-1 bg-[#13231F]/5">
                        <div className="bg-white p-12 md:p-16">
                            <div className="w-14 h-14 bg-[#F5F2ED] text-[#004b33] flex items-center justify-center mb-10"><Gavel size={28} /></div>
                            <h4 className="text-3xl font-serif italic mb-6">The Automatic Route Shift</h4>
                            <p className="text-[#13231F]/60 mb-10 leading-relaxed italic border-l-2 border-[#004b33] pl-6 font-sans">
                                "Recent amendments to FITTA have introduced an Automatic Approval Route for investments under NPR 500 Million in IT and Manufacturing."
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4 text-sm text-[#13231F]/70 font-sans"><CheckCircle2 size={18} className="text-[#004b33] shrink-0" /> Reduced approval lead time from 4 months to 7 days.</li>
                                <li className="flex items-start gap-4 text-sm text-[#13231F]/70 font-sans"><CheckCircle2 size={18} className="text-[#004b33] shrink-0" /> Digitized application flow via the Department of Industry.</li>
                            </ul>
                        </div>

                        <div className="bg-white p-12 md:p-16">
                            <div className="w-14 h-14 bg-[#F5F2ED] text-[#004b33] flex items-center justify-center mb-10"><Scale size={28} /></div>
                            <h4 className="text-3xl font-serif italic mb-6">IPR & Software Patenting</h4>
                            <p className="text-[#13231F]/60 mb-10 leading-relaxed italic border-l-2 border-[#004b33] pl-6 font-sans">
                                "Nepal is transitioning toward a new Industrial Property Act to align with global WIPO software protection standards."
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4 text-sm text-[#13231F]/70 font-sans"><CheckCircle2 size={18} className="text-[#004b33] shrink-0" /> New fast-track trademarking for tech-registered startups.</li>
                                <li className="flex items-start gap-4 text-sm text-[#13231F]/70 font-sans"><CheckCircle2 size={18} className="text-[#004b33] shrink-0" /> Enhanced enforcement mechanisms for algorithm theft.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* === RECENT INTELLIGENCE (Using the 'articles' data) === */}
            {articles.length > 0 && (
                <section className="py-32 px-8 max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#004b33] mb-4 font-bold">Policy Briefings</h2>
                            <h3 className="text-4xl font-serif italic lowercase">Recent Intelligence</h3>
                        </div>
                        <Link to="/insights" className="font-mono text-[10px] uppercase tracking-widest text-[#004b33] border-b border-[#004b33] pb-1">View Archive</Link>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {articles.map((article) => (
                            <Link key={article._id} to={`/insights/${article.slug?.current}`} className="group block">
                                <div className="mb-6 h-[1px] w-full bg-[#13231F]/10 group-hover:bg-[#004b33] transition-colors" />
                                <p className="font-mono text-[9px] uppercase tracking-widest text-[#004b33] mb-3">{article.category}</p>
                                <h4 className="text-xl font-serif italic leading-snug group-hover:text-[#004b33] transition-colors">{article.title}</h4>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* === INSTITUTIONAL FOOTER === */}
            <footer className="bg-[#13231F] py-32 px-8 text-center">
                <div className="max-w-3xl mx-auto">
                    <Briefcase className="w-10 h-10 text-[#ffffff] mx-auto mb-10" />
                    <h2 className="text-5xl md:text-7xl font-serif text-[#F5F2ED] italic lowercase mb-8 tracking-tighter">
                        Build your <span className="not-italic text-[#fffff]">Legacy.</span>
                    </h2>
                    <p className="text-[#F5F2ED]/40 text-lg mb-12 font-light italic leading-relaxed">
                        Our strategic intelligence bridges the gap between vision and regulation.
                        Build your venture on a foundation of protocol.
                    </p>
                    <Link
                        to="/consultation"
                        className="inline-flex items-center gap-6 bg-[#004b33] text-[#F5F2ED] px-12 py-6 font-mono text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#F5F2ED] hover:text-[#13231F] transition-all"
                    >
                        Request Protocol Briefing <ArrowRight size={18} />
                    </Link>
                </div>
            </footer>

            {/* === POLICY MAP MODAL === */}
            {isMapOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#13231F]/95 backdrop-blur-md">
                    <div className="relative w-full max-w-6xl bg-[#F5F2ED] rounded-none overflow-hidden shadow-2xl border border-[#004b33]/20">
                        <button onClick={() => setIsMapOpen(false)} className="absolute top-6 right-6 p-3 bg-[#13231F] text-[#F5F2ED] hover:bg-[#004b33] transition-all z-20">
                            <X size={20} />
                        </button>
                        <div className="p-12 md:p-20 overflow-y-auto max-h-[90vh] no-scrollbar">
                            <h2 className="text-4xl md:text-6xl font-serif italic mb-12 lowercase">Regulatory <span className="text-[#004b33] not-italic">Lifecycle</span></h2>
                            <div className="grid md:grid-cols-3 gap-px bg-[#13231F]/10 border border-[#13231F]/10">
                                {[
                                    { step: "01", title: "Pre-Approval", body: "Securing initial foreign investment sanction from DOI/IBN.", icon: <Gavel size={24} /> },
                                    { step: "02", title: "Formalization", body: "Registration at OCR and recording capital entry with Nepal Rastra Bank.", icon: <Scale size={24} /> },
                                    { step: "03", title: "Operations", body: "Bi-annual compliance audits and technology transfer fee settlements.", icon: <ShieldCheck size={24} /> }
                                ].map((item, i) => (
                                    <div key={i} className="p-12 bg-white group hover:bg-[#F5F2ED] transition-colors text-left">
                                        <div className="w-12 h-12 bg-[#F5F2ED] text-[#004b33] group-hover:bg-[#004b33] group-hover:text-white flex items-center justify-center mb-8 transition-colors">
                                            {item.icon}
                                        </div>
                                        <h4 className="font-serif italic text-2xl mb-4 lowercase">{item.title}</h4>
                                        <p className="text-sm text-[#13231F]/50 leading-relaxed font-sans">{item.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Action */}
            <Link to="/contact" className="fixed bottom-8 right-8 w-14 h-14 bg-[#004b33] text-[#F5F2ED] rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-transform">
                <PhoneCall size={20} />
            </Link>
        </div>
    );
}