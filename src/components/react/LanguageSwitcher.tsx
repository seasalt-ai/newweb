import { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useTranslation, extractLangFromPath, getLocalizedPath, type SupportedLanguage } from '../../i18n/helpers';

interface LanguageSwitcherProps {
  className?: string;
  lang: SupportedLanguage;
  currentPath?: string;
  translations?: any;
}

const LanguageSwitcher = ({ className = '', lang, currentPath, translations }: LanguageSwitcherProps) => {
  const { t, isLoading } = useTranslation(lang);
  const [isOpen, setIsOpen] = useState(false);
  
  // 如果還在載入翻譯，顯示載入狀態
  if (isLoading && !translations) {
    return (
      <div className={`relative ${className}`}>
        <div className="flex items-center text-gray-400">
          <span className="mr-1">...</span>
          <div className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  const languages = [
    { code: 'en' as SupportedLanguage, name: 'English', shortCode: 'EN' },
    { code: 'es' as SupportedLanguage, name: 'Español', shortCode: 'ES' },
    { code: 'zh-tw' as SupportedLanguage, name: '繁體中文', shortCode: 'TW' },
    { code: 'zh-cn' as SupportedLanguage, name: '简体中文', shortCode: 'CN' },
    { code: 'ja' as SupportedLanguage, name: '日本語', shortCode: 'JA' },
    { code: 'ko' as SupportedLanguage, name: '한국어', shortCode: 'KO' },
    { code: 'fr' as SupportedLanguage, name: 'Français', shortCode: 'FR' },
    { code: 'de' as SupportedLanguage, name: 'Deutsch', shortCode: 'DE' },
    { code: 'ar' as SupportedLanguage, name: 'العربية', shortCode: 'AR' },
    { code: 'fa' as SupportedLanguage, name: 'فارسی', shortCode: 'IR' },
    { code: 'fil' as SupportedLanguage, name: 'Filipino', shortCode: 'PH' },
    { code: 'hi' as SupportedLanguage, name: 'हिन्दी', shortCode: 'HI' },
    { code: 'id' as SupportedLanguage, name: 'Bahasa Indonesia', shortCode: 'ID' },
    { code: 'ms' as SupportedLanguage, name: 'Bahasa Melayu', shortCode: 'MY' },
    { code: 'pl' as SupportedLanguage, name: 'Polski', shortCode: 'PL' },
    { code: 'pt' as SupportedLanguage, name: 'Português', shortCode: 'PT' },
    { code: 'ru' as SupportedLanguage, name: 'Русский', shortCode: 'RU' },
    { code: 'ta' as SupportedLanguage, name: 'தமிழ்', shortCode: 'IN' },
    { code: 'th' as SupportedLanguage, name: 'ไทย', shortCode: 'TH' },
    { code: 'vi' as SupportedLanguage, name: 'Tiếng Việt', shortCode: 'VI' }
  ];

  const currentLang = languages.find(l => l.code === lang) || languages[0];

  const handleLanguageChange = (targetLang: SupportedLanguage) => {
    if (typeof window !== 'undefined') {
      const pathToUse = currentPath || window.location.pathname;
      const newPath = getLocalizedPath(pathToUse, targetLang);
      window.location.href = newPath;
    }
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
      >
        <span className="mr-1">{currentLang.shortCode}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-64 origin-top-right bg-white rounded-lg shadow-lg border border-gray-200 py-2 max-h-96 overflow-y-auto z-[9999]">
          <div className="py-1">
            {languages.map((langOption) => (
              <button
                key={langOption.code}
                onClick={() => {
                  handleLanguageChange(langOption.code);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                  lang === langOption.code ? 'font-semibold text-blue-600 bg-blue-50' : 'text-gray-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{langOption.name}</span>
                  <span className="text-xs text-gray-500 ml-2">{langOption.shortCode}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher;
