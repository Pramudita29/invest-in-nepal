// src/pages/ArticlePage.jsx
'use client';

import { PortableText } from '@portabletext/react';
import { ArrowLeft } from "lucide-react"; // ← THIS WAS MISSING
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { client, urlFor } from "../sanity/lib/client";

const portableTextComponents = {
    block: {
        normal: ({ children }) => <p className="text-lg text-gray-700 leading-relaxed mb-6">{children}</p>,
        h1: ({ children }) => <h1 className="text-4xl font-bold text-gray-900 mt-12 mb-6">{children}</h1>,
        h2: ({ children }) => <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h3>,
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc pl-8 mb-6 space-y-3 text-gray-700">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal pl-8 mb-6 space-y-3 text-gray-700">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li>{children}</li>,
        number: ({ children }) => <li>{children}</li>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
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
            title,
            category,
            date,
            shortDesc,
            coverImage,
            body,
            slug
          }`,
                    { slug }
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

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
                Loading article...
            </div>
        );
    }

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center text-2xl text-gray-500">
                Article not found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">


            <article className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
                <button
                    onClick={() => navigate(-1)}
                    className="group flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors text-sm font-bold uppercase tracking-wider mb-10"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back
                </button>

                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                        {article.title}
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{article.date ? new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "Date not set"}</span>
                        <span>•</span>
                        <span className="text-orange-600 font-semibold">{article.category || "Uncategorized"}</span>
                    </div>
                </header>

                {article.coverImage && (
                    <div className="mb-12 -mx-6 lg:-mx-8">
                        <img
                            src={urlFor(article.coverImage).width(1400).height(600).fit('crop').url()}
                            alt={article.title}
                            className="w-full h-auto rounded-xl shadow-2xl"
                        />
                    </div>
                )}

                <div className="prose prose-lg max-w-none text-gray-700">
                    <PortableText
                        value={article.body}
                        components={portableTextComponents}
                    />
                </div>
            </article>
        </div>
    );
}