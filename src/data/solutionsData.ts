import { TrendingUp, Headphones, Bot, Building2 } from 'lucide-react';
import { TFunction } from 'i18next';

export interface Solution {
  title: string;
  path: string;
  slug: string;
  icon?: any;
}

export const getSolutions = (t: TFunction): Solution[] => [
  {
    title: t('solutionsData.salesMarketing.title'),
    path: '/solutions/sales-marketing',
    slug: 'sales-marketing',
    icon: TrendingUp
  },
  {
    title: t('solutionsData.customerSupport.title'),
    path: '/solutions/customer-support',
    slug: 'customer-support',
    icon: Headphones
  },
  {
    title: t('solutionsData.aiAutomation.title'),
    path: '/solutions/ai-automation',
    slug: 'ai-automation',
    icon: Bot
  },
  {
    title: t('solutionsData.smeOwners.title'),
    path: '/solutions/sme-owners',
    slug: 'sme-owners',
    icon: Building2
  }
];

// Create a fallback t function for backward compatibility
const fallbackT = (key: string) => key;

// Backward compatibility export (will show keys as fallback)
export const solutions = getSolutions(fallbackT);
