import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../../i18n/helpers';
import { useTranslationUtils } from '../../i18n/translationUtils';

interface CompanyNewsletterProps {
  lang: SupportedLanguage;
  translations?: any;
}

const CompanyNewsletter: React.FC<CompanyNewsletterProps> = ({ lang, translations }) => {
  const { t, isLoading } = useTranslation(lang);
  
  // Use unified translation utils
  const { getText } = useTranslationUtils(lang, translations, t, isLoading);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isLoading && !translations) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-pulse">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-6"></div>
            <div className="h-10 bg-white/20 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-6 bg-white/20 rounded w-full mx-auto mb-2"></div>
            <div className="h-6 bg-white/20 rounded w-2/3 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

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
            <h2 className="text-4xl font-bold mb-4">{getText('company.newsletter.title', 'Stay Updated')}</h2>
            <p className="text-xl text-blue-100 mb-2">
              {getText('company.newsletter.subtitle', 'Get the latest news and insights')}
            </p>
            <p className="text-lg text-blue-200">
              {getText('company.newsletter.description', 'Subscribe to our newsletter for product updates and industry insights')}
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
              <p className="text-lg font-semibold mb-2">{getText('company.newsletter.thankYou', 'Thank you for subscribing!')}</p>
              <p className="text-blue-100">{getText('company.newsletter.confirmation', 'You\'ll receive our weekly newsletter soon.')}</p>
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
                  placeholder={getText('company.newsletter.emailPlaceholder', 'Enter your email address')}
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
                      <span>{getText('company.newsletter.cta', 'Subscribe')}</span>
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
            {getText('company.newsletter.disclaimer', 'We respect your privacy and will never share your information')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyNewsletter;
