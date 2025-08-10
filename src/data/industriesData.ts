import { ShoppingCart, Heart, Home, Utensils, GraduationCap, Car, Briefcase, Building } from 'lucide-react';
import { TFunction } from 'i18next';

export interface Industry {
  icon: any;
  title: string;
  slug: string;
  headline: string;
  benefits: string[];
  color: string;
  bgColor: string;
  borderColor: string;
  href?: string;
}

export const getIndustries = (t: TFunction): Industry[] => [
  {
    icon: ShoppingCart,
    title: t('industriesData.ecommerce.title'),
    slug: 'e-commerce',
    headline: t('industriesData.ecommerce.headline'),
    benefits: [
      t('industriesData.ecommerce.benefits.0'),
      t('industriesData.ecommerce.benefits.1'),
      t('industriesData.ecommerce.benefits.2'),
      t('industriesData.ecommerce.benefits.3')
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    icon: Heart,
    title: t('industriesData.healthcare.title'),
    slug: 'healthcare',
    headline: t('industriesData.healthcare.headline'),
    benefits: [
      t('industriesData.healthcare.benefits.0'),
      t('industriesData.healthcare.benefits.1'),
      t('industriesData.healthcare.benefits.2'),
      t('industriesData.healthcare.benefits.3')
    ],
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    icon: Home,
    title: t('industriesData.realEstate.title'),
    slug: 'real-estate',
    headline: t('industriesData.realEstate.headline'),
    benefits: [
      t('industriesData.realEstate.benefits.0'),
      t('industriesData.realEstate.benefits.1'),
      t('industriesData.realEstate.benefits.2'),
      t('industriesData.realEstate.benefits.3')
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    icon: Utensils,
    title: t('industriesData.restaurants.title'),
    slug: 'restaurants-hospitality',
    headline: t('industriesData.restaurants.headline'),
    benefits: [
      t('industriesData.restaurants.benefits.0'),
      t('industriesData.restaurants.benefits.1'),
      t('industriesData.restaurants.benefits.2'),
      t('industriesData.restaurants.benefits.3')
    ],
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    icon: GraduationCap,
    title: t('industriesData.education.title'),
    slug: 'education-training',
    headline: t('industriesData.education.headline'),
    benefits: [
      t('industriesData.education.benefits.0'),
      t('industriesData.education.benefits.1'),
      t('industriesData.education.benefits.2'),
      t('industriesData.education.benefits.3')
    ],
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  },
  {
    icon: Car,
    title: t('industriesData.automotive.title'),
    slug: 'automotive-services',
    headline: t('industriesData.automotive.headline'),
    benefits: [
      t('industriesData.automotive.benefits.0'),
      t('industriesData.automotive.benefits.1'),
      t('industriesData.automotive.benefits.2'),
      t('industriesData.automotive.benefits.3')
    ],
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    icon: Briefcase,
    title: t('industriesData.professional.title'),
    slug: 'professional-services',
    headline: t('industriesData.professional.headline'),
    benefits: [
      t('industriesData.professional.benefits.0'),
      t('industriesData.professional.benefits.1'),
      t('industriesData.professional.benefits.2'),
      t('industriesData.professional.benefits.3')
    ],
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200'
  },
  {
    icon: Building,
    title: t('industriesData.financial.title'),
    slug: 'financial-services',
    headline: t('industriesData.financial.headline'),
    benefits: [
      t('industriesData.financial.benefits.0'),
      t('industriesData.financial.benefits.1'),
      t('industriesData.financial.benefits.2'),
      t('industriesData.financial.benefits.3')
    ],
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200'
  }
];

// Create a fallback t function for backward compatibility
const fallbackT = (key: string) => key;

// Backward compatibility export (will show keys as fallback)
export const industries = getIndustries(fallbackT);
