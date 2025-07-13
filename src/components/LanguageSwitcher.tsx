import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { LANGUAGE_DETAILS } from '../constants/languages';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  
  // Get current language name
  const getCurrentLanguageName = () => {
    const currentLang = LANGUAGE_DETAILS.find(lang => lang.code === i18n.language);
    return currentLang ? currentLang.shortCode : 'EN';
  };
  
  const changeLanguage = (languageCode: string) => {
    const { pathname } = location;
    const currentLang = i18n.language;
    let newPath;

    // Remove hash from pathname if it exists
    const cleanPathname = pathname.split('#')[0];

    // Check if the current path starts with the language code
    if (cleanPathname.startsWith(`/${currentLang}/`)) {
      // Replace the current language code with the new one
      newPath = cleanPathname.replace(`/${currentLang}/`, `/${languageCode}/`);
    } else if (cleanPathname === `/${currentLang}`) {
      // Handle root path for a language
      newPath = `/${languageCode}`;
    } else {
      // If no language in path, add it
      newPath = `/${languageCode}${cleanPathname}`;
    }


    
    // Change the language and navigate to the new path
    i18n.changeLanguage(languageCode);
    navigate(newPath, { replace: true });
    setIsOpen(false);
  };
  
  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
      >
        <span className="mr-1">{getCurrentLanguageName()}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 max-h-96 overflow-y-auto z-50">
          {LANGUAGE_DETAILS.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                i18n.language === language.code ? 'font-semibold text-blue-600 bg-blue-50' : 'text-gray-700'
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;