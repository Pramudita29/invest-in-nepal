import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar/Navbar';

// Pages
import AboutPage from './pages/AboutPage';
import AgendaPage from './pages/Agenda';
import ArticlePage from './pages/ArticlePage';
import BusinessConsultingPage from './pages/BusinessConsultingPage';
import ConsultationPage from './pages/ConsultationPage'; // <--- Added this import
import ContactUsPage from './pages/ContactUsPage';
import Home from './pages/Home';
import InitiativesPage from './pages/Initiatives';
import LegalSupportPage from './pages/LegalSupportPage';
import LegalTemplate from './pages/LegalTemplate';
import PolicyPage from './pages/PolicyPage';
import ProposalPage from './pages/Proposal';
import ReasonDetail from './pages/ReasonDetailPage';
import SectorDetail from './pages/SectorDetails';
import StartupHubPage from './pages/StartupHubPage';
import StartupSupportPage from './pages/StartupSupportPage';
import StoriesPage from './pages/StoriesPage';
import StrategicInsightsPage from './pages/StrategicInsightsPage';
import VolunteerPage from './pages/VolunteerPage'; // <--- Added this import

// 1. Root Layout Wrapper
const RootLayout = () => (
    <div className="relative min-h-screen flex flex-col bg-[#FAF9F6] selection:bg-[#2D5A43] selection:text-white">
        <ScrollRestoration />
        <Navbar />
        <main className="flex-grow">
            <Outlet />
        </main>

        {/* Editorial Footer */}
        <footer className="w-full py-24 px-8 lg:px-24 border-t border-[#1A1A1A]/5 bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-8 space-y-6">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-[#2D5A43]">
                            Legal Disclaimer
                        </span>
                        <p className="text-[11px] font-sans leading-relaxed text-[#1A1A1A]/40 max-w-2xl uppercase tracking-widest">
                            The information provided on this website does not, and is not intended to, constitute legal advice;
                            instead, all information, content, and materials available on this site are for general
                            informational purposes only. Information on this website may not constitute the most
                            up-to-date legal or other information.
                        </p>
                    </div>

                    <div className="lg:col-span-4 lg:text-right flex flex-col justify-between h-full border-l lg:border-l-0 lg:border-r border-[#1A1A1A]/5 lg:pr-12">
                        <div className="space-y-2">
                            <span className="block text-2xl font-serif font-medium tracking-tighter uppercase text-[#1A1A1A]">Stratbridge</span>
                            <span className="block text-[9px] font-sans font-bold uppercase tracking-[0.4em] text-[#2D5A43]">Partners</span>
                        </div>
                        <div className="mt-12 lg:mt-20 text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/30">
                            © 2026 / Kathmandu, Nepal
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
);

// 2. Browser Router Configuration
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: (
            <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6] font-serif p-8">
                <div className="text-center space-y-8">
                    <h1 className="text-[15rem] font-light leading-none text-[#1A1A1A]/5">404</h1>
                    <div className="space-y-2">
                        <p className="text-[10px] uppercase tracking-[0.6em] font-sans font-bold text-[#2D5A43]">Resource Not Found</p>
                        <p className="text-sm italic opacity-40">The page you are looking for has been moved or archived.</p>
                    </div>
                    <a href="/" className="inline-block border-b border-[#1A1A1A] pb-2 text-[10px] font-bold uppercase tracking-widest hover:text-[#2D5A43] hover:border-[#2D5A43] transition-colors">
                        Return to Hub
                    </a>
                </div>
            </div>
        ),
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <AboutPage /> },
            { path: "services/business-consulting", element: <BusinessConsultingPage /> },
            { path: "services/legal-service", element: <LegalSupportPage /> },
            { path: "services/policy", element: <PolicyPage /> },
            { path: "services/startup-support", element: <StartupSupportPage /> },
            { path: "legal/:areaId", element: <LegalTemplate /> },
            { path: "services/strategic-insights", element: <StrategicInsightsPage /> },
            { path: "article/:slug", element: <ArticlePage /> },
            { path: "stories", element: <StoriesPage /> },
            { path: "hub", element: <StartupHubPage /> },
            { path: "hub/:cardId", element: <StartupHubPage /> },
            { path: "contact", element: <ContactUsPage /> },
            { path: "contact-us", element: <ContactUsPage /> },
            { path: "sector/:id", element: <SectorDetail /> },
            { path: "reason/:slug", element: <ReasonDetail /> },
            { path: "initiatives", element: <InitiativesPage /> },
            { path: "cohort", element: <ProposalPage /> },
            { path: "agenda", element: <AgendaPage /> },
            { path: "volunteer", element: <VolunteerPage /> },
            { path: "consultation", element: <ConsultationPage /> },
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;