import Header from '../../components/Header';
import SEOHelmet from '../../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle, TrendingUp, Calendar, Clock, MessageSquare, Users, Bell, BarChart3 } from 'lucide-react';

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
            AppointmentReminders
            <span className="text-blue-600 block">Solution</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business communication with our comprehensive AppointmentReminders solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={getLocalizedPath('/contact-sales')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to={getLocalizedPath('/how-it-works')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for successful AppointmentReminders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6'].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                </div>
                <p className="text-gray-600">
                  Detailed description of {feature} and how it benefits your business.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
                <div className="text-gray-600">Improvement</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="text-4xl font-bold text-purple-600 mb-2">50%</div>
                <div className="text-gray-600">Time Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your AppointmentReminders?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses achieving better results with SeaX
          </p>
          
          <Link
            to={getLocalizedPath('/contact-sales')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppointmentReminders;
