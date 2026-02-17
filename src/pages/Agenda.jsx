'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronDown, Info, Loader2, Send, ShieldAlert, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar/Navbar';

const GOOGLE_FORM_BASE_URL = "https://docs.google.com/forms/e/1FAIpQLSeGYyxFhGLkIPsgpLfCOkYWwS4DrockShZscPNxbe8mkEjZBg/formResponse";

const ENTRY_IDS = {
    name: 'entry.2117875584',
    age: 'entry.1199713018',
    district: 'entry.1718190618',
    contact: 'entry.1657225923',
    profession: 'entry.976442586',
    concerns: 'entry.1705009081',
    suggestions: 'entry.648304'
};

const DISTRICTS = [
    "Achham", "Arghakhanchi", "Baglung", "Baitadi", "Bajhang", "Bajura", "Banke", "Bara", "Bardiya", "Bhaktapur", "Bhojpur", "Chitwan", "Dadeldhura", "Dailekh", "Dang", "Darchula", "Dhading", "Dhankuta", "Dhanusa", "Dolakha", "Dolpa", "Doti", "Gorkha", "Gulmi", "Humla", "Ilam", "Jajarkot", "Jhapa", "Jumla", "Kailali", "Kalikot", "Kanchanpur", "Kapilvastu", "Kaski", "Kathmandu", "Kavrepalanchok", "Khotang", "Lalitpur", "Lamjung", "Mahottari", "Makwanpur", "Manang", "Morang", "Mugu", "Mustang", "Myagdi", "Nawalpur", "Parasi", "Nuwakot", "Okhaldhunga", "Palpa", "Panchthar", "Parbat", "Parsa", "Pyuthan", "Ramechhap", "Rasuwa", "Rautahat", "Rolpa", "Rukum East", "Rukum West", "Rupandehi", "Salyan", "Sankhuwasabha", "Saptari", "Sarlahi", "Sindhuli", "Sindhupalchok", "Siraha", "Solukhumbu", "Sunsari", "Surkhet", "Syangja", "Tanahu", "Taplejung", "Terhathum", "Udayapur"
];

const AGE_RANGES = [" (Prefer not to say)", "18-25", "25-28", "29-35", "35-45", "45-55", "55-65", "65 + above"];

const CONCERNS = [
    { id: 'edu', en: 'Quality Education', ne: 'गुणस्तरीय शिक्षा' },
    { id: 'elec', en: 'Electricity & Energy', ne: 'विद्युत र उर्जा' },
    { id: 'health', en: 'Health Services', ne: 'स्वास्थ्य सेवा' },
    { id: 'tour', ne: 'पर्यटन र संस्कृति', en: 'Tourism & Culture' },
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
    { id: 'fint', en: 'Foreign Intervention', ne: 'वैदेशिक हस्तक्षेप' },
    { id: 'law', en: 'Law and Order', ne: 'कानुन र व्यवस्था' },
    { id: 'pol_stab', en: 'Political Stability', ne: 'राजनीतिक स्थिरता' },
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

// --- Custom Themed Dropdown Component ---
const CustomSelect = ({ label, options, value, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative w-full" ref={containerRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-full border-b-2 border-black/5 py-3 pr-8 text-lg font-medium text-[#13231F] cursor-pointer flex justify-between items-center group transition-all focus-within:border-[#2D5A43]"
            >
                <span className={!value ? "text-black/30 font-normal" : ""}>
                    {value || placeholder}
                </span>
                <ChevronDown size={18} className={`text-black/30 group-hover:text-[#2D5A43] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-[110] left-0 right-0 mt-2 bg-[#FAF9F6] border border-black/5 rounded-2xl shadow-2xl max-h-60 overflow-y-auto overflow-x-hidden custom-scrollbar"
                    >
                        {options.map((opt) => (
                            <div
                                key={opt}
                                onClick={() => {
                                    onChange(opt);
                                    setIsOpen(false);
                                }}
                                className="px-5 py-3 text-base hover:bg-[#2D5A43] hover:text-white transition-colors cursor-pointer text-[#13231F]"
                            >
                                {opt}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const AgendaStepPage = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isRestricted, setIsRestricted] = useState(false);
    const [showExample, setShowExample] = useState(false);
    const [selectedConcerns, setSelectedConcerns] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        district: '',
        age: '',
        profession: '',
        otherProfession: '',
        suggestions: ''
    });

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const nextStep = () => {
        if (!formData.contact || !formData.age || !formData.profession) {
            toast.error("Contact, Age range, and Profession are required.");
            return;
        }
        scrollToTop();
        setStep(2);
    };

    const prevStep = () => {
        scrollToTop();
        setStep(1);
    };

    const toggleConcern = (id) => {
        const label = CONCERNS.find(c => c.id === id).en;
        setSelectedConcerns(prev =>
            prev.includes(label) ? prev.filter(i => i !== label) : [...prev, label]
        );
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        if (selectedConcerns.length === 0 || !formData.suggestions) {
            toast.error("Please select your concerns and provide suggestions.");
            return;
        }

        const normalizedContact = formData.contact.trim().toLowerCase().replace(/[\s-]/g, '');
        const pastContacts = JSON.parse(localStorage.getItem('submitted_contacts') || '[]');

        if (pastContacts.includes(normalizedContact)) {
            setIsRestricted(true);
            setStep(3);
            return;
        }

        setIsSubmitting(true);
        const finalProfession = formData.profession === 'Other' ? formData.otherProfession : formData.profession;

        const queryParams = new URLSearchParams();
        queryParams.append(ENTRY_IDS.name, formData.name || "Anonymous");
        queryParams.append(ENTRY_IDS.district, formData.district || "Not Disclosed");
        queryParams.append(ENTRY_IDS.contact, formData.contact);
        queryParams.append(ENTRY_IDS.age, formData.age);
        queryParams.append(ENTRY_IDS.profession, finalProfession);
        queryParams.append(ENTRY_IDS.concerns, selectedConcerns.join(', '));
        queryParams.append(ENTRY_IDS.suggestions, formData.suggestions);

        try {
            await fetch(`${GOOGLE_FORM_BASE_URL}?${queryParams.toString()}`, {
                method: 'POST',
                mode: 'no-cors',
            });
            localStorage.setItem('submitted_contacts', JSON.stringify([...pastContacts, normalizedContact]));
            setStep(3);
        } catch (err) {
            toast.error('Submission failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const labelStyle = "font-sans font-bold text-[10px] md:text-[12px] uppercase tracking-[0.2em] text-[#2D5A43]";
    const bodyTextStyle = "font-sans text-base md:text-lg text-black/60 leading-relaxed";
    const disclaimerStyle = "text-[10px] italic text-black/40 mt-1 block leading-tight";

    return (
        <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-[#2D5A43] selection:text-white">
            <Toaster position="top-center" />
            <Navbar />

            <div className="fixed top-0 left-0 w-full h-1 bg-black/5 z-[100]">
                <motion.div
                    className="h-full bg-[#2D5A43]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                />
            </div>

            <main className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-28 md:pt-40 pb-20 md:pb-32">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    <div className="lg:w-1/3">
                        <div className="lg:sticky lg:top-40 space-y-8 md:space-y-12">
                            <div className="space-y-4 md:space-y-6">
                                <h2 className={labelStyle}>Beyond Voting: The Agenda Cohort</h2>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#13231F]">
                                    “भोलिको लागि हाम्रो एजेन्डा”<br />
                                    <span className="text-[#2D5A43] font-medium text-2xl sm:text-3xl md:text-4xl">“Your Agenda for Tomorrow”</span>
                                </h1>
                                <div className="h-[2px] w-20 bg-[#2D5A43]" />
                            </div>

                            <div className="space-y-6 md:space-y-10">
                                <AnimatePresence mode="wait">
                                    {step === 1 ? (
                                        <motion.div key="t1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                                            <p className="text-lg md:text-xl text-[#13231F] font-medium">First, help us understand the perspective behind the vision.</p>
                                            <p className={bodyTextStyle}>तपाईंको पेशा र ठेगानाले तपाईंको दृष्टिकोणलाई बुझ्न मद्दत गर्नेछ।</p>
                                        </motion.div>
                                    ) : (
                                        <motion.div key="t2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                                            <p className="text-lg md:text-xl text-[#13231F] font-medium">Define the roadmap. What needs to change?</p>
                                            <p className={bodyTextStyle}>२०८२ को लागि कार्यदिशा तय गर्नुहोस्। आफ्ना मुख्य सरोकारहरू र ठोस नीतिगत सुझावहरू उल्लेख गर्नुहोस्।</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div key="s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-12 md:space-y-16">
                                    <div className="space-y-8 md:space-y-12">
                                        <div className="space-y-4">
                                            <label className={labelStyle}>Full Name / पूरा नाम</label>
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                className="w-full bg-transparent border-b-2 border-black/5 py-3 md:py-4 text-xl md:text-2xl font-medium focus:border-[#2D5A43] outline-none transition-colors"
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                                            <div className="space-y-4">
                                                <label className={labelStyle}>District / जिल्ला</label>
                                                <CustomSelect
                                                    options={DISTRICTS}
                                                    value={formData.district}
                                                    onChange={(val) => setFormData({ ...formData, district: val })}
                                                    placeholder="Select District"
                                                />
                                            </div>

                                            <div className="space-y-4">
                                                <label className={labelStyle}>Age Range / उमेर समूह *</label>
                                                <CustomSelect
                                                    options={AGE_RANGES}
                                                    value={formData.age}
                                                    onChange={(val) => setFormData({ ...formData, age: val })}
                                                    placeholder="Select Age"
                                                />
                                                <span className={disclaimerStyle}>If you don't want to disclose, type 0.</span>
                                            </div>

                                            <div className="space-y-4">
                                                <label className={labelStyle}>Contact / सम्पर्क *</label>
                                                <input
                                                    type="text"
                                                    placeholder="Email or Phone"
                                                    className="w-full bg-transparent border-b-2 border-black/5 py-3 text-lg font-medium focus:border-[#2D5A43] outline-none transition-colors"
                                                    value={formData.contact}
                                                    onChange={e => setFormData({ ...formData, contact: e.target.value })}
                                                />
                                                <span className={disclaimerStyle}>Requirement to avoid multiple entries by same person.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6 md:space-y-8">
                                        <label className={labelStyle}>Select Profession / पेशा वा भूमिका *</label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                                            {PROFESSIONS.map(p => (
                                                <button
                                                    key={p.en}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, profession: p.en })}
                                                    className={`group text-left p-4 rounded-xl border transition-all duration-200 ${formData.profession === p.en ? 'border-[#2D5A43] bg-[#2D5A43] text-white shadow-lg' : 'border-black/5 bg-white hover:border-[#2D5A43]/40'}`}
                                                >
                                                    <p className="text-[14px] md:text-[15px] font-sans font-medium leading-tight mb-1">{p.en}</p>
                                                    <p className="text-[12px] md:text-[13px] opacity-70">{p.ne}</p>
                                                </button>
                                            ))}
                                        </div>
                                        {formData.profession === 'Other' && (
                                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="pt-4">
                                                <label className={labelStyle}>Specify Profession *</label>
                                                <input
                                                    type="text"
                                                    placeholder="Your specific profession"
                                                    className="w-full bg-transparent border-b-2 border-black/5 py-3 text-lg focus:border-[#2D5A43] outline-none transition-colors"
                                                    value={formData.otherProfession}
                                                    onChange={e => setFormData({ ...formData, otherProfession: e.target.value })}
                                                />
                                            </motion.div>
                                        )}
                                    </div>

                                    <button onClick={nextStep} className="w-full bg-[#13231F] text-white py-6 md:py-8 rounded-2xl text-[12px] md:text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-[#2D5A43] transition-all shadow-xl">Proceed to Vision</button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div key="s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-12 md:space-y-16">
                                    <div className="space-y-6 md:space-y-8">
                                        <div className="space-y-2 md:space-y-4">
                                            <label className={labelStyle}>Core Concerns / सरोकारका मुख्य विषयहरू *</label>
                                            <p className="text-sm md:text-base text-black/50">Select all that apply / लागू हुने सबै छनोट गर्नुहोस्।</p>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                                            {CONCERNS.map((item) => {
                                                const active = selectedConcerns.includes(item.en);
                                                return (
                                                    <button
                                                        key={item.id}
                                                        type="button"
                                                        onClick={() => toggleConcern(item.id)}
                                                        className={`text-left p-4 rounded-xl border transition-all duration-200 ${active ? 'bg-[#2D5A43] border-[#2D5A43] text-white shadow-md' : 'bg-white border-black/5 hover:border-[#2D5A43]/40'}`}
                                                    >
                                                        <p className="text-[14px] md:text-[15px] font-sans font-medium leading-tight mb-1">{item.en}</p>
                                                        <p className="text-[12px] md:text-[13px] opacity-70">{item.ne}</p>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="space-y-8 md:space-y-10">
                                        <div className="space-y-6 p-6 md:p-10 bg-white rounded-[1.5rem] md:rounded-[2rem] border border-black/5 shadow-sm">
                                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                                <div className="space-y-4">
                                                    <h3 className="text-2xl md:text-3xl font-bold text-[#13231F] tracking-tight">Vision & Concrete Policies *</h3>
                                                    <p className="text-base md:text-lg text-black/60 font-medium leading-snug">Please share your concrete suggestions or policies you wish to see implemented.</p>
                                                    <p className="text-base md:text-lg text-[#2D5A43] leading-relaxed opacity-90">नेपाल निर्माणका लागि तपाईंले देख्न चाहनुभएको ठोस सुझाव, नीतिहरू वा स्थानीय क्षेत्रका समस्याहरू यहाँ उल्लेख गर्नुहोस्।</p>
                                                </div>
                                                <button onClick={() => setShowExample(true)} className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#2D5A43] hover:underline whitespace-nowrap">
                                                    <Info size={16} /> See Example
                                                </button>
                                            </div>
                                            <textarea
                                                className="w-full bg-[#FAF9F6] rounded-xl md:rounded-2xl p-4 md:p-8 h-64 md:h-80 text-base md:text-lg font-sans outline-none border border-black/5 focus:border-[#2D5A43]/30 transition-all resize-none"
                                                placeholder="Write your suggestions here..."
                                                value={formData.suggestions}
                                                onChange={e => setFormData({ ...formData, suggestions: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col-reverse sm:flex-row gap-4 md:gap-6">
                                        <button onClick={prevStep} className="w-full sm:w-1/4 py-5 md:py-6 rounded-2xl border-2 border-black/5 font-bold text-[11px] md:text-[12px] uppercase tracking-widest hover:bg-black/5 transition-all">Back</button>
                                        <button
                                            onClick={handleSubmit}
                                            disabled={isSubmitting}
                                            className="flex-1 bg-[#13231F] text-white py-5 md:py-6 rounded-2xl font-bold text-[13px] md:text-[14px] uppercase tracking-[0.2em] hover:bg-[#2D5A43] transition-all flex justify-center items-center gap-4 shadow-2xl"
                                        >
                                            {isSubmitting ? <Loader2 className="animate-spin" /> : <>Submit Response <Send size={18} /></>}
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20 md:py-40 bg-white rounded-[2rem] md:rounded-[3rem] border border-black/5 shadow-2xl space-y-8 md:space-y-10 px-6">
                                    {isRestricted ? (
                                        <>
                                            <ShieldAlert size={80} className="mx-auto text-red-500 stroke-[1px]" />
                                            <div className="space-y-4">
                                                <h2 className="text-3xl md:text-4xl font-bold">Limit Reached</h2>
                                                <p className="text-lg text-black/40">This contact has already been used.</p>
                                                <button onClick={() => { setStep(1); setIsRestricted(false); }} className="text-[#2D5A43] font-bold underline">Try another contact</button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle2 size={80} className="mx-auto text-[#2D5A43] stroke-[1px]" />
                                            <div className="space-y-4">
                                                <h2 className="text-4xl md:text-6xl font-bold">धन्यवाद</h2>
                                                <p className="text-lg text-black/40">Your response has been recorded.</p>
                                            </div>
                                            <div className="pt-4">
                                                <a href="/volunteer" className="inline-flex items-center gap-3 bg-[#13231F] text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-[#2D5A43] transition-all group">
                                                    Join the Cohort <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                                </a>
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </main>

            <AnimatePresence>
                {showExample && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
                        <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-white rounded-[2rem] max-w-2xl w-full p-8 md:p-12 relative shadow-2xl">
                            <button onClick={() => setShowExample(false)} className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors"><X size={24} /></button>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold">Example Suggestions</h3>
                                <div className="space-y-4 text-black/70 leading-relaxed">
                                    <p className="font-medium text-black">What a concrete suggestion looks like:</p>
                                    <p>“To improve public transport in Kathmandu, we should implement a bus rapid transit (BRT) system on the Ring Road and digitize all ticketing to reduce corruption and improve efficiency.”</p>
                                    <div className="h-[1px] bg-black/5 w-full" />
                                    <p className="italic text-sm">You can write in English, Nepali, or Romanized Nepali.</p>
                                </div>
                                <button onClick={() => setShowExample(false)} className="w-full bg-[#13231F] text-white py-4 rounded-xl font-bold">Got it</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AgendaStepPage;