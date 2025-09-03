/**
 * Enhanced SEO Helmet Usage Examples
 * 
 * These examples demonstrate how to use the updated SEOHelmet component
 * with automatic structured data generation for Seasalt.ai product pages.
 */

import React from 'react';
import SEOHelmet from '../src/components/SEOHelmet';
import { SUPPORTED_LANGUAGES } from '../src/constants/languages';

// =============================================================================
// Example 1: SeaChat Page with Automatic Product Detection
// =============================================================================

const SeaChatPage: React.FC = () => {
  return (
    <div>
      <SEOHelmet
        title="SeaChat | Free AI Chatbot Platform - Seasalt.ai"
        description="Build powerful AI chatbots for free. SeaChat offers unlimited conversations, 4 human agents, and enterprise AI models. Start building today."
        tags={['AI chatbot', 'free chatbot platform', 'customer service chatbot', 'SeaChat', 'conversational AI']}
        // productKey is automatically detected from URL path (e.g., /seachat)
        // This will automatically generate SoftwareApplication schema
      />
      
      {/* Page content */}
      <main>
        <h1>SeaChat - Free AI Chatbot Platform</h1>
        {/* Rest of the page content */}
      </main>
    </div>
  );
};

// =============================================================================
// Example 2: SeaX Page with Custom Pricing
// =============================================================================

const SeaXEnterprisePage: React.FC = () => {
  return (
    <div>
      <SEOHelmet
        title="SeaX Enterprise | Omnichannel Platform - Seasalt.ai"
        description="Scale your business communications with SeaX Enterprise. Unlimited channels, advanced automation, and dedicated support."
        tags={['omnichannel platform', 'WhatsApp business', 'SMS marketing', 'voice communication', 'SeaX']}
        // Explicit product configuration with custom pricing
        productKey="seax"
        price="299"
        priceCurrency="USD"
        availability="https://schema.org/InStock"
      />
      
      {/* Page content */}
      <main>
        <h1>SeaX Enterprise - Omnichannel Communication Platform</h1>
        {/* Rest of the page content */}
      </main>
    </div>
  );
};

// =============================================================================
// Example 3: SeaVoice Page with Breadcrumbs and FAQs
// =============================================================================

