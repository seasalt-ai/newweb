import { MessageSquare, Users, Video, Mic } from 'lucide-react';

export interface SubProduct {
  title: string;
  href: string;
}

export interface Product {
  title: string;
  href: string;
  description?: string;
  subProducts?: SubProduct[];
  icon?: any;
}

export const products: Product[] = [
  {
    title: 'SeaChat',
    href: '/seachat',
    description: 'Respond to customers 24/7',
    icon: MessageSquare
  },
  {
    title: 'SeaX',
    href: '/seax',
    description: 'Outreach to customers in bulk',
    icon: Users
  },
  {
    title: 'SeaMeet',
    href: 'http://meet.seasalt.ai/',
    description: 'Copilot for meetings & calls',
    icon: Video
  },
  {
    title: 'SeaVoice',
    href: 'http://voice.seasalt.ai/',
    description: 'AI voice agents for calls',
    icon: Mic,
    subProducts: [
      {
        title: 'Text To Speech',
        href: 'https://suite.seasalt.ai/tts/'
      },
      {
        title: 'Speech To Text',
        href: 'https://suite.seasalt.ai/stt/'
      },
      {
        title: 'Discord STT Bot',
        href: 'https://voice.seasalt.ai/discord/'
      }
    ]
  }
];
