import { Phone, Mail, MapPin, MessageSquare, Zap, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const channelLinks = [
    { name: 'SMS Overview', path: '/channels/sms' },
    { name: 'SMS Local (10DLC)', path: '/channels/sms-local' },
    { name: 'SMS Toll-Free', path: '/channels/sms-toll-free' },
    { name: 'SMS Short Code', path: '/channels/sms-short-code' },
    { name: 'WhatsApp Business', path: '/channels/whatsapp' },
    { name: 'Voice Calls', path: '/channels/voice' }
  ];

  const solutionLinks = [
    { name: 'Lead Generation', path: '/solutions/lead-generation' },
    { name: 'Marketing Automation', path: '/solutions/marketing-automation' },
    { name: 'Customer Engagement', path: '/solutions/customer-engagement' },
    { name: 'Appointment Reminders', path: '/solutions/appointment-reminders' },
    { name: 'Emergency Alerts', path: '/solutions/emergency-alerts' }
  ];

  const industryLinks = [
    { name: 'E-commerce & Retail', path: '/industries/ecommerce-retail' },
    { name: 'Real Estate', path: '/industries/real-estate' },
    { name: 'Political Campaigns', path: '/industries/political-campaigns' },
    { name: 'Healthcare', path: '/industries/healthcare' },
    { name: 'Financial Services', path: '/industries/financial-services' }
  ];

  const resourceLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About SeaX', path: '/about' },
    { name: 'Contact Sales', href: 'https://meetings.hubspot.com/seasalt-ai/seasalt-meeting' },
    { name: 'Resources', path: '/resources' }
  ];

  const companyLinks = [
    { name: 'About Seasalt.ai', href: 'https://seasalt.ai' },
    { name: 'Careers', href: 'https://seasalt.ai/careers' },
    { name: 'Blog', href: 'https://blog.seasalt.ai' },
    { name: 'Press Kit', href: '#press' },
    { name: 'Partners', href: '#partners' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/seax-logo.png" 
                alt="SeaX" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Reach millions instantly. The ultimate platform for sending millions of SMS, WhatsApp messages, 
              and automated phone calls. Fill your pipeline, drive revenue, and scale your business.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+1 (877) 731-2882</span>
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
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://www.youtube.com/@seasaltai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a href="https://twitter.com/SeasaltAI" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://discord.gg/VgAWg3c7rU" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                <i className="fab fa-discord text-xl"></i>
              </a>
            </div>
          </div>

          {/* Channels */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Channels</h3>
            <ul className="space-y-2 sm:space-y-3">
              {channelLinks.slice(0, 5).map((link, index) => (
                <li key={index}>
                  <Link 
                    to={getLocalizedPath(link.path)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to={getLocalizedPath('/channels')}
                  className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
                >
                  View All Channels →
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Solutions</h3>
            <ul className="space-y-2 sm:space-y-3">
              {solutionLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={getLocalizedPath(link.path)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    <Zap className="h-3 w-3 mr-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Industries</h3>
            <ul className="space-y-2 sm:space-y-3">
              {industryLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={getLocalizedPath(link.path)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to={getLocalizedPath('/industries')}
                  className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
                >
                  View All Industries →
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Company */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  {link.href ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  ) : link.path ? (
                    <Link 
                      to={getLocalizedPath(link.path)}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>
            
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 mt-8">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
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
                © {new Date().getFullYear()} Seasalt.ai. All rights reserved.
              </p>
              <div className="flex space-x-3 sm:space-x-4 text-xs sm:text-sm">
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <a href="#security" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Security
                </a>
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
              Made with <i className="fa fa-heart text-red-500"></i> in the city of{' '}
              <i className="fa fa-coffee text-brown-500"></i>{' '}
              <i className="fa fa-umbrella text-blue-500"></i>{' '}
              <i className="fa fa-plane text-gray-500"></i>{' '}
              <i className="fa fa-diamond text-purple-500"></i>
            </p>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            Ready to Scale Your Outreach to Millions?
          </h3>
          <p className="text-white opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands of companies using SeaX to reach more customers, generate more leads, and grow faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              className="bg-white text-blue-600 hover:bg-gray-50 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
            >
              Sign Up Now
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
