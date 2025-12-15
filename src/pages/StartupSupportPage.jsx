'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    ArrowLeft,
    ArrowRight,
    Globe,
    Handshake,
    Lightbulb,
    Rocket,
    TrendingUp,
    Users
} from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const roadmapSteps = [
    { id: 1, step: 'Idea Stage', desc: 'Validate problem & market fit.', icon: Lightbulb, color: 'bg-orange-600', text: 'text-orange-600', bgSoft: 'bg-orange-50' },
    { id: 2, step: 'Build MVP', desc: 'Develop your minimum viable product.', icon: Rocket, color: 'bg-yellow-500', text: 'text-yellow-500', bgSoft: 'bg-yellow-50' },
    { id: 3, step: 'Gain Traction', desc: 'Acquire users & prove demand.', icon: TrendingUp, color: 'bg-blue-600', text: 'text-blue-600', bgSoft: 'bg-blue-50' },
    { id: 4, step: 'Investor Prep', desc: 'Craft pitch deck & financials.', icon: Handshake, color: 'bg-green-500', text: 'text-green-600', bgSoft: 'bg-green-50' },
    { id: 5, step: 'Raise & Scale', desc: 'Secure funding and expand.', icon: Globe, color: 'bg-indigo-600', text: 'text-indigo-600', bgSoft: 'bg-indigo-50' },
];

