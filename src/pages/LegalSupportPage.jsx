'use client';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { practiceAreas } from "../data/legalContent";

gsap.registerPlugin(ScrollTrigger);

export default function LegalSupportPage() {
    const mainRef = useRef(null);
    const heroRef = useRef(null);
    const cardsRef = useRef(null);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(heroRef.current?.children || [], {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power2.out",
            });

            if (cardsRef.current) {
                gsap.fromTo(
                    cardsRef.current.children,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power2.out",
                        scrollTrigger: { trigger: cardsRef.current, start: "top 85%" },
                    }
                );
            }
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <Navbar />

            <header className="relative py-32 lg:py-40 px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
                        alt="Legal Excellence"
                        className="w-full h-full object-cover brightness-[0.3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider"
                    >
                        <div className="p-2 rounded-full border border-gray-500 group-hover:border-orange-500 transition-colors">
                            <ArrowLeft size={16} />
                        </div>
                        Back
                    </button>
                </div>

                <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-orange-500">
                        Legal Excellence
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8">
                        Legal Services
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                        Comprehensive legal solutions tailored to your most complex challenges.
                    </p>
                </div>
            </header>

            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {practiceAreas.map((area, i) => {
                        const Icon = area.icon;
                        return (
                            <div
                                key={i}
                                className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                                onClick={() => navigate(`/legal/${area.id}`)}
                            >
                                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                                    <Icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>

                                <p className="text-gray-600 leading-relaxed mb-8">{area.desc}</p>

                                <button className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 transition-colors group">
                                    Learn More
                                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
