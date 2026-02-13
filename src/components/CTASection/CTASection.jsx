import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MoveRight } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
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
                    // "top 85%" is better for mobile to trigger slightly earlier
                    start: "top 85%",
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
                    clearProps: "all" // Clears props to prevent interference with hover states
                },
                "-=0.3"
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            // Reduced py-32 to py-20 on mobile, kept min-h-screen
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-32"
            style={{ backgroundColor: BRAND.paper }}
        >
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                {/* Line width reduced on mobile */}
                <div ref={lineRef} className="w-16 md:w-24 h-[2px] mx-auto mb-10 md:mb-16" style={{ backgroundColor: BRAND.orange }} />

                <div ref={contentRef}>
                    <h2 className="label-sans text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.6em] uppercase mb-6 md:mb-10" style={{ color: BRAND.green }}>
                        Strategic Partnership
                    </h2>

                    {/* Adjusted text sizes: text-4xl on mobile, text-6xl on tablet, 8.5rem on large screens */}
                    <h1 ref={titleRef} className="editorial-serif text-4xl sm:text-6xl lg:text-[8.5rem] italic tracking-tighter mb-8 md:mb-12 leading-[0.9] md:leading-[0.85]">
                        <span style={{ color: BRAND.green }}>Partner with the <br className="hidden sm:block" /></span>
                        <span style={{ color: BRAND.orange }}>Frontier.</span>
                    </h1>

                    <p className="text-lg md:text-3xl editorial-serif italic max-w-4xl mx-auto leading-relaxed mb-12 md:mb-20" style={{ color: BRAND.mutedGreen }}>
                        We bridge institutional capital with Nepal’s most ambitious founders.
                        <span className="block sm:inline"> Join a network of investors </span>
                        <span style={{ color: BRAND.green }} className="font-bold"> shaping the future of South Asia</span>.
                    </p>
                </div>

                <div className="flex justify-center">
                    <Link
                        ref={btnRef}
                        to="/consultation"
                        // Responsive padding and gap for the button
                        className="group relative inline-flex items-center gap-6 md:gap-10 px-8 md:px-16 py-5 md:py-7 overflow-hidden bg-[#002E28] text-[#F4F1EE] w-full sm:w-auto justify-center"
                    >
                        <div
                            className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0"
                            style={{ backgroundColor: BRAND.orange }}
                        />

                        <span className="relative z-10 label-sans text-[10px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase whitespace-nowrap">
                            Begin Consultation
                        </span>
                        <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-3">
                            <MoveRight size={20} strokeWidth={1} />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;