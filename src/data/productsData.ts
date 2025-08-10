import { MessageSquare, Users, Video, Mic } from 'lucide-react';
import { TFunction } from 'i18next';

export interface SubProduct {
  title: string;
  href: string;
}

export interface Product {
  title: string;
  href: string;
  description?: string;
  subProducts?: SubProduct[];
  icon?: any;
}

export const getProducts = (t: TFunction): Product[] => [
  {
    title: t('productsData.seachat.title'),
    href: '/seachat',
    description: t('productsData.seachat.description'),
    icon: MessageSquare
  },
  {
    title: t('productsData.seax.title'),
    href: '/seax',
    description: t('productsData.seax.description'),
    icon: Users
  },
  {
    title: t('productsData.seameet.title'),
    href: 'http://meet.seasalt.ai/',
    description: t('productsData.seameet.description'),
    icon: Video
  },
  {
    title: t('productsData.seavoice.title'),
    href: '/seavoice',
    description: t('productsData.seavoice.description'),
    icon: Mic,
    subProducts: [
      {
        title: t('productsData.seavoice.subProducts.tts'),
        href: 'https://suite.seasalt.ai/tts/'
      },
      {
        title: t('productsData.seavoice.subProducts.stt'),
        href: 'https://suite.seasalt.ai/stt/'
      },
      {
        title: t('productsData.seavoice.subProducts.discord'),
        href: 'https://voice.seasalt.ai/discord/'
      }
    ]
  }
];

// Create a fallback t function for backward compatibility
const fallbackT = (key: string) => key;

// Backward compatibility export (will show keys as fallback)
export const products = getProducts(fallbackT);
