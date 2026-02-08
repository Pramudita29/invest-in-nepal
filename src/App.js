import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Pages
import AboutPage from './pages/AboutPage';
import AgendaPage from './pages/Agenda';
import ContactUsPage from './pages/ContactUsPage';
import Home from './pages/Home';
import LegalSupportPage from './pages/LegalSupportPage';
import LegalTemplate from './pages/LegalTemplate';
import ProposalPage from './pages/Proposal';
import ReasonDetail from './pages/ReasonDetailPage';
import SectorDetail from './pages/SectorDetails';
import StartupHubPage from './pages/StartupHubPage';
import StoriesPage from './pages/StoriesPage';

// Services
import BusinessConsultingPage from './pages/BusinessConsultingPage';
import PolicyPage from './pages/PolicyPage';
import StartupSupportPage from './pages/StartupSupportPage';

// Strategic Insights
import ArticlePage from './pages/ArticlePage';
import StrategicInsightsPage from './pages/StrategicInsightsPage';

function App() {
    return (
        <Router>
            {/* We use flex-col and min-h-screen to ensure the footer 
                stays at the bottom even on pages with little content.
            */}
            <div className="relative min-h-screen flex flex-col bg-[#F5F2ED]">

                {/* Main Content Wrap */}
                <div className="flex-grow">
                    <Routes>
                        {/* Home */}
                        <Route path="/" element={<Home />} />

                        {/* About StratB */}
                        <Route path="/about" element={<AboutPage />} />

                        {/* Services */}
                        <Route path="/services/business-consulting" element={<BusinessConsultingPage />} />
                        <Route path="/services/legal-service" element={<LegalSupportPage />} />
                        <Route path="/services/policy" element={<PolicyPage />} />
                        <Route path="/services/startup-support" element={<StartupSupportPage />} />

                        {/* Legal Templates/Detail */}
                        <Route path="/legal/:areaId" element={<LegalTemplate />} />

                        {/* Strategic Insights */}
                        <Route path="/services/strategic-insights" element={<StrategicInsightsPage />} />
                        <Route path="/article/:slug" element={<ArticlePage />} />

                        {/* Stories */}
                        <Route path="/stories" element={<StoriesPage />} />

                        {/* Startup Hub */}
                        <Route path="/hub" element={<StartupHubPage />} />
                        <Route path="/hub/:cardId" element={<StartupHubPage />} />

                        {/* Contact */}
                        <Route path="/contact" element={<ContactUsPage />} />
                        <Route path="/contact-us" element={<ContactUsPage />} />

                        {/* Dynamic Detail Routes */}
                        <Route path="/sector/:id" element={<SectorDetail />} />
                        <Route path="/reason/:slug" element={<ReasonDetail />} />

                        {/* The Agenda Cohort */}
                        <Route path="/agenda" element={<AgendaPage />} />
                        <Route path="/proposal" element={<ProposalPage />} />

                        {/* 404 Catch-all */}
                        <Route path="*" element={
                            <div className="min-h-screen flex items-center justify-center bg-[#F5F2ED] font-serif">
                                <div className="text-center">
                                    <h1 className="text-9xl font-light opacity-10">404</h1>
                                    <p className="text-xs uppercase tracking-[0.5em] -mt-10 font-sans font-bold">Page Not Found</p>
                                    <a href="/" className="mt-10 inline-block border-b border-[#13231F] pb-1 text-xs font-bold uppercase tracking-widest">Return Home</a>
                                </div>
                            </div>
                        } />
                    </Routes>
                </div>

                {/* --- GLOBAL FOOTER WITH DISCLAIMER --- */}
                <footer className="w-full py-16 px-8 lg:px-20 border-t border-[#13231F]/10 bg-[#F5F2ED] mt-auto">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-12 items-start">

                            {/* Disclaimer Text */}
                            <div className="lg:col-span-8 space-y-4">
                                <span className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-[#2D5A43] block">
                                    Legal Disclaimer
                                </span>
                                <p className="text-[11px] md:text-xs font-sans leading-relaxed text-[#13231F] opacity-50 text-justify uppercase tracking-[0.05em]">
                                    The information provided on this website does not, and is not intended to, constitute legal advice;
                                    instead, all information, content, and materials available on this site are for general
                                    informational purposes only. Information on this website may not constitute the most
                                    up-to-date legal or other information.
                                </p>
                            </div>

                            {/* Copyright & Branding */}
                            <div className="lg:col-span-4 lg:text-right flex flex-col justify-between h-full">
                                <div className="space-y-1">
                                    <span className="block text-sm font-serif font-bold uppercase tracking-tighter">Stratbridge</span>
                                    <span className="block text-[9px] font-sans font-black uppercase tracking-[0.3em] opacity-40">Partners</span>
                                </div>
                                <div className="mt-8 lg:mt-0 text-[10px] font-sans font-bold uppercase tracking-[0.2em] opacity-30">
                                    © 2026 / Kathmandu, Nepal
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>
                {/* --- END FOOTER --- */}

            </div>
        </Router>
    );
}

export default App;