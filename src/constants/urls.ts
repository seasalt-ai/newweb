// External URLs used throughout the application
export const MEETING_URL = 'https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/';
export const HUBSPOT_DEMO_ZH_TW = 'https://meetings.hubspot.com/seasalt-ai/seasalt-meeting-taiwan';

// Helper function to get the appropriate meeting URL based on language
export const getMeetingUrl = (language: string): string => {
  if (language === 'zh-CN' || language === 'zh-TW') {
    return HUBSPOT_DEMO_ZH_TW;
  }
  return MEETING_URL;
};

// Other external URLs can be added here as needed