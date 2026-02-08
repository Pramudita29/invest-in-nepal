'use client';

import Lenis from '@studio-freight/lenis';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Bar, BarChart, Cell, ResponsiveContainer } from 'recharts';
import { sectorData } from '../data/sectorData';

export default function SectorDetail() {
    const { id } = useParams();
    const data = sectorData[id];
    const [openFaq, setOpenFaq] = useState(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!data) return <main className="min-h-screen bg-[#F5F2ED] flex items-center justify-center font-serif italic text-2xl uppercase tracking-tighter">Sector Not Found</main>;

    return (
        <main ref={containerRef} className="min-h-screen bg-[#F5F2ED] font-sans text-[#13231F] selection:bg-[#344E41] selection:text-[#F5F2ED]">

            {/* --- HIGH VISIBILITY BACK BUTTON --- */}
            <nav className="fixed top-8 left-8 z-50">
                <Link to="/" className="group inline-flex items-center gap-4 px-6 py-3 bg-white text-[#13231F] rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-105 active:scale-95 border border-[#13231F]/5">
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold">Return to Index</span>
                </Link>
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="relative h-screen w-full overflow-hidden bg-[#0A0F0D]">
                <motion.div
                    style={{ scale: heroScale, backgroundImage: `url(${data.heroImage})` }}
                    className="absolute inset-0 bg-cover bg-center grayscale-[10%] brightness-[0.35]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0A0F0D]" />

                <div className="relative z-10 h-full flex flex-col justify-center items-center px-8 text-center">
                    <h1 className="text-[14vw] md:text-[10rem] font-serif leading-[0.85] tracking-tighter text-white lowercase">
                        {data.title.split(' ')[0]} <br />
                        <span className="italic font-light text-[#A3B18A] ml-[0.1em]">
                            {data.title.split(' ').slice(1).join(' ')}
                        </span>
                    </h1>
                    <p className="mt-12 text-white/80 text-lg md:text-2xl font-light max-w-2xl italic tracking-wide leading-relaxed px-4">
                        {data.tagline}
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-wrap justify-between items-end">
                    <div className="flex gap-12 md:gap-24">
                        {data.numbers?.map((num, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-white/40 font-mono text-xs uppercase tracking-[0.2em] mb-4">{num.label}</span>
                                <span className="text-white text-4xl md:text-6xl font-serif italic tracking-tighter leading-none">
                                    {num.value}<span className="text-xl not-italic opacity-40 ml-1">{num.suffix}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <div className="pt-32 md:pt-56 space-y-56">

                {/* --- MARKET ANALYSIS --- */}
                <section className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                    <div className="lg:col-span-5">
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#344E41] mb-8 block font-bold">Analysis</span>
                        <h2 className="text-6xl md:text-7xl font-serif leading-[0.95] tracking-tighter lowercase mb-10 text-[#13231F]">
                            The <span className="italic text-[#344E41]">geographic</span> <br />weight of capital.
                        </h2>
                        <p className="text-[#13231F]/80 text-xl font-light leading-relaxed">
                            {data.description}
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#13231F]/10 border border-[#13231F]/5 shadow-2xl overflow-hidden rounded-sm">
                        <div className="bg-white p-12 h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data.fdiData}>
                                    <Bar dataKey="value" radius={[2, 2, 0, 0]} barSize={40}>
                                        {data.fdiData.map((_, i) => (
                                            <Cell key={i} fill={i === 0 ? "#13231F" : "#344E41"} fillOpacity={1 - i * 0.15} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="bg-[#13231F] p-12 flex flex-col justify-center">
                            <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 mb-10 italic">Global Distribution</h4>
                            <div className="space-y-6">
                                {data.fdiData.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4 group">
                                        <span className="text-xs font-mono uppercase tracking-widest text-white/70 group-hover:text-[#A3B18A] transition-colors">{item.name}</span>
                                        <span className="text-xl font-serif italic text-[#A3B18A]">{item.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- ENTRY PROTOCOL GRID --- */}
                <section className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
                    <div className="mb-20">
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#344E41] mb-4 block font-bold italic">Process</span>
                        <h2 className="text-6xl font-serif italic lowercase tracking-tighter">Entry Protocol.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.investmentGuidance.map((step, i) => (
                            <motion.div
                                key={i}
                                className="bg-white p-12 border border-[#13231F]/5 group hover:bg-[#13231F] transition-all duration-700 aspect-square flex flex-col justify-between shadow-sm hover:shadow-2xl"
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 20 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-4xl font-serif italic text-[#344E41]/30 group-hover:text-[#A3B18A] transition-colors duration-500">0{i + 1}</span>
                                <h3 className="text-2xl md:text-3xl font-serif text-[#13231F] group-hover:text-white leading-snug transition-colors duration-500 lowercase">
                                    {step}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* --- STRATEGIC PIPELINE --- */}
                <section className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
                    <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-[#344E41] mb-24 text-center font-bold italic">Strategic Pipelines</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {data.majorProjects.map((project, i) => (
                            <div key={i} className="group border-l-2 border-[#13231F]/5 pl-8 py-6 hover:border-[#344E41] transition-all duration-700">
                                <span className="text-[10px] font-mono text-[#344E41] uppercase mb-8 inline-block tracking-widest font-bold px-3 py-1 border border-[#344E41]/20">{project.status}</span>
                                <h4 className="text-3xl font-serif lowercase mb-6 leading-tight">{project.name}</h4>
                                <p className="text-[#13231F]/60 font-bold leading-relaxed mb-10 text-base">{project.details}</p>
                                <div className="text-xs font-mono uppercase tracking-[0.1em] text-[#13231F]/40 flex justify-between items-center pt-6 border-t border-[#13231F]/5">
                                    <span>{project.developer}</span>
                                    <span className="text-[#344E41] font-bold">{project.completion}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- INSTITUTIONAL ENQUIRIES --- */}
                <section className="max-w-4xl mx-auto px-8">
                    <h2 className="text-5xl font-serif italic mb-20 lowercase text-center text-[#13231F]">Institutional Enquiries</h2>
                    <div className="border-y border-[#13231F]/10 divide-y divide-[#13231F]/10">
                        {data.faqs.map((faq, i) => (
                            <div key={i} className="py-12">
                                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center text-left group">
                                    <span className="text-2xl md:text-3xl font-serif text-[#13231F] group-hover:text-[#344E41] transition-colors">{faq.question}</span>
                                    <ChevronDown className={`w-6 h-6 transition-transform duration-700 text-[#13231F]/30 ${openFaq === i ? 'rotate-180 text-[#344E41]' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                            <p className="mt-8 text-[#13231F]/70 font-light leading-relaxed text-xl max-w-3xl italic">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- FOOTER CTA (ZERO BOTTOM MARGIN) --- */}
                <section className="w-full px-4 md:px-8">
                    <div className="relative py-40 bg-[#13231F] rounded-t-2xl text-center overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 opacity-20 grayscale brightness-50 scale-110" style={{ backgroundImage: `url(${data.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                        <div className="relative z-10 max-w-2xl mx-auto px-8">
                            <span className="font-mono text-xs uppercase tracking-[0.4em] text-[#A3B18A] mb-8 block font-bold italic">Inquiry Desk Open</span>
                            <h2 className="text-6xl md:text-8xl font-serif text-[#F5F2ED] mb-16 tracking-tighter lowercase italic leading-none">
                                Request <span className="not-italic">Advisory.</span>
                            </h2>
                            <Link to="/invest" className="group inline-flex items-center justify-between gap-12 bg-white text-[#13231F] px-10 md:px-16 py-8 hover:bg-[#A3B18A] transition-all duration-500 rounded-sm shadow-xl w-full md:w-auto min-w-[320px]">
                                <span className="font-mono text-xs uppercase tracking-[0.5em] font-bold">Initiate Protocol</span>
                                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}