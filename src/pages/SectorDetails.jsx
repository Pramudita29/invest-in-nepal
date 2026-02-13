'use client';

import Lenis from '@studio-freight/lenis';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Bar, BarChart, Cell, ResponsiveContainer } from 'recharts';
import { sectorData } from '../data/sectorData';

export default function SectorDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
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

    if (!data) {
        return (
            <main className="min-h-screen bg-[#F5F2ED] flex items-center justify-center font-serif italic text-2xl uppercase tracking-tighter text-[#13231F]">
                Sector Not Found
            </main>
        );
    }

    return (
        <main ref={containerRef} className="relative min-h-screen bg-[#F5F2ED] font-sans text-[#13231F] selection:bg-[#344E41] selection:text-[#F5F2ED] overflow-x-hidden">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#0A0F0D] flex flex-col">

                {/* --- BACK BUTTON --- */}
                <div className="absolute top-10 md:top-32 left-6 md:left-8 z-[40]">
                    <button
                        onClick={() => window.history.length > 1 ? navigate(-1) : navigate('/')}
                        className="group inline-flex items-center gap-3 md:gap-4 px-4 py-2 md:px-6 md:py-3 bg-white text-[#13231F] rounded-full shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95 border border-white/10"
                    >
                        <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:-translate-x-1" />
                        <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">Return</span>
                    </button>
                </div>

                <motion.div
                    style={{ scale: heroScale, backgroundImage: `url(${data.heroImage})` }}
                    className="absolute inset-0 bg-cover bg-center grayscale-[10%] brightness-[0.35]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0A0F0D]" />

                {/* --- HERO TEXT --- */}
                <div className="relative z-10 flex-grow flex flex-col justify-center items-center px-6 text-center pt-20">
                    <h1 className="text-[18vw] sm:text-[14vw] lg:text-[10rem] font-serif leading-[0.85] tracking-tighter text-white lowercase">
                        {data.title.split(' ')[0]} <br />
                        <span className="italic font-light text-[#A3B18A] block sm:inline sm:ml-[0.1em]">
                            {data.title.split(' ').slice(1).join(' ')}
                        </span>
                    </h1>
                    <p className="mt-8 md:mt-12 text-white/80 text-base md:text-2xl font-light max-w-2xl italic tracking-wide leading-relaxed">
                        {data.tagline}
                    </p>
                </div>

                {/* --- HERO STATS --- */}
                <div className="relative z-10 w-full p-6 md:p-16">
                    <div className="flex flex-col sm:flex-row gap-8 md:gap-24 items-start sm:items-end">
                        {data.numbers?.map((num, i) => (
                            <div key={i} className="flex flex-col border-l border-white/20 pl-4 sm:border-0 sm:pl-0">
                                <span className="text-white/40 font-mono text-[10px] uppercase tracking-[0.2em] mb-2 md:mb-4">{num.label}</span>
                                <span className="text-white text-4xl md:text-6xl font-serif italic tracking-tighter leading-none">
                                    {num.value}<span className="text-lg md:text-xl not-italic opacity-40 ml-1">{num.suffix}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MAIN CONTENT CONTAINER --- */}
            <div className="py-24 md:py-56 space-y-32 md:space-y-56">

                {/* --- MARKET ANALYSIS --- */}
                <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center">
                    <div className="lg:col-span-5">
                        <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#344E41] mb-6 md:mb-8 block font-bold">Analysis</span>
                        <h2 className="text-5xl md:text-7xl font-serif leading-[0.95] tracking-tighter lowercase mb-8 md:mb-10 text-[#13231F]">
                            The <span className="italic text-[#344E41]">geographic</span> <br className="hidden md:block" />weight of capital.
                        </h2>
                        <p className="text-[#13231F]/80 text-lg md:text-xl font-light leading-relaxed">
                            {data.description}
                        </p>
                    </div>

                    <div className="lg:col-span-7 flex flex-col sm:flex-row bg-[#13231F]/10 border border-[#13231F]/5 shadow-2xl overflow-hidden rounded-sm">
                        <div className="bg-white p-8 md:p-12 h-64 md:h-80 flex-grow sm:w-1/2">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data.fdiData}>
                                    <Bar dataKey="value" radius={[2, 2, 0, 0]} barSize={30}>
                                        {data.fdiData.map((_, i) => (
                                            <Cell key={i} fill={i === 0 ? "#13231F" : "#344E41"} fillOpacity={1 - i * 0.15} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="bg-[#13231F] p-8 md:p-12 flex flex-col justify-center sm:w-1/2">
                            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8 italic">Global Distribution</h4>
                            <div className="space-y-4 md:space-y-6">
                                {data.fdiData.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-3 md:pb-4 group">
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-white/70 group-hover:text-[#A3B18A] transition-colors">{item.name}</span>
                                        <span className="text-lg md:text-xl font-serif italic text-[#A3B18A]">{item.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- ENTRY PROTOCOL GRID --- */}
                <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
                    <div className="mb-12 md:mb-20">
                        <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#344E41] mb-4 block font-bold italic">Process</span>
                        <h2 className="text-5xl md:text-6xl font-serif italic lowercase tracking-tighter">Entry Protocol.</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {data.investmentGuidance.map((step, i) => (
                            <motion.div
                                key={i}
                                className="bg-white p-8 md:p-12 border border-[#13231F]/5 group hover:bg-[#13231F] transition-all duration-700 aspect-square flex flex-col justify-between shadow-sm hover:shadow-2xl"
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 20 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-3xl md:text-4xl font-serif italic text-[#344E41]/30 group-hover:text-[#A3B18A] transition-colors duration-500">0{i + 1}</span>
                                <h3 className="text-xl md:text-3xl font-serif text-[#13231F] group-hover:text-white leading-snug transition-colors duration-500 lowercase">
                                    {step}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* --- STRATEGIC PIPELINE --- */}
                <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
                    <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#344E41] mb-16 md:mb-24 text-center font-bold italic">Strategic Pipelines</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                        {data.majorProjects.map((project, i) => (
                            <div key={i} className="group border-l-2 border-[#13231F]/5 pl-6 md:pl-8 py-4 hover:border-[#344E41] transition-all duration-700">
                                <span className="text-[9px] font-mono text-[#344E41] uppercase mb-6 inline-block tracking-widest font-bold px-2 py-1 border border-[#344E41]/20">{project.status}</span>
                                <h4 className="text-2xl md:text-3xl font-serif lowercase mb-4 leading-tight">{project.name}</h4>
                                <p className="text-[#13231F]/60 font-medium leading-relaxed mb-8 text-sm md:text-base">{project.details}</p>
                                <div className="text-[10px] font-mono uppercase tracking-[0.1em] text-[#13231F]/40 flex justify-between items-center pt-6 border-t border-[#13231F]/5">
                                    <span>{project.developer}</span>
                                    <span className="text-[#344E41] font-bold">{project.completion}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- INSTITUTIONAL ENQUIRIES --- */}
                <section className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-serif italic mb-12 md:mb-20 lowercase text-center text-[#13231F]">Institutional Enquiries</h2>
                    <div className="border-y border-[#13231F]/10 divide-y divide-[#13231F]/10">
                        {data.faqs.map((faq, i) => (
                            <div key={i} className="py-8 md:py-12">
                                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center text-left group gap-4">
                                    <span className="text-xl md:text-3xl font-serif text-[#13231F] group-hover:text-[#344E41] transition-colors">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-700 text-[#13231F]/30 ${openFaq === i ? 'rotate-180 text-[#344E41]' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                            <p className="mt-6 md:mt-8 text-[#13231F]/70 font-light leading-relaxed text-base md:text-xl max-w-3xl italic">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- FOOTER CTA --- */}
                <section className="w-full px-4 md:px-8 pb-4">
                    <div className="relative py-24 md:py-40 bg-[#13231F] rounded-t-2xl text-center overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 opacity-20 grayscale brightness-50 scale-110" style={{ backgroundImage: `url(${data.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                        <div className="relative z-10 max-w-2xl mx-auto px-6">
                            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#A3B18A] mb-6 md:mb-8 block font-bold italic">Inquiry Desk Open</span>
                            <h2 className="text-5xl md:text-8xl font-serif text-[#F5F2ED] mb-12 md:mb-16 tracking-tighter lowercase italic leading-none">
                                Request <span className="not-italic">Advisory.</span>
                            </h2>
                            <Link to="/contact-us" className="group inline-flex items-center justify-between gap-6 md:gap-12 bg-white text-[#13231F] px-8 md:px-16 py-6 md:py-8 hover:bg-[#A3B18A] transition-all duration-500 rounded-sm shadow-xl w-full md:w-auto">
                                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold">Initiate Protocol</span>
                                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}