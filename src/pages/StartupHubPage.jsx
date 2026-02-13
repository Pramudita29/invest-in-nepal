'use client';

import Lenis from '@studio-freight/lenis';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Building2,
  Check,
  ChevronRight,
  FileText,
  Globe,
  PhoneCall,
  Shield,
  Users,
} from 'lucide-react';
import { useLayoutEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const steps = [
  {
    icon: Building2,
    title: '1. Choose Your Company Type',
    ctaLabel: 'Compare Structures',
    description: 'Private Limited (Pvt. Ltd.) is ideal — flexible, limited liability, and investor-friendly.',
    details: ['Minimum 1 shareholder (max 101)', 'Minimum capital: NPR 100,000', 'Best for fundraising & credibility'],
    timeline: 'Immediate',
    cost: 'N/A',
  },
  {
    icon: FileText,
    title: '2. Reserve Company Name',
    ctaLabel: 'Search Availability',
    description: 'Secure your unique name online in 1–2 days.',
    details: ['Go to ocr.gov.np → Name Search', 'Submit 2–3 options', 'Cost: NPR 100–500'],
    timeline: '1–2 days',
    cost: 'NPR 100–500',
  },
  {
    icon: Shield,
    title: '3. Prepare Documents',
    ctaLabel: 'Draft MoA/AoA',
    description: 'MoA, AoA, IDs, consents — everything online.',
    details: ['100% digital submission', 'Use OCR templates', 'Lawyer recommended (NPR 10–25K)'],
    timeline: '2–3 days',
    cost: 'NPR 10–25K',
  },
  {
    icon: Users,
    title: '4. Submit on OCR Portal',
    ctaLabel: 'Start Submission',
    description: 'Upload everything — no office visit needed.',
    details: ['Create account at ocr.gov.np', 'Upload PDFs (300 DPI)', 'Fast approval if docs are clean'],
    timeline: '1 day',
    cost: 'Free',
  },
  {
    icon: Globe,
    title: '5. Pay & Get Certificate',
    ctaLabel: 'Calculate Fees',
    description: 'Digital certificate emailed in 3–7 days.',
    details: ['Pay via eSewa/Khalti/bank', 'Start with low capital to save fees', 'Resubmit if rejected'],
    timeline: '3–7 days',
    cost: 'NPR 1,000+',
  },
  {
    icon: Check,
    title: '6. Post-Registration Steps',
    ctaLabel: 'Apply for PAN',
    description: 'Get PAN, open bank account, register ward.',
    details: ['Company PAN (free, 3–5 days)', 'Bank account setup', 'Ward tax registration'],
    timeline: '1–2 weeks',
    cost: 'NPR 5–15K',
  },
];

const feeTiers = [
  { capital: 'Up to NPR 100,000', fee: 'NPR 1,000' },
  { capital: 'NPR 100,001 – 500,000', fee: 'NPR 4,500' },
  { capital: 'NPR 500,001 – 2.5M', fee: 'NPR 9,500' },
  { capital: 'NPR 2.5M – 10M', fee: 'NPR 16,000' },
  { capital: 'Above NPR 10M', fee: 'NPR 30 per lakh' },
];

export default function RegisterInnovateGuide() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#F5F2ED] text-[#13231F] min-h-screen overflow-x-hidden">

      {/* --- HERO: ARCHITECTURAL OVERLAP --- */}
      <header className="relative w-full min-h-[80vh] lg:h-[90vh] flex items-center pt-20 lg:pt-0">
        {/* Background Image: Becomes top-aligned on mobile */}
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-[50vh] lg:h-[85%] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
            className="w-full h-full object-cover grayscale-[30%] brightness-75"
            alt="Startup Nepal"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 mt-[35vh] lg:mt-0">
          <div className="bg-[#F5F2ED] p-8 md:p-12 lg:p-20 max-w-3xl shadow-xl lg:shadow-[30px_0_60px_-15px_rgba(0,0,0,0.1)] border-l-4 border-[#004B33]">
            <button
              onClick={() => navigate(-1)}
              className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#004B33] mb-6 md:mb-10 flex items-center gap-2 hover:-translate-x-2 transition-transform"
            >
              <ArrowLeft size={14} /> Back
            </button>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif tracking-tighter leading-tight lg:leading-none lowercase mb-6 md:mb-10">
              Start Your Company <br /> in <span className="italic text-[#004B33]">Nepal.</span>
            </h1>
            <p className="text-lg md:text-2xl font-light text-[#13231F]/60 italic leading-relaxed border-t border-[#13231F]/10 pt-6 md:pt-10">
              100% Online • 7–15 Days • Zero office visits.
            </p>
          </div>
        </div>
      </header>

      {/* --- NARRATIVE SECTION --- */}
      <article className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 py-20 md:py-32">
        <div className="max-w-3xl mb-16 md:mb-32">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#004B33] mb-4 md:mb-6 block font-bold">The 2026 Landscape</span>
          <h2 className="text-3xl md:text-5xl font-serif italic mb-6 md:mb-8 lowercase text-[#13231F]">Why Register?</h2>
          <p className="text-lg md:text-xl text-[#13231F]/70 font-light leading-relaxed">
            Nepal saw 200+ startups funded this year. But 68% fail to raise without proper registration.
            Unlock grants, bank accounts, and investor trust today.
          </p>
        </div>

        {/* --- THE 6-STEP ROADMAP --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-px bg-[#13231F]/10 border border-[#13231F]/10">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-8 md:p-12 flex flex-col justify-between hover:bg-[#F9F7F2] transition-colors group">
              <div>
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <div className="p-4 bg-[#F5F2ED] group-hover:bg-[#004B33] transition-colors">
                    <step.icon size={24} className="text-[#004B33] group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-right">
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-[#004B33]">{step.timeline}</span>
                    <span className="block font-mono text-[9px] uppercase tracking-widest opacity-30 mt-1">{step.cost}</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-serif mb-4 md:mb-6 lowercase italic">{step.title}</h3>
                <p className="text-sm md:text-base text-[#13231F]/60 mb-6 md:mb-8 font-light leading-relaxed">{step.description}</p>
                <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12">
                  {step.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-3 text-[10px] md:text-[11px] font-mono uppercase tracking-widest opacity-60 leading-tight">
                      <Check size={12} className="text-[#004B33] mt-0.5 flex-shrink-0" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="inline-flex items-center justify-between border-b border-[#13231F]/10 pb-2 group-hover:border-[#004B33] transition-colors">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">{step.ctaLabel}</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </article>

      {/* --- FEE TABLE --- */}
      <section className="bg-white py-20 md:py-32 border-y border-[#13231F]/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h3 className="text-2xl md:text-3xl font-serif italic text-center mb-12 md:mb-20 lowercase">Official Registration Fees</h3>
          <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
            <div className="inline-block min-w-full align-middle border border-[#13231F]/10">
              <table className="min-w-full text-left border-collapse">
                <thead className="bg-[#F5F2ED]">
                  <tr>
                    <th className="p-4 md:p-6 font-mono text-[9px] md:text-[10px] uppercase tracking-widest opacity-40 border-r border-[#13231F]/10">Authorized Capital</th>
                    <th className="p-4 md:p-6 font-mono text-[9px] md:text-[10px] uppercase tracking-widest opacity-40 text-right">Fee (NPR)</th>
                  </tr>
                </thead>
                <tbody className="font-serif italic text-base md:text-lg">
                  {feeTiers.map((tier, i) => (
                    <tr key={i} className="border-t border-[#13231F]/10">
                      <td className="p-6 md:p-8 border-r border-[#13231F]/10">{tier.capital}</td>
                      <td className="p-6 md:p-8 text-right text-[#004B33] font-bold">{tier.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="bg-[#13231F] py-20 md:py-32 px-6 sm:px-8 text-center rounded-t-[2rem] md:rounded-t-[2.5rem] mt-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 md:mb-10 italic lowercase leading-tight">
            Ready to <span className="not-italic text-[#A3B18A]">Register?</span>
          </h2>
          <p className="text-sm md:text-base text-[#F5F2ED]/60 font-light italic mb-10 md:mb-12">
            Let our experts handle everything — from name reservation to certificate delivery in 7–15 days.
          </p>
          <Link to="/contact" className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-6 md:gap-10 bg-white text-[#13231F] px-8 md:px-12 py-5 md:py-6 hover:bg-[#F5F2ED] transition-all rounded-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-left">Get Expert Help</span>
            <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* FLOATING CONTACT */}
      <Link
        to="/contact"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-[#004B33] text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 active:scale-95 transition-transform border border-white/10"
      >
        {/* We use CSS classes to control the icon size instead of the md:size prop */}
        <PhoneCall className="w-5 h-5 md:w-6 md:h-6" />
      </Link>
    </motion.section>
  );
}