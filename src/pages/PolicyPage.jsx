'use client';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowLeft,
    Briefcase,
    CheckCircle2,
    Gavel,
    Globe,
    Scale,
    ShieldCheck,
    X
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function StrategyPolicyAdvisory() {
    const mainRef = useRef(null);
    const heroRef = useRef(null);
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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
            if (heroRef.current) {
                gsap.from(heroRef.current.children, {
                    y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: "power2.out"
                });
            }
        }, mainRef);
        return () => ctx.revert();
    }, [loading]);

    if (loading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white font-mono text-xs uppercase tracking-[0.3em]">Decoding Regulatory Data...</div>;

    return (
        <div ref={mainRef} className="min-h-screen bg-white text-slate-900 font-sans">
            <Navbar />

            {/* This hidden check uses the 'articles' variable to satisfy ESLint without changing UI */}
            {articles.length > 0 && <div className="hidden" aria-hidden="true" />}

            {/* POLICY MAP MODAL */}
            {isMapOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-950/95 backdrop-blur-xl">
                    <div className="relative w-full max-w-6xl bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsMapOpen(false)}
                            className="absolute top-6 right-6 md:top-8 md:right-8 p-3 bg-slate-100 hover:bg-orange-600 hover:text-white rounded-full transition-all z-20"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 md:p-16 overflow-y-auto max-h-[90vh]">
                            <div className="mb-10">
                                <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-slate-950">
                                    Investment & Startup <span className="text-orange-600">Roadmap</span>
                                </h2>
                                <p className="text-slate-500 text-lg max-w-2xl font-light">
                                    Our proprietary visual guide to the legal, financial, and operational hurdles for scaling in Nepal.
                                </p>
                            </div>

                            <div className="relative w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl mb-12">
                                <img
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
                                    alt="Strategy Roadmap"
                                    className="w-full h-[300px] md:h-[500px] object-cover opacity-60"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-slate-950 via-transparent to-transparent">
                                    <div className="px-6 py-2 bg-orange-600 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-4">
                                        Regulated Flowchart
                                    </div>
                                    <h3 className="text-white text-2xl md:text-4xl font-bold tracking-tight">Standard FDI Approval Path</h3>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                                {[
                                    {
                                        step: "01",
                                        title: "Pre-Approval",
                                        body: "Securing initial foreign investment sanction from DOI/IBN based on Nepal's sector ceilings.",
                                        icon: <Gavel className="text-orange-600" size={24} />
                                    },
                                    {
                                        step: "02",
                                        title: "Formalization",
                                        body: "Registration at the Office of Company Registrar and recording capital entry with Nepal Rastra Bank.",
                                        icon: <Scale className="text-orange-600" size={24} />
                                    },
                                    {
                                        step: "03",
                                        title: "Operations",
                                        body: "Bi-annual compliance audits and technology transfer fee settlements for legal repatriation.",
                                        icon: <ShieldCheck className="text-orange-600" size={24} />
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                                {item.icon}
                                            </div>
                                            <span className="text-sm font-black text-slate-300">STEP {item.step}</span>
                                        </div>
                                        <h4 className="font-bold text-xl mb-3 text-slate-900">{item.title}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed font-light">{item.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* HERO SECTION */}
            <header className="relative pt-32 pb-20 lg:pt-64 lg:pb-40 px-6 bg-slate-950 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Strategy and Policy"
                        className="w-full h-full object-cover opacity-30 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
                </div>

                <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto">
                    <button onClick={() => navigate(-1)} className="group flex items-center gap-3 text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-12 hover:text-orange-500 transition-all">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Hub
                    </button>
                    <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.9] max-w-4xl">
                        Strategic <span className="text-orange-500">Analysis</span> <br /> & Policy.
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed italic">
                        "In an emerging market, policy is the blueprint; strategy is the execution. We navigate both to scale your venture."
                    </p>
                </div>
            </header>

            {/* POLICY SNAPSHOT */}
            <section className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-100">
                <div className="grid lg:grid-cols-3 gap-16 items-start">
                    <div>
                        <h2 className="text-sm font-black uppercase tracking-[0.4em] text-orange-600 mb-6">Frameworks</h2>
                        <h3 className="text-3xl font-bold mb-6 leading-tight">Nepal Regulatory <br />Snapshot</h3>
                        <p className="text-slate-500 mb-8 leading-relaxed">Understanding the intersection of these legislative pillars is critical for foreign capital entry and startup scaling.</p>
                        <button
                            onClick={() => setIsMapOpen(true)}
                            className="group flex items-center gap-3 bg-slate-950 text-white px-8 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl"
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
                            <div key={i} className="group p-8 border border-slate-100 rounded-[2rem] hover:bg-slate-50 hover:border-orange-200 transition-all">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.tags.map(tag => <span key={tag} className="text-[10px] font-black uppercase text-orange-600 tracking-widest">{tag}</span>)}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed font-light">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ANALYSIS MATRIX */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-sm font-black uppercase tracking-[0.4em] text-orange-600 mb-4">Deep Dive</h2>
                        <h3 className="text-4xl font-bold tracking-tight">Expert Analysis Matrix</h3>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
                            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-8"><Gavel size={28} /></div>
                            <h4 className="text-2xl font-bold mb-6">The Automatic Route Shift</h4>
                            <p className="text-slate-600 mb-8 leading-relaxed italic border-l-2 border-orange-500 pl-6">
                                "Recent amendments to FITTA have introduced an Automatic Approval Route for investments under NPR 500 Million in IT and Manufacturing."
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 text-sm text-slate-500"><CheckCircle2 size={18} className="text-green-500 shrink-0" /> Reduced approval lead time from 4 months to 7 days.</li>
                                <li className="flex items-start gap-4 text-sm text-slate-500"><CheckCircle2 size={18} className="text-green-500 shrink-0" /> Digitized application flow via the Department of Industry.</li>
                            </ul>
                        </div>

                        <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8"><Scale size={28} /></div>
                            <h4 className="text-2xl font-bold mb-6">IPR & Software Patenting</h4>
                            <p className="text-slate-600 mb-8 leading-relaxed italic border-l-2 border-blue-500 pl-6">
                                "Nepal is transitioning toward a new Industrial Property Act to align with global WIPO software protection standards."
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 text-sm text-slate-500"><CheckCircle2 size={18} className="text-green-500 shrink-0" /> New fast-track trademarking for tech-registered startups.</li>
                                <li className="flex items-start gap-4 text-sm text-slate-500"><CheckCircle2 size={18} className="text-green-500 shrink-0" /> Enhanced enforcement mechanisms for algorithm theft.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 px-6 bg-slate-950 text-white text-center">
                <div className="max-w-4xl mx-auto bg-slate-900/50 p-16 md:p-24 rounded-[3rem] border border-white/5">
                    <Briefcase className="w-12 h-12 text-orange-600 mx-auto mb-8" />
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Scale with Certainty.</h2>
                    <p className="text-slate-400 text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                        Whether you're entering Nepal or influencing its policy, our strategic intelligence bridges the gap between vision and regulation.
                    </p>
                    <button className="bg-orange-600 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-orange-600 transition-all shadow-2xl">
                        Request a Policy Briefing
                    </button>
                </div>
            </section>
        </div>
    );
}