import { DollarSign, Shield, TrendingUp, CreditCard, Lock, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FintechPage = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Shield,
      title: t('solutions.fintech.features.security.title', 'Financial Security'),
      description: t('solutions.fintech.features.security.description', 'Bank-grade security with PCI DSS compliance and fraud protection'),
      benefits: [
        t('solutions.fintech.features.security.benefits.pci', 'PCI DSS compliance'), 
        t('solutions.fintech.features.security.benefits.fraud', 'Fraud detection'), 
        t('solutions.fintech.features.security.benefits.transactions', 'Secure transactions'), 
        t('solutions.fintech.features.security.benefits.identity', 'Identity verification')
      ]
    },
    {
      icon: CreditCard,
      title: t('solutions.fintech.features.payment.title', 'Payment Support'),
      description: t('solutions.fintech.features.payment.description', 'Comprehensive payment processing support and dispute resolution'),
      benefits: [
        t('solutions.fintech.features.payment.benefits.tracking', 'Transaction tracking'), 
        t('solutions.fintech.features.payment.benefits.dispute', 'Dispute handling'), 
        t('solutions.fintech.features.payment.benefits.refund', 'Refund processing'), 
        t('solutions.fintech.features.payment.benefits.methods', 'Payment methods')
      ]
    },
    {
      icon: TrendingUp,
      title: t('solutions.fintech.features.investment.title', 'Investment Guidance'),
      description: t('solutions.fintech.features.investment.description', 'AI-powered investment advice and portfolio management support'),
      benefits: [
        t('solutions.fintech.features.investment.benefits.insights', 'Market insights'), 
        t('solutions.fintech.features.investment.benefits.portfolio', 'Portfolio analysis'), 
        t('solutions.fintech.features.investment.benefits.risk', 'Risk assessment'), 
        t('solutions.fintech.features.investment.benefits.recommendations', 'Investment recommendations')
      ]
    },
    {
      icon: Lock,
      title: t('solutions.fintech.features.compliance.title', 'Regulatory Compliance'),
      description: t('solutions.fintech.features.compliance.description', 'Built-in compliance with financial regulations and reporting requirements'),
      benefits: [
        t('solutions.fintech.features.compliance.benefits.kyc', 'KYC/AML compliance'), 
        t('solutions.fintech.features.compliance.benefits.reporting', 'Regulatory reporting'), 
        t('solutions.fintech.features.compliance.benefits.audit', 'Audit trails'), 
        t('solutions.fintech.features.compliance.benefits.protection', 'Data protection')
      ]
    }
  ];

  const useCases = [
    {
      title: t('solutions.fintech.useCases.account.title', 'Account Management'),
      description: t('solutions.fintech.useCases.account.description', 'Help customers with account setup, verification, and management'),
      example: t('solutions.fintech.useCases.account.example', '"I need help setting up my business account"'),
      outcome: t('solutions.fintech.useCases.account.outcome', 'Guided account setup with document verification and compliance checks')
    },
    {
      title: t('solutions.fintech.useCases.transaction.title', 'Transaction Inquiries'),
      description: t('solutions.fintech.useCases.transaction.description', 'Provide real-time transaction status and history information'),
      example: t('solutions.fintech.useCases.transaction.example', '"Where is my wire transfer to ABC Company?"'),
      outcome: t('solutions.fintech.useCases.transaction.outcome', 'Real-time transaction tracking with detailed status updates')
    },
    {
      title: t('solutions.fintech.useCases.fraud.title', 'Fraud Prevention'),
      description: t('solutions.fintech.useCases.fraud.description', 'Detect and prevent fraudulent activities with AI monitoring'),
      example: t('solutions.fintech.useCases.fraud.example', '"I see a suspicious charge on my account"'),
      outcome: t('solutions.fintech.useCases.fraud.outcome', 'Immediate fraud investigation and account protection measures')
    },
    {
      title: t('solutions.fintech.useCases.investment.title', 'Investment Support'),
      description: t('solutions.fintech.useCases.investment.description', 'Provide investment guidance and portfolio management assistance'),
      example: t('solutions.fintech.useCases.investment.example', '"Should I invest in tech stocks right now?"'),
      outcome: t('solutions.fintech.useCases.investment.outcome', 'Personalized investment advice based on risk profile and market analysis')
    }
  ];

  const metrics = [
    { 
      value: '99.9%', 
      label: t('solutions.fintech.metrics.accuracy.label', 'Transaction Accuracy'), 
      description: t('solutions.fintech.metrics.accuracy.description', 'With automated processing and verification') 
    },
    { 
      value: '75%', 
      label: t('solutions.fintech.metrics.resolution.label', 'Faster Resolution'), 
      description: t('solutions.fintech.metrics.resolution.description', 'For financial inquiries and disputes') 
    },
    { 
      value: '90%', 
      label: t('solutions.fintech.metrics.fraud.label', 'Fraud Detection Rate'), 
      description: t('solutions.fintech.metrics.fraud.description', 'With AI-powered monitoring systems') 
    },
    { 
      value: '95%', 
      label: t('solutions.fintech.metrics.satisfaction.label', 'Customer Satisfaction'), 
      description: t('solutions.fintech.metrics.satisfaction.description', 'For financial support interactions') 
    }
  ];

  const securityFeatures = t('solutions.fintech.securityFeatures', { returnObjects: true });
  const safeSecurityFeatures = Array.isArray(securityFeatures) ? securityFeatures : [];

  const regulations = [
    { 
      name: t('solutions.fintech.regulations.pci.name', 'PCI DSS'), 
      description: t('solutions.fintech.regulations.pci.description', 'Payment Card Industry Data Security Standard'), 
      status: t('solutions.fintech.regulations.pci.status', 'Compliant') 
    },
    { 
      name: t('solutions.fintech.regulations.sox.name', 'SOX'), 
      description: t('solutions.fintech.regulations.sox.description', 'Sarbanes-Oxley Act compliance'), 
      status: t('solutions.fintech.regulations.sox.status', 'Compliant') 
    },
    { 
      name: t('solutions.fintech.regulations.gdpr.name', 'GDPR'), 
      description: t('solutions.fintech.regulations.gdpr.description', 'General Data Protection Regulation'), 
      status: t('solutions.fintech.regulations.gdpr.status', 'Compliant') 
    },
    { 
      name: t('solutions.fintech.regulations.kyc.name', 'KYC/AML'), 
      description: t('solutions.fintech.regulations.kyc.description', 'Know Your Customer / Anti-Money Laundering'), 
      status: t('solutions.fintech.regulations.kyc.status', 'Supported') 
    },
    { 
      name: t('solutions.fintech.regulations.ccpa.name', 'CCPA'), 
      description: t('solutions.fintech.regulations.ccpa.description', 'California Consumer Privacy Act'), 
      status: t('solutions.fintech.regulations.ccpa.status', 'Compliant') 
    },
    { 
      name: t('solutions.fintech.regulations.finra.name', 'FINRA'), 
      description: t('solutions.fintech.regulations.finra.description', 'Financial Industry Regulatory Authority'), 
      status: t('solutions.fintech.regulations.finra.status', 'Supported') 
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-blue-800 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <DollarSign className="w-16 h-16 text-green-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('solutions.fintech.title', 'Fintech Solutions')}
              </h1>
            </div>
            <p className="text-2xl text-green-200 mb-8 max-w-4xl mx-auto">
              {t('solutions.fintech.subtitle', 'Secure, compliant customer support for financial services. Handle transactions, provide investment guidance, and ensure regulatory compliance with confidence.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
              >
                {t('solutions.fintech.trialButton', 'Start Fintech For Free')}
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
              >
                {t('solutions.fintech.demoButton', 'Schedule Financial Demo')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('solutions.fintech.featuresTitle', 'Financial Services Features')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.fintech.featuresSubtitle', 'Purpose-built features for financial institutions to deliver secure, compliant customer support.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{feature.description}</p>
                  
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('solutions.fintech.impactTitle', 'Financial Services Impact')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.fintech.impactSubtitle', 'Real results from financial institutions using SeaChat for customer support.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-green-600 mb-4">{metric.value}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('solutions.fintech.useCasesTitle', 'Financial Support Use Cases')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.fintech.useCasesSubtitle', 'See how SeaChat handles complex financial inquiries and transactions.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-900 mb-2">{t('solutions.fintech.customerInquiry', 'Customer Inquiry')}:</h4>
                    <p className="text-blue-800 italic">"{useCase.example}"</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 mb-2">{t('solutions.fintech.seachatResponse', 'SeaChat Response')}:</h4>
                    <p className="text-green-800">{useCase.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('solutions.fintech.securityTitle', 'Bank-Grade Security & Compliance')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('solutions.fintech.securitySubtitle', 'Built with the highest security standards and regulatory compliance requirements for financial services institutions.')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {safeSecurityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <Lock className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">{t('solutions.fintech.regulatoryTitle', 'Regulatory Compliance')}</h3>
              </div>
              
              <div className="space-y-4">
                {regulations.map((regulation, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{regulation.name}</div>
                      <div className="text-sm text-gray-600">{regulation.description}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      regulation.status === t('solutions.fintech.regulations.pci.status', 'Compliant') 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {regulation.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('solutions.fintech.ctaTitle', 'Ready to Secure Your Financial Services?')}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            {t('solutions.fintech.ctaSubtitle', 'Join financial institutions already using SeaChat to deliver secure, compliant customer support that builds trust and drives growth.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              {t('solutions.fintech.ctaTrialButton', 'Start Fintech For Free')}
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center"
            >
              {t('solutions.fintech.ctaDemoButton', 'Schedule Financial Demo')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FintechPage;