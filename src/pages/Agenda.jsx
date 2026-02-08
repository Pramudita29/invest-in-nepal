'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Loader2, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Navbar from '../components/Navbar/Navbar';
const CONCERNS = [
    { id: 'edu', en: 'Quality Education', ne: 'गुणस्तरीय शिक्षा' },
    { id: 'elec', en: 'Electricity & Energy', ne: 'विद्युत र उर्जा' },
    { id: 'health', en: 'Health Services', ne: 'स्वास्थ्य सेवा' },
    { id: 'tour', en: 'Tourism & Culture', ne: 'पर्यटन र संस्कृति' },
    { id: 'econ', en: 'Economic Growth', ne: 'आर्थिक वृद्धि' },
    { id: 'ent', en: 'Entrepreneurship', ne: 'उद्यमशीलता' },
    { id: 'infra', en: 'Infrastructure & Roads', ne: 'पूर्वाधार र सडक' },
    { id: 'agri', en: 'Agricultural Modernization', ne: 'कृषि आधुनिकीकरण' },
    { id: 'water', en: 'Clean Drinking Water', ne: 'खानेपानी' },
    { id: 'ind', en: 'Industrial Growth', ne: 'औद्योगिक विकास' },
    { id: 'irr', en: 'Irrigation', ne: 'सिंचाई' },
    { id: 'jobs', en: 'Jobs & Employment', ne: 'रोजगारी' },
    { id: 'gov', en: 'Good Governance', ne: 'सुशासन' },
    { id: 'ineq', en: 'Economic Inequality', ne: 'आर्थिक असमानता' },
    { id: 'tech', en: 'IT & Digital Nepal', ne: 'सूचना प्रविधि' },
    { id: 'inc', en: 'Inclusion', ne: 'समावेशीकरण' },
];

const PROFESSIONS = [
    { en: "Software/IT Professional", ne: "सफ्टवेयर/आईटी व्यवसायी" },
    { en: "Startup Founder/Entrepreneur", ne: "स्टार्टअप संस्थापक/उद्यमी" },
    { en: "Private Sector Employee", ne: "निजी क्षेत्रको कर्मचारी" },
    { en: "Student", ne: "विद्यार्थी" },
    { en: "Farmer", ne: "कृषक" },
    { en: "Teacher/Professor", ne: "शिक्षक/प्राध्यापक" },
    { en: "Healthcare Worker", ne: "स्वास्थ्यकर्मी" },
    { en: "Government Employee", ne: "सरकारी कर्मचारी" },
    { en: "Legal Professional", ne: "कानुन व्यवसायी" }
];

