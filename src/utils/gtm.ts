// Google Tag Manager utility functions
// This file provides helper functions to track events and page views with GTM

// Extend the Window interface to include the GTM dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialize dataLayer if it doesn't exist
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

/**
 * Push data to Google Tag Manager dataLayer
 * @param data - The data object to push to dataLayer
 */
export const gtmPush = (data: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(data);
  }
};

/**
 * Track a custom event in Google Tag Manager
 * @param eventName - The name of the event
 * @param parameters - Additional parameters for the event
 */
export const gtmTrackEvent = (
  eventName: string, 
  parameters: Record<string, any> = {}
) => {
  gtmPush({
    event: eventName,
    ...parameters
  });
};

/**
 * Track a page view in Google Tag Manager
 * @param pagePath - The page path
 * @param pageTitle - The page title (optional)
 */
export const gtmTrackPageView = (pagePath: string, pageTitle?: string) => {
  gtmPush({
    event: 'page_view',
    page_path: pagePath,
    page_title: pageTitle || document.title
  });
};

/**
 * Track button clicks
 * @param buttonName - The name/identifier of the button
 * @param location - Where the button is located (e.g., 'header', 'hero', 'footer')
 * @param additionalData - Any additional tracking data
 */
export const gtmTrackButtonClick = (
  buttonName: string,
  location: string,
  additionalData: Record<string, any> = {}
) => {
  gtmTrackEvent('button_click', {
    button_name: buttonName,
    button_location: location,
    ...additionalData
  });
};

/**
 * Track form submissions
 * @param formName - The name/identifier of the form
 * @param formLocation - Where the form is located
 * @param additionalData - Any additional tracking data
 */
export const gtmTrackFormSubmit = (
  formName: string,
  formLocation: string,
  additionalData: Record<string, any> = {}
) => {
  gtmTrackEvent('form_submit', {
    form_name: formName,
    form_location: formLocation,
    ...additionalData
  });
};

/**
 * Track link clicks (external links, downloads, etc.)
 * @param linkUrl - The URL being clicked
 * @param linkText - The text of the link
 * @param linkType - Type of link (e.g., 'external', 'download', 'email')
 */
export const gtmTrackLinkClick = (
  linkUrl: string,
  linkText: string,
  linkType: string = 'link'
) => {
  gtmTrackEvent('link_click', {
    link_url: linkUrl,
    link_text: linkText,
    link_type: linkType
  });
};

/**
 * Track user engagement events
 * @param engagementType - Type of engagement (e.g., 'scroll', 'time_on_page', 'video_play')
 * @param value - Engagement value (e.g., scroll percentage, time in seconds)
 * @param additionalData - Any additional tracking data
 */
export const gtmTrackEngagement = (
  engagementType: string,
  value: string | number,
  additionalData: Record<string, any> = {}
) => {
  gtmTrackEvent('engagement', {
    engagement_type: engagementType,
    value: value,
    ...additionalData
  });
};

/**
 * Set user properties in GTM
 * @param properties - User properties to set
 */
export const gtmSetUserProperties = (properties: Record<string, any>) => {
  gtmPush({
    event: 'user_properties',
    user_properties: properties
  });
};
