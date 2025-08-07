export interface SeaXFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  metrics?: {
    value: string;
    label: string;
  };
  benefits: string[];
}

// Import useTranslation for components that use this data
// Components should use: const { t } = useTranslation();

export const getSeaxCoreFeatures = (t: any): SeaXFeature[] => [
  {
    id: 'bulk-messaging',
    title: t('seax.features.coreFeatures.bulkMessaging.title'),
    description: t('seax.features.coreFeatures.bulkMessaging.description'),
    icon: '📱',
    metrics: {
      value: t('seax.features.coreFeatures.bulkMessaging.metrics.value'),
      label: t('seax.features.coreFeatures.bulkMessaging.metrics.label')
    },
    benefits: t('seax.features.coreFeatures.bulkMessaging.benefits', { returnObjects: true }) as string[]
  },
  {
    id: 'ai-powered-followup',
    title: t('seax.features.coreFeatures.aiPoweredFollowup.title'),
    description: t('seax.features.coreFeatures.aiPoweredFollowup.description'),
    icon: '🤖',
    metrics: {
      value: t('seax.features.coreFeatures.aiPoweredFollowup.metrics.value'),
      label: t('seax.features.coreFeatures.aiPoweredFollowup.metrics.label')
    },
    benefits: t('seax.features.coreFeatures.aiPoweredFollowup.benefits', { returnObjects: true }) as string[]
  },
  {
    id: 'real-time-analytics',
    title: t('seax.features.coreFeatures.realTimeAnalytics.title'),
    description: t('seax.features.coreFeatures.realTimeAnalytics.description'),
    icon: '📊',
    metrics: {
      value: t('seax.features.coreFeatures.realTimeAnalytics.metrics.value'),
      label: t('seax.features.coreFeatures.realTimeAnalytics.metrics.label')
    },
    benefits: t('seax.features.coreFeatures.realTimeAnalytics.benefits', { returnObjects: true }) as string[]
  },
  {
    id: 'compliance-deliverability',
    title: t('seax.features.coreFeatures.complianceDeliverability.title'),
    description: t('seax.features.coreFeatures.complianceDeliverability.description'),
    icon: '🛡️',
    metrics: {
      value: t('seax.features.coreFeatures.complianceDeliverability.metrics.value'),
      label: t('seax.features.coreFeatures.complianceDeliverability.metrics.label')
    },
    benefits: t('seax.features.coreFeatures.complianceDeliverability.benefits', { returnObjects: true }) as string[]
  },
  {
    id: 'team-collaboration',
    title: t('seax.features.coreFeatures.teamCollaboration.title'),
    description: t('seax.features.coreFeatures.teamCollaboration.description'),
    icon: '👥',
    metrics: {
      value: t('seax.features.coreFeatures.teamCollaboration.metrics.value'),
      label: t('seax.features.coreFeatures.teamCollaboration.metrics.label')
    },
    benefits: t('seax.features.coreFeatures.teamCollaboration.benefits', { returnObjects: true }) as string[]
  },
  {
    id: 'enterprise-scale',
    title: t('seax.features.coreFeatures.enterpriseScale.title'),
    description: t('seax.features.coreFeatures.enterpriseScale.description'),
    icon: '🏢',
    metrics: {
      value: t('seax.features.coreFeatures.enterpriseScale.metrics.value'),
      label: t('seax.features.coreFeatures.enterpriseScale.metrics.label')
    },
    benefits: t('seax.features.coreFeatures.enterpriseScale.benefits', { returnObjects: true }) as string[]
  }
];

