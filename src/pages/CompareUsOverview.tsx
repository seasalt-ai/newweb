import { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';
import { useTranslation } from 'react-i18next';

const CompareUsOverview = () => {
  const { i18n } = useTranslation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${i18n.language}/compare-us-overview` 
    : `/${i18n.language}/compare-us-overview`;

  const competitors = [
    {
      name: 'Aircall',
      category: 'Sales-Focused Phone Systems',
      description: 'User-friendly interface but expensive add-ons and 3-user minimum',
      link: `/${i18n.language}/compare/aircall-alternative`,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      name: 'RingCentral',
      category: 'UCaaS Giants',
      description: 'Fragmented platform with separate UCaaS and CCaaS products',
      link: `/${i18n.language}/compare/ringcentral-alternative`,
      color: 'bg-purple-50 border-purple-200'
    },
    {
      name: 'Genesys Cloud CX',
      category: 'Enterprise Contact Centers',
      description: 'Powerful but expensive with high minimums and complex pricing',
      link: `/${i18n.language}/compare/genesys-alternative`,
      color: 'bg-red-50 border-red-200'
    },
    {
      name: 'Five9',
      category: 'Enterprise Contact Centers',
      description: 'Outbound-heavy platform with enterprise pricing starting at $119/user',
      link: `/${i18n.language}/compare/five9-alternative`,
      color: 'bg-orange-50 border-orange-200'
    },
    {
      name: 'Avaya',
      category: 'Legacy Providers',
      description: 'Legacy architecture with complex enterprise focus and quote-based pricing',
      link: `/${i18n.language}/compare/avaya-alternative`,
      color: 'bg-indigo-50 border-indigo-200'
    },
    {
      name: 'Google Voice',
      category: 'Basic VoIP Services',
      description: 'Great for solopreneurs but lacks team features and integrations',
      link: `/${i18n.language}/compare/google-voice-alternative`,
      color: 'bg-green-50 border-green-200'
    },
    {
      name: 'respond.io',
      category: 'Digital-First Platforms',
      description: 'Strong messaging platform but voice is beta and pricing is complex',
      link: `/${i18n.language}/compare/respond-io-alternative`,
      color: 'bg-teal-50 border-teal-200'
    },
    {
      name: 'Intercom',
      category: 'Website Engagement Tools',
      description: 'Excellent for website chat but expensive per-resolution pricing',
      link: `/${i18n.language}/compare/intercom-alternative`,
      color: 'bg-pink-50 border-pink-200'
    },
    {
      name: 'Kustomer',
      category: 'Enterprise Customer Service',
      description: 'Powerful omnichannel but 8-seat minimum and expensive AI add-ons',
      link: `/${i18n.language}/compare/kustomer-alternative`,
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      name: '3CX',
      category: 'Self-Hosted Solutions',
      description: 'Open platform but requires technical expertise and hidden costs',
      link: `/${i18n.language}/compare/3cx-alternative`,
      color: 'bg-gray-50 border-gray-200'
    },
    {
      name: 'Dialpad',
      category: 'UCaaS with Contact Center Tiers',
      description: 'Good voice AI but expensive upgrade required for contact center features',
      link: `/${i18n.language}/compare/dialpad-alternative`,
      color: 'bg-cyan-50 border-cyan-200'
    },
    {
      name: '8x8',
      category: 'Enterprise Communications',
      description: 'Comprehensive but quote-based pricing and enterprise complexity',
      link: `/${i18n.language}/compare/8x8-alternative`,
      color: 'bg-slate-50 border-slate-200'
    },
    {
      name: 'OpenPhone',
      category: 'Simple Business Phone',
      description: 'Modern phone system but limited to voice/SMS with expensive AI add-ons',
      link: `/${i18n.language}/compare/openphone-alternative`,
      color: 'bg-emerald-50 border-emerald-200'
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* SEO Tags */}
      <SEOHelmet
        title="Compare Seasalt.ai to Alternatives"
        description="See detailed comparisons with every major competitor. We're the only platform that delivers enterprise features with small business simplicity and transparent pricing."
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={canonicalUrl}
        availableLanguages={['en', 'es', 'zh-TW']}
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Link to={`/${i18n.language}/`} className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                How Seasalt.ai Compares to{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Every Alternative
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See detailed comparisons with every major competitor. We're the only platform that delivers 
                enterprise features with small business simplicity and transparent pricing.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">13</div>
                <div className="text-sm text-gray-600">Competitors Analyzed</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$25</div>
                <div className="text-sm text-gray-600">Starting Price/Agent</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">9</div>
                <div className="text-sm text-gray-600">Channels Included</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
                <div className="text-sm text-gray-600">Unified Platform</div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitors Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Comparison
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Click on any competitor to see a detailed feature-by-feature comparison with Seasalt.ai
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitors.map((competitor, index) => (
                <Link
                  key={index}
                  to={competitor.link}
                  className={`p-6 rounded-2xl border-2 ${competitor.color} hover:shadow-lg transition-all duration-300 group`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {competitor.name}
                      </h3>
                      <span className="text-sm font-medium text-gray-600 bg-white px-2 py-1 rounded-full">
                        {competitor.category}
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {competitor.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Compare Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why We Compare Ourselves to Everyone
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in transparency. See exactly how we stack up against every alternative in the market.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-blue-100 p-4 rounded-2xl w-fit mx-auto mb-6">
                  <div className="text-2xl">🔍</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Complete Transparency
                </h3>
                <p className="text-gray-600">
                  We show you exactly how we compare on features, pricing, and capabilities. No marketing fluff.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-green-100 p-4 rounded-2xl w-fit mx-auto mb-6">
                  <div className="text-2xl">💡</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Informed Decisions
                </h3>
                <p className="text-gray-600">
                  Make the right choice for your business with detailed, honest comparisons of every option.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-purple-100 p-4 rounded-2xl w-fit mx-auto mb-6">
                  <div className="text-2xl">🎯</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Find Your Fit
                </h3>
                <p className="text-gray-600">
                  Every business is different. See which solution truly matches your needs and budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to See Why We're Different?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              After comparing all the alternatives, we think you'll agree: Seasalt.ai is the 
              smart choice for growing businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 Sign Up
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Book A Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CompareUsOverview;