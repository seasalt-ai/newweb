import { TrendingUp, Headphones, Bot, Building2 } from 'lucide-react';

export interface Solution {
  title: string;
  path: string;
  slug: string;
  icon?: any;
}

export const solutions: Solution[] = [
  {
    title: 'For Sales & Marketing',
    path: '/solutions/sales-marketing',
    slug: 'sales-marketing',
    icon: TrendingUp
  },
  {
    title: 'For Customer Support',
    path: '/solutions/customer-support',
    slug: 'customer-support',
    icon: Headphones
  },
  {
    title: 'AI & Automation',
    path: '/solutions/ai-automation',
    slug: 'ai-automation',
    icon: Bot
  },
  {
    title: 'For SME Owners',
    path: '/solutions/sme-owners',
    slug: 'sme-owners',
    icon: Building2
  }
];
