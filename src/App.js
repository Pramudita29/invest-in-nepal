import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CustomCursor from './components/common/CustomCursor';

// Pages
import ContactUsPage from './pages/ContactUsPage';
import Home from './pages/Home';
import LegalSupportPage from './pages/LegalSupportPage';
import LegalTemplate from './pages/LegalTemplate';
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
            <div className="relative min-h-screen">
                {/* CustomCursor is placed outside the Routes to render globally */}
                <CustomCursor />

                <Routes>
                    {/* Home */}
                    <Route path="/" element={<Home />} />

                    {/* Services */}
                    <Route
                        path="/services/business-consulting"
                        element={<BusinessConsultingPage />}
                    />
                    <Route
                        path="/services/legal-service"
                        element={<LegalSupportPage />}
                    />
                    <Route
                        path="/services/policy"
                        element={<PolicyPage />}
                    />
                    <Route
                        path="/services/startup-support"
                        element={<StartupSupportPage />}
                    />

                    {/* Legal Templates/Detail */}
                    <Route path="/legal/:areaId" element={<LegalTemplate />} />

                    {/* Strategic Insights */}
                    <Route
                        path="/services/strategic-insights"
                        element={<StrategicInsightsPage />}
                    />
                    <Route path="/article/:slug" element={<ArticlePage />} />

                    {/* Stories */}
                    <Route path="/stories" element={<StoriesPage />} />

                    {/* Startup Hub (Handles both root and detail views) */}
                    <Route path="/hub" element={<StartupHubPage />} />
                    <Route path="/hub/:cardId" element={<StartupHubPage />} />

                    {/* Contact (Handles two common URLs for the same page) */}
                    <Route path="/contact" element={<ContactUsPage />} />
                    <Route path="/contact-us" element={<ContactUsPage />} />

                    {/* Dynamic Detail Routes */}
                    <Route path="/sector/:id" element={<SectorDetail />} />
                    <Route path="/reason/:slug" element={<ReasonDetail />} />

                    {/* 404 - Good practice to add a catch-all route at the end */}
                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;