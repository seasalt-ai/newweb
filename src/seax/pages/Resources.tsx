import Header from '../components/Header';
import SEOHelmet from '../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
import { ArrowRight, Book, FileText, Video, MessageSquare, Download, ExternalLink, Users } from 'lucide-react';
const Resources = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const resourceCategories = [
    {
      title: t('seax.resources.categories.gettingStarted.title'),
      description: t('seax.resources.categories.gettingStarted.description'),
      icon: Book,
      color: 'blue',
      resources: [
        {
          title: t('seax.resources.categories.gettingStarted.quickStart.title'),
          description: t('seax.resources.categories.gettingStarted.quickStart.description'),
          type: t('seax.resources.categories.gettingStarted.quickStart.type'),
          readTime: t('seax.resources.categories.gettingStarted.quickStart.readTime')
        },
        {
          title: t('seax.resources.categories.gettingStarted.bestPractices.title'),
          description: t('seax.resources.categories.gettingStarted.bestPractices.description'),
          type: t('seax.resources.categories.gettingStarted.bestPractices.type'),
          readTime: t('seax.resources.categories.gettingStarted.bestPractices.readTime')
        },
        {
          title: t('seax.resources.categories.gettingStarted.apiIntegration.title'),
          description: t('seax.resources.categories.gettingStarted.apiIntegration.description'),
          type: t('seax.resources.categories.gettingStarted.apiIntegration.type'),
          readTime: t('seax.resources.categories.gettingStarted.apiIntegration.readTime')
        }
      ]
    },
    {
      title: t('seax.resources.categories.videos.title'),
      description: t('seax.resources.categories.videos.description'),
      icon: Video,
      color: 'green',
      resources: [
        {
          title: t('seax.resources.categories.videos.firstCampaign.title'),
          description: t('seax.resources.categories.videos.firstCampaign.description'),
          type: t('seax.resources.categories.videos.firstCampaign.type'),
          duration: t('seax.resources.categories.videos.firstCampaign.duration')
        },
        {
          title: t('seax.resources.categories.videos.targeting.title'),
          description: t('seax.resources.categories.videos.targeting.description'),
          type: t('seax.resources.categories.videos.targeting.type'),
          duration: t('seax.resources.categories.videos.targeting.duration')
        },
        {
          title: t('seax.resources.categories.videos.analytics.title'),
          description: t('seax.resources.categories.videos.analytics.description'),
          type: t('seax.resources.categories.videos.analytics.type'),
          duration: t('seax.resources.categories.videos.analytics.duration')
        }
      ]
    },
    {
      title: t('seax.resources.categories.documentation.title'),
      description: t('seax.resources.categories.documentation.description'),
      icon: FileText,
      color: 'purple',
      resources: [
        {
          title: t('seax.resources.categories.documentation.apiReference.title'),
          description: t('seax.resources.categories.documentation.apiReference.description'),
          type: t('seax.resources.categories.documentation.apiReference.type'),
          badge: t('seax.resources.categories.documentation.apiReference.badge')
        },
        {
          title: t('seax.resources.categories.documentation.webhook.title'),
          description: t('seax.resources.categories.documentation.webhook.description'),
          type: t('seax.resources.categories.documentation.webhook.type'),
          badge: t('seax.resources.categories.documentation.webhook.badge')
        },
        {
          title: t('seax.resources.categories.documentation.sdk.title'),
          description: t('seax.resources.categories.documentation.sdk.description'),
          type: t('seax.resources.categories.documentation.sdk.type'),
          badge: t('seax.resources.categories.documentation.sdk.badge')
        }
      ]
    },
    {
      title: t('seax.resources.categories.caseStudies.title'),
      description: t('seax.resources.categories.caseStudies.description'),
      icon: MessageSquare,
      color: 'orange',
      resources: [
        {
          title: t('seax.resources.categories.caseStudies.ecommerce.title'),
          description: t('seax.resources.categories.caseStudies.ecommerce.description'),
          type: t('seax.resources.categories.caseStudies.ecommerce.type'),
          industry: t('seax.resources.categories.caseStudies.ecommerce.industry')
        },
        {
          title: t('seax.resources.categories.caseStudies.healthcare.title'),
          description: t('seax.resources.categories.caseStudies.healthcare.description'),
          type: t('seax.resources.categories.caseStudies.healthcare.type'),
          industry: t('seax.resources.categories.caseStudies.healthcare.industry')
        },
        {
          title: t('seax.resources.categories.caseStudies.fintech.title'),
          description: t('seax.resources.categories.caseStudies.fintech.description'),
          type: t('seax.resources.categories.caseStudies.fintech.type'),
          industry: t('seax.resources.categories.caseStudies.fintech.industry')
        }
      ]
    }
  ];

  const downloads = [
    {
      title: t('seax.resources.downloads.playbook.title'),
      description: t('seax.resources.downloads.playbook.description'),
      format: t('seax.resources.downloads.playbook.format'),
      size: t('seax.resources.downloads.playbook.size')
    },
    {
      title: t('seax.resources.downloads.compliance.title'),
      description: t('seax.resources.downloads.compliance.description'),
      format: t('seax.resources.downloads.compliance.format'),
      size: t('seax.resources.downloads.compliance.size')
    },
    {
      title: t('seax.resources.downloads.templates.title'),
      description: t('seax.resources.downloads.templates.description'),
      format: t('seax.resources.downloads.templates.format'),
      size: t('seax.resources.downloads.templates.size')
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('seax.resources.seo.title')}
        description={t('seax.resources.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('seax.resources.hero.title')}
            <span className="text-indigo-600 block">{t('seax.resources.hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('seax.resources.hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getMeetingUrl(currentLanguage)}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{t('seax.resources.hero.getSupport')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              {t('seax.resources.hero.browseApiDocs')}
            </button>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.resources.explore.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.resources.explore.subtitle')}
            </p>
          </div>
          
          <div className="space-y-16">
            {resourceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="">
                  <div className="flex items-center mb-8">
                    <div className={`p-3 rounded-lg ${getColorClasses(category.color)} mr-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.resources.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(category.color)} bg-opacity-20`}>
                            {resource.type}
                          </span>
                          {(resource as any).badge && (
                            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                              {(resource as any).badge}
                            </span>
                          )}
                        </div>
                        
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {resource.title}
                        </h4>
                        <p className="text-gray-600 mb-4">
                          {resource.description}
                        </p>
                        
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-500">
                            {(resource as any).readTime && (resource as any).readTime}
                            {(resource as any).duration && (resource as any).duration}
                            {(resource as any).industry && (resource as any).industry}
                          </div>
                          <button className="text-indigo-600 hover:text-indigo-800 flex items-center space-x-1">
                            <span>{t('seax.resources.common.readMore')}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Downloads Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.resources.downloads.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.resources.downloads.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloads.map((download, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Download className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{download.format}</div>
                    <div className="text-sm text-gray-500">{download.size}</div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {download.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {download.description}
                </p>
                
                <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>{t('seax.resources.downloads.download')}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('seax.resources.support.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('seax.resources.support.subtitle')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg w-fit mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('seax.resources.support.liveChat.title')}</h3>
                  <p className="text-gray-600 mb-4">{t('seax.resources.support.liveChat.description')}</p>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                    {t('seax.resources.support.liveChat.action')}
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg w-fit mx-auto mb-4">
                    <Book className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('seax.resources.support.knowledgeBase.title')}</h3>
                  <p className="text-gray-600 mb-4">{t('seax.resources.support.knowledgeBase.description')}</p>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center mx-auto">
                    <span>{t('seax.resources.support.knowledgeBase.action')}</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg w-fit mx-auto mb-4">
                    <Users className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('seax.resources.support.community.title')}</h3>
                  <p className="text-gray-600 mb-4">{t('seax.resources.support.community.description')}</p>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center mx-auto">
                    <span>{t('seax.resources.support.community.action')}</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('seax.resources.cta.title')}
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            {t('seax.resources.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{t('seax.resources.cta.signUp')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <Link
              to={getLocalizedPath('/pricing')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              {t('seax.resources.cta.viewPricing')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
