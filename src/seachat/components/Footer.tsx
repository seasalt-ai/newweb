import { Twitter, Linkedin, Mail, Phone, MapPin, Youtube, Heart, Coffee, Umbrella, Plane, Gem, MessageSquare, Users, Shield, Bot, Brain, Database, BarChart3, Code, Globe, Settings, ShoppingCart, DollarSign, GraduationCap, Building2, Monitor, Briefcase, Book, Server } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
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

  const companyLinks = [
    { name: t('header.blog'), href: `/${currentLanguage}/blog`, icon: MessageSquare },
    { name: t('header.pricing'), href: `/${currentLanguage}/seachat/pricing`, icon: DollarSign },
    { name: t('header.compareUs'), href: `/${currentLanguage}/compare-us-overview`, icon: BarChart3 },
    { name: 'Product Wiki', href: 'https://wiki.seasalt.ai/seachat', icon: Book },
    { name: 'API References', href: 'https://api.seasalt.ai', icon: Server },
    { name: 'Careers', href: `/${currentLanguage}/careers`, icon: Briefcase },
    { name: t('footer.company.about'), href: `/${currentLanguage}/company`, icon: Building2 }
  ];

  return (
    <footer className="bg-gray-900 text-white" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src="/seachat-logo.png" alt="SeaChat Logo" className="h-8 brightness-0 invert" />
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your customer support with the perfect blend of human agents and AI automation. 
              Start free, scale smart, succeed faster.
            </p>
            
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
            <h3 className="text-lg font-semibold mb-6">{t('seachat.header.features')}</h3>
            <ul className="space-y-3">
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
          </div>

          {/* Integrations */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('seachat.header.integrations')}</h3>
            <ul className="space-y-3">
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
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('seachat.header.solutions')}</h3>
            <ul className="space-y-3">
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
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.company.title')}</h3>
            <ul className="space-y-3">
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
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
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
                <MessageSquare className="w-4 h-4 mr-1" />
                5M+ Messages Daily
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                100K+ Active Users
              </span>
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                99.9% Uptime
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
            Ready to Transform Your Customer Support?
          </h3>
          <p className="text-white opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands of businesses using SeaChat to deliver exceptional customer experiences with AI-powered chat support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              className="bg-white text-teal-600 hover:bg-gray-50 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
            >
              Sign Up Free
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
            >
              Schedule Demo
            </a>
          </div>
          <p className="text-sm text-white opacity-75 mt-4">
            No credit card required • Setup in 2 minutes • Cancel anytime
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
