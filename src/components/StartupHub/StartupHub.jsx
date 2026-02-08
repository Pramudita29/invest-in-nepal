'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Layers, ShieldCheck, Users, Zap } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// --- SEQUOIA BRAND PALETTE ---
const SEOQUIA_GREEN = "#002E28";
const SEOQUIA_ORANGE = "#FF4F00";
const BONE_WHITE = "#F4F1EE";

// --- YOUR ORIGINAL DATA & IMAGES ---
const startupCards = [
    {
        id: 'register-innovate',
        title: 'Register & Innovate',
        subtitle: 'Foundations',
        icon: <ShieldCheck size={20} />,
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
        type: 'guide',
        description: 'Establishing the legal architecture for venture-scale operations in Nepal.',
        content: () => (
            <div className="space-y-24 max-w-2xl">
                <div className="space-y-6">
                    <p className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: SEOQUIA_ORANGE }}>Protocol // 01</p>
                    <h2 className="editorial-font text-6xl italic leading-tight" style={{ color: SEOQUIA_GREEN }}>Legal <br /> Architecture.</h2>
                </div>
                <div className="space-y-16">
                    {[
                        { t: "Private Limited Company", d: "The prerequisite for institutional investment. We handle the 100-shareholder capacity setup." },
                        { t: "OCR Digital Protocol", d: "Reserve your identity via the OCR portal. Standard timeline is 7–14 days.", link: "https://ocr.gov.np" },
                        { t: "MoA & AoA", d: "Formalize your articles to ensure long-term stability and intellectual property protection." }
                    ].map((s, i) => (
                        <div key={i} className="group border-l-2 pl-8 transition-colors" style={{ borderColor: `${SEOQUIA_GREEN}1A` /* 10% opacity */ }}>
                            <h4 className="font-bold mb-2 text-xl tracking-tighter" style={{ color: SEOQUIA_GREEN }}>{s.t}</h4>
                            <p className="text-lg font-serif italic" style={{ color: `${SEOQUIA_GREEN}99` /* 60% opacity */ }}>{s.d}</p>
                            {s.link && (
                                <a href={s.link} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mt-4" style={{ color: SEOQUIA_ORANGE }}>
                                    Access Portal <ExternalLink size={12} />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    // ... other cards stay the same
    {
        id: 'product-engineering',
        title: 'Product Engineering',
        subtitle: 'Prototyping',
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
        icon: <Zap size={20} />,
        type: 'contact',
        description: 'Engineering high-fidelity MVPs and rapid product iteration cycles.'
    },
    {
        id: 'capital-strategy',
        title: 'Capital Strategy',
        subtitle: 'Funding',
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80",
        icon: <Layers size={20} />,
        type: 'contact',
        description: 'Structuring venture deals, cap-tables, and strategic LP alignment.'
    },
    {
        id: 'network-access',
        title: 'Network Access',
        subtitle: 'Community',
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
        icon: <Users size={20} />,
        type: 'contact',
        description: 'Global coalition building and access to Nepal’s startup ecosystem.'
    }
];

function StartupStudioIndex({ cards }) {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(0);

    return (
        <section className="min-h-screen flex flex-col md:flex-row overflow-hidden" style={{ backgroundColor: BONE_WHITE }}>
            {/* LEFT: FIXED NAVIGATION */}
            <div className="w-full md:w-[45%] p-8 md:p-20 flex flex-col justify-between border-r bg-white md:bg-transparent" style={{ borderColor: `${SEOQUIA_GREEN}0D` }}>
                <div className="space-y-16">
                    <div className="space-y-4">
                        <h1 className="editorial-font text-8xl italic tracking-tighter" style={{ color: SEOQUIA_GREEN }}>Hub.</h1>
                        <p className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: `${SEOQUIA_GREEN}66` }}>Venture Resources // 2026</p>
                    </div>

                    <nav className="space-y-0">
                        {cards.map((card, idx) => (
                            <button
                                key={card.id}
                                onMouseEnter={() => setSelected(idx)}
                                onClick={() => card.type === 'guide' ? navigate(`/hub/${card.id}`) : navigate('/contact')}
                                className="w-full flex items-center justify-between py-8 group text-left border-b"
                                style={{ borderColor: `${SEOQUIA_GREEN}0D` }}
                            >
                                <div className="flex items-center gap-8">
                                    <span className={`text-[10px] font-bold transition-colors ${selected === idx ? '' : 'opacity-20'}`} style={{ color: selected === idx ? SEOQUIA_ORANGE : SEOQUIA_GREEN }}>
                                        0{idx + 1}
                                    </span>
                                    <h3 className={`editorial-font text-4xl italic transition-all duration-500 ${selected === idx ? 'translate-x-4' : 'opacity-30 group-hover:opacity-100'}`} style={{ color: SEOQUIA_GREEN }}>
                                        {card.title}
                                    </h3>
                                </div>
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${selected === idx ? 'text-white' : 'opacity-20'}`} style={{ backgroundColor: selected === idx ? SEOQUIA_ORANGE : `${SEOQUIA_GREEN}0D`, color: selected === idx ? 'white' : SEOQUIA_GREEN }}>
                                    <ArrowRight size={18} />
                                </div>
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="pt-12 text-[9px] font-bold uppercase tracking-[0.4em]" style={{ color: `${SEOQUIA_GREEN}66` }}>
                    Institutional Standards Applied
                </div>
            </div>

            {/* RIGHT: VIBRANT DYNAMIC PREVIEW */}
            <div className="hidden md:flex flex-1 bg-white relative items-center justify-center p-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selected}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full flex flex-col"
                    >
                        <div className="flex-1 overflow-hidden mb-12 shadow-[0_30px_60px_rgba(0,46,40,0.1)]">
                            <img
                                src={cards[selected].image}
                                className="w-full h-full object-cover saturate-[1.1]"
                                alt=""
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="p-2 text-white rounded-md" style={{ backgroundColor: SEOQUIA_GREEN }}>{cards[selected].icon}</span>
                                <p className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: SEOQUIA_ORANGE }}>{cards[selected].subtitle}</p>
                            </div>
                            <p className="text-3xl editorial-font italic leading-snug max-w-lg" style={{ color: SEOQUIA_GREEN }}>{cards[selected].description}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

function StartupDetail({ cards }) {
    const { cardId } = useParams();
    const navigate = useNavigate();
    const card = cards.find(c => c.id === cardId);

    if (!card) return null;

    return (
        <section className="min-h-screen" style={{ backgroundColor: BONE_WHITE }}>
            <nav className="p-8 sticky top-0 backdrop-blur-md z-50 border-b flex justify-between items-center" style={{ backgroundColor: `${BONE_WHITE}E6`, borderColor: `${SEOQUIA_GREEN}1A` }}>
                <button onClick={() => navigate('/hub')} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-[#FF4F00]" style={{ color: `${SEOQUIA_GREEN}66` }}>
                    <ArrowLeft size={14} /> Back to Hub
                </button>
                <div className="px-4 py-1 border rounded-full text-[9px] font-bold uppercase tracking-widest" style={{ borderColor: `${SEOQUIA_GREEN}33`, color: SEOQUIA_GREEN }}>
                    Internal Protocol
                </div>
            </nav>
            <div className="max-w-4xl mx-auto py-32 px-6">
                <card.content />
            </div>
        </section>
    );
}

export default function StartupHubPage() {
    const { cardId } = useParams();
    return (
        <div className="antialiased">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700;1,900&display=swap');
                .editorial-font { font-family: 'Playfair Display', serif; }
                body { background-color: ${BONE_WHITE}; }
            `}</style>
            {cardId ? <StartupDetail cards={startupCards} /> : <StartupStudioIndex cards={startupCards} />}
        </div>
    );
}