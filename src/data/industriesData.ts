import { ShoppingCart, Heart, Home, Utensils, GraduationCap, Car, Briefcase, Building } from 'lucide-react';

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

export const getIndustries = (t: (key: string) => string): Industry[] => [
  {
    icon: ShoppingCart,
    title: t('industries.ecommerce.title'),
    slug: 'e-commerce',
    headline: t('industries.ecommerce.headline'),
    benefits: [
      t('industries.ecommerce.benefits.0'),
      t('industries.ecommerce.benefits.1'),
      t('industries.ecommerce.benefits.2'),
      t('industries.ecommerce.benefits.3')
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    icon: Heart,
    title: t('industries.healthcare.title'),
    slug: 'healthcare',
    headline: t('industries.healthcare.headline'),
    benefits: [
      t('industries.healthcare.benefits.0'),
      t('industries.healthcare.benefits.1'),
      t('industries.healthcare.benefits.2'),
      t('industries.healthcare.benefits.3')
    ],
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    icon: Home,
    title: t('industries.realEstate.title'),
    slug: 'real-estate',
    headline: t('industries.realEstate.headline'),
    benefits: [
      t('industries.realEstate.benefits.0'),
      t('industries.realEstate.benefits.1'),
      t('industries.realEstate.benefits.2'),
      t('industries.realEstate.benefits.3')
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    icon: Utensils,
    title: t('industries.restaurantsHospitality.title'),
    slug: 'restaurants-hospitality',
    headline: t('industries.restaurantsHospitality.headline'),
    benefits: [
      t('industries.restaurantsHospitality.benefits.0'),
      t('industries.restaurantsHospitality.benefits.1'),
      t('industries.restaurantsHospitality.benefits.2'),
      t('industries.restaurantsHospitality.benefits.3')
    ],
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    icon: GraduationCap,
    title: t('industries.educationTraining.title'),
    slug: 'education-training',
    headline: t('industries.educationTraining.headline'),
    benefits: [
      t('industries.educationTraining.benefits.0'),
      t('industries.educationTraining.benefits.1'),
      t('industries.educationTraining.benefits.2'),
      t('industries.educationTraining.benefits.3')
    ],
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  },
  {
    icon: Car,
    title: t('industries.automotiveServices.title'),
    slug: 'automotive-services',
    headline: t('industries.automotiveServices.headline'),
    benefits: [
      t('industries.automotiveServices.benefits.0'),
      t('industries.automotiveServices.benefits.1'),
      t('industries.automotiveServices.benefits.2'),
      t('industries.automotiveServices.benefits.3')
    ],
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    icon: Briefcase,
    title: t('industries.professionalServices.title'),
    slug: 'professional-services',
    headline: t('industries.professionalServices.headline'),
    benefits: [
      t('industries.professionalServices.benefits.0'),
      t('industries.professionalServices.benefits.1'),
      t('industries.professionalServices.benefits.2'),
      t('industries.professionalServices.benefits.3')
    ],
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200'
  },
  {
    icon: Building,
    title: t('industries.financialServices.title'),
    slug: 'financial-services',
    headline: t('industries.financialServices.headline'),
    benefits: [
      t('industries.financialServices.benefits.0'),
      t('industries.financialServices.benefits.1'),
      t('industries.financialServices.benefits.2'),
      t('industries.financialServices.benefits.3')
    ],
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200'
  }
];
