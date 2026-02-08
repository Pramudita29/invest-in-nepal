'use client';

import Lenis from '@studio-freight/lenis';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Component Imports
import CTASection from '../components/CTASection/CTASection';
import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/Navbar/Navbar';
import SectorsSection from '../components/SectorsSection/SectorsSection';
import Startup from '../components/StartupHub/StartupHub';
import SuccessStories from '../components/SuccessStories/SuccessStories';
import WhyNepal from '../components/WhyNepal/WhyNepal';
import { urlFor } from '../sanity/lib/client';
import NationalAgendaModal from './NationalAgendaModal';

const Home = () => {
    const [latestArticles, setLatestArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    // MODAL STATE
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            lerp: 0.05,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // TRIGGER MODAL after 3 seconds for demonstration
        const timer = setTimeout(() => setIsModalOpen(true), 3000);

        return () => {
            lenis.destroy();
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        const fetchLatest = async () => {
            try {
                const response = await fetch(
                    `https://32iguwoj.api.sanity.io/v2025-01-01/data/query/production?query=*[_type == "article"] | order(date desc)[0...3]{_id, title, category, date, shortDesc, coverImage, slug}`
                );
                const data = await response.json();
                setLatestArticles(data.result || []);
            } catch (error) {
                console.error("Failed to fetch articles:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchLatest();
    }, []);

    return (
        <div className="w-full bg-[#F4F1EE]">
            <Navbar />
            <HeroSection />
            <SectorsSection />
            <WhyNepal />

            {/* INSIGHTS SECTION */}
            <section className="py-40 bg-[#F4F1EE]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-32 space-y-4">
                        <p className="text-[10px] font-bold tracking-[0.6em] text-[#007354] uppercase">Insights</p>
                        <h2 className="editorial-font text-6xl md:text-9xl text-[#13231F] leading-none tracking-tighter italic">
                            The Latest
                        </h2>
                    </div>

                    {loading ? (
                        <div className="h-96 flex items-center justify-center italic text-[#13231F]/20 editorial-font text-3xl">Loading Thesis...</div>
                    ) : (
                        <div className="space-y-40">
                            {latestArticles.map((article, idx) => (
                                <Link
                                    key={article._id}
                                    to={`/article/${article.slug?.current}`}
                                    className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center group`}
                                >
                                    <div className="w-full md:w-1/2 overflow-hidden bg-[#E5E2DF]">
                                        <img
                                            src={urlFor(article.coverImage).width(1000).url()}
                                            alt=""
                                            className="w-full aspect-square object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 space-y-8">
                                        <h3 className="editorial-font text-4xl md:text-7xl text-[#13231F] leading-[1.1] group-hover:italic transition-all duration-500">
                                            {article.title}
                                        </h3>
                                        <p className="text-[#13231F]/50 text-xl font-serif italic max-w-md">
                                            {article.shortDesc}
                                        </p>
                                        <div className="pt-4 flex items-center gap-2 text-xs font-bold uppercase text-[#13231F] group-hover:translate-x-3 transition-transform">
                                            Read Full Thesis <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Startup />
            <SuccessStories />
            <CTASection />

            {/* MODAL MOVED TO BOTTOM OF DOM WITH STATE PROPS */}
            <NationalAgendaModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                sectorId="energy" // or whatever dynamic ID you need
            />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700;1,900&display=swap');
                .editorial-font { font-family: 'Playfair Display', serif; }
                html.lenis { height: auto; }
                .lenis.lenis-smooth { scroll-behavior: auto !important; }
            `}</style>
        </div>
    );
};

export default Home;