import { TrendingUp, Headphones, Bot, Building2 } from 'lucide-react';
import i18n from '../i18n';

export interface Solution {
  title: string;
  path: string;
  slug: string;
  icon?: any;
}

export const getSolutions = (): Solution[] => [
  {
    title: i18n.t('solutionsData.salesMarketing.title'),
    path: '/solutions/sales-marketing',
    slug: 'sales-marketing',
    icon: TrendingUp
  },
  {
    title: i18n.t('solutionsData.customerSupport.title'),
    path: '/solutions/customer-support',
    slug: 'customer-support',
    icon: Headphones
  },
  {
    title: i18n.t('solutionsData.aiAutomation.title'),
    path: '/solutions/ai-automation',
    slug: 'ai-automation',
    icon: Bot
  },
  {
    title: i18n.t('solutionsData.smeOwners.title'),
    path: '/solutions/sme-owners',
    slug: 'sme-owners',
    icon: Building2
  }
];

// Backward compatibility export
export const solutions = getSolutions();
