import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Users, Globe, Target, Shield } from 'lucide-react';
import SEOHelmet from '../../components/SEOHelmet';

const About = () => {
  const { i18n: _i18n, t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('seax.about.seo.title')}
        description={t('seax.about.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('seax.about.hero.title')}
            <span className="text-blue-600 block">{t('seax.about.hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('seax.about.hero.description')}
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('seax.about.mission.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('seax.about.mission.description1')}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {t('seax.about.mission.description2')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10M+</div>
                  <div className="text-gray-600">{t('seax.about.mission.stats.messagesDaily')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
                  <div className="text-gray-600">{t('seax.about.mission.stats.businessesServed')}</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{t('seax.about.mission.features.scale.title')}</h3>
                    <p className="text-gray-600">{t('seax.about.mission.features.scale.description')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{t('seax.about.mission.features.security.title')}</h3>
                    <p className="text-gray-600">{t('seax.about.mission.features.security.description')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{t('seax.about.mission.features.global.title')}</h3>
                    <p className="text-gray-600">{t('seax.about.mission.features.global.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.about.values.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.about.values.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-lg w-fit mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('seax.about.values.customerFirst.title')}</h3>
              <p className="text-gray-600">
                {t('seax.about.values.customerFirst.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-lg w-fit mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('seax.about.values.trust.title')}</h3>
              <p className="text-gray-600">
                {t('seax.about.values.trust.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-lg w-fit mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('seax.about.values.innovation.title')}</h3>
              <p className="text-gray-600">
                {t('seax.about.values.innovation.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-lg w-fit mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('seax.about.values.impact.title')}</h3>
              <p className="text-gray-600">
                {t('seax.about.values.impact.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.about.story.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.about.story.subtitle')}
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <span className="text-blue-600 font-bold text-lg">2020</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('seax.about.story.problem.title')}</h3>
                <p className="text-gray-600">
                  {t('seax.about.story.problem.description')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <span className="text-green-600 font-bold text-lg">2021</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('seax.about.story.solution.title')}</h3>
                <p className="text-gray-600">
                  {t('seax.about.story.solution.description')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <span className="text-purple-600 font-bold text-lg">2022</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('seax.about.story.growth.title')}</h3>
                <p className="text-gray-600">
                  {t('seax.about.story.growth.description')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                <span className="text-orange-600 font-bold text-lg">2024</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('seax.about.story.future.title')}</h3>
                <p className="text-gray-600">
                  {t('seax.about.story.future.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('seax.about.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('seax.about.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{t('seax.about.cta.getStarted')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
