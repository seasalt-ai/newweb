import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown, Home, MessageSquare, Phone, Hash, Building2, Target, Zap, Users, Calendar, AlertTriangle, ShoppingCart, Vote, Heart, DollarSign } from 'lucide-react';

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
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { products } from '../../data/productsData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChannelsOpen, setIsChannelsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isSeaXDropdownOpen, setIsSeaXDropdownOpen] = useState(false);
  const { i18n } = useTranslation();
  const location = useLocation();
  const currentLanguage = i18n.language;

  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const navigation = [
    { name: 'Features', href: getLocalizedPath('/features') },
    {
      name: 'Channels',
      href: getLocalizedPath('/channels'),
      dropdown: [
        { 
          name: 'SMS Overview', 
          href: getLocalizedPath('/channels/sms'),
          icon: MessageSquare,
          iconText: 'SMS',
          isParent: true
        },
        { 
          name: 'Local Number (10DLC)', 
          href: getLocalizedPath('/channels/sms-local'),
          icon: Building2,
          iconText: '10DLC',
          isChild: true
        },
        { 
          name: 'Toll-Free Number', 
          href: getLocalizedPath('/channels/sms-toll-free'),
          icon: Phone,
          iconText: '8XX',
          isChild: true
        },
        { 
          name: 'Short Code', 
          href: getLocalizedPath('/channels/sms-short-code'),
          icon: Hash,
          iconText: 'xxxxx',
          isChild: true
        },
        { 
          name: 'WhatsApp Business Platform', 
          href: getLocalizedPath('/channels/whatsapp'),
          icon: WhatsAppIcon
        },
        { 
          name: 'Phone Call Voice', 
          href: getLocalizedPath('/channels/voice'),
          icon: Phone
        }
      ]
    },
    {
      name: 'Solutions',
      href: getLocalizedPath('/solutions'),
      dropdown: [
        { 
          name: 'Lead Generation', 
          href: getLocalizedPath('/solutions/lead-generation'),
          icon: Target
        },
        { 
          name: 'Marketing Automation', 
          href: getLocalizedPath('/solutions/marketing-automation'),
          icon: Zap
        },
        { 
          name: 'Customer Engagement', 
          href: getLocalizedPath('/solutions/customer-engagement'),
          icon: Users
        },
        { 
          name: 'Appointment Reminders', 
          href: getLocalizedPath('/solutions/appointment-reminders'),
          icon: Calendar
        },
        { 
          name: 'Emergency Alerts', 
          href: getLocalizedPath('/solutions/emergency-alerts'),
          icon: AlertTriangle
        }
      ]
    },
    {
      name: 'Industries',
      href: getLocalizedPath('/industries'),
      dropdown: [
        { 
          name: 'E-commerce & Retail', 
          href: getLocalizedPath('/industries/ecommerce-retail'),
          icon: ShoppingCart
        },
        { 
          name: 'Real Estate', 
          href: getLocalizedPath('/industries/real-estate'),
          icon: Building2
        },
        { 
          name: 'Political Campaigns', 
          href: getLocalizedPath('/industries/political-campaigns'),
          icon: Vote
        },
        { 
          name: 'Healthcare', 
          href: getLocalizedPath('/industries/healthcare'),
          icon: Heart
        },
        { 
          name: 'Financial Services', 
          href: getLocalizedPath('/industries/financial-services'),
          icon: DollarSign
        }
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
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 z-50">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`flex items-center px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600 transition-colors ${
                              subItem.isParent 
                                ? 'text-gray-900 font-medium border-b border-gray-100 bg-gray-50' 
                                : subItem.isChild 
                                  ? 'text-gray-600 pl-8' 
                                  : 'text-gray-700'
                            }`}
                            onClick={() => {
                              setIsChannelsOpen(false);
                              setIsSolutionsOpen(false);
                              setIsIndustriesOpen(false);
                            }}
                          >
                            {subItem.icon && (
                              <div className="flex items-center justify-center w-5 h-5 mr-3 flex-shrink-0">
                                {subItem.iconText ? (
                                  <span className="text-xs font-mono font-bold text-blue-600">
                                    {subItem.iconText}
                                  </span>
                                ) : (
                                  <subItem.icon className="w-4 h-4 text-blue-600" />
                                )}
                              </div>
                            )}
                            <span>{subItem.name}</span>
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
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Book Demo
            </a>
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
                              className={`flex items-center px-3 py-2 text-sm hover:text-blue-600 hover:bg-gray-50 transition-colors ${
                                subItem.isParent 
                                  ? 'text-gray-900 font-medium border-b border-gray-100 bg-gray-50' 
                                  : subItem.isChild 
                                    ? 'text-gray-600 pl-6' 
                                    : 'text-gray-600'
                              }`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsChannelsOpen(false);
                                setIsSolutionsOpen(false);
                                setIsIndustriesOpen(false);
                              }}
                            >
                              {subItem.icon && (
                                <div className="flex items-center justify-center w-5 h-5 mr-3 flex-shrink-0">
                                  {subItem.iconText ? (
                                    <span className="text-xs font-mono font-bold text-blue-600">
                                      {subItem.iconText}
                                    </span>
                                  ) : (
                                    <subItem.icon className="w-4 h-4 text-blue-600" />
                                  )}
                                </div>
                              )}
                              <span>{subItem.name}</span>
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
                <a
                  href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                  className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Demo
                </a>
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
