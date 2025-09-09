// External URLs used throughout the application
export const MEETING_URL = 'https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/';
export const HUBSPOT_DEMO_ZH_TW = 'https://meetings.hubspot.com/seasalt-ai/seasalt-meeting-taiwan';

// Helper function to get the appropriate meeting URL based on language
export const getMeetingUrl = (language: string): string => {
  if (language.toLowerCase() === 'zh-cn' || language.toLowerCase() === 'zh-tw') {
    return HUBSPOT_DEMO_ZH_TW;
  }
  return MEETING_URL;
};

// Other external URLs can be added here as needed
export const SIGNUP_URL = 'https://seax.seasalt.ai/signup';
export const LOGIN_URL = 'https://seax.seasalt.ai/login';

// Social media URLs
export const SOCIAL_URLS = {
  twitter: 'https://twitter.com/seasalt_ai',
  linkedin: 'https://www.linkedin.com/company/seasalt-ai',
  youtube: 'https://www.youtube.com/@seasalt-ai',
} as const;

// Documentation URLs
export const DOCS_URLS = {
  api: 'https://docs.seasalt.ai/api',
  wiki: 'https://wiki.seasalt.ai',
  support: 'https://support.seasalt.ai',
} as const;
