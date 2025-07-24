import { Phone, Mail, MapPin, MessageSquare, BarChart3, Heart, Coffee, Umbrella, Plane, Gem, Linkedin, Youtube, Twitter, MessageCircle, Monitor, Instagram, FileText, Smartphone, Globe, Briefcase, Building, DollarSign, Book, Server, Newspaper } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data/productsData';
import { solutions } from '../data/solutionsData';
import { industries } from '../data/industriesData';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/seasalt-ai-logo.png" 
                alt="Seasalt.ai" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              The all-in-one contact center built for small businesses. 
              Automate support, capture every lead, and unify all your customer conversations.
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

          {/* Products */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{t('header.products')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {products.map((product, index) => {
                const updatedHref = product.href.startsWith('/')
                  ? `/${currentLanguage}${product.href}`
                  : product.href;
                const IconComponent = product.icon || MessageSquare;
                return (
                  <li key={index}>
                    <a 
                      href={updatedHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <IconComponent className="h-4 w-4 mr-2" />
                      {product.title}
                    </a>
                    {product.subProducts && (
                      <ul className="ml-4 mt-1 sm:mt-2 space-y-1 sm:space-y-2">
                        {product.subProducts.map((subProduct, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subProduct.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
                            >
                              {subProduct.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{t('header.solutions')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon || BarChart3;
                return (
                  <li key={index}>
                    {solution.path ? (
                      <Link 
                        to={`/${currentLanguage}${solution.path}`}
                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                      >
                        <IconComponent className="h-4 w-4 mr-2" />
                        {solution.title}
                      </Link>
                    ) : (
                      <a 
                        href={solution.path}
                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                      >
                        <IconComponent className="h-4 w-4 mr-2" />
                        {solution.title}
                      </a>
                    )}
                  </li>
                );
              })}
              <li>
                <Link to={`/${currentLanguage}/channels-overview`} className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('header.allChannelsOverview')}
                </Link>
                {/* Channel Icons */}
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <Link to={`/${currentLanguage}/channels/whatsapp`} className="text-green-600 hover:text-green-500 transition-colors duration-200 flex justify-center">
                    <MessageCircle className="h-5 w-5" />
                  </Link>
                  <Link to={`/${currentLanguage}/channels/phone-calls`} className="text-blue-600 hover:text-blue-500 transition-colors duration-200 flex justify-center">
                    <Phone className="h-5 w-5" />
                  </Link>
                  <Link to={`/${currentLanguage}/channels/sms`} className="text-purple-600 hover:text-purple-500 transition-colors duration-200 flex justify-center">
                    <MessageSquare className="h-5 w-5" />
                  </Link>
                  <Link to={`/${currentLanguage}/channels/website-chat`} className="text-indigo-600 hover:text-indigo-500 transition-colors duration-200 flex justify-center">
                    <Monitor className="h-5 w-5" />
                  </Link>
                  <Link to={`/${currentLanguage}/channels/instagram`} className="text-pink-600 hover:text-pink-500 transition-colors duration-200 flex justify-center">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link to={`/${currentLanguage}/channels/facebook-messenger`} className="text-blue-700 hover:text-blue-600 transition-colors duration-200 flex justify-center">
                    <Mail className="h-5 w-5" />
                  </Link>
                  <Link to={`/${currentLanguage}/channels/contact-forms`} className="text-gray-400 hover:text-gray-300 transition-colors duration-200 flex justify-center">
                    <FileText className="h-5 w-5" />
                  </Link>
                  <Link to={`/${currentLanguage}/channels/line`} className="text-green-500 hover:text-green-400 transition-colors duration-200 flex justify-center">
                    <Smartphone className="h-5 w-5" />
                  </Link>
                  <Link to={`/${currentLanguage}/channels/website-widget`} className="text-orange-600 hover:text-orange-500 transition-colors duration-200 flex justify-center">
                    <Globe className="h-5 w-5" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{t('header.industries')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <li key={index}>
                    <Link 
                      to={`/${currentLanguage}/industries/${industry.slug}`}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <IconComponent className="h-4 w-4 mr-2" />
                      {industry.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{t('footer.company.title')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to={`/${currentLanguage}/blog`} className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  {t('header.blog')}
                </Link>
              </li>
              <li>
                <Link to={`/${currentLanguage}/pricing`} className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  {t('header.pricing')}
                </Link>
              </li>
              <li>
                <Link to={`/${currentLanguage}/compare-us-overview`} className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  {t('header.compareUs')}
                </Link>
              </li>
              <li>
                <a href="https://wiki.seasalt.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <Book className="h-4 w-4 mr-2" />
                  Product Wiki
                </a>
              </li>
              <li>
                <a href="https://api.seasalt.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <Server className="h-4 w-4 mr-2" />
                  API References
                </a>
              </li>
              <li>
                <Link to={`/${currentLanguage}/careers`} className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to={`/${currentLanguage}/press`} className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <Newspaper className="h-4 w-4 mr-2" />
                  Press
                </Link>
              </li>
              <li>
                <Link to={`/${currentLanguage}/company`} className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <Building className="h-4 w-4 mr-2" />
                  {t('footer.company.about')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-2 lg:mb-0">
              <p className="text-gray-300 text-sm">
                {t('footer.copyright', { year: new Date().getFullYear() })}
              </p>
              <div className="flex space-x-3 sm:space-x-4 text-xs sm:text-sm">
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('footer.privacyPolicy')}
                </Link>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('footer.termsOfService')}
                </Link>
              </div>
            </div>
            
            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300">
              <Link to="/seahealth" className="flex items-center hover:text-white transition-colors duration-200">
                <img src="/hipaa-icon.svg" alt="HIPAA" className="h-5 w-5 mr-1 inline-block align-text-bottom" />
                {t('footer.compliance.hipaa')}
              </Link>
              <span>🌍 {t('footer.compliance.uptime')}</span>
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
            {t('footer.cta.title')}
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              className="bg-white text-blue-600 hover:bg-gray-50 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
            >
              {t('footer.cta.startFreeTrial')}
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