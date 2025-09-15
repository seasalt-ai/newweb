import { Phone, Mail, MapPin, MessageSquare, Zap, Users, Target, Heart, Coffee, Umbrella, Plane, Gem, Hash, Building2, Calendar, AlertTriangle, ShoppingCart, Vote, DollarSign, BarChart3, Book, Server, Briefcase, ChevronDown } from 'lucide-react';
import { FaDiscord, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProductFooterProps } from '../../types/products';

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


const Footer = ({ product, config, lang, translations }: ProductFooterProps) => {
  const currentLanguage = lang || 'en';
  const getLocalizedPath = (path: string) => `/${currentLanguage}${config.baseUrl}${path}`;
  
  // 使用產品配置的 URLs
  const getWikiUrl = () => config.wikiUrl(currentLanguage);
  const getMeetingUrl = (language: string) => config.meetingUrl(language);
  
  // 使用產品主題的顏色
  const primaryColor = config.theme.primary;
  const secondaryColor = config.theme.secondary;
  const gradientFrom = config.theme.gradientFrom;
  const gradientTo = config.theme.gradientTo;
  
  // Mobile collapsible state
  const [mobileCollapsed, setMobileCollapsed] = useState({
    channels: true,
    solutions: true,
    industries: true,
    company: true
  });
  
  const toggleMobileSection = (section: 'channels' | 'solutions' | 'industries' | 'company') => {
    setMobileCollapsed(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // 根據產品類型動態生成連結
  const channelLinks = product === 'seax' ? [
    { name: translations.channels?.smsOverview, path: '/channels/sms', icon: MessageSquare, iconText: translations.technical?.sms, isParent: true },
    { name: translations.channels?.localNumber, path: '/channels/sms-local', icon: Building2, iconText: translations.technical?.tenDlc, isChild: true },
    { name: translations.channels?.tollFree, path: '/channels/sms-toll-free', icon: Phone, iconText: translations.technical?.tollFree, isChild: true },
    { name: translations.channels?.shortCode, path: '/channels/sms-short-code', icon: Hash, iconText: translations.technical?.shortCode, isChild: true },
    { name: translations.channels?.whatsappBusiness, path: '/channels/whatsapp', icon: WhatsAppIcon },
    { name: translations.channels?.phoneVoice, path: '/channels/voice', icon: Phone }
  ].filter(link => link.name) : [];

  const solutionLinks = [
    { name: translations.solutions?.leadGeneration, path: '/solutions/lead-generation', icon: Target },
    { name: translations.solutions?.marketingAutomation, path: '/solutions/marketing-automation', icon: Zap },
    { name: translations.solutions?.customerEngagement, path: '/solutions/customer-engagement', icon: Users },
    { name: translations.solutions?.appointmentReminders, path: '/solutions/appointment-reminders', icon: Calendar },
    { name: translations.solutions?.emergencyAlerts, path: '/solutions/emergency-alerts', icon: AlertTriangle }
  ].filter(link => link.name);

  const industryLinks = [
    { name: translations.industries?.ecommerce, path: '/industries/ecommerce-retail', icon: ShoppingCart },
    { name: translations.industries?.realEstate, path: '/industries/real-estate', icon: Building2 },
    { name: translations.industries?.political, path: '/industries/political-campaigns', icon: Vote },
    { name: translations.industries?.healthcare, path: '/industries/healthcare', icon: Heart },
    { name: translations.industries?.financial, path: '/industries/financial-services', icon: DollarSign }
  ].filter(link => link.name);

  const companyLinks = [
    { name: translations.company?.blog, href: `/${currentLanguage}/blog`, icon: MessageSquare },
    { name: translations.company?.pricing, href: getLocalizedPath('/pricing'), icon: DollarSign },
    { name: translations.company?.compareUs, href: `/${currentLanguage}/compare-us-overview`, icon: BarChart3 },
    { name: translations.company?.productWiki, href: getWikiUrl(), icon: Book },
    { name: translations.company?.apiReferences, href: 'https://api.seasalt.ai', icon: Server },
    { name: translations.company?.careers, href: `/${currentLanguage}/careers`, icon: Briefcase },
    { name: translations.company?.about, href: `/${currentLanguage}/company`, icon: Building2 }
  ].filter(link => link.name);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src={config.theme.logo} 
                alt={config.theme.logoAlt}
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              {translations.tagline}
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">{translations.phone}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">{translations.email}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">{translations.location}</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/company/seasalt-ai/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@seasaltai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/SeasaltAI" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://discord.gg/VgAWg3c7rU" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                <FaDiscord className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Channels */}
          {channelLinks.length > 0 && (
            <div>
              {/* Desktop: Regular heading */}
              <h3 className="hidden lg:block text-base sm:text-lg font-semibold mb-4 sm:mb-6">{translations.channels?.title}</h3>
            
              {/* Mobile: Collapsible heading */}
              <button 
                onClick={() => toggleMobileSection('channels')}
                className="lg:hidden flex items-center justify-between w-full text-base sm:text-lg font-semibold mb-4 text-left"
              >
                {translations.channels?.title}
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCollapsed.channels ? '' : 'rotate-180'}`} />
              </button>
            
            {/* Desktop: Always visible */}
            <ul className="hidden lg:block space-y-2 sm:space-y-3">
              {channelLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={getLocalizedPath(link.path)}
                    className={`text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center ${
                      link.isParent 
                        ? 'font-medium border-b border-gray-700 pb-1 mb-1' 
                        : link.isChild 
                          ? 'pl-4 text-gray-400' 
                          : ''
                    }`}
                  >
                    {link.icon && (
                      <div className="flex items-center justify-center w-4 h-4 mr-2 flex-shrink-0">
                        {link.iconText ? (
                          <span className="text-xs font-mono font-bold" style={{ color: primaryColor }}>
                            {link.iconText}
                          </span>
                        ) : (
                          <link.icon className="w-3 h-3" style={{ color: primaryColor }} />
                        )}
                      </div>
                    )}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Mobile: Collapsible content */}
            <div className="lg:hidden">
              <AnimatePresence>
                {!mobileCollapsed.channels && (
                  <motion.ul 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 sm:space-y-3 overflow-hidden"
                  >
                    {channelLinks.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={getLocalizedPath(link.path)}
                          className={`text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center ${
                            link.isParent 
                              ? 'font-medium border-b border-gray-700 pb-1 mb-1' 
                              : link.isChild 
                                ? 'pl-4 text-gray-400' 
                                : ''
                          }`}
                        >
                          {link.icon && (
                            <div className="flex items-center justify-center w-4 h-4 mr-2 flex-shrink-0">
                              {link.iconText ? (
                                <span className="text-xs font-mono font-bold" style={{ color: primaryColor }}>
                                  {link.iconText}
                                </span>
                              ) : (
                                <link.icon className="w-3 h-3" style={{ color: primaryColor }} />
                              )}
                            </div>
                          )}
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            </div>
          )}

          {/* Solutions */}
          {solutionLinks.length > 0 && (
            <div>
              {/* Desktop: Regular heading */}
              <h3 className="hidden lg:block text-base sm:text-lg font-semibold mb-4 sm:mb-6">{translations.solutions?.title}</h3>
            
              {/* Mobile: Collapsible heading */}
              <button 
                onClick={() => toggleMobileSection('solutions')}
                className="lg:hidden flex items-center justify-between w-full text-base sm:text-lg font-semibold mb-4 text-left"
              >
                {translations.solutions?.title}
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCollapsed.solutions ? '' : 'rotate-180'}`} />
              </button>
            
            {/* Desktop: Always visible */}
            <ul className="hidden lg:block space-y-2 sm:space-y-3">
              {solutionLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={getLocalizedPath(link.path)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    <link.icon className="h-3 w-3 mr-2" style={{ color: primaryColor }} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Mobile: Collapsible content */}
            <div className="lg:hidden">
              <AnimatePresence>
                {!mobileCollapsed.solutions && (
                  <motion.ul 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 sm:space-y-3 overflow-hidden"
                  >
                    {solutionLinks.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={getLocalizedPath(link.path)}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                        >
                          <link.icon className="h-3 w-3 mr-2" style={{ color: primaryColor }} />
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            </div>
          )}

          {/* Industries */}
          {industryLinks.length > 0 && (
            <div>
              {/* Desktop: Regular heading */}
              <h3 className="hidden lg:block text-base sm:text-lg font-semibold mb-4 sm:mb-6">{translations.industries?.title}</h3>
            
              {/* Mobile: Collapsible heading */}
              <button 
                onClick={() => toggleMobileSection('industries')}
                className="lg:hidden flex items-center justify-between w-full text-base sm:text-lg font-semibold mb-4 text-left"
              >
                {translations.industries?.title}
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCollapsed.industries ? '' : 'rotate-180'}`} />
              </button>
            
            {/* Desktop: Always visible */}
            <ul className="hidden lg:block space-y-2 sm:space-y-3">
              {industryLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={getLocalizedPath(link.path)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    <link.icon className="h-3 w-3 mr-2" style={{ color: primaryColor }} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Mobile: Collapsible content */}
            <div className="lg:hidden">
              <AnimatePresence>
                {!mobileCollapsed.industries && (
                  <motion.ul 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 sm:space-y-3 overflow-hidden"
                  >
                    {industryLinks.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={getLocalizedPath(link.path)}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                        >
                          <link.icon className="h-3 w-3 mr-2" style={{ color: primaryColor }} />
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            </div>
          )}

          {/* Company */}
          <div>
            {/* Desktop: Regular heading */}
            <h3 className="hidden lg:block text-base sm:text-lg font-semibold mb-4 sm:mb-6">{translations.company?.title}</h3>
            
            {/* Mobile: Collapsible heading */}
            <button 
              onClick={() => toggleMobileSection('company')}
              className="lg:hidden flex items-center justify-between w-full text-base sm:text-lg font-semibold mb-4 text-left"
            >
              {translations.company?.title}
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileCollapsed.company ? '' : 'rotate-180'}`} />
            </button>
            
            {/* Desktop: Always visible */}
            <ul className="hidden lg:block space-y-2 sm:space-y-3">
              {/* Features and Pricing first */}
              <li>
                <a 
                  href={getLocalizedPath('/features')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                >
                  <Zap className="h-3 w-3 mr-2" style={{ color: primaryColor }} />
                  {translations.company?.features}
                </a>
              </li>
              <li>
                <a 
                  href={getLocalizedPath('/pricing')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                >
                  <DollarSign className="h-3 w-3 mr-2" style={{ color: primaryColor }} />
                  {translations.company?.pricing}
                </a>
              </li>
              {/* Then company links */}
              {companyLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('http') ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                    >
                      <link.icon className="h-3 w-3 mr-2" style={{ color: primaryColor }} />
                      {link.name}
                    </a>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                    >
                      <link.icon className="h-3 w-3 mr-2" style={{ color: primaryColor }} />
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            
            {/* Mobile: Collapsible content */}
            <div className="lg:hidden">
              <AnimatePresence>
                {!mobileCollapsed.company && (
                  <motion.ul 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 sm:space-y-3 overflow-hidden"
                  >
                    {/* Features and Pricing first */}
                    <li>
                      <a 
                        href={getLocalizedPath('/features')}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                      >
                        <Zap className="h-3 w-3 mr-2" style={{ color: primaryColor }} />
                        {translations.company?.features}
                      </a>
                    </li>
                    <li>
                      <a 
                        href={getLocalizedPath('/pricing')}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                      >
                        <DollarSign className="h-3 w-3 mr-2" style={{ color: primaryColor }} />
                        {translations.company?.pricing}
                      </a>
                    </li>
                    {/* Then company links */}
                    {companyLinks.map((link, index) => (
                      <li key={index}>
                        {link.href.startsWith('http') ? (
                          <a 
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                          >
                            <link.icon className="h-3 w-3 mr-2" style={{ color: primaryColor }} />
                            {link.name}
                          </a>
                        ) : (
                          <a 
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                          >
                            <link.icon className="h-3 w-3 mr-2" style={{ color: primaryColor }} />
                            {link.name}
                          </a>
                        )}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-2 lg:mb-0">
              <p className="text-gray-300 text-sm">
                {translations.footer?.copyright?.replace('{{year}}', new Date().getFullYear().toString()) || `© ${new Date().getFullYear()} Seasalt.ai. All rights reserved.`}
              </p>
              <div className="flex space-x-3 sm:space-x-4 text-xs sm:text-sm">
                <a href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {translations.footer?.privacyPolicy}
                </a>
                <a href="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {translations.footer?.termsOfService}
                </a>
              </div>
            </div>
            
            {/* Compliance & Stats */}
            {config.enableFeatures.statistics && (
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300">
                <span className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  {translations.footer?.stats?.messagesDaily}
                </span>
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {translations.footer?.stats?.activeUsers}
                </span>
                <span className="flex items-center">
                  <Target className="w-4 h-4 mr-1" />
                  {translations.footer?.stats?.uptime}
                </span>
              </div>
            )}
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-300 text-sm">
              {translations.footer?.madeWithText} <Heart className="inline w-4 h-4 text-red-500" /> {translations.footer?.madeWithInCity}{' '}
              <Coffee className="inline w-4 h-4 text-amber-700" />{' '}
              <Umbrella className="inline w-4 h-4" style={{ color: primaryColor }} />{' '}
              <Plane className="inline w-4 h-4 text-gray-500" />{' '}
              <Gem className="inline w-4 h-4 text-fuchsia-500" />
            </p>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      {config.enableFeatures.cta && (
        <div className="py-6 sm:py-8" style={{
          background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
        }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              {translations.footer?.cta?.title}
            </h3>
            <p className="text-white opacity-90 mb-6 max-w-2xl mx-auto">
              {translations.footer?.cta?.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href={config.signUpUrl}
                className="bg-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
                style={{ color: primaryColor }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
              >
                {translations.footer?.cta?.signUpNow}
              </a>
              <a
                href={getMeetingUrl(currentLanguage)}
                className="border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = primaryColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                {translations.footer?.cta?.scheduleDemo}
              </a>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
