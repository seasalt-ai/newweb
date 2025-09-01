import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  PhoneIncoming, 
  PhoneOutgoing, 
  Monitor,
  Phone,
  Wifi,
  MessageSquare,
  Mic,
  MicOff,
  Brain,
  Bot,
  ArrowRightLeft,
  Zap,
  Heart,
  Shield,
  Headphones,
  Package,
  CreditCard,
  Calendar,
  Target,
  DollarSign,
  UserCheck,
  Clock,
  Megaphone,
  Headset,
  RefreshCw,
  FileText,
  AlertTriangle,
  PhoneCall,
  Volume2,
  VolumeX,
  AudioLines,
  MessageCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LANGUAGE_DETAILS } from '../../constants/languages';
import ProductLogoDropdown from '../../components/ProductLogoDropdown';
import LanguageSwitcher from '../../components/LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isInboundSolutionsOpen, setIsInboundSolutionsOpen] = useState(false);
  const [isOutboundSolutionsOpen, setIsOutboundSolutionsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isLogoDropdownOpen, setIsLogoDropdownOpen] = useState(false);
  
  // Mobile collapsible states
  const [mobilePlatformCollapsed, setMobilePlatformCollapsed] = useState(true);
  const [mobileInboundCollapsed, setMobileInboundCollapsed] = useState(true);
  const [mobileOutboundCollapsed, setMobileOutboundCollapsed] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const inboundSolutions = [
    { name: t('seavoice.header.navigation.inboundSolutions.virtualAssistant'), href: `/${i18n.language}/seavoice/solutions/inbound/virtual-assistant`, icon: Bot },
    { name: t('seavoice.header.navigation.inboundSolutions.callTransfer'), href: `/${i18n.language}/seavoice/solutions/inbound/call-transfer`, icon: ArrowRightLeft },
    { name: t('seavoice.header.navigation.inboundSolutions.ivrReplacement'), href: `/${i18n.language}/seavoice/solutions/inbound/ivr-replacement`, icon: Zap },
    { name: t('seavoice.header.navigation.inboundSolutions.mentalHealth'), href: `/${i18n.language}/seavoice/solutions/inbound/mental-health`, icon: Heart },
    { name: t('seavoice.header.navigation.inboundSolutions.scamShield'), href: `/${i18n.language}/seavoice/solutions/inbound/scam-shield`, icon: Shield },
    { name: t('seavoice.header.navigation.inboundSolutions.technicalSupport'), href: `/${i18n.language}/seavoice/solutions/inbound/technical-support`, icon: Headphones },
    { name: t('seavoice.header.navigation.inboundSolutions.orderTracking'), href: `/${i18n.language}/seavoice/solutions/inbound/order-tracking`, icon: Package },
    { name: t('seavoice.header.navigation.inboundSolutions.paymentProcessing'), href: `/${i18n.language}/seavoice/solutions/inbound/payment-processing`, icon: CreditCard },
    { name: t('seavoice.header.navigation.inboundSolutions.appointmentBooking'), href: `/${i18n.language}/seavoice/solutions/inbound/appointment-booking`, icon: Calendar },
  ];

  const outboundSolutions = [
    { name: t('seavoice.header.navigation.outboundSolutions.leadGeneration'), href: `/${i18n.language}/seavoice/solutions/outbound/lead-generation`, icon: Target },
    { name: t('seavoice.header.navigation.outboundSolutions.collections'), href: `/${i18n.language}/seavoice/solutions/outbound/collections`, icon: DollarSign },
    { name: t('seavoice.header.navigation.outboundSolutions.reactivation'), href: `/${i18n.language}/seavoice/solutions/outbound/reactivation`, icon: UserCheck },
    { name: t('seavoice.header.navigation.outboundSolutions.seniorChecks'), href: `/${i18n.language}/seavoice/solutions/outbound/senior-checks`, icon: Clock },
    { name: t('seavoice.header.navigation.outboundSolutions.campaigns'), href: `/${i18n.language}/seavoice/solutions/outbound/campaigns`, icon: Megaphone },
    { name: t('seavoice.header.navigation.outboundSolutions.proactiveSupport'), href: `/${i18n.language}/seavoice/solutions/outbound/proactive-support`, icon: Headset },
    { name: t('seavoice.header.navigation.outboundSolutions.renewals'), href: `/${i18n.language}/seavoice/solutions/outbound/renewals`, icon: RefreshCw },
    { name: t('seavoice.header.navigation.outboundSolutions.surveys'), href: `/${i18n.language}/seavoice/solutions/outbound/surveys`, icon: FileText },
    { name: t('seavoice.header.navigation.outboundSolutions.fraudAlerts'), href: `/${i18n.language}/seavoice/solutions/outbound/fraud-alerts`, icon: AlertTriangle },
  ];


  const navigation = [
    { 
      id: 'platform',
      name: t('seavoice.header.navigation.platform.title'), 
      href: `/${i18n.language}/seavoice/platform`,
      hasDropdown: true,
      dropdownItems: [
        { name: t('seavoice.header.navigation.platform.overview'), href: `/${i18n.language}/seavoice/platform`, icon: Monitor },
        { name: t('seavoice.header.navigation.platform.landlineMobile'), href: `/${i18n.language}/seavoice/platform/landline-mobile`, icon: Phone },
        { name: t('seavoice.header.navigation.platform.voipSipByoc'), href: `/${i18n.language}/seavoice/platform/voip-sip-byoc`, icon: Wifi },
        { name: t('seavoice.header.navigation.platform.lineCallPlus'), href: `/${i18n.language}/seavoice/platform/line-call-plus`, icon: PhoneCall },
        { name: t('seavoice.header.navigation.platform.whatsAppVoice'), href: `/${i18n.language}/seavoice/platform/whatsapp-voice`, icon: MessageCircle },
        { name: t('seavoice.header.navigation.platform.speechToText'), href: `/${i18n.language}/seavoice/platform/speech-to-text`, icon: AudioLines },
        { name: t('seavoice.header.navigation.platform.textToSpeech'), href: `/${i18n.language}/seavoice/platform/text-to-speech`, icon: Volume2 },
        { name: t('seavoice.header.navigation.platform.endToEndLlms'), href: `/${i18n.language}/seavoice/platform/end-to-end-llms`, icon: Brain },
      ]
    },
    { 
      id: 'inboundSolutions',
      name: t('seavoice.header.navigation.inboundSolutions.title'), 
      href: `/${i18n.language}/seavoice/solutions`,
      hasDropdown: true,
      dropdownItems: inboundSolutions
    },
    { 
      id: 'outboundSolutions',
      name: t('seavoice.header.navigation.outboundSolutions.title'), 
      href: `/${i18n.language}/seavoice/solutions`,
      hasDropdown: true,
      dropdownItems: outboundSolutions
    },
    { id: 'pricing', name: t('seavoice.header.navigation.pricing'), href: `/${i18n.language}/seavoice/pricing` },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with dropdown */}
          <div className="flex-shrink-0">
            <div className="relative flex items-center">
              {/* Logo - navigates to SeaVoice home */}
              <Link
                to={`/${i18n.language}/seavoice`}
                className="hover:opacity-80 transition-opacity flex items-center"
              >
                <img 
                  src="/seavoice-logo.png" 
                  alt="SeaVoice Logo" 
                  className="h-6 sm:h-8 w-auto" 
                />
              </Link>
              
              {/* Dropdown arrow - opens product dropdown */}
              <button 
                onClick={() => setIsLogoDropdownOpen(!isLogoDropdownOpen)}
                onMouseEnter={() => setIsLogoDropdownOpen(true)}
                className="ml-1 p-1 text-gray-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <ProductLogoDropdown
                isOpen={isLogoDropdownOpen}
                onClose={() => setIsLogoDropdownOpen(false)}
                currentLanguage={i18n.language}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  if (item.id === 'platform') setIsPlatformOpen(true);
                  if (item.id === 'inboundSolutions') setIsInboundSolutionsOpen(true);
                  if (item.id === 'outboundSolutions') setIsOutboundSolutionsOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.id === 'platform') setIsPlatformOpen(false);
                  if (item.id === 'inboundSolutions') setIsInboundSolutionsOpen(false);
                  if (item.id === 'outboundSolutions') setIsOutboundSolutionsOpen(false);
                }}
              >
                <Link
                  to={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 ml-1" />
                  )}
                </Link>
                
                {/* Platform Dropdown */}
                {item.id === 'platform' && item.hasDropdown && isPlatformOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 pt-1 w-80 z-50"
                    onMouseEnter={() => setIsPlatformOpen(true)}
                    onMouseLeave={() => setIsPlatformOpen(false)}
                  >
                    <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="flex items-center block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          <dropdownItem.icon className="w-4 h-4 mr-2" />
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Inbound Solutions Dropdown */}
                {item.id === 'inboundSolutions' && item.hasDropdown && isInboundSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 pt-1 w-80 z-50"
                    onMouseEnter={() => setIsInboundSolutionsOpen(true)}
                    onMouseLeave={() => setIsInboundSolutionsOpen(false)}
                  >
                    <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                      <div className="flex items-center mb-3 pb-2 border-b border-gray-100 px-4">
                        <PhoneIncoming className="w-4 h-4 text-blue-600 mr-2" />
                        <h3 className="text-sm font-semibold text-gray-900">{t('seavoice.header.navigation.inboundSolutions.title')}</h3>
                      </div>
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="flex items-center block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          <dropdownItem.icon className="w-4 h-4 mr-2 text-blue-600" />
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Outbound Solutions Dropdown */}
                {item.id === 'outboundSolutions' && item.hasDropdown && isOutboundSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 pt-1 w-80 z-50"
                    onMouseEnter={() => setIsOutboundSolutionsOpen(true)}
                    onMouseLeave={() => setIsOutboundSolutionsOpen(false)}
                  >
                    <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                      <div className="flex items-center mb-3 pb-2 border-b border-gray-100 px-4">
                        <PhoneOutgoing className="w-4 h-4 text-teal-600 mr-2" />
                        <h3 className="text-sm font-semibold text-gray-900">{t('seavoice.header.navigation.outboundSolutions.title')}</h3>
                      </div>
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="flex items-center block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                        >
                          <dropdownItem.icon className="w-4 h-4 mr-2 text-teal-600" />
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

        {/* Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher className="" />
        
            <a
              href="https://chat.seasalt.ai/gpt/signin"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {t('seavoice.header.auth.signIn')}
            </a>
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105"
            >
              {t('seavoice.header.auth.getStarted')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-gray-100 max-h-[70vh] overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-3">
              {/* Action Buttons at Top */}
              <div className="space-y-3">
                <a
                  href="https://chat.seasalt.ai/gpt/signin"
                  className="block w-full text-center text-gray-700 hover:text-blue-600 font-medium py-2 border border-gray-300 rounded-lg transition-colors"
                >
                  {t('seavoice.header.auth.signIn')}
                </a>
                <a
                  href="https://chat.seasalt.ai/gpt/signup"
                  className="w-full block text-center bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  {t('seavoice.header.auth.getStarted')}
                </a>
              </div>

              {/* Back to Main Site */}
              <div className="pt-4 pb-4 border-t border-gray-100">
                <Link 
                  to="/" 
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img src="/seasalt-ai-logo.png" alt="Seasalt.ai" className="h-6 w-auto mr-2" />
                  {t('seavoice.header.backToMainSite')}
                </Link>
              </div>

            {navigation.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.name} className="space-y-1">
                    {/* Collapsible header for mobile */}
                    <button
                      onClick={() => {
                        if (item.id === 'platform') setMobilePlatformCollapsed(!mobilePlatformCollapsed);
                        if (item.id === 'inboundSolutions') setMobileInboundCollapsed(!mobileInboundCollapsed);
                        if (item.id === 'outboundSolutions') setMobileOutboundCollapsed(!mobileOutboundCollapsed);
                      }}
                      className="w-full flex items-center justify-between px-3 py-2 text-base font-semibold text-gray-900 hover:text-blue-600"
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          (item.id === 'platform' && !mobilePlatformCollapsed) ||
                          (item.id === 'inboundSolutions' && !mobileInboundCollapsed) ||
                          (item.id === 'outboundSolutions' && !mobileOutboundCollapsed)
                            ? 'transform rotate-180' 
                            : ''
                        }`}
                      />
                    </button>
                    
                    {/* Collapsible content */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: 
                          (item.id === 'platform' && !mobilePlatformCollapsed) ||
                          (item.id === 'inboundSolutions' && !mobileInboundCollapsed) ||
                          (item.id === 'outboundSolutions' && !mobileOutboundCollapsed)
                            ? 'auto' 
                            : 0,
                        opacity: 
                          (item.id === 'platform' && !mobilePlatformCollapsed) ||
                          (item.id === 'inboundSolutions' && !mobileInboundCollapsed) ||
                          (item.id === 'outboundSolutions' && !mobileOutboundCollapsed)
                            ? 1 
                            : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 space-y-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <dropdownItem.icon className="w-4 h-4 mr-2" />
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                );
              } else {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              }
            })}
            
            {/* Mobile Language Selector */}
            <div className="px-3 py-2 border-t border-gray-200 mt-4 pt-4">
              <LanguageSwitcher className="w-full" />
            </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;