import { Book, Search, FileText, Users, Zap, Shield, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getMeetingUrl } from '../../../constants/urls';
import SEOHelmet from '../../../components/SEOHelmet';
import { getSEOData, getCanonicalUrl } from '../../../utils/seo';

export default function KnowledgeBasePage() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'seachat.features.knowledgeBase', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/seachat/features/knowledge-base')
  });
  
  return (
    <>
      <SEOHelmet {...seoData} />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Book className="w-16 h-16 text-blue-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('features.knowledgeBase.title', 'Knowledge Base')}
              </h1>
            </div>
            <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
              {t('seachat.features.knowledgeBase.subtitle', 'Empower your AI agents with comprehensive knowledge management. Create, organize, and maintain a centralized repository of information that enables intelligent, accurate responses.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
              >
                {t('seachat.features.knowledgeBase.startButton', 'Start Building')}
              </a>
              <a
                href={getMeetingUrl(currentLanguage)}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center"
              >
                {t('seachat.features.knowledgeBase.scheduleDemo', 'Schedule Demo')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('seachat.features.knowledgeBase.managementTitle', 'Intelligent Knowledge Management')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('seachat.features.knowledgeBase.managementSubtitle', 'Build a powerful knowledge foundation that grows with your business and enhances every customer interaction.')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 p-3 rounded-xl w-fit mb-6">
              <Search className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('seachat.features.knowledgeBase.smartSearch.title', 'Smart Search')}</h3>
            <p className="text-gray-600">
              {t('seachat.features.knowledgeBase.smartSearch.description', 'Advanced semantic search capabilities that understand context and intent, delivering precise information instantly.')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 p-3 rounded-xl w-fit mb-6">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('seachat.features.knowledgeBase.documentManagement.title', 'Document Management')}</h3>
            <p className="text-gray-600">
              {t('seachat.features.knowledgeBase.documentManagement.description', 'Upload, organize, and version control documents, FAQs, policies, and procedures in one centralized location.')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 p-3 rounded-xl w-fit mb-6">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('seachat.features.knowledgeBase.collaboration.title', 'Collaborative Editing')}</h3>
            <p className="text-gray-600">
              {t('seachat.features.knowledgeBase.collaboration.description', 'Enable team collaboration with real-time editing, approval workflows, and role-based access controls.')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-orange-100 p-3 rounded-xl w-fit mb-6">
              <Zap className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('seachat.features.knowledgeBase.autoLearning.title', 'Auto-Learning')}</h3>
            <p className="text-gray-600">
              {t('seachat.features.knowledgeBase.autoLearning.description', 'Automatically capture and learn from successful interactions to continuously improve knowledge accuracy.')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-red-100 p-3 rounded-xl w-fit mb-6">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('seachat.features.knowledgeBase.accessControl.title', 'Access Control')}</h3>
            <p className="text-gray-600">
              {t('seachat.features.knowledgeBase.accessControl.description', 'Secure sensitive information with granular permissions and ensure compliance with data protection regulations.')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 p-3 rounded-xl w-fit mb-6">
              <Globe className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('seachat.features.knowledgeBase.multiLanguage.title', 'Multi-Language')}</h3>
            <p className="text-gray-600">
              {t('seachat.features.knowledgeBase.multiLanguage.description', 'Support multiple languages and localization to serve global customers with culturally appropriate responses.')}
            </p>
          </div>
        </div>
      </div>

      {/* Knowledge Base Demo */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seachat.features.knowledgeBase.demoTitle', 'See Knowledge Base in Action')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seachat.features.knowledgeBase.demoSubtitle', 'Watch how our intelligent knowledge system powers accurate, contextual responses.')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
              <h3 className="text-xl font-semibold text-white">{t('seachat.features.knowledgeBase.interfaceTitle', 'Knowledge Base Interface')}</h3>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('seachat.features.knowledgeBase.categories', 'Document Categories')}</h4>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <FileText className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{t('seachat.features.knowledgeBase.productDocs', 'Product Documentation')}</span>
                      <span className="ml-auto text-sm text-gray-500">24 {t('seachat.features.knowledgeBase.articles', 'articles')}</span>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <FileText className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">{t('seachat.features.knowledgeBase.supportFaqs', 'Customer Support FAQs')}</span>
                      <span className="ml-auto text-sm text-gray-500">156 {t('seachat.features.knowledgeBase.articles', 'articles')}</span>
                    </div>
                    <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <FileText className="h-5 w-5 text-purple-600 mr-3" />
                      <span className="text-gray-700">{t('seachat.features.knowledgeBase.policies', 'Company Policies')}</span>
                      <span className="ml-auto text-sm text-gray-500">12 {t('seachat.features.knowledgeBase.articles', 'articles')}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('seachat.features.knowledgeBase.recentUpdates', 'Recent Updates')}</h4>
                  <div className="space-y-3">
                    <div className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-gray-900">{t('seachat.features.knowledgeBase.refundUpdate', 'Refund Policy Updated')}</span>
                        <span className="text-xs text-gray-500">2 {t('seachat.features.knowledgeBase.hoursAgo', 'hours ago')}</span>
                      </div>
                      <p className="text-sm text-gray-600">{t('seachat.features.knowledgeBase.returnWindow', 'Updated return window from 14 to 30 days')}</p>
                    </div>
                    <div className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-gray-900">{t('seachat.features.knowledgeBase.featureGuide', 'New Feature Guide')}</span>
                        <span className="text-xs text-gray-500">1 {t('seachat.features.knowledgeBase.dayAgo', 'day ago')}</span>
                      </div>
                      <p className="text-sm text-gray-600">{t('seachat.features.knowledgeBase.analyticsDoc', 'Added documentation for advanced analytics')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('seachat.features.knowledgeBase.transformTitle', 'Transform Your Customer Support')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('seachat.features.knowledgeBase.transformSubtitle', 'A well-organized knowledge base is the foundation of exceptional customer service and efficient operations.')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('seachat.features.knowledgeBase.benefitsTitle', 'Key Benefits')}</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('seachat.features.knowledgeBase.fasterResponse.title', 'Faster Response Times')}</h4>
                  <p className="text-gray-600">{t('seachat.features.knowledgeBase.fasterResponse.description', 'Reduce average response time by 60% with instant access to accurate information.')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('seachat.features.knowledgeBase.consistency.title', 'Consistent Accuracy')}</h4>
                  <p className="text-gray-600">{t('seachat.features.knowledgeBase.consistency.description', 'Ensure all agents provide consistent, up-to-date information across all channels.')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-lg mr-4 mt-1">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('seachat.features.knowledgeBase.training.title', 'Scalable Training')}</h4>
                  <p className="text-gray-600">{t('seachat.features.knowledgeBase.training.description', 'Onboard new agents faster with comprehensive, searchable documentation.')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
            <div className="text-center">
              <div className="bg-white p-4 rounded-xl inline-block mb-6">
                <Book className="h-12 w-12 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{t('seachat.features.knowledgeBase.readyTitle', 'Ready to Get Started?')}</h4>
              <p className="text-gray-600 mb-6">
                {t('seachat.features.knowledgeBase.readySubtitle', 'Build your knowledge base today and transform how your team delivers customer support.')}
              </p>
              {/* replaced button with anchor for signup link */}
                <a
                  href="https://chat.seasalt.ai/gpt/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  {t('seachat.features.knowledgeBase.startButton', 'Start Building')}
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}