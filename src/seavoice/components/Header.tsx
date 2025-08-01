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
import LanguageSwitcher from '../../components/LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isInboundSolutionsOpen, setIsInboundSolutionsOpen] = useState(false);
  const [isOutboundSolutionsOpen, setIsOutboundSolutionsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isLogoDropdownOpen, setIsLogoDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const inboundSolutions = [
    { name: '24/7 Virtual Assistant', href: `/${i18n.language}/seavoice/solutions/inbound/virtual-assistant`, icon: Bot },
    { name: 'Smart Call Transfer', href: `/${i18n.language}/seavoice/solutions/inbound/call-transfer`, icon: ArrowRightLeft },
    { name: 'IVR Replacement', href: `/${i18n.language}/seavoice/solutions/inbound/ivr-replacement`, icon: Zap },
    { name: 'Mental Health Companion', href: `/${i18n.language}/seavoice/solutions/inbound/mental-health`, icon: Heart },
    { name: 'Scam Shield Protection', href: `/${i18n.language}/seavoice/solutions/inbound/scam-shield`, icon: Shield },
    { name: 'Technical Support', href: `/${i18n.language}/seavoice/solutions/inbound/technical-support`, icon: Headphones },
    { name: 'Order Status & Tracking', href: `/${i18n.language}/seavoice/solutions/inbound/order-tracking`, icon: Package },
    { name: 'Payment Processing', href: `/${i18n.language}/seavoice/solutions/inbound/payment-processing`, icon: CreditCard },
    { name: 'Appointment Booking', href: `/${i18n.language}/seavoice/solutions/inbound/appointment-booking`, icon: Calendar },
  ];

  const outboundSolutions = [
    { name: 'Lead Generation & Qualification', href: `/${i18n.language}/seavoice/solutions/outbound/lead-generation`, icon: Target },
    { name: 'Collections Service', href: `/${i18n.language}/seavoice/solutions/outbound/collections`, icon: DollarSign },
    { name: 'Customer Reactivation', href: `/${i18n.language}/seavoice/solutions/outbound/reactivation`, icon: UserCheck },
    { name: 'Senior Check Calls', href: `/${i18n.language}/seavoice/solutions/outbound/senior-checks`, icon: Clock },
    { name: 'Large Scale Campaigns', href: `/${i18n.language}/seavoice/solutions/outbound/campaigns`, icon: Megaphone },
    { name: 'Proactive Support', href: `/${i18n.language}/seavoice/solutions/outbound/proactive-support`, icon: Headset },
    { name: 'Subscription Renewals', href: `/${i18n.language}/seavoice/solutions/outbound/renewals`, icon: RefreshCw },
    { name: 'Customer Surveys', href: `/${i18n.language}/seavoice/solutions/outbound/surveys`, icon: FileText },
    { name: 'Fraud Alerts', href: `/${i18n.language}/seavoice/solutions/outbound/fraud-alerts`, icon: AlertTriangle },
  ];


  const navigation = [
    { 
      name: 'Platform', 
      href: `/${i18n.language}/seavoice/platform`,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Platform Overview', href: `/${i18n.language}/seavoice/platform`, icon: Monitor },
        { name: 'Landline & Mobile Voice', href: `/${i18n.language}/seavoice/platform/landline-mobile`, icon: Phone },
        { name: 'VoIP & SIP & BYOC Voice', href: `/${i18n.language}/seavoice/platform/voip-sip-byoc`, icon: Wifi },
        { name: 'Line Call Plus for Businesses', href: `/${i18n.language}/seavoice/platform/line-call-plus`, icon: MessageSquare },
        { name: 'WhatsApp Voice API for Businesses', href: `/${i18n.language}/seavoice/platform/whatsapp-voice`, icon: MessageSquare },
        { name: 'Speech To Text', href: `/${i18n.language}/seavoice/platform/speech-to-text`, icon: MicOff },
        { name: 'Text To Speech', href: `/${i18n.language}/seavoice/platform/text-to-speech`, icon: Mic },
        { name: 'End To End LLMs', href: `/${i18n.language}/seavoice/platform/end-to-end-llms`, icon: Brain },
      ]
    },
    { 
      name: 'Inbound Solutions', 
      href: `/${i18n.language}/seavoice/solutions`,
      hasDropdown: true,
      dropdownItems: inboundSolutions
    },
    { 
      name: 'Outbound Solutions', 
      href: `/${i18n.language}/seavoice/solutions`,
      hasDropdown: true,
      dropdownItems: outboundSolutions
    },
    { name: 'Pricing', href: `/${i18n.language}/seavoice/pricing` },
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
                className="hover:opacity-80 transition-opacity"
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
                className="ml-1 p-1 text-gray-500 hover:text-blue-600 transition-colors duration-200"
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
                  if (item.name === 'Platform') setIsPlatformOpen(true);
                  if (item.name === 'Inbound Solutions') setIsInboundSolutionsOpen(true);
                  if (item.name === 'Outbound Solutions') setIsOutboundSolutionsOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.name === 'Platform') setIsPlatformOpen(false);
                  if (item.name === 'Inbound Solutions') setIsInboundSolutionsOpen(false);
                  if (item.name === 'Outbound Solutions') setIsOutboundSolutionsOpen(false);
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
                {item.name === 'Inbound Solutions' && item.hasDropdown && isInboundSolutionsOpen && (
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
                        <h3 className="text-sm font-semibold text-gray-900">Inbound Solutions</h3>
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
                {item.name === 'Outbound Solutions' && item.hasDropdown && isOutboundSolutionsOpen && (
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
                        <h3 className="text-sm font-semibold text-gray-900">Outbound Solutions</h3>
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
              Sign In
            </a>
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105"
            >
              Get Started
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
              <LanguageSwitcher className="w-full" />
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              <a
                href="https://chat.seasalt.ai/gpt/signin"
                className="block px-3 py-2 text-base font-medium text-gray-700"
              >
                Sign In
              </a>
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                className="w-full bg-teal-500 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-teal-600 transition-colors text-center block"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;