'use client';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { reasons } from '../../data/reasons';

export default function WhyInvestNepal() {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDone, setIsDone] = useState(false);
    const [isFading, setIsFading] = useState(false);
    const navigate = useNavigate();

    const current = reasons[index];
    const importantPart = current.important || "";
    const parts = current.title.split(importantPart);

    useEffect(() => {
        let i = 0;
        setIsDone(false);
        const interval = setInterval(() => {
            setDisplayText(current.title.slice(0, i + 1));
            i++;
            if (i >= current.title.length) {
                clearInterval(interval);
                setIsDone(true);
                setTimeout(() => {
                    setIsFading(true);
                    setTimeout(() => {
                        setIndex((prev) => (prev + 1) % reasons.length);
                        setDisplayText('');
                        setIsFading(false);
                    }, 800);
                }, 4000);
            }
        }, 50);
        return () => clearInterval(interval);
    }, [index, current.title]);

    return (
        <section className="relative bg-[#F4F1EE] h-screen w-full flex overflow-hidden font-serif">

            {/* --- LEFT PANEL --- */}
            <div className="w-full md:w-[45%] flex flex-col justify-between p-12 md:p-24 z-20">

                {/* HEADER */}
                <div className="space-y-2">
                    <h2 className="text-4xl md:text-5xl font-black text-[#13231F] tracking-tighter uppercase italic leading-none">
                        Why Nepal
                    </h2>
                    <div className="w-16 h-[1px] bg-[#13231F]"></div>
                </div>

                {/* MAIN TYPEWRITER CONTENT */}
                <div className={`transition-all duration-1000 ${isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                    <div className="max-w-xl">
                        <h1 className="editorial-font text-5xl md:text-7xl text-[#13231F] leading-[1.1] tracking-tight italic">
                            {displayText.includes(parts[0]) ? parts[0] : displayText}

                            {displayText.length > parts[0].length && (
                                <span className="text-[#E65100] font-medium">
                                    {/* Using an orange-ish color similar to your image upload */}
                                    {displayText.slice(parts[0].length, parts[0].length + importantPart.length)}
                                </span>
                            )}

                            {displayText.length > (parts[0].length + importantPart.length) &&
                                displayText.slice(parts[0].length + importantPart.length)
                            }

                            {!isDone && <span className="inline-block w-[1px] h-10 bg-[#13231F] ml-1 animate-pulse" />}
                        </h1>

                        {isDone && (
                            <p className="mt-8 text-lg md:text-xl text-[#13231F]/60 font-sans tracking-wide uppercase leading-relaxed animate-fadeIn">
                                {current.shortDescription}
                            </p>
                        )}
                    </div>
                </div>

                {/* FOOTER NAVIGATION */}
                <div className="flex items-center justify-between border-t border-[#13231F]/10 pt-8">
                    <div className="text-sm font-medium tracking-widest text-[#13231F]">
                        {String(index + 1).padStart(2, '0')} — {String(reasons.length).padStart(2, '0')}
                    </div>
                    <button
                        onClick={() => navigate(`/reason/${current.id}`)}
                        className="text-xs font-bold tracking-[0.2em] uppercase text-[#13231F] group flex items-center gap-2"
                    >
                        Explore <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                </div>
            </div>

            {/* --- RIGHT PANEL --- */}
            <div className="hidden md:block w-[55%] h-full relative overflow-hidden bg-[#E5E2DF]">
                {reasons.map((reason, i) => (
                    <div
                        key={reason.id}
                        className={`absolute inset-0 transition-all duration-[2500ms] ease-in-out
              ${index === i ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                    >
                        <img
                            src={reason.image}
                            alt=""
                            className="w-full h-full object-cover grayscale-[15%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F1EE] via-transparent to-transparent" />
                    </div>
                ))}
            </div>

            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700;1,900&display=swap');
        
        .editorial-font { 
          font-family: 'Playfair Display', serif; 
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn { 
          animation: fadeIn 1.2s ease-out forwards; 
        }
      `}</style>
        </section>
    );
}