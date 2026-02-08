'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const AboutPage = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    return (
        <div className="min-h-screen bg-[#F5F2ED] text-[#13231F] font-serif overflow-x-hidden relative selection:bg-[#2D5A43] selection:text-[#F5F2ED]">
            <Navbar />

            {/* HERO SECTION - LARGER TYPEFACE */}
            <section className="pt-48 pb-24 px-8 lg:px-20 max-w-7xl mx-auto">
                <motion.div {...fadeIn} className="max-w-5xl">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="w-12 h-[1.5px] bg-[#2D5A43]"></span>
                        <span className="font-sans font-black tracking-[0.25em] text-sm uppercase text-[#2D5A43]">About StratB Partners</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1.05] mb-12">
                        The Vision: <br /><span className="italic font-light text-[#2D5A43]">A Unified Ecosystem for Growth</span>
                    </h1>

                    <div className="font-sans text-xl md:text-2xl opacity-90 leading-relaxed text-justify space-y-8 max-w-4xl">
                        <p>
                            StratB Partners was established to solve a fundamental challenge in the modern business landscape: <strong className="font-bold">Silos in Human & Financial Capital.</strong> In a rapidly evolving economy like Nepal’s, growth doesn't happen in a vacuum.
                        </p>
                        <p>
                            It requires the seamless integration of legal foresight, policy intelligence, technological innovation, and capital. StratB is the ecosystem where these worlds converge.
                        </p>
                    </div>

                    <div className="mt-16 bg-[#13231F] text-[#F5F2ED] p-12 md:p-20 rounded-3xl shadow-2xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <span className="text-xs uppercase tracking-[0.5em] text-[#2D5A43] mb-6 block font-sans font-black">The StratB Mission</span>
                            <p className="text-3xl md:text-5xl italic leading-tight tracking-tight">
                                "To accelerate Nepal’s economic potential by harmonizing the interests of innovators, regulators, and investors."
                            </p>
                        </div>
                        <div className="absolute top-0 right-0 opacity-5 group-hover:scale-110 transition-transform duration-700">
                            <Target size={300} strokeWidth={0.5} />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* WHO WE ARE - LIST FORMAT FOR READABILITY */}
            <section className="py-32 px-8 lg:px-20 max-w-7xl mx-auto border-t border-[#13231F]/10">
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <h2 className="text-lg font-sans font-black uppercase tracking-[0.4em] text-[#2D5A43] sticky top-32">Who We Are</h2>
                    </div>
                    <div className="lg:col-span-8 font-sans">
                        <p className="text-2xl leading-snug mb-16 text-justify opacity-90">
                            We are more than just a consulting firm; we are a strategic hub. Our organization brings together a diverse network of:
                        </p>
                        <div className="grid gap-12 mb-16">
                            {[
                                { t: "Industry Leaders & Business Consultants", d: "Who understand market dynamics." },
                                { t: "Legal Professionals", d: "Who provide the structural foundation for security." },
                                { t: "Startup Founders", d: "Who drive innovation and disruption." },
                                { t: "Policy Analysts", d: "Who bridge the gap between private enterprise and regulatory frameworks." }
                            ].map((item, i) => (
                                <div key={i} className="group border-b border-[#13231F]/10 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <h4 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-[#2D5A43] transition-colors">{item.t}</h4>
                                    <span className="text-lg opacity-50 italic">{item.d}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-xl opacity-80 leading-relaxed text-justify py-10 bg-white/40 px-8 rounded-xl italic">
                            By housing these distinct disciplines under one roof, we eliminate the silos that typically slow down progress. We provide the "comprehensive picture" that allows leaders to make informed, high-stakes decisions with confidence.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHAT WE DO - BOLD CARDS */}
            <section className="py-32 px-8 lg:px-20 bg-[#13231F] text-[#F5F2ED]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-xs font-sans font-bold uppercase tracking-[0.5em] text-[#2D5A43] mb-20">What We Do</h2>
                    <div className="grid md:grid-cols-3 gap-16">
                        {[
                            { title: "Connecting the Dots", text: "We facilitate the collision of ideas and resources. Our space serves as a literal and metaphorical 'Chamber' where investors meet innovators, and where traditional industry meets the digital future." },
                            { title: "Navigating Complexity", text: "Nepal’s business environment is rich with opportunity but complex in its execution. We simplify this journey by providing a holistic vantage point—analyzing legal requirements, policy climate, and technical feasibility." },
                            { title: "Cultivating the Future", text: "Our commitment is to the long-term economic architecture of Nepal. By fostering a collaborative environment, we are building a more resilient, transparent, and scalable business culture." }
                        ].map((item, i) => (
                            <div key={i} className="space-y-8">
                                <h4 className="text-4xl font-serif italic text-[#2D5A43] border-b border-[#2D5A43]/30 pb-4">{item.title}</h4>
                                <p className="text-lg opacity-70 leading-relaxed text-justify">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR STORY - EMPHASIZED NARRATIVE */}
            <section className="py-32 px-8 lg:px-20 bg-[#EAE6DF]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xs font-sans font-black uppercase tracking-[0.4em] text-[#2D5A43] mb-12">Our Story</h2>
                    <div className="font-serif text-2xl md:text-3xl opacity-90 leading-relaxed text-justify space-y-10">
                        <p>
                            StratB Partners was born from a simple realization during a candid discussion among friends. As professionals across law, technology, and business, we were dissecting the recurring hurdles within Nepal’s economy— the disconnect between policy and practice.
                        </p>
                        <div className="text-4xl md:text-6xl text-[#13231F] font-medium leading-tight py-6 border-y border-[#13231F]/10">
                            "The problem wasn't a lack of talent, but the lack of a <span className="italic text-[#2D5A43]">unified home</span> for it."
                        </div>
                        <p className="font-sans text-xl opacity-80">
                            That realization transformed our shared vision into a platform. We built StratB to be the one-stop ecosystem we felt was missing: a strategic hub where legal precision, technical innovation, and business intelligence converge.
                        </p>
                    </div>
                </div>
            </section>

            {/* MODALITY - IMPROVED VISUAL WEIGHT */}
            <section className="py-32 px-8 lg:px-20 max-w-7xl mx-auto">
                <h2 className="text-sm font-sans font-black uppercase tracking-[0.4em] text-[#2D5A43] mb-20">Working Modality: The Platform Hub</h2>
                <div className="grid lg:grid-cols-2 gap-24">
                    <div className="space-y-10 font-sans">
                        <h4 className="text-3xl md:text-4xl font-bold tracking-tight">A Collaborative Partnership Model</h4>
                        <p className="text-xl opacity-80 leading-relaxed text-justify">
                            We operate as a dynamic Platform Hub. We believe that the complexities of the modern economy cannot be solved by a single entity.
                        </p>
                        <div className="bg-[#2D5A43] text-white p-12 rounded-2xl shadow-xl">
                            <p className="text-xl leading-relaxed italic">
                                Currently, our platform serves as the central hub for <strong className="underline underline-offset-8">Robin Law and Policy Associates</strong>, integrating specialized legal expertise with a wider network of independent consultants.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-10 font-sans pt-12">
                        <h4 className="text-3xl md:text-4xl font-bold tracking-tight">Our "One-Stop" Approach</h4>
                        <p className="text-xl opacity-80 leading-relaxed text-justify mb-8">
                            We are actively expanding our ecosystem by reaching out to eminent figures from finance, industry, technology, and governance.
                        </p>
                        <div className="border-2 border-[#13231F] p-10 rounded-2xl">
                            <p className="text-2xl font-medium leading-snug">
                                "When you work with StratB, you gain access to a curated collective dedicated to the Nepalese market."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CALL TO ACTION */}
            <section className="py-40 px-8 lg:px-20 text-center border-t border-[#13231F]/10">
                <h3 className="text-5xl md:text-7xl font-serif italic mb-16">Let's grow together.</h3>
                <Link to="/contact-us" className="bg-[#13231F] text-[#F5F2ED] px-16 py-10 rounded-full font-bold uppercase text-sm tracking-[0.4em] hover:bg-[#2D5A43] transition-all inline-flex items-center gap-6 shadow-2xl">
                    Get in Touch <ArrowRight size={24} />
                </Link>
            </section>

            <footer className="py-16 border-t border-[#13231F]/10 px-8 text-center opacity-40 text-xs font-sans font-bold uppercase tracking-[0.4em]">
                StratB Partners © 2026 / Integrated Intelligence
            </footer>
        </div>
    );
};

export default AboutPage;