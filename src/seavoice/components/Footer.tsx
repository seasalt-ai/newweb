
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Platform: [
      { name: 'AI Voice Agents', href: '/seavoice/platform/voice-agents' },
      { name: 'Conversational AI', href: '/seavoice/platform/conversational-ai' },
      { name: 'Speech-to-Text', href: '/seavoice/platform/speech-to-text' },
      { name: 'Telephony & Connectivity', href: '/seavoice/platform/telephony' },
      { name: 'Integrations & Channels', href: '/seavoice/platform/integrations' },
    ],
    Solutions: [
      { name: 'Healthcare', href: '/seavoice/solutions/healthcare' },
      { name: 'E-commerce', href: '/seavoice/solutions/ecommerce' },
      { name: 'Hospitality', href: '/seavoice/solutions/hospitality' },
      { name: 'Financial Services', href: '/seavoice/solutions/financial' },
    ],
    Developers: [
      { name: 'API Docs', href: '/seavoice/developers/api' },
      { name: 'Quickstarts', href: '/seavoice/developers/quickstart' },
      { name: 'SDKs', href: '/seavoice/developers/sdks' },
      { name: 'API Status', href: '/seavoice/developers/status' },
    ],
    Resources: [
      { name: 'Blog', href: '/seavoice/resources/blog' },
      { name: 'Case Studies', href: '/seavoice/resources/case-studies' },
      { name: 'Analyst Reports', href: '/seavoice/resources/reports' },
      { name: 'Webinars', href: '/seavoice/resources/webinars' },
    ],
    Company: [
      { name: 'About Us', href: '/seavoice/company/about' },
      { name: 'Careers', href: '/seavoice/company/careers' },
      { name: 'Press', href: '/seavoice/company/press' },
      { name: 'Contact Us', href: '/seavoice/company/contact' },
    ],
  };

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
            <p className="text-gray-400 mb-4">
              Automate 80% of customer calls with AI voice agents that sound human and integrate seamlessly with your business.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest news and updates from SeaVoice.</p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>Seasalt.ai Headquarters: Redmond, WA</p>
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link to="/seavoice/legal/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/seavoice/legal/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/seavoice/legal/security" className="hover:text-white transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;