
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import SolutionsPage from './pages/SolutionsPage';
import PricingPage from './pages/PricingPage';
import DevelopersPage from './pages/DevelopersPage';
import ResourcesPage from './pages/ResourcesPage';
import CompanyPage from './pages/CompanyPage';
import LandlineMobilePage from './pages/platform/LandlineMobilePage';
import VoipSipByocPage from './pages/platform/VoipSipByocPage';
import LineCallPlusPage from './pages/platform/LineCallPlusPage';
import WhatsAppVoicePage from './pages/platform/WhatsAppVoicePage';
import SpeechToTextPage from './pages/platform/SpeechToTextPage';
import TextToSpeechPage from './pages/platform/TextToSpeechPage';
import EndToEndLLMsPage from './pages/platform/EndToEndLLMsPage';

// Solution pages
import VirtualAssistantPage from './pages/solutions/inbound/VirtualAssistantPage';
import CallTransferPage from './pages/solutions/inbound/CallTransferPage';
import LeadGenerationPage from './pages/solutions/outbound/LeadGenerationPage';
import CollectionsPage from './pages/solutions/outbound/CollectionsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
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
            <Route path="/solutions/outbound/lead-generation" element={<LeadGenerationPage />} />
            <Route path="/solutions/outbound/collections" element={<CollectionsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/developers" element={<DevelopersPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/company" element={<CompanyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;