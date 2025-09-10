import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

type SupportedLanguage = 'en' | 'es' | 'zh-tw' | 'zh-cn' | 'ja' | 'ko' | 'fr' | 'de' | 'ar' | 'fa' | 'fil' | 'hi' | 'id' | 'ms' | 'pl' | 'pt' | 'ru' | 'ta' | 'th' | 'vi';

interface CompanyNewsletterProps {
  lang: SupportedLanguage;
}

const CompanyNewsletter: React.FC<CompanyNewsletterProps> = ({ lang }) => {
  const [translations, setTranslations] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const langKey = lang === 'zh-tw' ? 'zh-TW' : lang === 'zh-cn' ? 'zh-CN' : lang;
        const translationModule = await import(`../../i18n/locales/${langKey}.json`);
        setTranslations(translationModule.default || translationModule);
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    };

    loadTranslations();
  }, [lang]);

  if (!translations) {
    return <div>Loading...</div>;
  }

  const t = (key: string) => {
    const keys = key.split('.');
    let result: any = translations;
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key;
      }
    }
    
    return typeof result === 'string' ? result : key;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log('Newsletter signup:', email);
    }, 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">{t('company.newsletter.title')}</h2>
            <p className="text-xl text-blue-100 mb-2">
              {t('company.newsletter.subtitle')}
            </p>
            <p className="text-lg text-blue-200">
              {t('company.newsletter.description')}
            </p>
          </div>
          
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto bg-white/10 rounded-lg p-6"
            >
              <p className="text-lg font-semibold mb-2">{t('company.newsletter.thankYou') || 'Thank you for subscribing!'}</p>
              <p className="text-blue-100">{t('company.newsletter.confirmation') || 'You\'ll receive our weekly newsletter soon.'}</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('company.newsletter.emailPlaceholder') || 'Enter your email address'}
                  required
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('company.newsletter.cta')}</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          )}
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-blue-200 mt-6"
          >
            {t('company.newsletter.disclaimer')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyNewsletter;
