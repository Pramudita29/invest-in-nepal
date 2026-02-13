'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Users, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NationalAgendaModal() {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => setIsVisible(false);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="subtle-button-modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6 bg-slate-900/40 backdrop-blur-md"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative w-full max-w-[92%] sm:max-w-md bg-white border border-slate-100 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-center"
                    >
                        {/* Close Button - Fixed: Removed namespaced props */}
                        <button
                            onClick={handleClose}
                            className="absolute top-6 right-6 md:top-8 md:right-8 text-slate-300 hover:text-slate-600 transition-colors p-2"
                        >
                            <X className="w-5 h-5 md:w-6 md:h-6" />
                        </button>

                        {/* Icon & Label */}
                        <div className="flex flex-col items-center">
                            <div className="mb-4 md:mb-6 w-12 h-12 md:w-14 md:h-14 bg-orange-50 rounded-xl md:rounded-2xl flex items-center justify-center">
                                {/* Fixed: Removed md:size */}
                                <Users className="text-orange-600 w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                            </div>

                            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-orange-600/70 mb-3">
                                2082 INITIATIVE
                            </span>

                            <h2 className="text-2xl md:text-3xl font-medium text-slate-900 leading-tight mb-4">
                                Beyond Voting <br className="hidden xs:block" />
                                <span className="font-serif italic">The Agenda Cohort</span>
                            </h2>

                            <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-[240px] md:max-w-[260px] mx-auto mb-8 md:mb-10">
                                Largest Grassroots Agenda-Setting Exercise for Nepal
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col items-center gap-4 md:gap-5">
                            <button
                                onClick={() => { handleClose(); navigate('/cohort'); }}
                                className="w-full bg-slate-950 hover:bg-orange-600 text-white font-bold py-3.5 md:py-4 px-6 md:px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-slate-200 hover:shadow-orange-200 active:scale-[0.96] md:active:scale-[0.98]"
                            >
                                <span className="text-xs md:text-sm tracking-widest uppercase">Set Your Agenda</span>
                                <ChevronRight size={18} />
                            </button>

                            <button
                                onClick={handleClose}
                                className="text-[10px] md:text-[11px] text-slate-400 font-bold uppercase tracking-widest hover:text-slate-900 transition-colors py-2"
                            >
                                Not right now
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}