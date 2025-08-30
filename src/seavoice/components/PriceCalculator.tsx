import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
import { motion } from 'framer-motion';
import { Calculator, Phone, Clock, Users } from 'lucide-react';
const PriceCalculator = () => {
  const { t, i18n } = useTranslation();
  const [planType, setPlanType] = useState<'inbound' | 'inbound-outbound'>('inbound');
  const [localNumbers, setLocalNumbers] = useState(1);
  const [tollFreeNumbers, setTollFreeNumbers] = useState(0);
  const [voiceAIMinutes, setVoiceAIMinutes] = useState(500);
  const [humanMinutes, setHumanMinutes] = useState(100);

  const basePlan = planType === 'inbound' ? 29.99 : 99;
  const phoneNumberCost = (localNumbers * 2) + (tollFreeNumbers * 3);
  const voiceAICost = voiceAIMinutes * 0.12;
  const humanCallCost = humanMinutes * 0.015;
  const totalMonthly = basePlan + phoneNumberCost + voiceAICost + humanCallCost;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              {t('seavoice.priceCalculator.hero.title')}
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('seavoice.priceCalculator.hero.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('seavoice.priceCalculator.configure.title')}</h3>
            
            {/* Plan Type Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                {t('seavoice.priceCalculator.planType.label')}
              </label>
              <div className="grid grid-cols-1 gap-3">
                <button
                  onClick={() => setPlanType('inbound')}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    planType === 'inbound'
                      ? 'border-teal-500 bg-teal-50 text-teal-900'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold">{t('seavoice.priceCalculator.planType.inbound.title')}</div>
                  <div className="text-sm opacity-80">{t('seavoice.priceCalculator.planType.inbound.description')}</div>
                </button>
                <button
                  onClick={() => setPlanType('inbound-outbound')}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    planType === 'inbound-outbound'
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold">{t('seavoice.priceCalculator.planType.inboundOutbound.title')}</div>
                  <div className="text-sm opacity-80">{t('seavoice.priceCalculator.planType.inboundOutbound.description')}</div>
                </button>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                <Phone className="w-4 h-4 inline mr-2" />
                {t('seavoice.priceCalculator.phoneNumbers.label')}
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">{t('seavoice.priceCalculator.phoneNumbers.local.label')}</label>
                  <input
                    type="number"
                    min="0"
                    max="50"
                    value={localNumbers}
                    onChange={(e) => setLocalNumbers(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">{t('seavoice.priceCalculator.phoneNumbers.tollFree.label')}</label>
                  <input
                    type="number"
                    min="0"
                    max="20"
                    value={tollFreeNumbers}
                    onChange={(e) => setTollFreeNumbers(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Voice AI Minutes */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                <Clock className="w-4 h-4 inline mr-2" />
                {t('seavoice.priceCalculator.voiceAI.label')}
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="50"
                  value={voiceAIMinutes}
                  onChange={(e) => setVoiceAIMinutes(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{t('seavoice.priceCalculator.voiceAI.range.min')}</span>
                  <span className="font-semibold text-blue-600">{voiceAIMinutes} {t('seavoice.priceCalculator.voiceAI.range.current')}</span>
                  <span>{t('seavoice.priceCalculator.voiceAI.range.max')}</span>
                </div>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={voiceAIMinutes}
                  onChange={(e) => setVoiceAIMinutes(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Human Agent Minutes */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                <Users className="w-4 h-4 inline mr-2" />
                {t('seavoice.priceCalculator.humanAgent.label')}
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="25"
                  value={humanMinutes}
                  onChange={(e) => setHumanMinutes(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{t('seavoice.priceCalculator.humanAgent.range.min')}</span>
                  <span className="font-semibold text-green-600">{humanMinutes} {t('seavoice.priceCalculator.humanAgent.range.current')}</span>
                  <span>{t('seavoice.priceCalculator.humanAgent.range.max')}</span>
                </div>
                <input
                  type="number"
                  min="0"
                  max="5000"
                  value={humanMinutes}
                  onChange={(e) => setHumanMinutes(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>

          {/* Pricing Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('seavoice.priceCalculator.breakdown.title')}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">
                  {planType === 'inbound' ? t('seavoice.priceCalculator.breakdown.inboundPlan') : t('seavoice.priceCalculator.breakdown.inboundOutboundPlan')}
                </span>
                <span className="font-semibold text-lg">${basePlan.toFixed(2)}</span>
              </div>
              
              {(localNumbers > 0 || tollFreeNumbers > 0) && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <div className="text-gray-700">{t('seavoice.priceCalculator.breakdown.phoneNumbersTitle')}</div>
                    <div className="text-sm text-gray-500">
                      {localNumbers > 0 && `${localNumbers} ${t('seavoice.priceCalculator.breakdown.phoneNumbers.local')}`}
                      {localNumbers > 0 && tollFreeNumbers > 0 && ', '}
                      {tollFreeNumbers > 0 && `${tollFreeNumbers} ${t('seavoice.priceCalculator.breakdown.phoneNumbers.tollFree')}`}
                    </div>
                  </div>
                  <span className="font-semibold text-lg">${phoneNumberCost.toFixed(2)}</span>
                </div>
              )}
              
              {voiceAIMinutes > 0 && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <div className="text-gray-700">{t('seavoice.priceCalculator.breakdown.voiceAI.title')}</div>
                    <div className="text-sm text-gray-500">{voiceAIMinutes} {t('seavoice.priceCalculator.breakdown.voiceAI.calculation')}</div>
                  </div>
                  <span className="font-semibold text-lg">${voiceAICost.toFixed(2)}</span>
                </div>
              )}
              
              {humanMinutes > 0 && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <div className="text-gray-700">{t('seavoice.priceCalculator.breakdown.humanAgent.title')}</div>
                    <div className="text-sm text-gray-500">{humanMinutes} {t('seavoice.priceCalculator.breakdown.humanAgent.calculation')}</div>
                  </div>
                  <span className="font-semibold text-lg">${humanCallCost.toFixed(2)}</span>
                </div>
              )}
            </div>

            <div className="border-t-2 border-gray-300 pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-gray-900">{t('seavoice.priceCalculator.breakdown.total')}</span>
                <span className="text-3xl font-bold text-blue-600">${totalMonthly.toFixed(2)}</span>
              </div>
              
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="text-sm text-gray-600 space-y-1">
                  <div>✅ {t('seavoice.priceCalculator.features.usaCanada')}</div>
                  <div>✅ {t('seavoice.priceCalculator.features.phoneCharges')}</div>
                  <div>✅ {t('seavoice.priceCalculator.features.e911')}</div>
                  <div>✅ {t('seavoice.priceCalculator.features.recording')}</div>
                  {planType === 'inbound-outbound' && <div>✅ {t('seavoice.priceCalculator.features.outboundCampaigns')}</div>}
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={planType === 'inbound' ? 'https://chat.seasalt.ai/signup' : 'https://seax.seasalt.ai/signup'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white text-center inline-block transition-all transform hover:scale-105 ${
                    planType === 'inbound' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {planType === 'inbound' ? t('seavoice.priceCalculator.cta.getStartedInbound') : t('seavoice.priceCalculator.cta.getStartedInboundOutbound')}
                </a>
                <a
                  href={getMeetingUrl(i18n.language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 text-center inline-block transition-all hover:border-gray-400"
                >
                  {t('seavoice.priceCalculator.cta.scheduleDemo')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('seavoice.priceCalculator.notes.title')}</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                • {t('seavoice.priceCalculator.notes.usaCanadaOnly')}
              </div>
              <div>
                • {t('seavoice.priceCalculator.notes.phoneChargesIncluded')}
              </div>
              <div>
                • {t('seavoice.priceCalculator.notes.voiceAIModel')}
              </div>
              <div>
                • {t('seavoice.priceCalculator.notes.humanAgentMinutes')}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceCalculator;
