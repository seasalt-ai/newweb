import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PhoneBanner from '../../components/PhoneBanner';
import UnifiedHomePage from '../pages/UnifiedHomePage';
import PlatformPage from '../pages/PlatformPage';
import SolutionsPage from '../pages/SolutionsPage';
import PricingPage from '../pages/PricingPage';
import LandlineMobilePage from '../pages/platform/LandlineMobilePage';
import VoipSipByocPage from '../pages/platform/VoipSipByocPage';
import LineCallPlusPage from '../pages/platform/LineCallPlusPage';
import WhatsAppVoicePage from '../pages/platform/WhatsAppVoicePage';
import SpeechToTextPage from '../pages/platform/SpeechToTextPage';
import TextToSpeechPage from '../pages/platform/TextToSpeechPage';
import EndToEndLLMsPage from '../pages/platform/EndToEndLLMsPage';

// Solution pages
import VirtualAssistantPage from '../pages/solutions/inbound/VirtualAssistantPage';
import CallTransferPage from '../pages/solutions/inbound/CallTransferPage';
import IvrReplacementPage from '../pages/solutions/inbound/IvrReplacementPage';
import MentalHealthPage from '../pages/solutions/inbound/MentalHealthPage';
import ScamShieldPage from '../pages/solutions/inbound/ScamShieldPage';
import TechnicalSupportPage from '../pages/solutions/inbound/TechnicalSupportPage';
import OrderTrackingPage from '../pages/solutions/inbound/OrderTrackingPage';
import PaymentProcessingPage from '../pages/solutions/inbound/PaymentProcessingPage';
import AppointmentBookingPage from '../pages/solutions/inbound/AppointmentBookingPage';
import LeadGenerationPage from '../pages/solutions/outbound/LeadGenerationPage';
import CollectionsPage from '../pages/solutions/outbound/CollectionsPage';
import CustomerReactivationPage from '../pages/solutions/outbound/CustomerReactivationPage';
import SeniorCheckCallsPage from '../pages/solutions/outbound/SeniorCheckCallsPage';
import LargeScaleCampaignsPage from '../pages/solutions/outbound/LargeScaleCampaignsPage';
import ProactiveSupportPage from '../pages/solutions/outbound/ProactiveSupportPage';
import SubscriptionRenewalsPage from '../pages/solutions/outbound/SubscriptionRenewalsPage';
import CustomerSurveysPage from '../pages/solutions/outbound/CustomerSurveysPage';
import FraudAlertsPage from '../pages/solutions/outbound/FraudAlertsPage';

const SeaVoiceRouter = () => {

  return (
    <div className="min-h-screen bg-white">
      <PhoneBanner />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<UnifiedHomePage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/platform/landline-mobile" element={<LandlineMobilePage />} />
          <Route path="/platform/voip-sip-byoc" element={<VoipSipByocPage />} />
          <Route path="/platform/line-call-plus" element={<LineCallPlusPage />} />
          <Route path="/platform/whatsapp-voice" element={<WhatsAppVoicePage />} />
          <Route path="/platform/speech-to-text" element={<SpeechToTextPage />} />
          <Route path="/platform/text-to-speech" element={<TextToSpeechPage />} />
          <Route path="/platform/end-to-end-llms" element={<EndToEndLLMsPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/inbound/virtual-assistant" element={<VirtualAssistantPage />} />
          <Route path="/solutions/inbound/call-transfer" element={<CallTransferPage />} />
          <Route path="/solutions/inbound/ivr-replacement" element={<IvrReplacementPage />} />
          <Route path="/solutions/inbound/mental-health" element={<MentalHealthPage />} />
          <Route path="/solutions/inbound/scam-shield" element={<ScamShieldPage />} />
          <Route path="/solutions/inbound/technical-support" element={<TechnicalSupportPage />} />
          <Route path="/solutions/inbound/order-tracking" element={<OrderTrackingPage />} />
          <Route path="/solutions/inbound/payment-processing" element={<PaymentProcessingPage />} />
          <Route path="/solutions/inbound/appointment-booking" element={<AppointmentBookingPage />} />
          <Route path="/solutions/outbound/lead-generation" element={<LeadGenerationPage />} />
          <Route path="/solutions/outbound/collections" element={<CollectionsPage />} />
          <Route path="/solutions/outbound/reactivation" element={<CustomerReactivationPage />} />
          <Route path="/solutions/outbound/senior-checks" element={<SeniorCheckCallsPage />} />
          <Route path="/solutions/outbound/campaigns" element={<LargeScaleCampaignsPage />} />
          <Route path="/solutions/outbound/proactive-support" element={<ProactiveSupportPage />} />
          <Route path="/solutions/outbound/renewals" element={<SubscriptionRenewalsPage />} />
          <Route path="/solutions/outbound/surveys" element={<CustomerSurveysPage />} />
          <Route path="/solutions/outbound/fraud-alerts" element={<FraudAlertsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/company/*" element={<Navigate to="/company" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default SeaVoiceRouter;
