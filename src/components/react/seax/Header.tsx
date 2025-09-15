import { useState, useRef, useCallback } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  MessageSquare, 
  Users, 
  Mic, 
  Phone, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Mail, 
  Bot, 
  Monitor, 
  Headphones,
  Heart,
  Target,
  Zap,
  Calendar,
  AlertTriangle,
  ShoppingCart,
  Vote,
  DollarSign,
  BookOpen,
  Building2,
  Hash
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProductHeaderProps } from '../../types/products';

// Custom WhatsApp icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
  </svg>
);

const Header = ({ product, config, lang, translations }: ProductHeaderProps) => {
  const currentLanguage = lang || 'en';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const handleMouseEnter = useCallback((dropdown: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout?.(hoverTimeoutRef.current);
    }
    setOpenDropdown(dropdown);
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout?.(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout?.(() => {
      setOpenDropdown(null);
    }, 100);
  }, []);

  // Helper function to get SeaX paths
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;
  
  // Helper function to get the correct Wiki URL based on language
  const getWikiUrl = () => {
    const wikiLanguage = (currentLanguage === 'zh-TW' || currentLanguage === 'zh-CN') ? 'zh' : 'en';
    return `https://wiki.seasalt.ai/${wikiLanguage}/seax/seax-omni/seax-intro/`;
  };

  // Navigation structure based on old version
  const navigation = [
    { name: translations.seax?.header?.navigation?.features || 'Features', href: getLocalizedPath('/features') },
    {
      name: translations.seax?.header?.navigation?.channels || 'Channels',
      href: getLocalizedPath('/channels'),
      dropdown: [
        { 
          name: translations.seax?.header?.channels?.smsOverview || 'SMS Overview', 
          href: getLocalizedPath('/channels/sms'),
          icon: MessageSquare,
          iconText: 'SMS',
          isParent: true
        },
        { 
          name: translations.seax?.header?.channels?.localNumber || 'Local Number', 
          href: getLocalizedPath('/channels/sms-local'),
          icon: Building2,
          iconText: '10DLC',
          isChild: true
        },
        { 
          name: translations.seax?.header?.channels?.tollFree || 'Toll-Free', 
          href: getLocalizedPath('/channels/sms-toll-free'),
          icon: Phone,
          iconText: '8XX',
          isChild: true
        },
        { 
          name: translations.seax?.header?.channels?.shortCode || 'Short Code', 
          href: getLocalizedPath('/channels/sms-short-code'),
          icon: Hash,
          iconText: 'xxxxx',
          isChild: true
        },
        { 
          name: translations.seax?.header?.channels?.whatsappBusiness || 'WhatsApp Business', 
          href: getLocalizedPath('/channels/whatsapp'),
          icon: WhatsAppIcon
        },
        { 
          name: translations.seax?.header?.channels?.phoneCallVoice || 'Phone Call & Voice', 
          href: getLocalizedPath('/channels/voice'),
          icon: Phone
        }
      ]
    },
    {
      name: translations.seax?.header?.navigation?.solutions || 'Solutions',
      href: getLocalizedPath('/solutions'),
      dropdown: [
        { 
          name: translations.seax?.header?.solutions?.leadGeneration || 'Lead Generation', 
          href: getLocalizedPath('/solutions/lead-generation'),
          icon: Target
        },
        { 
          name: translations.seax?.header?.solutions?.marketingAutomation || 'Marketing Automation', 
          href: getLocalizedPath('/solutions/marketing-automation'),
          icon: Zap
        },
        { 
          name: translations.seax?.header?.solutions?.customerEngagement || 'Customer Engagement', 
          href: getLocalizedPath('/solutions/customer-engagement'),
          icon: Users
        },
        { 
          name: translations.seax?.header?.solutions?.appointmentReminders || 'Appointment Reminders', 
          href: getLocalizedPath('/solutions/appointment-reminders'),
          icon: Calendar
        },
        { 
          name: translations.seax?.header?.solutions?.emergencyAlerts || 'Emergency Alerts', 
          href: getLocalizedPath('/solutions/emergency-alerts'),
          icon: AlertTriangle
        }
      ]
    },
    {
      name: translations.seax?.header?.navigation?.industries || 'Industries',
      href: getLocalizedPath('/industries'),
      dropdown: [
        { 
          name: translations.seax?.header?.industries?.ecommerceRetail || 'E-commerce & Retail', 
          href: getLocalizedPath('/industries/ecommerce-retail'),
          icon: ShoppingCart
        },
        { 
          name: translations.seax?.header?.industries?.realEstate || 'Real Estate', 
          href: getLocalizedPath('/industries/real-estate'),
          icon: Building2
        },
        { 
          name: translations.seax?.header?.industries?.politicalCampaigns || 'Political Campaigns', 
          href: getLocalizedPath('/industries/political-campaigns'),
          icon: Vote
        },
        { 
          name: translations.seax?.header?.industries?.healthcare || 'Healthcare', 
          href: getLocalizedPath('/industries/healthcare'),
          icon: Heart
        },
        { 
          name: translations.seax?.header?.industries?.financialServices || 'Financial Services', 
          href: getLocalizedPath('/industries/financial-services'),
          icon: DollarSign
        }
      ]
    },
    { name: translations.seax?.header?.navigation?.pricing || 'Pricing', href: getLocalizedPath('/pricing') }
  ];

  const products = [
    { title: 'SeaX', href: 'https://seax.seasalt.ai', icon: MessageSquare },
    { title: 'SeaChat', href: 'https://seachat.seasalt.ai', icon: Bot },
    { title: 'SeaVoice', href: 'https://seavoice.seasalt.ai', icon: Phone }
  ];
  
  const isActivePath = (path: string) => {
    // This would need to be implemented based on current route
    return false;
  };

  return (
    <>
      {/* Phone Banner placeholder - would need to implement similar to old version */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center relative">
                <div className="relative flex items-center">
                  {/* Logo - navigates to SeaX home */}
                  <a
                    href={getLocalizedPath('')}
                    className="hover:opacity-80 transition-opacity flex items-center"
                  >
                    <img 
                      src="/seax-logo.png" 
                      alt="SeaX" 
                      className="h-6 sm:h-8 w-auto"
                    />
                  </a>
                  
                  {/* Dropdown arrow - opens product dropdown */}
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'logo' ? null : 'logo')}
                    onMouseEnter={() => setOpenDropdown('logo')}
                    className="ml-1 p-1 text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {/* Product dropdown */}
                  {openDropdown === 'logo' && (
                    <div className="absolute top-full left-0 pt-2 w-72 z-[60]">
                      <div className="bg-white rounded-md shadow-lg border border-gray-200 py-2">
                        {products.map((product, index) => (
                          <a
                            key={index}
                            href={product.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <product.icon className="w-4 h-4 text-blue-600 mr-3" />
                            {product.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.name.toLowerCase())}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name.toLowerCase() ? null : item.name.toLowerCase())}
                        className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors ${
                          isActivePath(item.href) ? 'text-blue-600' : ''
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name.toLowerCase() && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 pt-2 w-72 z-[60]"
                          >
                            <div className="bg-white rounded-md shadow-lg border border-gray-200 py-2">
                              {item.dropdown.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={`flex items-center px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600 transition-colors ${
                                    subItem.isParent 
                                      ? 'text-gray-900 font-medium border-b border-gray-100 bg-gray-50' 
                                      : subItem.isChild 
                                        ? 'text-gray-600 pl-8' 
                                        : 'text-gray-700'
                                  }`}
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {subItem.icon && (
                                    <div className="flex items-center justify-center w-5 h-5 mr-3 flex-shrink-0">
                                      {subItem.iconText ? (
                                        <span className="text-xs font-mono font-bold text-blue-600">
                                          {subItem.iconText}
                                        </span>
                                      ) : (
                                        <subItem.icon className="w-4 h-4 text-blue-600" />
                                      )}
                                    </div>
                                  )}
                                  <span>{subItem.name}</span>
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${
                        isActivePath(item.href) ? 'text-blue-600' : ''
                      }`}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}

              {/* Wiki (standout) */}
              <a
                href={getWikiUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-500 px-4 py-2 rounded-lg shadow hover:from-blue-600 hover:to-teal-600 transition-all transform hover:scale-105 border border-blue-400 ml-4"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                {translations.seax?.header?.buttons?.wiki || 'Wiki'}
              </a>
            </nav>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'language' ? null : 'language')}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  <span className="mr-1">{currentLanguage?.toUpperCase() || 'EN'}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown === 'language' ? 'transform rotate-180' : ''}`} />
                </button>
                
                {openDropdown === 'language' && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 max-h-96 overflow-y-auto z-[60]">
                    {/* Language options - you would need to implement language switching logic */}
                    <a href="/en/seax" className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-700">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">English</span>
                        <span className="text-xs text-gray-500 ml-2">EN</span>
                      </div>
                    </a>
                    <a href="/zh-tw/seax" className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-700">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">繁體中文</span>
                        <span className="text-xs text-gray-500 ml-2">ZH-TW</span>
                      </div>
                    </a>
                    <a href="/zh-cn/seax" className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-700">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">简体中文</span>
                        <span className="text-xs text-gray-500 ml-2">ZH-CN</span>
                      </div>
                    </a>
                  </div>
                )}
              </div>
              <a
                href="https://seax.seasalt.ai/signin"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {translations.seax?.header?.buttons?.signIn || 'Sign In'}
              </a>
              <a
                href="https://seax.seasalt.ai/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                {translations.seax?.header?.buttons?.signUp || 'Sign Up'}
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

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-b border-gray-100 max-h-[70vh] overflow-y-auto">
              <div className="px-4 py-6 space-y-3">
                {/* Action Buttons at Top */}
                <div className="space-y-3">
                  <a
                    href="https://seax.seasalt.ai/signin"
                    className="block w-full text-center text-gray-700 hover:text-blue-600 font-medium py-2 border border-gray-300 rounded-lg transition-colors"
                  >
                    {translations.seax?.header?.buttons?.signIn || 'Sign In'}
                  </a>
                  <a
                    href="https://seax.seasalt.ai/signup"
                    className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    {translations.seax?.header?.buttons?.signUp || 'Sign Up'}
                  </a>
                  <a
                    href={getWikiUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-500 px-4 py-2 rounded-lg shadow hover:from-blue-600 hover:to-teal-600 transition-all border border-blue-400"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    {translations.seax?.header?.buttons?.wiki || 'Wiki'}
                  </a>
                </div>

                {/* Back to Main Site */}
                <div className="pt-4 pb-4 border-t border-gray-100">
                  <a 
                    href={`/${currentLanguage}`} 
                    className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <img src="/seasalt-ai-logo.png" alt="Seasalt.ai" className="h-6 w-auto mr-2" />
                    {translations.seax?.header?.mobile?.backToMainSite || 'Back to Main Site'}
                  </a>
                </div>

                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === item.name.toLowerCase() ? null : item.name.toLowerCase())}
                          className="w-full text-left block px-3 py-2 text-base font-semibold text-gray-900 hover:text-blue-600 hover:bg-gray-50"
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.name}</span>
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </button>
                        {openDropdown === item.name.toLowerCase() && (
                          <div className="pl-4">
                            {item.dropdown.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className={`flex items-center px-3 py-2 text-sm hover:text-blue-600 hover:bg-gray-50 transition-colors ${
                                  subItem.isParent 
                                    ? 'text-gray-900 font-medium border-b border-gray-100 bg-gray-50' 
                                    : subItem.isChild 
                                      ? 'text-gray-600 pl-6' 
                                      : 'text-gray-600'
                                }`}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setOpenDropdown(null);
                                }}
                              >
                                {subItem.icon && (
                                  <div className="flex items-center justify-center w-5 h-5 mr-3 flex-shrink-0">
                                    {subItem.iconText ? (
                                      <span className="text-xs font-mono font-bold text-blue-600">
                                        {subItem.iconText}
                                      </span>
                                    ) : (
                                      <subItem.icon className="w-4 h-4 text-blue-600" />
                                    )}
                                  </div>
                                )}
                                <span>{subItem.name}</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className={`block px-3 py-2 text-base text-gray-700 hover:text-blue-600 hover:bg-gray-50 ${
                          isActivePath(item.href) ? 'text-blue-600 bg-gray-50' : ''
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
                
                {/* Mobile Language Selector */}
                <div className="px-3 py-2 border-t border-gray-200 mt-4 pt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Language / 語言</h4>
                  <div className="space-y-2">
                    <a href="/en/seax" className="block py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">English</span>
                        <span className="text-xs text-gray-500">EN</span>
                      </div>
                    </a>
                    <a href="/zh-tw/seax" className="block py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">繁體中文</span>
                        <span className="text-xs text-gray-500">ZH-TW</span>
                      </div>
                    </a>
                    <a href="/zh-cn/seax" className="block py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">简体中文</span>
                        <span className="text-xs text-gray-500">ZH-CN</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    </header>
    </>
  );
};

export default Header;
