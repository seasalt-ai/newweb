import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ROICalculator = () => {
  const { t } = useTranslation();
  const [monthlyMessages, setMonthlyMessages] = useState(100000);
  const [currentCost, setCurrentCost] = useState(5000);
  const [conversionRate, setConversionRate] = useState(2.5);
  const [averageOrderValue, setAverageOrderValue] = useState(150);

  // SeaX pricing calculation
  const calculateSeaXCost = () => {
    if (monthlyMessages <= 50000) {
      return monthlyMessages * 0.0075 + 500; // Local 10DLC
    } else if (monthlyMessages <= 200000) {
      return monthlyMessages * 0.015 + 1000; // Toll-free
    } else {
      return monthlyMessages * 0.005 + 2000; // Short-code
    }
  };

  const seaxMonthlyCost = calculateSeaXCost();
  const monthlySavings = currentCost - seaxMonthlyCost;
  const monthlyRevenue = (monthlyMessages * (conversionRate / 100)) * averageOrderValue;
  const roi = ((monthlyRevenue - seaxMonthlyCost) / seaxMonthlyCost) * 100;
  const annualSavings = monthlySavings * 12;
  const paybackPeriod = seaxMonthlyCost > 0 ? Math.ceil(seaxMonthlyCost / monthlySavings) : 0;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Calculator className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{t('seax.pricing.roiCalculator.title')}</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('seax.pricing.roiCalculator.inputs.monthlyMessages')}
            </label>
            <input
              type="number"
              value={monthlyMessages}
              onChange={(e) => setMonthlyMessages(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={t('seax.pricing.roiCalculator.placeholders.monthlyMessages')}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('seax.pricing.roiCalculator.inputs.currentCost')}
            </label>
            <input
              type="number"
              value={currentCost}
              onChange={(e) => setCurrentCost(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={t('seax.pricing.roiCalculator.placeholders.currentCost')}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('seax.pricing.roiCalculator.inputs.conversionRate')}
            </label>
            <input
              type="number"
              step="0.1"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={t('seax.pricing.roiCalculator.placeholders.conversionRate')}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('seax.pricing.roiCalculator.inputs.averageOrderValue')}
            </label>
            <input
              type="number"
              value={averageOrderValue}
              onChange={(e) => setAverageOrderValue(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={t('seax.pricing.roiCalculator.placeholders.averageOrderValue')}
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <div className="bg-green-50 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-700">{t('seax.pricing.roiCalculator.results.monthlyRoi')}</span>
            </div>
            <div className="text-3xl font-bold text-green-600">
              {roi.toFixed(0)}%
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">{t('seax.pricing.roiCalculator.results.monthlySavings')}</span>
            </div>
            <div className="text-3xl font-bold text-blue-600">
              ${monthlySavings.toLocaleString()}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">{t('seax.pricing.roiCalculator.results.seaxCost')}</div>
              <div className="text-xl font-bold text-gray-900">
                ${seaxMonthlyCost.toLocaleString()}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">{t('seax.pricing.roiCalculator.results.annualSavings')}</div>
              <div className="text-xl font-bold text-gray-900">
                ${annualSavings.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
            <div className="text-sm text-purple-700 mb-1">{t('seax.pricing.roiCalculator.results.monthlyRevenue')}</div>
            <div className="text-2xl font-bold text-purple-600">
              ${monthlyRevenue.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
        <p className="text-sm text-yellow-800 text-center">
          <strong>{t('seax.pricing.roiCalculator.payback.period')}:</strong> {t('seax.pricing.roiCalculator.payback.duration', { count: paybackPeriod })} • 
          <strong> {t('seax.pricing.roiCalculator.payback.breakeven')}:</strong> {t('seax.pricing.roiCalculator.payback.messages', { count: Math.round(seaxMonthlyCost / (conversionRate / 100 * averageOrderValue)) })}
        </p>
      </div>
    </div>
  );
};

export default ROICalculator;