export const seaxChannelFeatures = {
  sms: {
    title: 'SMS at Scale',
    description: 'High-throughput SMS delivery with guaranteed campaign completion across multiple number types.',
    types: {
      local: {
        title: 'Local Number (10DLC A2P)',
        description: 'Application-to-Person messaging using local 10-digit phone numbers for high-volume business messaging.',
        features: [
          '10DLC A2P compliance',
          'Local presence with area codes',
          'Brand registration required',
          'Campaign pre-approval',
          'High throughput rates',
          'Carrier-grade delivery'
        ],
        useCases: [
          'Marketing campaigns',
          'Customer notifications',
          'Appointment reminders',
          'Order confirmations',
          'Account alerts',
          'Lead nurturing'
        ],
        pricing: {
          setup: '$50 brand registration',
          monthly: '$10/month per number',
          perMessage: '$0.0075 per message'
        }
      },
      tollFree: {
        title: 'Toll-Free Number',
        description: 'Premium toll-free numbers for trusted business messaging with higher delivery rates.',
        features: [
          'Toll-free numbers (800, 888, etc.)',
          'No carrier fees for recipients',
          'Higher trust and open rates',
          'Faster deployment',
          'No brand registration required',
          'Two-way messaging support'
        ],
        useCases: [
          'Customer support',
          'Premium notifications',
          'Two-way conversations',
          'Survey campaigns',
          'Contest entries',
          'VIP communications'
        ],
        pricing: {
          setup: 'Free setup',
          monthly: '$50/month per number',
          perMessage: '$0.015 per message'
        }
      },
      shortCode: {
        title: 'Short-Code',
        description: 'Premium 5-6 digit numbers for the highest volume campaigns with maximum deliverability.',
        features: [
          'Dedicated 5-6 digit numbers',
          'Highest throughput (1000+ msgs/sec)',
          'Premium carrier relationships',
          'Maximum deliverability',
          'Keyword-based campaigns',
          'MMS support'
        ],
        useCases: [
          'Mass marketing campaigns',
          'TV/Radio call-to-actions',
          'Voting and polling',
          'Contest campaigns',
          'Event notifications',
          'Emergency alerts'
        ],
        pricing: {
          setup: '$1,000 setup fee',
          monthly: '$1,000/month per code',
          perMessage: '$0.005 per message'
        }
      }
    }
  },
  SMSShortCode: {
    features: [
      {
        title: 'Premium Short Codes',
        description: 'Dedicated 5-6 digit numbers for maximum brand recognition and deliverability.',
        icon: '🔢'
      },
      {
        title: 'Ultra-High Throughput',
        description: 'Send 1000+ messages per second with guaranteed delivery speeds.',
        icon: '⚡'
      },
      {
        title: 'Premium Carrier Routes',
        description: 'Direct carrier relationships ensure maximum deliverability and priority routing.',
        icon: '🛡️'
      },
      {
        title: 'Keyword Campaigns',
        description: 'Advanced keyword-based campaigns with automated response handling.',
        icon: '🔑'
      },
      {
        title: 'MMS Support',
        description: 'Rich media messaging with images, videos, and multimedia content.',
        icon: '📸'
      },
      {
        title: 'Real-Time Analytics',
        description: 'Live campaign monitoring with detailed performance insights.',
        icon: '📊'
      }
    ],
    useCases: [
      {
        title: 'Mass Marketing Campaigns',
        description: 'Launch large-scale marketing campaigns with millions of messages.',
        icon: '📢'
      },
      {
        title: 'TV/Radio Integration',
        description: 'Perfect for "Text 12345 to 555" call-to-action campaigns.',
        icon: '📺'
      },
      {
        title: 'Voting & Polling',
        description: 'Engage audiences with interactive voting and survey campaigns.',
        icon: '🗳️'
      },
      {
        title: 'Contest Campaigns',
        description: 'Run viral contest campaigns with instant participation.',
        icon: '🎉'
      },
      {
        title: 'Event Notifications',
        description: 'Reach massive audiences for event updates and announcements.',
        icon: '📅'
      },
      {
        title: 'Emergency Alerts',
        description: 'Critical mass communication for urgent notifications.',
        icon: '🚨'
      }
    ],
    stats: [
      {
        value: '1000+',
        label: 'Messages per second',
        description: 'Industry-leading throughput rates'
      },
      {
        value: '99.9%',
        label: 'Delivery rate',
        description: 'Premium carrier relationships'
      },
      {
        value: '5-6',
        label: 'Digit codes',
        description: 'Memorable brand presence'
      },
      {
        value: '24/7',
        label: 'Campaign support',
        description: 'Always-on monitoring'
      }
    ],
    ctas: [
      {
        text: 'Get Started',
        href: 'https://seax.seasalt.ai/signup',
        primary: true
      },
      {
        text: 'Book Demo',
        href: '/seax/demo',
        primary: false
      }
    ],
    testimonials: [
      {
        quote: 'SMS Short Codes gave us the throughput we needed for our Super Bowl campaign. We sent 10 million messages in under 2 hours.',
        author: 'Sarah Johnson',
        role: 'Marketing Director',
        company: 'Fortune 500 Retail'
      }
    ],
    compliance: {
      title: 'SMS Short Code Compliance',
      description: 'Short codes require strict compliance with carrier guidelines and regulations.',
      requirements: [
        'Carrier approval process (8-12 weeks)',
        'Content pre-approval required',
        'Opt-in/opt-out management',
        'Monthly compliance reporting',
        'Keyword reservation',
        'Content monitoring'
      ]
    }
  },
  whatsapp: {
    title: 'WhatsApp Business Platform - Campaign Mode',
    description: 'Scale your WhatsApp marketing with Business Platform Campaign Mode for mass outreach and engagement.',
    features: [
      'WhatsApp Business Platform API',
      'Campaign mode for mass messaging',
      'Template message campaigns',
      'Rich media support (images, videos, documents)',
      'Interactive message templates',
      'Automated campaign sequences',
      'Broadcast lists management',
      'Real-time delivery tracking',
      'A/B testing capabilities',
      'Green tick verification support'
    ],
    useCases: [
      'Product launch campaigns',
      'Flash sales and promotions',
      'Event invitations',
      'Newsletter broadcasts',
      'Customer re-engagement',
      'Seasonal marketing campaigns',
      'Lead nurturing sequences',
      'Customer feedback collection'
    ],
    compliance: {
      title: 'WhatsApp Business Platform Compliance',
      requirements: [
        'Meta Business verification required',
        'Template pre-approval mandatory',
        '24-hour messaging window rules',
        'Opt-in consent management',
        'Quality rating maintenance',
        'Messaging limit adherence'
      ]
    },
    pricing: {
      setup: 'Free setup with Business verification',
      monthly: '$0 monthly fees',
      perMessage: 'Starts at $0.015 per message (varies by country)',
      note: 'Pricing based on conversation windows'
    }
  },
  voice: {
    title: 'Voice Calls at Scale',
    description: 'High-volume automated and AI-powered phone calls available in 100+ countries, delivered by Twilio.',
    features: [
      'Global reach: 100+ countries',
      'Powered by Twilio infrastructure',
      'Text-to-speech in multiple languages',
      'Pre-recorded voice messages',
      'Interactive voice response (IVR)',
      'Call recording and transcription',
      'AI voice agents with natural speech',
      'Real-time call analytics',
      'Voicemail detection and handling',
      'Call progress analysis'
    ],
    useCases: [
      'Appointment reminders',
      'Payment notifications',
      'Survey campaigns',
      'Emergency alerts',
      'Lead qualification calls',
      'Customer feedback collection',
      'Event notifications',
      'Debt collection reminders',
      'Political campaign calls',
      'Market research surveys'
    ],
    globalReach: {
      title: 'Global Voice Coverage',
      countries: '100+',
      regions: [
        'North America (US, Canada)',
        'Europe (UK, Germany, France, etc.)',
        'Asia Pacific (Australia, Japan, Singapore)',
        'Latin America (Mexico, Brazil, Argentina)',
        'Middle East & Africa (UAE, South Africa)'
      ],
      features: [
        'Local phone numbers in key markets',
        'Carrier-grade voice quality',
        'Regulatory compliance per country',
        'Local time zone optimization',
        'Multi-language support'
      ]
    },
    pricing: {
      setup: 'Free setup',
      monthly: '$0 monthly fees',
      perMinute: 'Starts at $0.015 per minute (varies by country)',
      note: 'Pricing varies by destination country'
    }
  }
};

export const seaxStats = {
  messagesSent: '10,000,000+',
  callsPerHour: '500,000+',
  uptime: '99.9%',
  countries: '200+',
  customers: '10,000+',
  averageROI: '400%'
};
