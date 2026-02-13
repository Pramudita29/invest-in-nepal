import { gsap } from 'gsap';
import { ChevronDown, MoveRight, X } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConsultationPage = () => {
    const containerRef = useRef(null);
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".reveal", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power4.out"
            });
            gsap.from(".line-grow", {
                scaleX: 0,
                duration: 1.2,
                ease: "expo.inOut",
                delay: 0.4
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        formData.append("access_key", "ef9611ec-9fcb-4b1f-8a35-d8e96a9b8bcf");
        formData.append("subject", "New Consultation Briefing - Stratbridge");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                setSubmitted(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                alert("Submission failed. Please try again.");
            }
        } catch (error) {
            alert("Network error. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const labelClasses = "font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-[#2D5A43] mb-2 block transition-all duration-300 group-focus-within:text-[#FF4F00]";
    const inputClasses = "w-full bg-transparent border-none py-2 font-serif text-2xl italic text-[#1A1A1A] outline-none placeholder:text-black/5 transition-all";

    return (
        // Changed h-screen to min-h-screen and removed overflow-hidden
        <div ref={containerRef} className="min-h-screen w-full bg-[#FAF9F6] flex flex-col relative selection:bg-[#2D5A43] selection:text-white">

            {/* Header */}
            <nav className="flex-none p-8 lg:p-12 flex justify-between items-center z-50">
                <div className="reveal">
                    <span className="block text-xl font-serif tracking-tighter uppercase">Stratbridge</span>
                    <span className="block text-[8px] font-sans font-bold uppercase tracking-[0.4em] text-[#2D5A43]">Partners</span>
                </div>
                <button onClick={() => navigate(-1)} className="p-2 hover:rotate-90 transition-transform duration-500">
                    <X size={24} strokeWidth={1} />
                </button>
            </nav>

            {/* main: Removed overflow-hidden and adjusted padding for mobile responsiveness */}
            <main className="flex-grow grid lg:grid-cols-12 items-center px-8 lg:px-24 py-12">

                {/* Left Side */}
                <div className="lg:col-span-5 pr-4 mb-12 lg:mb-0">
                    <div className="reveal">
                        <div className="w-10 h-[1px] bg-[#FF4F00] mb-6" />
                        <h1 className="font-serif text-5xl lg:text-[5.5rem] leading-[0.85] tracking-tighter italic text-[#1A1A1A] break-words max-w-min">
                            The <br />Consultation<span className="text-[#FF4F00]">.</span>
                        </h1>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="lg:col-span-7 lg:pl-32 lg:border-l border-black/5 h-full flex flex-col justify-center">
                    {!submitted ? (
                        <form onSubmit={handleFormSubmit} className="space-y-10 max-w-xl w-full">

                            <div className="reveal group">
                                <label className={labelClasses}>Full Name</label>
                                <input name="Full_Name" type="text" placeholder="Your name" required className={inputClasses} />
                                <div className="line-grow h-[1px] w-full bg-black/5 origin-left group-focus-within:bg-[#FF4F00] transition-colors mt-1" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="reveal group">
                                    <label className={labelClasses}>Email Address</label>
                                    <input name="Email" type="email" placeholder="email@address.com" required className={inputClasses} />
                                    <div className="line-grow h-[1px] w-full bg-black/5 origin-left group-focus-within:bg-[#FF4F00] transition-colors mt-1" />
                                </div>
                                <div className="reveal group">
                                    <label className={labelClasses}>Contact Number</label>
                                    <input name="Phone_Number" type="tel" placeholder="+977" required className={inputClasses} />
                                    <div className="line-grow h-[1px] w-full bg-black/5 origin-left group-focus-within:bg-[#FF4F00] transition-colors mt-1" />
                                </div>
                            </div>

                            <div className="reveal group">
                                <label className={labelClasses}>Service Required</label>
                                <div className="relative">
                                    <select name="Service_Type" required className={`${inputClasses} appearance-none cursor-pointer pr-10 relative z-10`}>
                                        <option value="" disabled selected className="text-black/20 italic">Select Option</option>
                                        <option value="Investment">Investment</option>
                                        <option value="Legal Advisory">Legal Advisory</option>
                                        <option value="Public Policy">Public Policy</option>
                                        <option value="Venture Capital">Venture Capital</option>
                                    </select>
                                    <ChevronDown size={18} className="absolute right-0 top-1/2 -translate-y-1/2 text-[#2D5A43] pointer-events-none group-focus-within:text-[#FF4F00] transition-colors" />
                                </div>
                                <div className="line-grow h-[1px] w-full bg-black/5 origin-left group-focus-within:bg-[#FF4F00] transition-colors mt-1" />
                            </div>

                            <div className="reveal group">
                                <label className={labelClasses}>Message</label>
                                <textarea
                                    name="Briefing_Message"
                                    required
                                    rows="1"
                                    placeholder="How can we help?"
                                    className={`${inputClasses} resize-none h-auto overflow-hidden`}
                                />
                                <div className="line-grow h-[1px] w-full bg-black/5 origin-left group-focus-within:bg-[#FF4F00] transition-colors mt-1" />
                            </div>

                            <div className="reveal pt-4 pb-8">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group flex items-center justify-between w-full border border-black/10 p-1 bg-white hover:border-[#2D5A43] transition-all duration-500 shadow-sm disabled:opacity-50"
                                >
                                    <span className="font-sans text-[9px] font-bold tracking-[0.5em] uppercase pl-8 text-[#1A1A1A]">
                                        {isSubmitting ? "Processing..." : "Submit Briefing"}
                                    </span>
                                    <div className="bg-[#2D5A43] p-6 group-hover:bg-[#FF4F00] transition-colors duration-500">
                                        <MoveRight size={24} className={`text-white transition-transform duration-500 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-2'}`} strokeWidth={1} />
                                    </div>
                                </button>
                            </div>

                        </form>
                    ) : (
                        <div className="reveal space-y-6">
                            <h2 className="font-serif text-6xl lg:text-9xl italic leading-none text-[#1A1A1A]">Received<span className="text-[#FF4F00]">.</span></h2>
                            <p className="font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-[#2D5A43]">We'll be in touch shortly.</p>
                            <button
                                onClick={() => navigate('/')}
                                className="inline-flex items-center gap-4 font-sans text-[9px] font-bold uppercase tracking-widest border-b border-black/20 pb-1 hover:border-[#FF4F00] transition-all"
                            >
                                Back to HQ <MoveRight size={14} />
                            </button>
                        </div>
                    )}
                </div>
            </main>

            <footer className="flex-none p-12 flex justify-between items-center opacity-20 mt-auto">
                <span className="font-sans text-[8px] font-bold tracking-[0.8em] uppercase">Private & Confidential</span>
                <span className="font-sans text-[8px] font-bold tracking-[0.8em] uppercase">©2026 Stratbridge</span>
            </footer>
        </div>
    );
};

export default ConsultationPage;