const SeaVoiceDetailPage: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://seasalt.ai' },
    { name: 'Products', url: 'https://seasalt.ai/products' },
    { name: 'SeaVoice', url: 'https://seasalt.ai/seavoice' }
  ];

  const faqs = [
    {
      question: 'What is SeaVoice?',
      answer: 'SeaVoice is an AI-powered voice communication platform that provides intelligent call routing, voice analytics, and automated responses to transform your voice operations.'
    },
    {
      question: 'How does SeaVoice integrate with existing systems?',
      answer: 'SeaVoice offers API integrations with popular CRM systems and supports SIP, PSTN, and VoIP protocols for seamless integration with your existing infrastructure.'
    },
    {
      question: 'What languages does SeaVoice support?',
      answer: 'SeaVoice supports voice recognition and processing in 20+ languages with advanced natural language understanding capabilities.'
    }
  ];

  return (
    <div>
      <SEOHelmet
        title="SeaVoice | AI-Powered Voice Communication - Seasalt.ai"
        description="Transform your voice communications with AI. SeaVoice offers intelligent call routing, voice analytics, and automated responses for enterprise-scale voice operations."
        tags={['AI voice', 'call center software', 'voice analytics', 'SeaVoice', 'intelligent call routing']}
        productKey="seavoice"
        price="199"
        priceCurrency="USD"
        availability="https://schema.org/InStock"
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        availableLanguages={SUPPORTED_LANGUAGES}
      />
      
      {/* Page content */}
      <main>
        <h1>SeaVoice - AI-Powered Voice Communication</h1>
        
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb">
          <ol>
            {breadcrumbs.map((crumb, index) => (
              <li key={index}>
                <a href={crumb.url}>{crumb.name}</a>
              </li>
            ))}
          </ol>
        </nav>
        
        {/* Main content */}
        <section>
          <h2>Revolutionary AI Voice Technology</h2>
          <p>SeaVoice transforms how businesses handle voice communications...</p>
        </section>
        
        {/* FAQ Section */}
        <section>
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

// =============================================================================
// Example 4: Blog Post with Article Schema
// =============================================================================

const BlogPostPage: React.FC = () => {
  return (
    <div>
      <SEOHelmet
        title="The Future of AI Customer Service: 2024 Trends and Insights"
        description="Explore the latest trends in AI customer service technology and discover how businesses are leveraging conversational AI to enhance customer experiences in 2024."
        tags={['AI customer service', 'conversational AI', '2024 trends', 'customer experience', 'chatbots']}
        type="article"
        author="Seasalt.ai Team"
        publishedTime="2024-01-15T10:00:00Z"
        modifiedTime="2024-01-16T14:30:00Z"
        image="/blog/ai-customer-service-2024-og.jpg"
        canonicalUrl="https://seasalt.ai/blog/ai-customer-service-2024-trends"
        slug="ai-customer-service-2024-trends"
      />
      
      {/* Article content */}
      <article>
        <header>
          <h1>The Future of AI Customer Service: 2024 Trends and Insights</h1>
          <p>Published by <strong>Seasalt.ai Team</strong> on January 15, 2024</p>
        </header>
        
        <main>
          <p>Artificial intelligence is revolutionizing customer service...</p>
          {/* Rest of the blog content */}
        </main>
      </article>
    </div>
  );
};

// =============================================================================
// Example 5: Homepage with Multiple Schema Types
// =============================================================================

const HomePage: React.FC = () => {
  const homepageBreadcrumbs = [
    { name: 'Home', url: 'https://seasalt.ai' }
  ];

  const homepageFaqs = [
    {
      question: 'What is Seasalt.ai?',
      answer: 'Seasalt.ai is a leading AI conversation intelligence platform that offers omnichannel customer communication solutions including SeaChat, SeaX, and SeaVoice.'
    },
    {
      question: 'How can Seasalt.ai help my business?',
      answer: 'Our AI-powered tools help businesses automate customer communications, improve response times, and provide consistent service across all channels including chat, voice, SMS, and social media.'
    }
  ];

  return (
    <div>
      <SEOHelmet
        title="Seasalt.ai | AI Conversation Intelligence Platform"
        description="Transform customer conversations with Seasalt.ai's AI-powered omnichannel platform. Start free with SeaChat, scale with SeaX, or transform voice with SeaVoice."
        tags={['AI conversation intelligence', 'omnichannel platform', 'customer service automation', 'SeaChat', 'SeaX', 'SeaVoice']}
        image="/seasalt-ai-homepage-og.jpg"
        canonicalUrl="https://seasalt.ai"
        breadcrumbs={homepageBreadcrumbs}
        faqs={homepageFaqs}
        availableLanguages={SUPPORTED_LANGUAGES}
        // No productKey - will generate Organization, Website, and WebPage schemas
      />
      
      {/* Homepage content */}
      <main>
        <section>
          <h1>AI Conversation Intelligence Platform</h1>
          <p>Transform your customer communications with AI-powered solutions</p>
        </section>
        
        {/* Product showcases */}
        <section>
          <h2>Our Products</h2>
          <div>
            <h3>SeaChat - Free AI Chatbot</h3>
            <p>Build powerful chatbots for free...</p>
          </div>
          <div>
            <h3>SeaX - Omnichannel Platform</h3>
            <p>Unify all customer communications...</p>
          </div>
          <div>
            <h3>SeaVoice - AI Voice Platform</h3>
            <p>Transform voice communications...</p>
          </div>
        </section>
      </main>
    </div>
  );
};

// =============================================================================
// Example 6: Comparison Page with Custom Structured Data
// =============================================================================

const IntercomAlternativePage: React.FC = () => {
  const comparisonBreadcrumbs = [
    { name: 'Home', url: 'https://seasalt.ai' },
    { name: 'Compare', url: 'https://seasalt.ai/compare' },
    { name: 'Intercom Alternative', url: 'https://seasalt.ai/compare/intercom-alternative' }
  ];

  // Custom structured data for comparison
  const customStructuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'SeaChat vs Intercom: Best Alternative Comparison',
      description: 'Compare SeaChat and Intercom features, pricing, and capabilities. Discover why SeaChat is the better choice for AI-powered customer service.',
      mainEntity: {
        '@type': 'Thing',
        name: 'SeaChat vs Intercom Comparison',
        description: 'A comprehensive comparison between SeaChat and Intercom platforms'
      }
    }
  ];

  return (
    <div>
      <SEOHelmet
        title="SeaChat vs Intercom: Best Alternative for AI Customer Service"
        description="Compare SeaChat and Intercom side-by-side. Discover why SeaChat offers better AI capabilities, transparent pricing, and superior customer support."
        tags={['SeaChat vs Intercom', 'Intercom alternative', 'AI chatbot comparison', 'customer service platform']}
        breadcrumbs={comparisonBreadcrumbs}
        structuredData={customStructuredData}
        canonicalUrl="https://seasalt.ai/compare/intercom-alternative"
      />
      
      {/* Comparison page content */}
      <main>
        <h1>SeaChat vs Intercom: The Better AI Alternative</h1>
        
        {/* Comparison table */}
        <section>
          <h2>Feature Comparison</h2>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>SeaChat</th>
                <th>Intercom</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AI Chatbot</td>
                <td>✅ Advanced AI with GPT-4</td>
                <td>✅ Basic AI</td>
              </tr>
              <tr>
                <td>Free Plan</td>
                <td>✅ Unlimited conversations</td>
                <td>❌ Limited free trial</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export {
  SeaChatPage,
  SeaXEnterprisePage,
  SeaVoiceDetailPage,
  BlogPostPage,
  HomePage,
  IntercomAlternativePage
};
