// src/pages/StartupHubPage.jsx
'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown, ExternalLink, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// === ALL 4 CARDS ===
const startupCards = [
    {
        id: 'register-innovate',
        title: 'Register & Innovate',
        subtitle: 'Legal Foundations for Startups',
        // IMAGE FIX: Professional signing documents/legal paperwork context
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
        color: 'bg-green-600',
        type: 'guide',
        detailContent: () => (
            <div className="space-y-16 md:space-y-20">
                <div className="text-center py-8 md:py-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        How to Register Your Startup in Nepal (2025 Guide)
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-600 mt-4 md:mt-6 max-w-3xl mx-auto">
                        Step-by-step process used by Khalti, eSewa, CloudFactory, and 3,900+ other startups.
                    </p>
                </div>

                {/* VISUAL AID FOR PROCESS */}


                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {["3,900+ Startups", "100% Online Possible", "7–14 Days Total"].map((stat, i) => (
                        <div key={i} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 md:p-10 text-center border border-green-200 shadow-sm">
                            <h3 className="text-3xl md:text-5xl font-bold text-green-700">{stat}</h3>
                        </div>
                    ))}
                </div>

                <div className="space-y-8 md:space-y-12">
                    {[
                        { step: "1", title: "Choose Private Limited Company", desc: "Best for fundraising. No minimum capital. 1–100 shareholders allowed." },
                        { step: "2", title: "Reserve Name Online", desc: "ocr.gov.np → Name Search → Rs 500–2,000 → Approved in 24–48 hrs", link: "https://ocr.gov.np" },
                        { step: "3", title: "Submit MoA, AoA & Documents", desc: "100% online since 2024. Cost: Rs 10K–25K total." },
                        { step: "4", title: "Get Startup Recognition", desc: "Free certificate → unlocks Rs 2M grant + 5-year tax holiday", link: "https://moics.gov.np" }
                    ].map((s, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start bg-white rounded-2xl p-6 md:p-10 shadow-md border">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl md:text-4xl font-bold">{s.step}</div>
                            <div>
                                <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">{s.title}</h3>
                                <p className="text-sm md:text-lg text-gray-600 leading-relaxed">{s.desc}</p>
                                {s.link && (
                                    <a
                                        href={s.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-2 md:mt-4 text-green-600 font-bold hover:text-green-700 transition"
                                    >
                                        Go to Portal <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <FAQSection />
            </div>
        )
    },
    {
        id: 'build-mvp-lean',
        title: 'Build Your MVP Lean',
        subtitle: 'Rapid Prototyping in Nepal',
        // IMAGE FIX: Tech team working / Coding / Whiteboard
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
        type: 'contact'
    },
    {
        id: 'secure-funding',
        title: 'Secure Early Funding',
        subtitle: 'From Grants to VC in Nepal',
        // IMAGE FIX: Handshake / Business Deal / Meeting
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80",
        type: 'contact'
    },
    {
        id: 'join-ecosystem',
        title: 'Join the Ecosystem',
        subtitle: 'Network & Scale Locally',
        // IMAGE FIX: Coworking space / Networking event / Community
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
        type: 'contact'
    }
];

// === FAQ SECTION ===
function FAQSection() {
    const [open, setOpen] = useState(null);
    const faqs = [
        { q: "Do I need a lawyer?", a: "Recommended but not required. Costs Rs 15K–25K." },
        { q: "Can foreigners register?", a: "Yes! 100% foreign ownership allowed in most sectors." },
        { q: "What is Startup Recognition?", a: "Free certificate → grants + tax holiday." },
        { q: "How much to build an MVP?", a: "Rs 5–50 lakhs depending on complexity." }
    ];

    return (
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-12">FAQ</h2>
            <div className="space-y-4 md:space-y-6 max-w-3xl mx-auto">
                {faqs.map((f, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">
                        <button
                            onClick={() => setOpen(open === i ? null : i)}
                            className="w-full px-6 md:px-8 py-4 md:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
                        >
                            <span className="text-base md:text-lg font-semibold">{f.q}</span>
                            {open === i ? <X size={20} /> : <ChevronDown size={20} />}
                        </button>
                        {open === i && <div className="px-6 md:px-8 pb-4 md:pb-6 text-gray-600 text-sm md:text-base">{f.a}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

// === INDEX PAGE ===
function StartupGuideIndex({ cards }) {
    const navigate = useNavigate();

    return (
        <section className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 md:py-28 px-4 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="mb-16 md:mb-28 text-center space-y-4">
                    <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900">Build Your</h1>
                    <h1 className="text-7xl md:text-8xl font-extrabold">
                        <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                            Startup in Nepal
                        </span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                    {/* Register & Innovate → Large */}
                    <motion.div className="md:col-span-5 md:row-span-3">
                        <Link to={`/hub/${cards[0].id}`} className="block relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl">
                            <img src={cards[0].image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-green-600/90 backdrop-blur-sm w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-md">
                                <Plus className="w-8 h-8 md:w-12 md:h-12 text-white" strokeWidth={3} />
                            </div>
                            <div className="absolute top-4 left-4 text-white">
                                <p className="text-2xl md:text-4xl font-extrabold leading-snug">Register &<br />Innovate</p>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Build MVP + Secure Funding */}
                    <motion.div className="md:col-span-7 md:grid md:grid-cols-2 md:gap-4">
                        {[cards[1], cards[2]].map((card) => (
                            <div
                                key={card.id}
                                onClick={() => navigate('/contact')}
                                className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl cursor-pointer mb-4 md:mb-0"
                            >
                                <img src={card.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-white">
                                    <p className="text-xl md:text-2xl font-extrabold leading-snug">
                                        {card.title.split(' ')[0]}<br />
                                        <span className="text-orange-300">{card.title.split(' ').slice(1).join(' ')}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Join the Ecosystem */}
                    <motion.div className="md:col-span-7">
                        <div
                            onClick={() => navigate('/contact')}
                            className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl cursor-pointer"
                        >
                            <img src={cards[3].image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-white">
                                <p className="text-xl md:text-2xl font-extrabold leading-snug">
                                    {cards[3].title.split(' ')[0]}<br />
                                    <span className="text-orange-300">{cards[3].title.split(' ').slice(1).join(' ')}</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// === DETAIL PAGE ===
function StartupDetail({ cards }) {
    const { cardId } = useParams();
    const navigate = useNavigate();
    const card = cards.find(c => c.id === cardId);

    if (!card || card.type !== 'guide') {
        navigate('/contact', { replace: true });
        return null;
    }

    return (
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="min-h-screen bg-white">
            <div className="relative h-80 md:h-96 lg:h-[28rem] overflow-hidden">
                <img src={card.image} alt="" className="w-full h-full object-cover brightness-[.4]" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
                    <button
                        onClick={() => navigate('/hub')}
                        className="absolute top-4 md:top-8 left-4 md:left-8 text-white/80 hover:text-white flex items-center gap-2 text-sm uppercase tracking-widest"
                    >
                        <ArrowLeft size={18} /> Back to Guide
                    </button>
                    <p className="text-sm md:text-base font-semibold uppercase tracking-widest text-white/70">{card.subtitle}</p>
                    <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-snug mt-2">{card.title}</h1>
                </div>
            </div>
            <div className="max-w-5xl mx-auto py-12 md:py-20 px-4 md:px-8">
                <card.detailContent />
            </div>
        </motion.section>
    );
}

// === MAIN EXPORT ===
export default function StartupHubPage() {
    const { cardId } = useParams();
    return cardId ? <StartupDetail cards={startupCards} /> : <StartupGuideIndex cards={startupCards} />;
}