'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const AboutPage = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    };

    return (
        <div className="min-h-screen bg-[#F5F2ED] text-[#13231F] selection:bg-[#2D5A43] selection:text-[#F5F2ED] overflow-x-hidden">
            <Navbar />

            {/* HERO SECTION */}
            <section className="pt-32 md:pt-56 pb-16 md:pb-24 px-6 md:px-12 lg:px-20 max-w-[100rem] mx-auto">
                <motion.div {...fadeIn} className="max-w-6xl">
                    <div className="flex items-center gap-4 mb-6 md:mb-10">
                        <span className="w-8 md:w-12 h-[1px] bg-[#2D5A43]"></span>
                        <span className="font-sans font-bold tracking-[0.2em] md:tracking-[0.4em] text-[10px] uppercase text-[#2D5A43]">
                            About StratB Partners
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-serif font-medium tracking-tight leading-[1.1] md:leading-[1.05] mb-10 md:mb-16">
                        The Vision: <br className="hidden sm:block" />
                        <span className="italic font-light text-[#2D5A43]">A Unified Ecosystem</span>
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 font-sans text-base md:text-xl leading-relaxed text-[#13231F]/90">
                        <p className="font-medium">
                            StratB Partners was established to solve a fundamental challenge in the modern business landscape: <span className="text-[#2D5A43] italic">Silos in Human & Financial Capital.</span> In a rapidly evolving economy like Nepal’s, growth doesn't happen in a vacuum.
                        </p>
                        <p className="opacity-80">
                            It requires the seamless integration of legal foresight, policy intelligence, technological innovation, and capital. StratB is the ecosystem where these worlds converge into actionable strategy.
                        </p>
                    </div>

                    <div className="mt-16 md:mt-24 bg-[#13231F] text-[#F5F2ED] p-8 md:p-24 rounded-[1.5rem] md:rounded-[2rem] relative overflow-hidden">
                        <div className="relative z-10 max-w-3xl">
                            <span className="text-xs md:text-[20px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#F5F2ED] mb-6 md:mb-8 block font-sans font-bold">
                                The StratB Mission
                            </span>
                            <p className="text-2xl sm:text-3xl md:text-5xl font-serif italic leading-[1.3] md:leading-[1.2] tracking-tight">
                                "To accelerate Nepal’s economic potential by harmonizing the interests of innovators, regulators, and investors."
                            </p>
                        </div>
                        <div className="absolute top-1/2 -right-10 md:-right-20 -translate-y-1/2 opacity-[0.05] md:opacity-[0.03] pointer-events-none">
                            {/* Use className instead of responsive props */}
                            <Target
                                strokeWidth={0.5}
                                className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
                            />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* WHO WE ARE */}
            <section className="py-20 md:py-40 px-6 md:px-12 lg:px-20 max-w-[100rem] mx-auto border-t border-[#13231F]/5">
                <div className="grid lg:grid-cols-12 gap-10 md:gap-16">
                    <div className="lg:col-span-4">
                        <h2 className="text-sm md:text-[20px] font-sans font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#2D5A43] lg:sticky lg:top-32">
                            Who We Are
                        </h2>
                    </div>
                    <div className="lg:col-span-8">
                        <p className="text-2xl md:text-4xl font-serif leading-tight mb-12 md:mb-20 text-[#13231F]">
                            We are a strategic hub bringing together a diverse network of leaders.
                        </p>

                        <div className="space-y-0 mb-12 md:mb-20">
                            {[
                                { t: "Industry Leaders", d: "Market dynamics & execution." },
                                { t: "Legal Professionals", d: "Structural foundation & security." },
                                { t: "Startup Founders", d: "Innovation & disruption." },
                                { t: "Policy Analysts", d: "Regulatory frameworks & bridge building." }
                            ].map((item, i) => (
                                <div key={i} className="group border-b border-[#13231F]/10 py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 hover:md:px-4 transition-all duration-300">
                                    <h4 className="text-xl md:text-3xl font-serif font-medium tracking-tight group-hover:italic transition-all">
                                        {item.t}
                                    </h4>
                                    <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest opacity-50 md:opacity-40 group-hover:opacity-100 transition-opacity">
                                        / {item.d}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="font-sans text-base md:text-xl leading-relaxed opacity-80 border-l-2 border-[#2D5A43] pl-6 md:pl-8 py-2 md:py-4 italic max-w-3xl">
                            By housing these distinct disciplines under one roof, we eliminate the silos that typically slow down progress. We provide the "comprehensive picture" that allows leaders to make informed, high-stakes decisions with confidence.
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT WE DO */}
            <section className="py-20 md:py-40 px-6 md:px-12 lg:px-20 bg-[#13231F] text-[#F5F2ED] rounded-t-[2rem] md:rounded-t-[3rem]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-sm md:text-[20px] font-sans font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-[#F5F2ED] mb-12 md:mb-24">
                        What We Do
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 lg:gap-24">
                        {[
                            { title: "Connecting the Dots", text: "We facilitate the collision of ideas and resources. Our space serves as a literal and metaphorical 'Chamber' where investors meet innovators, and where traditional industry meets the digital future." },
                            { title: "Navigating Complexity", text: "Nepal’s business environment is rich with opportunity but complex in its execution. We simplify this journey by providing a holistic vantage point." },
                            { title: "Cultivating the Future", text: "Our commitment is to the long-term economic architecture of Nepal. By fostering a collaborative environment, we are building a more resilient business culture." }
                        ].map((item, i) => (
                            <div key={i} className="group">
                                <h4 className="text-2xl md:text-3xl font-serif italic text-[#F5F2ED] mb-4 md:mb-8 group-hover:md:pl-2 transition-all duration-300">
                                    {item.title}
                                </h4>
                                <p className="font-sans text-sm md:text-base leading-relaxed opacity-60 group-hover:opacity-90 transition-opacity">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR STORY */}
            <section className="py-20 md:py-40 px-6 md:px-12 lg:px-20 bg-[#EAE6DF]">
                <div className="max-w-4xl mx-auto">
                    <span className="text-sm md:text-[20px] font-sans font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#2D5A43] mb-8 md:mb-16 block">
                        Our Story
                    </span>
                    <div className="space-y-8 md:space-y-12">
                        <p className="font-serif text-2xl md:text-4xl leading-snug">
                            StratB Partners was born from a simple realization: the disconnect between policy and practice in Nepal was a hurdle that talent alone couldn't fix.
                        </p>
                        <div className="text-3xl sm:text-4xl md:text-7xl text-[#13231F] font-serif italic leading-tight py-8 md:py-12 border-y border-[#13231F]/10">
                            "The problem wasn't a lack of talent, but the lack of a <span className="text-[#2D5A43]">unified home</span> for it."
                        </div>
                        <p className="font-sans text-base md:text-xl leading-relaxed opacity-70">
                            We built StratB to be the one-stop ecosystem we felt was missing: a strategic hub where legal precision, technical innovation, and business intelligence converge.
                        </p>
                    </div>
                </div>
            </section>

            {/* MODALITY */}
            <section className="py-20 md:py-40 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                <h2 className="text-sm md:text-[20px] font-sans font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#2D5A43] mb-12 md:mb-24">
                    Working Modality
                </h2>
                <div className="grid md:grid-cols-2 gap-12 md:gap-32">
                    <div className="space-y-6 md:space-y-8">
                        <h4 className="text-2xl md:text-4xl font-serif font-medium tracking-tight italic">
                            A Collaborative Model
                        </h4>
                        <p className="font-sans text-base md:text-lg opacity-80 leading-relaxed">
                            We operate as a dynamic Platform Hub. We believe that the complexities of the modern economy cannot be solved by a single entity.
                        </p>
                        <div className="bg-[#2D5A43] text-[#F5F2ED] p-6 md:p-10 rounded-xl md:rounded-2xl">
                            <p className="font-sans text-base md:text-lg leading-relaxed italic opacity-90">
                                Currently, our platform serves as the central hub for <span className="font-bold underline underline-offset-4">Robin Law and Policy Associates</span>, integrating specialized legal expertise.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-6 md:space-y-8">
                        <h4 className="text-2xl md:text-4xl font-serif font-medium tracking-tight italic">
                            Our Approach
                        </h4>
                        <p className="font-sans text-base md:text-lg opacity-80 leading-relaxed">
                            We are actively expanding our ecosystem by reaching out to eminent figures from finance, industry, technology, and governance.
                        </p>
                        <div className="border border-[#13231F]/20 p-6 md:p-10 rounded-xl md:rounded-2xl italic font-serif text-xl md:text-2xl">
                            "Access a curated collective dedicated to the Nepalese market."
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-24 px-6 md:px-8 text-center border-t border-[#13231F]/5 bg-[#F5F2ED]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto"
                >
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-serif italic mb-8 md:mb-10 tracking-tight text-[#13231F]">
                        Let's grow together.
                    </h3>

                    <Link
                        to="/contact-us"
                        className="group relative inline-flex items-center gap-4 bg-[#13231F] text-[#F5F2ED] px-8 md:px-10 py-4 md:py-5 rounded-full overflow-hidden transition-all duration-500 hover:bg-[#2D5A43] hover:shadow-lg"
                    >
                        <span className="relative z-10 font-sans font-bold uppercase text-[10px] tracking-[0.4em]">
                            Get in Touch
                        </span>
                        <ArrowRight
                            size={16}
                            className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                        />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutPage;