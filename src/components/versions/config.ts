// Version management configuration for Header and Footer components
export type ComponentVersion = 'default' | 'seachat' | 'seax' | 'seavoice';

export interface VersionConfig {
  name: string;
  displayName: string;
  description: string;
  logo?: string;
  primaryColor?: string;
}

// Version configurations
export const VERSION_CONFIGS: Record<ComponentVersion, VersionConfig> = {
  default: {
    name: 'default',
    displayName: 'Seasalt.ai Main',
    description: 'Default Seasalt.ai website header and footer',
    logo: '/seasalt-ai-logo.png',
    primaryColor: '#3B82F6' // blue-500
  },
  seachat: {
    name: 'seachat',
    displayName: 'SeaChat',
    description: 'SeaChat product-specific header and footer',
    logo: '/seachat-logo.png',
    primaryColor: '#10B981' // emerald-500
  },
  seax: {
    name: 'seax',
    displayName: 'SeaX',
    description: 'SeaX product-specific header and footer',
    logo: '/seax-logo.png',
    primaryColor: '#8B5CF6' // violet-500
  },
  seavoice: {
    name: 'seavoice',
    displayName: 'SeaVoice',
    description: 'SeaVoice product-specific header and footer',
    logo: '/seavoice-logo.png',
    primaryColor: '#F59E0B' // amber-500
  }
};

// Default version
export const DEFAULT_VERSION: ComponentVersion = 'default';

// Helper function to get version config
export function getVersionConfig(version: ComponentVersion): VersionConfig {
  return VERSION_CONFIGS[version] || VERSION_CONFIGS[DEFAULT_VERSION];
}

// Helper function to detect version from URL path
export function detectVersionFromPath(pathname: string): ComponentVersion {
  // Remove language prefix and leading slash
  const path = pathname.replace(/^\/[a-z]{2}(-[a-z]{2})?\//, '/');
  
  if (path.startsWith('/seachat')) {
    return 'seachat';
  } else if (path.startsWith('/seax')) {
    return 'seax';
  } else if (path.startsWith('/seavoice')) {
    return 'seavoice';
  } else {
    return 'default';
  }
}

// Helper function to get all available versions
export function getAllVersions(): ComponentVersion[] {
  return Object.keys(VERSION_CONFIGS) as ComponentVersion[];
}