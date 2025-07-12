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

export const industries: Industry[] = [
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    slug: 'e-commerce',
    headline: 'Recover Abandoned Carts & Answer Order Questions 24/7',
    benefits: [
      'Automated order status updates via WhatsApp & SMS',
      'AI handles "Where\'s my package?" queries instantly',
      'Recover 15%+ of abandoned carts with smart follow-ups',
      'Shopify & Squarespace integrations included'
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    slug: 'healthcare',
    headline: 'Book Patient Appointments & Send Reminders Automatically',
    benefits: [
      'HIPAA-compliant messaging across all channels',
      'Automated appointment confirmations & reminders',
      'AI pre-screens patient inquiries before routing',
      'Reduce no-shows by 25% with smart notifications'
    ],
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    icon: Home,
    title: 'Real Estate',
    slug: 'real-estate',
    headline: 'Never Miss a Lead & Schedule Showings via Text, Chat, or Phone',
    benefits: [
      'Instant responses to property inquiries 24/7',
      'Automated showing appointments via AI',
      'Lead qualification before human handoff',
      'WhatsApp virtual tours and property photos'
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    icon: Utensils,
    title: 'Restaurants & Hospitality',
    slug: 'restaurants-hospitality',
    headline: 'Take Reservations & Handle Orders Across All Channels',
    benefits: [
      'Automated reservation booking via phone & chat',
      'Menu questions answered instantly by AI',
      'Order confirmations sent via SMS & WhatsApp',
      'Handle delivery inquiries without staff interruption'
    ],
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    icon: GraduationCap,
    title: 'Education & Training',
    slug: 'education-training',
    headline: 'Streamline Student Communications & Course Inquiries',
    benefits: [
      'Automated course enrollment and scheduling',
      'AI handles common student questions 24/7',
      'Parent-teacher communication via WhatsApp',
      'Event notifications and reminders via SMS'
    ],
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  },
  {
    icon: Car,
    title: 'Automotive & Services',
    slug: 'automotive-services',
    headline: 'Book Service Appointments & Handle Customer Inquiries',
    benefits: [
      'Automated service appointment booking',
      'Vehicle maintenance reminders via SMS',
      'AI handles parts availability questions',
      'Service completion notifications with photos'
    ],
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    slug: 'professional-services',
    headline: 'Manage Client Communications & Consultation Bookings',
    benefits: [
      'Automated consultation scheduling',
      'Client intake forms via chat',
      'Document sharing through secure channels',
      'Follow-up reminders for appointments'
    ],
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200'
  },
  {
    icon: Building,
    title: 'Financial Services',
    slug: 'financial-services',
    headline: 'Secure Client Communications & Appointment Management',
    benefits: [
      'FINRA-compliant messaging and recording',
      'Automated appointment confirmations',
      'Secure document collection via chat',
      'Client onboarding workflow automation'
    ],
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200'
  }
];