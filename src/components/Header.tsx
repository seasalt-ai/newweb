import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { industries } from '../data/industriesData';
import { solutions } from '../data/solutionsData';
import { products } from '../data/productsData';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSeaVoiceSubMenuOpen, setIsSeaVoiceSubMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isChannelsOpen, setIsChannelsOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const channels = [
    { name: 'WhatsApp Business', path: '/channels/whatsapp' },
    { name: 'Voice & Phone Calls', path: '/channels/phone-calls' },
    { name: 'SMS Messaging', path: '/channels/sms' },
    { name: 'Website Chat Widget', path: '/channels/website-chat' },
    { name: 'Instagram DMs', path: '/channels/instagram' },
    { name: 'Facebook Messenger', path: '/channels/facebook-messenger' },
    { name: 'Contact Forms', path: '/channels/contact-forms' },
    { name: 'LINE Business', path: '/channels/line' },
    { name: 'Website Widget', path: '/channels/website-widget' }
  ];

  const competitors = [
    { name: 'Aircall', path: '/compare/aircall-alternative' },
    { name: 'RingCentral', path: '/compare/ringcentral-alternative' },
    { name: 'Genesys', path: '/compare/genesys-alternative' },
    { name: 'Five9', path: '/compare/five9-alternative' },
    { name: 'Avaya', path: '/compare/avaya-alternative' },
    { name: 'Google Voice', path: '/compare/google-voice-alternative' },
    { name: 'respond.io', path: '/compare/respond-io-alternative' },
    { name: 'Intercom', path: '/compare/intercom-alternative' },
    { name: 'Kustomer', path: '/compare/kustomer-alternative' },
    { name: '3CX', path: '/compare/threecx-alternative' },
    { name: 'Dialpad', path: '/compare/dialpad-alternative' },
    { name: '8x8', path: '/compare/eightxeight-alternative' },
    { name: 'OpenPhone', path: '/compare/openphone-alternative' }
  ];

  const languages = [
    { code: 'en', name: 'English', shortCode: 'EN' },
    { code: 'es', name: 'Español', shortCode: 'ES' },
    { code: 'fr', name: 'Français', shortCode: 'FR' },
    { code: 'de', name: 'Deutsch', shortCode: 'DE' },
    { code: 'pl', name: 'Polski', shortCode: 'PL' },
    { code: 'pt', name: 'Português', shortCode: 'PT' },
    { code: 'ru', name: 'Русский', shortCode: 'RU' },
    { code: 'ar', name: 'العربية', shortCode: 'AR' },
    { code: 'zh-TW', name: '繁體中文', shortCode: 'TW' },
    { code: 'ja', name: '日本語', shortCode: 'JA' },
    { code: 'ko', name: '한국어', shortCode: 'KO' },
    { code: 'vi', name: 'Tiếng Việt', shortCode: 'VI' },
    { code: 'th', name: 'ไทย', shortCode: 'TH' },
    { code: 'hi', name: 'हिन्दी', shortCode: 'HI' }
  ];

  const changeLanguage = (languageCode: string) => {
    // Get the current path without the language prefix
    const { pathname } = window.location;
    const currentLang = i18n.language;
    let newPath;

    // Check if the current path starts with the language code
    if (pathname.startsWith(`/${currentLang}/`)) {
      // Replace the current language code with the new one
      newPath = pathname.replace(`/${currentLang}/`, `/${languageCode}/`);
    } else if (pathname === `/${currentLang}`) {
      // Handle root path for a language
      newPath = `/${languageCode}`;
    } else {
      // If no language in path (shouldn't happen with our routing), add it
      newPath = `/${languageCode}${pathname}`;
    }
    
    // Navigate to the same path but with the new language
    window.location.href = newPath;
    
    // Close the dropdown
    setIsLanguageOpen(false);
  };

  // Get current language name
  const getCurrentLanguageName = () => {
    const currentLang = languages.find(lang => lang.code === i18n.language);
    return currentLang ? currentLang.shortCode : 'EN';
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/seasalt-ai-logo.png" 
                alt="Seasalt.ai" 
                className="h-6 sm:h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {t('header.products')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {products.map((product, index) => (
                    <div key={index} className="relative">
                      {product.subProducts ? (
                        <div className="relative">
                          <button
                            onClick={() => setIsSeaVoiceSubMenuOpen(!isSeaVoiceSubMenuOpen)}
                            className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            <div className="text-left">
                              <div className="font-medium">{product.title}</div>
                              <div className="text-xs text-gray-500">{product.description}</div>
                            </div>
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isSeaVoiceSubMenuOpen ? 'rotate-180' : ''}`} />
                          </button>
                          {isSeaVoiceSubMenuOpen && (
                            <div className="bg-gray-50 border-t border-gray-100">
                              <a
                                href={product.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-8 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                              >
                                Main {product.title}
                              </a>
                              {product.subProducts.map((subProduct, subIndex) => (
                                <a
                                  key={subIndex}
                                  href={subProduct.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block px-8 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                >
                                  {subProduct.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 text-sm hover:bg-gray-50"
                        >
                          <div className="font-medium text-gray-700">{product.title}</div>
                          <div className="text-xs text-gray-500">{product.description}</div>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="relative">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {t('header.solutions')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {solutions.map((solution, index) => (
                    solution.path ? (
                      <Link 
                        key={index}
                        to={`/${i18n.language}${solution.path}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        {solution.title}
                      </Link>
                    ) : (
                      <a 
                        key={index}
                        href={solution.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        {solution.title}
                      </a>
                    )
                  ))}
                </div>
              )}
            </div>
            
            <div className="relative">
              <button
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {t('header.industries')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isIndustriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 max-h-80 overflow-y-auto z-50">
                  {industries.map((industry, index) => (
                    <Link 
                      key={index}
                      to={`/${i18n.language}/industries/${industry.slug}`} 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {industry.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div className="relative">
              <button
                onClick={() => setIsChannelsOpen(!isChannelsOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {t('header.channels')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isChannelsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 max-h-80 overflow-y-auto z-50">
                  <Link to={`/${i18n.language}/channels-overview`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-medium border-b border-gray-100">
                    {t('header.allChannelsOverview')}
                  </Link>
                  {channels.map((channel, index) => (
                    <Link 
                      key={index}
                      to={`/${i18n.language}${channel.path}`} 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
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
                onClick={() => setIsCompareOpen(!isCompareOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {t('header.compareUs')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isCompareOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 max-h-80 overflow-y-auto z-50">
                  <Link to={`/${i18n.language}/compare-us-overview`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-medium border-b border-gray-100">
                    All Comparisons Overview
                  </Link>
                  {competitors.map((competitor, index) => (
                    <Link 
                      key={index}
                      to={`/${i18n.language}${competitor.path}`} 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
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
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <span className="mr-1">{getCurrentLanguageName()}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 max-h-96 overflow-y-auto z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                        i18n.language === language.code ? 'font-semibold text-blue-600 bg-blue-50' : 'text-gray-700'
                      }`}
                    >
                      {language.name} 
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a
              href="#login"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {t('header.login')}
            </a>
            <a
              href="#signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
            >
              {t('header.startForFree')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-900 mb-2">{t('header.products')}</div>
                <div className="pl-4 space-y-1">
                  {products.map((product, index) => (
                    <div key={index}>
                      {product.subProducts ? (
                        <div>
                          <a
                            href={product.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-1 text-sm text-gray-600 hover:text-gray-900"
                          >
                            {product.title}
                          </a>
                          <div className="pl-4 space-y-1">
                            {product.subProducts.map((subProduct, subIndex) => (
                              <a
                                key={subIndex}
                                href={subProduct.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block py-1 text-xs text-gray-500 hover:text-gray-700"
                              >
                                {subProduct.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <a
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-1 text-sm text-gray-600 hover:text-gray-900"
                        >
                          {product.title}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-900 mb-2">{t('header.solutions')}</div>
                <div className="pl-4 space-y-1">
                  {solutions.map((solution, index) => (
                    solution.path ? (
                      <Link 
                        key={index}
                        to={`/${i18n.language}${solution.path}`}
                        className="block py-1 text-sm text-gray-600 hover:text-gray-900"
                      >
                        {solution.title}
                      </Link>
                    ) : (
                      <a 
                        key={index}
                        href={solution.path}
                        className="block py-1 text-sm text-gray-600 hover:text-gray-900"
                      >
                        {solution.title}
                      </a>
                    )
                  ))}
                </div>
              </div>
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-900 mb-2">{t('header.industries')}</div>
                <div className="pl-4 space-y-1">
                  {industries.map((industry, index) => (
                    <Link 
                      key={index}
                      to={`/${i18n.language}/industries/${industry.slug}`}
                      className="block py-1 text-sm text-gray-600 hover:text-gray-900"
                    >
                      {industry.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to={`/${i18n.language}/channels-overview`} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                {t('header.channels')}
              </Link>
              <Link to={`/${i18n.language}/pricing`} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                {t('header.pricing')}
              </Link>
              <Link to={`/${i18n.language}/compare-us-overview`} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                {t('header.compareUs')}
              </Link>
              <Link to={`/${i18n.language}/blog`} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                {t('header.blog')}
              </Link>
              
              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-900 mb-2">Language / Idioma / 语言</div>
                <div className="pl-4 space-y-1 max-h-40 overflow-y-auto">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`block w-full text-left py-1 text-sm ${
                        i18n.language === language.code ? 'font-semibold text-blue-600' : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {language.name} 
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <a href="#login" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                  {t('header.login')}
                </a>
                <a href="#signup" className="block px-3 py-2 bg-blue-600 text-white rounded-md text-center font-medium">
                  {t('header.startForFree')}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;