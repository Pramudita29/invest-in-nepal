'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight, MoveRight } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const BRAND = {
  green: "#002E28",
  orange: "#FF4F00",
  paper: "#F4F1EE",
  mutedGreen: "rgba(0, 46, 40, 0.6)",
  borderGreen: "rgba(0, 46, 40, 0.15)"
};

const stories = [
  {
    id: '01',
    title: 'Upper Tamakoshi',
    subtitle: 'Infrastructure // Energy',
    description: 'Nepal’s largest domestically funded project (456 MW) redefining the regional power grid.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80',
    url: 'https://www.sasec.asia/index.php?page=news&nid=1290&url=upper-tamakoshi-operates'
  },
  {
    id: '02',
    title: 'Fusemachines AI',
    subtitle: 'Deep Tech // Intelligence',
    description: 'Nepali-led global AI intelligence scaling from Kathmandu to the world.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    url: 'https://fusemachines.com/'
  },
  {
    id: '03',
    title: 'Hongshi Shivam',
    subtitle: 'Industry // Cross-Border',
    description: 'A landmark Nepal-China industrial partnership in the cement sector.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    url: 'https://www.globalcement.com/news/itemlist/tag/Hongshi%20Shivam%20Cement'
  },
  {
    id: '04',
    title: 'Manipal Group',
    subtitle: 'Infrastructure // Health',
    description: 'Transforming Nepal’s healthcare landscape through large-scale medical investment.',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200',
    url: 'https://kathmandupost.com/miscellaneous/2019/07/22/manipal-teaching-hospital-a-pioneering-medical-institution-in-western-nepal'
  },
  {
    id: '05',
    title: 'Chaudhary Group',
    subtitle: 'Global // Conglomerate',
    description: 'Nepal’s first billionaire-led entity operating across 40+ global territories.',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=80', // Specific corporate/skyscraper image
    url: 'https://www.chaudharygroup.com/'
  }
];

export default function SuccessStories() {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30 });
  const hintOpacity = useTransform(scrollXProgress, [0, 0.05], [1, 0]);

  return (
    <section
      className="min-h-screen py-32 flex flex-col relative antialiased"
      style={{ backgroundColor: BRAND.paper, fontFamily: "'Montserrat', sans-serif" }}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,600;1,700&family=Montserrat:wght@400;700&display=swap');
        .editorial-serif { font-family: 'Cormorant Garamond', serif; }
      `}</style>

      {/* HEADER */}
      <div className="max-w-[1400px] mx-auto w-full px-8 mb-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[1.5px]" style={{ backgroundColor: BRAND.green }} />
              <p className="text-[10px] font-bold tracking-[0.5em] uppercase" style={{ color: BRAND.green }}>
                Strategic Outcomes
              </p>
            </div>
            <h2
              className="editorial-serif text-8xl md:text-[11rem] italic tracking-tighter leading-[0.7]"
              style={{ color: BRAND.green }}
            >
              Impact.
            </h2>
          </div>

          <div className="max-w-xs">
            <p
              className="text-xl editorial-serif italic leading-relaxed border-l-2 pl-8"
              style={{ color: BRAND.mutedGreen, borderColor: BRAND.borderGreen }}
            >
              Charting the capital flow and industrial growth that defines modern Nepal.
            </p>
          </div>
        </div>
      </div>

      {/* PROGRESS TRACKER (GREEN DOMINANT) */}
      <div className="max-w-[1400px] mx-auto w-full px-8 mb-12">
        <div className="flex justify-between items-end mb-4">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: BRAND.green }}>
              Case Archives
            </span>
            <motion.div style={{ opacity: hintOpacity }} className="flex items-center gap-2">
              <ArrowRight size={14} style={{ color: BRAND.orange }} className="animate-pulse-x" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: BRAND.orange }}>
                Explore
              </span>
            </motion.div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-40" style={{ color: BRAND.green }}>
            Index 2026
          </span>
        </div>

        <div className="h-[2px] w-full relative" style={{ backgroundColor: BRAND.borderGreen }}>
          <motion.div
            style={{ scaleX, backgroundColor: BRAND.green }}
            className="absolute top-0 left-0 h-full w-full origin-left"
          />
        </div>
      </div>

      {/* HORIZONTAL GALLERY */}
      <div
        ref={containerRef}
        className="flex gap-16 overflow-x-auto snap-x snap-mandatory px-8 md:px-[calc((100vw-1400px)/2+32px)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-20"
      >
        {stories.map((story) => (
          <div key={story.id} className="min-w-[85vw] md:min-w-[750px] snap-center group">
            <div className="flex flex-col gap-12">
              <div className="aspect-[16/9] overflow-hidden rounded-sm relative shadow-[0_30px_60px_rgba(0,46,40,0.15)]" style={{ backgroundColor: BRAND.green }}>
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover saturate-[1.3] brightness-95 group-hover:scale-105 transition-all duration-[3s] ease-out"
                />
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-30"
                  aria-label={`Read more about ${story.title}`}
                />

                <div className="absolute bottom-8 right-8 w-14 h-14 rounded-full backdrop-blur-md flex items-center justify-center text-white border transition-all duration-500 group-hover:bg-white group-hover:text-[#002E28]"
                  style={{ backgroundColor: 'rgba(0,46,40,0.4)', borderColor: 'rgba(255,255,255,0.2)' }}>
                  <ChevronRight size={28} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 border-t pt-4" style={{ borderColor: BRAND.borderGreen }}>
                  <span className="editorial-serif text-7xl italic leading-none opacity-20" style={{ color: BRAND.green }}>
                    {story.id}
                  </span>
                </div>
                <div className="col-span-3 space-y-5">
                  <p className="text-[11px] font-bold tracking-[0.4em] uppercase" style={{ color: BRAND.green }}>
                    {story.subtitle}
                  </p>
                  <h3 className="editorial-serif text-6xl italic tracking-tight leading-tight" style={{ color: BRAND.green }}>
                    {story.title}
                  </h3>
                  <p className="text-xl editorial-serif italic max-w-md leading-relaxed" style={{ color: BRAND.mutedGreen }}>
                    {story.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="min-w-[20vw]" />
      </div>

      {/* FOOTER ACTION */}
      <div className="max-w-[1400px] mx-auto w-full px-8 mt-12 border-t pt-12" style={{ borderColor: BRAND.borderGreen }}>
        <Link to="/stories" className="group flex items-center gap-8 text-[12px] font-bold uppercase tracking-[0.4em]" style={{ color: BRAND.green }}>
          View Full Archive
          <div className="w-12 h-12 rounded-full border flex items-center justify-center transition-all group-hover:bg-[#002E28] group-hover:text-white" style={{ borderColor: BRAND.green }}>
            <MoveRight size={20} />
          </div>
        </Link>
      </div>

      <style jsx global>{`
        @keyframes pulse-x {
          0%, 100% { transform: translateX(0); opacity: 1; }
          50% { transform: translateX(8px); opacity: 0.5; }
        }
        .animate-pulse-x {
          animation: pulse-x 2.5s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}