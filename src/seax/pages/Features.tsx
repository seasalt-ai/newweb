import Header from '../components/Header';
import SEOHelmet from '../../components/SEOHelmet';
import { useTranslation } from 'react-i18next';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
import { 
  MessageSquare, 
  BarChart3, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Bot,
  Lock,
  Building2
} from 'lucide-react';
import { seaxCoreFeatures } from '../data/seaxFeatures';

const Features = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Feature Categories 使用 i18n
  const featureCategories = [
    {
      title: t("seax.features.categories.messaging.title"),
      icon: MessageSquare,
      color: 'blue',
      features: [
        {
          name: t("seax.features.categories.messaging.sms.name"),
          description: t("seax.features.categories.messaging.sms.description"),
          link: '/channels/sms'
        },
        {
          name: t("seax.features.categories.messaging.whatsapp.name"),
          description: t("seax.features.categories.messaging.whatsapp.description"),
          link: '/channels/whatsapp'
        },
        {
          name: t("seax.features.categories.messaging.voice.name"),
          description: t("seax.features.categories.messaging.voice.description"),
          link: '/channels/voice'
        }
      ]
    },
    {
      title: t("seax.features.categories.aiAutomation.title"),
      icon: Bot,
      color: 'green',
      features: [
        {
          name: t("seax.features.categories.aiAutomation.followup.name"),
          description: t("seax.features.categories.aiAutomation.followup.description"),
          link: '/features'
        },
        {
          name: t("seax.features.categories.aiAutomation.responses.name"),
          description: t("seax.features.categories.aiAutomation.responses.description"),
          link: '/features'
        },
        {
          name: t("seax.features.categories.aiAutomation.scoring.name"),
          description: t("seax.features.categories.aiAutomation.scoring.description"),
          link: '/features'
        }
      ]
    },
    {
      title: t("seax.features.categories.analytics.title"),
      icon: BarChart3,
      color: 'purple',
      features: [
        {
          name: t("seax.features.categories.analytics.dashboard.name"),
          description: t("seax.features.categories.analytics.dashboard.description"),
          link: '/features'
        },
        {
          name: t("seax.features.categories.analytics.tracking.name"),
          description: t("seax.features.categories.analytics.tracking.description"),
          link: '/features'
        },
        {
          name: t("seax.features.categories.analytics.reporting.name"),
          description: t("seax.features.categories.analytics.reporting.description"),
          link: '/features'
        }
      ]
    },
    {
      title: t("seax.features.categories.enterprise.title"),
      icon: Shield,
      color: 'red',
      features: [
        {
          name: t("seax.features.categories.enterprise.gdpr.name"),
          description: t("seax.features.categories.enterprise.gdpr.description"),
          link: '/features'
        },
        {
          name: t("seax.features.categories.enterprise.team.name"),
          description: t("seax.features.categories.enterprise.team.description"),
          link: '/features'
        },
        {
          name: t("seax.features.categories.enterprise.sla.name"),
          description: t("seax.features.categories.enterprise.sla.description"),
          link: '/features'
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      red: 'bg-red-100 text-red-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t("seax.features.seo.title")}
        description={t("seax.features.seo.description")}
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t("seax.features.hero.title")}
            <span className="text-blue-600 block">
              {t("seax.features.hero.titleHighlight")}
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t("seax.features.hero.description")}
          </p>
          
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span>{t("seax.features.hero.stats.messages")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-blue-500" />
              <span>{t("seax.features.hero.stats.countries")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="w-5 h-5 text-green-500" />
              <span>{t("seax.features.hero.stats.security")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("seax.features.core.title")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("seax.features.core.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Bulk Messaging */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("seax.features.core.bulkMessaging.title")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("seax.features.core.bulkMessaging.description")}
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {t("seax.features.core.bulkMessaging.metrics.value")}
                </div>
                <div className="text-sm text-gray-600">
                  {t("seax.features.core.bulkMessaging.metrics.label")}
                </div>
              </div>
              <div className="space-y-2">
                {Object.values(
                  t("seax.features.core.bulkMessaging.benefits", { returnObjects: true })
                ).map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Follow-Up */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("seax.features.core.aiFollowup.title")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("seax.features.core.aiFollowup.description")}
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {t("seax.features.core.aiFollowup.metrics.value")}
                </div>
                <div className="text-sm text-gray-600">
                  {t("seax.features.core.aiFollowup.metrics.label")}
                </div>
              </div>
              <div className="space-y-2">
                {Object.values(
                  t("seax.features.core.aiFollowup.benefits", { returnObjects: true })
                ).map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Real-Time Analytics */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("seax.features.core.analytics.title")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("seax.features.core.analytics.description")}
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {t("seax.features.core.analytics.metrics.value")}
                </div>
                <div className="text-sm text-gray-600">
                  {t("seax.features.core.analytics.metrics.label")}
                </div>
              </div>
              <div className="space-y-2">
                {Object.values(
                  t("seax.features.core.analytics.benefits", { returnObjects: true })
                ).map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance & Deliverability */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("seax.features.core.compliance.title")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("seax.features.core.compliance.description")}
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {t("seax.features.core.compliance.metrics.value")}
                </div>
                <div className="text-sm text-gray-600">
                  {t("seax.features.core.compliance.metrics.label")}
                </div>
              </div>
              <div className="space-y-2">
                {Object.values(
                  t("seax.features.core.compliance.benefits", { returnObjects: true })
                ).map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Collaboration */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("seax.features.core.collaboration.title")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("seax.features.core.collaboration.description")}
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {t("seax.features.core.collaboration.metrics.value")}
                </div>
                <div className="text-sm text-gray-600">
                  {t("seax.features.core.collaboration.metrics.label")}
                </div>
              </div>
              <div className="space-y-2">
                {Object.values(
                  t("seax.features.core.collaboration.benefits", { returnObjects: true })
                ).map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Scale */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("seax.features.core.scale.title")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("seax.features.core.scale.description")}
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {t("seax.features.core.scale.metrics.value")}
                </div>
                <div className="text-sm text-gray-600">
                  {t("seax.features.core.scale.metrics.label")}
                </div>
              </div>
              <div className="space-y-2">
                {Object.values(
                  t("seax.features.core.scale.benefits", { returnObjects: true })
                ).map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Feature Categories */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("seax.features.categories.title")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("seax.features.categories.description")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featureCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-lg ${getColorClasses(category.color)}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {feature.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integration & API Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("seax.features.integrations.title")}
            </h2>
            <p className="text-xl text-blue-100">
              {t("seax.features.integrations.description")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CRM */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="bg-white/20 p-3 rounded-lg w-fit mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {t("seax.features.integrations.crm.title")}
              </h3>
              <p className="text-blue-100 mb-4">
                {t("seax.features.integrations.crm.description")}
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{t("seax.features.integrations.crm.sync")}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{t("seax.features.integrations.crm.mapping")}</span>
                </li>
              </ul>
            </div>

            {/* Analytics */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="bg-white/20 p-3 rounded-lg w-fit mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {t("seax.features.integrations.analytics.title")}
              </h3>
              <p className="text-blue-100 mb-4">
                {t("seax.features.integrations.analytics.description")}
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{t("seax.features.integrations.analytics.exports")}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{t("seax.features.integrations.analytics.dashboards")}</span>
                </li>
              </ul>
            </div>

            {/* API */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="bg-white/20 p-3 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {t("seax.features.integrations.api.title")}
              </h3>
              <p className="text-blue-100 mb-4">
                {t("seax.features.integrations.api.description")}
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{t("seax.features.integrations.api.endpoints")}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{t("seax.features.integrations.api.webhooks")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("seax.features.cta.title")}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t("seax.features.cta.description")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getMeetingUrl(currentLanguage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{t("seax.features.cta.button")}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

