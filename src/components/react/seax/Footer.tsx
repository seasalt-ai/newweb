import { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, BarChart3, Heart, Coffee, Umbrella, Plane, Gem, Linkedin, Youtube, Twitter, MessageCircle, Monitor, Instagram, FileText, Smartphone, Globe, Briefcase, Building, DollarSign, Book, Server, Newspaper, ChevronDown, Target, Zap, Users, Calendar, AlertTriangle, ShoppingCart, Vote, Building2, Hash } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
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
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;
  
  // Helper function to get the correct Wiki URL based on language
  const getWikiUrl = () => {
    const wikiLanguage = (currentLanguage === 'zh-TW' || currentLanguage === 'zh-CN') ? 'zh' : 'en';
    return `https://wiki.seasalt.ai/${wikiLanguage}/seax`;
  };
  
  const getMeetingUrl = () => {
    const meetingUrls = {
      'zh-TW': 'https://calendly.com/seasalt-ai-tw/seasalt-ai-demo',
      'zh-CN': 'https://calendly.com/seasalt-ai-cn/seasalt-ai-demo',
      'en': 'https://calendly.com/seasalt-ai/seasalt-ai-demo'
    };
    return meetingUrls[currentLanguage as keyof typeof meetingUrls] || meetingUrls.en;
  };
  
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

  const channelLinks = [
    { name: translations.footer?.links?.channels?.smsOverview || 'SMS Overview', path: '/channels/sms', icon: MessageSquare, iconText: 'SMS', isParent: true },
    { name: translations.footer?.links?.channels?.smsLocal || 'Local Number', path: '/channels/sms-local', icon: Building2, iconText: '10DLC', isChild: true },
    { name: translations.footer?.links?.channels?.smsTollFree || 'Toll-Free', path: '/channels/sms-toll-free', icon: Phone, iconText: '8XX', isChild: true },
    { name: translations.footer?.links?.channels?.smsShortCode || 'Short Code', path: '/channels/sms-short-code', icon: Hash, iconText: 'xxxxx', isChild: true },
    { name: translations.footer?.links?.channels?.whatsapp || 'WhatsApp Business', path: '/channels/whatsapp', icon: WhatsAppIcon },
    { name: translations.footer?.links?.channels?.voice || 'Phone Call & Voice', path: '/channels/voice', icon: Phone }
  ];

  const solutionLinks = [
    { name: translations.footer?.links?.solutions?.leadGeneration || 'Lead Generation', path: '/solutions/lead-generation', icon: Target },
    { name: translations.footer?.links?.solutions?.marketingAutomation || 'Marketing Automation', path: '/solutions/marketing-automation', icon: Zap },
    { name: translations.footer?.links?.solutions?.customerEngagement || 'Customer Engagement', path: '/solutions/customer-engagement', icon: Users },
    { name: translations.footer?.links?.solutions?.appointmentReminders || 'Appointment Reminders', path: '/solutions/appointment-reminders', icon: Calendar },
    { name: translations.footer?.links?.solutions?.emergencyAlerts || 'Emergency Alerts', path: '/solutions/emergency-alerts', icon: AlertTriangle }
  ];

  const industryLinks = [
    { name: translations.footer?.links?.industries?.ecommerceRetail || 'E-commerce & Retail', path: '/industries/ecommerce-retail', icon: ShoppingCart },
    { name: translations.footer?.links?.industries?.realEstate || 'Real Estate', path: '/industries/real-estate', icon: Building2 },
    { name: translations.footer?.links?.industries?.politicalCampaigns || 'Political Campaigns', path: '/industries/political-campaigns', icon: Vote },
    { name: translations.footer?.links?.industries?.healthcare || 'Healthcare', path: '/industries/healthcare', icon: Heart },
    { name: translations.footer?.links?.industries?.financialServices || 'Financial Services', path: '/industries/financial-services', icon: DollarSign }
  ];

  const companyLinks = [
    { name: translations.header?.blog || 'Blog', href: `/${currentLanguage}/blog`, icon: MessageSquare },
    { name: translations.header?.pricing || 'Pricing', href: getLocalizedPath('/pricing'), icon: DollarSign },
    { name: translations.header?.compareUs || 'Compare Us', href: `/${currentLanguage}/compare-us-overview`, icon: BarChart3 },
    { name: translations.footer?.links?.company?.productWiki || 'Product Wiki', href: getWikiUrl(), icon: Book },
    { name: translations.footer?.links?.company?.apiReferences || 'API References', href: 'https://api.seasalt.ai', icon: Server },
    { name: translations.footer?.links?.company?.careers || 'Careers', href: `/${currentLanguage}/careers`, icon: Briefcase },
    { name: translations.footer?.company?.about || 'About', href: `/${currentLanguage}/company`, icon: Building2 }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/seax-logo.png" 
                alt={translations.footer?.logo?.alt || 'SeaX'}
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              {translations.footer?.description?.company || 'AI-powered SMS and voice communication platform for businesses'}
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">{translations.footer?.contact?.phone || '+1 (SMB)-AI-AGENT'}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">{translations.footer?.contact?.email || 'info@seasalt.ai'}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">{translations.footer?.contact?.location || 'Seattle, WA'}</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/company/seasalt-ai/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@seasaltai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/SeasaltAI" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://discord.gg/VgAWg3c7rU" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                <FaDiscord className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Channels */}
          <div>
            {/* Desktop: Regular heading */}
            <h3 className="hidden lg:block text-base sm:text-lg font-semibold mb-4 sm:mb-6">{translations.footer?.section?.channels || 'Channels'}</h3>
            
            {/* Mobile: Collapsible heading */}
            <button 
              onClick={() => toggleMobileSection('channels')}
              className="lg:hidden flex items-center justify-between w-full text-base sm:text-lg font-semibold mb-4 text-left"
            >
              {translations.footer?.section?.channels || 'Channels'}
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
                          <span className="text-xs font-mono font-bold text-blue-400">
                            {link.iconText}
                          </span>
                        ) : (
                          <link.icon className="w-3 h-3 text-blue-400" />
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
                                <span className="text-xs font-mono font-bold text-blue-400">
                                  {link.iconText}
                                </span>
                              ) : (
                                <link.icon className="w-3 h-3 text-blue-400" />
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

          {/* Solutions */}
          <div>
            {/* Desktop: Regular heading */}
            <h3 className="hidden lg:block text-base sm:text-lg font-semibold mb-4 sm:mb-6">{translations.footer?.section?.solutions || 'Solutions'}</h3>
            
            {/* Mobile: Collapsible heading */}
            <button 
              onClick={() => toggleMobileSection('solutions')}
              className="lg:hidden flex items-center justify-between w-full text-base sm:text-lg font-semibold mb-4 text-left"
            >
              {translations.footer?.section?.solutions || 'Solutions'}
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
                    <link.icon className="h-3 w-3 mr-2 text-blue-400" />
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
                          <link.icon className="h-3 w-3 mr-2 text-blue-400" />
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Industries */}
          <div>
            {/* Desktop: Regular heading */}
            <h3 className="hidden lg:block text-base sm:text-lg font-semibold mb-4 sm:mb-6">{translations.footer?.section?.industries || 'Industries'}</h3>
            
            {/* Mobile: Collapsible heading */}
            <button 
              onClick={() => toggleMobileSection('industries')}
              className="lg:hidden flex items-center justify-between w-full text-base sm:text-lg font-semibold mb-4 text-left"
            >
              {translations.footer?.section?.industries || 'Industries'}
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
                    <link.icon className="h-3 w-3 mr-2 text-blue-400" />
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
                          <link.icon className="h-3 w-3 mr-2 text-blue-400" />
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Company */}
          <div>
            {/* Desktop: Regular heading */}
            <h3 className="hidden lg:block text-base sm:text-lg font-semibold mb-4 sm:mb-6">{translations.footer?.company?.title || 'Company'}</h3>
            
            {/* Mobile: Collapsible heading */}
            <button 
              onClick={() => toggleMobileSection('company')}
              className="lg:hidden flex items-center justify-between w-full text-base sm:text-lg font-semibold mb-4 text-left"
            >
              {translations.footer?.company?.title || 'Company'}
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
                  <Zap className="h-3 w-3 mr-2 text-blue-400" />
                  {translations.footer?.links?.company?.features || 'Features'}
                </a>
              </li>
              <li>
                <a 
                  href={getLocalizedPath('/pricing')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                >
                  <DollarSign className="h-3 w-3 mr-2 text-blue-400" />
                  {translations.footer?.links?.company?.pricing || 'Pricing'}
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
                      <link.icon className="h-3 w-3 mr-2 text-blue-400" />
                      {link.name}
                    </a>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                    >
                      <link.icon className="h-3 w-3 mr-2 text-blue-400" />
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
                        <Zap className="h-3 w-3 mr-2 text-blue-400" />
                        {translations.footer?.links?.company?.features || 'Features'}
                      </a>
                    </li>
                    <li>
                      <a 
                        href={getLocalizedPath('/pricing')}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                      >
                        <DollarSign className="h-3 w-3 mr-2 text-blue-400" />
                        {translations.footer?.links?.company?.pricing || 'Pricing'}
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
                            <link.icon className="h-3 w-3 mr-2 text-blue-400" />
                            {link.name}
                          </a>
                        ) : (
                          <a 
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                          >
                            <link.icon className="h-3 w-3 mr-2 text-blue-400" />
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
                {translations.footer?.copyright?.replace('{{year}}', new Date().getFullYear().toString()) || `© ${new Date().getFullYear()} SeaX by Seasalt.ai. All rights reserved.`}
              </p>
              <div className="flex space-x-3 sm:space-x-4 text-xs sm:text-sm">
                <a href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {translations.footer?.legal?.privacyPolicy || 'Privacy Policy'}
                </a>
                <a href="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {translations.footer?.legal?.termsOfService || 'Terms of Service'}
                </a>
              </div>
            </div>
            
            {/* Compliance & Stats */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300">
              <span className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-1" />
                {translations.footer?.stats?.messagesDaily || '1M+ messages daily'}
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {translations.footer?.stats?.activeUsers || '10K+ active users'}
              </span>
              <span className="flex items-center">
                <Target className="w-4 h-4 mr-1" />
                {translations.footer?.stats?.uptime || '99.9% uptime'}
              </span>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-300 text-sm">
              {translations.footer?.madeWith?.text || 'Made with'} <Heart className="inline w-4 h-4 text-red-500" /> {translations.footer?.madeWith?.inCityOf || 'in the city of'}{' '}
              <Coffee className="inline w-4 h-4 text-amber-700" />{' '}
              <Umbrella className="inline w-4 h-4 text-blue-400" />{' '}
              <Plane className="inline w-4 h-4 text-gray-500" />{' '}
              <Gem className="inline w-4 h-4 text-fuchsia-500" />
            </p>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            {translations.footer?.cta?.title || 'Ready to supercharge your business communication?'}
          </h3>
          <p className="text-white opacity-90 mb-6 max-w-2xl mx-auto">
            {translations.footer?.cta?.subtitle || 'Join thousands of businesses using SeaX to streamline their SMS and voice communications.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              className="bg-white text-blue-600 hover:bg-gray-50 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
            >
              {translations.footer?.cta?.signUpNow || 'Sign Up Now'}
            </a>
            <a
              href={getMeetingUrl()}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
            >
              {translations.footer?.cta?.scheduleDemo || 'Schedule Demo'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
