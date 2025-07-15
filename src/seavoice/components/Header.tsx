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
  AlertTriangle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LANGUAGE_DETAILS } from '../../constants/languages';
import ProductLogoDropdown from '../../components/ProductLogoDropdown';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isLogoDropdownOpen, setIsLogoDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const inboundSolutions = [
    { name: '24/7 Virtual Assistant', href: '/seavoice/solutions/inbound/virtual-assistant', icon: Bot },
    { name: 'Smart Call Transfer', href: '/seavoice/solutions/inbound/call-transfer', icon: ArrowRightLeft },
    { name: 'IVR Replacement', href: '/seavoice/solutions/inbound/ivr-replacement', icon: Zap },
    { name: 'Mental Health Companion', href: '/seavoice/solutions/inbound/mental-health', icon: Heart },
    { name: 'Scam Shield Protection', href: '/seavoice/solutions/inbound/scam-shield', icon: Shield },
    { name: 'Technical Support', href: '/seavoice/solutions/inbound/technical-support', icon: Headphones },
    { name: 'Order Status & Tracking', href: '/seavoice/solutions/inbound/order-tracking', icon: Package },
    { name: 'Payment Processing', href: '/seavoice/solutions/inbound/payment-processing', icon: CreditCard },
    { name: 'Appointment Booking', href: '/seavoice/solutions/inbound/appointment-booking', icon: Calendar },
  ];

  const outboundSolutions = [
    { name: 'Lead Generation & Qualification', href: '/seavoice/solutions/outbound/lead-generation', icon: Target },
    { name: 'Collections Service', href: '/seavoice/solutions/outbound/collections', icon: DollarSign },
    { name: 'Customer Reactivation', href: '/seavoice/solutions/outbound/reactivation', icon: UserCheck },
    { name: 'Senior Check Calls', href: '/seavoice/solutions/outbound/senior-checks', icon: Clock },
    { name: 'Large Scale Campaigns', href: '/seavoice/solutions/outbound/campaigns', icon: Megaphone },
    { name: 'Proactive Support', href: '/seavoice/solutions/outbound/proactive-support', icon: Headset },
    { name: 'Subscription Renewals', href: '/seavoice/solutions/outbound/renewals', icon: RefreshCw },
    { name: 'Customer Surveys', href: '/seavoice/solutions/outbound/surveys', icon: FileText },
    { name: 'Fraud Alerts', href: '/seavoice/solutions/outbound/fraud-alerts', icon: AlertTriangle },
  ];

  const changeLanguage = (languageCode: string) => {
    const { pathname } = location;
    const currentLang = i18n.language;
    let newPath;

    // Handle SeaVoice paths - should preserve the /seavoice structure
    if (pathname.includes('/seavoice')) {
      if (pathname.startsWith(`/${currentLang}/seavoice`)) {
        newPath = pathname.replace(`/${currentLang}/seavoice`, `/${languageCode}/seavoice`);
      } else if (pathname.startsWith('/seavoice')) {
        newPath = pathname.replace('/seavoice', `/${languageCode}/seavoice`);
      } else {
        newPath = `/${languageCode}/seavoice`;
      }
    } else {
      // Default language handling
      if (pathname.startsWith(`/${currentLang}/`)) {
        newPath = pathname.replace(`/${currentLang}/`, `/${languageCode}/`);
      } else if (pathname === `/${currentLang}`) {
        newPath = `/${languageCode}`;
      } else {
        newPath = `/${languageCode}${pathname}`;
      }
    }

    navigate(newPath);
    setIsLanguageOpen(false);
  };

  const getCurrentLanguageName = () => {
    const currentLang = LANGUAGE_DETAILS.find(lang => lang.code === i18n.language);
    return currentLang ? currentLang.shortCode : 'EN';
  };

  const navigation = [
    { 
      name: 'Platform', 
      href: '/seavoice/platform',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Platform Overview', href: '/seavoice/platform', icon: Monitor },
        { name: 'Landline & Mobile Voice', href: '/seavoice/platform/landline-mobile', icon: Phone },
        { name: 'VoIP & SIP & BYOC Voice', href: '/seavoice/platform/voip-sip-byoc', icon: Wifi },
        { name: 'Line Call Plus for Businesses', href: '/seavoice/platform/line-call-plus', icon: MessageSquare },
        { name: 'WhatsApp Voice API for Businesses', href: '/seavoice/platform/whatsapp-voice', icon: MessageSquare },
        { name: 'Speech To Text', href: '/seavoice/platform/speech-to-text', icon: MicOff },
        { name: 'Text To Speech', href: '/seavoice/platform/text-to-speech', icon: Mic },
        { name: 'End To End LLMs', href: '/seavoice/platform/end-to-end-llms', icon: Brain },
      ]
    },
    { 
      name: 'Solutions', 
      href: '/seavoice/solutions',
      hasDropdown: true
    },
    { name: 'Pricing', href: '/seavoice/pricing' },
    { name: 'Developers', href: '/seavoice/developers' },
    { name: 'Resources', href: '/seavoice/resources' },
    { name: 'Company', href: '/seavoice/company' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with dropdown */}
          <div className="flex-shrink-0">
            <div className="relative">
              <button 
                onClick={() => setIsLogoDropdownOpen(!isLogoDropdownOpen)}
                className="flex items-center hover:opacity-90 transition-opacity"
              >
                <img 
                  src="/seavoice-logo.png" 
                  alt="SeaVoice Logo" 
                  className="h-6 sm:h-8 w-auto" 
                />
                <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
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
                  if (item.name === 'Platform') setIsPlatformOpen(true);
                  if (item.name === 'Solutions') setIsSolutionsOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.name === 'Platform') setIsPlatformOpen(false);
                  if (item.name === 'Solutions') setIsSolutionsOpen(false);
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
                {item.name === 'Platform' && item.hasDropdown && isPlatformOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  >
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
                  </motion.div>
                )}

                {/* Solutions Dropdown */}
                {item.name === 'Solutions' && item.hasDropdown && isSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-1 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                  >
                    <div className="grid grid-cols-2 gap-4 px-4">
                      {/* Inbound Solutions */}
                      <div>
                        <div className="flex items-center mb-3 pb-2 border-b border-gray-100">
                          <PhoneIncoming className="w-4 h-4 text-blue-600 mr-2" />
                          <h3 className="text-sm font-semibold text-gray-900">Inbound Solutions</h3>
                        </div>
                        <div className="space-y-1">
                          {inboundSolutions.map((solution) => (
                            <Link
                              key={solution.name}
                              to={solution.href}
                              className="flex items-center block px-2 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded"
                            >
                              <solution.icon className="w-4 h-4 mr-2 text-blue-600" />
                              {solution.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Outbound Solutions */}
                      <div>
                        <div className="flex items-center mb-3 pb-2 border-b border-gray-100">
                          <PhoneOutgoing className="w-4 h-4 text-teal-600 mr-2" />
                          <h3 className="text-sm font-semibold text-gray-900">Outbound Solutions</h3>
                        </div>
                        <div className="space-y-1">
                          {outboundSolutions.map((solution) => (
                            <Link
                              key={solution.name}
                              to={solution.href}
                              className="flex items-center block px-2 py-2 text-xs text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors rounded"
                            >
                              <solution.icon className="w-4 h-4 mr-2 text-teal-600" />
                              {solution.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* View All Solutions Link */}
                    <div className="mt-4 pt-3 border-t border-gray-100 px-4">
                      <Link
                        to="/seavoice/solutions"
                        className="block text-center py-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        View All Solutions →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

        {/* Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <span className="mr-1">{getCurrentLanguageName()}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {LANGUAGE_DETAILS.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                        i18n.language === language.code ? 'font-semibold text-blue-600 bg-blue-50' : 'text-gray-700'
                      }`}
                    >
                      {language.name} 
                    </button>
                  ))}
                </div>
              )}
            </div>
        
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact Sales
            </a>
            <Link
              to="/seavoice/login"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Login
            </Link>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Book a Demo
              </motion.button>
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
            className="md:hidden py-4 border-t border-gray-200"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Language Selector */}
            <div className="px-3 py-2">
              <div className="text-sm font-medium text-gray-900 mb-2">Language / Idioma / 语言</div>
              <div className="pl-4 space-y-1 max-h-40 overflow-y-auto">
                {LANGUAGE_DETAILS.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => changeLanguage(language.code)}
                    className={`block w-full text-left py-1 text-sm ${
                      i18n.language === language.code ? 'font-semibold text-blue-600' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {language.name} 
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base font-medium text-gray-700"
              >
                Contact Sales
              </a>
              <Link
                to="/seavoice/login"
                className="block px-3 py-2 text-base font-medium text-gray-700"
              >
                Login
              </Link>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors text-center block"
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;