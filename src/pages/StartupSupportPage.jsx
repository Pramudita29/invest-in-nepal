'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Globe,
    Handshake,
    Lightbulb,
    PhoneCall,
    Rocket,
    TrendingUp,
    Users
} from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

gsap.registerPlugin(ScrollTrigger);

// --- ORIGINAL DATA STRUCTURE ---
const roadmapSteps = [
    { id: 1, step: 'Idea Stage', desc: 'Validate problem & market fit.', icon: Lightbulb },
    { id: 2, step: 'Build MVP', desc: 'Develop your minimum viable product.', icon: Rocket },
    { id: 3, step: 'Gain Traction', desc: 'Acquire users & prove demand.', icon: TrendingUp },
    { id: 4, step: 'Investor Prep', desc: 'Craft pitch deck & financials.', icon: Handshake },
    { id: 5, step: 'Raise & Scale', desc: 'Secure funding and expand.', icon: Globe },
];

const programs = [
    {
        title: 'Idea Validation',
        desc: 'Deep-dive sessions to stress-test your business model against local and global market dynamics.',
        icon: Lightbulb
    },
    {
        title: 'Strategic Mentorship',
        desc: 'Direct access to founders who have scaled companies in Nepal and abroad.',
        icon: Users
    },
    {
        title: 'Capital Matching',
        desc: 'Connecting high-potential startups with angel investors and institutional venture capital.',
        icon: Handshake
    },
    {
        title: 'Operational Support',
        desc: 'Hands-on help with legal, registration, and financial compliance for early-stage teams.',
        icon: CheckCircle2
    }
];