const AgendaStepPage = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedConcerns, setSelectedConcerns] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        district: '',
        profession: '',
        suggestions: '',
        comments: ''
    });

    const nextStep = () => setStep((s) => s + 1);
    const prevStep = () => setStep((s) => s - 1);

    const toggleConcern = (id) => {
        const concernLabel = CONCERNS.find(c => c.id === id).en;
        setSelectedConcerns(prev =>
            prev.includes(concernLabel) ? prev.filter(i => i !== concernLabel) : [...prev, concernLabel]
        );
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        setIsSubmitting(true);

        const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeGYyxFhGLkIPsgpLfCOkYWwS4DrockShZscPNxbe8mkEjZBg/formResponse";

        const data = new FormData();
        // Use the actual state variables here:
        data.append('entry.2117875584', formData.name);
        data.append('entry.1718190618', formData.district);
        data.append('entry.976442586', formData.profession);
        data.append('entry.1705009081', selectedConcerns.join(', '));
        data.append('entry.648304', formData.suggestions);
        data.append('entry.1060551828', formData.comments);

        try {
            await fetch(FORM_URL, { method: 'POST', mode: 'no-cors', body: data });

            toast.success('Agenda Submitted! / एजेन्डा पठाइयो।');

            // Clear the form after success
            setFormData({ name: '', district: '', profession: '', suggestions: '', comments: '' });
            setSelectedConcerns([]);
            setStep(1);
        } catch (err) {
            toast.error('Error submitting form');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F5F2ED] text-[#13231F] font-serif">
            <Navbar />

            {/* Top Progress Bar */}
            <div className="fixed top-16 md:top-20 left-0 w-full h-1 bg-[#13231F]/5 z-50">
                <motion.div
                    className="h-full bg-[#2D5A43]"
                    initial={{ width: '33%' }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                />
            </div>

            <main className="max-w-[100rem] mx-auto px-8 lg:px-16 pt-32 pb-20">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* LEFT COLUMN: FIXED TITLES */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-fit lg:sticky lg:top-40">
                        <div>
                            <span className="font-sans font-bold tracking-[0.4em] text-[9px] uppercase block mb-6 text-[#344E41] opacity-60">
                                Stratbridge / Phase 02
                            </span>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 15 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h1 className="text-4xl md:text-5xl font-semibold uppercase italic tracking-tighter leading-tight mb-6">
                                        {step === 1 && <><span className="block text-xl mb-2 not-italic font-sans opacity-40">01.</span> The Participant <br /> <span className="text-2xl not-italic font-sans">सहभागी विवरण</span></>}
                                        {step === 2 && <><span className="block text-xl mb-2 not-italic font-sans opacity-40">02.</span> The Priorities <br /> <span className="text-2xl not-italic font-sans">सरोकारका विषय</span></>}
                                        {step === 3 && <><span className="block text-xl mb-2 not-italic font-sans opacity-40">03.</span> The Vision <br /> <span className="text-2xl not-italic font-sans">ठोस एजेन्डा</span></>}
                                    </h1>

                                    <p className="text-base opacity-60 max-w-sm leading-relaxed font-sans">
                                        {step === 1 && "Identifying the key stakeholders behind the strategic movement."}
                                        {step === 2 && "Selecting specific pillars for national policy intervention."}
                                        {step === 3 && "Defining concrete outcomes for the 2082 Roadmap."}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="hidden lg:block pt-16 border-t border-[#13231F]/10 mt-16">
                            <p className="text-lg font-semibold italic">“भोलिको लागि हाम्रो एजेन्डा”</p>
                            <span className="text-[8px] font-sans font-bold uppercase tracking-[0.4em] opacity-40 mt-2 block text-[#344E41]">Agenda Cohort 2082</span>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: FORMS */}
                    <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div key="step1" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-12">
                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="group">
                                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase block mb-2 opacity-40 group-focus-within:text-[#2D5A43] group-focus-within:opacity-100 transition-all font-sans">Name / नाम</label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-transparent border-b border-[#13231F]/20 py-3 outline-none focus:border-[#2D5A43] text-xl transition-all"
                                                placeholder="Enter Full Name"
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase block mb-2 opacity-40 group-focus-within:text-[#2D5A43] group-focus-within:opacity-100 transition-all font-sans">District / जिल्ला</label>
                                            <input
                                                type="text"
                                                value={formData.district}
                                                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                                                className="w-full bg-transparent border-b border-[#13231F]/20 py-3 outline-none focus:border-[#2D5A43] text-xl transition-all"
                                                placeholder="Current District"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <label className="text-[10px] font-bold tracking-[0.2em] uppercase block opacity-40 font-sans">Select Profession / पेशा</label>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {PROFESSIONS.map(p => (
                                                <button
                                                    key={p.en}
                                                    onClick={() => setFormData({ ...formData, profession: p.en })}
                                                    className={`text-left px-5 py-4 transition-all border ${formData.profession === p.en ? 'bg-[#13231F] text-[#F5F2ED] border-[#13231F]' : 'bg-[#13231F]/5 border-transparent hover:bg-[#13231F]/10'}`}
                                                >
                                                    <div className="text-base font-semibold uppercase tracking-tight">{p.en}</div>
                                                    <div className="text-base font-medium opacity-50">{p.ne}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <button onClick={nextStep} className="w-full bg-[#13231F] text-[#F5F2ED] py-6 rounded-full font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#2D5A43] transition-all group font-sans">
                                        Next Stage <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div key="step2" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {CONCERNS.map((item) => {
                                            const isSelected = selectedConcerns.includes(item.en);
                                            return (
                                                <button
                                                    key={item.id}
                                                    onClick={() => toggleConcern(item.id)}
                                                    className={`text-left px-5 py-5 border transition-all ${isSelected ? 'bg-[#2D5A43] text-[#F5F2ED] border-[#2D5A43]' : 'bg-[#13231F]/5 border-transparent hover:bg-[#13231F]/10'}`}
                                                >
                                                    <div className="text-base font-semibold uppercase tracking-tight leading-none mb-1">{item.en}</div>
                                                    <div className="text-base font-medium opacity-50">{item.ne}</div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <button onClick={prevStep} className="flex-1 border border-[#13231F]/20 py-6 rounded-full font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 font-sans opacity-60 hover:opacity-100 transition-opacity">
                                            <ChevronLeft size={16} /> Back
                                        </button>
                                        <button onClick={nextStep} className="flex-[2] bg-[#13231F] text-[#F5F2ED] py-6 rounded-full font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#2D5A43] font-sans">
                                            Continue <ChevronRight size={16} />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div key="step3" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-12">
                                    <div className="space-y-8">
                                        <div className="group">
                                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase block mb-3 opacity-40 font-sans">Concrete Suggestions / सुझाव</label>
                                            <textarea
                                                value={formData.suggestions}
                                                onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })}
                                                className="w-full bg-[#13231F]/5 border-none p-6 rounded-2xl h-56 focus:ring-1 focus:ring-[#2D5A43] outline-none text-lg font-medium"
                                                placeholder="Describe policy proposals..."
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase block mb-3 opacity-40 font-sans">Local Comments / टिप्पणी</label>
                                            <textarea
                                                value={formData.comments}
                                                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                                                className="w-full bg-[#13231F]/5 border-none p-6 rounded-2xl h-32 focus:ring-1 focus:ring-[#2D5A43] outline-none text-lg font-medium"
                                                placeholder="Additional notes..."
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <button onClick={prevStep} className="flex-1 border border-[#13231F]/20 py-6 rounded-full font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 font-sans opacity-60">
                                            <ChevronLeft size={16} /> Back
                                        </button>
                                        <button
                                            onClick={handleSubmit}
                                            disabled={isSubmitting}
                                            className="flex-[2] bg-[#2D5A43] text-[#F5F2ED] py-6 rounded-full font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#13231F] font-sans transition-all disabled:opacity-50"
                                        >
                                            {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : <>Submit Agenda / पठाउनुहोस् <Send size={16} /></>}
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AgendaStepPage;