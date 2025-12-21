'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
    { url: "https://images.pexels.com/photos/2097921/pexels-photo-2097921.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop", title: "Economic Hubs", subtitle: "Rapid Urbanization & FDI" },
    { url: "https://images.pexels.com/photos/6076272/pexels-photo-6076272.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop", title: "Hydropower", subtitle: "43,000 MW Untapped Potential" },
    { url: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop", title: "Infrastructure", subtitle: "Building the Future" },
    { url: "https://images.pexels.com/photos/1438516/pexels-photo-1438516.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop", title: "Agriculture", subtitle: "Premium Organic Exports" },
    { url: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop", title: "Green Energy", subtitle: "Sustainable ROI" },
    { url: "https://images.pexels.com/photos/34783860/pexels-photo-34783860.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop", title: "Tourism", subtitle: "World-Class Destinations" },
    { url: "https://images.pexels.com/photos/15922603/pexels-photo-15922603.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop", title: "Strategic Gateway", subtitle: "Between India & China Markets" }
];

const SLIDE_DURATION = 5000;

export default function HeroSection() {
    const [index, setIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % slides.length);
        }, SLIDE_DURATION);
        return () => clearInterval(timer);
    }, []);

    const prevIndex = (index - 1 + slides.length) % slides.length;

    // --- UPDATED NAVIGATION FUNCTIONS ---

    const goToStartups = () => {
        setShowModal(false);
        // Navigates to <StartupSupportPage />
        navigate('/services/startup-support');
    };

    // Renamed goToFDI for clarity, now navigates to Business Consulting Page
    const goToBusiness = () => {
        setShowModal(false);
        // Navigates to <BusinessConsultingPage />
        navigate('/services/business-consulting');
    };

    // --- END UPDATED NAVIGATION FUNCTIONS ---


    return (
        <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40 overflow-hidden">

            {/* ... (Background Slideshow and Overlays remain the same) ... */}
            <div className="absolute inset-0 -z-10">
                <div
                    key={index}
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-3000 ease-linear"
                    style={{ backgroundImage: `url(${slides[index].url})` }}
                />
                {index !== 0 && (
                    <div
                        key={prevIndex}
                        className="absolute inset-0 bg-cover bg-center transition-opacity duration-3000 ease-linear opacity-0"
                        style={{ backgroundImage: `url(${slides[prevIndex].url})` }}
                    />
                )}
            </div>

            <div className="absolute inset-0 bg-black/45 -z-5" />

            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="absolute bottom-12 right-8 text-white text-right z-10"
                >
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-lg">
                        {slides[index].title}
                    </h3>
                    <p className="text-md md:text-lg lg:text-xl opacity-90 drop-shadow-lg">
                        {slides[index].subtitle}
                    </p>
                </motion.div>
            </AnimatePresence>

            {/* --- MAIN CONTENT (Left) --- */}
            <div className="max-w-5xl z-20 text-white mt-auto mb-12">
                <h1 className="mt-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] font-black leading-tight tracking-tighter drop-shadow-2xl">
                    {['Bridging investment,', 'growth, and impact', 'in Nepal'].map((line, i) => (
                        <span
                            key={i}
                            className={`block ${i === 0 ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400' : 'text-white'}`}
                        >
                            {line}
                        </span>
                    ))}
                </h1>
            </div>
            {/* --- CTA BUTTON (Right) --- */}
            <div className="mt-8 md:mt-0 z-20 text-white max-w-md">
                <p className="text-lg md:text-2xl mb-8 font-light italic drop-shadow-lg">
                    Nepal is rising as a high-growth frontier for global and local investors powered by hydropower, tourism, tech, agriculture, and world-class infrastructure.
                </p>

                <button
                    onClick={() => setShowModal(true)}
                    className="px-10 py-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                >
                    START INVESTING
                </button>
            </div>

            {/* --- MODAL --- */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        key="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowModal(false)}
                        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            key="modal-content"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={e => e.stopPropagation()}
                            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
                        >
                            <div className="h-2 w-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400" />

                            <div className="p-8 text-center">
                                <h2 className="text-3xl font-black text-gray-900 mb-2">Choose Your Path</h2>
                                <p className="text-gray-500 mb-8">Select the type of investment ecosystem you want to explore today.</p>

                                <div className="space-y-4">
                                    {/* UPDATED: Startup Button */}
                                    <button
                                        onClick={goToStartups}
                                        className="group w-full py-4 px-6 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-red-500/30 hover:scale-[1.02] transition-all flex items-center justify-between"
                                    >
                                        <span>Invest in Startups</span>
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                    </button>

                                    {/* UPDATED: Business Button (was goToFDI) */}
                                    <button
                                        onClick={goToBusiness}
                                        className="group w-full py-4 px-6 rounded-xl bg-gray-50 text-gray-700 border border-gray-200 font-bold text-lg hover:bg-gray-100 hover:border-gray-300 hover:scale-[1.02] transition-all flex items-center justify-between"
                                    >
                                        <span>Invest for Business</span>
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400">→</span>
                                    </button>
                                </div>

                                <button
                                    onClick={() => setShowModal(false)}
                                    className="mt-8 text-sm text-gray-400 hover:text-gray-800 transition uppercase tracking-widest font-semibold"
                                >
                                    Cancel
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}