export default function StartupSupportPage() {
    const mainRef = useRef(null);
    const roadmapRef = useRef(null);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Roadmap Pin Animation
            const pins = roadmapRef.current?.querySelectorAll('.roadmap-pin');
            if (pins) {
                gsap.fromTo(pins,
                    { scale: 0, opacity: 0, y: 20 },
                    {
                        scale: 1, opacity: 1, y: 0,
                        duration: 0.7, stagger: 0.2, ease: 'back.out(1.7)',
                        scrollTrigger: {
                            trigger: roadmapRef.current,
                            start: 'top 60%',
                        }
                    }
                );
            }

            // Program Cards Animation
            gsap.from('.program-card', {
                y: 40, opacity: 0, duration: 0.8, stagger: 0.15,
                scrollTrigger: {
                    trigger: '.programs-grid',
                    start: 'top 80%',
                }
            });
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="min-h-screen bg-[#F5F2ED] text-[#13231F] font-serif overflow-x-hidden">
            <style>{`
                @keyframes dashMove {
                    from { stroke-dashoffset: 30; }
                    to { stroke-dashoffset: 0; }
                }
                .animate-dash {
                    animation: dashMove 2s linear infinite;
                }
                .font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
            `}</style>

            <Navbar />

            {/* === HERO SECTION === */}
            <header className="relative pt-32 pb-20 px-8 border-b border-[#13231F]/5">
                <div className="max-w-7xl mx-auto">
                    <button
                        onClick={() => navigate(-1)}
                        className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#004b33] mb-12 flex items-center gap-3 hover:-translate-x-2 transition-transform font-bold"
                    >
                        <ArrowLeft size={16} /> Return to Mission
                    </button>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#004b33] font-bold mb-6">Founder Protocol</p>
                            <h1 className="text-6xl md:text-8xl font-serif tracking-tighter leading-none lowercase mb-8">
                                Architecting <br />
                                <span className="italic text-[#004b33]/60">the future.</span>
                            </h1>
                            <p className="text-xl font-light italic text-[#13231F]/50 mb-10 max-w-lg">
                                Providing the strategic capital and institutional mentorship required to build the next generation of Nepali giants.
                            </p>
                            <button className="px-10 py-5 bg-[#004b33] text-[#F5F2ED] rounded-none font-mono text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#13231F] transition-all flex items-center gap-4">
                                Apply Now <ArrowRight size={18} />
                            </button>
                        </div>
                        <div className="relative hidden lg:block grayscale hover:grayscale-0 transition-all duration-1000">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200"
                                alt="Modern Office"
                                className="rounded-none shadow-2xl border border-[#13231F]/10"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* === PROGRAMS SECTION === */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-sm font-mono uppercase tracking-[0.5em] text-[#004b33] mb-16 font-bold">The Core Protocol</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 programs-grid">
                        {programs.map((prog, i) => (
                            <div key={i} className="program-card p-10 border border-[#13231F]/5 bg-[#F5F2ED]/30 hover:bg-[#F5F2ED] transition-colors group">
                                <prog.icon className="w-8 h-8 text-[#004b33] mb-6 stroke-1" />
                                <h3 className="text-xl font-serif italic mb-4">{prog.title}</h3>
                                <p className="text-sm text-[#13231F]/60 font-sans leading-relaxed">{prog.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === ROADMAP SECTION (Fixed Disappearing Path) === */}
            <section ref={roadmapRef} className="py-32 bg-[#F5F2ED] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <h2 className="text-sm font-mono uppercase tracking-[0.5em] text-[#004b33] mb-4 font-bold italic">The Journey</h2>
                    <p className="text-3xl font-serif italic text-[#13231F]/80 mb-24 max-w-xl">Five phases to transform raw ambition into a global legacy.</p>

                    <div className="relative min-h-[1000px]">
                        {/* Desktop View (The Road) */}
                        <div className="hidden md:block">
                            <div className="absolute left-0 top-0 w-1/3 flex flex-col justify-between h-[900px] z-20">
                                {roadmapSteps.map((item) => (
                                    <div key={item.id} className="roadmap-text group">
                                        <h3 className="text-3xl font-serif italic text-[#13231F] group-hover:text-[#004b33] transition-colors">{item.step}</h3>
                                        <p className="text-[#13231F]/50 text-sm font-light mt-2 font-sans">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="absolute right-0 top-0 w-2/3 h-[1000px] overflow-visible">
                                <svg
                                    className="w-full h-full overflow-visible"
                                    viewBox="0 0 800 1000"
                                    fill="none"
                                    preserveAspectRatio="none"
                                >
                                    {/* Subtle Shadow Path */}
                                    <path
                                        d="M 750,50 C 550,50 300,150 150,300 C 50,450 150,550 400,550 C 600,550 700,600 400,980"
                                        stroke="#13231F" strokeWidth="80" strokeLinecap="round" className="opacity-[0.03]"
                                    />
                                    {/* Main Animated Path */}
                                    <path
                                        d="M 750,50 C 550,50 300,150 150,300 C 50,450 150,550 400,550 C 600,550 700,600 400,980"
                                        stroke="#004b33" strokeWidth="1.5" strokeDasharray="12 12" className="animate-dash"
                                    />
                                </svg>

                                {/* Pins */}
                                {roadmapSteps.map((item, index) => {
                                    const pos = [
                                        { left: '88%', top: '5%' },
                                        { left: '48%', top: '14%' },
                                        { left: '15%', top: '30%' },
                                        { left: '68%', top: '55%' },
                                        { left: '50%', top: '98%' }
                                    ][index];
                                    return (
                                        <div
                                            key={item.id}
                                            className="roadmap-pin absolute z-30 transform -translate-x-1/2 -translate-y-1/2"
                                            style={{ left: pos.left, top: pos.top }}
                                        >
                                            <div className="w-12 h-12 bg-[#004b33] rounded-full flex items-center justify-center text-[#F5F2ED] shadow-2xl border-4 border-[#F5F2ED] hover:scale-110 transition-transform cursor-pointer">
                                                <item.icon size={18} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Mobile View (Timeline) */}
                        <div className="md:hidden space-y-12 border-l border-[#13231F]/10 ml-4">
                            {roadmapSteps.map((item) => (
                                <div key={item.id} className="relative pl-10 group">
                                    <div className="absolute -left-[14px] top-0 w-7 h-7 bg-[#004b33] rounded-full flex items-center justify-center text-white">
                                        <item.icon size={12} />
                                    </div>
                                    <h3 className="text-xl font-serif italic">{item.step}</h3>
                                    <p className="text-sm text-[#13231F]/50 font-sans mt-2">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* === FOOTER CTA === */}
            <footer className="bg-[#13231F] py-40 text-center relative z-40">
                <div className="max-w-4xl mx-auto px-8">
                    <h2 className="text-5xl md:text-7xl font-serif text-[#F5F2ED] italic lowercase mb-12">
                        Build your <span className="not-italic text-[#fffff]">Legacy.</span>
                    </h2>
                    <Link to="/contact" className="inline-flex items-center gap-10 bg-[#F5F2ED] text-[#13231F] px-16 py-8 font-mono text-xs uppercase tracking-[0.5em] font-bold hover:bg-[#004b33] hover:text-white transition-all">
                        Inquire Protocol <ArrowRight size={20} />
                    </Link>
                </div>
            </footer>

            {/* FLOATING ACTION */}
            <Link to="/contact" className="fixed bottom-8 right-8 w-14 h-14 bg-[#004b33] text-[#F5F2ED] rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-transform border border-[#F5F2ED]/10">
                <PhoneCall size={20} />
            </Link>
        </div>
    );
}