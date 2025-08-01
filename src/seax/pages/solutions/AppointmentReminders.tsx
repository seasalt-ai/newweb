import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Calendar, Clock, MessageSquare, Users, Bell, BarChart3 } from 'lucide-react';

const AppointmentReminders = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Automatically schedule appointments and send confirmations across SMS, WhatsApp, and voice calls.'
    },
    {
      icon: Clock,
      title: 'Multi-Stage Reminders',
      description: 'Send personalized reminders at optimal intervals - 24 hours, 1 hour, and 15 minutes before appointments.'
    },
    {
      icon: MessageSquare,
      title: 'Two-Way Communication',
      description: 'Allow customers to confirm, reschedule, or cancel appointments directly via SMS or WhatsApp.'
    },
    {
      icon: Users,
      title: 'Staff Notifications',
      description: 'Keep your team informed with real-time updates on appointment changes and confirmations.'
    },
    {
      icon: Bell,
      title: 'Custom Alerts',
      description: 'Set up custom reminder schedules and messages for different appointment types and durations.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Track no-show rates, confirmation rates, and optimize your reminder strategy with detailed analytics.'
    }
  ];

  const useCases = [
    {
      title: 'Healthcare Practices',
      description: 'Reduce no-shows for medical appointments with automated reminders and easy rescheduling options.',
      stats: '40% reduction in no-shows'
    },
    {
      title: 'Beauty & Wellness',
      description: 'Keep salon and spa appointments on track with personalized reminders and confirmation requests.',
      stats: '85% confirmation rate'
    },
    {
      title: 'Professional Services',
      description: 'Ensure consultations and meetings happen on time with multi-channel reminder sequences.',
      stats: '90% attendance rate'
    },
    {
      title: 'Automotive Services',
      description: 'Remind customers of service appointments and maintenance schedules automatically.',
      stats: '60% increase in repeat visits'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="Appointment Reminders - SeaX Automated Scheduling"
        description="Reduce no-shows and improve attendance with automated appointment reminders via SMS, WhatsApp, and voice calls. Smart scheduling and confirmation system."
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Appointment Reminders
            <span className="text-blue-600 block">That Work</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Reduce no-shows and improve attendance with automated appointment reminders 
            via SMS, WhatsApp, and voice calls. Smart scheduling with two-way communication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Start Reducing No-Shows</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <Link
              to={getLocalizedPath('/demo')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Reminder Features
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to keep appointments on track and reduce no-shows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
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
              Industry Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              Proven appointment reminder strategies across different industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-blue-800">{useCase.stats}</div>
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
              Proven Results
            </h2>
            <p className="text-lg text-gray-600">
              See what our clients achieve with SeaX Appointment Reminders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-gray-600">Reduction in No-Shows</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
                <div className="text-gray-600">Attendance Rate</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">75%</div>
                <div className="text-gray-600">Time Savings</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Reduce No-Shows and Improve Attendance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses improving appointment attendance with SeaX
          </p>
          
          <a
            href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
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

export default AppointmentReminders;
