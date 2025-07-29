export interface SeaXSolution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  stats: {
    value: string;
    label: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    company: string;
    results: string;
  };
  caseStudy: {
    title: string;
    challenge: string;
    solution: string;
    results: string[];
  };
}

export const getSeaxSolutions = (t: (key: string) => string): SeaXSolution[] => [
  {
    id: 'lead-generation',
    title: t('seax.solutions.leadGeneration.title'),
    subtitle: t('seax.solutions.leadGeneration.subtitle'),
    description: t('seax.solutions.leadGeneration.description'),
    icon: '🎯',
    color: 'blue',
    features: [
      t('seax.solutions.leadGeneration.features.0'),
      t('seax.solutions.leadGeneration.features.1'),
      t('seax.solutions.leadGeneration.features.2'),
      t('seax.solutions.leadGeneration.features.3'),
      t('seax.solutions.leadGeneration.features.4'),
      t('seax.solutions.leadGeneration.features.5'),
      t('seax.solutions.leadGeneration.features.6'),
      t('seax.solutions.leadGeneration.features.7')
    ],
    benefits: [
      t('seax.solutions.leadGeneration.benefits.0'),
      t('seax.solutions.leadGeneration.benefits.1'),
      t('seax.solutions.leadGeneration.benefits.2'),
      t('seax.solutions.leadGeneration.benefits.3'),
      t('seax.solutions.leadGeneration.benefits.4'),
      t('seax.solutions.leadGeneration.benefits.5')
    ],
    useCases: [
      t('seax.solutions.leadGeneration.useCases.0'),
      t('seax.solutions.leadGeneration.useCases.1'),
      t('seax.solutions.leadGeneration.useCases.2'),
      t('seax.solutions.leadGeneration.useCases.3'),
      t('seax.solutions.leadGeneration.useCases.4'),
      t('seax.solutions.leadGeneration.useCases.5')
    ],
    stats: [
      { value: t('seax.solutions.leadGeneration.stats.0.value'), label: t('seax.solutions.leadGeneration.stats.0.label') },
      { value: t('seax.solutions.leadGeneration.stats.1.value'), label: t('seax.solutions.leadGeneration.stats.1.label') },
      { value: t('seax.solutions.leadGeneration.stats.2.value'), label: t('seax.solutions.leadGeneration.stats.2.label') }
    ],
    testimonial: {
      quote: t('seax.solutions.leadGeneration.testimonial.quote'),
      author: t('seax.solutions.leadGeneration.testimonial.author'),
      company: t('seax.solutions.leadGeneration.testimonial.company'),
      results: t('seax.solutions.leadGeneration.testimonial.results')
    },
    caseStudy: {
      title: t('seax.solutions.leadGeneration.caseStudy.title'),
      challenge: t('seax.solutions.leadGeneration.caseStudy.challenge'),
      solution: t('seax.solutions.leadGeneration.caseStudy.solution'),
      results: [
        t('seax.solutions.leadGeneration.caseStudy.results.0'),
        t('seax.solutions.leadGeneration.caseStudy.results.1'),
        t('seax.solutions.leadGeneration.caseStudy.results.2'),
        t('seax.solutions.leadGeneration.caseStudy.results.3')
      ]
    }
  },
  {
    id: 'marketing-automation',
    title: 'Marketing Automation',
    subtitle: 'Scale Your Campaigns',
    description: 'Automate complex marketing workflows across SMS, WhatsApp, and voice to engage customers at scale.',
    icon: '🚀',
    color: 'green',
    features: [
      'Multi-channel campaign automation',
      'Customer journey mapping',
      'Behavioral trigger campaigns',
      'Dynamic content personalization',
      'Campaign performance analytics',
      'Advanced segmentation',
      'Drip campaign sequences',
      'Cross-channel attribution'
    ],
    benefits: [
      'Automate 90% of marketing tasks',
      'Increase campaign ROI by 400%',
      'Reduce manual work by 75%',
      'Reach millions simultaneously',
      'Personalize at scale',
      'Track every touchpoint'
    ],
    useCases: [
      'Product launch sequences',
      'Customer onboarding flows',
      'Re-engagement campaigns',
      'Seasonal promotions',
      'Abandoned cart recovery',
      'Win-back campaigns'
    ],
    stats: [
      { value: '400%', label: 'ROI increase' },
      { value: '90%', label: 'Task automation' },
      { value: '75%', label: 'Time savings' }
    ],
    testimonial: {
      quote: 'Our marketing automation with SeaX increased our campaign ROI by 400% while saving our team 30 hours per week.',
      author: 'Michael Chen',
      company: 'RetailMax',
      results: '400% ROI increase, 30 hours saved weekly'
    },
    caseStudy: {
      title: 'E-commerce Brand Automates Customer Journey',
      challenge: 'An e-commerce brand needed to automate their customer journey from first touch to repeat purchase.',
      solution: 'Built automated workflows spanning SMS, WhatsApp, and voice across 7 touchpoints in the customer journey.',
      results: [
        '400% increase in marketing ROI',
        '75% reduction in manual tasks',
        '60% increase in customer lifetime value',
        '5M+ automated messages sent monthly'
      ]
    }
  },
  {
    id: 'customer-engagement',
    title: 'Customer Engagement',
    subtitle: 'Build Lasting Relationships',
    description: 'Keep customers engaged with personalized, timely communication across their preferred channels.',
    icon: '💬',
    color: 'purple',
    features: [
      'Multi-channel engagement',
      'Personalized messaging',
      'Customer preference tracking',
      'Engagement analytics',
      'Loyalty program integration',
      'Feedback collection',
      'Survey automation',
      'Customer journey optimization'
    ],
    benefits: [
      'Increase customer retention by 40%',
      'Boost engagement rates by 250%',
      'Reduce churn by 30%',
      'Improve customer satisfaction',
      'Build stronger relationships',
      'Increase lifetime value'
    ],
    useCases: [
      'Customer onboarding',
      'Loyalty program communications',
      'Product updates and announcements',
      'Birthday and anniversary messages',
      'Feedback and survey collection',
      'Customer success check-ins'
    ],
    stats: [
      { value: '40%', label: 'Retention increase' },
      { value: '250%', label: 'Engagement boost' },
      { value: '30%', label: 'Churn reduction' }
    ],
    testimonial: {
      quote: 'SeaX helped us increase customer retention by 40% through personalized engagement across all channels.',
      author: 'Lisa Rodriguez',
      company: 'ServicePro',
      results: '40% retention increase, 95% satisfaction score'
    },
    caseStudy: {
      title: 'Telecom Company Reduces Churn by 30%',
      challenge: 'A telecom company was losing 15% of customers monthly and needed to improve engagement.',
      solution: 'Implemented personalized engagement campaigns across SMS, WhatsApp, and voice with behavioral triggers.',
      results: [
        '30% reduction in customer churn',
        '40% increase in customer retention',
        '250% boost in engagement rates',
        '95% customer satisfaction score'
      ]
    }
  },
  {
    id: 'appointment-reminders',
    title: 'Appointment Reminders',
    subtitle: 'Reduce No-Shows',
    description: 'Drastically reduce no-shows with automated appointment reminders via SMS, WhatsApp, and voice calls.',
    icon: '📅',
    color: 'orange',
    features: [
      'Automated reminder sequences',
      'Multi-channel reminders',
      'Custom reminder timing',
      'Confirmation tracking',
      'Rescheduling automation',
      'No-show prediction',
      'Calendar integration',
      'Staff notification system'
    ],
    benefits: [
      'Reduce no-shows by 70%',
      'Increase appointment attendance',
      'Save staff time on calls',
      'Improve revenue per slot',
      'Enhance patient/client experience',
      'Optimize schedule utilization'
    ],
    useCases: [
      'Medical appointment reminders',
      'Dental appointment confirmations',
      'Service appointment reminders',
      'Consultation scheduling',
      'Therapy session reminders',
      'Maintenance appointment alerts'
    ],
    stats: [
      { value: '70%', label: 'No-show reduction' },
      { value: '85%', label: 'Attendance rate' },
      { value: '50%', label: 'Time savings' }
    ],
    testimonial: {
      quote: 'We reduced no-shows by 70% and saved our staff 20 hours per week with SeaX appointment reminders.',
      author: 'Dr. Amanda Smith',
      company: 'HealthCare Plus',
      results: '70% no-show reduction, 20 hours saved weekly'
    },
    caseStudy: {
      title: 'Medical Practice Eliminates No-Shows',
      challenge: 'A medical practice was experiencing 25% no-show rates, causing revenue loss and scheduling issues.',
      solution: 'Deployed automated reminder sequences via SMS, WhatsApp, and voice with confirmation tracking.',
      results: [
        '70% reduction in no-show rates',
        '85% appointment attendance rate',
        '50% reduction in staff calling time',
        '$50K monthly revenue recovery'
      ]
    }
  },
  {
    id: 'emergency-alerts',
    title: 'Emergency Alerts',
    subtitle: 'Critical Communication',
    description: 'Instantly notify thousands or millions of people during emergencies with reliable, fast communication.',
    icon: '🚨',
    color: 'red',
    features: [
      'Instant mass notifications',
      'Multi-channel alerting',
      'Geographic targeting',
      'Priority message delivery',
      'Emergency contact management',
      'Real-time delivery tracking',
      'Escalation workflows',
      'Compliance reporting'
    ],
    benefits: [
      'Reach millions instantly',
      'Ensure critical message delivery',
      'Reduce response times',
      'Improve safety outcomes',
      'Meet compliance requirements',
      'Provide peace of mind'
    ],
    useCases: [
      'Weather emergency alerts',
      'Security breach notifications',
      'System outage communications',
      'School emergency notifications',
      'Healthcare emergency alerts',
      'Public safety announcements'
    ],
    stats: [
      { value: '1M+', label: 'Messages per minute' },
      { value: '99.9%', label: 'Delivery rate' },
      { value: '< 30s', label: 'Average delivery time' }
    ],
    testimonial: {
      quote: 'During Hurricane Maria, SeaX helped us reach 2 million residents in under 5 minutes with critical safety information.',
      author: 'Maria Gonzalez',
      company: 'Emergency Management Agency',
      results: '2M residents reached, 5 minutes delivery time'
    },
    caseStudy: {
      title: 'University Implements Campus-Wide Alert System',
      challenge: 'A large university needed to instantly notify 50,000 students and staff during emergencies.',
      solution: 'Implemented multi-channel emergency alert system with SMS, WhatsApp, and voice call capabilities.',
      results: [
        '50K notifications sent in under 2 minutes',
        '99.9% message delivery rate',
        '100% compliance with safety regulations',
        '95% recipient acknowledgment rate'
      ]
    }
  }
];

export const getSolutionById = (id: string, t: (key: string) => string): SeaXSolution | undefined => {
  const solutions = getSeaxSolutions(t);
  return solutions.find(solution => solution.id === id);
};
