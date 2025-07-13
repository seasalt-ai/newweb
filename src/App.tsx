import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Industries from './components/Industries';
import Channels from './components/Channels';
import Comparison from './components/Comparison';
import Footer from './components/Footer';
import PricingPage from './pages/Pricing';
import ChannelsOverview from './pages/ChannelsOverview';
import CompareUsOverview from './pages/CompareUsOverview';
import WhatsApp from './pages/channels/WhatsApp';
import PhoneCalls from './pages/channels/PhoneCalls';
import SMS from './pages/channels/SMS';
import WebsiteChat from './pages/channels/WebsiteChat';
import Instagram from './pages/channels/Instagram';
import FacebookMessenger from './pages/channels/FacebookMessenger';
import ContactForms from './pages/channels/ContactForms';
import Line from './pages/channels/Line';
import WebsiteWidget from './pages/channels/WebsiteWidget';
import AircallAlternative from './pages/compare/AircallAlternative';
import RingCentralAlternative from './pages/compare/RingCentralAlternative';
import GenesysAlternative from './pages/compare/GenesysAlternative';
import Five9Alternative from './pages/compare/Five9Alternative';
import AvayaAlternative from './pages/compare/AvayaAlternative';
import GoogleVoiceAlternative from './pages/compare/GoogleVoiceAlternative';
import RespondIoAlternative from './pages/compare/RespondIoAlternative';
import IntercomAlternative from './pages/compare/IntercomAlternative';
import KustomerAlternative from './pages/compare/KustomerAlternative';
import ThreeCXAlternative from './pages/compare/ThreeCXAlternative';
import DialpadAlternative from './pages/compare/DialpadAlternative';
import EightXEightAlternative from './pages/compare/EightXEightAlternative';
import OpenPhoneAlternative from './pages/compare/OpenPhoneAlternative';
import Ecommerce from './pages/industries/Ecommerce';
import Healthcare from './pages/industries/Healthcare';
import RealEstate from './pages/industries/RealEstate';
import RestaurantsHospitality from './pages/industries/RestaurantsHospitality';
import EducationTraining from './pages/industries/EducationTraining';
import AutomotiveServices from './pages/industries/AutomotiveServices';
import ProfessionalServices from './pages/industries/ProfessionalServices';
import FinancialServices from './pages/industries/FinancialServices';
import SmeOwners from './pages/solutions/SmeOwners';
import SalesMarketing from './pages/solutions/SalesMarketing';
import CustomerSupport from './pages/solutions/CustomerSupport';
import AIAutomation from './pages/solutions/AIAutomation';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import LanguageRouter from './components/LanguageRouter';
import MarkdownPage from './components/MarkdownPage';
import SeaHealth from './pages/SeaHealth';
import SeaChatRouter from './components/SeaChatRouter';

import SEOHelmet from './components/SEOHelmet';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './constants/languages';

// Component to handle SeaChat redirects
const SeaChatRedirect = () => {
  const location = useLocation();
  const subPath = location.pathname.replace('/seachat', '');
  return <Navigate to={`/${DEFAULT_LANGUAGE}/seachat${subPath}`} replace />;
};