export default function StartupSupportPage() {
    const mainRef = useRef(null);
    const heroRef = useRef(null);
    const programsRef = useRef(null);
    const roadmapRef = useRef(null);
    const ctaRef = useRef(null);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.from(heroRef.current?.children || [], {
                y: 40, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out'
            });

            // Programs Animation
            if (programsRef.current) {
                gsap.from(programsRef.current.children, {
                    y: 50, opacity: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: { trigger: programsRef.current, start: 'top 85%' }
                });
            }

            // Roadmap Animation
            if (roadmapRef.current) {
                // Animate the text on the left
                gsap.from('.roadmap-text', {
                    x: -30, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
                    scrollTrigger: { trigger: roadmapRef.current, start: 'top 60%' }
                });

                // Animate the pins on the road
                const pins = roadmapRef.current.querySelectorAll('.roadmap-pin');
                gsap.fromTo(pins,
                    { scale: 0, opacity: 0, y: -20 },
                    {
                        scale: 1, opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'back.out(2)',
                        scrollTrigger: { trigger: roadmapRef.current, start: 'top 60%' }
                    }
                );
            }

            // CTA Animation
            if (ctaRef.current) {
                gsap.from(ctaRef.current.children, {
                    y: 30, opacity: 0, duration: 0.8,
                    scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' }
                });
            }
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-x-hidden">
            <style>{`
                @keyframes dashMove {
                    from { stroke-dashoffset: 200; }
                    to { stroke-dashoffset: 0; }
                }
                .animate-dash {
                    animation: dashMove 3s linear infinite;
                }
            `}</style>

            <Navbar />

            {/* === HERO SECTION === */}
            <header className="relative py-24 lg:py-36 px-6 overflow-hidden bg-gray-900 text-white">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://thumbs.dreamstime.com/b/abstract-futuristic-technology-background-digital-circuit-lines-glowing-orange-gray-tones-representing-innovation-376267205.jpg"
                        alt="Innovation background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900"></div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-bold uppercase mb-12 transition-colors">
                        <ArrowLeft size={16} /> Back
                    </button>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div ref={heroRef}>
                            <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-6">Empowering Nepali Founders</p>
                            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-8">From Idea to Investable Startup</h1>
                            <p className="text-xl text-gray-300 mb-10 max-w-xl">Get mentorship, build traction, and connect with investors — all tailored for Nepal's ecosystem.</p>
                            <button className="px-8 py-4 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-500 transition shadow-lg flex items-center gap-2 ring-4 ring-orange-600/30">
                                Apply Now <ArrowRight size={20} />
                            </button>
                        </div>
                        <div className="relative hidden lg:block">
                            <div className="absolute inset-0 bg-orange-500 rounded-2xl rotate-6 opacity-20 blur-xl"></div>
                            <img src="http://i.imgur.com/Mg9VTw8.jpg" alt="Nepali startup founders" className="relative rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500 border-4 border-gray-800" />
                        </div>
                    </div>
                </div>
            </header>

            {/* === PROGRAMS GRID === */}
            <section ref={programsRef} className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-extrabold mb-6">What We Offer</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">Comprehensive support at every stage of your journey.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[{ icon: Lightbulb, title: 'Idea Validation', desc: 'Test your concept.' }, { icon: Users, title: 'Mentorship', desc: '1:1 guidance.' }, { icon: TrendingUp, title: 'Growth & Traction', desc: 'Acquire customers.' }, { icon: Handshake, title: 'Investor Readiness', desc: 'Pitch decks & financials.' }, { icon: Globe, title: 'Market Access', desc: 'Regional opportunities.' }, { icon: Rocket, title: 'Ongoing Support', desc: 'Community & events.' }].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-left group">
                                <div className="w-14 h-14 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors text-orange-600">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === ROADMAP SECTION === */}
            <section ref={roadmapRef} className="pt-24 pb-0 bg-gray-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <h2 className="text-4xl font-extrabold mb-4 text-gray-900 text-left">Your Growth Journey</h2>
                    <p className="text-lg text-gray-500 mb-16 max-w-xl">Follow our proven 5-step roadmap designed to take you from a napkin scribble to a Series A funded company.</p>

                    <div className="relative">
                        {/* --- DESKTOP VIEW --- */}
                        <div className="hidden md:flex gap-4 h-[850px] items-start relative">

                            {/* LEFT COLUMN: SIDE TEXT (No Boxes) */}
                            <div className="w-1/3 flex flex-col justify-between h-full py-6 pr-10 z-10 relative pb-24">
                                {roadmapSteps.map((item) => (
                                    <div key={item.id} className="roadmap-text relative pl-2 group">
                                        {/* Icon Container */}
                                        <div className={`w-14 h-14 rounded-2xl ${item.bgSoft} flex items-center justify-center mb-3 transition-colors duration-300 group-hover:scale-105 origin-left`}>
                                            <item.icon className={`w-7 h-7 ${item.text}`} strokeWidth={2} />
                                        </div>

                                        {/* Text Content */}
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{item.step}</h3>
                                        <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* RIGHT COLUMN: ROAD GRAPHIC */}
                            <div className="w-2/3 absolute right-0 top-0 h-full overflow-visible">
                                <svg className="w-full h-full block" viewBox="0 0 800 850" fill="none" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="roadGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#374151" />
                                            <stop offset="100%" stopColor="#111827" />
                                        </linearGradient>
                                    </defs>

                                    {/* Road Body: 
                                        Updated START point to 'M 750,50' (instead of 850) so the road starts 
                                        inside the 800px viewbox and doesn't clip on the right. 
                                    */}
                                    <path
                                        d="M 750,50 C 550,50 300,150 150,300 C 50,450 150,550 400,550 C 600,550 700,600 400,850"
                                        stroke="rgba(0,0,0,0.1)" strokeWidth="120" strokeLinecap="round" fill="none"
                                        className="transform translate-y-2"
                                    />
                                    <path
                                        d="M 750,50 C 550,50 300,150 150,300 C 50,450 150,550 400,550 C 600,550 700,600 400,850"
                                        stroke="url(#roadGrad)" strokeWidth="100" strokeLinecap="round" fill="none"
                                    />

                                    {/* Animated Dashed Line */}
                                    <path
                                        d="M 750,50 C 550,50 300,150 150,300 C 50,450 150,550 400,550 C 600,550 700,600 400,850"
                                        stroke="white" strokeWidth="4" strokeDasharray="20 20" fill="none"
                                        className="opacity-70 animate-dash"
                                    />
                                </svg>

                                {/* MAP PINS - Precise positioning based on new path */}
                                {roadmapSteps.map((item, index) => {
                                    const positions = [
                                        // Step 1: Start (Top Right)
                                        { left: '88%', top: '1%' },
                                        // Step 2: First Curve (Mid-High Right)
                                        { left: '48%', top: '10%' },
                                        // Step 3: Big Curve (Far Left)
                                        { left: '15%', top: '42%' },
                                        // Step 4: Coming Back (Mid-Low Center)
                                        { left: '68%', top: '60%' },
                                        // Step 5: End (Bottom Center)
                                        { left: '59%', top: '85%' }
                                    ];
                                    const pos = positions[index];

                                    return (
                                        <div
                                            key={item.id}
                                            className="roadmap-pin absolute transform -translate-x-1/2 -translate-y-full group cursor-pointer z-30"
                                            style={{ left: pos.left, top: pos.top }}
                                        >
                                            {/* Pulse Ring */}
                                            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-6 ${item.color} rounded-[100%] blur-md opacity-40 group-hover:opacity-70 transition-opacity`}></div>

                                            {/* SVG Map Pin Shape */}
                                            <div className="relative filter drop-shadow-2xl transition-transform duration-300 group-hover:-translate-y-3 group-hover:scale-110">
                                                <svg width="60" height="74" viewBox="0 0 384 512" fill="currentColor" className={`${item.text}`}>
                                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z" />
                                                </svg>
                                                {/* Icon Inside Pin */}
                                                <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 text-white">
                                                    <item.icon className="w-7 h-7" strokeWidth={2.5} />
                                                </div>
                                            </div>

                                            {/* Tooltip */}
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none transform translate-y-2 group-hover:translate-y-0">
                                                {item.step}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* --- MOBILE VIEW --- */}
                        <div className="md:hidden relative px-4 pb-12">
                            {/* Line connecting the steps */}
                            <div className="absolute left-[39px] top-6 bottom-0 w-[2px] bg-gray-200"></div>

                            <div className="space-y-12">
                                {roadmapSteps.map((item) => (
                                    <div key={item.id} className="relative pl-24">
                                        {/* Icon Bubble */}
                                        <div className={`absolute left-0 top-0 w-20 h-20 ${item.bgSoft} rounded-2xl flex items-center justify-center border-4 border-gray-50 z-10`}>
                                            <item.icon className={`w-8 h-8 ${item.text}`} />
                                        </div>

                                        {/* Text Content (Clean, no box) */}
                                        <div className="pt-2">
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">{item.step}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* === CTA SECTION === */}
            <section ref={ctaRef} className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[200px] h-32 bg-gradient-to-b from-[#111827] via-[#111827] to-transparent z-0"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-24 border-l-4 border-dashed border-gray-700/50 z-0"></div>

                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 pt-8">Ready to Launch?</h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">Join Nepal's growing ecosystem and build with the right support.</p>
                    <button
                        onClick={() => navigate('/contact-us')}
                        className="group relative px-10 py-5 bg-orange-600 text-white rounded-full font-bold text-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Start Your Application <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    </button>
                </div>
            </section>
        </div>
    );
}