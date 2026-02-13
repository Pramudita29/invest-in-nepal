'use client';

import { ArrowRight, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const sectors = [
  { id: 'hydropower', title: 'Hydropower', num: '01', desc: 'Energy Sovereignty', src: 'https://images.pexels.com/photos/2699258/pexels-photo-2699258.jpeg' },
  { id: 'tourism', title: 'Tourism', num: '02', desc: 'High-Value Hospitality', src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80' },
  { id: 'manufacturing', title: 'Manufacturing', num: '03', desc: 'Industrial Export', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80' },
  { id: 'it', title: 'IT & Digital', num: '04', desc: 'Knowledge Economy', src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80' },
  { id: 'agriculture', title: 'Agriculture', num: '05', desc: 'Agro-Tech Systems', src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80' },
  { id: 'energy', title: 'Infrastructure', num: '06', desc: 'Vital Connectivity', src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80' },
  { id: 'others', title: 'Health & Edu', num: '07', desc: 'Human Capital', src: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80' },
];

const BRAND = {
  green: "#002E28",
  orange: "#FF4F00",
  paper: "#F5F2ED",
};

export default function DeepHorizontalSectors() {
  return (
    <section className="h-screen bg-[#F5F2ED] overflow-hidden flex flex-col antialiased">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,600&family=Montserrat:wght@600;700&display=swap');
        .editorial-serif { font-family: 'Cormorant Garamond', serif; }
        .label-sans { font-family: 'Montserrat', sans-serif; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .smooth-scroll { -webkit-overflow-scrolling: touch; }
      `}</style>

      {/* HEADER */}
      <div className="w-full py-8 md:py-12 px-6 md:px-20 flex justify-between items-end border-b border-black/5 bg-[#F5F2ED] z-20">
        <div className="space-y-1 md:space-y-2">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-6 md:w-8 h-[1px]" style={{ backgroundColor: BRAND.orange }} />
            <span className="label-sans text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em]" style={{ color: BRAND.orange }}>
              Strategic Capital
            </span>
          </div>
          <h2 className="editorial-serif text-4xl md:text-7xl italic tracking-tighter leading-tight" style={{ color: BRAND.green }}>
            Key Sectors.
          </h2>
        </div>

        <div className="flex items-center gap-3 md:gap-4 pb-1 md:pb-2 opacity-40">
          <span className="label-sans text-[8px] md:text-[9px] font-bold uppercase tracking-widest" style={{ color: BRAND.green }}>
            Swipe
          </span>
          <MoveRight style={{ color: BRAND.green }} className="animate-pulse w-3.5 h-3.5 md:w-4 md:h-4" />
        </div>
      </div>

      {/* MAIN HORIZONTAL CARDS */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden flex no-scrollbar smooth-scroll snap-x snap-mandatory">
        {sectors.map((item) => (
          <Link
            key={item.id}
            to={`/sector/${item.id}`}
            className="group relative min-w-[85vw] sm:min-w-[50vw] md:min-w-[40vw] lg:min-w-[30vw] h-full border-r border-black/5 flex flex-col justify-end p-8 sm:p-12 md:p-20 snap-center sm:snap-start overflow-hidden transition-all duration-700 hover:bg-[#002E28]"
          >
            {/* IMAGE LAYER */}
            <div className="absolute inset-0 z-0 bg-[#002E28]">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover grayscale opacity-30 sm:opacity-20 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-[1.8s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002E28] via-[#002E28]/40 sm:via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 space-y-3 md:space-y-4 text-left">
              <span className="editorial-serif text-2xl md:text-3xl italic block transition-all duration-500 text-white opacity-60 sm:opacity-40 group-hover:text-[#FF4F00] group-hover:opacity-100">
                {item.num}
              </span>

              <div>
                <h3 className="editorial-serif text-3xl sm:text-4xl md:text-5xl italic leading-none text-white group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="label-sans text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mt-3 md:mt-4 text-white/60 sm:text-white/40 group-hover:text-white/70 transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* ACTION INDICATOR */}
              <div className="flex items-center gap-3 opacity-100 sm:opacity-0 group-hover:opacity-100 translate-y-0 sm:translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                <span className="label-sans text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-white">
                  Learn More
                </span>
                <ArrowRight className="text-[#FF4F00] w-3 h-3 md:w-3.5 md:h-3.5" />
              </div>
            </div>
          </Link>
        ))}

        {/* SPACER AT THE END */}
        <div className="min-w-[10vw] md:min-w-[15vw]" />
      </div>

      {/* FOOTER GAP */}
      <div className="w-full h-12 md:h-24 bg-[#F5F2ED] border-t border-black/5" />
    </section>
  );
}