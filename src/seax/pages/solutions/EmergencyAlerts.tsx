import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, AlertTriangle, Clock, Users, Shield, Bell, MessageSquare } from 'lucide-react';

const EmergencyAlerts = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const features = [
    {
      icon: AlertTriangle,
      title: 'Instant Emergency Broadcasts',
      description: 'Send critical alerts to thousands of recipients simultaneously across SMS, voice, and WhatsApp.'
    },
    {
      icon: Clock,
      title: 'Time-Sensitive Delivery',
      description: 'Prioritized message delivery ensures emergency communications reach recipients immediately.'
    },
    {
      icon: Users,
      title: 'Targeted Recipient Groups',
      description: 'Create and manage specific groups for different types of emergencies and locations.'
    },
    {
      icon: Shield,
      title: 'Reliable Infrastructure',
      description: 'Built on carrier-grade infrastructure to ensure messages get through when it matters most.'
    },
    {
      icon: Bell,
      title: 'Multi-Channel Alerts',
      description: 'Reach people through their preferred communication channels for maximum response rates.'
    },
    {
      icon: MessageSquare,
      title: 'Two-Way Communication',
      description: 'Receive confirmations and responses from recipients to track alert effectiveness.'
    }
  ];

  const useCases = [
    {
      title: 'Corporate Emergency Response',
      description: 'Notify employees about security threats, evacuations, or critical business disruptions.',
      stats: '99.9% delivery success rate'
    },
    {
      title: 'School Safety Alerts',
      description: 'Instantly inform parents, students, and staff about school closures or safety incidents.',
      stats: '30-second average delivery time'
    },
    {
      title: 'Healthcare Critical Alerts',
      description: 'Alert medical staff about code situations, patient emergencies, or facility incidents.',
      stats: '95% response rate within 5 minutes'
    },
    {
      title: 'Public Safety Notifications',
      description: 'Warn communities about natural disasters, hazardous conditions, or public safety threats.',
      stats: '10,000+ recipients per minute'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet
        title="Emergency Alerts - SeaX Notification System"
        description="Send instant emergency alerts with real-time communication across SMS, voice, and WhatsApp. Ensure message delivery in critical situations."
        favicon="/seasalt-ai-favicon.ico"
      />

      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 to-yellow-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Emergency Alerts
            <span className="text-red-600 block">That Save Lives</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Send instant emergency alerts with real-time communication across SMS, voice, and WhatsApp. 
            Ensure message delivery in critical situations when every second counts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Start Sending Alerts</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <Link
              to={getLocalizedPath('/demo')}
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Book a Safety Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Critical Alert Features
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for effective and reliable emergency communications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <IconComponent className="w-6 h-6 text-red-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Emergency Alert Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              Real-world applications to ensure safety and communication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="bg-red-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-red-800">{useCase.stats}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proven Emergency Response
            </h2>
            <p className="text-lg text-gray-600">
              Deliver messages reliably when every second counts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-red-600 mb-2">99.9%</div>
                <div className="text-gray-600">Delivery Success Rate</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-600 mb-2">30 sec</div>
                <div className="text-gray-600">Avg Delivery Time</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Response Within 5 min</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
                <div className="text-gray-600">Messages per Minute</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-red-600 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Ensure Safety and Communication?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations using SeaX to ensure safety and communicate effectively during emergencies.
          </p>

          <a
            href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EmergencyAlerts;
