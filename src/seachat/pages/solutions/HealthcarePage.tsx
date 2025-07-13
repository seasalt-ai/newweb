import React from 'react';
import { Heart, Shield, Clock, Users, Phone, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HealthcarePage = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Shield,
      title: t('solutions.healthcare.features.hipaa.title', 'HIPAA Compliance'),
      description: t('solutions.healthcare.features.hipaa.description', 'Full HIPAA compliance with encrypted communications and secure data handling'),
      benefits: [
        t('solutions.healthcare.features.hipaa.benefits.encryption', 'End-to-end encryption'), 
        t('solutions.healthcare.features.hipaa.benefits.audit', 'Audit trails'), 
        t('solutions.healthcare.features.hipaa.benefits.access', 'Access controls'), 
        t('solutions.healthcare.features.hipaa.benefits.anonymization', 'Data anonymization')
      ]
    },
    {
      icon: Calendar,
      title: t('solutions.healthcare.features.appointments.title', 'Appointment Management'),
      description: t('solutions.healthcare.features.appointments.description', 'Seamless appointment scheduling, rescheduling, and reminder systems'),
      benefits: [
        t('solutions.healthcare.features.appointments.benefits.availability', 'Real-time availability'), 
        t('solutions.healthcare.features.appointments.benefits.reminders', 'Automated reminders'), 
        t('solutions.healthcare.features.appointments.benefits.cancellation', 'Cancellation handling'), 
        t('solutions.healthcare.features.appointments.benefits.waitlist', 'Waitlist management')
      ]
    },
    {
      icon: Phone,
      title: t('solutions.healthcare.features.telehealth.title', 'Telehealth Support'),
      description: t('solutions.healthcare.features.telehealth.description', 'Integrated telehealth capabilities for remote patient consultations'),
      benefits: [
        t('solutions.healthcare.features.telehealth.benefits.video', 'Video consultations'), 
        t('solutions.healthcare.features.telehealth.benefits.messaging', 'Secure messaging'), 
        t('solutions.healthcare.features.telehealth.benefits.documents', 'Document sharing'), 
        t('solutions.healthcare.features.telehealth.benefits.followup', 'Follow-up care')
      ]
    },
    {
      icon: Users,
      title: t('solutions.healthcare.features.engagement.title', 'Patient Engagement'),
      description: t('solutions.healthcare.features.engagement.description', 'Improve patient satisfaction with 24/7 support and personalized care'),
      benefits: [
        t('solutions.healthcare.features.engagement.benefits.availability', '24/7 availability'), 
        t('solutions.healthcare.features.engagement.benefits.multilanguage', 'Multi-language support'), 
        t('solutions.healthcare.features.engagement.benefits.coordination', 'Care coordination'), 
        t('solutions.healthcare.features.engagement.benefits.education', 'Health education')
      ]
    }
  ];

  const useCases = [
    {
      title: t('solutions.healthcare.useCases.appointments.title', 'Appointment Scheduling'),
      description: t('solutions.healthcare.useCases.appointments.description', 'Patients can book, reschedule, or cancel appointments through chat'),
      example: t('solutions.healthcare.useCases.appointments.example', '"I need to reschedule my appointment for next Tuesday"'),
      outcome: t('solutions.healthcare.useCases.appointments.outcome', 'Automated scheduling with calendar integration and confirmation')
    },
    {
      title: t('solutions.healthcare.useCases.prescriptions.title', 'Prescription Inquiries'),
      description: t('solutions.healthcare.useCases.prescriptions.description', 'Handle prescription refills and medication questions securely'),
      example: t('solutions.healthcare.useCases.prescriptions.example', '"When will my prescription be ready for pickup?"'),
      outcome: t('solutions.healthcare.useCases.prescriptions.outcome', 'Real-time pharmacy integration and status updates')
    },
    {
      title: t('solutions.healthcare.useCases.insurance.title', 'Insurance Verification'),
      description: t('solutions.healthcare.useCases.insurance.description', 'Verify insurance coverage and explain benefits to patients'),
      example: t('solutions.healthcare.useCases.insurance.example', '"Is my procedure covered by my insurance plan?"'),
      outcome: t('solutions.healthcare.useCases.insurance.outcome', 'Instant insurance verification and coverage explanation')
    },
    {
      title: t('solutions.healthcare.useCases.symptoms.title', 'Symptom Pre-screening'),
      description: t('solutions.healthcare.useCases.symptoms.description', 'AI-powered symptom assessment and triage recommendations'),
      example: t('solutions.healthcare.useCases.symptoms.example', '"I have a fever and cough, should I come in?"'),
      outcome: t('solutions.healthcare.useCases.symptoms.outcome', 'Symptom assessment with appropriate care recommendations')
    }
  ];

  const metrics = [
    { 
      value: '40%', 
      label: t('solutions.healthcare.metrics.noshows.label', 'Reduction in No-shows'), 
      description: t('solutions.healthcare.metrics.noshows.description', 'With automated appointment reminders') 
    },
    { 
      value: '60%', 
      label: t('solutions.healthcare.metrics.response.label', 'Faster Response Time'), 
      description: t('solutions.healthcare.metrics.response.description', 'For patient inquiries and concerns') 
    },
    { 
      value: '85%', 
      label: t('solutions.healthcare.metrics.satisfaction.label', 'Patient Satisfaction'), 
      description: t('solutions.healthcare.metrics.satisfaction.description', 'With 24/7 support availability') 
    },
    { 
      value: '50%', 
      label: t('solutions.healthcare.metrics.efficiency.label', 'Administrative Efficiency'), 
      description: t('solutions.healthcare.metrics.efficiency.description', 'Through automated workflows') 
    }
  ];

  const complianceFeatures = t('solutions.healthcare.compliance.complianceFeatures', { returnObjects: true }) || [];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-teal-800 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-16 h-16 text-teal-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('solutions.healthcare.title', 'Healthcare Solutions')}
              </h1>
            </div>
            <p className="text-2xl text-teal-200 mb-8 max-w-4xl mx-auto">
              {t('solutions.healthcare.subtitle', 'Transform patient care with HIPAA-compliant customer support that improves patient satisfaction, streamlines operations, and enhances care coordination.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
              >
                {t('solutions.healthcare.trialButton', 'Start Healthcare For Free')}
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
              >
                {t('solutions.healthcare.demoButton', 'Schedule Healthcare Demo')}
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
              {t('solutions.healthcare.featuresTitle', 'Healthcare-Specific Features')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.healthcare.featuresSubtitle', 'Purpose-built features for healthcare providers to deliver exceptional patient care.')}
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
              {t('solutions.healthcare.metricsTitle', 'Healthcare Impact Metrics')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.healthcare.metricsSubtitle', 'Real results from healthcare providers using SeaChat for patient support.')}
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
              {t('solutions.healthcare.useCasesTitle', 'Common Healthcare Use Cases')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.healthcare.useCasesSubtitle', 'See how SeaChat handles typical patient interactions and administrative tasks.')}
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
                    <h4 className="font-semibold text-blue-900 mb-2">{t('solutions.healthcare.patientRequest', 'Patient Request')}:</h4>
                    <p className="text-blue-800 italic">"{useCase.example}"</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 mb-2">{t('solutions.healthcare.seachatResponse', 'SeaChat Response')}:</h4>
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
                {t('solutions.healthcare.hipaaTitle', 'HIPAA Compliance & Security')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('solutions.healthcare.hipaaSubtitle', 'Built from the ground up with healthcare security and compliance in mind. Protect patient data while delivering exceptional care experiences.')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {Array.isArray(complianceFeatures) && complianceFeatures.map((feature, index) => (
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
                <h3 className="text-2xl font-bold text-gray-900">{t('solutions.healthcare.certificationsTitle', 'Security Certifications')}</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="font-medium text-gray-900">{t('solutions.healthcare.certifications.hipaa', 'HIPAA Compliant')}</span>
                  <span className="text-green-600 font-bold">✓ {t('solutions.healthcare.certified', 'Certified')}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-900">{t('solutions.healthcare.certifications.soc2', 'SOC 2 Type II')}</span>
                  <span className="text-blue-600 font-bold">✓ {t('solutions.healthcare.certified', 'Certified')}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-900">{t('solutions.healthcare.certifications.iso', 'ISO 27001')}</span>
                  <span className="text-purple-600 font-bold">✓ {t('solutions.healthcare.certified', 'Certified')}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <span className="font-medium text-gray-900">{t('solutions.healthcare.certifications.gdpr', 'GDPR Ready')}</span>
                  <span className="text-orange-600 font-bold">✓ {t('solutions.healthcare.compliant', 'Compliant')}</span>
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
            {t('solutions.healthcare.ctaTitle', 'Ready to Transform Patient Care?')}
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            {t('solutions.healthcare.ctaSubtitle', 'Join healthcare providers already using SeaChat to deliver exceptional patient experiences while maintaining the highest security and compliance standards.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              {t('solutions.healthcare.ctaTrialButton', 'Start Healthcare For Free')}
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center"
            >
              {t('solutions.healthcare.ctaDemoButton', 'Schedule Healthcare Demo')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcarePage;