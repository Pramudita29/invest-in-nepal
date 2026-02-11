'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, CheckCircle2, Loader2, Sparkles, Users } from 'lucide-react';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar/Navbar';

const ROLES = [
    { id: 'social', en: 'Social Media & Content', ne: 'सामाजिक सञ्जाल र सामग्री' },
    { id: 'tech', en: 'Tech & Data', ne: 'प्रविधि र डाटा' },
    { id: 'event', en: 'Event Coordination', ne: 'कार्यक्रम समन्वय' },
    { id: 'ground', en: 'On-Ground Mobilization', ne: 'स्थलगत परिचालन' },
    { id: 'research', en: 'Policy Research', ne: 'नीति अनुसन्धान' },
    { id: 'comm', en: 'Communication/PR', ne: 'सञ्चार र सम्पर्क' },
    { id: 'other', en: 'Others', ne: 'अन्य' },
];

const VolunteerPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', location: '', availability: 'Volunteer', message: '', otherRole: ''
    });

    const toggleRole = (role) => {
        setSelectedRoles(prev =>
            prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
        );
    };

    const validate = () => {
        if (!formData.name || !formData.email || !formData.phone || !formData.location) {
            toast.error("Please fill in your contact details.");
            return false;
        }
        if (selectedRoles.length === 0) {
            toast.error("Please select at least one area of interest.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);

        // Google Form Connection Logic
        const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeBkYxzeWDx5XIKq2HnR0iBRDoIdsG1x4LC1oLN1WXHQN3jeQ/formResponse";

        const formBody = new FormData();
        formBody.append('entry.577226955', formData.name);
        formBody.append('entry.1594764281', formData.email);
        formBody.append('entry.1614149903', formData.phone);
        formBody.append('entry.1115223043', formData.location);

        // Combining selected roles (and 'other' if applicable) into one string
        const rolesString = selectedRoles.includes('Others')
            ? [...selectedRoles.filter(r => r !== 'Others'), formData.otherRole].join(', ')
            : selectedRoles.join(', ');

        formBody.append('entry.1425969737', rolesString);
        formBody.append('entry.2115440581', formData.availability);
        formBody.append('entry.1438618639', formData.message);

        try {
            await fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                mode: 'no-cors', // Essential for Google Forms
                body: formBody
            });
            setIsSubmitted(true);
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const labelStyle = "text-[11px] font-bold uppercase tracking-[0.2em] text-[#2D5A43]/60 mb-2 block";
    const inputStyle = "w-full bg-white/60 border border-[#13231F]/5 rounded-2xl px-6 py-4 text-[#13231F] placeholder:text-[#13231F]/20 focus:border-[#2D5A43]/30 focus:bg-white focus:shadow-sm outline-none transition-all duration-300 font-sans";

    return (
        <div className="min-h-screen bg-[#F5F2ED] text-[#13231F]">
            <Toaster position="top-center" />
            <Navbar />

            <main className="max-w-7xl mx-auto px-8 lg:px-20 pt-48 pb-32">
                <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid lg:grid-cols-12 gap-20">

                            {/* LEFT SIDE */}
                            <div className="lg:col-span-5 space-y-12">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-[1px] bg-[#2D5A43]"></span>
                                        <h2 className="font-sans font-black text-[10px] uppercase tracking-[0.3em] text-[#2D5A43]">Join the Movement</h2>
                                    </div>
                                    <h1 className="text-6xl md:text-7xl font-medium font-serif leading-[1.1] tracking-tight">
                                        Join This <br />
                                        <span className="italic font-light text-[#2D5A43]">Campaign</span>
                                    </h1>
                                    <p className="text-xl font-sans opacity-70 leading-relaxed max-w-md">
                                        Contribute your time and expertise to help build a grassroots agenda that political leaders cannot ignore.
                                    </p>
                                </div>

                                <div className="space-y-6 pt-8 border-t border-[#13231F]/10">
                                    <div className="flex gap-5 items-center">
                                        <div className="bg-[#13231F] p-3 rounded-full text-[#F5F2ED]"><Users size={18} /></div>
                                        <div>
                                            <h4 className="font-bold font-sans uppercase text-xs tracking-widest">Community Focused</h4>
                                            <p className="text-sm opacity-50">Local problems, national solutions.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 items-center">
                                        <div className="bg-[#13231F] p-3 rounded-full text-[#F5F2ED]"><Sparkles size={18} /></div>
                                        <div>
                                            <h4 className="font-bold font-sans uppercase text-xs tracking-widest">Direct Impact</h4>
                                            <p className="text-sm opacity-50">Shape the discourse for Nepal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT SIDE: FORM */}
                            <div className="lg:col-span-7 space-y-12">

                                {/* Section: Identity */}
                                <div className="space-y-6">
                                    <h3 className="font-serif italic text-2xl">01. Personal Details</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className={labelStyle}>Full Name / पूरा नाम</label>
                                            <input placeholder="Full Name *" className={inputStyle} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <label className={labelStyle}>Contact / सम्पर्क</label>
                                            <input placeholder="Phone Number *" className={inputStyle} value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className={labelStyle}>Email / इमेल</label>
                                            <input placeholder="Email Address *" className={inputStyle} value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <label className={labelStyle}>Current City / शहर</label>
                                            <input placeholder="Current City *" className={inputStyle} value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} />
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Interests */}
                                <div className="space-y-6">
                                    <h3 className="font-serif italic text-2xl">02. Area of Interest</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {ROLES.map(role => (
                                            <button
                                                key={role.id}
                                                type="button"
                                                onClick={() => toggleRole(role.en)}
                                                className={`px-6 py-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${selectedRoles.includes(role.en)
                                                    ? 'bg-[#2D5A43] border-[#2D5A43] text-white shadow-lg shadow-[#2D5A43]/20'
                                                    : 'bg-white border-[#13231F]/5 text-[#13231F]/60 hover:border-[#2D5A43]/20'
                                                    }`}
                                            >
                                                <div className="text-left space-y-1">
                                                    <p className="text-sm font-bold leading-tight">{role.en}</p>
                                                    <p className={`text-sm leading-tight font-medium ${selectedRoles.includes(role.en) ? 'text-white/80' : 'text-[#13231F]/40'}`}>
                                                        {role.ne}
                                                    </p>
                                                </div>
                                                {selectedRoles.includes(role.en) && (
                                                    <div className="bg-white/20 p-1 rounded-full">
                                                        <Check size={14} strokeWidth={3} />
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>

                                    <AnimatePresence>
                                        {selectedRoles.includes('Others') && (
                                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="pt-2">
                                                <label className={labelStyle}>Please specify</label>
                                                <input placeholder="How would you like to help?" className={inputStyle} value={formData.otherRole} onChange={e => setFormData({ ...formData, otherRole: e.target.value })} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Section: Availability & Message */}
                                <div className="space-y-6">
                                    <h3 className="font-serif italic text-2xl">03. Commitment</h3>
                                    <div className="space-y-1 mb-4">
                                        <label className={labelStyle}>Availability / उपलब्धता</label>
                                        <div className="flex gap-4">
                                            {['Volunteer', 'Part-time'].map(type => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, availability: type })}
                                                    className={`flex-1 py-4 rounded-2xl border font-bold text-xs uppercase tracking-widest transition-all ${formData.availability === type ? 'bg-[#13231F] text-white border-[#13231F]' : 'bg-white border-[#13231F]/5 text-[#13231F]/40 hover:text-[#13231F]'}`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className={labelStyle}>Additional Information / थप जानकारी</label>
                                        <textarea
                                            placeholder="Tell us a bit about yourself or any specific questions you have..."
                                            className={inputStyle + " h-32 resize-none"}
                                            value={formData.message}
                                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="w-full bg-[#13231F] text-white py-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-[#2D5A43] transition-all flex justify-center items-center gap-4 active:scale-[0.98]"
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin" /> : <>Send Application <ArrowRight size={18} /></>}
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl mx-auto text-center py-20">
                            <CheckCircle2 size={80} className="mx-auto text-[#2D5A43] mb-8 stroke-[1px]" />
                            <h2 className="text-5xl font-serif italic mb-4">Application Sent.</h2>
                            <p className="text-lg opacity-60 mb-10">We've received your request and will be in touch shortly.</p>
                            <button onClick={() => window.location.href = '/'} className="font-sans font-bold uppercase text-[10px] tracking-widest border-b-2 border-[#13231F] pb-1">Return Home</button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
};

export default VolunteerPage;