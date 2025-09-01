import { Twitter, Linkedin, Mail, Phone, MapPin, Youtube, Heart, Coffee, Umbrella, Plane, Gem, MessageSquare, Users, Shield, Bot, Brain, Database, BarChart3, Code, Globe, Settings, ShoppingCart, DollarSign, GraduationCap, Building2, Monitor, Briefcase, Book, Server, ChevronDown } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // Mobile collapsible state
  const [mobileCollapsed, setMobileCollapsed] = useState({
    features: true,
    integrations: true,
    solutions: true,
    company: true
  });
  
  const toggleMobileSection = (section: 'features' | 'integrations' | 'solutions' | 'company') => {
    setMobileCollapsed(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  const featuresLinks = [
    { name: t('seachat.header.featuresDropdown.humanAgents'), href: `/${currentLanguage}/seachat/features/human-agents`, icon: Users },
    { name: t('seachat.header.featuresDropdown.aiAutomation'), href: `/${currentLanguage}/seachat/features/ai-automation`, icon: Bot },
    { name: t('seachat.header.featuresDropdown.advancedAI'), href: `/${currentLanguage}/seachat/features/advanced-ai`, icon: Brain },
    { name: t('seachat.header.featuresDropdown.knowledgeBase'), href: `/${currentLanguage}/seachat/features/knowledge-base`, icon: Database },
    { name: t('seachat.header.featuresDropdown.voiceAgents'), href: `/${currentLanguage}/seachat/features/voice-agents`, icon: Phone },
    { name: t('seachat.header.featuresDropdown.analytics'), href: `/${currentLanguage}/seachat/features/analytics`, icon: BarChart3 },
    { name: t('seachat.header.featuresDropdown.omnichannel'), href: `/${currentLanguage}/seachat/features/omnichannel`, icon: MessageSquare },
    { name: t('seachat.header.featuresDropdown.api'), href: `/${currentLanguage}/seachat/features/api`, icon: Code }
  ];

  const integrationsLinks = [
    { name: t('seachat.header.integrationsDropdown.websites'), href: `/${currentLanguage}/seachat/integrations/websites`, icon: Globe },
    { name: t('seachat.header.integrationsDropdown.crm'), href: `/${currentLanguage}/seachat/integrations/crm`, icon: Users },
    { name: t('seachat.header.integrationsDropdown.ecommerce'), href: `/${currentLanguage}/seachat/integrations/ecommerce`, icon: ShoppingCart },
    { name: t('seachat.header.integrationsDropdown.socialMedia'), href: `/${currentLanguage}/seachat/integrations/social-media`, icon: MessageSquare },
    { name: t('seachat.header.integrationsDropdown.communication'), href: `/${currentLanguage}/seachat/integrations/communication`, icon: Phone },
    { name: t('seachat.header.integrationsDropdown.marketing'), href: `/${currentLanguage}/seachat/integrations/marketing`, icon: BarChart3 },
    { name: t('seachat.header.integrationsDropdown.calendar'), href: `/${currentLanguage}/seachat/integrations/calendar`, icon: Settings },
    { name: t('seachat.header.integrationsDropdown.api'), href: `/${currentLanguage}/seachat/integrations/api`, icon: Code }
  ];

  const solutionsLinks = [
    { name: t('seachat.header.solutionsDropdown.ecommerce'), href: `/${currentLanguage}/seachat/solutions/ecommerce`, icon: ShoppingCart },
    { name: t('seachat.header.solutionsDropdown.healthcare'), href: `/${currentLanguage}/seachat/solutions/healthcare`, icon: Heart },
    { name: t('seachat.header.solutionsDropdown.fintech'), href: `/${currentLanguage}/seachat/solutions/fintech`, icon: DollarSign },
    { name: t('seachat.header.solutionsDropdown.education'), href: `/${currentLanguage}/seachat/solutions/education`, icon: GraduationCap },
    { name: t('seachat.header.solutionsDropdown.realEstate'), href: `/${currentLanguage}/seachat/solutions/real-estate`, icon: Building2 },
    { name: t('seachat.header.solutionsDropdown.travel'), href: `/${currentLanguage}/seachat/solutions/travel`, icon: MapPin },
    { name: t('seachat.header.solutionsDropdown.saas'), href: `/${currentLanguage}/seachat/solutions/saas`, icon: Monitor },
    { name: t('seachat.header.solutionsDropdown.smallBusiness'), href: `/${currentLanguage}/seachat/solutions/small-business`, icon: Briefcase }
  ];

  // Helper function to get the correct SeaChat Wiki URL based on language
  const getSeaChatWikiUrl = () => {
    // For Chinese languages (zh-TW and zh-CN), use 'zh' for the Wiki URL
    // For all other languages, use 'en' for the Wiki URL
    const wikiLanguage = (currentLanguage === 'zh-TW' || currentLanguage === 'zh-CN') ? 'zh' : 'en';
    return `https://wiki.seasalt.ai/${wikiLanguage}/seachat`;
  };

  const companyLinks = [
    { name: t('header.blog'), href: `/${currentLanguage}/blog`, icon: MessageSquare },
    { name: t('header.pricing'), href: `/${currentLanguage}/seachat/pricing`, icon: DollarSign },
    { name: t('header.compareUs'), href: `/${currentLanguage}/compare-us-overview`, icon: BarChart3 },
    { name: t('seachat.footer.company.productWiki'), href: getSeaChatWikiUrl(), icon: Book },
    { name: t('seachat.footer.company.apiReferences'), href: 'https://api.seasalt.ai', icon: Server },
    { name: t('seachat.footer.company.careers'), href: `/${currentLanguage}/careers`, icon: Briefcase },
    { name: t('seachat.footer.company.about'), href: `/${currentLanguage}/company`, icon: Building2 }
  ];

  return (
    <footer className="bg-gray-900 text-white" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src="/seachat-logo.png" alt="SeaChat Logo" className="h-8 brightness-0 invert" />
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('seachat.footer.brand.description')}
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>{t('seachat.footer.contact.email')}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>{t('seachat.footer.contact.phone')}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>{t('seachat.footer.contact.location')}</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/seasalt-ai/" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@seasaltai" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/SeasaltAI" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://discord.gg/VgAWg3c7rU" className="text-gray-400 hover:text-teal-400 transition-colors">
                <FaDiscord className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            {/* Desktop: Regular heading */}
            <h3 className="hidden lg:block text-lg font-semibold mb-6">{t('seachat.header.features')}</h3>
            
            {/* Mobile: Collapsible heading */}
            <button 
              onClick={() => toggleMobileSection('features')}
              className="lg:hidden flex items-center justify-between w-full text-lg font-semibold mb-4 text-left"
            >
              {t('seachat.header.features')}
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileCollapsed.features ? '' : 'rotate-180'}`} />
            </button>
            
            {/* Desktop: Always visible */}
            <ul className="hidden lg:block space-y-3">
              {featuresLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <link.icon className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Mobile: Collapsible content */}
            <div className="lg:hidden">
              <AnimatePresence>
                {!mobileCollapsed.features && (
                  <motion.ul 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3 overflow-hidden"
                  >
                    {featuresLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-white transition-colors flex items-center"
                        >
                          <link.icon className="w-4 h-4 mr-2" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Integrations */}
          <div>
            {/* Desktop: Regular heading */}
            <h3 className="hidden lg:block text-lg font-semibold mb-6">{t('seachat.header.integrations')}</h3>
            
            {/* Mobile: Collapsible heading */}
            <button 
              onClick={() => toggleMobileSection('integrations')}
              className="lg:hidden flex items-center justify-between w-full text-lg font-semibold mb-4 text-left"
            >
              {t('seachat.header.integrations')}
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileCollapsed.integrations ? '' : 'rotate-180'}`} />
            </button>
            
            {/* Desktop: Always visible */}
            <ul className="hidden lg:block space-y-3">
              {integrationsLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <link.icon className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Mobile: Collapsible content */}
            <div className="lg:hidden">
              <AnimatePresence>
                {!mobileCollapsed.integrations && (
                  <motion.ul 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3 overflow-hidden"
                  >
                    {integrationsLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-white transition-colors flex items-center"
                        >
                          <link.icon className="w-4 h-4 mr-2" />
                          {link.name}
                        </Link>
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
            <h3 className="hidden lg:block text-lg font-semibold mb-6">{t('seachat.header.solutions')}</h3>
            
            {/* Mobile: Collapsible heading */}
            <button 
              onClick={() => toggleMobileSection('solutions')}
              className="lg:hidden flex items-center justify-between w-full text-lg font-semibold mb-4 text-left"
            >
              {t('seachat.header.solutions')}
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileCollapsed.solutions ? '' : 'rotate-180'}`} />
            </button>
            
            {/* Desktop: Always visible */}
            <ul className="hidden lg:block space-y-3">
              {solutionsLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <link.icon className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
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
                    className="space-y-3 overflow-hidden"
                  >
                    {solutionsLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-white transition-colors flex items-center"
                        >
                          <link.icon className="w-4 h-4 mr-2" />
                          {link.name}
                        </Link>
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
            <h3 className="hidden lg:block text-lg font-semibold mb-6">{t('seachat.footer.company.title')}</h3>
            
            {/* Mobile: Collapsible heading */}
            <button 
              onClick={() => toggleMobileSection('company')}
              className="lg:hidden flex items-center justify-between w-full text-lg font-semibold mb-4 text-left"
            >
              {t('seachat.footer.company.title')}
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileCollapsed.company ? '' : 'rotate-180'}`} />
            </button>
            
            {/* Desktop: Always visible */}
            <ul className="hidden lg:block space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('http') ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                    >
                      <link.icon className="w-4 h-4 mr-2" />
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                    >
                      <link.icon className="w-4 h-4 mr-2" />
                      {link.name}
                    </Link>
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
                    className="space-y-3 overflow-hidden"
                  >
                    {companyLinks.map((link) => (
                      <li key={link.name}>
                        {link.href.startsWith('http') ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors flex items-center"
                          >
                            <link.icon className="w-4 h-4 mr-2" />
                            {link.name}
                          </a>
                        ) : (
                          <Link
                            to={link.href}
                            className="text-gray-400 hover:text-white transition-colors flex items-center"
                          >
                            <link.icon className="w-4 h-4 mr-2" />
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-2 lg:mb-0">
              <p className="text-gray-300 text-sm">
                {t('seachat.footer.copyright', { year: new Date().getFullYear() })}
              </p>
              <div className="flex space-x-3 sm:space-x-4 text-xs sm:text-sm">
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('seachat.footer.legal.privacyPolicy')}
                </Link>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('seachat.footer.legal.termsOfService')}
                </Link>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300">
              <span className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-1" />
                {t('seachat.footer.stats.messagesDaily')}
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {t('seachat.footer.stats.activeUsers')}
              </span>
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                {t('seachat.footer.stats.uptime')}
              </span>
            </div>
          </div>
          
          {/* Fun Footer Tagline */}
          <div className="text-center text-gray-400 text-sm mt-8">
            <p>
              Made with <Heart className="inline w-4 h-4 text-red-500" /> in the city of{' '}
              <Coffee className="inline w-4 h-4 text-amber-700" />{' '}
              <Umbrella className="inline w-4 h-4 text-blue-400" />{' '}
              <Plane className="inline w-4 h-4 text-gray-500" />{' '}
              <Gem className="inline w-4 h-4 text-fuchsia-500" />
            </p>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            {t('seachat.footer.cta.title')}
          </h3>
          <p className="text-white opacity-90 mb-6 max-w-2xl mx-auto">
            {t('seachat.footer.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              className="bg-white text-teal-600 hover:bg-gray-50 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
            >
              {t('seachat.footer.cta.signUpFree')}
            </a>
            <a
              href={getMeetingUrl(currentLanguage)}
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
            >
              {t('seachat.footer.cta.scheduleDemo')}
            </a>
          </div>
          <p className="text-sm text-white opacity-75 mt-4">
            {t('seachat.footer.cta.disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