function HomePage() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // Generate canonical URL for SEO
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${currentLanguage}` 
    : `/${currentLanguage}`;
  
  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="Seasalt.ai - Omni-Channel Contact Center for Small Businesses"
        description="Stop juggling apps. Unify every customer call, WhatsApp, and chat in one simple inbox. The all-in-one contact center built for small businesses."
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={canonicalUrl}
      />
      <Header />
      <Hero />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <UseCases />
      <Industries />
      <Channels />
      <Comparison />
      <Footer />
    </div>
  );
}

function App() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Set basename for GitHub Pages if needed (e.g., '/new-seasalt-ai-website')
  // If deploying to root, set to '/'. Adjust as needed for your deployment.
  const basename = import.meta.env.BASE_URL || '/';

  return (
    <Router basename={basename}>
      <Routes>
        {/* Root path redirects to current language */}
        <Route path="/" element={<Navigate to={`/${currentLanguage}`} replace />} />
        {/* /health redirects to /seahealth */}
        <Route path="/health" element={<Navigate to="/seahealth" replace />} />
        <Route path="/seahealth" element={<Navigate to={`/${DEFAULT_LANGUAGE}/seahealth`} replace />} />
        {/* SeaChat routes - handle all seachat paths first */}
        <Route path="/seachat" element={<Navigate to={`/${DEFAULT_LANGUAGE}/seachat`} replace />} />
        <Route path="/seachat/*" element={<SeaChatRedirect />} />
        {/* Dynamic SeaChat routes for all supported languages */}
        {SUPPORTED_LANGUAGES.map(lang => (
          <Route key={lang} path={`/${lang}/seachat/*`} element={<SeaChatRouter />} />
        ))}
        {/* Language-specific routes */}
        <Route path=":lang" element={<LanguageRouter />}>
          <Route index element={<HomePage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="channels-overview" element={<ChannelsOverview />} />
          <Route path="compare-us-overview" element={<CompareUsOverview />} />
          <Route path="channels/whatsapp" element={<WhatsApp />} />
          <Route path="channels/phone-calls" element={<PhoneCalls />} />
          <Route path="channels/sms" element={<SMS />} />
          <Route path="channels/website-chat" element={<WebsiteChat />} />
          <Route path="channels/instagram" element={<Instagram />} />
          <Route path="channels/facebook-messenger" element={<FacebookMessenger />} />
          <Route path="channels/contact-forms" element={<ContactForms />} />
          <Route path="channels/line" element={<Line />} />
          <Route path="channels/website-widget" element={<WebsiteWidget />} />
          <Route path="compare/aircall-alternative" element={<AircallAlternative />} />
          <Route path="compare/ringcentral-alternative" element={<RingCentralAlternative />} />
          <Route path="compare/genesys-alternative" element={<GenesysAlternative />} />
          <Route path="compare/five9-alternative" element={<Five9Alternative />} />
          <Route path="compare/avaya-alternative" element={<AvayaAlternative />} />
          <Route path="compare/google-voice-alternative" element={<GoogleVoiceAlternative />} />
          <Route path="compare/respond-io-alternative" element={<RespondIoAlternative />} />
          <Route path="compare/intercom-alternative" element={<IntercomAlternative />} />
          <Route path="compare/kustomer-alternative" element={<KustomerAlternative />} />
          <Route path="compare/threecx-alternative" element={<ThreeCXAlternative />} />
          <Route path="compare/dialpad-alternative" element={<DialpadAlternative />} />
          <Route path="compare/eightxeight-alternative" element={<EightXEightAlternative />} />
          <Route path="compare/openphone-alternative" element={<OpenPhoneAlternative />} />
          <Route path="industries/e-commerce" element={<Ecommerce />} />
          <Route path="industries/healthcare" element={<Healthcare />} />
          <Route path="industries/real-estate" element={<RealEstate />} />
          <Route path="industries/restaurants-hospitality" element={<RestaurantsHospitality />} />
          <Route path="industries/education-training" element={<EducationTraining />} />
          <Route path="industries/automotive-services" element={<AutomotiveServices />} />
          <Route path="industries/professional-services" element={<ProfessionalServices />} />
          <Route path="industries/financial-services" element={<FinancialServices />} />
          <Route path="solutions/sme-owners" element={<SmeOwners />} />
          <Route path="solutions/sales-marketing" element={<SalesMarketing />} />
          <Route path="solutions/customer-support" element={<CustomerSupport />} />
          <Route path="solutions/ai-automation" element={<AIAutomation />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="seahealth" element={<SeaHealth />} />
        </Route>
      <Route path="privacy" element={<MarkdownPage pageType="privacy" />} />
        <Route path="terms" element={<MarkdownPage pageType="terms" />} />
        {/* Fallback: only /seahealth or /health render SeaHealth, all else redirect to language root */}
        <Route path="*" element={<Navigate to={`/${currentLanguage}`} replace />} />
      </Routes>
    </Router>
  );
}

export default App;