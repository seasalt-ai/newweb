import { useState } from 'react';
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
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getIndustries } from '../data/industriesData';
import { getSolutions } from '../data/solutionsData';
import { getProducts } from '../data/productsData';
import { LANGUAGE_DETAILS } from '../constants/languages';
import { useLanguageAwareLinks } from '../hooks/useLanguageAwareLinks';
import ProductLogoDropdown from './ProductLogoDropdown';
import PhoneBanner from './PhoneBanner';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { createLink } = useLanguageAwareLinks();
  const industries = getIndustries(t);
  const solutions = getSolutions(t);
  const products = getProducts(t);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Only one dropdown open at a time
  const [openDropdown, setOpenDropdown] = useState<null | 'products' | 'solutions' | 'industries' | 'channels' | 'compare' | 'language'>(null);
  
  // Mobile collapsible sections state
  const [mobileCollapsed, setMobileCollapsed] = useState<{
    products: boolean;
    solutions: boolean;
    industries: boolean;
    channels: boolean;
    compare: boolean;
  }>({
    products: true,
    solutions: true,
    industries: true,
    channels: true,
    compare: true
  });
  
  // Toggle mobile section collapse
  const toggleMobileSection = (section: 'products' | 'solutions' | 'industries' | 'channels' | 'compare') => {
    setMobileCollapsed(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  // Helper to open only one dropdown at a time
  const handleDropdown = (dropdown: typeof openDropdown) => {
    setOpenDropdown(prev => {
      const newValue = prev === dropdown ? null : dropdown;
      return newValue;
    });
  };

  const channels = [
    { name: t('header.channelsDropdown.whatsapp'), path: '/channels/whatsapp', icon: MessageCircle },
    { name: t('header.channelsDropdown.phoneCalls'), path: '/channels/phone-calls', icon: Phone },
    { name: t('header.channelsDropdown.sms'), path: '/channels/sms', icon: MessageSquare },
    { name: t('header.channelsDropdown.websiteChat'), path: '/channels/website-chat', icon: Bot },
    { name: t('header.channelsDropdown.instagram'), path: '/channels/instagram', icon: Instagram },
    { name: t('header.channelsDropdown.facebookMessenger'), path: '/channels/facebook-messenger', icon: Facebook },
    { name: t('header.channelsDropdown.contactForms'), path: '/channels/contact-forms', icon: Mail },
    { name: t('header.channelsDropdown.line'), path: '/channels/line', icon: MessageSquare },
    { name: t('header.channelsDropdown.websiteWidget'), path: '/channels/website-widget', icon: Monitor }
  ];

  const competitors = [
    { name: 'Aircall', path: '/compare/aircall-alternative', icon: Phone },
    { name: 'RingCentral', path: '/compare/ringcentral-alternative', icon: Phone },
    { name: 'Genesys', path: '/compare/genesys-alternative', icon: Headphones },
    { name: 'Five9', path: '/compare/five9-alternative', icon: Phone },
    { name: 'Avaya', path: '/compare/avaya-alternative', icon: Phone },
    { name: 'Google Voice', path: '/compare/google-voice-alternative', icon: Mic },
    { name: 'respond.io', path: '/compare/respond-io-alternative', icon: MessageSquare },
    { name: 'Intercom', path: '/compare/intercom-alternative', icon: MessageCircle },
    { name: 'Kustomer', path: '/compare/kustomer-alternative', icon: Users },
    { name: '3CX', path: '/compare/3cx-alternative', icon: Phone },
    { name: 'Dialpad', path: '/compare/dialpad-alternative', icon: Phone },
    { name: '8x8', path: '/compare/8x8-alternative', icon: Phone },
    { name: 'OpenPhone', path: '/compare/openphone-alternative', icon: Phone }
  ];



  return (
    <>
      <PhoneBanner />
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with dropdown - visible on all screen sizes */}
          <div className="relative flex items-center">
            {/* Logo - navigates to main site */}
            <Link
              to={`/${i18n.language}`}
              className="hover:opacity-80 transition-opacity flex items-center"
            >
              <img 
                src='/seasalt-ai-logo.png' 
                alt='Seasalt.ai' 
                className='h-6 sm:h-8 w-auto flex-shrink-0'
              />
            </Link>
            
            {/* Dropdown arrow - opens product dropdown */}
            <button
              onClick={() => handleDropdown('products')}
              onMouseEnter={() => handleDropdown('products')}
              className="ml-1 p-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <ChevronDown className='h-4 w-4' />
            </button>
            {openDropdown === 'products' && (
              <ProductLogoDropdown 
                isOpen={true} 
                onClose={() => setOpenDropdown(null)} 
                currentLanguage={i18n.language} 
              />
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            
            <div className="relative">
              <button
                onClick={() => handleDropdown('solutions')}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {t('header.solutions')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-[340px] bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {/* Existing Solutions */}
                  {solutions.map((solution, index) =>
                    solution.path ? (
                      <Link 
                        key={index}
                        to={`/${i18n.language}${solution.path}`}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        {solution.icon && <solution.icon className="h-5 w-5 text-gray-400" />}
                        {solution.title}
                      </Link>
                    ) : (
                      <a 
                        key={index}
                        href={solution.path}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        {solution.icon && <solution.icon className="h-5 w-5 text-gray-400" />}
                        {solution.title}
                      </a>
                    )
                  )}
                  {/* SeaHealth Entry */}
                  <Link 
                    to={`/${i18n.language}/seahealth`}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <Heart className="h-5 w-5 text-red-500" />
                    {t('header.solutionsDropdown.seahealth')}
                  </Link>
                  {/* Use Cases Section */}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <div className="text-xs font-semibold text-gray-500 px-4 mb-1">{t('header.solutionsDropdown.useCases')}</div>
                    {/* Small & Medium Businesses */}
                    <div className="px-4 mb-2">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                        <span role="img" aria-label="building">🏢</span> Small & Medium Businesses
                      </div>
                      <ul className="ml-5 list-disc text-xs text-gray-600 space-y-2">
                        <li><a href="https://usecase.seasalt.ai/approved-for-twilio-sms-campaign/" className="hover:underline" target="_blank" rel="noopener noreferrer">Get approved for Twilio SMS campaigns</a></li>
                        <li><a href="https://usecase.seasalt.ai/bulk-send-sms/" className="hover:underline" target="_blank" rel="noopener noreferrer">Bulk send SMS</a></li>
                        <li><a href="https://usecase.seasalt.ai/whatsapp-business-app-platform-api/" className="hover:underline" target="_blank" rel="noopener noreferrer">WhatsApp your customers</a></li>
                        <li><a href="https://usecase.seasalt.ai/call-your-customers-in-batch/" className="hover:underline" target="_blank" rel="noopener noreferrer">Call your customers in batch</a></li>
                        <li><a href="https://usecase.seasalt.ai/auto-answer-calls-247/" className="hover:underline" target="_blank" rel="noopener noreferrer">Auto-answer calls 24/7</a></li>
                      </ul>
                    </div>
                    {/* Healthcare */}
                    <div className="px-4 mb-2">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                        <span role="img" aria-label="plus">➕</span> Healthcare
                      </div>
                      <ul className="ml-5 list-disc text-xs text-gray-600 space-y-2">
                        <li><a href="https://usecase.seasalt.ai/voice-ai-calls-to-check-on-seniors/" className="hover:underline" target="_blank" rel="noopener noreferrer">Voice AI calls to check on seniors</a></li>
                        <li><a href="https://usecase.seasalt.ai/hospital-phone-call-analytics-dashboard/" className="hover:underline" target="_blank" rel="noopener noreferrer">Phone call analytics dashboard for hospitals</a></li>
                      </ul>
                    </div>
                    {/* Education */}
                    <div className="px-4 mb-2">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                        <span role="img" aria-label="graduation-cap">🎓</span> Education
                      </div>
                      <ul className="ml-5 list-disc text-xs text-gray-600 space-y-2">
                        <li><a href="https://usecase.seasalt.ai/education/" className="hover:underline" target="_blank" rel="noopener noreferrer">Conversational GenAI for classrooms</a></li>
                      </ul>
                    </div>
                    {/* Campaign Messaging */}
                    <div className="px-4 mb-2">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                        <span role="img" aria-label="comment-alt">💬</span> Campaign Messaging
                      </div>
                      <ul className="ml-5 list-disc text-xs text-gray-600 space-y-2">
                        <li><a href="https://usecase.seasalt.ai/win-campaigns-with-auto-texts-calls/" className="hover:underline" target="_blank" rel="noopener noreferrer">Win campaigns with automated texts & calls</a></li>
                      </ul>
                    </div>
                    {/* Speech Analysis */}
                    <div className="px-4 mb-2">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                        <span role="img" aria-label="circle">⚪</span> Speech Analysis
                      </div>
                      <ul className="ml-5 list-disc text-xs text-gray-600 space-y-2">
                        <li><a href="https://usecase.seasalt.ai/transcribe-audio-to-discover-insights/" className="hover:underline" target="_blank" rel="noopener noreferrer">Transcribe audio & calls to discover insights</a></li>
                        <li><a href="https://usecase.seasalt.ai/seameet-global-team-case-study/" className="hover:underline" target="_blank" rel="noopener noreferrer">Meeting analytics for remote teams</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button
                onClick={() => handleDropdown('industries')}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {t('header.industries')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'industries' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 max-h-80 overflow-y-auto z-50">
                  {industries.map((industry, index) => {
                    // If industry has a demo link, replace #demo with external link
                    if (industry.href && industry.href === '#demo') {
                      return (
                        <a
                          key={index}
                          href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <industry.icon className="h-5 w-5 text-gray-400" />
                          {industry.title}
                        </a>
                      );
                    }
                    // If industry has a signup link, replace #signup with external link
                    if (industry.href && industry.href === '#signup') {
                      return (
                        <a
                          key={index}
                          href="https://seax.seasalt.ai/signup"
                          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <industry.icon className="h-5 w-5 text-gray-400" />
                          {industry.title}
                        </a>
                      );
                    }
                    return (
                      <Link 
                        key={index}
                        to={`/${i18n.language}/industries/${industry.slug}`.replace(/^(\/[^/]+)\1/, '$1')}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <industry.icon className="h-5 w-5 text-gray-400" />
                        {industry.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            
            <div className="relative">
              <button
                onClick={() => handleDropdown('channels')}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {t('header.channels')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'channels' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link to={`/${i18n.language}/channels-overview`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-medium border-b border-gray-100">
                    {t('header.allChannelsOverview')}
                  </Link>
                  {channels.map((channel, index) => (
                    <Link 
                      key={index}
                      to={`/${i18n.language}${channel.path}`} 
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <channel.icon className="h-5 w-5 text-gray-400" />
                      {channel.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to={`/${i18n.language}/pricing`} className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              {t('header.pricing')}
            </Link>
            
            <div className="relative">
              <button
                onClick={() => handleDropdown('compare')}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {t('header.compareUs')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'compare' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 max-h-80 overflow-y-auto z-50">
                  <Link to={`/${i18n.language}/compare-us-overview`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-medium border-b border-gray-100">
                    {t('header.compareDropdown.allComparisonsOverview')}
                  </Link>
                  {competitors.map((competitor, index) => (
                    <Link 
                      key={index}
                      to={`/${i18n.language}${competitor.path}`} 
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <competitor.icon className="h-5 w-5 text-gray-400" />
                      vs. {competitor.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to={`/${i18n.language}/blog`} className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              {t('header.blog')}
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <LanguageSwitcher className="" />
            <a
              href="https://seax.seasalt.ai/signin"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {t('header.signIn')}
            </a>
            <a
                href="https://seax.seasalt.ai/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
              >
              {t('header.startForFree')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto mobile-menu">
              {/* Login/Signup buttons at the top */}
              <div className="px-3 py-2 border-b border-gray-200 mb-2">
                <div className="flex flex-col space-y-2">
                  <a 
                    href="https://seax.seasalt.ai/signin" 
                    className="block w-full text-center text-gray-700 hover:text-blue-600 font-medium py-2 border border-gray-300 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('header.signIn')}
                  </a>
                  <a 
                    href="https://seax.seasalt.ai/signup" 
                    className="block px-4 py-3 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700 transition-colors min-h-touch"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('header.startForFree')}
                  </a>
                </div>
              </div>
              
              {/* Collapsible Products Section */}
              <div className="px-3 py-2">
                <button
                  onClick={() => toggleMobileSection('products')}
                  className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 py-2 min-h-touch"
                >
                  <span>{t('header.products')}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    mobileCollapsed.products ? '' : 'transform rotate-180'
                  }`} />
                </button>
                {!mobileCollapsed.products && (
                  <div className="pl-4 space-y-1 mt-2">
                    {products.map((product, index) => (
                      <div key={index}>
                        {product.subProducts ? (
                          <div>
                            <a
                              href={product.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center py-2 text-sm text-gray-600 hover:text-gray-900 min-h-touch"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {product.icon && <product.icon className="h-4 w-4 mr-3 text-gray-400" />}
                              {product.title}
                            </a>
                            <div className="pl-4 space-y-1">
                              {product.subProducts.map((subProduct, subIndex) => (
                                <a
                                  key={subIndex}
                                  href={subProduct.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block py-1 text-xs text-gray-500 hover:text-gray-700 min-h-touch"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subProduct.title}
                                </a>
                              ))}
                            </div>
                          </div>
                        ) : (
                          product.href.startsWith('/') ? (
                            <Link
                              to={createLink(product.href)}
                              className="flex items-center py-2 text-sm text-gray-600 hover:text-gray-900 min-h-touch"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {product.icon && <product.icon className="h-4 w-4 mr-3 text-gray-400" />}
                              {product.title}
                            </Link>
                          ) : (
                            <a
                              href={product.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center py-2 text-sm text-gray-600 hover:text-gray-900 min-h-touch"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {product.icon && <product.icon className="h-4 w-4 mr-3 text-gray-400" />}
                              {product.title}
                            </a>
                          )
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Collapsible Solutions Section */}
              <div className="px-3 py-2">
                <button
                  onClick={() => toggleMobileSection('solutions')}
                  className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 py-2 min-h-touch"
                >
                  <span>{t('header.solutions')}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    mobileCollapsed.solutions ? '' : 'transform rotate-180'
                  }`} />
                </button>
                {!mobileCollapsed.solutions && (
                  <div className="pl-4 space-y-1 mt-2">
                    {solutions.map((solution, index) => (
                      solution.path ? (
                        <Link 
                          key={index}
                          to={`/${i18n.language}${solution.path}`}
                          className="flex items-center py-2 text-sm text-gray-600 hover:text-gray-900 min-h-touch"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {solution.icon && <solution.icon className="h-4 w-4 mr-3 text-gray-400" />}
                          {solution.title}
                        </Link>
                      ) : (
                        <a 
                          key={index}
                          href={solution.path}
                          className="flex items-center py-2 text-sm text-gray-600 hover:text-gray-900 min-h-touch"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {solution.icon && <solution.icon className="h-4 w-4 mr-3 text-gray-400" />}
                          {solution.title}
                        </a>
                      )
                    ))}
                    <Link 
                      to={`/${i18n.language}/seahealth`}
                      className="flex items-center py-2 text-sm text-gray-600 hover:text-gray-900 min-h-touch"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Heart className="h-4 w-4 mr-2 text-red-500" />
                      {t('header.solutionsDropdown.seahealth')}
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Collapsible Industries Section */}
              <div className="px-3 py-2">
                <button
                  onClick={() => toggleMobileSection('industries')}
                  className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 py-2 min-h-touch"
                >
                  <span>{t('header.industries')}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    mobileCollapsed.industries ? '' : 'transform rotate-180'
                  }`} />
                </button>
                {!mobileCollapsed.industries && (
                  <div className="pl-4 space-y-1 mt-2">
                    {industries.map((industry, index) => {
                      // Handle demo and signup links
                      if (industry.href && industry.href === '#demo') {
                        return (
                          <a
                            key={index}
                            href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                            className="flex items-center py-2 text-sm text-gray-600 hover:text-gray-900 min-h-touch"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <industry.icon className="h-4 w-4 mr-3 text-gray-400" />
                            {industry.title}
                          </a>
                        );
                      }
                      if (industry.href && industry.href === '#signup') {
                        return (
                          <a
                            key={index}
                            href="https://seax.seasalt.ai/signup"
                            className="flex items-center py-2 text-sm text-gray-600 hover:text-gray-900 min-h-touch"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <industry.icon className="h-4 w-4 mr-3 text-gray-400" />
                            {industry.title}
                          </a>
                        );
                      }
                      return (
                        <Link 
                          key={index}
                          to={`/${i18n.language}/industries/${industry.slug}`}
                          className="flex items-center py-2 text-sm text-gray-600 hover:text-gray-900 min-h-touch"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <industry.icon className="h-4 w-4 mr-3 text-gray-400" />
                          {industry.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
              
              {/* Collapsible Channels Section */}
              <div className="px-3 py-2">
                <button
                  onClick={() => toggleMobileSection('channels')}
                  className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 py-2 min-h-touch"
                >
                  <span>{t('header.channels')}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    mobileCollapsed.channels ? '' : 'transform rotate-180'
                  }`} />
                </button>
                {!mobileCollapsed.channels && (
                  <div className="pl-4 space-y-1 mt-2">
                    <Link
                      to={`/${i18n.language}/channels-overview`}
                      className="block py-2 text-sm text-gray-600 hover:text-gray-900 font-medium border-b border-gray-100 pb-2 mb-2 min-h-touch"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('header.allChannelsOverview')}
                    </Link>
                    {channels.map((channel, index) => (
                      <Link 
                        key={index}
                        to={`/${i18n.language}${channel.path}`}
                        className="flex items-center py-2 text-sm text-gray-600 hover:text-gray-900 min-h-touch"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <channel.icon className="h-4 w-4 mr-3 text-gray-400" />
                        {channel.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Static Pricing Link */}
              <Link 
                to={`/${i18n.language}/pricing`} 
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md min-h-touch"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.pricing')}
              </Link>
              
              {/* Collapsible Compare Us Section */}
              <div className="px-3 py-2">
                <button
                  onClick={() => toggleMobileSection('compare')}
                  className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 py-2 min-h-touch"
                >
                  <span>{t('header.compareUs')}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    mobileCollapsed.compare ? '' : 'transform rotate-180'
                  }`} />
                </button>
                {!mobileCollapsed.compare && (
                  <div className="pl-4 space-y-1 mt-2">
                    <Link
                      to={`/${i18n.language}/compare-us-overview`}
                      className="block py-2 text-sm text-gray-600 hover:text-gray-900 font-medium border-b border-gray-100 pb-2 mb-2 min-h-touch"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('header.compareDropdown.allComparisonsOverview')}
                    </Link>
                    {competitors.map((competitor, index) => (
                      <Link 
                        key={index}
                        to={`/${i18n.language}${competitor.path}`}
                        className="flex items-center py-2 text-sm text-gray-600 hover:text-gray-900 min-h-touch"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <competitor.icon className="h-4 w-4 mr-3 text-gray-400" />
                        vs. {competitor.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link 
                to={`/${i18n.language}/blog`} 
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md min-h-touch"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.blog')}
              </Link>
              
              {/* Mobile Language Selector */}
              <div className="px-3 py-2 border-t border-gray-200 mt-4 pt-4">
                <LanguageSwitcher className="w-full" />
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
