import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin, Heart, Coffee, Umbrella, Plane, Gem, PhoneCall, Users, Activity, Monitor, Wifi, MessageSquare, Mic, MicOff, Brain, Bot, ArrowRightLeft, Zap, Shield, Headphones, Package, CreditCard, Calendar, Target, DollarSign, UserCheck, Clock, Megaphone, Headset, RefreshCw, BarChart3, Book, Server, Briefcase, Building2 } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const platformLinks = [
    { name: t('platform.overview'), href: `/${currentLanguage}/seavoice/platform`, icon: Monitor },
    { name: t('platform.landlineMobile'), href: `/${currentLanguage}/seavoice/platform/landline-mobile`, icon: Phone },
    { name: t('platform.voipSIP'), href: `/${currentLanguage}/seavoice/platform/voip-sip-byoc`, icon: Wifi },
    { name: t('platform.lineCallPlus'), href: `/${currentLanguage}/seavoice/platform/line-call-plus`, icon: MessageSquare },
    { name: t('platform.whatsappVoice'), href: `/${currentLanguage}/seavoice/platform/whatsapp-voice`, icon: MessageSquare },
    { name: t('platform.speechToText'), href: `/${currentLanguage}/seavoice/platform/speech-to-text`, icon: MicOff },
    { name: t('platform.textToSpeech'), href: `/${currentLanguage}/seavoice/platform/text-to-speech`, icon: Mic },
    { name: t('platform.endToEndLLMs'), href: `/${currentLanguage}/seavoice/platform/end-to-end-llms`, icon: Brain }
  ];

  const inboundSolutionsLinks = [
    { name: '24/7 Virtual Assistant', href: `/${currentLanguage}/seavoice/solutions/inbound/virtual-assistant`, icon: Bot },
    { name: 'Smart Call Transfer', href: `/${currentLanguage}/seavoice/solutions/inbound/call-transfer`, icon: ArrowRightLeft },
    { name: 'IVR Replacement', href: `/${currentLanguage}/seavoice/solutions/inbound/ivr-replacement`, icon: Zap },
    { name: 'Mental Health Companion', href: `/${currentLanguage}/seavoice/solutions/inbound/mental-health`, icon: Heart },
    { name: 'Scam Shield Protection', href: `/${currentLanguage}/seavoice/solutions/inbound/scam-shield`, icon: Shield },
    { name: 'Technical Support', href: `/${currentLanguage}/seavoice/solutions/inbound/technical-support`, icon: Headphones },
    { name: 'Order Status & Tracking', href: `/${currentLanguage}/seavoice/solutions/inbound/order-tracking`, icon: Package },
    { name: 'Payment Processing', href: `/${currentLanguage}/seavoice/solutions/inbound/payment-processing`, icon: CreditCard },
    { name: 'Appointment Booking', href: `/${currentLanguage}/seavoice/solutions/inbound/appointment-booking`, icon: Calendar },
  ];

  const outboundSolutionsLinks = [
    { name: 'Lead Generation & Qualification', href: `/${currentLanguage}/seavoice/solutions/outbound/lead-generation`, icon: Target },
    { name: 'Collections Service', href: `/${currentLanguage}/seavoice/solutions/outbound/collections`, icon: DollarSign },
    { name: 'Customer Reactivation', href: `/${currentLanguage}/seavoice/solutions/outbound/reactivation`, icon: UserCheck },
    { name: 'Senior Check Calls', href: `/${currentLanguage}/seavoice/solutions/outbound/senior-checks`, icon: Clock },
    { name: 'Large Scale Campaigns', href: `/${currentLanguage}/seavoice/solutions/outbound/campaigns`, icon: Megaphone },
    { name: 'Proactive Support', href: `/${currentLanguage}/seavoice/solutions/outbound/proactive-support`, icon: Headset },
    { name: 'Subscription Renewals', href: `/${currentLanguage}/seavoice/solutions/outbound/renewals`, icon: RefreshCw },
    { name: 'Customer Surveys', href: `/${currentLanguage}/seavoice/solutions/outbound/surveys`, icon: Mail },
    { name: 'Fraud Alerts', href: `/${currentLanguage}/seavoice/solutions/outbound/fraud-alerts`, icon: Shield },
  ];

  const companyLinks = [
    { name: t('header.blog'), href: `/${currentLanguage}/blog`, icon: MessageSquare },
    { name: 'Pricing', href: `/${currentLanguage}/seavoice/pricing`, icon: DollarSign },
    { name: t('header.compareUs'), href: `/${currentLanguage}/compare-us-overview`, icon: BarChart3 },
    { name: 'Product Wiki', href: 'https://wiki.seasalt.ai', icon: Book },
    { name: 'API References', href: 'https://api.seasalt.ai', icon: Server },
    { name: 'Careers', href: `/${currentLanguage}/careers`, icon: Briefcase },
    { name: t('footer.company.about'), href: `/${currentLanguage}/company`, icon: Building2 },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
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
              Automate 80% of customer calls with AI voice agents that sound human and integrate seamlessly with your business.
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
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Platform
            </h3>
            <ul className="space-y-2">
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
          </div>

          {/* Inbound Solutions Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Inbound Solutions
            </h3>
            <ul className="space-y-2">
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
          </div>

          {/* Outbound Solutions Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Outbound Solutions
            </h3>
            <ul className="space-y-2">
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
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
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
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-2 lg:mb-0">
              <p className="text-gray-300 text-sm">
                © 2020 - {new Date().getFullYear()} Seasalt.ai. All rights reserved.
              </p>
              <div className="flex space-x-3 sm:space-x-4 text-xs sm:text-sm">
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300">
              <span className="flex items-center">
                <PhoneCall className="w-4 h-4 mr-1" />
                1M+ Calls Handled
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                50K+ Active Agents
              </span>
              <span className="flex items-center">
                <Activity className="w-4 h-4 mr-1" />
                99.99% Uptime
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
            Ready to Automate 80% of Your Customer Calls?
          </h3>
          <p className="text-white opacity-90 mb-6 max-w-2xl mx-auto">
            Join hundreds of businesses using SeaVoice AI agents to handle customer calls 24/7, reduce costs, and improve customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              className="bg-white text-blue-600 hover:bg-gray-50 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
            >
              Get Started Free
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
