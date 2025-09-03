import { Globe, Zap, CheckCircle, ArrowRight, Copy, ExternalLink } from 'lucide-react';
import { SiWordpress, SiShopify, SiWix, SiSquarespace, SiWebflow } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import { MEETING_URL, getMeetingUrl } from '../../../constants/urls';
import SEOHelmet from '../../../components/SEOHelmet';
import { getSEOData, getCanonicalUrl } from '../../../utils/seo';
const WebsitesPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'seachat.integrations.websites', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/seachat/integrations/websites')
  });
  
  // Helper function to get the correct SeaChat Wiki URL based on language
  const getSeaChatWikiUrl = () => {
    // For Chinese languages (zh-TW and zh-CN), use 'zh' for the Wiki URL
    // For all other languages, use 'en' for the Wiki URL
    const wikiLanguage = (currentLanguage === 'zh-TW' || currentLanguage === 'zh-CN') ? 'zh' : 'en';
    return `https://wiki.seasalt.ai/${wikiLanguage}/seachat`;
  };
  
  const platforms = [
    {
      name: t('seachat.integrations.websites.platforms.generic.name', 'Generic Website'),
      description: t('seachat.integrations.websites.platforms.generic.description', 'Universal widget that works on any HTML website'),
      icon: Globe,
      color: 'from-blue-500 to-indigo-600',
      features: [
        t('seachat.integrations.websites.platforms.generic.features.compatibility', 'Universal compatibility'), 
        t('seachat.integrations.websites.platforms.generic.features.styling', 'Custom styling'), 
        t('seachat.integrations.websites.platforms.generic.features.responsive', 'Responsive design'), 
        t('seachat.integrations.websites.platforms.generic.features.installation', 'Easy installation')
      ],
      setupTime: t('seachat.integrations.websites.platforms.generic.setupTime', '2 minutes'),
      difficulty: t('seachat.integrations.websites.platforms.generic.difficulty', 'Easy')
    },
    {
      name: t('seachat.integrations.websites.platforms.wordpress.name', 'WordPress'),
      description: t('seachat.integrations.websites.platforms.wordpress.description', 'Native WordPress plugin with advanced customization'),
      icon: SiWordpress,
      color: 'from-blue-600 to-purple-600',
      features: [
        t('seachat.integrations.websites.platforms.wordpress.features.plugin', 'WordPress plugin'), 
        t('seachat.integrations.websites.platforms.wordpress.features.dashboard', 'Admin dashboard'), 
        t('seachat.integrations.websites.platforms.wordpress.features.theme', 'Theme integration'), 
        t('seachat.integrations.websites.platforms.wordpress.features.shortcode', 'Shortcode support')
      ],
      setupTime: t('seachat.integrations.websites.platforms.wordpress.setupTime', '1 minute'),
      difficulty: t('seachat.integrations.websites.platforms.wordpress.difficulty', 'Easy')
    },
    {
      name: t('seachat.integrations.websites.platforms.shopify.name', 'Shopify'),
      description: t('seachat.integrations.websites.platforms.shopify.description', 'E-commerce optimized with order tracking integration'),
      icon: SiShopify,
      color: 'from-green-500 to-teal-600',
      features: [
        t('seachat.integrations.websites.platforms.shopify.features.orders', 'Order integration'), 
        t('seachat.integrations.websites.platforms.shopify.features.customers', 'Customer data sync'), 
        t('seachat.integrations.websites.platforms.shopify.features.products', 'Product recommendations'), 
        t('seachat.integrations.websites.platforms.shopify.features.cart', 'Cart abandonment')
      ],
      setupTime: t('seachat.integrations.websites.platforms.shopify.setupTime', '3 minutes'),
      difficulty: t('seachat.integrations.websites.platforms.shopify.difficulty', 'Easy')
    },
    {
      name: t('seachat.integrations.websites.platforms.wix.name', 'Wix'),
      description: t('seachat.integrations.websites.platforms.wix.description', 'Drag-and-drop integration for Wix websites'),
      icon: SiWix,
      color: 'from-purple-500 to-pink-600',
      features: [
        t('seachat.integrations.websites.platforms.wix.features.app', 'Wix app store'), 
        t('seachat.integrations.websites.platforms.wix.features.editor', 'Visual editor'), 
        t('seachat.integrations.websites.platforms.wix.features.mobile', 'Mobile optimized'), 
        t('seachat.integrations.websites.platforms.wix.features.positioning', 'Custom positioning')
      ],
      setupTime: t('seachat.integrations.websites.platforms.wix.setupTime', '2 minutes'),
      difficulty: t('seachat.integrations.websites.platforms.wix.difficulty', 'Easy')
    },
    {
      name: t('seachat.integrations.websites.platforms.squarespace.name', 'Squarespace'),
      description: t('seachat.integrations.websites.platforms.squarespace.description', 'Seamless integration with Squarespace design system'),
      icon: SiSquarespace,
      color: 'from-orange-500 to-red-600',
      features: [
        t('seachat.integrations.websites.platforms.squarespace.features.design', 'Design system match'), 
        t('seachat.integrations.websites.platforms.squarespace.features.code', 'Code injection'), 
        t('seachat.integrations.websites.platforms.squarespace.features.templates', 'Template compatibility'), 
        t('seachat.integrations.websites.platforms.squarespace.features.style', 'Style customization')
      ],
      setupTime: t('seachat.integrations.websites.platforms.squarespace.setupTime', '3 minutes'),
      difficulty: t('seachat.integrations.websites.platforms.squarespace.difficulty', 'Medium')
    },
    {
      name: t('seachat.integrations.websites.platforms.webflow.name', 'Webflow'),
      description: t('seachat.integrations.websites.platforms.webflow.description', 'Native integration for Webflow CMS and e-commerce'),
      icon: SiWebflow,
      color: 'from-blue-400 to-blue-600',
      features: [
        t('seachat.integrations.websites.platforms.webflow.features.cms', 'CMS integration'), 
        t('seachat.integrations.websites.platforms.webflow.features.ecommerce', 'E-commerce support'), 
        t('seachat.integrations.websites.platforms.webflow.features.design', 'Designer-friendly'), 
        t('seachat.integrations.websites.platforms.webflow.features.custom', 'Custom code injection')
      ],
      setupTime: t('seachat.integrations.websites.platforms.webflow.setupTime', '2 minutes'),
      difficulty: t('seachat.integrations.websites.platforms.webflow.difficulty', 'Easy')
    }
  ];

  const installationSteps = [
    {
      step: 1,
      title: t('seachat.integrations.websites.installation.step1.title', 'Get Your Widget Code'),
      description: t('seachat.integrations.websites.installation.step1.description', 'Copy your unique SeaChat widget code from the dashboard'),
      code: `<script>
  (function(w,d,s,o,f,js,fjs){
    w['SeaChatWidget']=o;w[o]=w[o]||function(){
    (w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
    js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
  })(window,document,'script','seachat','https://widget.seachat.com/widget.js');
  seachat('init', 'YOUR_WIDGET_ID');
</script>`
    },
    {
      step: 2,
      title: t('seachat.integrations.websites.installation.step2.title', 'Add to Your Website'),
      description: t('seachat.integrations.websites.installation.step2.description', 'Paste the code before the closing </body> tag'),
      code: `<!-- Your website content -->
<script>
  // SeaChat widget code goes here
</script>
</body>
</html>`
    },
    {
      step: 3,
      title: t('seachat.integrations.websites.installation.step3.title', 'Customize Appearance'),
      description: t('seachat.integrations.websites.installation.step3.description', 'Optional: Customize colors, position, and behavior'),
      code: `seachat('config', {
  primaryColor: '#0891b2',
  position: 'bottom-right',
  greeting: 'Hi! How can we help you today?',
  showOnMobile: true
});`
    }
  ];

  return (
    <>
      <SEOHelmet {...seoData} />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-16 h-16 text-blue-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('seachat.integrations.websites.title', 'Website Integrations')}
              </h1>
            </div>
            <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
              {t('seachat.integrations.websites.subtitle', 'Deploy SeaChat on any website platform in minutes. Universal compatibility with custom styling and responsive design.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://chat.seasalt.ai/gpt/signup" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center">
                {t('seachat.integrations.websites.codeButton', 'Get Widget Code')}
              </a>
              <a href={getMeetingUrl(currentLanguage)} className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center">
                {t('seachat.integrations.websites.demoButton', 'Schedule Demo')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('seachat.integrations.websites.platformsTitle', 'Supported Platforms')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.integrations.websites.platformsSubtitle', 'Choose your platform for optimized integration and setup instructions.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                  <p className="text-gray-600 mb-6">{platform.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-600">{t('seachat.integrations.websites.setup')}: {platform.setupTime}</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      platform.difficulty === t('seachat.integrations.websites.platforms.generic.difficulty', 'Easy') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {platform.difficulty}
                    </div>
                  </div>
                  
                  <a href="https://chat.seasalt.ai/gpt/signup" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center">
                    {t('seachat.integrations.websites.getPlatformCode', 'Get')} {platform.name} {t('seachat.integrations.websites.code', 'Code')}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('seachat.integrations.websites.installationTitle', 'Universal Installation Guide')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.integrations.websites.installationSubtitle', 'Follow these simple steps to add SeaChat to any website in minutes.')}
            </p>
          </div>

          <div className="space-y-12">
            {installationSteps.map((step, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      <Copy className="w-4 h-4" />
                      <span>{t('seachat.integrations.websites.copyCode', 'Copy Code')}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                      <ExternalLink className="w-4 h-4" />
                      <span>{t('seachat.integrations.websites.viewDocs', 'View Documentation')}</span>
                    </button>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('seachat.integrations.websites.customizationTitle', 'Customization Options')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.integrations.websites.customizationSubtitle', 'Make SeaChat match your brand perfectly with extensive customization options.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t('seachat.integrations.websites.customization.colors.title', 'Colors & Branding'),
                description: t('seachat.integrations.websites.customization.colors.description', 'Match your brand colors, fonts, and styling'),
                features: [
                  t('seachat.integrations.websites.customization.colors.features.schemes', 'Custom color schemes'), 
                  t('seachat.integrations.websites.customization.colors.features.logo', 'Brand logo integration'), 
                  t('seachat.integrations.websites.customization.colors.features.fonts', 'Font customization'), 
                  t('seachat.integrations.websites.customization.colors.features.css', 'CSS overrides')
                ]
              },
              {
                title: t('seachat.integrations.websites.customization.position.title', 'Position & Behavior'),
                description: t('seachat.integrations.websites.customization.position.description', 'Control where and how the widget appears'),
                features: [
                  t('seachat.integrations.websites.customization.position.features.corner', 'Corner positioning'), 
                  t('seachat.integrations.websites.customization.position.features.auto', 'Auto-open settings'), 
                  t('seachat.integrations.websites.customization.position.features.mobile', 'Mobile responsiveness'), 
                  t('seachat.integrations.websites.customization.position.features.trigger', 'Trigger conditions')
                ]
              },
              {
                title: t('seachat.integrations.websites.customization.content.title', 'Content & Messages'),
                description: t('seachat.integrations.websites.customization.content.description', 'Customize all text and messaging'),
                features: [
                  t('seachat.integrations.websites.customization.content.features.welcome', 'Welcome messages'), 
                  t('seachat.integrations.websites.customization.content.features.offline', 'Offline messages'), 
                  t('seachat.integrations.websites.customization.content.features.multilanguage', 'Multi-language support'), 
                  t('seachat.integrations.websites.customization.content.features.greetings', 'Custom greetings')
                ]
              }
            ].map((option, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('seachat.integrations.websites.ctaTitle', 'Ready to Add SeaChat to Your Website?')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('seachat.integrations.websites.ctaSubtitle', 'Get your custom widget code and start providing exceptional customer support in minutes.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://chat.seasalt.ai/gpt/signup" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center">
              {t('seachat.integrations.websites.ctaCodeButton', 'Get Widget Code Now')}
            </a>
            <a href={getSeaChatWikiUrl()} className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center">
              {t('seachat.integrations.websites.ctaDocsButton', 'View Integration Docs')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default WebsitesPage;