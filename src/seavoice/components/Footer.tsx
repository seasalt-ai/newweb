import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin, Heart, Coffee, Umbrella, Plane, Gem, PhoneCall, Users, Activity } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = {
    Platform: [
      { name: 'Platform Overview', href: '/seavoice/platform' },
      { name: 'Landline & Mobile Voice', href: '/seavoice/platform/landline-mobile' },
      { name: 'VoIP & SIP & BYOC', href: '/seavoice/platform/voip-sip-byoc' },
      { name: 'WhatsApp Voice API', href: '/seavoice/platform/whatsapp-voice' },
      { name: 'Speech-to-Text', href: '/seavoice/platform/speech-to-text' },
      { name: 'Text-to-Speech', href: '/seavoice/platform/text-to-speech' },
    ],
    Solutions: [
      { name: 'Virtual Assistant', href: '/seavoice/solutions/inbound/virtual-assistant' },
      { name: 'Lead Generation', href: '/seavoice/solutions/outbound/lead-generation' },
      { name: 'Appointment Booking', href: '/seavoice/solutions/inbound/appointment-booking' },
      { name: 'Customer Support', href: '/seavoice/solutions/inbound/technical-support' },
      { name: 'View All Solutions', href: '/seavoice/solutions' },
    ],
    Company: [
      { name: 'About Us', href: '/company' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact Us', href: 'https://meetings.hubspot.com/seasalt-ai/seasalt-meeting' },
      { name: 'Careers', href: '#careers' },
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
            <p className="text-gray-400 mb-6">
              Automate 80% of customer calls with AI voice agents that sound human and integrate seamlessly with your business.
            </p>
            
            {/* Contact Information */}
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
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/seasalt-ai/" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@seasaltai" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/SeasaltAI" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://discord.gg/VgAWg3c7rU" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaDiscord className="w-5 h-5" />
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
            {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
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
        <div className="mt-8 pt-8 border-t border-gray-800">
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
                <PhoneCall className="w-4 h-4 mr-1" />
                1M+ Calls Handled
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                50K+ Active Agents
              </span>
              <span className="flex items-center">
                <Activity className="w-4 h-4 mr-1" />
                99.99% Uptime
              </span>
            </div>
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
    </footer>
  );
};

export default Footer;