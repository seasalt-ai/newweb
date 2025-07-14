import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle, Stethoscope, Calendar, Users, AlertCircle, Heart } from 'lucide-react';

const Healthcare = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const challenges = [
    {
      icon: <Stethoscope className="w-6 h-6 text-blue-600" />,
      title: "Patient Follow-up",
      description: "Ensuring timely follow-up with patients post-discharge or after appointments to prevent readmissions and improve care outcomes."
    },
    {
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      title: "Appointment Scheduling",
      description: "Managing appointment bookings efficiently while reducing no-show rates, optimizing doctors' schedules, and enhancing patient satisfaction."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Chronic Care Management",
      description: "Keeping patients with chronic conditions engaged in their care plans through consistent communication and education."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-blue-600" />,
      title: "Emergency Alerts",
      description: "Rapidly communicating critical health alerts and emergency information to patients, staff, and stakeholders."
    },
    {
      icon: <Heart className="w-6 h-6 text-blue-600" />,
      title: "Patient Education",
      description: "Providing patients and caregivers with up-to-date information and guidance for better health management and decision-making."
    }
  ];

  const useCases = [
    {
      title: "Patient Reminders",
      description: "Automatically send personalized SMS reminders for upcoming appointments, medication schedules, and preventive screenings.",
      benefits: ["Reduced no-shows", "Improved medication adherence", "Better health outcomes"]
    },
    {
      title: "Chronic Condition Monitoring",
      description: "Engage chronic care patients with ongoing communication, educational resources, and progress tracking to enhance their quality of life.",
      benefits: ["Improved patient satisfaction", "Decreased readmission rates", "Enhanced care coordination"]
    },
    {
      title: "Crisis Alerts",
      description: "Distribute urgent alerts and updates to patients and healthcare teams during public health emergencies or natural disasters.",
      benefits: ["Faster information dissemination", "Greater patient trust", "Effective crisis management"]
    },
    {
      title: "Telehealth Appointment Setup",
      description: "Guide patients through telehealth setup and provide technical support to ensure successful virtual appointments.",
      benefits: ["Expanded access to care", "Higher patient engagement", "Reduced travel barriers"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="SeaX for Healthcare - Improve Patient Engagement & Care Delivery"
        description="Enhance your healthcare services with SeaX's innovative messaging platform. Improve patient engagement, streamline care coordination, and deliver better health outcomes."
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            SeaX for
            <span className="text-blue-600 block">Healthcare</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Elevate patient engagement and improve care outcomes with automated messaging solutions tailored for healthcare providers.
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
              Healthcare Challenges We Solve
            </h2>
            <p className="text-lg text-gray-600">
              Overcoming common obstacles in healthcare delivery through advanced communication methods
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
              Healthcare Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              Real-world examples of how SeaX transforms healthcare delivery
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
              Healthcare Results Achieved with SeaX
            </h2>
            <p className="text-xl text-blue-100">
              Proven impact for healthcare providers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">40%</div>
              <div className="text-blue-100">Reduction in No-shows</div>
              <div className="text-sm text-blue-200 mt-2">With timely appointment reminders</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">35%</div>
              <div className="text-blue-100">Increase in Patient Engagement</div>
              <div className="text-sm text-blue-200 mt-2">Through personalized communication strategies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">60%</div>
              <div className="text-blue-100">Faster Crisis Response</div>
              <div className="text-sm text-blue-200 mt-2">During emergencies and public health alerts</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Healthcare Services?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Partner with SeaX to revolutionize patient experience and care delivery
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

export default Healthcare;
