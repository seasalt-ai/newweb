import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle, Home, Phone, Calendar, Users, Clock, MessageSquare } from 'lucide-react';

const RealEstate = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const challenges = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Lead Response Time",
      description: "Real estate leads go cold quickly. Every minute counts when a potential buyer or seller reaches out, but agents often miss calls or respond too late."
    },
    {
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      title: "Appointment Scheduling",
      description: "Coordinating property showings, meetings, and closings across multiple parties leads to scheduling conflicts and missed opportunities."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Client Communication",
      description: "Managing ongoing communication with buyers, sellers, lenders, and other agents across multiple properties becomes overwhelming."
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "After-Hours Availability",
      description: "Real estate doesn't stop at 5 PM. Clients expect responses evenings and weekends, but agents need personal time too."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
      title: "Follow-up Consistency",
      description: "Maintaining consistent follow-up with leads and past clients for referrals requires systematic communication that's hard to manage manually."
    },
    {
      icon: <Home className="w-6 h-6 text-blue-600" />,
      title: "Property Updates",
      description: "Keeping interested buyers informed about price changes, new listings, and market updates requires constant manual effort."
    }
  ];

  const useCases = [
    {
      title: "Instant Lead Response",
      description: "Automatically respond to new leads within seconds via SMS, capturing their interest while it's hot and qualifying them for immediate follow-up.",
      benefits: ["5x faster response time", "Automated lead qualification", "Never miss a lead again"]
    },
    {
      title: "Automated Appointment Scheduling",
      description: "Let clients book property showings and consultations directly through SMS, with automatic calendar integration and reminder notifications.",
      benefits: ["Reduced scheduling conflicts", "Automatic reminders", "Calendar integration"]
    },
    {
      title: "Transaction Updates",
      description: "Keep all parties informed throughout the buying/selling process with automated updates on inspections, financing, and closing progress.",
      benefits: ["Reduced anxiety for clients", "Fewer status calls", "Smoother transactions"]
    },
    {
      title: "Market Updates & Nurturing",
      description: "Stay top-of-mind with past clients and leads through automated market reports, new listing alerts, and personalized property recommendations.",
      benefits: ["Increased referrals", "More repeat business", "Consistent market presence"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="SeaX for Real Estate - Instant Lead Response & Client Communication"
        description="Transform your real estate business with SeaX's automated messaging platform. Respond to leads instantly, schedule showings automatically, and keep clients informed throughout transactions."
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            SeaX for
            <span className="text-blue-600 block">Real Estate</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Never miss a lead again. Automate your client communication, schedule showings instantly, and close more deals with intelligent messaging.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get Industry Solution</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <Link
              to={getLocalizedPath('/features')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Features
            </Link>
          </div>
        </div>
      </div>

      {/* Industry Challenges */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real Estate Challenges We Solve
            </h2>
            <p className="text-lg text-gray-600">
              Common communication challenges faced by real estate professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  {challenge.icon}
                  <h3 className="text-lg font-semibold text-gray-900">{challenge.title}</h3>
                </div>
                <p className="text-gray-600">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real Estate Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              How real estate professionals use SeaX to grow their business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Stats */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Real Estate Results with SeaX
            </h2>
            <p className="text-xl text-blue-100">
              Proven outcomes for real estate professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5x</div>
              <div className="text-blue-100">Faster Lead Response</div>
              <div className="text-sm text-blue-200 mt-2">From hours to seconds</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">40%</div>
              <div className="text-blue-100">More Appointments Booked</div>
              <div className="text-sm text-blue-200 mt-2">Through automated scheduling</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">25%</div>
              <div className="text-blue-100">Increase in Referrals</div>
              <div className="text-sm text-blue-200 mt-2">Better client relationships</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Real Estate Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of real estate professionals using SeaX to respond faster, book more appointments, and close more deals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <Link
              to={getLocalizedPath('/pricing')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RealEstate;
