'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const InitiativesHub = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const SHEETY_API_URL = 'https://api.sheety.co/11cd791224bbad5e236354af88b71b93/untitledSpreadsheet/sheet1';

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(SHEETY_API_URL);
                const data = await response.json();
                const sheetKey = Object.keys(data)[0];
                setEvents(data[sheetKey] || []);
            } catch (error) {
                console.error("Error fetching initiatives:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center">
                <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="h-[1px] w-12 bg-[#2D5A43]" />
                    <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#2D5A43]">Stratbridge</p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-40 px-6 lg:px-24 selection:bg-[#2D5A43] selection:text-white">
            {/* Soft Background Accent */}
            <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,_rgba(45,90,67,0.03),_transparent_50%)]" />

            <header className="max-w-6xl mx-auto mb-16 md:mb-24 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-4 md:space-y-6"
                >
                    <div className="flex items-center gap-3">
                        <span className="h-[1px] w-8 md:w-10 bg-[#2D5A43]" />
                        <h4 className="font-sans font-bold tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-[9px] uppercase text-[#2D5A43]">
                            Strategic Platforms
                        </h4>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium tracking-tight leading-[1.1] text-[#1A1A1A]">
                        Current <span className="italic font-light text-[#2D5A43]">Initiatives</span>
                    </h1>

                    <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-[#1A1A1A]/40 max-w-md leading-relaxed">
                        Explore our active cohorts and specialized programs driving policy and venture impact across Nepal.
                    </p>
                </motion.div>
            </header>

            <main className="max-w-6xl mx-auto space-y-16 md:space-y-24">
                {events.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="group"
                    >
                        <Link to={item.path || '#'} className="block border-t border-[#1A1A1A]/10 pt-8 md:pt-12">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start lg:items-center">

                                {/* Image Section - Changes aspect ratio for mobile for better fit */}
                                <div className="lg:col-span-5 relative overflow-hidden bg-[#EAE6DF] rounded-sm">
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                        className="aspect-[4/3] sm:aspect-[16/10] w-full"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000"
                                        />
                                    </motion.div>

                                    {item.status && (
                                        <div className="absolute top-3 left-3 md:top-4 md:left-4 backdrop-blur-md bg-white/80 border border-white/20 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full shadow-sm">
                                            <span className="font-sans font-bold text-[7px] md:text-[8px] uppercase tracking-widest text-[#2D5A43]">
                                                {item.status}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="lg:col-span-7 space-y-4 md:space-y-6">
                                    <div className="space-y-2 md:space-y-3">
                                        <p className="font-sans text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#2D5A43]/70">
                                            {item.subtitle}
                                        </p>
                                        <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight tracking-tight text-[#1A1A1A] group-hover:text-[#2D5A43] transition-colors duration-500">
                                            {item.title}
                                        </h2>
                                    </div>

                                    <p className="font-sans text-sm text-[#1A1A1A]/60 max-w-xl leading-relaxed">
                                        Join our mission in {item.location}. This strategic exercise is designed to mobilize resources and bridge the gap between intent and institutional action.
                                    </p>

                                    {/* Meta info - stacks on tiny screens, inline on others */}
                                    <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-2 border-b border-[#1A1A1A]/5 pb-6 font-sans text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} className="text-[#2D5A43]/40" /> {item.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={14} className="text-[#2D5A43]/40" /> {item.location}
                                        </div>
                                    </div>

                                    <motion.div
                                        className="flex items-center gap-3 text-[#2D5A43] font-sans text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em]"
                                        whileHover={{ x: 8 }}
                                    >
                                        View Details <ArrowRight size={14} />
                                    </motion.div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </main>
        </div>
    );
};

export default InitiativesHub;