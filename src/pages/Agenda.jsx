'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Loader2, Send, ShieldAlert } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar/Navbar';

// Configuration from your provided link
const GOOGLE_FORM_BASE_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeGYyxFhGLkIPsgpLfCOkYWwS4DrockShZscPNxbe8mkEjZBg/formResponse";

const ENTRY_IDS = {
    name: 'entry.2117875584',
    district: 'entry.1718190618',
    contact: 'entry.1657225923',
    profession: 'entry.976442586',
    concerns: 'entry.1705009081',
    suggestions: 'entry.648304'
};

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
    { en: "Legal Professional", ne: "कानुन व्यवसायी" },
    { en: "Other", ne: "अन्य" }
];

const AgendaStepPage = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isRestricted, setIsRestricted] = useState(false);
    const [selectedConcerns, setSelectedConcerns] = useState([]);
    const [formData, setFormData] = useState({
        name: '', contact: '', district: '', profession: '', otherProfession: '', suggestions: ''
    });

    useEffect(() => {
        const hasSubmitted = localStorage.getItem('agenda_v1_submitted');
        let storageAccess = true;
        try {
            const test = 'test';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
        } catch (e) { storageAccess = false; }

        if (hasSubmitted || !storageAccess) {
            setIsRestricted(true);
            setStep(3);
        }
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    const nextStep = () => { scrollToTop(); setStep((s) => s + 1); };
    const prevStep = () => { scrollToTop(); setStep((s) => s - 1); };

    const toggleConcern = (id) => {
        const label = CONCERNS.find(c => c.id === id).en;
        setSelectedConcerns(prev => prev.includes(label) ? prev.filter(i => i !== label) : [...prev, label]);
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        if (localStorage.getItem('agenda_v1_submitted')) return;

        setIsSubmitting(true);
        const finalProfession = formData.profession === 'Other' ? formData.otherProfession : formData.profession;

        const queryParams = new URLSearchParams();
        queryParams.append(ENTRY_IDS.name, formData.name);
        queryParams.append(ENTRY_IDS.district, formData.district);
        queryParams.append(ENTRY_IDS.contact, formData.contact);
        queryParams.append(ENTRY_IDS.profession, finalProfession);
        queryParams.append(ENTRY_IDS.concerns, selectedConcerns.join(', '));
        queryParams.append(ENTRY_IDS.suggestions, formData.suggestions);

        try {
            await fetch(`${GOOGLE_FORM_BASE_URL}?${queryParams.toString()}`, {
                method: 'POST',
                mode: 'no-cors',
            });
            localStorage.setItem('agenda_v1_submitted', 'true');
            toast.success('Your vision has been recorded.');
            setStep(3);
        } catch (err) {
            toast.error('Submission failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const labelStyle = "font-sans font-bold text-[12px] uppercase tracking-[0.2em] text-[#2D5A43]";
    const bodyTextStyle = "font-sans text-lg text-black/60 leading-relaxed";

    return (
        <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-[#2D5A43] selection:text-white">
            <Toaster position="top-center" />
            <Navbar />

            <div className="fixed top-0 left-0 w-full h-1 bg-black/5 z-[100]">
                <motion.div className="h-full bg-[#2D5A43]" animate={{ width: `${(step / 3) * 100}%` }} transition={{ duration: 0.8 }} />
            </div>

            <main className="max-w-[1400px] mx-auto px-6 lg:px-20 pt-40 pb-32">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* LEFT SIDEBAR */}
                    <div className="lg:w-1/3">
                        <div className="lg:sticky lg:top-40 space-y-12">
                            <div className="space-y-6">
                                <h2 className={labelStyle}>Beyond Voting: The Agenda Cohort</h2>
                                <h1 className="text-5xl font-bold tracking-tight leading-tight text-[#13231F]">
                                    “भोलिको लागि हाम्रो एजेन्डा”<br />
                                    <span className="text-[#2D5A43] font-medium">“Your Agenda for Tomorrow”</span>
                                </h1>
                                <div className="h-[2px] w-20 bg-[#2D5A43]" />
                            </div>

                            <div className="space-y-10">
                                <AnimatePresence mode="wait">
                                    {step === 1 ? (
                                        <motion.div key="text1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                                            <p className="text-xl text-[#13231F] font-medium">First, help us understand the perspective behind the vision.</p>
                                            <p className={bodyTextStyle}>तपाईंको पेशा र ठेगानाले तपाईंको दृष्टिकोणलाई बुझ्न मद्दत गर्नेछ।</p>
                                        </motion.div>
                                    ) : step === 2 ? (
                                        <motion.div key="text2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                                            <p className="text-xl text-[#13231F] font-medium">Define the roadmap. What needs to change?</p>
                                            <p className={bodyTextStyle}>२०८२ को लागि कार्यदिशा तय गर्नुहोस्। आफ्ना मुख्य सरोकारहरू र ठोस नीतिगत सुझावहरू उल्लेख गर्नुहोस्।</p>
                                        </motion.div>
                                    ) : null}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM AREA */}
                    <div className="lg:w-2/3">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-16">
                                    <div className="grid md:grid-cols-1 gap-12">
                                        <div className="space-y-4">
                                            <label className={labelStyle}>Full Name / पूरा नाम</label>
                                            <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b-2 border-black/5 py-4 text-2xl font-medium focus:border-[#2D5A43] outline-none transition-colors" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-12">
                                            <div className="space-y-4">
                                                <label className={labelStyle}>District / जिल्ला</label>
                                                <input type="text" placeholder="Location" className="w-full bg-transparent border-b-2 border-black/5 py-4 text-xl focus:border-[#2D5A43] outline-none transition-colors" value={formData.district} onChange={e => setFormData({ ...formData, district: e.target.value })} />
                                            </div>
                                            <div className="space-y-4">
                                                <label className={labelStyle}>Contact / सम्पर्क</label>
                                                <input type="text" placeholder="Email or Phone" className="w-full bg-transparent border-b-2 border-black/5 py-4 text-xl focus:border-[#2D5A43] outline-none transition-colors" value={formData.contact} onChange={e => setFormData({ ...formData, contact: e.target.value })} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <label className={labelStyle}>Select Profession / पेशा वा भूमिका</label>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                            {PROFESSIONS.map(p => (
                                                <button
                                                    key={p.en}
                                                    onClick={() => setFormData({ ...formData, profession: p.en })}
                                                    className={`group text-left p-4 rounded-xl border transition-all duration-200 ${formData.profession === p.en ? 'border-[#2D5A43] bg-[#2D5A43] text-white' : 'border-black/5 bg-white hover:border-[#2D5A43]/40'}`}
                                                >
                                                    <p className="text-[15px] font-sans font-medium leading-tight mb-1">{p.en}</p>
                                                    <p className="text-[15px] font-sans font-medium leading-tight">{p.ne}</p>
                                                </button>
                                            ))}
                                        </div>
                                        {formData.profession === 'Other' && (
                                            <motion.input initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} type="text" placeholder="Specify your role" className="w-full bg-transparent border-b-2 border-[#2D5A43] py-4 text-xl outline-none" value={formData.otherProfession} onChange={e => setFormData({ ...formData, otherProfession: e.target.value })} />
                                        )}
                                    </div>

                                    <button onClick={nextStep} className="w-full bg-[#13231F] text-white py-8 rounded-2xl text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-[#2D5A43] transition-all shadow-xl">
                                        Proceed to Vision
                                    </button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-16">
                                    <div className="space-y-8">
                                        <div className="space-y-4">
                                            <label className={labelStyle}>Core Concerns / सरोकारका मुख्य विषयहरू</label>
                                            <p className="text-lg text-black/50">Select all that apply / लागू हुने सबै छनोट गर्नुहोस्।</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                            {CONCERNS.map((item) => {
                                                const active = selectedConcerns.includes(item.en);
                                                return (
                                                    <button
                                                        key={item.id}
                                                        onClick={() => toggleConcern(item.id)}
                                                        className={`text-left p-4 rounded-xl border transition-all duration-200 ${active
                                                            ? 'bg-[#2D5A43] border-[#2D5A43] text-white'
                                                            : 'bg-white border-black/5 hover:border-[#2D5A43]/40'
                                                            }`}
                                                    >
                                                        <p className="text-[15px] font-sans font-medium leading-tight mb-1">{item.en}</p>
                                                        <p className="text-[15px] font-sans font-medium leading-tight">{item.ne}</p>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="space-y-10">
                                        <div className="space-y-6 p-10 bg-white rounded-[2rem] border border-black/5 shadow-sm">
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold text-[#13231F]">Vision & Concrete Policies</h3>
                                                <p className={bodyTextStyle}>Please share your concrete suggestions or policies you wish to see implemented.</p>
                                                <p className="text-lg text-[#2D5A43] font-medium italic">नेपाल निर्माणका लागि तपाईंले देख्न चाहनुभएको ठोस सुझाव, नीतिहरू वा स्थानीय क्षेत्रका समस्याहरू यहाँ उल्लेख गर्नुहोस्।</p>
                                            </div>
                                            <textarea className="w-full bg-[#FAF9F6] rounded-2xl p-8 h-80 text-lg font-sans outline-none border border-black/5 focus:border-[#2D5A43]/30 transition-all resize-none" placeholder="Your suggestions..." value={formData.suggestions} onChange={e => setFormData({ ...formData, suggestions: e.target.value })} />
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <button onClick={prevStep} className="sm:w-1/4 py-6 rounded-2xl border-2 border-black/5 font-bold text-[12px] uppercase tracking-widest hover:bg-black/5 transition-all">Back</button>
                                        <button onClick={handleSubmit} disabled={isSubmitting} className="flex-1 bg-[#13231F] text-white py-6 rounded-2xl font-bold text-[14px] uppercase tracking-[0.2em] hover:bg-[#2D5A43] transition-all flex justify-center items-center gap-4 shadow-2xl">
                                            {isSubmitting ? <Loader2 className="animate-spin" /> : <>Submit Response <Send size={18} /></>}
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-40 bg-white rounded-[3rem] border border-black/5 shadow-2xl space-y-10">
                                    {isRestricted ? (
                                        <>
                                            <ShieldAlert size={100} className="mx-auto text-red-500 stroke-[1px]" />
                                            <div className="space-y-4 px-10">
                                                <h2 className="text-4xl font-bold tracking-tighter">Access Restricted</h2>
                                                <p className="text-xl text-black/40">To ensure integrity, we only allow one response per person. Private/Incognito browsing is not permitted for this form.</p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle2 size={100} className="mx-auto text-[#2D5A43] stroke-[1px]" />
                                            <div className="space-y-4">
                                                <h2 className="text-6xl font-bold tracking-tighter">धन्यवाद</h2>
                                                <p className="text-xl text-black/40">Your response has been successfully recorded.</p>
                                            </div>
                                        </>
                                    )}
                                    <p className="font-bold text-sm uppercase tracking-widest text-[#2D5A43]">The Agenda Cohort 2082</p>
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