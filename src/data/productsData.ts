import { MessageSquare, Users, Video, Mic } from 'lucide-react';
import i18n from '../i18n';

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

export const getProducts = (): Product[] => [
  {
    title: i18n.t('productsData.seachat.title'),
    href: '/seachat',
    description: i18n.t('productsData.seachat.description'),
    icon: MessageSquare
  },
  {
    title: i18n.t('productsData.seax.title'),
    href: '/seax',
    description: i18n.t('productsData.seax.description'),
    icon: Users
  },
  {
    title: i18n.t('productsData.seameet.title'),
    href: 'http://meet.seasalt.ai/',
    description: i18n.t('productsData.seameet.description'),
    icon: Video
  },
  {
    title: i18n.t('productsData.seavoice.title'),
    href: '/seavoice',
    description: i18n.t('productsData.seavoice.description'),
    icon: Mic,
    subProducts: [
      {
        title: i18n.t('productsData.seavoice.subProducts.tts'),
        href: 'https://suite.seasalt.ai/tts/'
      },
      {
        title: i18n.t('productsData.seavoice.subProducts.stt'),
        href: 'https://suite.seasalt.ai/stt/'
      },
      {
        title: i18n.t('productsData.seavoice.subProducts.discord'),
        href: 'https://voice.seasalt.ai/discord/'
      }
    ]
  }
];

// Backward compatibility export
export const products = getProducts();
