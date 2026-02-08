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
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#F5F2ED] text-[#13231F] min-h-screen">

      {/* --- HERO: ARCHITECTURAL OVERLAP --- */}
      <header className="relative w-full h-[90vh] flex items-center pt-20">
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-[85%] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
            className="w-full h-full object-cover grayscale-[30%] brightness-75"
            alt="Startup Nepal"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16">
          <div className="bg-[#F5F2ED] p-12 md:p-20 max-w-3xl shadow-[30px_0_60px_-15px_rgba(0,0,0,0.1)] border-l-4 border-[#004B33]">
            <button
              onClick={() => navigate(-1)}
              className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#004B33] mb-10 flex items-center gap-2 hover:-translate-x-2 transition-transform"
            >
              <ArrowLeft size={14} /> Back to Hub
            </button>
            <h1 className="text-5xl md:text-8xl font-serif tracking-tighter leading-none lowercase mb-10">
              Start Your Company <br /> in <span className="italic text-[#004B33]">Nepal.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-[#13231F]/60 italic leading-relaxed border-t border-[#13231F]/10 pt-10">
              100% Online • 7–15 Days • From idea to legal entity — zero office visits.
            </p>
          </div>
        </div>
      </header>

      {/* --- NARRATIVE SECTION --- */}
      <article className="max-w-7xl mx-auto px-8 md:px-16 py-32">
        <div className="max-w-3xl mb-32">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#004B33] mb-6 block font-bold">The 2026 Landscape</span>
          <h2 className="text-4xl md:text-5xl font-serif italic mb-8 lowercase">Why Register?</h2>
          <p className="text-xl text-[#13231F]/70 font-light leading-relaxed">
            Nepal saw 200+ startups funded this year. But 68% fail to raise without proper registration.
            Unlock grants, bank accounts, hiring, and investor trust today.
          </p>
        </div>

        {/* --- THE 6-STEP ROADMAP (CLEAN GRID) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#13231F]/10 border border-[#13231F]/10">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-12 flex flex-col justify-between hover:bg-[#F9F7F2] transition-colors group">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-[#F5F2ED] group-hover:bg-[#004B33] transition-colors">
                    <step.icon size={24} className="text-[#004B33] group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-right">
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-[#004B33]">{step.timeline}</span>
                    <span className="block font-mono text-[9px] uppercase tracking-widest opacity-30 mt-1">{step.cost}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-6 lowercase italic">{step.title}</h3>
                <p className="text-[#13231F]/60 mb-8 font-light leading-relaxed">{step.description}</p>
                <ul className="space-y-4 mb-12">
                  {step.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-3 text-[11px] font-mono uppercase tracking-widest opacity-50 leading-tight">
                      <Check size={12} className="text-[#004B33] mt-0.5" /> {d}
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

      {/* --- FEE TABLE: TABULAR PRECISION --- */}
      <section className="bg-white py-32 border-y border-[#13231F]/5">
        <div className="max-w-4xl mx-auto px-8">
          <h3 className="text-3xl font-serif italic text-center mb-20 lowercase">Official Registration Fees</h3>
          <div className="overflow-hidden border border-[#13231F]/10">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#F5F2ED]">
                <tr>
                  <th className="p-6 font-mono text-[10px] uppercase tracking-widest opacity-40 border-r border-[#13231F]/10">Authorized Capital</th>
                  <th className="p-6 font-mono text-[10px] uppercase tracking-widest opacity-40 text-right">Fee (NPR)</th>
                </tr>
              </thead>
              <tbody className="font-serif italic text-lg">
                {feeTiers.map((tier, i) => (
                  <tr key={i} className="border-t border-[#13231F]/10">
                    <td className="p-8 border-r border-[#13231F]/10">{tier.capital}</td>
                    <td className="p-8 text-right text-[#004B33] font-bold">{tier.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: REFINED --- */}
      <section className="bg-[#13231F] py-32 px-8 text-center rounded-t-[2.5rem] mt-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-10 italic lowercase leading-tight">
            Ready to <span className="not-italic text-[#A3B18A]">Register?</span>
          </h2>
          <p className="text-[#F5F2ED]/60 font-light italic mb-12">
            Let our experts handle everything — from name reservation to certificate delivery in 7–15 days.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-10 bg-white text-[#13231F] px-12 py-6 hover:bg-[#F5F2ED] transition-all rounded-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] font-bold">Get Expert Help Now</span>
            <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* FLOATING CONTACT */}
      <Link to="/contact" className="fixed bottom-8 right-8 w-14 h-14 bg-[#004B33] text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-transform border border-white/10">
        <PhoneCall size={20} />
      </Link>
    </motion.section>
  );
}