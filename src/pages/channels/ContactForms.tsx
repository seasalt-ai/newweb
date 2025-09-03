import { useEffect } from 'react';
import { FileText, Zap, Users, BarChart3, Globe, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
import { getSEOData, getCanonicalUrl } from '../../utils/seo';

const ContactForms = () => {
  const { i18n, t } = useTranslation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'channels.contactForms', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/channels/contact-forms')
  });
  const platforms = [
    {
      name: t('channels.contactForms.platforms.mailerlite.name'),
      description: t('channels.contactForms.platforms.mailerlite.description'),
      icon: '📧',
      color: 'bg-green-50 border-green-200'
    },
    {
      name: t('channels.contactForms.platforms.mailchimp.name'),
      description: t('channels.contactForms.platforms.mailchimp.description'),
      icon: '🐵',
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      name: t('channels.contactForms.platforms.constantContact.name'),
      description: t('channels.contactForms.platforms.constantContact.description'),
      icon: '📮',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      name: t('channels.contactForms.platforms.hubspot.name'),
      description: t('channels.contactForms.platforms.hubspot.description'),
      icon: '🔶',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      name: t('channels.contactForms.platforms.customForms.name'),
      description: t('channels.contactForms.platforms.customForms.description'),
      icon: '⚙️',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      name: t('channels.contactForms.platforms.wordpress.name'),
      description: t('channels.contactForms.platforms.wordpress.description'),
      icon: '📝',
      color: 'bg-gray-50 border-gray-200'
    }
  ];

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('channels.contactForms.features.instantEngagement.title'),
      description: t('channels.contactForms.features.instantEngagement.description')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('channels.contactForms.features.leadQualification.title'),
      description: t('channels.contactForms.features.leadQualification.description')
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: t('channels.contactForms.features.multiChannel.title'),
      description: t('channels.contactForms.features.multiChannel.description')
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: t('channels.contactForms.features.conversionTracking.title'),
      description: t('channels.contactForms.features.conversionTracking.description')
    }
  ];

  const useCases = [
    {
      title: t('channels.contactForms.useCases.newsletter.title'),
      description: t('channels.contactForms.useCases.newsletter.description'),
      example: t('channels.contactForms.useCases.newsletter.example')
    },
    {
      title: t('channels.contactForms.useCases.demoRequests.title'),
      description: t('channels.contactForms.useCases.demoRequests.description'),
      example: t('channels.contactForms.useCases.demoRequests.example')
    },
    {
      title: t('channels.contactForms.useCases.contactInquiries.title'),
      description: t('channels.contactForms.useCases.contactInquiries.description'),
      example: t('channels.contactForms.useCases.contactInquiries.example')
    },
    {
      title: t('channels.contactForms.useCases.leadMagnets.title'),
      description: t('channels.contactForms.useCases.leadMagnets.description'),
      example: t('channels.contactForms.useCases.leadMagnets.example')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <SEOHelmet {...seoData} />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to={`/${i18n.language}/channels-overview`} className="inline-flex items-center text-gray-600 hover:text-gray-700 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  {t('channels.contactForms.nav.backToChannels')}
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {t('channels.contactForms.hero.title.part1')}{' '}
                  <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                    {t('channels.contactForms.hero.title.part2')}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {t('channels.contactForms.hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://chat.seasalt.ai/gpt/signup"
                    className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('channels.contactForms.hero.ctaPrimary')}
                  </a>
                  <a
                    href={getMeetingUrl(i18n.language)}
                    className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('channels.contactForms.hero.ctaSecondary')}
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <FileText className="h-8 w-8 text-gray-600 mr-3" />
                      <h3 className="text-lg font-semibold">{t('channels.contactForms.hero.demo.title')}</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-500">
                        <p className="text-sm font-medium text-gray-800">{t('channels.contactForms.hero.demo.submission')}</p>
                        <p className="text-xs text-gray-600">{t('channels.contactForms.hero.demo.submitter')}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-700">{t('channels.contactForms.hero.demo.aiGreeting')}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-green-700">{t('channels.contactForms.hero.demo.userResponse')}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-700">{t('channels.contactForms.hero.demo.aiSchedule')}</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-xs text-orange-600">{t('channels.contactForms.hero.demo.meetingConfirmed')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('channels.contactForms.platforms.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.contactForms.platforms.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className={`p-6 rounded-2xl border-2 ${platform.color} hover:shadow-lg transition-all duration-300`}>
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600">
                    {platform.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Management Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('channels.contactForms.features.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.contactForms.features.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-gray-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('channels.contactForms.useCases.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.contactForms.useCases.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {useCase.description}
                  </p>
                  <div className="bg-white p-3 rounded-lg border-l-4 border-gray-400">
                    <p className="text-sm text-gray-700 italic">{useCase.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-12 shadow-xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {t('channels.contactForms.benefits.title')}
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {t('channels.contactForms.benefits.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-800">85%</div>
                  <div className="text-sm text-gray-600">{t('channels.contactForms.benefits.responseRates')}</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">3x</div>
                  <div className="text-sm text-green-700">{t('channels.contactForms.benefits.qualification')}</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">60%</div>
                  <div className="text-sm text-blue-700">{t('channels.contactForms.benefits.meetings')}</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-purple-700">{t('channels.contactForms.benefits.engagement')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('channels.contactForms.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('channels.contactForms.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seax.seasalt.ai/signup"
                className="bg-white text-gray-800 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('channels.contactForms.cta.action')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactForms;