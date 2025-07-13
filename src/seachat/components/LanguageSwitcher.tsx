import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh-TW', name: '繁體中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'es', name: 'Español' },
    { code: 'pt', name: 'Português' },
    { code: 'fr', name: 'Français' },
    { code: 'pl', name: 'Polski' },
    { code: 'ru', name: 'Русский' },
    { code: 'ar', name: 'العربية' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  // Get current language code and name
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown className="w-3 h-3" />
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 max-h-64 overflow-y-auto z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`w-full text-left px-4 py-2 text-sm ${
                  i18n.language === lang.code ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50 transition-colors'
                }`}
                onClick={() => changeLanguage(lang.code)}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;