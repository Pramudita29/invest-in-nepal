// src/components/SuccessStoriesHorizontal.jsx
'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

// --- FULL STORIES DATA ---
const stories = [
  {
    type: 'single',
    title: 'Upper Tamakoshi Hydropower',
    description: 'Nepal’s largest domestically funded project (456 MW) became fully operational in 2021.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80',
    colorClass: 'bg-red-700',
    height: 'h-[400px] md:h-[520px]',
    width: 'w-full md:w-[400px]',
    url: 'https://www.sasec.asia/index.php?page=news&nid=1290&url=upper-tamakoshi-operates'
  },
  {
    type: 'stack',
    width: 'w-full md:w-[580px]',
    cards: [
      {
        title: 'Hongshi Shivam Cement',
        description: 'A landmark Nepal-China joint venture.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        colorClass: 'bg-gray-600',
        height: 'h-[200px] md:h-[250px]',
        url: 'https://www.globalcement.com/news/itemlist/tag/Hongshi%20Shivam%20Cement'
      },
      {
        title: 'Hotel Expansion',
        description: 'Luxury groups expanding into Nepal.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
        colorClass: 'bg-orange-500',
        height: 'h-[200px] md:h-[250px]',
        url: 'https://www.hospitalitynet.org/announcement/41003331.html'
      }
    ]
  },
  {
    type: 'single',
    title: 'Fusemachines AI',
    description: 'A Nepali-led global AI company training engineers and expanding worldwide.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    colorClass: 'bg-gray-800',
    height: 'h-[400px] md:h-[520px]',
    width: 'w-full md:w-[400px]',
    url: 'https://fusemachines.com/'
  },
  {
    type: 'single',
    title: 'Manipal Group',
    description: 'Large-scale investment transforming Nepal’s healthcare landscape.',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200',
    colorClass: 'bg-teal-600',
    height: 'h-[400px] md:h-[520px]',
    width: 'w-full md:w-[400px]',
    url: 'https://kathmandupost.com/miscellaneous/2019/07/22/manipal-teaching-hospital-a-pioneering-medical-institution-in-western-nepal'
  },
  {
    type: 'single',
    title: 'Chaudhary Group',
    description: 'Nepal’s first billionaire conglomerate operating in 40+ countries.',
    image: 'https://images.unsplash.com/photo-1519389951293-0ab56edafb4e?auto=format&fit=crop&w=1200&q=80',
    colorClass: 'bg-amber-800',
    height: 'h-[400px] md:h-[520px]',
    width: 'w-full md:w-[400px]',
    url: 'https://www.chaudharygroup.com/'
  }
];

// --- STORY CARD ---
const StoryCard = ({ story, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [5, -5]);
  const rotateY = useTransform(x, [-150, 150], [-5, 5]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      className={`relative rounded-2xl overflow-hidden shadow-md group cursor-pointer 
        w-full mb-4 md:mb-0 md:flex-shrink-0 md:snap-center 
        ${story.height} ${story.width || ''} ${story.colorClass}`}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - (rect.left + rect.width / 2));
        y.set(e.clientY - (rect.top + rect.height / 2));
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {/* Fixed Accessibility Warning */}
      <a
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-20"
        aria-label={`Read more about ${story.title}`}
      />

      <img
        src={story.image}
        alt={story.title}
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-8">
        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-1 leading-tight drop-shadow-lg">{story.title}</h3>
        <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-md drop-shadow line-clamp-2">{story.description}</p>
      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
export default function SuccessStoriesHorizontal() {
  const scrollRef = useRef(null);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -500, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 500, behavior: 'smooth' });

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="mb-10 md:mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <h2 className="w-full text-center lg:text-left pl-0 lg:pl-[2vw] xl:pl-[160px]">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 
                text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter">
                Nepal Ventures
              </span>
              <span className="block text-gray-900 
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter">
                Success
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-6 lg:ml-auto">
              <Link
                to="/stories"
                className="px-6 py-3 bg-white text-orange-500 font-bold text-base border-2 border-orange-500 rounded-full hover:bg-orange-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md whitespace-nowrap"
              >
                VIEW ALL STORIES
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              <div className="hidden md:flex gap-2">
                <button onClick={scrollLeft} className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-200 hover:bg-orange-50 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button onClick={scrollRight} className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-200 hover:bg-orange-50 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 px-4 md:px-6 md:pb-10
          md:overflow-x-auto md:scroll-smooth md:snap-x md:snap-mandatory
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{
          paddingLeft: typeof window !== 'undefined' && window.innerWidth >= 768 ? 'max(1.5rem, calc(50vw - 500px))' : '1.5rem',
          paddingRight: '1.5rem'
        }}
      >
        {stories.map((story, i) => {
          if (story.type === 'stack') {
            return (
              <div key={i} className={`flex flex-col gap-4 md:gap-6 flex-shrink-0 snap-center w-full ${story.width?.replace('w-[600px]', 'md:w-[600px]')}`}>
                {story.cards.map((card, j) => (
                  <StoryCard key={j} story={card} index={i + j * 0.1} />
                ))}
              </div>
            );
          }
          return <StoryCard key={i} story={story} index={i} />;
        })}
      </div>
    </section>
  );
}
