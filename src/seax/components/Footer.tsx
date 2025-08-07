import { Phone, Mail, MapPin, MessageSquare, Zap, Users, Target, Heart, Coffee, Umbrella, Plane, Gem, Linkedin, Youtube, Twitter, Hash, Building2, Calendar, AlertTriangle, ShoppingCart, Vote, DollarSign, BarChart3, Book, Server, Briefcase } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const channelLinks = [
    { name: t('footer.channels.sms'), path: '/channels/sms', icon: MessageSquare, iconText: 'SMS', isParent: true },
    { name: t('footer.channels.smsLocal'), path: '/channels/sms-local', icon: Building2, iconText: '10DLC', isChild: true },
    { name: t('footer.channels.smsTollFree'), path: '/channels/sms-toll-free', icon: Phone, iconText: '8XX', isChild: true },
    { name: t('footer.channels.smsShortCode'), path: '/channels/sms-short-code', icon: Hash, iconText: 'xxxxx', isChild: true },
    { name: t('footer.channels.whatsapp'), path: '/channels/whatsapp', icon: WhatsAppIcon },
    { name: t('footer.channels.voice'), path: '/channels/voice', icon: Phone }
  ];

  const solutionLinks = [
    { name: t('footer.solutions.leadGeneration'), path: '/solutions/lead-generation', icon: Target },
    { name: t('footer.solutions.marketingAutomation'), path: '/solutions/marketing-automation', icon: Zap },
    { name: t('footer.solutions.customerEngagement'), path: '/solutions/customer-engagement', icon: Users },
    { name: t('footer.solutions.appointmentReminders'), path: '/solutions/appointment-reminders', icon: Calendar },
    { name: t('footer.solutions.emergencyAlerts'), path: '/solutions/emergency-alerts', icon: AlertTriangle }
  ];

  const industryLinks = [
    { name: t('footer.industries.ecommerceRetail'), path: '/industries/ecommerce-retail', icon: ShoppingCart },
    { name: t('footer.industries.realEstate'), path: '/industries/real-estate', icon: Building2 },
    { name: t('footer.industries.politicalCampaigns'), path: '/industries/political-campaigns', icon: Vote },
    { name: t('footer.industries.healthcare'), path: '/industries/healthcare', icon: Heart },
    { name: t('footer.industries.financialServices'), path: '/industries/financial-services', icon: DollarSign }
  ];

  const companyLinks = [
    { name: t('header.blog'), href: `/${currentLanguage}/blog`, icon: MessageSquare },
    { name: t('header.pricing'), href: getLocalizedPath('/pricing'), icon: DollarSign },
    { name: t('header.compareUs'), href: `/${currentLanguage}/compare-us-overview`, icon: BarChart3 },
    { name: 'Product Wiki', href: 'https://wiki.seasalt.ai', icon: Book },
    { name: 'API References', href: 'https://api.seasalt.ai', icon: Server },
    { name: 'Careers', href: `/${currentLanguage}/careers`, icon: Briefcase },
    { name: t('footer.company.about'), href: `/${currentLanguage}/company`, icon: Building2 }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/seax-logo.png" 
                alt="SeaX" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              {t('footer.description')}
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+1 (SMB)-AI-AGENT</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">info@seasalt.ai</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">Seattle, WA</span>
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
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{t('footer.title.channels')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {channelLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={getLocalizedPath(link.path)}
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
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{t('footer.title.solutions')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {solutionLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={getLocalizedPath(link.path)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    <link.icon className="h-3 w-3 mr-2 text-blue-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{t('footer.title.industries')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {industryLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={getLocalizedPath(link.path)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    <link.icon className="h-3 w-3 mr-2 text-blue-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{t('footer.company.title')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {/* Features and Pricing first */}
              <li>
                <Link 
                  to={getLocalizedPath('/features')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                >
                  <Zap className="h-3 w-3 mr-2 text-blue-400" />
                  {t('footer.company.features')}
                </Link>
              </li>
              <li>
                <Link 
                  to={getLocalizedPath('/pricing')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                >
                  <DollarSign className="h-3 w-3 mr-2 text-blue-400" />
                  {t('footer.company.pricing')}
                </Link>
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
                    <Link 
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                    >
                      <link.icon className="h-3 w-3 mr-2 text-blue-400" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-2 lg:mb-0">
              <p className="text-gray-300 text-sm">
                © 2020 - {new Date().getFullYear()} Seasalt.ai. All rights reserved.
              </p>
              <div className="flex space-x-3 sm:space-x-4 text-xs sm:text-sm">
                <Link to={getLocalizedPath('/privacy')} className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('footer.legal.privacyPolicy')}
                </Link>
                <Link to={getLocalizedPath('/terms')} className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('footer.legal.termsOfService')}
                </Link>
              </div>
            </div>
            
            {/* Compliance & Stats */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300">
              <span className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-1" />
                10M+ Messages Daily
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                500K+ Active Users
              </span>
              <span className="flex items-center">
                <Target className="w-4 h-4 mr-1" />
                99.9% Uptime
              </span>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-300 text-sm">
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
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            {t('footer.cta.readyToScale')}
          </h3>
          <p className="text-white opacity-90 mb-6 max-w-2xl mx-auto">
            {t('footer.cta.joinThousands')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              className="bg-white text-blue-600 hover:bg-gray-50 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
            >
              {t('footer.cta.signUpNow')}
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
            >
              {t('footer.cta.scheduleDemo')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
