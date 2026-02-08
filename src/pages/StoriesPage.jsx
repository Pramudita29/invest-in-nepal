'use client';

import Lenis from '@studio-freight/lenis';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, PhoneCall } from 'lucide-react';
import { useLayoutEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const allStories = [
    {
        title: 'Upper Tamakoshi Project',
        sector: 'Energy & Infrastructure',
        description: 'Nepal’s pride: A 456 MW project carved into the Himalayas, symbolizing the nation’s path to energy sovereignty.',
        // Concrete dam/hydro infrastructure vibe
        image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop',
        url: 'https://www.sasec.asia/index.php?page=news&nid=1290'
    },
    {
        title: 'The Himalayan Java Story',
        sector: 'Hospitality & Retail',
        description: 'From a single shop in Thamel to a global franchise, redefining Nepal’s coffee culture for the modern world.',
        image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop',
        url: 'https://himalayanjava.com/'
    },
    {
        title: 'Fusemachines AI',
        sector: 'Technology & SaaS',
        description: 'Leading the AI revolution from Kathmandu, creating a bridge between local talent and global enterprise.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
        url: 'https://fusemachines.com/'
    },
    {
        title: 'Hilton Kathmandu',
        sector: 'Luxury Hospitality',
        description: 'A new landmark in the city skyline, blending international standards with Nepali warmth.',
        image: 'https://images.unsplash.com/photo-1542314831-0682f6e04d62?q=80&w=1200&auto=format&fit=crop',
        url: 'https://www.hilton.com'
    },
    {
        title: 'CloudFactory Operations',
        sector: 'Digital Economy',
        description: 'Scaling the future of work by connecting high-growth companies with Nepal’s digital workforce.',
        image: 'https://images.unsplash.com/photo-1519389951293-0ab56edafb4e?q=80&w=1200&auto=format&fit=crop',
        url: 'https://www.cloudfactory.com/'
    },
    {
        title: 'CG Global Footprint',
        sector: 'Conglomerate',
        description: 'Expanding the Wai Wai empire across continents, representing Nepal on the global corporate stage.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
        url: 'https://www.chaudharygroup.com/'
    },
];

const ImageWithFallback = ({ src, alt, className }) => {
    const [imgSrc, setImgSrc] = useState(src);
    return (
        <img
            src={imgSrc}
            alt={alt}
            className={className}
            onError={() => setImgSrc('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop')}
        />
    );
};

const StoryCard = ({ story, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.05 }}
        viewport={{ once: true }}
        className="group flex flex-col bg-white border border-[#13231F]/10 hover:border-[#004B33] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl"
    >
        <div className="aspect-[16/10] overflow-hidden bg-[#DEDAD5]">
            <ImageWithFallback
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
        </div>
        <div className="p-8 md:p-10 flex flex-col flex-1 justify-between">
            <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#004B33] font-bold mb-4 block">Sector: {story.sector}</span>
                <h3 className="text-3xl font-serif lowercase italic text-[#13231F] mb-6 leading-tight">{story.title}</h3>
                <p className="text-[#13231F]/60 text-base font-light italic leading-relaxed mb-10">{story.description}</p>
            </div>
            <a href={story.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between w-full border-t border-[#13231F]/5 pt-6 group-hover:text-[#004B33] transition-colors">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-[#13231F] group-hover:text-[#004B33]">Read More</span>
                <ArrowUpRight size={16} />
            </a>
        </div>
    </motion.div>
);

export default function StoriesPage() {
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    return (
        <main className="min-h-screen bg-[#F5F2ED] text-[#13231F]">
            {/* HERO SECTION - Using a more "Development/Power" focused Nepal image */}
            <header className="relative w-full h-[85vh] flex items-center pt-20">
                <div className="absolute top-0 right-0 w-full lg:w-2/3 h-[90%] overflow-hidden">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1621252723429-2328fa693963?q=80&w=1600&auto=format&fit=crop"
                        className="w-full h-full object-cover grayscale brightness-50"
                        alt="Infrastructure in Nepal"
                    />
                </div>
                <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
                    <div className="bg-[#F5F2ED] p-10 md:p-20 max-w-2xl border-l-8 border-[#004B33] shadow-2xl">
                        <button onClick={() => navigate('/')} className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#004B33] mb-8 flex items-center gap-3 hover:-translate-x-2 transition-transform font-bold">
                            <ArrowLeft size={16} /> Return Home
                        </button>
                        <h1 className="text-6xl md:text-8xl font-serif tracking-tighter leading-none lowercase mb-8">
                            Success <br /> <span className="italic text-[#004B33]/60">Stories.</span>
                        </h1>
                        <p className="text-lg font-light italic text-[#13231F]/50 border-t border-[#13231F]/10 pt-8">
                            Celebrating the milestones of a nation in motion.
                        </p>
                    </div>
                </div>
            </header>

            <div className="h-[25vh] md:h-[40vh] flex flex-col items-center justify-center pointer-events-none">
                <div className="w-px h-24 bg-gradient-to-b from-[#004B33] to-transparent mb-6" />
                <span className="font-mono text-[9px] uppercase tracking-[0.6em] text-[#13231F]/30 animate-pulse">Evolution in progress</span>
            </div>

            <section className="max-w-7xl mx-auto px-8 pb-40">
                <div className="mb-16">
                    <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-[#004B33] mb-2 font-bold italic">The Portfolio</h2>
                    <div className="w-20 h-px bg-[#13231F]/20" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {allStories.map((story, i) => (
                        <StoryCard key={i} story={story} index={i} />
                    ))}
                </div>
            </section>

            <footer className="bg-[#13231F] py-32 text-center rounded-t-[4rem]">
                <h2 className="text-4xl md:text-7xl font-serif text-white italic lowercase mb-12">Shaping <span className="not-italic text-[#004B33]">tomorrow.</span></h2>
                <Link to="/contact" className="inline-flex items-center gap-10 bg-white text-[#13231F] px-16 py-8 font-mono text-xs uppercase tracking-[0.5em] font-bold hover:bg-[#F5F2ED] transition-all">
                    Inquire Now <ArrowUpRight size={20} />
                </Link>
            </footer>

            <Link to="/contact" className="fixed bottom-8 right-8 w-14 h-14 bg-[#004B33] text-white rounded-full shadow-2xl flex items-center justify-center z-50 border border-white/10 hover:scale-110 transition-transform">
                <PhoneCall size={20} />
            </Link>
        </main>
    );
}