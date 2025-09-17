import { useState, useMemo } from 'react';
import { Check, Star, AlertTriangle, X } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../../../i18n/helpers';
import { getMeetingUrl } from '../../../constants/urls';

interface FeatureComparisonProps {
  lang: SupportedLanguage;
  translations?: any;
}

const FeatureComparison = ({ lang, translations }: FeatureComparisonProps) => {
  // 使用新的 useTranslation Hook
  const { t: hookT, isLoading } = translations ? 
    { t: null, isLoading: false } : 
    useTranslation(lang);
    
  // 統一的翻譯獲取函數
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

  const [showAllFeatures] = useState(true);
  const currentLanguage = lang;

  // Company logo mapping
  const companyLogos = {
    'chatbase': '/company_icons/chatbase.png',
    'crisp.chat': '/company_icons/crisp_chat.png',
    'tawk.to': '/company_icons/tawk_to.png',
    'tidio': '/company_icons/tidio.png',
    'botpress': '/company_icons/botpress.jpg',
    'freshchat': '/company_icons/freshchat.png',
    'ManyChat': '/company_icons/manychat.jpeg',
    'Kustomer': '/company_icons/kustomer.webp',
    'chatfuel': '/company_icons/chatfuel.png',
    'jivochat': '/company_icons/jivochat.jpg',
    'Calendly': '/company_icons/calendly.png',
    'Cal.com': '/company_icons/cal_com.jpg',
    'Retell': '/company_icons/retell.png',
    'Bland AI': '/company_icons/bland_ai.jpg',
    'Synthflow': '/company_icons/synthflow.jpg',
    'textline': '/company_icons/textline.png',
    'textrequest': '/company_icons/textrequest.jpg',
    'salesmsg': '/company_icons/salesmsg.jpg',
    'Sendgrid': '/company_icons/sendgrid.jpg',
    'MailChimp': '/company_icons/mailchimp.png',
    'Twilio': '/company_icons/twilio.png'
  };

  // Features data based on the provided markdown table
  const features = useMemo(() => [
    {
      feature: getText('seachat.featureComparison.features.chatbotWebsite', 'Chatbot for website'),
      replaces: ['chatbase', 'crisp.chat', 'tawk.to', 'tidio', 'botpress'],
      otherTools: getText('seachat.featureComparison.pricing.chatbotWebsite', '$25-$100/mo'),
      seachat: 'TRUE'
    },
    {
      feature: getText('seachat.featureComparison.features.chatWidget', 'Chat widget with live agent'),
      replaces: ['tawk.to', 'freshchat'],
      otherTools: getText('seachat.featureComparison.pricing.chatWidget', '$15-$50/mo'),
      seachat: 'TRUE'
    },
    {
      feature: getText('seachat.featureComparison.features.whatsappMessenger', 'WhatsApp/Messenger/Instagram'),
      replaces: ['ManyChat', 'Kustomer', 'chatfuel', 'jivochat'],
      otherTools: getText('seachat.featureComparison.pricing.whatsappMessenger', '$15-$65/mo'),
      seachat: 'TRUE'
    },
    {
      feature: getText('seachat.featureComparison.features.multiCalendar', 'Multi Calendar bookings'),
      replaces: ['Calendly', 'Cal.com'],
      otherTools: getText('seachat.featureComparison.pricing.multiCalendar', '$15-$20/mo'),
      seachat: 'TRUE'
    },
    {
      feature: getText('seachat.featureComparison.features.phoneCallAI', 'Inbound phone call AI agents'),
      replaces: ['Retell', 'Bland AI', 'Synthflow'],
      otherTools: getText('seachat.featureComparison.pricing.phoneCallAI', '$40-$99/mo'),
      seachat: 'TRUE'
    },
    {
      feature: getText('seachat.featureComparison.features.smsActions', 'Built-in actions - SMS'),
      replaces: ['textline', 'textrequest', 'salesmsg'],
      otherTools: getText('seachat.featureComparison.pricing.smsActions', '$25-$40/mo'),
      seachat: 'TRUE'
    },
    {
      feature: getText('seachat.featureComparison.features.emailActions', 'Built-in actions - Email'),
      replaces: ['Sendgrid', 'MailChimp'],
      otherTools: getText('seachat.featureComparison.pricing.emailActions', '$20-$35/mo'),
      seachat: 'TRUE'
    },
    {
      feature: getText('seachat.featureComparison.features.phoneNumber', 'Purchase phone number'),
      replaces: ['Twilio'],
      otherTools: getText('seachat.featureComparison.pricing.phoneNumber', '$1-$15/mo'),
      seachat: 'TRUE'
    },
    {
      feature: getText('seachat.featureComparison.features.agencyMode', 'Agency Mode'),
      replaces: getText('seachat.featureComparison.replaces.uniqueToSeachat', 'Unique to SeaChat'),
      otherTools: '',
      seachat: getText('seachat.featureComparison.seachatValues.agencyMode', 'UNIQUE')
    },
    {
      feature: getText('seachat.featureComparison.features.bulkSMS', 'Bulk outbound SMS, Call, WhatsApp'),
      replaces: [],
      otherTools: '',
      seachat: getText('seachat.featureComparison.seachatValues.bulkSMS', 'Included')
    },
    {
      feature: getText('seachat.featureComparison.features.unlimitedContacts', 'Unlimited Contacts'),
      replaces: ['ManyChat'],
      otherTools: getText('seachat.featureComparison.pricing.unlimitedContacts', '$10-$25/mo'),
      seachat: getText('seachat.featureComparison.seachatValues.unlimitedContacts', 'Included')
    },
    {
      feature: getText('seachat.featureComparison.features.knowledgeBase', 'Extra knowledge base'),
      replaces: ['Synthflow'],
      otherTools: getText('seachat.featureComparison.pricing.knowledgeBase', '$10/mo'),
      seachat: getText('seachat.featureComparison.seachatValues.knowledgeBase', 'Included')
    },
    {
      feature: getText('seachat.featureComparison.features.extraChatbot', 'Extra chatbot'),
      replaces: ['chatbase'],
      otherTools: getText('seachat.featureComparison.pricing.extraChatbot', '$10/mo'),
      seachat: getText('seachat.featureComparison.seachatValues.extraChatbot', '$9/mo')
    }
  ], [getText]);

  const displayedFeatures = showAllFeatures ? features : features.slice(0, 8);

  const renderCompanyLogos = (companies: string[] | string) => {
    if (typeof companies === 'string') {
      if (companies === getText('seachat.featureComparison.replaces.uniqueToSeachat', 'Unique to SeaChat')) {
        return (
          <div className="flex items-center justify-center">
            <Star className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="text-xs text-yellow-700 font-medium">
              {getText('seachat.featureComparison.uniqueToSeachat', 'Unique')}
            </span>
          </div>
        );
      }
      return <span className="text-xs text-gray-600">{companies}</span>;
    }
    
    if (!companies || companies.length === 0) {
      return <span className="text-xs text-gray-400">-</span>;
    }

    return (
      <div className="flex flex-wrap items-center justify-center gap-2">
        {companies.map((company, index) => {
          const logoPath = companyLogos[company as keyof typeof companyLogos];
          if (logoPath) {
            return (
              <img
                key={index}
                src={logoPath}
                alt={company}
                className="w-6 h-6 rounded object-contain"
                title={company}
              />
            );
          }
          return (
            <span key={index} className="text-xs text-gray-600 px-1">
              {company}
            </span>
          );
        })}
      </div>
    );
  };

  const renderSeaChatValue = (value: string) => {
    if (value === 'TRUE') {
      return (
        <div className="flex items-center justify-center">
          <Check className="w-5 h-5 text-green-600" />
        </div>
      );
    }
    if (value.includes('UNIQUE')) {
      return (
        <div className="flex items-center justify-center">
          <Star className="w-5 h-5 text-yellow-500" />
        </div>
      );
    }
    return (
      <div className="text-sm text-center text-teal-700 font-medium px-2">
        {value}
      </div>
    );
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'included':
        return <Check className="w-5 h-5 text-green-600" />;
      case 'unique':
        return <Star className="w-5 h-5 text-yellow-500" />;
      case 'addon':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'limited':
        return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      case 'not-available':
        return <X className="w-5 h-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'included':
        return 'bg-green-50 text-green-800';
      case 'unique':
        return 'bg-yellow-50 text-yellow-800';
      case 'addon':
        return 'bg-yellow-50 text-yellow-700';
      case 'limited':
        return 'bg-orange-50 text-orange-700';
      case 'not-available':
        return 'bg-red-50 text-red-700';
      default:
        return 'bg-gray-50 text-gray-700';
    }
  };

  // 處理載入狀態
  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-2/3 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-16"></div>
            <div className="h-96 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getText('seachat.featureComparison.title', 'Why Choose SeaChat Over the Competition?')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {getText('seachat.featureComparison.subtitle', 'See how SeaChat replaces multiple tools with one comprehensive platform. Save money while getting more features.')}
          </p>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 text-white mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">
                {getText('seachat.featureComparison.valueTitle', 'The Value You Get:')}
              </h3>
              <p className="font-semibold mb-2 text-3xl">
                {getText('seachat.featureComparison.totalValue', '$331 or more/month')}
              </p>
              <p className="text-sm opacity-90">
                {getText('seachat.featureComparison.competitorTotal', 'Total value from competitors')}
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">
                {getText('seachat.featureComparison.priceTitle', 'The Price You Pay:')}
              </h3>
              <p className="font-semibold mb-2 text-3xl">
                {getText('seachat.featureComparison.seachatPrice', '$29.99 /month')}
              </p>
              <p className="text-sm opacity-90">
                {getText('seachat.featureComparison.seachatAll', 'All features included')}
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-12">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-r border-gray-200">
                    {getText('seachat.featureComparison.table.headers.features', 'Features')}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-r border-gray-200">
                    {getText('seachat.featureComparison.table.headers.replaces', 'Replaces')}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-r border-gray-200">
                    {getText('seachat.featureComparison.table.headers.otherTools', 'Other Tools')}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-teal-900 bg-teal-50">
                    {getText('seachat.featureComparison.table.headers.seachat', 'SeaChat')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {displayedFeatures.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-gray-200">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 text-center border-r border-gray-200">
                      {renderCompanyLogos(item.replaces)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 text-center font-medium border-r border-gray-200">
                      {item.otherTools || '-'}
                    </td>
                    <td className="px-6 py-4 text-sm text-center bg-teal-25">
                      {renderSeaChatValue(item.seachat)}
                    </td>
                  </tr>
                ))}
                
                {/* Total Row */}
                <tr className="bg-gradient-to-r from-gray-50 to-teal-50 font-bold">
                  <td className="px-6 py-4 text-sm font-bold text-gray-900 border-r border-gray-200">
                    {getText('seachat.featureComparison.table.total', 'Total')}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center border-r border-gray-200">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-red-600 text-center font-bold border-r border-gray-200">
                    {getText('seachat.featureComparison.table.totalPrice', '$331+/mo')}
                  </td>
                  <td className="px-6 py-4 text-sm text-center bg-teal-100">
                    <div className="text-2xl font-bold text-teal-700">
                      {getText('seachat.featureComparison.table.seachatPrice', '$29.99/mo')}
                    </div>
                  </td>
                </tr>
                
                {/* Bottom explanation row */}
                <tr className="bg-gradient-to-r from-blue-50 to-teal-50 text-xs">
                  <td className="px-6 py-3 text-center font-medium text-blue-700 border-r border-gray-200">
                    {getText('seachat.featureComparison.table.explanations.valueYouGet', 'Value you get')}
                  </td>
                  <td className="px-6 py-3 text-center font-medium text-blue-700 border-r border-gray-200">
                    
                  </td>
                  <td className="px-6 py-3 text-center font-medium text-red-700 border-r border-gray-200">
                    {getText('seachat.featureComparison.table.explanations.priceYouWouldPay', 'Price you would pay')}
                  </td>
                  <td className="px-6 py-3 text-center font-medium text-teal-700 bg-teal-100">
                    {getText('seachat.featureComparison.table.explanations.priceYouPay', 'Price you pay')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden mb-12">
          <div className="space-y-6">
            {displayedFeatures.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">{item.feature}</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">
                      {getText('seachat.featureComparison.mobile.replaces', 'Replaces')}
                    </span>
                    <div className="text-right max-w-48">
                      {renderCompanyLogos(item.replaces)}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">
                      {getText('seachat.featureComparison.mobile.otherTools', 'Other Tools')}
                    </span>
                    <span className="text-sm font-medium text-gray-800">
                      {item.otherTools || '-'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 bg-teal-50 rounded-lg px-3">
                    <span className="text-sm font-medium text-teal-700">
                      {getText('seachat.featureComparison.mobile.seachat', 'SeaChat')}
                    </span>
                    <div className="text-right">
                      {renderSeaChatValue(item.seachat)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Mobile Total */}
            <div className="bg-gradient-to-r from-gray-100 to-teal-100 rounded-xl p-6 font-bold">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">
                    {getText('seachat.featureComparison.mobile.otherToolsTotal', 'Other Tools')}
                  </div>
                  <div className="text-lg font-bold text-red-600">
                    {getText('seachat.featureComparison.mobile.totalPrice', '$331+/mo')}
                  </div>
                  <div className="text-xs text-red-600 mt-1">
                    {getText('seachat.featureComparison.mobile.priceYouWouldPay', 'Price you would pay')}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-teal-700 mb-2">
                    {getText('seachat.featureComparison.mobile.seachatTotal', 'SeaChat')}
                  </div>
                  <div className="text-2xl font-bold text-teal-700">
                    {getText('seachat.featureComparison.mobile.seachatTotalPrice', '$29.99/mo')}
                  </div>
                  <div className="text-xs text-teal-700 mt-1">
                    {getText('seachat.featureComparison.mobile.priceYouPay', 'Price you pay')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* See Detailed Pricing Button */}
        <div className="text-center mt-8">
          <a
            href="/seachat/pricing"
            className="inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <span>
              {getText('seachat.featureComparison.seeDetailedPricing', 'See Detailed Pricing')}
            </span>
          </a>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {getText('seachat.featureComparison.ctaTitle', 'Ready to Experience the SeaChat Advantage?')}
            </h3>
            <p className="text-xl mb-6 opacity-90">
              {getText('seachat.featureComparison.ctaSubtitle', 'Join thousands of businesses that chose the smarter, more affordable solution.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                {getText('seachat.featureComparison.startFree', 'Start Free Now')}
              </a>
              <a
                href={getMeetingUrl(currentLanguage)}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
              >
                {getText('seachat.featureComparison.bookDemo', 'Book a Demo')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;