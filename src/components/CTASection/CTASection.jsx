'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
    const sectionRef = useRef(null);
    const circlesRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const btnRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
                defaults: { ease: "power3.out" },
            });

            // Background Circles
            const circles = circlesRef.current?.children;
            if (circles?.length) {
                tl.fromTo(
                    circles,
                    { scale: 0.8, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 0.6,
                        duration: 2,
                        stagger: 0.15,
                        ease: "elastic.out(1, 0.6)",
                    },
                    0
                );

                gsap.to(circlesRef.current, {
                    rotation: 360,
                    duration: 120,
                    repeat: -1,
                    ease: "none",
                });
            }

            // Text Animations
            tl.from("h2", { y: 40, opacity: 0, duration: 1 }, 0.3);
            if (titleRef.current) {
                tl.from(titleRef.current, { y: 50, opacity: 0, duration: 1.2, ease: "back.out(1.2)" }, 0.5);
            }

            const paragraphs = contentRef.current?.querySelectorAll("p");
            if (paragraphs?.length) {
                tl.from(paragraphs, { y: 30, opacity: 0, duration: 1, stagger: 0.2 }, 0.8);
            }

            // Button Entrance
            if (btnRef.current) {
                tl.fromTo(
                    btnRef.current,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" },
                    1.0
                );
            }

            // Button Hover Effect
            const btn = btnRef.current;
            const onEnter = () => gsap.to(btn, { scale: 1.08, boxShadow: "0 25px 50px rgba(234,88,12,0.4)", duration: 0.4 });
            const onLeave = () => gsap.to(btn, { scale: 1, boxShadow: "0 10px 20px rgba(0,0,0,0.1)", duration: 0.4 });

            btn?.addEventListener("mouseenter", onEnter);
            btn?.addEventListener("mouseleave", onLeave);

            return () => {
                btn?.removeEventListener("mouseenter", onEnter);
                btn?.removeEventListener("mouseleave", onLeave);
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen bg-orange-50/40 flex items-center justify-center overflow-hidden py-32">

            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 8s ease infinite;
        }
      `}</style>

            {/* Background Decorative Circles */}
            <div ref={circlesRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[1000px] h-[1000px] border border-orange-200/60 rounded-full" />
                <div className="absolute w-[800px] h-[800px] border border-orange-300/50 rounded-full border-dashed" />
                <div className="absolute w-[600px] h-[600px] border border-red-300/40 rounded-full" />
                <div className="absolute w-[400px] h-[400px] border border-yellow-400/50 rounded-full border-dashed" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <div ref={contentRef}>
                    <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 tracking-tight">
                        Ready to grow?
                    </h2>

                    <h1 ref={titleRef} className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 animate-gradient">
                            Invest in Nepal
                        </span>
                    </h1>

                    <p className="mt-10 text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-light">
                        Tap into a booming market of innovation. From high-growth startups to
                        large-scale infrastructure, we connect you with the opportunities
                        <span className="text-orange-600 font-bold"> shaping the future of South Asia</span>.
                    </p>
                </div>

                {/* Clean CTA Button */}
                <div className="mt-20">
                    <a
                        ref={btnRef}
                        href="/invest"
                        className="group inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-bold text-2xl tracking-wide rounded-full px-16 py-7 shadow-2xl transition-all duration-300"
                    >
                        <span>START INVESTING</span>
                        <span className="ml-4 text-3xl transition-transform group-hover:translate-x-3">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;