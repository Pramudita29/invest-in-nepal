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
            // Only run complex pin animations on desktop/tablet
            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
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
            });

            // Program Cards Animation (All devices)
            gsap.from('.program-card', {
                y: 40, opacity: 0, duration: 0.8, stagger: 0.15,
                scrollTrigger: {
                    trigger: '.programs-grid',
                    start: 'top 85%',
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
            <header className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-8 border-b border-[#13231F]/5">
                <div className="max-w-7xl mx-auto">
                    <button
                        onClick={() => navigate(-1)}
                        className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#004b33] mb-8 md:mb-12 flex items-center gap-3 hover:-translate-x-2 transition-transform font-bold"
                    >
                        <ArrowLeft className="w-4 h-4" /> Return
                    </button>

                    <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div className="z-10 text-center lg:text-left">
                            <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-[#004b33] font-bold mb-6">Founder Protocol</p>
                            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif tracking-tighter leading-tight lg:leading-none lowercase mb-8">
                                Architecting <br />
                                <span className="italic text-[#004b33]/60">the future.</span>
                            </h1>
                            <p className="text-lg md:text-xl font-light italic text-[#13231F]/50 mb-10 max-w-lg mx-auto lg:mx-0">
                                Providing the strategic capital and institutional mentorship required to build the next generation of Nepali giants.
                            </p>
                            <button
                                onClick={() => navigate('/consultation')}
                                className="w-full sm:w-auto px-10 py-5 bg-[#004b33] text-[#F5F2ED] rounded-none font-mono text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#13231F] transition-all flex items-center justify-center gap-4"
                            >
                                Apply Now <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="relative mt-10 lg:mt-0 grayscale hover:grayscale-0 transition-all duration-1000">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200"
                                alt="Modern Office"
                                className="w-full h-auto rounded-none shadow-2xl border border-[#13231F]/10"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* === PROGRAMS SECTION === */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <h2 className="text-[10px] md:text-sm font-mono uppercase tracking-[0.5em] text-[#004b33] mb-12 md:mb-16 font-bold">The Core Protocol</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 programs-grid">
                        {programs.map((prog, i) => (
                            <div key={i} className="program-card p-8 md:p-10 border border-[#13231F]/5 bg-[#F5F2ED]/30 hover:bg-[#F5F2ED] transition-colors group">
                                <prog.icon className="w-7 h-7 md:w-8 md:h-8 text-[#004b33] mb-6 stroke-1" />
                                <h3 className="text-lg md:text-xl font-serif italic mb-4">{prog.title}</h3>
                                <p className="text-sm text-[#13231F]/60 font-sans leading-relaxed">{prog.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === ROADMAP SECTION === */}
            <section ref={roadmapRef} className="py-20 md:py-32 bg-[#F5F2ED] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                    <h2 className="text-[10px] md:text-sm font-mono uppercase tracking-[0.5em] text-[#004b33] mb-4 font-bold italic">The Journey</h2>
                    <p className="text-2xl md:text-3xl font-serif italic text-[#13231F]/80 mb-16 md:mb-24 max-w-xl">Five phases to transform raw ambition into a global legacy.</p>

                    <div className="relative min-h-[600px] md:min-h-[1000px]">
                        {/* Desktop View (The Road) */}
                        <div className="hidden md:block">
                            <div className="absolute left-0 top-0 w-1/3 flex flex-col justify-between h-[900px] z-20">
                                {roadmapSteps.map((item) => (
                                    <div key={item.id} className="roadmap-text group py-4">
                                        <h3 className="text-2xl lg:text-3xl font-serif italic text-[#13231F] group-hover:text-[#004b33] transition-colors">{item.step}</h3>
                                        <p className="text-[#13231F]/50 text-sm font-light mt-2 font-sans">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="absolute right-0 top-0 w-2/3 h-[1000px] overflow-visible">
                                <svg className="w-full h-full overflow-visible" viewBox="0 0 800 1000" fill="none" preserveAspectRatio="none">
                                    <path d="M 750,50 C 550,50 300,150 150,300 C 50,450 150,550 400,550 C 600,550 700,600 400,980" stroke="#13231F" strokeWidth="80" strokeLinecap="round" className="opacity-[0.03]" />
                                    <path d="M 750,50 C 550,50 300,150 150,300 C 50,450 150,550 400,550 C 600,550 700,600 400,980" stroke="#004b33" strokeWidth="1.5" strokeDasharray="12 12" className="animate-dash" />
                                </svg>

                                {roadmapSteps.map((item, index) => {
                                    const pos = [
                                        { left: '88%', top: '5%' },
                                        { left: '48%', top: '14%' },
                                        { left: '15%', top: '30%' },
                                        { left: '68%', top: '55%' },
                                        { left: '50%', top: '98%' }
                                    ][index];
                                    return (
                                        <div key={item.id} className="roadmap-pin absolute z-30 transform -translate-x-1/2 -translate-y-1/2" style={{ left: pos.left, top: pos.top }}>
                                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#004b33] rounded-full flex items-center justify-center text-[#F5F2ED] shadow-2xl border-4 border-[#F5F2ED] hover:scale-110 transition-transform cursor-pointer">
                                                <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Mobile View (Timeline) */}
                        <div className="md:hidden space-y-12 border-l-2 border-[#13231F]/10 ml-4 pb-10">
                            {roadmapSteps.map((item) => (
                                <div key={item.id} className="relative pl-10 group">
                                    <div className="absolute -left-[17px] top-0 w-8 h-8 bg-[#004b33] rounded-full flex items-center justify-center text-white border-4 border-[#F5F2ED] shadow-lg">
                                        <item.icon className="w-3 h-3" />
                                    </div>
                                    <h3 className="text-xl font-serif italic text-[#13231F]">{item.step}</h3>
                                    <p className="text-sm text-[#13231F]/60 font-sans mt-2 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* === FOOTER CTA === */}
            <footer className="bg-[#13231F] py-24 md:py-40 text-center relative z-40">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#F5F2ED] italic lowercase mb-10 md:mb-12">
                        Build your <span className="not-italic text-white">Legacy.</span>
                    </h2>
                    <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-6 md:gap-10 bg-[#F5F2ED] text-[#13231F] px-8 md:px-16 py-6 md:py-8 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold hover:bg-[#004b33] hover:text-white transition-all">
                        Inquire Protocol <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </footer>

            {/* FLOATING ACTION */}
            <Link to="/contact" className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-[#004b33] text-[#F5F2ED] rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 active:scale-95 transition-transform border border-white/10">
                <PhoneCall className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
        </div>
    );
}