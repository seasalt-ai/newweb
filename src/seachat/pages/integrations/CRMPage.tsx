import React from 'react';
import { Users, Database, FolderSync as Sync, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CRMPage = () => {
  const { t } = useTranslation();
  
  const crmPlatforms = [
    {
      name: t('integrations.crm.platforms.salesforce.name', 'Salesforce'),
      logo: '☁️',
      description: t('integrations.crm.platforms.salesforce.description', 'Complete integration with Salesforce CRM for enterprise teams'),
      features: [
        t('integrations.crm.platforms.salesforce.features.contacts', 'Contact sync'), 
        t('integrations.crm.platforms.salesforce.features.leads', 'Lead management'), 
        t('integrations.crm.platforms.salesforce.features.opportunities', 'Opportunity tracking'), 
        t('integrations.crm.platforms.salesforce.features.fields', 'Custom fields')
      ],
      setupTime: t('integrations.crm.platforms.salesforce.setupTime', '15 minutes'),
      popularity: t('integrations.crm.platforms.salesforce.popularity', 'Most Popular')
    },
    {
      name: t('integrations.crm.platforms.hubspot.name', 'HubSpot'),
      logo: '🧡',
      description: t('integrations.crm.platforms.hubspot.description', 'Seamless HubSpot integration for marketing and sales alignment'),
      features: [
        t('integrations.crm.platforms.hubspot.features.properties', 'Contact properties'), 
        t('integrations.crm.platforms.hubspot.features.deals', 'Deal pipeline'), 
        t('integrations.crm.platforms.hubspot.features.sequences', 'Email sequences'), 
        t('integrations.crm.platforms.hubspot.features.reporting', 'Reporting')
      ],
      setupTime: t('integrations.crm.platforms.hubspot.setupTime', '10 minutes'),
      popularity: t('integrations.crm.platforms.hubspot.popularity', 'Recommended')
    },
    {
      name: t('integrations.crm.platforms.pipedrive.name', 'Pipedrive'),
      logo: '🔵',
      description: t('integrations.crm.platforms.pipedrive.description', 'Simple yet powerful Pipedrive integration for sales teams'),
      features: [
        t('integrations.crm.platforms.pipedrive.features.pipeline', 'Pipeline management'), 
        t('integrations.crm.platforms.pipedrive.features.activity', 'Activity tracking'), 
        t('integrations.crm.platforms.pipedrive.features.history', 'Contact history'), 
        t('integrations.crm.platforms.pipedrive.features.automation', 'Automation')
      ],
      setupTime: t('integrations.crm.platforms.pipedrive.setupTime', '8 minutes'),
      popularity: t('integrations.crm.platforms.pipedrive.popularity', 'Easy Setup')
    },
    {
      name: t('integrations.crm.platforms.zoho.name', 'Zoho CRM'),
      logo: '🟠',
      description: t('integrations.crm.platforms.zoho.description', 'Comprehensive Zoho CRM integration with advanced workflows'),
      features: [
        t('integrations.crm.platforms.zoho.features.scoring', 'Lead scoring'), 
        t('integrations.crm.platforms.zoho.features.workflow', 'Workflow automation'), 
        t('integrations.crm.platforms.zoho.features.modules', 'Custom modules'), 
        t('integrations.crm.platforms.zoho.features.analytics', 'Analytics')
      ],
      setupTime: t('integrations.crm.platforms.zoho.setupTime', '12 minutes'),
      popularity: t('integrations.crm.platforms.zoho.popularity', 'Feature Rich')
    },
    {
      name: t('integrations.crm.platforms.dynamics.name', 'Microsoft Dynamics'),
      logo: '🔷',
      description: t('integrations.crm.platforms.dynamics.description', 'Enterprise-grade integration with Microsoft Dynamics 365'),
      features: [
        t('integrations.crm.platforms.dynamics.features.mapping', 'Entity mapping'), 
        t('integrations.crm.platforms.dynamics.features.processes', 'Business processes'), 
        t('integrations.crm.platforms.dynamics.features.powerbi', 'Power BI integration'), 
        t('integrations.crm.platforms.dynamics.features.security', 'Security')
      ],
      setupTime: t('integrations.crm.platforms.dynamics.setupTime', '20 minutes'),
      popularity: t('integrations.crm.platforms.dynamics.popularity', 'Enterprise')
    },
    {
      name: t('integrations.crm.platforms.freshworks.name', 'Freshworks CRM'),
      logo: '🟢',
      description: t('integrations.crm.platforms.freshworks.description', 'Modern CRM integration with Freshworks suite'),
      features: [
        t('integrations.crm.platforms.freshworks.features.management', 'Contact management'), 
        t('integrations.crm.platforms.freshworks.features.sequences', 'Sales sequences'), 
        t('integrations.crm.platforms.freshworks.features.phone', 'Phone integration'), 
        t('integrations.crm.platforms.freshworks.features.insights', 'AI insights')
      ],
      setupTime: t('integrations.crm.platforms.freshworks.setupTime', '10 minutes'),
      popularity: t('integrations.crm.platforms.freshworks.popularity', 'Modern')
    }
  ];

  const benefits = [
    {
      icon: Database,
      title: t('integrations.crm.benefits.data.title', 'Unified Customer Data'),
      description: t('integrations.crm.benefits.data.description', 'Sync customer information automatically between SeaChat and your CRM'),
      metric: '100%'
    },
    {
      icon: TrendingUp,
      title: t('integrations.crm.benefits.leads.title', 'Improved Lead Quality'),
      description: t('integrations.crm.benefits.leads.description', 'Convert support conversations into qualified leads'),
      metric: '45%'
    },
    {
      icon: Sync,
      title: t('integrations.crm.benefits.sync.title', 'Real-time Synchronization'),
      description: t('integrations.crm.benefits.sync.description', 'Keep customer data updated across all platforms instantly'),
      metric: '<1s'
    },
    {
      icon: Users,
      title: t('integrations.crm.benefits.context.title', 'Better Customer Context'),
      description: t('integrations.crm.benefits.context.description', 'Access complete customer history during support conversations'),
      metric: '360°'
    }
  ];

  const featuresFromTranslation = t('integrations.crm.features', { returnObjects: true });
  const features = Array.isArray(featuresFromTranslation) ? featuresFromTranslation : [];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Database className="w-16 h-16 text-blue-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('integrations.crm.title', 'CRM Integrations')}
              </h1>
            </div>
            <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
              {t('integrations.crm.subtitle', 'Connect SeaChat with your CRM to create a unified customer experience. Sync contacts, track leads, and manage relationships seamlessly.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://chat.seasalt.ai/gpt/signup" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center">
                {t('integrations.crm.connectButton', 'Connect Your CRM')}
              </a>
              <a href="https://wiki.seasalt.ai/seachat/" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center">
                {t('integrations.crm.guideButton', 'View Integration Guide')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Supported CRM Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('integrations.crm.platformsTitle', 'Supported CRM Platforms')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.crm.platformsSubtitle', 'Choose from our extensive list of CRM integrations, each optimized for seamless data flow.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crmPlatforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{platform.logo}</div>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {platform.popularity}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                <p className="text-gray-600 mb-6">{platform.description}</p>
                
                <div className="space-y-3 mb-6">
                  {platform.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-gray-600">
                    {t('integrations.crm.setupTime')}: <span className="font-medium text-gray-900">{platform.setupTime}</span>
                  </div>
                </div>
                
                <a href="https://chat.seasalt.ai/gpt/signup" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center">
                  {t('integrations.crm.connectPlatform', 'Connect')} {platform.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('integrations.crm.whyIntegrateTitle', 'Why Integrate with Your CRM?')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.crm.whyIntegrateSubtitle', 'Transform your customer support into a powerful sales and relationship management tool.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{benefit.metric}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('integrations.crm.featuresTitle', 'Comprehensive CRM Integration Features')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('integrations.crm.featuresSubtitle', 'Our CRM integrations go beyond basic contact sync to provide a complete customer relationship management solution.')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('integrations.crm.workflowTitle', 'Integration Workflow')}</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('integrations.crm.workflow.connect.title', 'Connect Your CRM')}</h4>
                    <p className="text-gray-600 text-sm">{t('integrations.crm.workflow.connect.description', 'Authenticate and configure your CRM connection')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('integrations.crm.workflow.map.title', 'Map Data Fields')}</h4>
                    <p className="text-gray-600 text-sm">{t('integrations.crm.workflow.map.description', 'Configure how data flows between systems')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('integrations.crm.workflow.sync.title', 'Start Syncing')}</h4>
                    <p className="text-gray-600 text-sm">{t('integrations.crm.workflow.sync.description', 'Enjoy automatic data synchronization')}</p>
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
            {t('integrations.crm.ctaTitle', 'Ready to Connect Your CRM?')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('integrations.crm.ctaSubtitle', 'Start syncing your customer data and transform support conversations into business opportunities.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://chat.seasalt.ai/gpt/signup" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center">
              {t('integrations.crm.ctaChooseButton', 'Sign Up For Free')}
            </a>
            <a href="https://wiki.seasalt.ai/seachat/" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center">
              {t('integrations.crm.ctaGuideButton', 'View Setup Guide')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRMPage;