import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../i18n/helpers';

interface Props {
  lang: SupportedLanguage;
  translations?: any;
}

const ROICalculator = ({ lang, translations }: Props) => {
  // 安全地調用 Hook，如果失敗則使用 SSR translations
  let hookT = null;
  let isLoading = false;
  
  try {
    if (!translations) {
      const hookResult = useTranslation(lang);
      hookT = hookResult.error ? null : hookResult.t;
      isLoading = hookResult.error ? false : hookResult.isLoading;
    }
  } catch (error) {
    console.log('ROI Calculator Hook 調用失敗，使用 SSR translations:', error.message);
    hookT = null;
    isLoading = false;
  }
  
  const [monthlyMessages, setMonthlyMessages] = useState(100000);
  const [currentCost, setCurrentCost] = useState(5000);
  const [conversionRate, setConversionRate] = useState(2.5);
  const [averageOrderValue, setAverageOrderValue] = useState(150);
    
  // 統一的翻譯獲取函數，支援參數插值
  const getText = (key: string, params?: Record<string, any>, fallback: string = key): string => {
    let text: string;
    
    // 優先使用 SSR translations，如果沒有則使用 hook
    if (translations) {
      const keys = key.split('.');
      let result: any = translations;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          console.warn(`Missing translation key: "${key}" in locale "${lang}"`);
          text = fallback;
          break;
        }
      }
      
      if (result !== undefined) {
        text = typeof result === 'string' ? result : fallback;
      }
    } else {
      // 回退到 hook 翻譯（如果有的話）
      if (hookT) {
        text = hookT(key, params);
      } else {
        text = fallback;
      }
    }
    
    // 如果有參數，進行插值替換
    if (params && text) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        // Handle simple parameters: {{key}}
        const simplePlaceholder = new RegExp(`\{\{${paramKey}\}\}`, 'g');
        text = text.replace(simplePlaceholder, String(paramValue));
        
        // Handle formatted parameters: {{key, number}}, {{key, currency}}, etc.
        // 正確的轉義：在 new RegExp() 中需要雙層轉義
        const formattedPlaceholder = new RegExp(`\\{\\{${paramKey},\\s*number\\}\\}`, 'g');
        text = text.replace(formattedPlaceholder, typeof paramValue === 'number' ? paramValue.toLocaleString() : String(paramValue));
        
        // Handle other potential formats
        const currencyPlaceholder = new RegExp(`\\{\\{${paramKey},\\s*currency\\}\\}`, 'g');
        text = text.replace(currencyPlaceholder, typeof paramValue === 'number' ? `$${paramValue.toLocaleString()}` : String(paramValue));
      });
    }
    
    return text || fallback;
  };
  
  if (!translations && isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-6"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="h-16 bg-gray-200 rounded"></div>
              <div className="h-16 bg-gray-200 rounded"></div>
            </div>
            <div className="space-y-6">
              <div className="h-24 bg-gray-200 rounded"></div>
              <div className="h-24 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
        <h3 className="text-2xl font-bold text-gray-900">{getText('seax.pricing.roiCalculator.title', {}, 'ROI Calculator')}</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {getText('seax.pricing.roiCalculator.inputs.monthlyMessages', {}, 'Monthly Messages')}
            </label>
            <input
              type="number"
              value={monthlyMessages}
              onChange={(e) => setMonthlyMessages(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={getText('seax.pricing.roiCalculator.placeholders.monthlyMessages', {}, '100000')}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {getText('seax.pricing.roiCalculator.inputs.currentCost', {}, 'Current Monthly Cost ($)')}
            </label>
            <input
              type="number"
              value={currentCost}
              onChange={(e) => setCurrentCost(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={getText('seax.pricing.roiCalculator.placeholders.currentCost', {}, '5000')}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {getText('seax.pricing.roiCalculator.inputs.conversionRate', {}, 'Conversion Rate (%)')}
            </label>
            <input
              type="number"
              step="0.1"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={getText('seax.pricing.roiCalculator.placeholders.conversionRate', {}, '2.5')}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {getText('seax.pricing.roiCalculator.inputs.averageOrderValue', {}, 'Average Order Value ($)')}
            </label>
            <input
              type="number"
              value={averageOrderValue}
              onChange={(e) => setAverageOrderValue(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={getText('seax.pricing.roiCalculator.placeholders.averageOrderValue', {}, '150')}
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <div className="bg-green-50 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-700">{getText('seax.pricing.roiCalculator.results.monthlyRoi', {}, 'Monthly ROI')}</span>
            </div>
            <div className="text-3xl font-bold text-green-600">
              {roi.toFixed(0)}%
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">{getText('seax.pricing.roiCalculator.results.monthlySavings', {}, 'Monthly Savings')}</span>
            </div>
            <div className="text-3xl font-bold text-blue-600">
              ${monthlySavings.toLocaleString()}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">{getText('seax.pricing.roiCalculator.results.seaxCost', {}, 'SeaX Cost')}</div>
              <div className="text-xl font-bold text-gray-900">
                ${seaxMonthlyCost.toLocaleString()}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">{getText('seax.pricing.roiCalculator.results.annualSavings', {}, 'Annual Savings')}</div>
              <div className="text-xl font-bold text-gray-900">
                ${annualSavings.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
            <div className="text-sm text-purple-700 mb-1">{getText('seax.pricing.roiCalculator.results.monthlyRevenue', {}, 'Monthly Revenue')}</div>
            <div className="text-2xl font-bold text-purple-600">
              ${monthlyRevenue.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
        <p className="text-sm text-yellow-800 text-center">
          <strong>{getText('seax.pricing.roiCalculator.payback.period', {}, 'Payback Period')}:</strong> {getText('seax.pricing.roiCalculator.payback.duration', { count: paybackPeriod }, `${paybackPeriod} months`)} • 
          <strong> {getText('seax.pricing.roiCalculator.payback.breakeven', {}, 'Breakeven')}:</strong> {getText('seax.pricing.roiCalculator.payback.messages', { count: Math.round(seaxMonthlyCost / (conversionRate / 100 * averageOrderValue)) }, `${Math.round(seaxMonthlyCost / (conversionRate / 100 * averageOrderValue)).toLocaleString()} messages`)}
        </p>
      </div>
    </div>
  );
};

export default ROICalculator;