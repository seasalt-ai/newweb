import { BarChart3, TrendingUp, Users, Clock, Target, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AnalyticsPage = () => {
  const { t } = useTranslation();
  
  const metrics = [
    {
      icon: Users,
      title: t('features.analytics.metrics.satisfaction.title', 'Customer Satisfaction'),
      value: '94.5%',
      change: '+2.3%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: t('features.analytics.metrics.responseTime.title', 'Average Response Time'),
      value: '1.2 min',
      change: '-15%',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Target,
      title: t('features.analytics.metrics.resolution.title', 'Resolution Rate'),
      value: '87.3%',
      change: '+5.1%',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: t('features.analytics.metrics.growth.title', 'Monthly Growth'),
      value: '23.4%',
      change: '+8.2%',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const features = [
    {
      icon: BarChart3,
      title: t('features.analytics.features.dashboards.title', 'Real-time Dashboards'),
      description: t('features.analytics.features.dashboards.description', 'Monitor your support performance with live, customizable dashboards.'),
      benefits: [
        t('features.analytics.features.dashboards.benefits.metrics', 'Live performance metrics'), 
        t('features.analytics.features.dashboards.benefits.kpi', 'Custom KPI tracking'), 
        t('features.analytics.features.dashboards.benefits.team', 'Team performance views'), 
        t('features.analytics.features.dashboards.benefits.alerts', 'Alert notifications')
      ]
    },
    {
      icon: TrendingUp,
      title: t('features.analytics.features.reporting.title', 'Advanced Reporting'),
      description: t('features.analytics.features.reporting.description', 'Generate detailed reports with actionable insights and trends.'),
      benefits: [
        t('features.analytics.features.reporting.benefits.automated', 'Automated report generation'), 
        t('features.analytics.features.reporting.benefits.dates', 'Custom date ranges'), 
        t('features.analytics.features.reporting.benefits.export', 'Export capabilities'), 
        t('features.analytics.features.reporting.benefits.scheduled', 'Scheduled delivery')
      ]
    },
    {
      icon: Eye,
      title: t('features.analytics.features.journey.title', 'Customer Journey Analytics'),
      description: t('features.analytics.features.journey.description', 'Track customer interactions across all touchpoints and channels.'),
      benefits: [
        t('features.analytics.features.journey.benefits.tracking', 'Multi-channel tracking'), 
        t('features.analytics.features.journey.benefits.visualization', 'Journey visualization'), 
        t('features.analytics.features.journey.benefits.conversion', 'Conversion analysis'), 
        t('features.analytics.features.journey.benefits.dropoff', 'Drop-off identification')
      ]
    },
    {
      icon: Target,
      title: t('features.analytics.features.optimization.title', 'Performance Optimization'),
      description: t('features.analytics.features.optimization.description', 'Identify bottlenecks and optimize your support operations.'),
      benefits: [
        t('features.analytics.features.optimization.benefits.bottlenecks', 'Bottleneck detection'), 
        t('features.analytics.features.optimization.benefits.resources', 'Resource allocation'), 
        t('features.analytics.features.optimization.benefits.efficiency', 'Efficiency recommendations'), 
        t('features.analytics.features.optimization.benefits.roi', 'ROI analysis')
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <BarChart3 className="w-16 h-16 text-blue-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('features.analytics.title', 'Analytics & Insights')}
              </h1>
            </div>
            <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
              {t('features.analytics.subtitle', 'Make data-driven decisions with comprehensive analytics that reveal customer behavior, agent performance, and optimization opportunities.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
              >
                {t('common.signUpForFree', 'Sign Up For Free')}
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
              >
                {t('common.scheduleDemo', 'Schedule Demo')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.analytics.metricsTitle', 'Key Performance Metrics')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.analytics.metricsSubtitle', 'Track the metrics that matter most to your customer support success.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</h3>
                  <p className="text-gray-600 mb-2">{metric.title}</p>
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {metric.change} {t('features.analytics.metrics.period', 'this month')}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Analytics Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.analytics.featuresTitle', 'Comprehensive Analytics Suite')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.analytics.featuresSubtitle', 'Everything you need to understand, measure, and improve your customer support operations.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{feature.description}</p>
                  
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.analytics.dashboardTitle', 'Interactive Dashboard Preview')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.analytics.dashboardSubtitle', 'See how our analytics dashboard provides actionable insights at a glance.')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold mb-6">{t('features.analytics.dashboard.overview', 'Performance Overview')}</h3>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="h-64 flex items-end justify-between space-x-2">
                    {[65, 78, 82, 71, 89, 94, 87, 92, 85, 96, 88, 91].map((height, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-blue-400 to-purple-400 rounded-t flex-1"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 text-sm text-blue-200">
                    <span>{t('features.analytics.dashboard.months.jan', 'Jan')}</span>
                    <span>{t('features.analytics.dashboard.months.dec', 'Dec')}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6">{t('features.analytics.dashboard.quickStats', 'Quick Stats')}</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold">1,247</div>
                    <div className="text-blue-200">{t('features.analytics.dashboard.activeConversations', 'Active Conversations')}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold">98.2%</div>
                    <div className="text-blue-200">{t('features.analytics.dashboard.systemUptime', 'System Uptime')}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold">4.8/5</div>
                    <div className="text-blue-200">{t('features.analytics.dashboard.customerRating', 'Customer Rating')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('features.analytics.ctaTitle', 'Start Making Data-Driven Decisions')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('features.analytics.ctaSubtitle', 'Unlock the power of analytics to optimize your customer support and drive business growth.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              {t('common.signUpForFree', 'Sign Up For Free')}
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-606 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center"
            >
              {t('common.scheduleDemo', 'Schedule Demo')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsPage;