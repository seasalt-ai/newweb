import { TrendingUp, Headphones, Bot, Building2 } from 'lucide-react';

export interface Solution {
  title: string;
  path: string;
  slug: string;
  icon?: any;
}

export const getSolutions = (t: (key: string) => string): Solution[] => [
  {
    title: t('solutions.salesMarketing.title'),
    path: '/solutions/sales-marketing',
    slug: 'sales-marketing',
    icon: TrendingUp
  },
  {
    title: t('solutions.customerSupport.title'),
    path: '/solutions/customer-support',
    slug: 'customer-support',
    icon: Headphones
  },
  {
    title: t('solutions.aiAutomation.title'),
    path: '/solutions/ai-automation',
    slug: 'ai-automation',
    icon: Bot
  },
  {
    title: t('solutions.smeOwners.title'),
    path: '/solutions/sme-owners',
    slug: 'sme-owners',
    icon: Building2
  }
];
