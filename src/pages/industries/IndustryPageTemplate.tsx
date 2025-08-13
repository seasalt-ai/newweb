import React, { useEffect } from 'react';
import { ArrowLeft, Check, Star, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../../constants/languages';

interface IndustryPageTemplateProps {
  title: string;
  headline: string;
  benefits: string[];
  color: string;
  bgColor: string;
  borderColor: string;
  icon: React.ComponentType<{ className?: string }>;
  showSeaHealthLink?: boolean;
}

const IndustryPageTemplate: React.FC<IndustryPageTemplateProps> = ({
  title,
  headline,
  benefits,
  color,
  bgColor,
  borderColor,
  icon: Icon,
  showSeaHealthLink = false
}) => {
  const { t, i18n } = useTranslation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${i18n.language}/industries/${title.toLowerCase().replace(/\s+/g, '-')}` 
    : `/${i18n.language}/industries/${title.toLowerCase().replace(/\s+/g, '-')}`;

  const useCases = [
    {
      title: t('industries.template.useCases.customerSupport.title'),
      description: t('industries.template.useCases.customerSupport.description'),
      icon: <Users className="h-8 w-8" />
    },
    {
      title: t('industries.template.useCases.leadGeneration.title'),
      description: t('industries.template.useCases.leadGeneration.description'),
      icon: <Star className="h-8 w-8" />
    },
    {
      title: t('industries.template.useCases.analytics.title'),
      description: t('industries.template.useCases.analytics.description'),
      icon: <BarChart3 className="h-8 w-8" />
    }
  ];

  const testimonials = [
    {
      quote: t('industries.template.testimonials.quote1'),
      author: t('industries.template.testimonials.author1'),
      company: `${title} ${t('industries.template.testimonials.company1')}`
    },
    {
      quote: t('industries.template.testimonials.quote2'),
      author: t('industries.template.testimonials.author2'),
      company: `${title} ${t('industries.template.testimonials.company2')}`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* SEO Tags */}
      <SEOHelmet
        title={`${title} ${t('industries.template.seo.titleSuffix')}`}
        description={`${headline} ${t('industries.template.seo.descriptionPrefix')} ${title} ${t('industries.template.seo.descriptionSuffix')}`}
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={canonicalUrl}
        availableLanguages={SUPPORTED_LANGUAGES}
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className={`${bgColor} py-20`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div className="text-gray-900">
                <Link to="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  {t('industries.template.nav.backToHome')}
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {t('industries.template.hero.title')}{' '}
                  <span className={`bg-gradient-to-r ${color.replace('text-', 'from-')} to-gray-700 bg-clip-text text-transparent`}>
                    {title}
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8">
                  {headline}
                </h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                     href="https://seax.seasalt.ai/signup"
                     className={`${color.replace('text-', 'bg-')} hover:opacity-90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200`}
                   >
                     {t('industries.template.hero.signUp')}
                  </a>
                  <a
                    href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                    className={`border-2 ${borderColor} ${color} hover:${color.replace('text-', 'bg-')} hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200`}
                  >
                    {t('industries.template.hero.seeDemo')}
                  </a>
                </div>
                {showSeaHealthLink && (
                  <div className="mt-6">
                    <Link
                      to={`/${i18n.language}/seahealth`}
                      className={`inline-flex items-center ${color} hover:opacity-80 transition-all duration-200 text-lg font-medium`}
                    >
                      <span className="mr-2">{t('industries.template.hero.hipaaOffering')}</span>
                      <img 
                        src="/logo-seahealth.svg" 
                        alt="SeaHealth" 
                        className="h-6 inline-block"
                      />
                    </Link>
                  </div>
                )}
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className={`${bgColor} ${borderColor} border-2 p-8 rounded-2xl shadow-2xl`}>
                    <div className="flex items-center mb-6">
                      <div className={`${color.replace('text-', 'bg-')} p-3 rounded-xl mr-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{title} {t('industries.template.solutions.title')}</h3>
                    </div>
                    <div className="space-y-3">
                      {benefits.slice(0, 3).map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <Check className={`h-5 w-5 ${color} mr-3 mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('industries.template.benefits.title')} {title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('industries.template.benefits.description')} {title.toLowerCase()}.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className={`p-6 rounded-2xl border-2 ${borderColor} ${bgColor} hover:shadow-lg transition-all duration-300`}>
                  <div className="flex items-start">
                    <Check className={`h-6 w-6 ${color} mr-4 mt-1 flex-shrink-0`} />
                    <span className="text-gray-800 font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('industries.template.useCases.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('industries.template.useCases.description.start')} {title.toLowerCase()} {t('industries.template.useCases.description.end')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className={`${color.replace('text-', 'bg-')} bg-opacity-10 p-4 rounded-2xl w-fit mx-auto mb-6`}>
                    <div className={color}>
                      {useCase.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('industries.template.ui.testimonialsPrefix')} {title} {t('industries.template.testimonials.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`p-8 rounded-2xl border-2 ${borderColor} ${bgColor}`}>
                  <blockquote className="text-lg text-gray-800 mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${color.replace('text-', 'bg-')} rounded-full flex items-center justify-center mr-4`}>
                      <span className="text-white font-bold text-lg">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-20 bg-gradient-to-r ${color.replace('text-', 'from-')} to-gray-700 text-white`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('industries.template.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('industries.template.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-gray-800 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 {t('industries.template.cta.signUp')}
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('industries.template.cta.scheduleDemo')}
              </a>
            </div>
            {showSeaHealthLink && (
              <div className="mt-6 text-center">
                <Link
                  to={`/${i18n.language}/seahealth`}
                  className="inline-block text-white underline hover:text-gray-200 transition-colors duration-200 text-lg"
                >
                  {t('industries.template.cta.seahealthLink')}
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IndustryPageTemplate;