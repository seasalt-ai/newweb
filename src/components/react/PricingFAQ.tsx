import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../../i18n/helpers';
import { useTranslationUtils } from '../../i18n/translationUtils';

interface PricingFAQProps {
  lang: SupportedLanguage;
  translations?: any;
}

export default function PricingFAQ({ lang, translations }: PricingFAQProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, isLoading } = useTranslation(lang);
  
  // Use new unified translation utils
  const { getText } = useTranslationUtils(lang, translations, t, isLoading);

  // 如果翻譯還在載入，顯示載入狀態
  if (isLoading && !translations) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="animate-pulse space-y-4">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-100 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const faqs = [
    {
      question: getText('pricing.faq.1.question', 'What is included in the free plan?'),
      answer: getText('pricing.faq.1.answer', 'The free plan includes basic features to help you get started.')
    },
    {
      question: getText('pricing.faq.2.question', 'Can I upgrade or downgrade my plan?'),
      answer: getText('pricing.faq.2.answer', 'Yes, you can change your plan at any time from your account settings.')
    },
    {
      question: getText('pricing.faq.3.question', 'What payment methods do you accept?'),
      answer: getText('pricing.faq.3.answer', 'We accept all major credit cards and PayPal.')
    },
    {
      question: getText('pricing.faq.4.question', 'Is there a setup fee?'),
      answer: getText('pricing.faq.4.answer', 'No, there are no setup fees for any of our plans.')
    },
    {
      question: getText('pricing.faq.5.question', 'Can I cancel my subscription anytime?'),
      answer: getText('pricing.faq.5.answer', 'Yes, you can cancel your subscription at any time with no cancellation fees.')
    },
    {
      question: getText('pricing.faq.6.question', 'Do you offer refunds?'),
      answer: getText('pricing.faq.6.answer', 'We offer a 30-day money-back guarantee for all paid plans.')
    },
    {
      question: getText('pricing.faq.7.question', 'How can I contact support?'),
      answer: getText('pricing.faq.7.answer', 'You can reach our support team via email, chat, or phone during business hours.')
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-lg">
          <button
            onClick={() => toggleFaq(index)}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
          >
            <span className="text-base sm:text-lg font-semibold text-gray-900">{faq.question}</span>
            <ChevronDown 
              className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                openFaq === index ? 'transform rotate-180' : ''
              }`} 
            />
          </button>
          {openFaq === index && (
            <div className="px-4 sm:px-6 pb-4">
              <p className="text-sm sm:text-base text-gray-600">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
