'use client';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowLeft,
    ArrowRight,
    FileText,
    TrendingUp
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

export default function StrategicInsightsPage() {
    const mainRef = useRef(null);
    const heroRef = useRef(null);
    //const eventRef = useRef(null);
    const cardsRef = useRef(null);
    const researchRef = useRef(null);
    const navigate = useNavigate();

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://32iguwoj.api.sanity.io/v2025-01-01/data/query/production?query=*%5B_type%20%3D%3D%20%22article%22%5D%20%7C%20order(date%20desc)%7B_id%2Ctitle%2Ccategory%2Cdate%2CshortDesc%2CcoverImage%2Cbody%2Cslug%7D`
                );
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setArticles(data.result || []);
            } catch (error) {
                console.error("Failed to load articles:", error);
                setArticles([]);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".sequoia-reveal", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            });
        }, mainRef);
        return () => ctx.revert();
    }, [loading]);

    if (loading) return (
        <div className="min-h-screen bg-[#F5F2ED] flex items-center justify-center font-mono text-xs tracking-[0.5em] text-[#004b33]">
            LOADING...
        </div>
    );

    const featuredArticles = articles.slice(0, 3);
    const recentArticles = articles.slice(0, 6);

    const handlePDFDownload = (article) => {
        console.log("Downloading PDF for:", article.title);
    };

    return (
        <div ref={mainRef} className="min-h-screen bg-[#F5F2ED] text-[#13231F] font-sans antialiased overflow-x-hidden">
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,700;1,700&family=JetBrains+Mono:wght@500&display=swap');
                    .font-heading { font-family: 'Playfair Display', serif; }
                    .font-mono { font-family: 'JetBrains Mono', monospace; }
                    .font-body { font-family: 'Hanken Grotesk', sans-serif; }
                `}
            </style>

            <Navbar />

            {/* HERO SECTION */}
            <header className="relative pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto border-b border-[#13231F]/10">
                <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-end">
                    <div ref={heroRef} className="lg:col-span-8">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-3 text-[#004b33] font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] mb-8 md:mb-12 font-bold hover:opacity-50 transition-opacity"
                        >
                            <ArrowLeft size={16} /> Back
                        </button>
                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 md:mb-6 text-[#004b33] font-mono sequoia-reveal">
                            Market Intelligence
                        </p>
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold text-[#13231F] leading-[0.9] lg:leading-[0.85] tracking-tight sequoia-reveal">
                            Strategic <br className="hidden md:block" /> Insights.
                        </h1>
                    </div>
                    <div className="lg:col-span-4 pb-4 sequoia-reveal">
                        <p className="text-lg md:text-2xl font-light text-[#13231F]/70 leading-snug border-l-4 border-[#004b33] pl-6 md:pl-8 font-body">
                            Data-driven analysis of Nepal’s policy, economic, and geopolitical landscape.
                        </p>
                    </div>
                </div>
            </header>


            {/* FEATURED REPORTS */}
            <section className="bg-white border-y border-[#13231F]/10">
                {featuredArticles.map((article, i) => (
                    <div key={article._id} className="border-b border-[#13231F]/10 last:border-0 grid lg:grid-cols-2 group">
                        <div className={`p-8 md:p-12 lg:p-24 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-2 lg:border-l border-[#13231F]/10' : 'lg:border-r border-[#13231F]/10'}`}>
                            <div className="flex items-center gap-2 mb-6 md:mb-8 font-mono text-[10px] uppercase tracking-[0.4em] text-[#004b33] font-bold">
                                <TrendingUp size={14} /> {article.category || "Uncategorized"}
                            </div>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 md:mb-8 leading-tight text-[#13231F] group-hover:italic transition-all">
                                {article.title}
                            </h2>
                            <p className="text-base md:text-xl text-[#13231F]/60 font-body font-light leading-relaxed mb-8 md:mb-12 line-clamp-4">
                                {article.shortDesc || getPlainTextFromBlocks(article.body?.slice(0, 3))}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
                                <button
                                    onClick={() => navigate(`/article/${article.slug?.current}`)}
                                    className="flex items-center gap-4 text-[#13231F] font-mono text-xs uppercase tracking-[0.3em] font-bold border-b-2 border-[#004b33] pb-2 hover:opacity-50 transition-all w-fit"
                                >
                                    Read Report <ArrowRight size={16} />
                                </button>
                                <button
                                    onClick={() => handlePDFDownload(article)}
                                    className="text-[#13231F]/40 font-mono text-[10px] uppercase tracking-[0.3em] font-bold hover:text-black flex items-center gap-2 w-fit"
                                >
                                    <FileText size={14} /> PDF Download
                                </button>
                            </div>
                        </div>
                        <div className="overflow-hidden bg-[#13231F] aspect-video lg:aspect-auto">
                            <img
                                src={article.coverImage ? urlFor(article.coverImage).url() : '/placeholder.jpg'}
                                alt={article.title}
                                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                            />
                        </div>
                    </div>
                ))}
            </section>

            {/* RECENT UPDATES */}
            <section className="px-6 md:px-12 lg:px-24 py-20 md:py-32 max-w-screen-2xl mx-auto">
                <div className="flex justify-between items-end mb-12 md:mb-16 border-b border-[#13231F]/10 pb-8">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold italic">Recent Updates.</h2>
                    <Link to="/insights" className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-[#004b33] hover:underline">View All</Link>
                </div>
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#13231F]/10">
                    {recentArticles.map((article) => (
                        <div
                            key={article._id}
                            onClick={() => navigate(`/article/${article.slug?.current}`)}
                            className="p-8 md:p-10 border-r border-b border-[#13231F]/10 bg-white hover:bg-[#13231F] hover:text-white transition-all duration-500 cursor-pointer group flex flex-col justify-between aspect-square"
                        >
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40 font-bold">
                                {article.date ? new Date(article.date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }) : "2026"}
                            </span>
                            <h3 className="text-xl md:text-2xl font-heading font-bold leading-tight group-hover:italic">
                                {article.title}
                            </h3>
                            <div className="w-8 h-[2px] bg-[#004b33] group-hover:w-full transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </section>

            {/* RESEARCH AREAS */}
            <section className="bg-white py-20 md:py-32 border-t border-[#13231F]/10">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
                        <div>
                            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#004b33] font-bold">Expertise</span>
                            <h2 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-8">Core Research <br className="hidden sm:block" /> Areas.</h2>
                        </div>
                        <div ref={researchRef} className="space-y-0">
                            {[
                                { title: "Economic Policy", desc: "Fiscal reforms and sectoral investment priorities." },
                                { title: "Governance & Regulation", desc: "Evolving regulations and implications for business." },
                                { title: "Infrastructure & Energy", desc: "National priorities in hydropower and transport." },
                                { title: "Regional Geopolitics", desc: "Nepal’s positioning amid India-China dynamics." }
                            ].map((item, i) => (
                                <div key={i} className="py-6 md:py-8 border-b border-[#13231F]/10 flex gap-6 md:gap-12 group hover:pl-4 transition-all">
                                    <span className="font-mono text-lg md:text-xl text-[#004b33] font-bold italic">0{i + 1}</span>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-heading font-bold mb-2 group-hover:text-[#004b33] transition-colors">{item.title}</h3>
                                        <p className="text-sm md:text-base text-[#13231F]/60 font-body">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-40 px-6 bg-[#13231F] text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-7xl font-heading font-bold text-white mb-10 tracking-tighter leading-tight">
                        Strategic clarity <br className="hidden sm:block" /> for <span className="italic font-normal text-[#ffffff]">decision makers.</span>
                    </h2>

                </div>
            </section>
        </div>
    );
}