
import { motion } from 'framer-motion';
import { UserPlus, Target, BarChart3, Heart, CheckCircle } from 'lucide-react';

const CustomerReactivationPage = () => {
  const features = [
    {
      icon: Target,
      title: 'Personalized Outreach',
      description: 'AI-powered conversations tailored to each customer\'s history and preferences.',
      benefits: ['Custom messaging', 'Historical context', 'Behavioral insights']
    },
    {
      icon: Heart,
      title: 'Win-Back Campaigns',
      description: 'Strategic campaigns designed to re-engage inactive customers with compelling offers.',
      benefits: ['Special promotions', 'Loyalty rewards', 'Exclusive access']
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track reactivation success rates and optimize campaigns for better results.',
      benefits: ['Conversion tracking', 'A/B testing', 'ROI analysis']
    }
  ];

  const reactivationProcess = [
    {
      step: 1,
      title: 'Customer Segmentation',
      description: 'Identify and categorize inactive customers based on their history and value',
      outcome: 'Targeted approach: 3x higher response rate'
    },
    {
      step: 2,
      title: 'Personalized Outreach',
      description: 'AI crafts personalized messages based on customer preferences and history',
      outcome: 'Engagement rate: 45% vs 12% generic'
    },
    {
      step: 3,
      title: 'Offer Presentation',
      description: 'Present compelling win-back offers tailored to customer value and interests',
      outcome: 'Conversion rate: 25% with personalized offers'
    },
    {
      step: 4,
      title: 'Follow-up & Nurturing',
      description: 'Automated follow-up sequences to nurture interested customers back to active status',
      outcome: 'Retention rate: 80% of reactivated customers'
    }
  ];

  const benefits = [
    { metric: '35%', description: 'Customer reactivation rate' },
    { metric: '60%', description: 'Cost reduction vs traditional methods' },
    { metric: '3x', description: 'Higher response rate than generic campaigns' },
    { metric: '80%', description: 'Retention rate of reactivated customers' }
  ];

  const campaignTypes = [
    {
      type: 'Win-Back Offers',
      description: 'Special discounts and promotions to entice customers back',
      tactics: ['Exclusive discounts', 'Limited-time offers', 'Free trials']
    },
    {
      type: 'Feedback Collection',
      description: 'Understand why customers left and address their concerns',
      tactics: ['Exit surveys', 'Concern resolution', 'Service improvements']
    },
    {
      type: 'Product Updates',
      description: 'Inform customers about new features or improvements',
      tactics: ['Feature announcements', 'Benefit explanations', 'Demo invitations']
    },
    {
      type: 'Loyalty Rewards',
      description: 'Recognize past loyalty and offer special treatment',
      tactics: ['VIP status', 'Loyalty points', 'Exclusive access']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <UserPlus className="w-16 h-16 text-orange-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Customer Reactivation Campaigns
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Win back inactive customers with personalized AI-powered outreach campaigns. 
              Re-engage past customers with compelling offers and rebuild valuable relationships 
              that drive recurring revenue.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Start Reactivation Campaign
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Smart Reactivation Features
            </h2>
            <p className="text-xl text-gray-600">
              AI-powered campaigns that understand customer behavior and preferences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reactivation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Reactivation Process
            </h2>
            <p className="text-xl text-gray-600">
              Strategic approach to winning back valuable customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reactivationProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 mb-4">{process.description}</p>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm font-semibold text-orange-800">{process.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Reactivation Campaign Types
            </h2>
            <p className="text-xl text-gray-600">
              Multiple strategies to re-engage different customer segments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campaignTypes.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{campaign.type}</h3>
                <p className="text-gray-600 mb-6">{campaign.description}</p>
                <div className="space-y-2">
                  {campaign.tactics.map((tactic, tacticIndex) => (
                    <div key={tacticIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{tactic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Reactivation Results
            </h2>
            <p className="text-xl text-gray-600">
              Proven success in winning back valuable customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg text-center border border-gray-200"
              >
                <div className="text-4xl font-bold text-orange-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Win Back Your Customers?</h2>
            <p className="text-xl mb-8 opacity-90">
              Start personalized reactivation campaigns that rebuild valuable customer relationships
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Campaign
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomerReactivationPage;