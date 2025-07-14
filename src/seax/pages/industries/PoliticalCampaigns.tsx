import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle, Megaphone, Users, MessageSquare, Gift, ThumbsUp, DollarSign } from 'lucide-react';

const PoliticalCampaigns = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const challenges = [
    {
      icon: <Megaphone className="w-6 h-6 text-blue-600" />,
      title: "Voter Outreach",
      description: "Reaching and mobilizing a diverse voter base across multiple channels is a significant challenge for modern campaigns."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Volunteer Coordination",
      description: "Organizing and communicating with volunteers for events, canvassing, and phone banking requires constant effort."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
      title: "Personalized Messaging",
      description: "Delivering personalized messages to voters based on their interests, location, and a candidate's platform is crucial but difficult."
    },
    {
      icon: <Gift className="w-6 h-6 text-blue-600" />,
      title: "Fundraising",
      description: "Raising funds from a large number of small-dollar donors requires continuous engagement and a simple donation process."
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-blue-600" />,
      title: "Get Out the Vote (GOTV)",
      description: "Effectively reminding and mobilizing supporters to vote on election day is a major logistical challenge."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-600" />,
      title: "Donation Follow-up",
      description: "Thanking donors promptly and keeping them engaged after they contribute is essential for future fundraising success."
    }
  ];

  const useCases = [
    {
      title: "Voter Registration Drives",
      description: "Use SMS to send voter registration links, answer questions, and guide voters through the registration process.",
      benefits: ["Increased voter registration", "Automated follow-up", "Reduced administrative work"]
    },
    {
      title: "Event RSVPs & Reminders",
      description: "Manage RSVPs for campaign rallies, town halls, and other events with automated SMS reminders to maximize attendance.",
      benefits: ["Higher event attendance", "Automated reminders", "Easy RSVP management"]
    },
    {
      title: "Fundraising Appeals",
      description: "Send targeted fundraising appeals via SMS with a direct link to donate, making it easy for supporters to contribute.",
      benefits: ["Increased donations", "Higher conversion rates", "Simplified donation process"]
    },
    {
      title: "GOTV & Election Day Reminders",
      description: "Send personalized reminders to supporters on election day with their polling location and hours to maximize voter turnout.",
      benefits: ["Higher voter turnout", "Personalized reminders", "Reduced get-out-the-vote costs"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="SeaX for Political Campaigns - Mobilize Voters & Win Elections"
        description="Transform your political campaign with SeaX's powerful messaging platform. Reach more voters, raise more money, and mobilize supporters to win on election day."
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            SeaX for
            <span className="text-blue-600 block">Political Campaigns</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Reach every voter, mobilize your supporters, and win your election with the ultimate messaging platform for political campaigns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get Campaign Solution</span>
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
              Political Campaign Challenges We Solve
            </h2>
            <p className="text-lg text-gray-600">
              Common communication challenges faced by modern political campaigns
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
              Political Campaign Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              How political campaigns use SeaX to win elections
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
              Campaign Results with SeaX
            </h2>
            <p className="text-xl text-blue-100">
              Proven outcomes for political campaigns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15%</div>
              <div className="text-blue-100">Increase in Voter Turnout</div>
              <div className="text-sm text-blue-200 mt-2">Through targeted GOTV messages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">25%</div>
              <div className="text-blue-100">More Donations</div>
              <div className="text-sm text-blue-200 mt-2">From simplified fundraising appeals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50%</div>
              <div className="text-blue-100">More Volunteers</div>
              <div className="text-sm text-blue-200 mt-2">Through better coordination</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Win Your Election?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of campaigns using SeaX to mobilize voters, raise money, and win on election day.
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

export default PoliticalCampaigns;
