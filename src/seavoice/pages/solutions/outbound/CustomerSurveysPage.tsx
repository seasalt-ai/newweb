
import { motion } from 'framer-motion';
import { MessageSquare, BarChart3, Users, Star, CheckCircle, TrendingUp } from 'lucide-react';

const CustomerSurveysPage = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Conversational Surveys',
      description: 'Natural voice conversations that feel like friendly discussions rather than formal surveys.',
      benefits: ['Higher response rates', 'Natural interactions', 'Detailed feedback']
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Instant analysis and reporting of survey responses with actionable insights.',
      benefits: ['Live dashboards', 'Sentiment analysis', 'Trend identification']
    },
    {
      icon: Users,
      title: 'Targeted Outreach',
      description: 'Reach specific customer segments with personalized survey experiences.',
      benefits: ['Demographic targeting', 'Behavioral segmentation', 'Custom timing']
    }
  ];

  const surveyTypes = [
    {
      type: 'Customer Satisfaction (CSAT)',
      description: 'Measure overall satisfaction with products, services, or interactions',
      questions: ['How satisfied are you with our service?', 'What could we improve?', 'Would you recommend us?'],
      metrics: ['CSAT Score', 'Net Promoter Score', 'Response Rate']
    },
    {
      type: 'Post-Purchase Feedback',
      description: 'Gather insights immediately after a purchase or service interaction',
      questions: ['How was your buying experience?', 'Did the product meet expectations?', 'Any delivery issues?'],
      metrics: ['Purchase Satisfaction', 'Delivery Rating', 'Product Quality']
    },
    {
      type: 'Product Development',
      description: 'Collect input for new features, products, or service improvements',
      questions: ['What features would you like to see?', 'How do you use our product?', 'What problems need solving?'],
      metrics: ['Feature Requests', 'Usage Patterns', 'Pain Points']
    },
    {
      type: 'Market Research',
      description: 'Understand market trends, preferences, and competitive landscape',
      questions: ['What brands do you prefer?', 'How do you make purchasing decisions?', 'What influences your choices?'],
      metrics: ['Brand Awareness', 'Purchase Drivers', 'Market Trends']
    }
  ];

  const benefits = [
    { metric: '3x', description: 'Higher response rate than traditional surveys' },
    { metric: '85%', description: 'Survey completion rate' },
    { metric: '60%', description: 'More detailed feedback collected' },
    { metric: '24/7', description: 'Automated survey deployment' }
  ];

  const analysisFeatures = [
    'Real-time sentiment analysis',
    'Automated response categorization',
    'Trend identification and alerts',
    'Custom reporting dashboards',
    'Integration with CRM systems',
    'Actionable insights generation'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <MessageSquare className="w-16 h-16 text-cyan-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Customer Survey Automation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Gather valuable customer feedback through natural voice conversations. 
              Conduct automated surveys that feel personal and engaging, achieving 
              higher response rates and more detailed insights than traditional methods.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              Start Survey Campaign
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
              Intelligent Survey Features
            </h2>
            <p className="text-xl text-gray-600">
              Advanced AI technology that makes surveys feel like natural conversations
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
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Survey Types */}
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
              Comprehensive Survey Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Tailored survey types for different business objectives and insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {surveyTypes.map((survey, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{survey.type}</h3>
                <p className="text-gray-600 mb-6">{survey.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm mb-3">Sample Questions:</h4>
                  <div className="space-y-2">
                    {survey.questions.map((question, questionIndex) => (
                      <div key={questionIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2 mt-2"></div>
                        <span className="text-sm text-gray-700 italic">"{question}"</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 bg-cyan-50 rounded-lg">
                  <h4 className="font-semibold text-cyan-900 text-sm mb-2">Key Metrics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {survey.metrics.map((metric, metricIndex) => (
                      <span key={metricIndex} className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis & Insights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced Analytics & Insights
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our AI doesn't just collect responses—it analyzes sentiment, identifies trends, 
                and provides actionable insights that help you make data-driven decisions to 
                improve your business.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-cyan-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Sentiment Analysis</h3>
                    <p className="text-gray-600">Understand emotional tone behind responses</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-6 h-6 text-cyan-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Trend Identification</h3>
                    <p className="text-gray-600">Spot patterns and emerging issues early</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-cyan-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Actionable Reports</h3>
                    <p className="text-gray-600">Get specific recommendations for improvement</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Analysis Features</h3>
              <div className="grid grid-cols-1 gap-3">
                {analysisFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Live Survey Dashboard</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Responses Today:</span>
                    <span className="font-semibold text-cyan-600">1,847</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Completion Rate:</span>
                    <span className="font-semibold text-green-600">85.3%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Avg. Satisfaction:</span>
                    <span className="font-semibold text-blue-600">4.2/5</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Sentiment:</span>
                    <span className="font-semibold text-green-600">78% Positive</span>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Survey Performance Results
            </h2>
            <p className="text-xl text-gray-600">
              Proven improvements in feedback collection and customer insights
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
                <div className="text-4xl font-bold text-cyan-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Gather Better Customer Insights?</h2>
            <p className="text-xl mb-8 opacity-90">
              Start collecting valuable feedback with conversational surveys that customers actually want to complete
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Launch Survey Campaign
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                See Sample Survey
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomerSurveysPage;