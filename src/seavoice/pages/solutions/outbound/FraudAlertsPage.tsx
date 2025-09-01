import { Shield, AlertTriangle, CheckCircle, Clock, Phone, BarChart3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FraudAlertsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">{t('seavoice.pages.solutions.outbound.fraudAlerts.hero.title')}</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t('seavoice.pages.solutions.outbound.fraudAlerts.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('seavoice.pages.solutions.outbound.fraudAlerts.features.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.fraudAlerts.features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <AlertTriangle className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{t('seavoice.pages.solutions.outbound.fraudAlerts.features.realTimeDetection.title')}</h3>
              <p className="text-gray-600">
                {t('seavoice.pages.solutions.outbound.fraudAlerts.features.realTimeDetection.description')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Phone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{t('seavoice.pages.solutions.outbound.fraudAlerts.features.instantAlerts.title')}</h3>
              <p className="text-gray-600">
                {t('seavoice.pages.solutions.outbound.fraudAlerts.features.instantAlerts.description')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <BarChart3 className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{t('seavoice.pages.solutions.outbound.fraudAlerts.features.detailedAnalytics.title')}</h3>
              <p className="text-gray-600">
                {t('seavoice.pages.solutions.outbound.fraudAlerts.features.detailedAnalytics.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">{t('seavoice.pages.solutions.outbound.fraudAlerts.howItWorks.title')}</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('seavoice.pages.solutions.outbound.fraudAlerts.howItWorks.step1.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.fraudAlerts.howItWorks.step1.description')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <span className="text-orange-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('seavoice.pages.solutions.outbound.fraudAlerts.howItWorks.step2.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.fraudAlerts.howItWorks.step2.description')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('seavoice.pages.solutions.outbound.fraudAlerts.howItWorks.step3.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.fraudAlerts.howItWorks.step3.description')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <span className="text-green-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('seavoice.pages.solutions.outbound.fraudAlerts.howItWorks.step4.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.fraudAlerts.howItWorks.step4.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">{t('seavoice.pages.solutions.outbound.fraudAlerts.howItWorks.sampleCall.title')}</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-700 italic">
                  {t('seavoice.pages.solutions.outbound.fraudAlerts.howItWorks.sampleCall.message')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">{t('seavoice.pages.solutions.outbound.fraudAlerts.benefits.title')}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">{t('seavoice.pages.solutions.outbound.fraudAlerts.benefits.fraudPrevention.title')}</h3>
              <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.fraudAlerts.benefits.fraudPrevention.description')}</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">{t('seavoice.pages.solutions.outbound.fraudAlerts.benefits.instantResponse.title')}</h3>
              <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.fraudAlerts.benefits.instantResponse.description')}</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">{t('seavoice.pages.solutions.outbound.fraudAlerts.benefits.customerTrust.title')}</h3>
              <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.fraudAlerts.benefits.customerTrust.description')}</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">{t('seavoice.pages.solutions.outbound.fraudAlerts.benefits.smartAnalytics.title')}</h3>
              <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.fraudAlerts.benefits.smartAnalytics.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">{t('seavoice.pages.solutions.outbound.fraudAlerts.useCases.title')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <h3 className="text-xl font-semibold mb-4">{t('seavoice.pages.solutions.outbound.fraudAlerts.useCases.banking.title')}</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  {t('seavoice.pages.solutions.outbound.fraudAlerts.useCases.banking.item1')}
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  {t('seavoice.pages.solutions.outbound.fraudAlerts.useCases.banking.item2')}
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  {t('seavoice.pages.solutions.outbound.fraudAlerts.useCases.banking.item3')}
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  {t('seavoice.pages.solutions.outbound.fraudAlerts.useCases.banking.item4')}
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <h3 className="text-xl font-semibold mb-4">{t('seavoice.pages.solutions.outbound.fraudAlerts.useCases.ecommerce.title')}</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  {t('seavoice.pages.solutions.outbound.fraudAlerts.useCases.ecommerce.item1')}
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  {t('seavoice.pages.solutions.outbound.fraudAlerts.useCases.ecommerce.item2')}
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  {t('seavoice.pages.solutions.outbound.fraudAlerts.useCases.ecommerce.item3')}
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  {t('seavoice.pages.solutions.outbound.fraudAlerts.useCases.ecommerce.item4')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('seavoice.pages.solutions.outbound.fraudAlerts.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('seavoice.pages.solutions.outbound.fraudAlerts.cta.description')}
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('seavoice.pages.solutions.outbound.fraudAlerts.cta.button')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default FraudAlertsPage;
