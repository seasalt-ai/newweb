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
  const { i18n, t } = useTranslation();

const inboundSolutions = [
    { name: t('header.inbound.virtualAssistant'), href: `/${i18n.language}/seavoice/solutions/inbound/virtual-assistant`, icon: Bot },
    { name: t('header.inbound.callTransfer'), href: `/${i18n.language}/seavoice/solutions/inbound/call-transfer`, icon: ArrowRightLeft },
    { name: t('header.inbound.ivrReplacement'), href: `/${i18n.language}/seavoice/solutions/inbound/ivr-replacement`, icon: Zap },
    { name: t('header.inbound.mentalHealth'), href: `/${i18n.language}/seavoice/solutions/inbound/mental-health`, icon: Heart },
    { name: t('header.inbound.scamShield'), href: `/${i18n.language}/seavoice/solutions/inbound/scam-shield`, icon: Shield },
    { name: t('header.inbound.technicalSupport'), href: `/${i18n.language}/seavoice/solutions/inbound/technical-support`, icon: Headphones },
    { name: t('header.inbound.orderStatus'), href: `/${i18n.language}/seavoice/solutions/inbound/order-tracking`, icon: Package },
    { name: t('header.inbound.paymentProcessing'), href: `/${i18n.language}/seavoice/solutions/inbound/payment-processing`, icon: CreditCard },
    { name: t('header.inbound.appointmentBooking'), href: `/${i18n.language}/seavoice/solutions/inbound/appointment-booking`, icon: Calendar },
  ];

const outboundSolutions = [
    { name: t('header.outbound.leadGeneration'), href: `/${i18n.language}/seavoice/solutions/outbound/lead-generation`, icon: Target },
    { name: t('header.outbound.collections'), href: `/${i18n.language}/seavoice/solutions/outbound/collections`, icon: DollarSign },
    { name: t('header.outbound.reactivation'), href: `/${i18n.language}/seavoice/solutions/outbound/reactivation`, icon: UserCheck },
    { name: t('header.outbound.seniorChecks'), href: `/${i18n.language}/seavoice/solutions/outbound/senior-checks`, icon: Clock },
    { name: t('header.outbound.campaigns'), href: `/${i18n.language}/seavoice/solutions/outbound/campaigns`, icon: Megaphone },
    { name: t('header.outbound.proactiveSupport'), href: `/${i18n.language}/seavoice/solutions/outbound/proactive-support`, icon: Headset },
    { name: t('header.outbound.renewals'), href: `/${i18n.language}/seavoice/solutions/outbound/renewals`, icon: RefreshCw },
    { name: t('header.outbound.surveys'), href: `/${i18n.language}/seavoice/solutions/outbound/surveys`, icon: FileText },
    { name: t('header.outbound.fraudAlerts'), href: `/${i18n.language}/seavoice/solutions/outbound/fraud-alerts`, icon: AlertTriangle },
  ];


const navigation = [
    { 
      name: t('header.navigation.platform'), 
      href: `/${i18n.language}/seavoice/platform`,
      hasDropdown: true,
      dropdownItems: [
        { name: t('header.platform.overview'), href: `/${i18n.language}/seavoice/platform`, icon: Monitor },
        { name: t('header.platform.landlineMobile'), href: `/${i18n.language}/seavoice/platform/landline-mobile`, icon: Phone },
        { name: t('header.platform.voipSipByoc'), href: `/${i18n.language}/seavoice/platform/voip-sip-byoc`, icon: Wifi },
        { name: t('header.platform.lineCallPlus'), href: `/${i18n.language}/seavoice/platform/line-call-plus`, icon: MessageSquare },
        { name: t('header.platform.whatsappVoice'), href: `/${i18n.language}/seavoice/platform/whatsapp-voice`, icon: MessageSquare },
        { name: t('header.platform.speechToText'), href: `/${i18n.language}/seavoice/platform/speech-to-text`, icon: MicOff },
        { name: t('header.platform.textToSpeech'), href: `/${i18n.language}/seavoice/platform/text-to-speech`, icon: Mic },
        { name: t('header.platform.endToEndLlm'), href: `/${i18n.language}/seavoice/platform/end-to-end-llms`, icon: Brain },
      ]
    },
    { 
      name: t('header.navigation.inboundSolutions'), 
      href: `/${i18n.language}/seavoice/solutions`,
      hasDropdown: true,
      dropdownItems: inboundSolutions
    },
    { 
      name: t('header.navigation.outboundSolutions'), 
      href: `/${i18n.language}/seavoice/solutions`,
      hasDropdown: true,
      dropdownItems: outboundSolutions
    },
    { name: t('header.navigation.pricing'), href: `/${i18n.language}/seavoice/pricing` },
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
                  if (item.name === t('header.navigation.platform')) setIsPlatformOpen(true);
                  if (item.name === t('header.navigation.inboundSolutions')) setIsInboundSolutionsOpen(true);
                  if (item.name === t('header.navigation.outboundSolutions')) setIsOutboundSolutionsOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.name === t('header.navigation.platform')) setIsPlatformOpen(false);
                  if (item.name === t('header.navigation.inboundSolutions')) setIsInboundSolutionsOpen(false);
                  if (item.name === t('header.navigation.outboundSolutions')) setIsOutboundSolutionsOpen(false);
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
                {item.name === t('header.navigation.platform') && item.hasDropdown && isPlatformOpen && (
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
                {item.name === t('header.navigation.inboundSolutions') && item.hasDropdown && isInboundSolutionsOpen && (
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
                        <h3 className="text-sm font-semibold text-gray-900">{t('header.navigation.inboundSolutions')}</h3>
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
                {item.name === t('header.navigation.outboundSolutions') && item.hasDropdown && isOutboundSolutionsOpen && (
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
                        <h3 className="text-sm font-semibold text-gray-900">{t('header.navigation.outboundSolutions')}</h3>
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
            e
              {t('header.auth.signIn')}
            c/ae
            ca
              href="https://chat.seasalt.ai/gpt/signup"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105"
            e
              {t('header.auth.getStarted')}
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
                {t('header.auth.signIn')}
              </a>
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                className="w-full bg-teal-500 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-teal-600 transition-colors text-center block"
              >
                {t('header.auth.getStarted')}
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;