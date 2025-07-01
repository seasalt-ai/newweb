export interface SubProduct {
  title: string;
  href: string;
}

export interface Product {
  title: string;
  href: string;
  description?: string;
  subProducts?: SubProduct[];
}

export const products: Product[] = [
  {
    title: 'SeaChat',
    href: 'http://chat.seasalt.ai/',
    description: 'Respond to customers 24/7'
  },
  {
    title: 'SeaX',
    href: 'http://seax.seasalt.ai/',
    description: 'Outreach to customers in bulk'
  },
  {
    title: 'SeaMeet',
    href: 'http://meet.seasalt.ai/',
    description: 'Copilot for meetings & calls'
  },
  {
    title: 'SeaVoice',
    href: 'http://voice.seasalt.ai/',
    description: 'AI voice agents for calls',
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