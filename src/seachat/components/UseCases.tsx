import React from 'react';
import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const UseCases = () => {
  const { t } = useTranslation();
  
  const cases = [
    {
      title: t('seachat.useCases.cases.ecommerce.title'),
      industry: t('seachat.useCases.cases.ecommerce.industry'),
      challenge: t('seachat.useCases.cases.ecommerce.challenge'),
      solution: t('seachat.useCases.cases.ecommerce.solution'),
      results: t('seachat.useCases.cases.ecommerce.results', { returnObjects: true }),
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      metrics: { 
        responseTime: t('seachat.useCases.cases.ecommerce.metrics.responseTime'), 
        satisfaction: t('seachat.useCases.cases.ecommerce.metrics.satisfaction'), 
        cost: t('seachat.useCases.cases.ecommerce.metrics.cost') 
      }
    },
    {
      title: t('seachat.useCases.cases.healthcare.title'),
      industry: t('seachat.useCases.cases.healthcare.industry'),
      challenge: t('seachat.useCases.cases.healthcare.challenge'),
      solution: t('seachat.useCases.cases.healthcare.solution'),
      results: t('seachat.useCases.cases.healthcare.results', { returnObjects: true }),
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      metrics: { 
        availability: t('seachat.useCases.cases.healthcare.metrics.availability'), 
        noShows: t('seachat.useCases.cases.healthcare.metrics.noShows'), 
        compliance: t('seachat.useCases.cases.healthcare.metrics.compliance') 
      }
    },
    {
      title: t('seachat.useCases.cases.fintech.title'),
      industry: t('seachat.useCases.cases.fintech.industry'),
      challenge: t('seachat.useCases.cases.fintech.challenge'),
      solution: t('seachat.useCases.cases.fintech.solution'),
      results: t('seachat.useCases.cases.fintech.results', { returnObjects: true }),
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      metrics: { 
        resolution: t('seachat.useCases.cases.fintech.metrics.resolution'), 
        speed: t('seachat.useCases.cases.fintech.metrics.speed'), 
        security: t('seachat.useCases.cases.fintech.metrics.security') 
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('seachat.useCases.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('seachat.useCases.subtitle')}
          </p>
        </div>

        <div className="space-y-20">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {useCase.industry}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {useCase.title}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Challenge:</h4>
                      <p className="text-gray-700">{useCase.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Solution:</h4>
                      <p className="text-gray-700">{useCase.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Results Achieved:
                  </h4>
                    // @ts-ignore
                  <ul className="space-y-2">
                    {(useCase.results as string[]).map((result: string, idx: number) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(useCase.metrics).map(([key, value], idx) => (
                    <div key={idx} className="text-center bg-white rounded-lg p-4 shadow-md">
                      <div className="text-2xl font-bold text-teal-600 mb-1">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">{t('seachat.useCases.cta.title')}</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('seachat.useCases.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
              >
                Sign Up For Free
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all text-center"
              >
                Book A Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;