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
                    className="fixed inset-0 z-[999] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-md"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative w-full max-w-md bg-white border border-slate-100 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-[3rem] p-10 md:p-12 text-center"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-8 right-8 text-slate-300 hover:text-slate-600 transition-colors"
                        >
                            <X size={20} />
                        </button>

                        {/* Icon & Label */}
                        <div className="flex flex-col items-center">
                            <div className="mb-6 w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center">
                                <Users size={24} className="text-orange-600" strokeWidth={1.5} />
                            </div>

                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-600/70 mb-3">
                                2082 INITIATIVE
                            </span>

                            <h2 className="text-3xl font-medium text-slate-900 leading-tight mb-4">
                                The Election Agenda <br />
                                <span className="font-serif italic">Cohort 2082</span>
                            </h2>

                            <p className="text-slate-500 text-sm leading-relaxed max-w-[260px] mx-auto mb-10">
                                Join a refined collective of citizens and experts shaping the next roadmap for Nepal.
                            </p>
                        </div>

                        {/* The "Real" Button */}
                        <div className="flex flex-col items-center gap-5">
                            <button
                                onClick={() => { handleClose(); navigate('/proposal'); }}
                                className="w-full bg-slate-950 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-slate-200 hover:shadow-orange-200 active:scale-[0.98]"
                            >
                                <span className="text-sm tracking-widest uppercase">Set the Agenda</span>
                                <ChevronRight size={18} />
                            </button>

                            <button
                                onClick={handleClose}
                                className="text-[11px] text-slate-400 font-bold uppercase tracking-widest hover:text-slate-900 transition-colors"
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