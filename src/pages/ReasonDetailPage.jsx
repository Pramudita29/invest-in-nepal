'use client';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, Grid3x3, PhoneCall, TrendingUp } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { reasons } from "../data/reasons";

gsap.registerPlugin(ScrollTrigger);

export default function ReasonDetailPage() {
    const sectionRef = useRef(null);
    const circlesRef = useRef(null);
    const contentRef = useRef(null);
    const btnRef = useRef(null);
    const noteRef = useRef(null);
    const floatingRef = useRef(null);

    const { slug } = useParams();
    const navigate = useNavigate();
    const reason = reasons.find((r) => r.id === slug);
    const accent = reason ? getAccentColor(reason.title) : "#2563eb";

    // Scroll to top on page load
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // CTA Animations + Floating Note
    useLayoutEffect(() => {
        if (!reason) return;

        const ctx = gsap.context(() => {
            // Circles animation
            if (circlesRef.current) {
                const circles = circlesRef.current.children;
                gsap.fromTo(
                    circles,
                    { scale: 0.8, opacity: 0 },
                    { scale: 1, opacity: 0.6, duration: 2, stagger: 0.15, ease: "elastic.out(1,0.6)" }
                );
                gsap.to(circlesRef.current, { rotation: 360, duration: 120, repeat: -1, ease: "none" });
            }

            // Text entrance
            gsap.from("h2", { y: 20, opacity: 0, duration: 1 });
            if (contentRef.current) {
                const paragraphs = contentRef.current.querySelectorAll("p");
                gsap.from(paragraphs, { y: 20, opacity: 0, duration: 1, stagger: 0.15 });
            }

            // Button animation + hover
            if (btnRef.current) {
                gsap.fromTo(btnRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1,0.5)" });
                btnRef.current.addEventListener("mouseenter", () => {
                    gsap.to(btnRef.current, { scale: 1.05, boxShadow: `0 20px 40px ${accent}40`, duration: 0.3 });
                });
                btnRef.current.addEventListener("mouseleave", () => {
                    gsap.to(btnRef.current, { scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.3 });
                });
            }

            // Floating Note animation
            if (noteRef.current) {
                gsap.to(noteRef.current, { y: 10, rotation: 5, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
            }

            // Floating Icon animation
            if (floatingRef.current) {
                gsap.to(floatingRef.current, { y: -8, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, [reason, accent]);

    if (!reason) return null;

    const { title, shortDescription, image, stats = [], content = [] } = reason;

    return (
        <div className="min-h-screen bg-gray-50 relative">
            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-6 pt-10 lg:px-8">
                <button
                    onClick={() => navigate(-1)}
                    className="text-gray-600 hover:text-gray-900 flex items-center gap-2 text-sm uppercase tracking-wider transition"
                >
                    <ArrowLeft size={18} /> Back to Reasons
                </button>
            </div>

            {/* Header */}
            <header className="py-12 max-w-5xl mx-auto text-center px-6 lg:px-8">
                <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-gray-500">Report Detail</p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">{title}</h1>
                <p className="mt-3 text-base md:text-lg text-gray-600 font-light">{shortDescription}</p>
            </header>

            {/* Full-width Image */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
                <div className="w-full h-64 overflow-hidden rounded-xl">
                    <img src={image} alt={title} className="w-full h-full object-cover brightness-[.9]" />
                </div>
            </div>

            {/* Stats */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 p-6 rounded-xl bg-white shadow-md border-t-4" style={{ borderColor: accent }}>
                <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                    <TrendingUp size={20} style={{ color: accent }} /> Key Metrics
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.slice(0, 4).map((s, i) => (
                        <div key={i}>
                            <div className="text-2xl font-extrabold" style={{ color: accent }}>
                                {s.prefix}{s.value.toLocaleString()}{s.suffix}
                            </div>
                            <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-3 flex items-center gap-2">
                    <Grid3x3 size={24} style={{ color: accent }} /> Detailed Breakdown
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                    {content.map((c, i) => (
                        <div key={i} id={`section-${i}`} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
                            <div className="text-4xl font-extralight mb-3 leading-none" style={{ color: accent }}>{(i + 1).toString().padStart(2, '0')}</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">{c.heading}</h3>
                            <p className="text-base text-gray-700 leading-relaxed">{c.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section ref={sectionRef} className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-12">
                {/* Circles */}
                <div ref={circlesRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute w-[600px] h-[600px] rounded-full border" style={{ borderColor: `${accent}60` }} />
                    <div className="absolute w-[450px] h-[450px] rounded-full border-dashed" style={{ borderColor: `${accent}40` }} />
                    <div className="absolute w-[300px] h-[300px] rounded-full border" style={{ borderColor: `${accent}20` }} />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" ref={contentRef}>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 tracking-tight">Ready for Consultation?</h2>
                    <p className="mt-3 text-base md:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed font-light">
                        Connect with our experts and explore tailored business opportunities in Nepal.
                    </p>

                    {/* CTA Button */}
                    <a ref={btnRef} href="/contact" className="mt-8 inline-flex items-center justify-center px-10 py-4 rounded-full text-white font-bold text-lg" style={{ backgroundColor: accent }}>
                        Get Consultation <ArrowRight size={20} className="ml-2" />
                    </a>
                </div>
            </section>

            {/* Floating Consultation Icon */}
            <a
                ref={floatingRef}
                href="/contact-us"
                className="fixed bottom-8 right-8 w-16 h-16 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition hover:brightness-90"
                style={{ backgroundColor: accent }}
                title="Book a Consultation"
            >
                <PhoneCall size={28} />
            </a>
        </div>
    );
}

// Helper to get accent color
function getAccentColor(title) {
    if (title.includes("Trade")) return "#059669";
    if (title.includes("Labour") || title.includes("Labor")) return "#4f46e5";
    if (title.includes("Strategic")) return "#d97706";
    if (title.includes("Visa")) return "#ec4899";
    if (title.includes("Policy")) return "#7c3aed";
    return "#2563eb";
}
