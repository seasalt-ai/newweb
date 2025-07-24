import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// SeaChat components
import Header from '../seachat/components/Header';
import Footer from '../seachat/components/Footer';

// Home page components
import Hero from '../seachat/components/Hero';
import KeyFeatures from '../seachat/components/KeyFeatures';
import OmnichannelDemo from '../seachat/components/OmnichannelDemo';
import FeatureTabs from '../seachat/components/FeatureTabs';
import FeatureComparison from '../seachat/components/FeatureComparison';
import KnowledgeBase from '../seachat/components/KnowledgeBase';
import UseCases from '../seachat/components/UseCases';
import Testimonials from '../seachat/components/Testimonials';

// Feature pages
import HumanAgentsPage from '../seachat/pages/features/HumanAgentsPage';
import AIAutomationPage from '../seachat/pages/features/AIAutomationPage';
import AdvancedAIPage from '../seachat/pages/features/AdvancedAIPage';
import KnowledgeBasePage from '../seachat/pages/features/KnowledgeBasePage';
import VoiceAgentsPage from '../seachat/pages/features/VoiceAgentsPage';
import AnalyticsPage from '../seachat/pages/features/AnalyticsPage';
import OmnichannelPage from '../seachat/pages/features/OmnichannelPage';
import APIPage from '../seachat/pages/features/APIPage';

// Integration pages
import WebsitesPage from '../seachat/pages/integrations/WebsitesPage';
import CRMPage from '../seachat/pages/integrations/CRMPage';
import EcommercePage from '../seachat/pages/integrations/EcommercePage';
import SocialMediaPage from '../seachat/pages/integrations/SocialMediaPage';
import CommunicationPage from '../seachat/pages/integrations/CommunicationPage';
import MarketingPage from '../seachat/pages/integrations/MarketingPage';
import CalendarPage from '../seachat/pages/integrations/CalendarPage';
import IntegrationAPIPage from '../seachat/pages/integrations/IntegrationAPIPage';

// Solution pages
import EcommerceSolutionPage from '../seachat/pages/solutions/EcommerceSolutionPage';
import HealthcarePage from '../seachat/pages/solutions/HealthcarePage';
import FintechPage from '../seachat/pages/solutions/FintechPage';
import EducationPage from '../seachat/pages/solutions/EducationPage';
import RealEstatePage from '../seachat/pages/solutions/RealEstatePage';
import TravelPage from '../seachat/pages/solutions/TravelPage';
import SaaSPage from '../seachat/pages/solutions/SaaSPage';
import SmallBusinessPage from '../seachat/pages/solutions/SmallBusinessPage';

// Other pages
import PricingPage from '../seachat/pages/PricingPage';

function SeaChatHomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <KeyFeatures />
      <OmnichannelDemo />
      <FeatureTabs />
      <KnowledgeBase />
      <FeatureComparison />
      <UseCases />
      <Testimonials />
    </div>
  );
}

const SeaChatRouter = () => {
  const { i18n } = useTranslation();

  // Set document direction based on language
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        {/* Home */}
        <Route path="" element={<SeaChatHomePage />} />
        
        {/* Features */}
        <Route path="features/human-agents" element={<HumanAgentsPage />} />
        <Route path="features/ai-automation" element={<AIAutomationPage />} />
        <Route path="features/advanced-ai" element={<AdvancedAIPage />} />
        <Route path="features/knowledge-base" element={<KnowledgeBasePage />} />
        <Route path="features/voice-agents" element={<VoiceAgentsPage />} />
        <Route path="features/analytics" element={<AnalyticsPage />} />
        <Route path="features/omnichannel" element={<OmnichannelPage />} />
        <Route path="features/api" element={<APIPage />} />
        
        {/* Integrations */}
        <Route path="integrations/websites" element={<WebsitesPage />} />
        <Route path="integrations/crm" element={<CRMPage />} />
        <Route path="integrations/ecommerce" element={<EcommercePage />} />
        <Route path="integrations/social-media" element={<SocialMediaPage />} />
        <Route path="integrations/communication" element={<CommunicationPage />} />
        <Route path="integrations/marketing" element={<MarketingPage />} />
        <Route path="integrations/calendar" element={<CalendarPage />} />
        <Route path="integrations/api" element={<IntegrationAPIPage />} />
        
        {/* Solutions */}
        <Route path="solutions/ecommerce" element={<EcommerceSolutionPage />} />
        <Route path="solutions/healthcare" element={<HealthcarePage />} />
        <Route path="solutions/fintech" element={<FintechPage />} />
        <Route path="solutions/education" element={<EducationPage />} />
        <Route path="solutions/real-estate" element={<RealEstatePage />} />
        <Route path="solutions/travel" element={<TravelPage />} />
        <Route path="solutions/saas" element={<SaaSPage />} />
        <Route path="solutions/small-business" element={<SmallBusinessPage />} />
        
        {/* Other Pages */}
        <Route path="pricing" element={<PricingPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default SeaChatRouter;
