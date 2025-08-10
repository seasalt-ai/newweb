import React from 'react';
import { useTranslation } from 'react-i18next';

const I18nDebug: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }
  
  const debugInfo = {
    currentLanguage: i18n.language,
    isInitialized: i18n.isInitialized,
    hasResourceBundle: i18n.hasResourceBundle(i18n.language, 'translation'),
    featuresMainTitle: t('features.mainTitle', { defaultValue: 'NOT_FOUND' }),
    featuresOmniChannelTitle: t('features.omniChannel.title', { defaultValue: 'NOT_FOUND' }),
    heroTitle: t('hero.title', { defaultValue: 'NOT_FOUND' }),
  };
  
  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: '#f0f0f0',
      border: '1px solid #ccc',
      padding: '10px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px',
      fontFamily: 'monospace'
    }}>
      <h4>i18n Debug Info:</h4>
      <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
      <button 
        onClick={() => {
          // Clear local storage cache
          localStorage.removeItem('i18nextLng');
          // Reload the page
          window.location.reload();
        }}
        style={{ marginTop: '5px', fontSize: '10px' }}
      >
        Clear Cache & Reload
      </button>
    </div>
  );
};

export default I18nDebug;
