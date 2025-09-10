import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { getTranslationHelpers, type SupportedLanguage } from '../../i18n/helpers';

interface PricingFAQProps {
  lang: SupportedLanguage;
}

export default function PricingFAQ({ lang }: PricingFAQProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [t, setT] = useState<((key: string) => string) | null>(null);

  // 載入翻譯
  useEffect(() => {
    const loadTranslations = async () => {
      const { t: tFunc } = await getTranslationHelpers(lang);
      setT(() => tFunc);
    };
    loadTranslations();
  }, [lang]);

  // 如果翻譯還沒載入完成，顯示載入狀態
  if (!t) {
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
      question: t('pricing.faq.1.question'),
      answer: t('pricing.faq.1.answer')
    },
    {
      question: t('pricing.faq.2.question'),
      answer: t('pricing.faq.2.answer')
    },
    {
      question: t('pricing.faq.3.question'),
      answer: t('pricing.faq.3.answer')
    },
    {
      question: t('pricing.faq.4.question'),
      answer: t('pricing.faq.4.answer')
    },
    {
      question: t('pricing.faq.5.question'),
      answer: t('pricing.faq.5.answer')
    },
    {
      question: t('pricing.faq.6.question'),
      answer: t('pricing.faq.6.answer')
    },
    {
      question: t('pricing.faq.7.question'),
      answer: t('pricing.faq.7.answer')
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
