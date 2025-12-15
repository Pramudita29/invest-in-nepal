'use client';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowLeft,
    ArrowRight,
    BarChart3,
    Briefcase,
    Building2,
    Globe,
    Target,
    TrendingUp,
    Users
} from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function BusinessConsultingPage() {
    const mainRef = useRef(null);
    const heroRef = useRef(null);
    const servicesRef = useRef(null);
    const approachRef = useRef(null);
    const sectorsRef = useRef(null);
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

            [servicesRef, approachRef, sectorsRef].forEach((ref) => {
                if (!ref.current) return;
                gsap.fromTo(
                    ref.current.children,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ref.current,
                            start: "top 85%",
                        },
                    }
                );
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="min-h-screen bg-gray-50 text-gray-900">
            <Navbar />

            {/* HERO */}
            <header className="relative py-32 lg:py-40 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
                        alt="Business consulting"
                        className="w-full h-full object-cover brightness-[0.3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto mb-10">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-bold uppercase tracking-wider"
                    >
                        <ArrowLeft size={16} />
                        Back
                    </button>
                </div>

                <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500 mb-6">
                        Business Consulting
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8">
                        Practical strategy for <br /> growing businesses in Nepal
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        We help founders, family enterprises, and institutions make
                        clear decisions, fix execution gaps, and scale sustainably
                        in Nepal’s evolving market.
                    </p>
                </div>
            </header>

            {/* SERVICES */}
            <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 mb-24">
                <div className="bg-white rounded-2xl shadow-2xl p-10 lg:p-14">
                    <div className="text-center mb-16">
                        <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">
                            What We Do
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                            Core Consulting Services
                        </h2>
                    </div>

                    <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            {
                                icon: Target,
                                title: "Business Strategy",
                                desc: "Clear growth strategies, market entry plans, and competitive positioning tailored to Nepal’s market realities."
                            },
                            {
                                icon: TrendingUp,
                                title: "Growth & Scale",
                                desc: "Operational improvements, pricing models, and expansion roadmaps for SMEs and high-growth firms."
                            },
                            {
                                icon: BarChart3,
                                title: "Financial Advisory",
                                desc: "Business planning, financial modeling, investment readiness, and bank or investor engagement."
                            },
                            {
                                icon: Users,
                                title: "Organization & Talent",
                                desc: "Structure, leadership alignment, and performance systems for growing teams."
                            },
                            {
                                icon: Briefcase,
                                title: "Family Business Advisory",
                                desc: "Governance, succession planning, and professionalization of legacy businesses."
                            },
                            {
                                icon: Globe,
                                title: "Market & Policy Insight",
                                desc: "Regulatory analysis, sector studies, and policy risk assessment for informed decisions."
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-orange-600 transition-colors">
                                    <item.icon className="w-6 h-6 text-gray-700 group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* APPROACH */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div ref={approachRef}>
                        <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">
                            Our Approach
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-6">
                            Consulting that actually works on the ground
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We don’t deliver slide decks that sit on shelves.
                            Our work is grounded in Nepal’s regulatory environment,
                            capital constraints, and operational realities.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Every engagement is hands-on, collaborative, and focused
                            on execution not just ideas.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-10">
                        <ul className="space-y-6">
                            {[
                                "Deep understanding of local markets and institutions",
                                "Direct access to senior consultants, not juniors",
                                "Actionable recommendations with clear next steps",
                                "Alignment with promoters, boards, and management"
                            ].map((point, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                                        {i + 1}
                                    </div>
                                    <span className="text-gray-700 font-medium">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTORS */}
            <section className="bg-white py-24 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">
                            Focus Sectors
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                            Industries We Work With
                        </h2>
                    </div>

                    <div ref={sectorsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Hydropower & Energy",
                            "Manufacturing & Trading",
                            "Tourism & Hospitality",
                            "Banking & Financial Services",
                            "Startups & Technology",
                            "Infrastructure & Real Estate"
                        ].map((sector, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-lg transition-all"
                            >
                                <Building2 className="w-8 h-8 text-orange-600 mb-4" />
                                <h3 className="text-lg font-bold">{sector}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 bg-gray-900 text-white">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
                        alt="Consulting meeting"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                        Let’s talk about your business.
                    </h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                        Whether you’re planning growth, restructuring, or a major decision,
                        we’ll help you move forward with clarity.
                    </p>
                    <button
                        onClick={() => navigate('/contact-us')}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-500 font-bold transition-transform hover:scale-105"
                    >
                        Start a Conversation <ArrowRight size={18} />
                    </button>
                </div>
            </section>
        </div>
    );
}
