import { TrendingUp } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../../../i18n/helpers';
import { getMeetingUrl } from '../../../constants/urls';

interface UseCasesProps {
  lang: SupportedLanguage;
  translations?: any;
}

const UseCases: React.FC<UseCasesProps> = ({ lang, translations }) => {
  const { t: hookT, isLoading } = translations ? 
    { t: null, isLoading: false } : 
    useTranslation(lang);
    
  const getText = (key: string, fallback: string = key): string => {
    if (translations) {
      const keys = key.split('.');
      let result: any = translations;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          console.warn(`Missing translation key: "${key}" in locale "${lang}"`);
          return fallback;
        }
      }
      
      return typeof result === 'string' ? result : fallback;
    }
    
    return hookT ? hookT(key) : fallback;
  };
  
  const currentLanguage = lang;
  
  const cases = [
    {
      title: getText('seachat.useCases.cases.ecommerce.title', 'E-commerce Customer Support'),
      industry: getText('seachat.useCases.cases.ecommerce.industry', 'E-commerce'),
      challenge: getText('seachat.useCases.cases.ecommerce.challenge', 'High volume of customer inquiries during sales events'),
      solution: getText('seachat.useCases.cases.ecommerce.solution', 'Deployed SeaChat to handle product inquiries, order tracking, and returns'),
      results: [
        getText('seachat.useCases.cases.ecommerce.results.0', '80% reduction in response time'),
        getText('seachat.useCases.cases.ecommerce.results.1', '60% of inquiries handled automatically'),
        getText('seachat.useCases.cases.ecommerce.results.2', '35% increase in customer satisfaction')
      ],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      metrics: { 
        responseTime: getText('seachat.useCases.cases.ecommerce.metrics.responseTime', '< 30s'), 
        satisfaction: getText('seachat.useCases.cases.ecommerce.metrics.satisfaction', '95%'), 
        cost: getText('seachat.useCases.cases.ecommerce.metrics.cost', '-50%') 
      }
    },
    {
      title: getText('seachat.useCases.cases.healthcare.title', 'Healthcare Appointment Management'),
      industry: getText('seachat.useCases.cases.healthcare.industry', 'Healthcare'),
      challenge: getText('seachat.useCases.cases.healthcare.challenge', 'Complex appointment scheduling and patient inquiries'),
      solution: getText('seachat.useCases.cases.healthcare.solution', 'Implemented AI agents for appointment booking and FAQs'),
      results: [
        getText('seachat.useCases.cases.healthcare.results.0', '24/7 patient support availability'),
        getText('seachat.useCases.cases.healthcare.results.1', '70% reduction in phone call volume'),
        getText('seachat.useCases.cases.healthcare.results.2', 'Improved patient experience scores')
      ],
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      metrics: { 
        availability: getText('seachat.useCases.cases.healthcare.metrics.availability', '24/7'), 
        noShows: getText('seachat.useCases.cases.healthcare.metrics.noShows', '-40%'), 
        compliance: getText('seachat.useCases.cases.healthcare.metrics.compliance', '100%') 
      }
    },
    {
      title: getText('seachat.useCases.cases.fintech.title', 'Fintech Customer Service'),
      industry: getText('seachat.useCases.cases.fintech.industry', 'Financial Technology'),
      challenge: getText('seachat.useCases.cases.fintech.challenge', 'Secure and compliant customer support at scale'),
      solution: getText('seachat.useCases.cases.fintech.solution', 'Deployed secure AI chatbots with encryption'),
      results: [
        getText('seachat.useCases.cases.fintech.results.0', '90% first-contact resolution rate'),
        getText('seachat.useCases.cases.fintech.results.1', 'Bank-grade security compliance'),
        getText('seachat.useCases.cases.fintech.results.2', '3x faster query resolution')
      ],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      metrics: { 
        resolution: getText('seachat.useCases.cases.fintech.metrics.resolution', '90%'), 
        speed: getText('seachat.useCases.cases.fintech.metrics.speed', '3x'), 
        security: getText('seachat.useCases.cases.fintech.metrics.security', 'AES-256') 
      }
    }
  ];

  // Handle loading state
  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="space-y-20">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-200 h-96 rounded-2xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getText('seachat.useCases.title', 'Real-World Success Stories')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {getText('seachat.useCases.subtitle', 'See how businesses transform their customer support with SeaChat')}
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
                      <h4 className="font-semibold text-red-600 mb-2">
                        {getText('seachat.useCases.labels.challenge', 'Challenge')}
                      </h4>
                      <p className="text-gray-700">{useCase.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">
                        {getText('seachat.useCases.labels.solution', 'Solution')}
                      </h4>
                      <p className="text-gray-700">{useCase.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    {getText('seachat.useCases.labels.resultsAchieved', 'Results Achieved')}
                  </h4>
                  <ul className="space-y-2">
                    {useCase.results.map((result: string, idx: number) => (
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
                      <div className="text-sm text-gray-600">
                        {key === 'responseTime' && getText('seachat.useCases.metrics.responseTime', 'Response Time')}
                        {key === 'satisfaction' && getText('seachat.useCases.metrics.satisfaction', 'Satisfaction')}
                        {key === 'cost' && getText('seachat.useCases.metrics.cost', 'Cost Savings')}
                        {key === 'availability' && getText('seachat.useCases.metrics.availability', 'Availability')}
                        {key === 'noShows' && getText('seachat.useCases.metrics.noShows', 'No-Shows')}
                        {key === 'compliance' && getText('seachat.useCases.metrics.compliance', 'Compliance')}
                        {key === 'resolution' && getText('seachat.useCases.metrics.resolution', 'Resolution')}
                        {key === 'speed' && getText('seachat.useCases.metrics.speed', 'Speed')}
                        {key === 'security' && getText('seachat.useCases.metrics.security', 'Security')}
                      </div>
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
            <h3 className="text-3xl font-bold mb-4">
              {getText('seachat.useCases.cta.title', 'Ready to Transform Your Business?')}
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {getText('seachat.useCases.cta.description', 'Join thousands of businesses using SeaChat to deliver exceptional customer experiences')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
              >
                {getText('seachat.useCases.cta.signUpFree', 'Start Free Trial')}
              </a>
              <a
                href={getMeetingUrl(currentLanguage)}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all text-center"
              >
                {getText('seachat.useCases.cta.bookDemo', 'Book a Demo')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;