import { Heart, Shield, Users, Phone, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../../../i18n/helpers';

interface HealthcarePageProps {
  lang: SupportedLanguage;
  translations?: any;
}

const HealthcarePage = ({ lang, translations }: HealthcarePageProps) => {
  const { t: hookT, isLoading } = translations ? 
    { t: null, isLoading: false } : 
    useTranslation(lang);

  const getText = (key: string, fallback: string = key): string => {
    if (translations) {
      const keys = key.split('.');
      let result: any = translations;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          console.warn(`Missing translation key: "${key}" in locale "${lang}"`);
          return fallback;
        }
      }
      
      return typeof result === 'string' ? result : fallback;
    }
    
    return hookT ? hookT(key) : fallback;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-gray-500">Loading translations...</div>
      </div>
    );
  }

  const features = [
    {
      icon: Shield,
      title: getText('seachat.solutions.healthcare.features.hipaa.title', 'HIPAA Compliance'),
      description: getText('seachat.solutions.healthcare.features.hipaa.description', 'Full HIPAA compliance with encrypted communications and secure data handling'),
      benefits: [
        getText('seachat.solutions.healthcare.features.hipaa.benefits.encryption', 'End-to-end encryption'),
        getText('seachat.solutions.healthcare.features.hipaa.benefits.audit', 'Audit trails'),
        getText('seachat.solutions.healthcare.features.hipaa.benefits.access', 'Access controls'),
        getText('seachat.solutions.healthcare.features.hipaa.benefits.anonymization', 'Data anonymization')
      ]
    },
    {
      icon: Calendar,
      title: getText('seachat.solutions.healthcare.features.appointments.title', 'Appointment Management'),
      description: getText('seachat.solutions.healthcare.features.appointments.description', 'Seamless appointment scheduling, rescheduling, and reminder systems'),
      benefits: [
        getText('seachat.solutions.healthcare.features.appointments.benefits.availability', 'Real-time availability'),
        getText('seachat.solutions.healthcare.features.appointments.benefits.reminders', 'Automated reminders'),
        getText('seachat.solutions.healthcare.features.appointments.benefits.cancellation', 'Cancellation handling'),
        getText('seachat.solutions.healthcare.features.appointments.benefits.waitlist', 'Waitlist management')
      ]
    },
    {
      icon: Phone,
      title: getText('seachat.solutions.healthcare.features.telehealth.title', 'Telehealth Support'),
      description: getText('seachat.solutions.healthcare.features.telehealth.description', 'Integrated telehealth capabilities for remote patient consultations'),
      benefits: [
        getText('seachat.solutions.healthcare.features.telehealth.benefits.video', 'Video consultations'),
        getText('seachat.solutions.healthcare.features.telehealth.benefits.messaging', 'Secure messaging'),
        getText('seachat.solutions.healthcare.features.telehealth.benefits.documents', 'Document sharing'),
        getText('seachat.solutions.healthcare.features.telehealth.benefits.followup', 'Follow-up care')
      ]
    },
    {
      icon: Users,
      title: getText('seachat.solutions.healthcare.features.engagement.title', 'Patient Engagement'),
      description: getText('seachat.solutions.healthcare.features.engagement.description', 'Improve patient satisfaction with 24/7 support and personalized care'),
      benefits: [
        getText('seachat.solutions.healthcare.features.engagement.benefits.availability', '24/7 availability'),
        getText('seachat.solutions.healthcare.features.engagement.benefits.multilanguage', 'Multi-language support'),
        getText('seachat.solutions.healthcare.features.engagement.benefits.coordination', 'Care coordination'),
        getText('seachat.solutions.healthcare.features.engagement.benefits.education', 'Health education')
      ]
    }
  ];

  const useCases = [
    {
      title: getText('seachat.solutions.healthcare.useCases.appointments.title', 'Appointment Scheduling'),
      description: getText('seachat.solutions.healthcare.useCases.appointments.description', 'Patients can book, reschedule, or cancel appointments through chat'),
      example: getText('seachat.solutions.healthcare.useCases.appointments.example', '"I need to reschedule my appointment for next Tuesday"'),
      outcome: getText('seachat.solutions.healthcare.useCases.appointments.outcome', 'Automated scheduling with calendar integration and confirmation')
    },
    {
      title: getText('seachat.solutions.healthcare.useCases.prescriptions.title', 'Prescription Inquiries'),
      description: getText('seachat.solutions.healthcare.useCases.prescriptions.description', 'Handle prescription refills and medication questions securely'),
      example: getText('seachat.solutions.healthcare.useCases.prescriptions.example', '"When will my prescription be ready for pickup?"'),
      outcome: getText('seachat.solutions.healthcare.useCases.prescriptions.outcome', 'Real-time pharmacy integration and status updates')
    },
    {
      title: getText('seachat.solutions.healthcare.useCases.insurance.title', 'Insurance Verification'),
      description: getText('seachat.solutions.healthcare.useCases.insurance.description', 'Verify insurance coverage and explain benefits to patients'),
      example: getText('seachat.solutions.healthcare.useCases.insurance.example', '"Is my procedure covered by my insurance plan?"'),
      outcome: getText('seachat.solutions.healthcare.useCases.insurance.outcome', 'Instant insurance verification and coverage explanation')
    },
    {
      title: getText('seachat.solutions.healthcare.useCases.symptoms.title', 'Symptom Pre-screening'),
      description: getText('seachat.solutions.healthcare.useCases.symptoms.description', 'AI-powered symptom assessment and triage recommendations'),
      example: getText('seachat.solutions.healthcare.useCases.symptoms.example', '"I have a fever and cough, should I come in?"'),
      outcome: getText('seachat.solutions.healthcare.useCases.symptoms.outcome', 'Symptom assessment with appropriate care recommendations')
    }
  ];

  const metrics = [
    {
      value: getText('seachat.solutions.healthcare.metrics.noshows.value', '40%'),
      label: getText('seachat.solutions.healthcare.metrics.noshows.label', 'Reduction in No-shows'),
      description: getText('seachat.solutions.healthcare.metrics.noshows.description', 'With automated appointment reminders')
    },
    {
      value: getText('seachat.solutions.healthcare.metrics.response.value', '60%'),
      label: getText('seachat.solutions.healthcare.metrics.response.label', 'Faster Response Time'),
      description: getText('seachat.solutions.healthcare.metrics.response.description', 'For patient inquiries and concerns')
    },
    {
      value: getText('seachat.solutions.healthcare.metrics.satisfaction.value', '85%'),
      label: getText('seachat.solutions.healthcare.metrics.satisfaction.label', 'Patient Satisfaction'),
      description: getText('seachat.solutions.healthcare.metrics.satisfaction.description', 'With 24/7 support availability')
    },
    {
      value: getText('seachat.solutions.healthcare.metrics.efficiency.value', '50%'),
      label: getText('seachat.solutions.healthcare.metrics.efficiency.label', 'Administrative Efficiency'),
      description: getText('seachat.solutions.healthcare.metrics.efficiency.description', 'Through automated workflows')
    }
  ];

  // Note: In the original component, this was obtained from translations, but it doesn't exist in current i18n
  // So we'll provide static fallback compliance features
  const complianceFeatures = [
    'HIPAA Compliant',
    'End-to-end encryption',
    'Audit trails',
    'Access controls',
    'Data anonymization',
    'Security monitoring'
  ];

  const getCurrentLangPath = () => {
    switch (lang) {
      case 'zh-tw': return '/zh-tw/contact';
      case 'zh-cn': return '/zh-cn/contact';
      case 'ja': return '/ja/contact';
      case 'ko': return '/ko/contact';
      case 'es': return '/es/contact';
      case 'fr': return '/fr/contact';
      case 'de': return '/de/contact';
      case 'ar': return '/ar/contact';
      case 'fa': return '/fa/contact';
      case 'fil': return '/fil/contact';
      case 'hi': return '/hi/contact';
      case 'id': return '/id/contact';
      case 'ms': return '/ms/contact';
      case 'pl': return '/pl/contact';
      case 'pt': return '/pt/contact';
      case 'ru': return '/ru/contact';
      case 'ta': return '/ta/contact';
      case 'th': return '/th/contact';
      case 'vi': return '/vi/contact';
      default: return '/en/contact';
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-teal-800 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-16 h-16 text-teal-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {getText('seachat.solutions.healthcare.title', 'Healthcare Solutions')}
              </h1>
            </div>
            <p className="text-2xl text-teal-200 mb-8 max-w-4xl mx-auto">
              {getText('seachat.solutions.healthcare.subtitle', 'Transform patient care with HIPAA-compliant customer support that improves patient satisfaction, streamlines operations, and enhances care coordination.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
              >
                {getText('seachat.solutions.healthcare.trialButton', 'Start Healthcare For Free')}
              </a>
              <a
                href={getCurrentLangPath()}
                className="border-2 border-white text-white hover:bg-white hover:text-teal-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
              >
                {getText('seachat.solutions.healthcare.demoButton', 'Schedule Healthcare Demo')}
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
              {getText('seachat.solutions.healthcare.featuresTitle', 'Healthcare-Specific Features')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getText('seachat.solutions.healthcare.featuresSubtitle', 'Purpose-built features for healthcare providers to deliver exceptional patient care.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 border border-teal-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
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
              {getText('seachat.solutions.healthcare.metricsTitle', 'Healthcare Impact Metrics')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getText('seachat.solutions.healthcare.metricsSubtitle', 'Real results from healthcare providers using SeaChat for patient support.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-teal-600 mb-4">{metric.value}</div>
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
              {getText('seachat.solutions.healthcare.useCasesTitle', 'Common Healthcare Use Cases')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getText('seachat.solutions.healthcare.useCasesSubtitle', 'See how SeaChat handles typical patient interactions and administrative tasks.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 border border-teal-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-900 mb-2">{getText('seachat.solutions.healthcare.patientRequest', 'Patient Request')}:</h4>
                    <p className="text-blue-800 italic">"{useCase.example}"</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 mb-2">{getText('seachat.solutions.healthcare.seachatResponse', 'SeaChat Response')}:</h4>
                    <p className="text-green-800">{useCase.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIPAA Compliance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {getText('seachat.solutions.healthcare.hipaaTitle', 'HIPAA Compliance & Security')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {getText('seachat.solutions.healthcare.hipaaSubtitle', 'Built from the ground up with healthcare security and compliance in mind. Protect patient data while delivering exceptional care experiences.')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {complianceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <Shield className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">{getText('seachat.solutions.healthcare.certificationsTitle', 'Security Certifications')}</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="font-medium text-gray-900">{getText('seachat.solutions.healthcare.certifications.hipaa', 'HIPAA Compliant')}</span>
                  <span className="text-green-600 font-bold">✓ {getText('seachat.solutions.healthcare.certified', 'Certified')}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-900">{getText('seachat.solutions.healthcare.certifications.soc2', 'SOC 2 Type II')}</span>
                  <span className="text-blue-600 font-bold">✓ {getText('seachat.solutions.healthcare.certified', 'Certified')}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-900">{getText('seachat.solutions.healthcare.certifications.iso', 'ISO 27001')}</span>
                  <span className="text-purple-600 font-bold">✓ {getText('seachat.solutions.healthcare.certified', 'Certified')}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <span className="font-medium text-gray-900">{getText('seachat.solutions.healthcare.certifications.gdpr', 'GDPR Ready')}</span>
                  <span className="text-orange-600 font-bold">✓ {getText('seachat.solutions.healthcare.compliant', 'Compliant')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {getText('seachat.solutions.healthcare.ctaTitle', 'Ready to Transform Patient Care?')}
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            {getText('seachat.solutions.healthcare.ctaSubtitle', 'Join healthcare providers already using SeaChat to deliver exceptional patient experiences while maintaining the highest security and compliance standards.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              {getText('seachat.solutions.healthcare.ctaTrialButton', 'Start Healthcare For Free')}
            </a>
            <a
              href={getCurrentLangPath()}
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center"
            >
              {getText('seachat.solutions.healthcare.ctaDemoButton', 'Schedule Healthcare Demo')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcarePage;