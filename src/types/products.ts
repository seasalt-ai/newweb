export type ProductType = 'seax' | 'seachat' | 'seavoice';

export interface NavigationItem {
  name: string;
  href: string;
  dropdown?: NavigationDropdownItem[];
}

export interface NavigationDropdownItem {
  name: string;
  href: string;
  icon?: any; // React component or icon
  iconText?: string;
  isParent?: boolean;
  isChild?: boolean;
}

export interface ProductTheme {
  primary: string;
  secondary: string;
  accent: string;
  logo: string;
  logoAlt: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface ProductConfig {
  type: ProductType;
  name: string;
  theme: ProductTheme;
  baseUrl: string;
  signInUrl: string;
  signUpUrl: string;
  wikiUrl: (language: string) => string;
  meetingUrl: (language: string) => string;
  enableFeatures: {
    topBar: boolean;
    backToMainSite: boolean;
    wiki: boolean;
    authButtons: boolean;
    cta: boolean;
    statistics: boolean;
    socialLinks: boolean;
  };
  customLinks?: {
    name: string;
    href: string;
    external?: boolean;
    icon?: any;
  }[];
}

export interface ProductTranslations {
  backToMain?: string;
  navigation: {
    [key: string]: string;
  };
  channels?: {
    [key: string]: string;
  };
  solutions?: {
    [key: string]: string;
  };
  industries?: {
    [key: string]: string;
  };
  buttons: {
    wiki?: string;
    signIn: string;
    signUp: string;
    [key: string]: string | undefined;
  };
  mobile?: {
    [key: string]: string;
  };
  footer: {
    [key: string]: any;
  };
  [key: string]: any;
}

export interface ProductHeaderProps {
  product: ProductType;
  config: ProductConfig;
  lang: string;
  translations: ProductTranslations;
}

export interface ProductFooterProps {
  product: ProductType;
  config: ProductConfig;
  lang: string;
  translations: ProductTranslations;
}