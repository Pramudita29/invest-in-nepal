import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MoveRight } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
// 1. Import Link from react-router-dom
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const BRAND = {
    green: "#002E28",
    orange: "#FF4F00",
    paper: "#F4F1EE",
    mutedGreen: "rgba(0, 46, 40, 0.6)",
};

const CTASection = () => {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const btnRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            });

            tl.fromTo(lineRef.current,
                { scaleX: 0 },
                { scaleX: 1, duration: 1.2, ease: "power4.inOut" }
            );

            tl.from(titleRef.current, {
                y: 40,
                opacity: 0,
                duration: 1
            }, "-=0.6");

            const textElements = contentRef.current?.querySelectorAll("p, span, h2");
            if (textElements?.length) {
                tl.from(textElements, {
                    y: 20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.8
                }, "-=0.5");
            }

            tl.fromTo(btnRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    clearProps: "opacity,transform"
                },
                "-=0.3"
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-32"
            style={{ backgroundColor: BRAND.paper }}
        >
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <div ref={lineRef} className="w-24 h-[2px] mx-auto mb-16" style={{ backgroundColor: BRAND.orange }} />

                <div ref={contentRef}>
                    <h2 className="label-sans text-[10px] font-bold tracking-[0.6em] uppercase mb-10" style={{ color: BRAND.green }}>
                        Strategic Partnership
                    </h2>

                    <h1 ref={titleRef} className="editorial-serif text-6xl md:text-[8.5rem] italic tracking-tighter mb-12 leading-[0.85]">
                        <span style={{ color: BRAND.green }}>Partner with the <br /></span>
                        <span style={{ color: BRAND.orange }}>Frontier.</span>
                    </h1>

                    <p className="text-xl md:text-3xl editorial-serif italic max-w-4xl mx-auto leading-relaxed mb-20" style={{ color: BRAND.mutedGreen }}>
                        We bridge institutional capital with Nepal’s most ambitious founders. Join a network of investors
                        <span style={{ color: BRAND.green }} className="font-bold"> shaping the future of South Asia</span>.
                    </p>
                </div>

                <div className="flex justify-center">
                    {/* 2. Changed <a> to <Link> and href to to */}
                    <Link
                        ref={btnRef}
                        to="/consultation"
                        className="group relative inline-flex items-center gap-10 px-16 py-7 overflow-hidden bg-[#002E28] text-[#F4F1EE]"
                    >
                        <div
                            className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0"
                            style={{ backgroundColor: BRAND.orange }}
                        />

                        <span className="relative z-10 label-sans text-[11px] font-bold tracking-[0.4em] uppercase">
                            Begin Consultation
                        </span>
                        <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-3">
                            <MoveRight size={22} strokeWidth={1} />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;