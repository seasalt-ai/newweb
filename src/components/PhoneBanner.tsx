import { Phone, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PhoneBanner = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-3 px-4 shadow-lg border-b-2 border-blue-500">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-2 text-center">
          <Phone className="w-5 h-5 animate-pulse" />
          <span className="font-semibold text-lg">
            {t('phoneBanner.callText')} <a 
              href="tel:+1-762-244-3688" 
              className="text-yellow-300 hover:text-yellow-200 underline decoration-2 underline-offset-2"
            >
              {t('phoneBanner.phoneNumber')}
            </a> {t('phoneBanner.bookingText')}
          </span>
          <div className="flex items-center space-x-1 text-yellow-300">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">{t('phoneBanner.availability')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneBanner;
