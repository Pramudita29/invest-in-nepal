'use client';

import { PortableText } from '@portabletext/react';
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { client, urlFor } from "../sanity/lib/client";

// --- SEQUOIA THEMED PORTABLE TEXT COMPONENTS ---
const portableTextComponents = {
    block: {
        normal: ({ children }) => (
            <p className="text-xl font-body text-[#13231F]/80 leading-relaxed mb-8">{children}</p>
        ),
        h1: ({ children }) => (
            <h1 className="text-5xl font-heading font-bold text-[#13231F] mt-16 mb-8 leading-tight">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-4xl font-heading font-bold text-[#13231F] mt-14 mb-6 leading-tight italic">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl font-mono uppercase tracking-widest text-[#004b33] mt-10 mb-4 font-bold">{children}</h3>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#004b33] pl-8 py-2 my-12 italic text-3xl font-heading text-[#13231F]/90 bg-white/50">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc pl-8 mb-8 space-y-4 text-xl text-[#13231F]/80 font-body">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal pl-8 mb-8 space-y-4 text-xl text-[#13231F]/80 font-body">{children}</ol>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold text-[#13231F]">{children}</strong>,
        em: ({ children }) => <em className="italic text-[#004b33]">{children}</em>,
        link: ({ children, value }) => (
            <a href={value.href} className="text-[#004b33] underline decoration-1 underline-offset-4 hover:opacity-60 transition-opacity">
                {children}
            </a>
        ),
    },
};

export default function ArticlePage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const data = await client.fetch(
                    `*[_type == "article" && slug.current == $slug][0]{
                        title, category, date, shortDesc, coverImage, body, slug
                    }`, { slug }
                );
                setArticle(data);
            } catch (error) {
                console.error("Error fetching article:", error);
            } finally {
                setLoading(false);
            }
        };
        if (slug) fetchArticle();
    }, [slug]);

    if (loading) return (
        <div className="min-h-screen bg-[#F5F2ED] flex items-center justify-center font-mono text-sm tracking-[0.5em] text-[#004b33] animate-pulse uppercase">
            Loading Insight...
        </div>
    );

    if (!article) return (
        <div className="min-h-screen bg-[#F5F2ED] flex items-center justify-center font-heading text-3xl italic text-[#13231F]">
            Article not found.
        </div>
    );

    return (
        <div className="min-h-screen bg-[#F5F2ED] text-[#13231F] selection:bg-[#004b33] selection:text-white antialiased">
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;600&family=Playfair+Display:ital,wght@0,700;1,700&family=JetBrains+Mono:wght@500&display=swap');
                    .font-heading { font-family: 'Playfair Display', serif; }
                    .font-body { font-family: 'Hanken Grotesk', sans-serif; }
                    .font-mono { font-family: 'JetBrains Mono', monospace; }
                `}
            </style>

            <Navbar />

            {/* --- HERO / HEADER --- */}
            <header className="pt-48 pb-16 px-6 lg:px-24 max-w-7xl mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-3 text-[#004b33] font-mono text-xs uppercase tracking-[0.5em] mb-16 hover:gap-6 transition-all font-bold"
                >
                    <ArrowLeft size={18} /> Back to Insights
                </button>

                <div className="space-y-8">
                    <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.3em] font-bold text-[#004b33]">
                        <span className="bg-[#004b33] text-white px-3 py-1 italic">{article.category || "General"}</span>
                        <span>{article.date ? new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : ""}</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-heading font-bold tracking-tight leading-[0.9] text-[#13231F]">
                        {article.title}
                    </h1>

                    {article.shortDesc && (
                        <p className="text-2xl md:text-3xl font-body font-light text-[#13231F]/60 max-w-4xl leading-snug italic border-l-4 border-[#004b33] pl-10">
                            {article.shortDesc}
                        </p>
                    )}
                </div>
            </header>

            {/* --- FEATURED IMAGE --- */}
            {article.coverImage && (
                <div className="px-6 lg:px-24 max-w-screen-2xl mx-auto mb-24">
                    <div className="relative aspect-[21/9] overflow-hidden shadow-2xl">
                        <img
                            src={urlFor(article.coverImage).width(2000).url()}
                            alt={article.title}
                            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                        />
                    </div>
                </div>
            )}

            {/* --- BODY CONTENT --- */}
            <main className="px-6 lg:px-24 max-w-4xl mx-auto pb-40">
                <div className="prose-custom">
                    <PortableText
                        value={article.body}
                        components={portableTextComponents}
                    />
                </div>

                {/* --- ARTICLE FOOTER --- */}
                <footer className="mt-24 pt-12 border-t border-[#13231F]/10 flex justify-between items-center">
                    <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#13231F]/40">
                        Stratbridge // Insight Protocol 2026
                    </div>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#004b33] font-bold hover:underline"
                    >
                        Top of Page ↑
                    </button>
                </footer>
            </main>
        </div>
    );
}