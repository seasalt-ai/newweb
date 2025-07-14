import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

// Import SeaX pages
import SeaXHome from '../pages/SeaXHome';
import Features from '../pages/Features';
import Pricing from '../pages/Pricing';
import ContactSales from '../pages/ContactSales';
import About from '../pages/About';
import Resources from '../pages/Resources';

// Channel pages
import ChannelsOverview from '../pages/channels/ChannelsOverview';
import SMS from '../pages/channels/SMS';
import SMSLocal from '../pages/channels/SMSLocal';
import SMSTollFree from '../pages/channels/SMSTollFree';
import SMSShortCode from '../pages/channels/SMSShortCode';
import WhatsApp from '../pages/channels/WhatsApp';
import Voice from '../pages/channels/Voice';

// Solution pages
import SolutionsOverview from '../pages/solutions/SolutionsOverview';
import LeadGeneration from '../pages/solutions/LeadGeneration';
import MarketingAutomation from '../pages/solutions/MarketingAutomation';
import CustomerEngagement from '../pages/solutions/CustomerEngagement';
import AppointmentReminders from '../pages/solutions/AppointmentReminders';
import EmergencyAlerts from '../pages/solutions/EmergencyAlerts';

// Industry pages
import IndustriesOverview from '../pages/industries/IndustriesOverview';
import EcommerceRetail from '../pages/industries/EcommerceRetail';
import RealEstate from '../pages/industries/RealEstate';
import PoliticalCampaigns from '../pages/industries/PoliticalCampaigns';
import Healthcare from '../pages/industries/Healthcare';
import FinancialServices from '../pages/industries/FinancialServices';

const SeaXRouter = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  // Update i18n language when route changes
  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <Routes>
      {/* Home page */}
      <Route index element={<SeaXHome />} />
      
      {/* Core pages */}
      <Route path="features" element={<Features />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="contact-sales" element={<ContactSales />} />
      <Route path="about" element={<About />} />
      <Route path="resources" element={<Resources />} />
      
      {/* Channel routes */}
      <Route path="channels" element={<ChannelsOverview />} />
      <Route path="channels/sms" element={<SMS />} />
      <Route path="channels/sms-local" element={<SMSLocal />} />
      <Route path="channels/sms-toll-free" element={<SMSTollFree />} />
      <Route path="channels/sms-short-code" element={<SMSShortCode />} />
      <Route path="channels/whatsapp" element={<WhatsApp />} />
      <Route path="channels/voice" element={<Voice />} />
      
      {/* Solution routes */}
      <Route path="solutions" element={<SolutionsOverview />} />
      <Route path="solutions/lead-generation" element={<LeadGeneration />} />
      <Route path="solutions/marketing-automation" element={<MarketingAutomation />} />
      <Route path="solutions/customer-engagement" element={<CustomerEngagement />} />
      <Route path="solutions/appointment-reminders" element={<AppointmentReminders />} />
      <Route path="solutions/emergency-alerts" element={<EmergencyAlerts />} />
      
      {/* Industry routes */}
      <Route path="industries" element={<IndustriesOverview />} />
      <Route path="industries/ecommerce-retail" element={<EcommerceRetail />} />
      <Route path="industries/real-estate" element={<RealEstate />} />
      <Route path="industries/political-campaigns" element={<PoliticalCampaigns />} />
      <Route path="industries/healthcare" element={<Healthcare />} />
      <Route path="industries/financial-services" element={<FinancialServices />} />
    </Routes>
  );
};

export default SeaXRouter;
