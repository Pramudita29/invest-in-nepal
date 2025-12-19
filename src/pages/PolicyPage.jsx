'use client';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowLeft,
    ArrowRight,
    Briefcase,
    FileText,
    Globe,
    Scale,
    ShieldCheck,
    TrendingUp,
    Users,
    Zap
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { urlFor } from "../sanity/lib/client";

gsap.registerPlugin(ScrollTrigger);

const getPlainTextFromBlocks = (blocks = []) => {
    if (!blocks || blocks.length === 0) return "";
    return blocks
        .map((block) => {
            if (block._type !== "block" || !block.children) return "";
            return block.children.map((child) => child.text || "").join("");
        })
        .join(" ")
        .trim();
};

export default function StrategyPolicyAdvisory() {
    const mainRef = useRef(null);
    const heroRef = useRef(null);
    const advisoryRef = useRef(null);
    const articlesRef = useRef(null);
    const navigate = useNavigate();

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAdvisoryContent = async () => {
            try {
                // Fetching articles tagged with Policy, Startup, or Investment
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
            gsap.from(".hero-content > *", {
                y: 40, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out"
            });

            gsap.from(".advisory-card", {
                y: 60, opacity: 0, duration: 0.8, stagger: 0.1,
                scrollTrigger: { trigger: ".advisory-grid", start: "top 80%" }
            });
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans">
            <Navbar />

            {/* HERO SECTION */}
            <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 bg-[#0B1221] overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
                        className="w-full h-full object-cover"
                        alt="Policy Background"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto hero-content">
                    <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase tracking-widest mb-8 hover:text-white transition-colors">
                        <ArrowLeft size={14} /> Back
                    </button>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl">
                        Strategy & <span className="text-orange-500">Policy Advisory</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
                        Navigating the intersection of regulatory frameworks and market entry. We help startups and foreign investors decode Nepal's complex policy landscape.
                    </p>
                </div>
            </header>

            {/* CORE SERVICES GRID */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-sm font-black uppercase tracking-[0.3em] text-orange-600 mb-4">Our Specializations</h2>
                    <h3 className="text-3xl md:text-4xl font-bold">Bridging Policy and Growth</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 advisory-grid">
                    {[
                        {
                            title: "FDI Entry Strategy",
                            desc: "Comprehensive advisory on Foreign Investment and Technology Transfer Act (FITTA) compliance and sector-specific approvals.",
                            icon: <Globe className="w-6 h-6" />
                        },
                        {
                            title: "Regulatory Lobbying",
                            desc: "Engagement strategies with the Department of Industries and Central Bank to advocate for favorable business conditions.",
                            icon: <Scale className="w-6 h-6" />
                        },
                        {
                            title: "Startup Governance",
                            desc: "Structuring cap tables, intellectual property rights, and founder agreements within the local legal framework.",
                            icon: <ShieldCheck className="w-6 h-6" />
                        },
                        {
                            title: "Market Intelligence",
                            desc: "Deep-dive analysis into competitive landscapes, geopolitical risks, and emerging consumer trends in South Asia.",
                            icon: <TrendingUp className="w-6 h-6" />
                        },
                        {
                            title: "Incentive Mapping",
                            desc: "Identifying tax holidays, export subsidies, and government grants available for tech-enabled and green startups.",
                            icon: <Zap className="w-6 h-6" />
                        },
                        {
                            title: "Impact Assessment",
                            desc: "Measuring the socio-economic footprint of foreign investments to align with national development goals.",
                            icon: <Users className="w-6 h-6" />
                        }
                    ].map((service, i) => (
                        <div key={i} className="advisory-card bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-500 transition-all group">
                            <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-orange-600 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* POLICY INSIGHTS SECTION */}
            <section className="bg-gray-900 py-24 px-6 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4">Briefings & Whitepapers</h2>
                            <h3 className="text-3xl md:text-4xl font-bold">Policy Intelligence</h3>
                        </div>
                        <button onClick={() => navigate('/insights')} className="flex items-center gap-2 text-sm font-bold border-b border-orange-500 pb-1 hover:text-orange-400 transition-colors">
                            View all publications <ArrowRight size={16} />
                        </button>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {articles.map((article) => (
                            <div key={article._id} className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-800 pb-12">
                                <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden shrink-0">
                                    <img
                                        src={article.coverImage ? urlFor(article.coverImage).url() : "https://via.placeholder.com/400x400"}
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                        alt={article.title}
                                    />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-orange-500 mb-3 block">{article.category}</span>
                                    <h4 className="text-2xl font-bold mb-4 leading-snug">{article.title}</h4>
                                    <p className="text-gray-400 text-sm line-clamp-3 mb-6">
                                        {article.shortDesc || getPlainTextFromBlocks(article.body)}
                                    </p>
                                    <button
                                        onClick={() => navigate(`/article/${article.slug?.current}`)}
                                        className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-orange-500 transition-colors"
                                    >
                                        <FileText size={14} /> Download Policy Brief
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONSULTATION CTA */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <Briefcase className="w-12 h-12 text-orange-600 mx-auto mb-8" />
                    <h2 className="text-4xl font-bold mb-6">Strategic clarity for global investors.</h2>
                    <p className="text-gray-600 text-lg mb-10">
                        Our advisory team provides the local nuance and technical expertise required to scale ventures in Nepal.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-orange-600 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-700 transition-all">
                            Book an Advisory Session
                        </button>
                        <button className="border border-gray-200 px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-all">
                            Partner with Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}