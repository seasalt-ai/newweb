import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown, Home } from 'lucide-react';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { products } from '../../data/productsData';
import { useLanguageAwareLinks } from '../../hooks/useLanguageAwareLinks';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChannelsOpen, setIsChannelsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isSeaXDropdownOpen, setIsSeaXDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentLanguage = i18n.language;

  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const navigation = [
    { name: 'How It Works', href: getLocalizedPath('/how-it-works') },
    { name: 'Features', href: getLocalizedPath('/features') },
    {
      name: 'Channels',
      href: getLocalizedPath('/channels'),
      dropdown: [
        { name: 'SMS Overview', href: getLocalizedPath('/channels/sms') },
        { name: '• SMS: Local Number (10DLC)', href: getLocalizedPath('/channels/sms-local') },
        { name: '• SMS: Toll-Free Number', href: getLocalizedPath('/channels/sms-toll-free') },
        { name: '• SMS: Short Code', href: getLocalizedPath('/channels/sms-short-code') },
        { name: 'WhatsApp Business Platform', href: getLocalizedPath('/channels/whatsapp') },
        { name: 'Phone Call Voice', href: getLocalizedPath('/channels/voice') }
      ]
    },
    {
      name: 'Solutions',
      href: getLocalizedPath('/solutions'),
      dropdown: [
        { name: 'Lead Generation', href: getLocalizedPath('/solutions/lead-generation') },
        { name: 'Marketing Automation', href: getLocalizedPath('/solutions/marketing-automation') },
        { name: 'Customer Engagement', href: getLocalizedPath('/solutions/customer-engagement') },
        { name: 'Appointment Reminders', href: getLocalizedPath('/solutions/appointment-reminders') },
        { name: 'Emergency Alerts', href: getLocalizedPath('/solutions/emergency-alerts') }
      ]
    },
    {
      name: 'Industries',
      href: getLocalizedPath('/industries'),
      dropdown: [
        { name: 'E-commerce & Retail', href: getLocalizedPath('/industries/ecommerce-retail') },
        { name: 'Real Estate', href: getLocalizedPath('/industries/real-estate') },
        { name: 'Political Campaigns', href: getLocalizedPath('/industries/political-campaigns') },
        { name: 'Healthcare', href: getLocalizedPath('/industries/healthcare') },
        { name: 'Financial Services', href: getLocalizedPath('/industries/financial-services') }
      ]
    },
    { name: 'Pricing', href: getLocalizedPath('/pricing') }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const handleDropdownToggle = (dropdown: string) => {
    if (dropdown === 'channels') {
      setIsChannelsOpen(!isChannelsOpen);
      setIsSolutionsOpen(false);
      setIsIndustriesOpen(false);
      setIsSeaXDropdownOpen(false);
    } else if (dropdown === 'solutions') {
      setIsSolutionsOpen(!isSolutionsOpen);
      setIsChannelsOpen(false);
      setIsIndustriesOpen(false);
      setIsSeaXDropdownOpen(false);
    } else if (dropdown === 'industries') {
      setIsIndustriesOpen(!isIndustriesOpen);
      setIsChannelsOpen(false);
      setIsSolutionsOpen(false);
      setIsSeaXDropdownOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center relative">
            <div className="relative">
              <button
                onClick={() => setIsSeaXDropdownOpen(!isSeaXDropdownOpen)}
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/seax_logo.png" 
                  alt="SeaX" 
                  className="h-8 w-auto"
                />
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
              {isSeaXDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {/* Main Site Link */}
                  <Link
                    to={`/${currentLanguage}`}
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100"
                    onClick={() => setIsSeaXDropdownOpen(false)}
                  >
                    <Home className="w-5 h-5 mr-3 text-blue-600" />
                    <div>
                      <div className="font-medium text-gray-900">Seasalt.ai Main Site</div>
                      <div className="text-xs text-gray-500">All products and solutions</div>
                    </div>
                  </Link>
                  
                  {/* Products */}
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Products</div>
                    {products.map((product, index) => (
                      <div key={index}>
                        {product.subProducts ? (
                          <div>
                            <a
                              href={product.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              <div className="font-medium">{product.title}</div>
                              <div className="text-xs text-gray-500">{product.description}</div>
                            </a>
                            <div className="bg-gray-50 border-t border-gray-100">
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
                          </div>
                        ) : (
                          product.href.startsWith('/') ? (
                            <Link
                              to={`/${currentLanguage}${product.href}`}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                              onClick={() => setIsSeaXDropdownOpen(false)}
                            >
                              <div className="font-medium">{product.title}</div>
                              <div className="text-xs text-gray-500">{product.description}</div>
                            </Link>
                          ) : (
                            <a
                              href={product.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              <div className="font-medium">{product.title}</div>
                              <div className="text-xs text-gray-500">{product.description}</div>
                            </a>
                          )
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.name.toLowerCase())}
                      className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors ${
                        isActivePath(item.href) ? 'text-blue-600' : ''
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {((item.name === 'Channels' && isChannelsOpen) ||
                      (item.name === 'Solutions' && isSolutionsOpen) ||
                      (item.name === 'Industries' && isIndustriesOpen)) && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            onClick={() => {
                              setIsChannelsOpen(false);
                              setIsSolutionsOpen(false);
                              setIsIndustriesOpen(false);
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${
                      isActivePath(item.href) ? 'text-blue-600' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link
              to={getLocalizedPath('/contact-sales')}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name.toLowerCase())}
                        className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.name}</span>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>
                      {((item.name === 'Channels' && isChannelsOpen) ||
                        (item.name === 'Solutions' && isSolutionsOpen) ||
                        (item.name === 'Industries' && isIndustriesOpen)) && (
                        <div className="pl-4">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsChannelsOpen(false);
                                setIsSolutionsOpen(false);
                                setIsIndustriesOpen(false);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 ${
                        isActivePath(item.href) ? 'text-blue-600 bg-gray-50' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t">
                <Link
                  to={getLocalizedPath('/contact-sales')}
                  className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Backdrop for dropdown */}
      {isSeaXDropdownOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-10 z-40"
          onClick={() => setIsSeaXDropdownOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
