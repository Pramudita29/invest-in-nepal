'use client';

import { ArrowLeft, CheckCircle, Mail, Phone, Scale } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { practiceAreas } from "../data/legalContent";

export default function LegalTemplate() {
    const { areaId } = useParams();
    const navigate = useNavigate();

    const area = practiceAreas.find(a => a.id === areaId);

    if (!area) {
        return <div className="p-10">Area not found</div>;
    }

    const Icon = area.icon;
    const contact = area.contactInfo || { phone: '(555) LAW-FIRM', email: 'contact@lawfirm.com' };

    return (
        <div className="min-h-screen bg-stone-50 text-slate-800 selection:bg-amber-200 selection:text-amber-900">
            {/* FONT IMPORT */}
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
                    
                    .font-heading { font-family: 'Playfair Display', serif; }
                    .font-body { font-family: 'Lato', sans-serif; }
                `}
            </style>

            <Navbar />

            {/* HERO HEADER */}
            <header
                className="relative py-32 px-4 sm:px-6 lg:px-8 border-b-8 border-amber-700"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.85) 50%, rgba(15, 23, 42, 0.6) 100%), url(${area.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="relative z-10 max-w-7xl mx-auto">
                    <button
                        onClick={() => navigate(-1)}
                        className="group flex items-center gap-2 text-amber-500 hover:text-amber-400 font-body font-medium text-sm tracking-widest uppercase mb-8 transition-colors"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Return to Legal Services
                    </button>

                    <div className="flex flex-col md:flex-row md:items-end gap-6 mb-6">
                        <div className="p-3 bg-amber-700 rounded-sm shadow-sm inline-block">
                            <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold text-white tracking-tight">
                            {area.title}
                        </h1>
                    </div>

                    <div className="h-1 w-24 bg-amber-600 mb-8"></div>

                    <p className="text-xl md:text-2xl max-w-3xl text-slate-200 font-heading italic leading-relaxed opacity-90">
                        "{area.shortDescription || area.desc}"
                    </p>
                </div>
            </header>

            {/* MAIN CONTENT AREA */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 mb-24">

                {/* LEFT COLUMN (Content) */}
                <div className="lg:col-span-8">
                    <section className="bg-white p-8 md:p-12 shadow-sm border-t-4 border-slate-200">
                        <div className="flex items-center gap-3 mb-8">
                            <Scale className="text-amber-700 w-6 h-6" />
                            <h2 className="text-3xl font-heading font-bold text-slate-900">
                                Legal Overview
                            </h2>
                        </div>

                        <div className="font-body text-lg text-slate-600 leading-loose space-y-6">
                            {area.content}

                            <p>
                                At our firm, we understand that {area.title.toLowerCase()} matters require a nuanced approach.
                                Our dedicated team combines decades of litigation experience with a deep understanding of current case law
                                to provide you with the most effective representation possible.
                            </p>
                            <p>
                                We navigate the complexities of the legal system so you don't have to, ensuring every detail
                                of your case is meticulously examined and leveraged for your benefit.
                            </p>
                        </div>

                        <div className="mt-12 bg-slate-50 p-8 border-l-4 border-amber-700">
                            <h4 className="text-xl font-heading font-bold text-slate-900 mb-4">Why Retain Our Firm?</h4>
                            <p className="font-body text-slate-700 leading-relaxed text-lg">
                                We approach {area.title.toLowerCase()} cases with rigorous attention to detail and a commitment to ethical representation.
                                Your outcome is our priority, and we fight tirelessly to protect your rights.
                            </p>
                        </div>
                    </section>

                    {area.keyServices && area.keyServices.length > 0 && (
                        <div className="mt-12">
                            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">Matters We Handle</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {area.keyServices.map((service, index) => (
                                    <div key={index} className="flex items-start gap-4 p-5 bg-white border border-slate-200 hover:border-amber-600 transition-colors shadow-sm group">
                                        <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                                        <span className="font-body text-slate-800 font-medium text-lg">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* RIGHT COLUMN (Sidebar) */}
                <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-8 lg:h-fit">

                    <div className="bg-slate-900 text-white p-8 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-amber-700 opacity-20 rounded-full blur-2xl"></div>

                        <h3 className="text-2xl font-heading font-bold mb-2 text-white">Case Evaluation</h3>
                        <p className="text-slate-400 font-body text-sm mb-8 border-b border-slate-700 pb-4">
                            Confidential & Complimentary
                        </p>

                        <div className="space-y-6 font-body">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="p-2 bg-slate-800 border border-slate-700 group-hover:border-amber-600 transition">
                                    <Phone className="w-5 h-5 text-amber-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider">Call Us 24/7</p>
                                    <p className="text-lg font-bold text-white group-hover:text-amber-500 transition">{contact.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="p-2 bg-slate-800 border border-slate-700 group-hover:border-amber-600 transition">
                                    <Mail className="w-5 h-5 text-amber-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider">Email Us</p>
                                    <p className="text-lg font-bold text-white group-hover:text-amber-500 transition">{contact.email}</p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-8 bg-amber-700 hover:bg-amber-600 text-white font-body font-bold py-4 uppercase tracking-widest text-sm transition duration-200 shadow-lg">
                            Request Consultation
                        </button>
                    </div>

                </aside>
            </div>

            <main className="max-w-7xl mx-auto pt-12 pb-12"></main>
        </div>
    );
}
