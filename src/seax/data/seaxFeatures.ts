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

export const seaxCoreFeatures: SeaXFeature[] = [
  {
    id: 'bulk-messaging',
    title: 'Bulk Messaging Engine',
    description: 'Send millions of SMS, WhatsApp messages, and phone calls simultaneously with carrier-grade reliability.',
    icon: '📱',
    metrics: {
      value: '10M+',
      label: 'Messages sent daily'
    },
    benefits: [
      'Carrier-grade deliverability',
      'Global reach across 200+ countries',
      'Real-time delivery tracking',
      'Intelligent routing optimization'
    ]
  },
  {
    id: 'ai-powered-followup',
    title: 'AI-Powered Follow-Up',
    description: 'Automated responses and smart lead nurturing to qualify prospects 24/7.',
    icon: '🤖',
    metrics: {
      value: '85%',
      label: 'Lead qualification rate'
    },
    benefits: [
      'Smart conversation handling',
      'Automated lead scoring',
      'Intelligent response timing',
      'Multi-language support'
    ]
  },
  {
    id: 'real-time-analytics',
    title: 'Real-Time Analytics',
    description: 'Track opens, replies, and conversions at scale with a comprehensive live dashboard.',
    icon: '📊',
    metrics: {
      value: '99.9%',
      label: 'Uptime guarantee'
    },
    benefits: [
      'Live campaign monitoring',
      'Conversion tracking',
      'Performance insights',
      'Custom reporting'
    ]
  },
  {
    id: 'compliance-deliverability',
    title: 'Compliance & Deliverability',
    description: 'Global reach with carrier compliance and pre-approved message templates.',
    icon: '🛡️',
    metrics: {
      value: '200+',
      label: 'Countries supported'
    },
    benefits: [
      'GDPR compliant',
      'Carrier approval process',
      'Spam protection',
      'Regulatory compliance'
    ]
  },
  {
    id: 'team-collaboration',
    title: 'Team Collaboration',
    description: 'Multi-user access, campaign permissions, and shared resources for enterprise teams.',
    icon: '👥',
    metrics: {
      value: '500K+',
      label: 'Calls per hour'
    },
    benefits: [
      'Role-based permissions',
      'Shared campaign templates',
      'Team performance tracking',
      'Collaborative workflows'
    ]
  },
  {
    id: 'enterprise-scale',
    title: 'Enterprise Scale',
    description: 'Built for the highest volume senders with dedicated infrastructure and support.',
    icon: '🏢',
    metrics: {
      value: '1M+',
      label: 'Messages per minute'
    },
    benefits: [
      'Dedicated infrastructure',
      'Priority support',
      'Custom integrations',
      'Enterprise SLAs'
    ]
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
