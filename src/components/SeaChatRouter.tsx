import { Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHelmet from './SEOHelmet';
import { getSEOData, getCanonicalUrl } from '../utils/seo';
import HtmlLangUpdater from './HtmlLangUpdater';

// SeaChat components
import Header from '../seachat/components/Header';
import Footer from '../seachat/components/Footer';
import PhoneBanner from './PhoneBanner';

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
  const { i18n, t } = useTranslation();
  
  // Generate SEO data for SeaChat homepage
  // Use localized title suffix from translation files
  const titleSuffix = t('seachat.seo.titleSuffix', { 
    defaultValue: ' - AI Chatbot & Customer Service Automation | Seasalt.ai' 
  });
  
  const seoData = getSEOData(t, 'seachat', {
    titleSuffix,
    canonicalUrl: getCanonicalUrl(i18n.language, '/seachat'),
  });
  
  // SeaChat breadcrumbs
  const breadcrumbs = [
    { name: 'Home', url: getCanonicalUrl(i18n.language, '/') },
    { name: 'SeaChat', url: getCanonicalUrl(i18n.language, '/seachat') }
  ];
  
  // SeaChat FAQs
  const faqs = [
    {
      question: "What is SeaChat?",
      answer: "SeaChat is an AI-powered chatbot platform that helps businesses automate customer service across multiple channels including WhatsApp, websites, social media, and more. It uses advanced AI to understand and respond to customer inquiries naturally."
    },
    {
      question: "How does SeaChat integrate with my existing systems?",
      answer: "SeaChat integrates with popular platforms including CRM systems (Salesforce, HubSpot), ecommerce platforms (Shopify, WooCommerce), communication channels (WhatsApp, LINE, Facebook), and calendar systems through APIs and pre-built connectors."
    },
    {
      question: "Can SeaChat handle voice conversations?",
      answer: "Yes, SeaChat includes voice AI capabilities that can handle phone calls, understand speech, and respond naturally using text-to-speech technology. It can automate customer service calls and integrate with existing phone systems."
    },
    {
      question: "What makes SeaChat different from other chatbots?",
      answer: "SeaChat combines advanced AI with omnichannel capabilities, human agent handoff, custom knowledge base integration, real-time analytics, and enterprise-grade security. It's designed specifically for businesses that need scalable, intelligent customer communication."
    }
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        {...seoData}
        productKey="seachat"
        breadcrumbs={breadcrumbs}
        faqs={faqs}
      />
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
  return (
    <div className="min-h-screen bg-white">
      <HtmlLangUpdater />
      <PhoneBanner />
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
        
        {/* Catch-all route for non-matching paths - redirect to SeaChat home */}
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default SeaChatRouter;
