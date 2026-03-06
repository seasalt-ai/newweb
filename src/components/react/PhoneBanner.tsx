import { Phone, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation, type SupportedLanguage } from '../../i18n/helpers';

interface PhoneBannerProps {
  lang: SupportedLanguage;
  translations?: any;
}

const PhoneBanner = ({ lang, translations }: PhoneBannerProps) => {
  const { t, isLoading } = useTranslation(lang);

  // Use passed translations or fall back to hook
  const getText = (key: string, fallback: string) => {
    if (translations) {
      const keys = key.split('.');
      let value = translations;
      for (const k of keys) {
        value = value?.[k];
      }
      return value || fallback;
    }
    return t?.(key) || fallback;
  };
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  // 載入狀態時顯示預設內容
  if (isLoading && !translations) {
    return (
      <div className="bg-blue-600 text-white py-2 px-4 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <Phone className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">
            🎉 Get a free consultation call - Book now!
          </span>
          <a
            href="https://calendar.app.google/GcdRQv1DVoiDaoCT6"
            className="ml-3 text-sm underline hover:no-underline"
          >
            Book Call
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-blue-700 rounded-full p-1 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    );
  }

  return (
    <div className="bg-blue-600 text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <Phone className="w-4 h-4 mr-2" />
        <span className="text-sm font-medium">
          🎉 {getText('banner.phone.text', 'Get a free consultation call - Book now!')}
        </span>
        <a
          href="https://calendar.app.google/GcdRQv1DVoiDaoCT6"
          className="ml-3 text-sm underline hover:no-underline"
        >
          {getText('banner.phone.cta', 'Book Call')}
        </a>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-blue-700 rounded-full p-1 transition-colors"
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  );
};

export default PhoneBanner;
