'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { reasons } from '../../data/reasons'; // Ensure this path is correct

gsap.registerPlugin(ScrollTrigger);

const EXTRA_SCROLL_HEIGHT = 420;

export default function WhyInvestNepal() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const activeIndexRef = useRef(0);
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/reason/${id}`);
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current;
            const total = cards.length;
            let lastIndex = -1;

            // --- RESPONSIVE CONFIGURATION ---
            // We check width once here. ScrollTrigger's "invalidateOnRefresh" will 
            // re-run this logic if the user resizes the browser significantly.
            const isMobile = window.innerWidth < 768;

            const config = {
                xOffset: isMobile ? 0 : 60,       // Mobile: No horizontal shift. Desktop: shift 60px
                yOffset: isMobile ? 15 : 20,      // Mobile: tighter vertical stack
                scaleBase: isMobile ? 0.9 : 1,    // Mobile: Start cards slightly smaller
                scaleStep: isMobile ? 0.05 : 0,   // Mobile: visible step down in size for back cards
            };

            // Initial Set
            gsap.set(cards, {
                x: -config.xOffset,
                yPercent: config.yOffset,
                scale: config.scaleBase,
                opacity: 0,
                filter: "blur(6px)"
            });

            gsap.set(cards[0], {
                x: 0,
                yPercent: 0,
                scale: 1,
                opacity: 1,
                filter: "blur(0px)"
            });

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: `+=${total * EXTRA_SCROLL_HEIGHT}vh`,
                pin: true,
                scrub: 1.2,
                anticipatePin: 1,
                invalidateOnRefresh: true, // IMPORTANT for responsiveness
                snap: {
                    snapTo: 1 / (total - 1),
                    duration: { min: 0.3, max: 0.6 },
                    ease: "power1.inOut"
                },

                onUpdate: (self) => {
                    const progress = self.progress;
                    const currentIndex = Math.min(total - 1, Math.floor(progress * total));

                    if (currentIndex !== lastIndex) {
                        lastIndex = currentIndex;
                        activeIndexRef.current = currentIndex;

                        cards.forEach((card, i) => {
                            if (!card) return;
                            const img = card.querySelector("img");
                            const content = card.querySelector(".card-content"); // Select text content for animation

                            if (i === currentIndex) {
                                // ✅ ACTIVE CARD (Front)
                                card.style.pointerEvents = "auto";
                                card.style.zIndex = 50;

                                gsap.to(card, {
                                    x: 0,
                                    yPercent: 0,
                                    scale: 1, // Full size
                                    opacity: 1,
                                    filter: "blur(0px)",
                                    duration: 1.2,
                                    ease: "power2.out",
                                    overwrite: "auto"
                                });

                                gsap.to(img, {
                                    scale: 1.05,
                                    duration: 1.5,
                                    ease: "power1.out",
                                    overwrite: "auto"
                                });

                                // Fade text in slightly later
                                gsap.to(content, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 });

                            } else {
                                // ❌ INACTIVE CARDS (Back/Gone)
                                card.style.pointerEvents = "none";
                                card.style.zIndex = 10;

                                if (i < currentIndex) {
                                    // Cards that have passed (fly up and fade)
                                    gsap.to(card, {
                                        x: config.xOffset * 0.5,
                                        yPercent: -20,
                                        scale: 1,
                                        opacity: 0,
                                        filter: "blur(4px)",
                                        duration: 1,
                                        ease: "power2.in",
                                        overwrite: "auto"
                                    });
                                } else {
                                    // Cards waiting in the stack
                                    const dist = i - currentIndex;

                                    gsap.to(card, {
                                        // Mobile: keep centered (x=0). Desktop: shift left
                                        x: isMobile ? 0 : -config.xOffset * (0.4 + dist * 0.1),

                                        yPercent: config.yOffset + dist * (isMobile ? 8 : 12),

                                        // Mobile: add scale depth effect. Desktop: mostly flat stack
                                        scale: 1 - (dist * 0.05),

                                        opacity: Math.max(0, 0.25 - dist * 0.12),
                                        filter: "blur(6px)",
                                        duration: 1,
                                        ease: "power1.inOut",
                                        overwrite: "auto",
                                    });
                                }

                                gsap.to(img, { scale: 1.0 });
                                gsap.to(content, { opacity: 0, y: 10, duration: 0.5 });
                            }
                        });
                    }
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen bg-gray-50 overflow-hidden flex flex-col items-center justify-center">

            {/* --- TITLE SECTION --- 
                Mobile: Fixed at top center. 
                Desktop: Fixed at right vertically centered.
            */}
            <div className="fixed z-40 pointer-events-none select-none
                top-16 left-0 w-full text-center px-2
                md:top-1/2 md:right-16 md:left-auto md:w-auto md:text-right md:-translate-y-1/2"
            >
                <h2 className="text-4xl sm:text-5xl md:text-[5.3rem] font-black text-gray-900/90 leading-none tracking-tight">
                    WHY INVEST
                </h2>
                <h1 className="text-3xl sm:text-4xl md:text-7xl font-black leading-none whitespace-nowrap mt-1 md:mt-0">
                    <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent opacity-90">
                        IN NEPAL?
                    </span>
                </h1>
            </div>

            {/* --- CARDS CONTAINER --- */}
            <div className="absolute inset-0 flex items-center justify-center md:justify-start w-full h-full">
                {reasons.map((reason, i) => (
                    <div
                        key={reason.id}
                        ref={(el) => (cardsRef.current[i] = el)}
                        // Mobile: 90vw width, centered. Desktop: 65vw width, offset left.
                        className="absolute 
                            left-1/2 -translate-x-1/2 
                            md:left-[max(7vw,60px)] md:translate-x-0
                            w-[90vw] h-[55vh]
                            md:w-[65vw] md:max-w-3xl md:h-[540px]
                            rounded-2xl overflow-hidden shadow-2xl will-change-transform bg-gray-900"
                    >
                        {/* Click Overlay */}
                        <div
                            className="absolute inset-0 z-20 cursor-pointer group"
                            onClick={() => handleCardClick(reason.id)}
                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />

                            {/* "View Details" Badge - Hidden on very small phones until hover, or always visible on bottom right? */}
                            <div className="absolute top-4 right-4 md:bottom-12 md:left-12 md:top-auto md:right-auto 
                                            text-white opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2">
                                <span className="text-sm md:text-xl font-bold uppercase tracking-wider">View Details</span>
                                <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>

                        {/* Image */}
                        <img
                            src={reason.image}
                            alt={reason.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />

                        {/* --- CONTENT BOX --- 
                            Mobile: Bottom aligned, full width, gradient background (to make text pop).
                            Desktop: Right aligned glass box.
                        */}
                        <div className="card-content absolute 
                            bottom-0 left-0 w-full p-6 pt-12
                            bg-gradient-to-t from-black/90 via-black/60 to-transparent
                            
                            md:top-1/2 md:bottom-auto md:right-12 md:left-auto md:-translate-y-1/2 
                            md:w-[50%] md:p-8 md:rounded-2xl md:bg-white/10 md:backdrop-blur-md md:border md:border-white/20 md:bg-none"
                        >
                            <div className="flex flex-col gap-2">
                                <div className="text-4xl md:text-6xl font-black text-amber-500 leading-none mb-1">
                                    {String(i + 1).padStart(2, '0')}
                                </div>

                                <h3 className="text-2xl md:text-4xl font-black leading-tight text-white">
                                    {reason.title}
                                </h3>

                                <p className="text-sm md:text-lg font-medium text-gray-200 md:text-white/90 leading-relaxed line-clamp-3 md:line-clamp-none">
                                    {reason.shortDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Scroll Hint */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-xs md:text-sm tracking-[0.2em] z-40 uppercase text-center w-full">
                <span className="animate-bounce inline-block">Scroll to explore</span>
            </div>
        </section>
    );
}