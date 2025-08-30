import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin, Heart, Coffee, Umbrella, Plane, Gem, PhoneCall, Users, Activity, Monitor, Wifi, MessageSquare, Mic, MicOff, Brain, Bot, ArrowRightLeft, Zap, Shield, Headphones, Package, CreditCard, Calendar, Target, DollarSign, UserCheck, Clock, Megaphone, Headset, RefreshCw, BarChart3, Book, Server, Briefcase, Building2, ChevronDown, Volume2, AudioLines, MessageCircle } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // Mobile collapsible state
  const [mobileCollapsed, setMobileCollapsed] = useState({
    platform: true,
    inboundSolutions: true,
    outboundSolutions: true,
    company: true
  });
  
  const toggleMobileSection = (section: 'platform' | 'inboundSolutions' | 'outboundSolutions' | 'company') => {
    setMobileCollapsed(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  const platformLinks = [
    { name: t('seavoice.footer.platform.overview'), href: `/${currentLanguage}/seavoice/platform`, icon: Monitor },
    { name: t('seavoice.footer.platform.landlineMobile'), href: `/${currentLanguage}/seavoice/platform/landline-mobile`, icon: Phone },
    { name: t('seavoice.footer.platform.voipSipByoc'), href: `/${currentLanguage}/seavoice/platform/voip-sip-byoc`, icon: Wifi },
    { name: t('seavoice.footer.platform.lineCallPlus'), href: `/${currentLanguage}/seavoice/platform/line-call-plus`, icon: PhoneCall },
    { name: t('seavoice.footer.platform.whatsAppVoice'), href: `/${currentLanguage}/seavoice/platform/whatsapp-voice`, icon: MessageCircle },
    { name: t('seavoice.footer.platform.speechToText'), href: `/${currentLanguage}/seavoice/platform/speech-to-text`, icon: AudioLines },
    { name: t('seavoice.footer.platform.textToSpeech'), href: `/${currentLanguage}/seavoice/platform/text-to-speech`, icon: Volume2 },
    { name: t('seavoice.footer.platform.endToEndLlms'), href: `/${currentLanguage}/seavoice/platform/end-to-end-llms`, icon: Brain },
  ];

  const inboundSolutionsLinks = [
    { name: t('seavoice.footer.inboundSolutions.virtualAssistant'), href: `/${currentLanguage}/seavoice/solutions/inbound/virtual-assistant`, icon: Bot },
    { name: t('seavoice.footer.inboundSolutions.callTransfer'), href: `/${currentLanguage}/seavoice/solutions/inbound/call-transfer`, icon: ArrowRightLeft },
    { name: t('seavoice.footer.inboundSolutions.ivrReplacement'), href: `/${currentLanguage}/seavoice/solutions/inbound/ivr-replacement`, icon: Zap },
    { name: t('seavoice.footer.inboundSolutions.mentalHealth'), href: `/${currentLanguage}/seavoice/solutions/inbound/mental-health`, icon: Heart },
    { name: t('seavoice.footer.inboundSolutions.scamShield'), href: `/${currentLanguage}/seavoice/solutions/inbound/scam-shield`, icon: Shield },
    { name: t('seavoice.footer.inboundSolutions.technicalSupport'), href: `/${currentLanguage}/seavoice/solutions/inbound/technical-support`, icon: Headphones },
    { name: t('seavoice.footer.inboundSolutions.orderTracking'), href: `/${currentLanguage}/seavoice/solutions/inbound/order-tracking`, icon: Package },
    { name: t('seavoice.footer.inboundSolutions.paymentProcessing'), href: `/${currentLanguage}/seavoice/solutions/inbound/payment-processing`, icon: CreditCard },
    { name: t('seavoice.footer.inboundSolutions.appointmentBooking'), href: `/${currentLanguage}/seavoice/solutions/inbound/appointment-booking`, icon: Calendar },
  ];

  const outboundSolutionsLinks = [
    { name: t('seavoice.footer.outboundSolutions.leadGeneration'), href: `/${currentLanguage}/seavoice/solutions/outbound/lead-generation`, icon: Target },
    { name: t('seavoice.footer.outboundSolutions.collections'), href: `/${currentLanguage}/seavoice/solutions/outbound/collections`, icon: DollarSign },
    { name: t('seavoice.footer.outboundSolutions.reactivation'), href: `/${currentLanguage}/seavoice/solutions/outbound/reactivation`, icon: UserCheck },
    { name: t('seavoice.footer.outboundSolutions.seniorChecks'), href: `/${currentLanguage}/seavoice/solutions/outbound/senior-checks`, icon: Clock },
    { name: t('seavoice.footer.outboundSolutions.campaigns'), href: `/${currentLanguage}/seavoice/solutions/outbound/campaigns`, icon: Megaphone },
    { name: t('seavoice.footer.outboundSolutions.proactiveSupport'), href: `/${currentLanguage}/seavoice/solutions/outbound/proactive-support`, icon: Headset },
    { name: t('seavoice.footer.outboundSolutions.renewals'), href: `/${currentLanguage}/seavoice/solutions/outbound/renewals`, icon: RefreshCw },
    { name: t('seavoice.footer.outboundSolutions.surveys'), href: `/${currentLanguage}/seavoice/solutions/outbound/surveys`, icon: Mail },
    { name: t('seavoice.footer.outboundSolutions.fraudAlerts'), href: `/${currentLanguage}/seavoice/solutions/outbound/fraud-alerts`, icon: Shield },
  ];

  const companyLinks = [
    { name: t('header.blog'), href: `/${currentLanguage}/blog`, icon: MessageSquare },
    { name: t('seavoice.footer.company.pricing'), href: `/${currentLanguage}/seavoice/pricing`, icon: DollarSign },
    { name: t('header.compareUs'), href: `/${currentLanguage}/compare-us-overview`, icon: BarChart3 },
    { name: t('seavoice.footer.company.productWiki'), href: 'https://wiki.seasalt.ai', icon: Book },
    { name: t('seavoice.footer.company.apiReferences'), href: 'https://api.seasalt.ai', icon: Server },
    { name: t('footer.company.careers'), href: `/${currentLanguage}/careers`, icon: Briefcase },
    { name: t('footer.company.about'), href: `/${currentLanguage}/company`, icon: Building2 },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/seavoice" className="flex items-center mb-4">
              <img 
                src="/seavoice-logo.png" 
                alt="SeaVoice Logo" 
                className="h-8 brightness-0 invert" 
              />
            </Link>
            <p className="text-gray-400 mb-6">
              {t('seavoice.footer.description')}
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>info@seasalt.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 (SMB)-AI-AGENT</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Seattle, WA</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/seasalt-ai/" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@seasaltai" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/SeasaltAI" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://discord.gg/VgAWg3c7rU" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaDiscord className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            {/* Desktop: Regular heading */}
            <h3 className="hidden lg:block text-sm font-semibold uppercase tracking-wider mb-4">
              {t('seavoice.footer.platform.title')}
            </h3>
            
            {/* Mobile: Collapsible heading */}
            <button 
              onClick={() => toggleMobileSection('platform')}
              className="lg:hidden flex items-center justify-between w-full text-sm font-semibold uppercase tracking-wider mb-4 text-left"
            >
              {t('seavoice.footer.platform.title')}
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileCollapsed.platform ? '' : 'rotate-180'}`} />
            </button>
            
            {/* Desktop: Always visible */}
            <ul className="hidden lg:block space-y-2">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
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
                {!mobileCollapsed.platform && (
                  <motion.ul 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 overflow-hidden"
                  >
                    {platformLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
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

          {/* Inbound Solutions Links */}
          <div>
            {/* Desktop: Regular heading */}
            <h3 className="hidden lg:block text-sm font-semibold uppercase tracking-wider mb-4">
              {t('seavoice.footer.inboundSolutions.title')}
            </h3>
            
            {/* Mobile: Collapsible heading */}
            <button 
              onClick={() => toggleMobileSection('inboundSolutions')}
              className="lg:hidden flex items-center justify-between w-full text-sm font-semibold uppercase tracking-wider mb-4 text-left"
            >
              {t('seavoice.footer.inboundSolutions.title')}
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileCollapsed.inboundSolutions ? '' : 'rotate-180'}`} />
            </button>
            
            {/* Desktop: Always visible */}
            <ul className="hidden lg:block space-y-2">
              {inboundSolutionsLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
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
                {!mobileCollapsed.inboundSolutions && (
                  <motion.ul 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 overflow-hidden"
                  >
                    {inboundSolutionsLinks.slice(0, 6).map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
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

          {/* Outbound Solutions Links */}
          <div>
            {/* Desktop: Regular heading */}
            <h3 className="hidden lg:block text-sm font-semibold uppercase tracking-wider mb-4">
              {t('seavoice.footer.outboundSolutions.title')}
            </h3>
            
            {/* Mobile: Collapsible heading */}
            <button 
              onClick={() => toggleMobileSection('outboundSolutions')}
              className="lg:hidden flex items-center justify-between w-full text-sm font-semibold uppercase tracking-wider mb-4 text-left"
            >
              {t('seavoice.footer.outboundSolutions.title')}
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileCollapsed.outboundSolutions ? '' : 'rotate-180'}`} />
            </button>
            
            {/* Desktop: Always visible */}
            <ul className="hidden lg:block space-y-2">
              {outboundSolutionsLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
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
                {!mobileCollapsed.outboundSolutions && (
                  <motion.ul 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 overflow-hidden"
                  >
                    {outboundSolutionsLinks.slice(0, 6).map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
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

          {/* Company Links */}
          <div>
            {/* Desktop: Regular heading */}
            <h3 className="hidden lg:block text-sm font-semibold uppercase tracking-wider mb-4">
              {t('seavoice.footer.company.title')}
            </h3>
            
            {/* Mobile: Collapsible heading */}
            <button 
              onClick={() => toggleMobileSection('company')}
              className="lg:hidden flex items-center justify-between w-full text-sm font-semibold uppercase tracking-wider mb-4 text-left"
            >
              {t('seavoice.footer.company.title')}
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileCollapsed.company ? '' : 'rotate-180'}`} />
            </button>
            
            {/* Desktop: Always visible */}
            <ul className="hidden lg:block space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('http') ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                    >
                      <link.icon className="w-4 h-4 mr-2" />
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
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
                    className="space-y-2 overflow-hidden"
                  >
                    {companyLinks.map((link) => (
                      <li key={link.name}>
                        {link.href.startsWith('http') ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                          >
                            <link.icon className="w-4 h-4 mr-2" />
                            {link.name}
                          </a>
                        ) : (
                          <Link
                            to={link.href}
                            className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
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
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-2 lg:mb-0">
              <p className="text-gray-300 text-sm">
                {t('seavoice.footer.legal.copyright', { year: new Date().getFullYear() })}
              </p>
              <div className="flex space-x-3 sm:space-x-4 text-xs sm:text-sm">
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('seavoice.footer.legal.privacyPolicy')}
                </Link>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('seavoice.footer.legal.termsOfService')}
                </Link>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300">
              <span className="flex items-center">
                <PhoneCall className="w-4 h-4 mr-1" />
                {t('seavoice.footer.stats.callsHandled')}
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {t('seavoice.footer.stats.activeAgents')}
              </span>
              <span className="flex items-center">
                <Activity className="w-4 h-4 mr-1" />
                {t('seavoice.footer.stats.uptime')}
              </span>
            </div>
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

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            {t('seavoice.footer.cta.title')}
          </h3>
          <p className="text-white opacity-90 mb-6 max-w-2xl mx-auto">
            {t('seavoice.footer.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              className="bg-white text-blue-600 hover:bg-gray-50 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
            >
              {t('seavoice.footer.cta.getStartedFree')}
            </a>
            <a
              href={getMeetingUrl(currentLanguage)}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
            >
              {t('seavoice.footer.cta.bookDemo')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
