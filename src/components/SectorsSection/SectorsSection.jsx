'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const sectors = [
  {
    id: 'hydropower',
    title: 'Hydropower',
    description: 'Harnessing water resources to power regional growth.',
    src: 'https://images.pexels.com/photos/2699258/pexels-photo-2699258.jpeg',
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'tourism',
    title: 'Tourism',
    description: 'World-class hospitality and adventure in the Himalayas.',
    src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    accent: 'from-orange-500 to-red-500',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Scalable production hubs driving industrial export.',
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    accent: 'from-slate-600 to-gray-800',
  },
  {
    id: 'it',
    title: 'Information Technology',
    description: 'A growing hub for digital innovation and software services.',
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80',
    accent: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'agriculture',
    title: 'Agriculture',
    description: 'Modernizing farming for food security and high-value exports.',
    src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80',
    accent: 'from-green-500 to-emerald-600',
  },
  {
    id: 'energy',
    title: 'Infrastructure & Energy',
    description: 'Building energy solutions and vital connectivity.',
    src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80',
    accent: 'from-yellow-500 to-amber-600',
  },
  {
    id: 'others',
    title: 'Others (Edu & Health)',
    description: 'Critical investments in Education and Health services.',
    src: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80',
    accent: 'from-pink-500 to-rose-500',
  },
];

export default function SectorsSection() {
  const sectionRef = useRef(null);
  const rowRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Use matchMedia to create different logic for Desktop vs Mobile
      ScrollTrigger.matchMedia({

        // --- DESKTOP ANIMATION (Horizontal Scroll) ---
        "(min-width: 768px)": function () {
          const section = sectionRef.current;
          const row = rowRef.current;
          const title = titleRef.current;

          const gap = 32;
          const cardWidth = 400;
          const totalWidth = (sectors.length - 1) * (cardWidth + gap);

          // Pin section for horizontal scroll
          ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: `+=${totalWidth + window.innerHeight}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          });

          // Move items left
          gsap.to(row, {
            x: -totalWidth,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: `+=${totalWidth + window.innerHeight}`,
              scrub: 1,
            },
          });

          // Animate Title Out
          gsap.to(title, {
            opacity: 0,
            scale: 0.95,
            x: -60,
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: '+=300',
              scrub: true,
            },
          });
        },

        // --- MOBILE ANIMATION (Simple Fade Up) ---
        "(max-width: 767px)": function () {
          const cards = rowRef.current ? Array.from(rowRef.current.children) : [];

          // Simple stagger fade in as user scrolls down
          gsap.from(cards, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gray-50 text-gray-900 overflow-hidden font-sans py-12 md:py-0">
      {/* Changed layout: 'flex-col' for mobile, 'flex-row' for desktop (md:).
         Added padding for mobile spacing.
      */}
      <div className="flex flex-col md:flex-row h-full md:items-center px-6 md:pl-16 md:pt-12">

        {/* Title Section */}
        <div ref={titleRef} className="w-full md:flex-shrink-0 md:w-[35vw] md:pr-6 z-20 relative mb-12 md:mb-0">
          <h2 className="font-black tracking-tighter leading-snug mb-6">
            <span className="block text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500">
              Invest
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl text-gray-900 -mt-1 md:-mt-3">
              Sectors
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-light max-w-md leading-relaxed ml-1 border-l-4 border-orange-500 pl-5">
            Nepal offers high-growth returns across sustainable energy, tourism, and infrastructure.
          </p>
        </div>

        {/* Cards Container 
           Mobile: 'flex-col' (vertical stack) with 'w-full'.
           Desktop: 'flex-row' (horizontal) with specific height for animation.
        */}
        <div className="w-full md:flex-1 md:h-[65vh] md:flex md:items-center">
          <div ref={rowRef} className="flex flex-col md:flex-row gap-6 md:gap-8 pb-12 md:pb-0">
            {sectors.map((item, i) => (
              <Link
                to={`/sector/${item.id}`}
                key={i}
                // Mobile: 'w-full h-[400px]' (squarish/portrait). Desktop: Fixed 'w-[400px] h-[550px]'
                className="group relative flex-none w-full h-[400px] md:w-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer hover:shadow-2xl transition-shadow duration-500"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end h-full transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <div className={`w-fit px-3 py-1 mb-3 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r ${item.accent}`}>
                    Sector {i + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-snug">{item.title}</h3>
                  {/* On Mobile: Text is always visible (opacity-80). On Desktop: Fades in on hover */}
                  <p className="text-gray-200 text-sm font-normal leading-relaxed opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-100">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Hint - Only show on Desktop */}
      <div className="hidden md:flex absolute bottom-6 left-10 items-center gap-3 text-gray-400">
        <span className="text-xs font-bold uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-12 h-[2px] bg-gray-300 overflow-hidden">
          <div className="w-full h-full bg-gray-800 -translate-x-full animate-[slide_1.5s_infinite]"></div>
        </div>
        <style jsx>{`
          @keyframes slide {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    </section>
  );
}