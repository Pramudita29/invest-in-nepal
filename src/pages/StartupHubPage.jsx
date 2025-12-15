// src/pages/StartupHubPage.jsx
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
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
import { useEffect, useLayoutEffect, useRef } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

const startupCards = [
  {
    id: 'register-innovate',
    title: 'Register & Innovate',
    subtitle: 'Legal Foundations for Startups in Nepal',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    type: 'guide',
  },
];

// Floating Contact Button - Animated & Always Visible
function FloatingContactButton() {
  const btnRef = useRef(null);

  useLayoutEffect(() => {
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        y: -12,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <Link
      ref={btnRef}
      to="/contact"
      className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-all duration-300"
      title="Get Expert Help"
    >
      <PhoneCall size={32} />
    </Link>
  );
}

// SMART BACK BUTTON – Returns exactly to #startup-hub on homepage
function SmartBackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    // If user came from homepage (we passed state), go back smartly
    if (location.state?.from === 'home') {
      navigate('/', { replace: true });

      setTimeout(() => {
        const element = document.getElementById('startup-hub');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });

          // Optional: subtle highlight effect
          element.style.transition = 'background 1s';
          element.style.background = 'linear-gradient(90deg, #fff7ed 0%, transparent 30%)';
          setTimeout(() => {
            element.style.background = '';
          }, 2000);
        }
      }, 100);
    } else {
      // Normal back behavior
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleBack}
      className="absolute top-10 left-10 flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold uppercase tracking-wider transition z-10 backdrop-blur-sm bg-black/30 px-5 py-3 rounded-full border border-white/20"
    >
      <ArrowLeft size={18} />
      Back
    </button>
  );
}

