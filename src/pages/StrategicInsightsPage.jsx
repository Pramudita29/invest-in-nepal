'use client';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowLeft,
    ArrowRight,
    Clock,
    FileText,
    Globe,
    MapPin,
    Ticket,
    TrendingUp
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { urlFor } from "../sanity/lib/client";

gsap.registerPlugin(ScrollTrigger);

// Helper to generate short preview text from Portable Text body
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
    const eventRef = useRef(null);
    const reportRef = useRef(null);
    const cardsRef = useRef(null);
    const researchRef = useRef(null);
    const navigate = useNavigate();

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Direct fetch to Sanity's public GROQ endpoint – no client, no network issues
                const response = await fetch(
                    `https://32iguwoj.api.sanity.io/v2025-01-01/data/query/production?query=*%5B_type%20%3D%3D%20%22article%22%5D%20%7C%20order(date%20desc)%7B_id%2Ctitle%2Ccategory%2Cdate%2CshortDesc%2CcoverImage%2Cbody%2Cslug%7D`
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log("Articles loaded:", data.result);
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
            gsap.from(heroRef.current?.children || [], {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power2.out",
            });

            gsap.from(eventRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: { trigger: eventRef.current, start: "top 85%" },
            });

            gsap.from(reportRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: { trigger: reportRef.current, start: "top 85%" },
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

            if (researchRef.current) {
                gsap.fromTo(
                    researchRef.current.children,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: { trigger: researchRef.current, start: "top 85%" },
                    }
                );
            }
        }, mainRef);
        return () => ctx.revert();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
                Loading...
            </div>
        );
    }

    const featuredArticles = articles.slice(0, 3);
    const recentArticles = articles.slice(0, 6);

    // Simple function to trigger PDF download using window.print styled for PDF
    const handlePDFDownload = (article) => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) return;

        const coverImg = article.coverImage ? urlFor(article.coverImage).width(800).url() : '';

        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>${article.title}</title>
                <style>
                    body { font-family: 'Georgia', serif; margin: 40px; line-height: 1.6; color: #333; }
                    h1 { font-size: 32px; text-align: center; margin-bottom: 20px; }
                    .meta { text-align: center; color: #666; margin-bottom: 40px; font-size: 14px; }
                    img { max-width: 100%; height: auto; display: block; margin: 30px auto; border-radius: 8px; }
                    p { margin-bottom: 20px; font-size: 16px; }
                    ul { padding-left: 30px; }
                    li { margin-bottom: 10px; }
                    @media print {
                        body { margin: 0; }
                    }
                </style>
            </head>
            <body>
                <h1>${article.title}</h1>
                <div class="meta">${article.category || ''} • ${article.date ? new Date(article.date).toLocaleDateString() : ''}</div>
                ${coverImg ? `<img src="${coverImg}" alt="${article.title}" />` : ''}
                <div>
                    ${article.body ? article.body.map(block => {
            if (block._type === 'block') {
                if (block.listItem === 'bullet') {
                    return `<li>${block.children.map(c => c.text).join('')}</li>`;
                }
                const text = block.children.map(c => c.text).join('');
                if (block.style === 'h1') return `<h1>${text}</h1>`;
                if (block.style === 'h2') return `<h2 style="font-size:24px;margin:30px 0 15px;">${text}</h2>`;
                if (block.style === 'h3') return `<h3 style="font-size:20px;margin:25px 0 10px;">${text}</h3>`;
                return `<p>${text}</p>`;
            }
            return '';
        }).join('') : '<p>No content available.</p>'}
                </div>
            </body>
            </html>
        `);

        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
            printWindow.print();
        }, 1000);
    };

    return (
        <div ref={mainRef} className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <Navbar />

            {/* HERO SECTION */}
            <header className="relative py-32 lg:py-40 px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Corporate Skyline"
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
                        Market Intelligence
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8">
                        Strategic Insights
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                        Data-driven analysis of Nepal’s policy, economic, and geopolitical landscape.
                    </p>
                </div>
            </header>

            {/* STATIC EVENT SECTION */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-20 relative z-20 mb-20">
                <div ref={eventRef} className="bg-white rounded-2xl shadow-2xl overflow-hidden grid lg:grid-cols-2 min-h-[400px]">
                    <div className="p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
                        <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">
                            <Globe size={14} className="text-orange-600" />
                            <span>Exclusive Invitation</span>
                        </div>

                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2 leading-tight">
                            Annual Strategy <br /> Roundtable 2025
                        </h2>
                        <p className="text-orange-600 font-bold uppercase text-xs tracking-wider mb-6">
                            Hosted by StratBridge
                        </p>

                        <div className="space-y-3 mb-8 text-gray-600">
                            <div className="flex items-center gap-3">
                                <Clock size={16} className="text-orange-600" />
                                <span className="text-sm font-semibold">Friday, Dec 22 • 10:00 AM</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={16} className="text-orange-600" />
                                <span className="text-sm font-semibold">Main Conference Hall, StratBridge HQ</span>
                            </div>
                        </div>

                        <p className="text-gray-500 text-sm mb-8 leading-relaxed border-l-2 border-orange-200 pl-4 italic">
                            "A closed-door session for partners to discuss the fiscal roadmap."
                        </p>

                        <div className="flex items-center gap-6">
                            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center gap-2 shadow-lg">
                                <Ticket size={16} /> RSVP Now
                            </button>
                        </div>
                    </div>

                    <div className="relative h-64 lg:h-full overflow-hidden order-1 lg:order-2 group">
                        <img
                            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
                            alt="Meeting Room"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-transparent" />
                        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm text-gray-900 p-3 rounded-lg text-center shadow-lg">
                            <span className="block text-xs font-bold uppercase text-gray-500">DEC</span>
                            <span className="block text-2xl font-black">22</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED REPORTS - BIG CARDS WITH PDF DOWNLOAD */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
                {featuredArticles.length === 0 ? (
                    <p className="text-center text-gray-500 py-20 text-xl">No featured articles yet.</p>
                ) : (
                    featuredArticles.map((article) => {
                        const shortPreview = article.shortDesc ||
                            (article.body ? getPlainTextFromBlocks(article.body.slice(0, 3)) : "No preview available.");

                        const truncatedPreview = shortPreview.length > 220
                            ? shortPreview.substring(0, 220).trim() + "…"
                            : shortPreview;

                        return (
                            <div key={article._id} ref={reportRef} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[450px] mb-12">
                                <div className="md:w-1/2 relative group overflow-hidden">
                                    <img
                                        src={article.coverImage ? urlFor(article.coverImage).width(2072).height(450).url() : '/placeholder.jpg'}
                                        alt={article.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-sm">
                                        Featured Analysis
                                    </div>
                                </div>

                                <div className="md:w-1/2 p-8 md:p-12 lg:p-14 flex flex-col justify-center bg-white">
                                    <div className="flex items-center gap-2 mb-4">
                                        <TrendingUp size={18} className="text-orange-600" />
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                            {article.category || "Uncategorized"}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                                        {article.title}
                                    </h2>

                                    <p className="text-gray-600 leading-relaxed mb-8 line-clamp-5">
                                        {truncatedPreview}
                                    </p>

                                    <div className="mt-auto flex flex-col sm:flex-row gap-4">
                                        <button
                                            onClick={() => navigate(`/article/${article.slug?.current || ''}`)}
                                            className="flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold transition-transform hover:scale-[1.02] hover:bg-orange-600 shadow-xl hover:shadow-orange-900/20"
                                        >
                                            Read Full Report <ArrowRight size={18} />
                                        </button>
                                        <button
                                            onClick={() => handlePDFDownload(article)}
                                            className="flex items-center justify-center gap-2 px-6 py-4 border border-gray-100 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all"
                                        >
                                            <FileText size={18} className="text-gray-400" />
                                            <span className="text-sm font-bold text-gray-500">Download PDF • 5.2 MB</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </section>

            {/* RECENT UPDATES - SMALL CARDS USING SAME ARTICLES */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <Globe className="text-orange-600" /> Recent Updates
                    </h2>
                    <Link to="/insights" className="text-sm font-bold text-gray-500 hover:text-orange-600 transition-colors flex items-center gap-1">
                        View All <ArrowRight size={16} />
                    </Link>
                </div>

                <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentArticles.length === 0 ? (
                        <p className="col-span-full text-center text-gray-500 py-10">No recent articles yet.</p>
                    ) : (
                        recentArticles.map((article) => (
                            <div key={article._id} className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={article.coverImage ? urlFor(article.coverImage).width(800).height(400).url() : '/placeholder.jpg'}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-800">
                                        {article.category || "Update"}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-xs text-orange-600 font-bold uppercase tracking-wider mb-2">
                                        {article.date ? new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : "Recent"}
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                                        {article.shortDesc || getPlainTextFromBlocks(article.body?.slice(0, 2)) || "Latest insight from StratBridge"}
                                    </p>
                                    <button
                                        onClick={() => navigate(`/article/${article.slug?.current || ''}`)}
                                        className="inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors"
                                    >
                                        Read More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>

            {/* CORE RESEARCH AREAS */}
            <section className="bg-white py-24 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">Our Expertise</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Core Research Areas</h2>
                    </div>

                    <div ref={researchRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Economic Policy", desc: "Fiscal reforms, growth constraints, and sectoral investment priorities." },
                            { title: "Governance & Regulation", desc: "Evolving regulations and their implications for business operations." },
                            { title: "Infrastructure & Energy", desc: "National priorities in hydropower, transport, and connectivity." },
                            { title: "Regional Geopolitics", desc: "Nepal’s positioning amid India-China dynamics and global influences." },
                            { title: "Trade & Investment", desc: "FDI trends, trade deficit analysis, and international partnerships." },
                            { title: "Climate Strategy", desc: "Environmental regulations, green finance, and resilience strategies." }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                                    <TrendingUp className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-light text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop"
                        alt="Meeting"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/80" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
                        Strategic clarity for decision makers.
                    </h2>
                    <p className="text-lg text-gray-300 font-light mb-10 max-w-2xl mx-auto">
                        Get our monthly strategic briefing delivered directly to your inbox. No noise, just high-signal analysis.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 w-full backdrop-blur-sm transition-all"
                        />
                        <button className="px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-900/20">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}