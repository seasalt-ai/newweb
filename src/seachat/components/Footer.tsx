import React from 'react';
import { MessageCircle, Twitter, Linkedin, Facebook, Mail, Phone, MapPin, Youtube, Heart, Coffee, Umbrella, Plane, Gem } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  
  const productLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'API Documentation', href: '#api' },
    { name: 'Mobile Apps', href: '#mobile' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press Kit', href: '#press' },
    { name: 'Contact', href: '#contact' },
    { name: 'Partners', href: '#partners' }
  ];

  const resourceLinks = [
    { name: 'Documentation', href: '#docs' },
    { name: 'Blog', href: '#blog' },
    { name: 'Community', href: '#community' },
    { name: 'Help Center', href: '#help' },
    { name: 'Status Page', href: '#status' },
    { name: 'Product Wiki', href: 'https://wiki.seasalt.ai/seachat' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'GDPR', href: '#gdpr' },
    { name: 'Security', href: '#security' }
  ];

  return (
    <footer className="bg-gray-900 text-white" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img src="/seachat-logo.png" alt="SeaChat Logo" className="h-8" />
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
                <span>+1 (877) 731-2882</span>
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

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('seachat.footer.product')}</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('seachat.footer.company')}</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('seachat.footer.resources')}</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('seachat.footer.legal')}</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">{t('seachat.footer.getStarted')}</h3>
            <p className="text-gray-400 mb-8">
              {t('seachat.footer.joinThousands')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder={t('seachat.footer.enterEmail')}
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <a href="https://chat.seasalt.ai/gpt/signup" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                {t('seachat.common.getStarted')}
              </a>
            </div>
            
            <p className="text-sm text-gray-500">
              {t('seachat.footer.noCredit')}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2020 - {new Date().getFullYear()} Seasalt.ai All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>{t('seachat.footer.compliance')}</span>
            <span>{t('seachat.footer.gdpr')}</span>
            <span>{t('seachat.footer.uptime')}</span>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-8">
          <br />
          <p>
            Made with <Heart className="inline w-4 h-4 text-red-500" /> in the city of{' '}
            <Coffee className="inline w-4 h-4 text-amber-700" />{' '}
            <Umbrella className="inline w-4 h-4 text-blue-400" />{' '}
            <Plane className="inline w-4 h-4 text-gray-500" />{' '}
            <Gem className="inline w-4 h-4 text-fuchsia-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;