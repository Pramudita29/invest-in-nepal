// src/pages/ContactUsPage.jsx
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar } from 'lucide-react';
import { useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ContactUsPage() {
  const [budget, setBudget] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Force scroll to top when opening Contact page
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Smart Back Button — goes back to exact previous location
  const handleBack = () => {
    // If we came from somewhere with state (like your Startup Hub cards)
    if (location.state?.from && location.state?.scrollTo) {
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Optional: subtle highlight
          element.style.transition = 'background 1s';
          element.style.background = 'linear-gradient(90deg, #fff7ed 0%, transparent 40%)';
          setTimeout(() => element.style.background = '', 2000);
        }
      }, 100);
    } else {
      // Normal browser back
      navigate(-1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks — we’ll reply within 24 hours.");
  };

  const budgets = ["$5K - $25K", "$25K - $50K", "$50K - $100K", "$100K+"];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 py-16 px-5 md:py-20">

      {/* SMART BACK BUTTON */}
      <button
        onClick={handleBack}
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-gray-700 hover:text-orange-600 font-bold transition px-5 py-3"
      >
        <ArrowLeft size={22} /> Back
      </button>

      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 pt-20"
        >
          <h1 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600 leading-tight">
            Let’s talk
          </h1>
          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Share your project details or email us at{" "}
            <a href="mailto:info@xxxxx.com" className="text-orange-600 font-bold hover:underline">
              info@xxxxx.com
            </a>
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* All your form fields — unchanged but slightly improved */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name & Company</label>
            <input type="text" placeholder="Don from Earth, Inc." required className="w-full px-6 py-4 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/30 focus:border-orange-500 transition" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div><label className="block text-sm font-medium text-gray-700 mb-2">Domain or URL</label><input type="text" placeholder="donfromearth.me" className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-white focus:ring-4 focus:ring-orange-500/30 focus:border-orange-500 outline-none transition" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-2">Email</label><input type="email" placeholder="don@orionco.co" required className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-white focus:ring-4 focus:ring-orange-500/30 focus:border-orange-500 outline-none transition" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-2">Phone (optional)</label><input type="tel" placeholder="+977 98XXXXXXXX" className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-white focus:ring-4 focus:ring-orange-500/30 focus:border-orange-500 outline-none transition" /></div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
            <textarea rows={6} placeholder="Tell us what you're building…" required className="w-full px-6 py-5 rounded-2xl border border-gray-300 bg-white focus:ring-4 focus:ring-orange-500/30 focus:border-orange-500 outline-none resize-none transition" />
          </div>

          <div className="text-center">
            <p className="text-sm font-medium text-gray-700 mb-4">Estimated Budget</p>
            <div className="flex flex-wrap justify-center gap-4">
              {budgets.map((range) => (
                <button key={range} type="button" onClick={() => setBudget(range)}
                  className={`px-8 py-4 rounded-full font-bold transition-all ${budget === range ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg scale-105" : "bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-500"}`}>
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <button type="submit" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-black text-lg px-14 py-6 rounded-full shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300">
              Send Message
            </button>
          </div>
        </form>

        <div className="relative my-16 text-center">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <span className="relative bg-gradient-to-br from-gray-50 via-white to-orange-50 px-8 text-xl font-light text-gray-500">or</span>
        </div>

        <div className="max-w-2xl mx-auto bg-gradient-to-br from-orange-100 to-pink-50 rounded-3xl p-10 shadow-2xl border border-orange-200/50 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-gray-800">Prefer talking?</p>
            <p className="text-gray-600 mt-1">Book a free 30-minute consultation call</p>
          </div>
          <a href="https://cal.com/your-link" target="_blank" rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-10 py-5 rounded-full flex items-center gap-3 shadow-xl hover:scale-105 transition-all">
            <Calendar size={22} /> Book a Call
          </a>
        </div>

        <p className="text-center text-gray-600 mt-12 text-base max-w-xl mx-auto font-light">
          The form is fastest, but a short call works great if that’s easier.
        </p>
      </div>
    </section>
  );
}