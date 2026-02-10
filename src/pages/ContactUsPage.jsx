'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Send, ShieldCheck } from 'lucide-react';
import { useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

export default function ContactUsPage() {
  const [budget, setBudget] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    if (location.state?.from && location.state?.scrollTo) {
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } else {
      navigate(-1);
    }
  };

  // Simplified Budget in NPR
  const budgets = ["Under 1 Lakh", "1L - 5 Lakh", "5L - 10 Lakh", "10 Lakh+"];

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#13231F] selection:bg-[#004b33] selection:text-white antialiased">
      <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=JetBrains+Mono:wght@500&display=swap');
                    .font-heading { font-family: 'Playfair Display', serif; }
                    .font-body { font-family: 'Hanken Grotesk', sans-serif; }
                    .font-mono { font-family: 'JetBrains Mono', monospace; }
                `}
      </style>

      <Navbar />

      <main className="grid lg:grid-cols-2 min-h-screen pt-20">

        {/* LEFT PANEL */}
        <div className="p-8 lg:p-24 flex flex-col justify-between border-r border-[#13231F]/5">
          <div>
            <button
              onClick={handleBack}
              className="group flex items-center gap-3 text-[#004b33] font-mono text-[10px] uppercase tracking-[0.5em] mb-24 transition-all hover:opacity-50"
            >
              <ArrowLeft size={12} /> Go Back
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-heading font-normal tracking-tight leading-[0.9] mb-12">
                Contact <br />
                <span className="italic text-[#004b33]">Us.</span>
              </h1>

              <div className="max-w-md space-y-8">
                <p className="font-body text-xl font-light text-[#13231F]/70 leading-relaxed">
                  Fill out the form to tell us about your project. We usually reply within 24 hours.
                </p>

                <div className="flex items-center gap-4 text-[#004b33]/60 font-mono text-[10px] uppercase tracking-widest">
                  <ShieldCheck size={16} />
                  <span>Private & Secure</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-24 pt-12 border-t border-[#13231F]/10">
            <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#000000] mb-8 font-bold">Email Us Directly</p>
            <a href="mailto:stratbpartners@gmail.com" className="font-heading text-3xl italic hover:text-[#004b33] transition-colors">
              stratbpartners@gmail.com
            </a>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white p-8 lg:p-24">
          <form className="max-w-xl space-y-12">

            {/* SECTION 1 */}
            <div className="space-y-8">
              <span className="font-mono text-[18px] text-[#004b33] font-bold tracking-tighter">01 / Your Info</span>
              <div className="group border-b border-[#13231F]/10 focus-within:border-[#004b33] transition-colors pb-4">
                <label className="block font-mono text-[12px] uppercase tracking-widest text-[#000000] mb-2 font-bold">Name & Company</label>
                <input type="text" placeholder="Your name or business" className="w-full bg-transparent font-body text-xl outline-none placeholder:opacity-20 text-[#13231F]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="group border-b border-[#13231F]/10 focus-within:border-[#004b33] transition-colors pb-4">
                  <label className="block font-mono text-[12px] uppercase tracking-widest text-[#000000] mb-2 font-bold">Email Address</label>
                  <input type="email" placeholder="name@email.com" className="w-full bg-transparent font-body text-xl outline-none placeholder:opacity-20 text-[#13231F]" />
                </div>
                <div className="group border-b border-[#13231F]/10 focus-within:border-[#004b33] transition-colors pb-4">
                  <label className="block font-mono text-[12px] uppercase tracking-widest text-[#000000] mb-2 font-bold">Phone Number</label>
                  <input type="tel" placeholder="+977" className="w-full bg-transparent font-body text-xl outline-none placeholder:opacity-20 text-[#13231F]" />
                </div>
              </div>
            </div>

            {/* SECTION 2 */}
            <div className="space-y-8">
              <span className="font-mono text-[18px] text-[#004b33] font-bold tracking-tighter">02 / Project</span>
              <div className="group border-b border-[#13231F]/10 focus-within:border-[#004b33] transition-colors pb-4">
                <label className="block font-mono text-[12px] uppercase tracking-widest text-[#000000] mb-2 font-bold">Project Details</label>
                <textarea rows={4} placeholder="Tell us what you are building..." className="w-full bg-transparent font-body text-xl outline-none resize-none placeholder:opacity-20 text-[#13231F]" />
              </div>
            </div>

            {/* SECTION 3 */}
            <div className="space-y-8">
              <span className="font-mono text-[18px] text-[#004b33] font-bold tracking-tighter">03 / Budget (NPR)</span>
              <div className="flex flex-wrap gap-3">
                {budgets.map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => setBudget(range)}
                    className={`px-6 py-3 font-mono text-[12px] uppercase tracking-widest border transition-all ${budget === range
                      ? "bg-[#004b33] border-[#004b33] text-white shadow-md"
                      : "border-[#13231F]/10 hover:border-[#004b33] text-[#13231F]/60"
                      }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* SUBMIT */}
            <div className="pt-12">
              <button className="w-full group flex items-center justify-between bg-[#13231F] text-white p-8 hover:bg-[#004b33] transition-colors duration-500 shadow-xl">
                <span className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold">Send Message</span>
                <Send size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </form>

          {/* BOOK CALL */}
          <div className="mt-20 p-10 bg-[#F5F2ED] border-l-4 border-[#004b33] flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-heading text-2xl italic leading-none text-[#000000]">Need a call?</p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-[#000000] mt-2 font-bold">Schedule a free 30-min meeting</p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}