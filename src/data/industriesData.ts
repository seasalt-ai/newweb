import { ShoppingCart, Heart, Home, Utensils, GraduationCap, Car, Briefcase, Building } from 'lucide-react';
import i18n from '../i18n';

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

export const getIndustries = (): Industry[] => [
  {
    icon: ShoppingCart,
    title: i18n.t('industriesData.ecommerce.title'),
    slug: 'e-commerce',
    headline: i18n.t('industriesData.ecommerce.headline'),
    benefits: [
      i18n.t('industriesData.ecommerce.benefits.0'),
      i18n.t('industriesData.ecommerce.benefits.1'),
      i18n.t('industriesData.ecommerce.benefits.2'),
      i18n.t('industriesData.ecommerce.benefits.3')
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    icon: Heart,
    title: i18n.t('industriesData.healthcare.title'),
    slug: 'healthcare',
    headline: i18n.t('industriesData.healthcare.headline'),
    benefits: [
      i18n.t('industriesData.healthcare.benefits.0'),
      i18n.t('industriesData.healthcare.benefits.1'),
      i18n.t('industriesData.healthcare.benefits.2'),
      i18n.t('industriesData.healthcare.benefits.3')
    ],
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    icon: Home,
    title: i18n.t('industriesData.realEstate.title'),
    slug: 'real-estate',
    headline: i18n.t('industriesData.realEstate.headline'),
    benefits: [
      i18n.t('industriesData.realEstate.benefits.0'),
      i18n.t('industriesData.realEstate.benefits.1'),
      i18n.t('industriesData.realEstate.benefits.2'),
      i18n.t('industriesData.realEstate.benefits.3')
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    icon: Utensils,
    title: i18n.t('industriesData.restaurants.title'),
    slug: 'restaurants-hospitality',
    headline: i18n.t('industriesData.restaurants.headline'),
    benefits: [
      i18n.t('industriesData.restaurants.benefits.0'),
      i18n.t('industriesData.restaurants.benefits.1'),
      i18n.t('industriesData.restaurants.benefits.2'),
      i18n.t('industriesData.restaurants.benefits.3')
    ],
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    icon: GraduationCap,
    title: i18n.t('industriesData.education.title'),
    slug: 'education-training',
    headline: i18n.t('industriesData.education.headline'),
    benefits: [
      i18n.t('industriesData.education.benefits.0'),
      i18n.t('industriesData.education.benefits.1'),
      i18n.t('industriesData.education.benefits.2'),
      i18n.t('industriesData.education.benefits.3')
    ],
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  },
  {
    icon: Car,
    title: i18n.t('industriesData.automotive.title'),
    slug: 'automotive-services',
    headline: i18n.t('industriesData.automotive.headline'),
    benefits: [
      i18n.t('industriesData.automotive.benefits.0'),
      i18n.t('industriesData.automotive.benefits.1'),
      i18n.t('industriesData.automotive.benefits.2'),
      i18n.t('industriesData.automotive.benefits.3')
    ],
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    icon: Briefcase,
    title: i18n.t('industriesData.professional.title'),
    slug: 'professional-services',
    headline: i18n.t('industriesData.professional.headline'),
    benefits: [
      i18n.t('industriesData.professional.benefits.0'),
      i18n.t('industriesData.professional.benefits.1'),
      i18n.t('industriesData.professional.benefits.2'),
      i18n.t('industriesData.professional.benefits.3')
    ],
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200'
  },
  {
    icon: Building,
    title: i18n.t('industriesData.financial.title'),
    slug: 'financial-services',
    headline: i18n.t('industriesData.financial.headline'),
    benefits: [
      i18n.t('industriesData.financial.benefits.0'),
      i18n.t('industriesData.financial.benefits.1'),
      i18n.t('industriesData.financial.benefits.2'),
      i18n.t('industriesData.financial.benefits.3')
    ],
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200'
  }
];

// Backward compatibility export
export const industries = getIndustries();
