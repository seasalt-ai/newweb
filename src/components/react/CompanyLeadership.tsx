import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

type SupportedLanguage = 'en' | 'es' | 'zh-tw' | 'zh-cn' | 'ja' | 'ko' | 'fr' | 'de' | 'ar' | 'fa' | 'fil' | 'hi' | 'id' | 'ms' | 'pl' | 'pt' | 'ru' | 'ta' | 'th' | 'vi';

interface CompanyLeadershipProps {
  lang: SupportedLanguage;
}

interface Leader {
  name: string;
  key: string;
  homepage?: string;
  scholar?: string;
  image: string;
}

const CompanyLeadership: React.FC<CompanyLeadershipProps> = ({ lang }) => {
  const [translations, setTranslations] = useState<any>(null);

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

  const leadership: Leader[] = [
    {
      name: 'Xuchen Yao',
      key: 'company.leadership.0',
      homepage: 'https://xuchen.github.io/',
      image: '/people-images/xuchen_yao.jpg'
    },
    {
      name: 'Guoguo Chen',
      key: 'company.leadership.1',
      scholar: 'https://scholar.google.com/citations?user=iDALeq4AAAAJ&hl=en&oi=ao',
      image: '/people-images/guoguo_chen.jpg'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            {t('company.leadership.title') || 'Leadership Team'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {leadership.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="text-center mb-6">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-4">
                  {t(`${leader.key}.role`)}
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t(`${leader.key}.bio`)}
              </p>
              <div className="flex justify-center space-x-4">
                {leader.homepage && (
                  <a
                    href={leader.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t('company.leadership.homepage') || 'Homepage'}</span>
                  </a>
                )}
                {leader.scholar && (
                  <a
                    href={leader.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t('company.leadership.scholar') || 'Scholar'}</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLeadership;