// Main Guide Page
function RegisterInnovateGuide() {
  const sectionRef = useRef(null);
  const circlesRef = useRef(null);
  const ctaContentRef = useRef(null);
  const ctaBtnRef = useRef(null);

  // Scroll to top on mount
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // GSAP Animations for Final CTA
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (circlesRef.current) {
        const circles = circlesRef.current.children;
        gsap.fromTo(
          circles,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 0.4,
            duration: 2,
            stagger: 0.2,
            ease: 'elastic.out(1,0.6)',
          }
        );
        gsap.to(circlesRef.current, {
          rotation: 360,
          duration: 120,
          repeat: -1,
          ease: 'none',
        });
      }

      if (ctaContentRef.current) {
        gsap.from(ctaContentRef.current.children, {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
        });
      }
      if (ctaBtnRef.current) {
        gsap.fromTo(
          ctaBtnRef.current,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'elastic.out(1,0.5)',
            delay: 0.6,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      icon: Building2,
      title: '1. Choose Your Company Type',
      description: 'Private Limited (Pvt. Ltd.) is ideal — flexible, limited liability, and investor-friendly.',
      details: ['Minimum 1 shareholder (max 101)', 'Minimum capital: NPR 100,000', 'Best for fundraising & credibility'],
      timeline: 'Immediate',
      cost: 'N/A',
    },
    {
      icon: FileText,
      title: '2. Reserve Company Name',
      description: 'Secure your unique name online in 1–2 days.',
      details: ['Go to ocr.gov.np → Name Search', 'Submit 2–3 options', 'Cost: NPR 100–500'],
      timeline: '1–2 days',
      cost: 'NPR 100–500',
    },
    {
      icon: Shield,
      title: '3. Prepare Documents',
      description: 'MoA, AoA, IDs, consents — everything online.',
      details: ['100% digital submission', 'Use OCR templates', 'Lawyer recommended (NPR 10–25K)'],
      timeline: '2–3 days',
      cost: 'NPR 10–25K',
    },
    {
      icon: Users,
      title: '4. Submit on OCR Portal',
      description: 'Upload everything — no office visit needed.',
      details: ['Create account at ocr.gov.np', 'Upload PDFs (300 DPI)', 'Fast approval if docs are clean'],
      timeline: '1 day',
      cost: 'Free',
    },
    {
      icon: Globe,
      title: '5. Pay & Get Certificate',
      description: 'Digital certificate emailed in 3–7 days.',
      details: ['Pay via eSewa/Khalti/bank', 'Start with low capital to save fees', 'Resubmit if rejected'],
      timeline: '3–7 days',
      cost: 'NPR 1,000+',
    },
    {
      icon: Check,
      title: '6. Post-Registration Steps',
      description: 'Get PAN, open bank account, register ward.',
      details: ['Company PAN (free, 3–5 days)', 'Bank account (Nabil, Global, etc.)', 'Ward tax registration'],
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

  return (
    <>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-white">
        {/* Hero */}
        <div className="relative h-screen">
          <img
            src={startupCards[0].image}
            alt="Startup Nepal"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-10 md:p-20 text-white">
            <SmartBackButton />
            <p className="text-orange-400 font-bold uppercase tracking-widest text-xs mb-4">
              Complete Guide • 2025
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-5xl">
              Start Your Company in Nepal
              <br />
              <span className="text-orange-400">100% Online • 7–15 Days</span>
            </h1>
            <p className="text-xl md:text-2xl mt-6 max-w-3xl font-light opacity-90">
              From idea to legal entity — zero office visits.
            </p>
          </div>
        </div>

        {/* Content */}
        <article className="max-w-6xl mx-auto px-6 py-24 space-y-28">
          <section className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Why Register in 2025?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nepal saw <strong>200+ startups funded</strong> this year. But{' '}
              <strong className="text-orange-600">68% fail to raise</strong> without proper registration.
              <br />
              Register now → unlock grants, bank accounts, hiring, and investor trust.
            </p>
          </section>

          <section className="space-y-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center">Your 6-Step Roadmap</h2>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-3xl p-8 md:p-12 flex gap-8 items-start shadow-sm"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex shrink-0 items-center justify-center">
                  <step.icon className="text-orange-600" size={32} />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-500">
                    <span className="text-orange-600">{step.timeline}</span>
                    <span className="text-orange-600">{step.cost}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-600">
                        <Check size={20} className="text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Fee Table */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-orange-50 p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Official Registration Fees</h3>
              </div>
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-6 font-bold text-gray-700">Authorized Capital</th>
                    <th className="p-6 font-bold text-gray-700">Fee (NPR)</th>
                  </tr>
                </thead>
                <tbody>
                  {feeTiers.map((tier, i) => (
                    <tr key={i} className="border-t">
                      <td className="p-6">{tier.capital}</td>
                      <td className="p-6 font-bold text-orange-600">{tier.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Final CTA */}
          <section ref={sectionRef} className="relative py-32 overflow-hidden">
            <div ref={circlesRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[600px] h-[600px] rounded-full border-2 border-orange-200/50" />
              <div className="w-[450px] h-[450px] rounded-full border-2 border-dashed border-orange-300/40" />
              <div className="w-[300px] h-[300px] rounded-full border border-orange-400/30" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center px-6" ref={ctaContentRef}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Ready to Register Your Startup?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
                Let our experts handle everything — from name reservation to certificate delivery in 7–15 days.
              </p>

              <Link
                ref={ctaBtnRef}
                to="/contact"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-xl px-16 py-6 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
              >
                Get Expert Help Now
                <ChevronRight size={28} />
              </Link>
            </div>
          </section>
        </article>
      </motion.section>

      <FloatingContactButton />
    </>
  );
}

// Index Page – Now passes state so back button works!
function StartupGuideIndex() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = 'Nepal Startup Ecosystem 2025 – Guides, Tools & Funding';
  }, []);

  return (
    <>
      <section id="startup-hub" className="min-h-screen bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
              Nepal Startup Ecosystem 2025
            </span>
          </h1>
          <p className="text-2xl text-gray-600 mb-20 max-w-5xl mx-auto">
            Free guides, tools, and connections to launch & scale your startup in Nepal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {startupCards.map((card) => (
              <Link
                key={card.id}
                to={`/hub/${card.id}`}
                state={{ from: 'home' }} // THIS MAKES BACK BUTTON SMART
                className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-96 object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-10 text-white">
                  <p className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-2">
                    {card.subtitle}
                  </p>
                  <h3 className="text-4xl font-black mb-6">{card.title}</h3>
                  <span className="inline-flex items-center gap-3 font-bold group-hover:gap-6 transition-all">
                    Explore <ChevronRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FloatingContactButton />
    </>
  );
}

// Main Export
export default function StartupHubPage() {
  const { cardId } = useParams();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [cardId]);

  if (!cardId) return <StartupGuideIndex />;

  const card = startupCards.find((c) => c.id === cardId);
  if (!card || card.type !== 'guide') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-300 mb-4">Coming Soon</h1>
          <p className="text-xl text-gray-600">
            This guide is under development.
            <br />
            <Link to="/" className="text-orange-600 hover:underline font-bold">
              Back to Home
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return <RegisterInnovateGuide />;
}