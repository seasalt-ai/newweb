/**
 * Product Asset Detection Utility
 * 
 * Automatically determines product-specific branding assets (favicon, logo, OG images)
 * based on URL pathname patterns.
 */

import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

// =============================================================================
// Type Definitions
// =============================================================================

export type Product = 'core' | 'seachat' | 'seax' | 'seavoice' | 'seahealth';

export interface ProductAssets {
  product: Product;
  favicon: string;
  icon: string;
  logo: string;
  ogDefault: string;
}

// =============================================================================
// Product Detection Logic
// =============================================================================

/**
 * Detects the product based on URL pathname
 * @param pathname - The URL pathname (e.g., '/seachat/features', '/seax', '/seavoice/pricing')
 * @returns Product type
 */
export function detectProduct(pathname: string): Product {
  // Clean pathname by removing leading/trailing slashes and language prefixes
  const cleanPath = pathname
    .replace(/^\/+|\/+$/g, '') // Remove leading/trailing slashes
    .replace(/^(en|zh-TW|zh-CN)\//i, ''); // Remove language prefixes
  
  // Product detection rules (order matters - most specific first)
  if (/^seahealth($|\/)/i.test(cleanPath)) {
    return 'seahealth';
  }
  
  if (/^seachat($|\/)/i.test(cleanPath)) {
    return 'seachat';
  }
  
  if (/^seavoice($|\/)/i.test(cleanPath)) {
    return 'seavoice';
  }
  
  if (/^seax($|\/)/i.test(cleanPath)) {
    return 'seax';
  }
  
  // Default to core for homepage and other paths
  return 'core';
}

/**
 * Gets product-specific assets based on URL pathname
 * @param pathname - The URL pathname
 * @returns ProductAssets object with all asset URLs
 */
export function getProductAssets(pathname: string): ProductAssets {
  const product = detectProduct(pathname);
  
  switch (product) {
    case 'seachat':
      return {
        product: 'seachat',
        favicon: '/seachat-icon.png', // Use SeaChat favicon
        icon: '/seachat-icon.png',
        logo: '/seachat-logo.png',
        ogDefault: '/seachat-logo.png' // Use logo as default OG image
      };
      
    case 'seax':
      return {
        product: 'seax',
        favicon: '/seax-icon.png', // Use SeaX favicon
        icon: '/seax-icon.png',
        logo: '/seax-logo.png',
        ogDefault: '/seax-logo.png' // Use logo as default OG image
      };
      
    case 'seavoice':
      return {
        product: 'seavoice',
        favicon: '/seavoice-icon.png', // Use SeaVoice favicon
        icon: '/seavoice-icon.png',
        logo: '/seavoice-logo.png',
        ogDefault: '/seavoice-logo.png' // Use logo as default OG image
      };
      
    case 'seahealth':
      return {
        product: 'seahealth',
        favicon: '/health-images/main/favicon-seahealth.ico',
        icon: '/seasalt-ai-icon.png', // Fallback to main icon
        logo: '/logo-seahealth.svg',
        ogDefault: '/logo-seahealth.svg' // Use logo as default OG image
      };
      
    case 'core':
    default:
      return {
        product: 'core',
        favicon: '/seasalt-ai-favicon.ico',
        icon: '/seasalt-ai-icon.png',
        logo: '/seasalt-ai-logo.png',
        ogDefault: '/seasalt-ai-logo.png' // Use logo as default OG image for now
      };
  }
}

// =============================================================================
// React Hook for Easy Component Integration
// =============================================================================

/**
 * React hook to get product assets based on current location
 * @returns ProductAssets for the current page
 */
export function useProductAssets(): ProductAssets {
  const { pathname } = useLocation();
  return useMemo(() => getProductAssets(pathname), [pathname]);
}

// =============================================================================
// Utility Functions
// =============================================================================

/**
 * Gets the full URL for a product asset
 * @param assetPath - Relative path to asset (e.g., '/seachat-logo.png')
 * @param baseUrl - Base URL (defaults to window.location.origin or https://seasalt.ai)
 * @returns Full URL to asset
 */
export function getAssetUrl(assetPath: string, baseUrl?: string): string {
  const base = baseUrl || (typeof window !== 'undefined' ? window.location.origin : 'https://seasalt.ai');
  return `${base}${assetPath}`;
}

/**
 * Gets the default OG image URL for a specific pathname
 * @param pathname - URL pathname
 * @param baseUrl - Base URL (optional)
 * @returns Full URL to default OG image
 */
export function getDefaultOgImage(pathname = '/', baseUrl?: string): string {
  const assets = getProductAssets(pathname);
  return getAssetUrl(assets.ogDefault, baseUrl);
}

/**
 * Gets the favicon URL for a specific pathname
 * @param pathname - URL pathname
 * @returns Favicon path (relative)
 */
export function getDefaultFavicon(pathname = '/'): string {
  const assets = getProductAssets(pathname);
  return assets.favicon;
}

// =============================================================================
// Development Helpers
// =============================================================================

/**
 * Tests product detection with sample paths (useful for debugging)
 */
export function testProductDetection() {
  const testPaths = [
    '/',
    '/en',
    '/zh-TW',
    '/pricing',
    '/seachat',
    '/seachat/features',
    '/en/seachat/pricing',
    '/seax',
    '/seax/channels/sms',
    '/zh-TW/seax/industries',
    '/seavoice',
    '/seavoice/platform/speech-to-text',
    '/en/seavoice/solutions/inbound',
    '/seahealth',
    '/zh-TW/seahealth/compliance'
  ];
  
  console.table(
    testPaths.map(path => ({
      path,
      ...getProductAssets(path)
    }))
  );
}

// Export for testing in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  (window as any).testProductDetection = testProductDetection;
}
