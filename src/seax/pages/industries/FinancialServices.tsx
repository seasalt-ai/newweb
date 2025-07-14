import Header from '../../components/Header';
import SEOHelmet from '../../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle, CreditCard, Shield, TrendingUp, Bell, User, DollarSign } from 'lucide-react';

const FinancialServices = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const challenges = [
    {
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
      title: "Loan Application Updates",
      description: "Keeping applicants informed throughout the complex loan approval process while maintaining clear communication and building trust."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Fraud Alerts",
      description: "Quickly notifying customers of suspicious account activity and providing secure channels for verification and resolution."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "Investment Updates",
      description: "Delivering timely market updates, portfolio performance, and investment opportunities to clients in a personalized manner."
    },
    {
      icon: <Bell className="w-6 h-6 text-blue-600" />,
      title: "Payment Reminders",
      description: "Sending automated payment reminders and overdue notifications while maintaining professional relationships with clients."
    },
    {
      icon: <User className="w-6 h-6 text-blue-600" />,
      title: "Customer Onboarding",
      description: "Guiding new customers through account setup, verification processes, and initial service activation smoothly."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-600" />,
      title: "Account Notifications",
      description: "Providing real-time updates on account balances, transactions, and important account changes to enhance customer experience."
    }
  ];

  const useCases = [
    {
      title: "Loan Status Updates",
      description: "Automatically notify applicants about loan application progress, required documentation, and approval status with personalized messaging.",
      benefits: ["Reduced customer anxiety", "Faster document submission", "Improved approval rates"]
    },
    {
      title: "Fraud Prevention",
      description: "Instantly alert customers to suspicious activity via SMS with secure verification links to protect accounts and reduce fraud losses.",
      benefits: ["Faster fraud detection", "Reduced financial losses", "Enhanced customer trust"]
    },
    {
      title: "Investment Alerts",
      description: "Send timely market updates, portfolio performance reports, and investment opportunities tailored to each client's preferences.",
      benefits: ["Increased client engagement", "Better investment decisions", "Higher portfolio performance"]
    },
    {
      title: "Payment Collections",
      description: "Automate payment reminders and overdue notifications with personalized messaging that maintains positive customer relationships.",
      benefits: ["Improved collection rates", "Reduced delinquencies", "Better customer retention"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="SeaX for Financial Services - Secure Communication & Client Engagement"
        description="Enhance your financial services with SeaX's secure messaging platform. Improve client communication, streamline loan processes, and boost engagement with automated solutions."
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            SeaX for
            <span className="text-blue-600 block">Financial Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build stronger client relationships and streamline financial operations with secure, automated messaging solutions designed for the financial industry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={getLocalizedPath('/contact-sales')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get Industry Solution</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
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
              Financial Services Challenges We Solve
            </h2>
            <p className="text-lg text-gray-600">
              Common communication challenges in the financial services industry
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
              Financial Services Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              How financial institutions use SeaX to enhance client services
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
              Financial Services Results with SeaX
            </h2>
            <p className="text-xl text-blue-100">
              Proven outcomes for financial institutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">45%</div>
              <div className="text-blue-100">Faster Loan Processing</div>
              <div className="text-sm text-blue-200 mt-2">Through automated status updates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">30%</div>
              <div className="text-blue-100">Reduction in Fraud Losses</div>
              <div className="text-sm text-blue-200 mt-2">With real-time alerts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">60%</div>
              <div className="text-blue-100">Improved Collection Rates</div>
              <div className="text-sm text-blue-200 mt-2">Through timely payment reminders</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Financial Services?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading financial institutions using SeaX to enhance client communication, improve operational efficiency, and drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={getLocalizedPath('/contact-sales')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to={getLocalizedPath('/pricing')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialServices;
