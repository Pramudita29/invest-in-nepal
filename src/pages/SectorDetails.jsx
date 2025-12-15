// src/pages/SectorDetail.jsx
import { ArrowLeft, ArrowUpRight, Briefcase, Building2, CheckCircle2, ChevronDown, Globe, Lightbulb, TrendingUp, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { sectorData } from '../data/sectorData';

export default function SectorDetail() {
    const { id } = useParams();
    const data = sectorData[id];

    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!data) {
        return (
            <main className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-center bg-white/10 p-10 rounded-xl shadow-2xl border border-white/20">
                    <h1 className="text-4xl font-bold text-white mb-4">Sector Not Found</h1>
                    <Link to="/" className="text-cyan-400 hover:underline flex items-center justify-center gap-2 mt-4">
                        <ArrowLeft className="w-5 h-5" /> Back to Sectors
                    </Link>
                </div>
            </main>
        );
    }

    const growthData = data.growthData || [];
    const fdiData = data.fdiData || [];
    const upcomingProjects = data.majorProjects || [];
    const allFacts = data.facts || [];
    const faqs = data.faqs || [];
    const guidance = data.investmentGuidance || [];

    const getGraphColor = () => {
        if (data.accent.includes('orange')) return '#f97316'; // orange-600
        if (data.accent.includes('cyan')) return '#06b6d4'; // cyan-600
        if (data.accent.includes('green')) return '#22c55e'; // green-600
        if (data.accent.includes('blue')) return '#3b82f6'; // blue-600
        if (data.accent.includes('purple')) return '#a855f7'; // purple-600
        if (data.accent.includes('gray')) return '#475569'; // slate-600
        return '#64748b'; // slate-500 fallback
    };
    const graphColor = getGraphColor();

    const getStatusClasses = (status) => {
        switch (status) {
            case 'Under Construction': return 'text-orange-700 bg-orange-100 border border-orange-300';
            case 'Pre-Construction': return 'text-blue-700 bg-blue-100 border border-blue-300';
            case 'Completed':
            case 'Operational': return 'text-green-700 bg-green-100 border border-green-300';
            default: return 'text-gray-700 bg-gray-100 border border-gray-300';
        }
    };

    return (
        // Changed to a clean, solid background for main content
        <main className="min-h-screen bg-white font-sans text-gray-900">

            {/* HERO - Dynamic full-width banner */}
            <div className="relative h-[65vh] w-full overflow-hidden bg-gray-900">
                <img
                    src={data.heroImage}
                    alt={data.title}
                    // Full opacity and cover, relying on the overlay for text legibility
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                {/* Enhanced Gradient Overlay (Accent Color) */}
                <div className={`absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-${data.bgAccent}/80`} />

                <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 md:px-16 max-w-7xl mx-auto">
                    <Link to="/" className="text-white/80 hover:text-white mb-8 uppercase tracking-widest text-sm font-bold flex items-center gap-3 w-fit transition-all group">
                        {/* Clean back button */}
                        <div className="p-2 rounded-full border border-white/50 group-hover:bg-white/10 transition-all">
                            <ArrowLeft className="w-5 h-5" />
                        </div>
                        Back to All Sectors
                    </Link>
                    <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4 tracking-tighter drop-shadow-md">
                        {data.title}
                    </h1>
                    <p className="text-xl md:text-3xl font-light text-white/90 max-w-5xl drop-shadow-sm border-l-4 border-white/50 pl-4">
                        {data.tagline}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-16 -mt-12 relative z-20"> {/* Slightly less negative margin */}

                {/* KEY METRICS - Clean, prominent cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {data.numbers?.map((num, i) => (
                        <div
                            key={i}
                            // Solid white background, elevated shadow, no backdrop blur
                            className="group relative overflow-hidden bg-white rounded-xl shadow-xl border-t-4 border-gray-100 p-6 hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Color strip on hover */}
                            <div className={`absolute inset-x-0 bottom-0 h-1.5 ${data.bgAccent} opacity-0 group-hover:opacity-100 transition-all`} />

                            <div className="flex justify-between items-start mb-3">
                                <span className="text-gray-500 text-sm font-bold uppercase tracking-wider">{num.label}</span>
                                <ArrowUpRight className={`w-6 h-6 ${data.accent} opacity-60 group-hover:opacity-100 transition`} />
                            </div>
                            <p className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-none">
                                {num.value}
                                <span className={`text-3xl md:text-4xl ${data.accent} font-extrabold ml-1`}>{num.suffix}</span>
                            </p>
                        </div>
                    ))}
                </div>

                {/* GROWTH STORY - Clean layout with accent focus */}
                {growthData.length > 0 ? (
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center">
                        <div className="lg:col-span-5 space-y-6">
                            <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full ${data.bgAccent}/15 border border-gray-200`}>
                                <TrendingUp className={`w-7 h-7 ${data.accent}`} />
                                <span className="text-sm font-extrabold uppercase tracking-widest text-gray-700">Growth Outlook</span>
                            </div>
                            <h2 className="text-5xl font-black leading-tight">Market Trajectory</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">{data.description}</p>
                        </div>

                        <div className="lg:col-span-7">
                            {/* Solid card styling */}
                            <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-8">
                                <div className="flex justify-between items-center mb-8">
                                    <div>
                                        <p className="text-xl font-extrabold text-gray-800">Revenue Forecast (USD M)</p>
                                        <p className="text-sm text-gray-500">Projected Market Size Over Time</p>
                                    </div>
                                    <span className={`px-4 py-2 rounded-full text-white text-xs font-bold ${data.bgAccent} shadow-md`}>
                                        5-Year Outlook
                                    </span>
                                </div>
                                <div className="h-80">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={growthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                            <defs>
                                                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor={graphColor} stopOpacity={0.6} />
                                                    <stop offset="95%" stopColor={graphColor} stopOpacity={0.05} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="5 5" stroke="#f3f4f6" vertical={false} />
                                            <XAxis dataKey="year" tick={{ fontSize: 13, fill: '#64748b' }} axisLine={false} tickLine={false} />
                                            <YAxis tick={{ fontSize: 13, fill: '#64748b' }} axisLine={false} tickLine={false} />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: 'white', padding: '10px' }}
                                                labelStyle={{ color: '#94a3b8' }}
                                                formatter={(value) => [`$${value}M`, 'Revenue']}
                                            />
                                            <Area type="monotone" dataKey="value" stroke={graphColor} strokeWidth={4} fill="url(#colorGradient)" dot={{ r: 4, fill: graphColor, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <section className="max-w-4xl mb-24">
                        <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full ${data.bgAccent}/15 border border-gray-200 mb-4`}>
                            <Lightbulb className={`w-7 h-7 ${data.accent}`} />
                            <span className="text-sm font-extrabold uppercase tracking-widest text-gray-700">Overview</span>
                        </div>
                        <h2 className="text-5xl font-black mb-6">Why Invest in {data.title}?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{data.description}</p>
                    </section>
                )}

                {/* FDI + ADVANTAGES - Clean grid layout */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                    <div>
                        <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
                            <Globe className={`w-8 h-8 ${data.accent}`} />
                            Global FDI Sources
                        </h3>
                        {/* Solid card styling */}
                        <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 h-96">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={fdiData} layout="vertical" margin={{ left: 10, right: 30 }}>
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="name" type="category" tick={{ fontSize: 14, fontWeight: 700, fill: '#1f2937' }} width={110} axisLine={false} tickLine={false} />
                                    <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={25}>
                                        {fdiData.map((entry, i) => (
                                            <Cell key={i} fill={i === 0 ? graphColor : (i === 1 ? graphColor + 'cc' : '#e5e7eb')} />
                                        ))}
                                    </Bar>
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: 'white', padding: '10px' }}
                                        labelStyle={{ color: '#94a3b8' }}
                                        formatter={(value) => [`${value}%`, 'Share']}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-3xl font-black mb-6">Strategic Advantages</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {allFacts.map((fact, i) => (
                                <div key={i} className="flex gap-4 p-6 rounded-xl bg-gray-50 shadow-md hover:bg-white hover:shadow-lg transition-all border border-gray-200">
                                    <div className={`w-10 h-10 rounded-full ${data.bgAccent}/20 flex items-center justify-center flex-shrink-0 border-2 ${data.accent}/50`}>
                                        <CheckCircle2 className={`w-5 h-5 ${data.accent}`} />
                                    </div>
                                    <p className="text-base font-medium text-gray-700 leading-relaxed">{fact}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* MAJOR PROJECTS - Clean cards */}
                {upcomingProjects.length > 0 && (
                    <section className="mb-24">
                        <h2 className="text-5xl font-black text-center mb-12">Major Projects & Pipelines</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {upcomingProjects.map((project, i) => (
                                <div key={i} className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all border border-gray-200 overflow-hidden transform hover:-translate-y-1 duration-300">
                                    <div className={`h-2 ${data.bgAccent}`} />
                                    <div className="p-7">
                                        <div className={`w-14 h-14 rounded-full ${data.bgAccent}/15 flex items-center justify-center mb-4 border border-${data.accent}/20`}>
                                            <Zap className={`w-7 h-7 ${data.accent}`} />
                                        </div>
                                        <h4 className="text-2xl font-black mb-2 leading-snug">{project.name}</h4>
                                        <p className="text-lg font-bold text-gray-600 mb-3">{project.capacity}</p>
                                        <p className="text-sm text-gray-500 mb-5 line-clamp-4">{project.details}</p>

                                        <div className="space-y-3 text-sm border-t border-gray-100 pt-5">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-500 flex items-center gap-2 font-medium"><Building2 className="w-4 h-4" /> Developer</span>
                                                <span className="font-semibold text-gray-800">{project.developer}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-500 flex items-center gap-2 font-medium"><Briefcase className="w-4 h-4" /> Completion</span>
                                                <span className="font-semibold text-gray-800">{project.completion}</span>
                                            </div>
                                        </div>
                                        <span className={`inline-block mt-6 px-4 py-2 text-xs font-extrabold uppercase rounded-full ${getStatusClasses(project.status)} shadow-sm`}>
                                            {project.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* INVESTMENT GUIDANCE - Clean timeline style */}
                {guidance.length > 0 && (
                    <section className="mb-24">
                        <h2 className="text-5xl font-black text-center mb-12">Investment Journey Steps</h2>
                        <div className="max-w-5xl mx-auto">
                            <ol className="relative border-l-4 border-gray-200 space-y-10 pl-6">
                                {guidance.map((step, i) => (
                                    <li key={i} className="mb-10 ml-6">
                                        {/* Timeline Dot */}
                                        <div className={`absolute -left-3.5 w-7 h-7 rounded-full ${data.bgAccent} ring-8 ring-white flex items-center justify-center text-white font-black shadow-md`}>
                                            {i + 1}
                                        </div>
                                        <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                                            <h3 className="text-xl font-bold mb-2 text-gray-800">Step {i + 1}: {step.split(':')[0]}</h3>
                                            <p className="text-base text-gray-600 leading-relaxed">{step.split(':').slice(1).join(':').trim() || step}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </section>
                )}

                {/* FAQ - Clean accordion with accent hover */}
                {faqs.length > 0 && (
                    <section className="mb-24">
                        <h2 className="text-5xl font-black text-center mb-12">Frequently Asked Questions</h2>
                        <div className="max-w-4xl mx-auto space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden group">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className={`w-full px-6 py-5 text-left flex justify-between items-center transition-all ${openFaq === i ? `${data.bgAccent}/10` : 'hover:bg-gray-50'}`}
                                    >
                                        <span className={`text-lg font-extrabold pr-8 ${openFaq === i ? data.accent : 'text-gray-900'} transition-colors`}>{faq.question}</span>
                                        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === i ? `rotate-180 ${data.accent}` : ''}`} />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                                            <p className="text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* FINAL CTA - Premium, full-width CTA */}
                <section className="relative overflow-hidden rounded-xl shadow-2xl mb-16 border-t-8 border-gray-100">
                    <div className="absolute inset-0">
                        <img src={data.heroImage} alt="" className="w-full h-full object-cover brightness-30" />
                        <div className={`absolute inset-0 bg-gray-900 mix-blend-overlay opacity-70`} /> {/* Neutral, dark overlay */}
                    </div>

                    <div className="relative z-10 py-24 px-8 text-center">
                        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tighter drop-shadow-lg">
                            Ready to Invest in {data.title}?
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
                            Connect with our expert team for personalized guidance and project sourcing.
                        </p>
                        <Link
                            to="/invest"
                            className={`inline-flex items-center gap-3 bg-${data.bgAccent} text-white hover:bg-${data.accent}/90 px-12 py-5 rounded-full font-extrabold text-lg shadow-2xl hover:scale-[1.03] transition-all duration-300 transform`}
                        >
                            <Briefcase className="w-6 h-6" />
                            Start Investment Journey
                        </Link>
                    </div>
                </section>

            </div>
        </main>
    );
}