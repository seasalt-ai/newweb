import { GraduationCap, BookOpen, Users, Calendar, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { MEETING_URL, getMeetingUrl } from '../../../constants/urls';
const EducationPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const features = [
    {
      icon: BookOpen,
      title: t('seachat.solutions.education.features.student.title'),
      description: t('seachat.solutions.education.features.student.description'),
      benefits: [
        t('seachat.solutions.education.features.student.benefits.support'), 
        t('seachat.solutions.education.features.student.benefits.enrollment'), 
        t('seachat.solutions.education.features.student.benefits.academic'), 
        t('seachat.solutions.education.features.student.benefits.technical')
      ]
    },
    {
      icon: Calendar,
      title: t('seachat.solutions.education.features.admin.title'),
      description: t('seachat.solutions.education.features.admin.description'),
      benefits: [
        t('seachat.solutions.education.features.admin.benefits.scheduling'), 
        t('seachat.solutions.education.features.admin.benefits.events'), 
        t('seachat.solutions.education.features.admin.benefits.deadlines'), 
        t('seachat.solutions.education.features.admin.benefits.registration')
      ]
    },
    {
      icon: Users,
      title: t('seachat.solutions.education.features.stakeholder.title'),
      description: t('seachat.solutions.education.features.stakeholder.description'),
      benefits: [
        t('seachat.solutions.education.features.stakeholder.benefits.portals'), 
        t('seachat.solutions.education.features.stakeholder.benefits.parent'), 
        t('seachat.solutions.education.features.stakeholder.benefits.faculty'), 
        t('seachat.solutions.education.features.stakeholder.benefits.staff')
      ]
    },
    {
      icon: MessageSquare,
      title: t('seachat.solutions.education.features.lms.title'),
      description: t('seachat.solutions.education.features.lms.description'),
      benefits: [
        t('seachat.solutions.education.features.lms.benefits.connectivity'), 
        t('seachat.solutions.education.features.lms.benefits.grades'), 
        t('seachat.solutions.education.features.lms.benefits.assignments'), 
        t('seachat.solutions.education.features.lms.benefits.courses')
      ]
    }
  ];

  const useCases = [
    {
      title: t('seachat.solutions.education.useCases.enrollment.title'),
      description: t('seachat.solutions.education.useCases.enrollment.description'),
      example: t('seachat.solutions.education.useCases.enrollment.example'),
      outcome: t('seachat.solutions.education.useCases.enrollment.outcome')
    },
    {
      title: t('seachat.solutions.education.useCases.academic.title'),
      description: t('seachat.solutions.education.useCases.academic.description'),
      example: t('seachat.solutions.education.useCases.academic.example'),
      outcome: t('seachat.solutions.education.useCases.academic.outcome')
    },
    {
      title: t('seachat.solutions.education.useCases.campus.title'),
      description: t('seachat.solutions.education.useCases.campus.description'),
      example: t('seachat.solutions.education.useCases.campus.example'),
      outcome: t('seachat.solutions.education.useCases.campus.outcome')
    },
    {
      title: t('seachat.solutions.education.useCases.financial.title'),
      description: t('seachat.solutions.education.useCases.financial.description'),
      example: t('seachat.solutions.education.useCases.financial.example'),
      outcome: t('seachat.solutions.education.useCases.financial.outcome')
    }
  ];

  const metrics = [
    { 
      value: '50%', 
      label: t('seachat.solutions.education.metrics.admin.label'), 
      description: t('seachat.solutions.education.metrics.admin.description') 
    },
    { 
      value: '85%', 
      label: t('seachat.solutions.education.metrics.satisfaction.label'), 
      description: t('seachat.solutions.education.metrics.satisfaction.description') 
    },
    { 
      value: '40%', 
      label: t('seachat.solutions.education.metrics.response.label'), 
      description: t('seachat.solutions.education.metrics.response.description') 
    },
    { 
      value: '60%', 
      label: t('seachat.solutions.education.metrics.enrollment.label'), 
      description: t('seachat.solutions.education.metrics.enrollment.description') 
    }
  ];

  const integrations = [
    { 
      name: t('seachat.solutions.education.integrations.canvas.name'), 
      description: t('seachat.solutions.education.integrations.canvas.description') 
    },
    { 
      name: t('seachat.solutions.education.integrations.blackboard.name'), 
      description: t('seachat.solutions.education.integrations.blackboard.description') 
    },
    { 
      name: t('seachat.solutions.education.integrations.moodle.name'), 
      description: t('seachat.solutions.education.integrations.moodle.description') 
    },
    { 
      name: t('seachat.solutions.education.integrations.google.name'), 
      description: t('seachat.solutions.education.integrations.google.description') 
    },
    { 
      name: t('seachat.solutions.education.integrations.zoom.name'), 
      description: t('seachat.solutions.education.integrations.zoom.description') 
    },
    { 
      name: t('seachat.solutions.education.integrations.teams.name'), 
      description: t('seachat.solutions.education.integrations.teams.description') 
    },
    { 
      name: t('seachat.solutions.education.integrations.sis.name'), 
      description: t('seachat.solutions.education.integrations.sis.description') 
    },
    { 
      name: t('seachat.solutions.education.integrations.library.name'), 
      description: t('seachat.solutions.education.integrations.library.description') 
    }
  ];

  const stakeholders = [
    {
      title: t('seachat.solutions.education.stakeholders.students.title'),
      description: t('seachat.solutions.education.stakeholders.students.description'),
      features: [
        t('seachat.solutions.education.stakeholders.students.features.courses'), 
        t('seachat.solutions.education.stakeholders.students.features.assignments'), 
        t('seachat.solutions.education.stakeholders.students.features.grades'), 
        t('seachat.solutions.education.stakeholders.students.features.campus')
      ]
    },
    {
      title: t('seachat.solutions.education.stakeholders.parents.title'),
      description: t('seachat.solutions.education.stakeholders.parents.description'),
      features: [
        t('seachat.solutions.education.stakeholders.parents.features.progress'), 
        t('seachat.solutions.education.stakeholders.parents.features.payment'), 
        t('seachat.solutions.education.stakeholders.parents.features.events'), 
        t('seachat.solutions.education.stakeholders.parents.features.communication')
      ]
    },
    {
      title: t('seachat.solutions.education.stakeholders.faculty.title'),
      description: t('seachat.solutions.education.stakeholders.faculty.description'),
      features: [
        t('seachat.solutions.education.stakeholders.faculty.features.management'), 
        t('seachat.solutions.education.stakeholders.faculty.features.inquiries'), 
        t('seachat.solutions.education.stakeholders.faculty.features.resources'), 
        t('seachat.solutions.education.stakeholders.faculty.features.technical')
      ]
    },
    {
      title: t('seachat.solutions.education.stakeholders.staff.title'),
      description: t('seachat.solutions.education.stakeholders.staff.description'),
      features: [
        t('seachat.solutions.education.stakeholders.staff.features.automation'), 
        t('seachat.solutions.education.stakeholders.staff.features.information'), 
        t('seachat.solutions.education.stakeholders.staff.features.workflow'), 
        t('seachat.solutions.education.stakeholders.staff.features.reporting')
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <GraduationCap className="w-16 h-16 text-blue-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('seachat.solutions.education.title')}
              </h1>
            </div>
            <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
              {t('seachat.solutions.education.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
              >
                {t('seachat.solutions.education.trialButton')}
              </a>
              <a
                href={getMeetingUrl(currentLanguage)}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
              >
                {t('seachat.solutions.education.demoButton')}
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
              {t('seachat.solutions.education.featuresTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.solutions.education.featuresSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
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

      {/* Stakeholder Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('seachat.solutions.education.stakeholdersTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.solutions.education.stakeholdersSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stakeholders.map((stakeholder, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{stakeholder.title}</h3>
                <p className="text-gray-600 mb-6">{stakeholder.description}</p>
                
                <div className="space-y-2">
                  {stakeholder.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('seachat.solutions.education.metricsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.solutions.education.metricsSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">{metric.value}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('seachat.solutions.education.useCasesTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.solutions.education.useCasesSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-900 mb-2">{t('seachat.solutions.education.studentInquiry')}:</h4>
                    <p className="text-blue-800 italic">"{useCase.example}"</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 mb-2">{t('seachat.solutions.education.seachatResponse')}:</h4>
                    <p className="text-green-800">{useCase.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('seachat.solutions.education.integrationsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.solutions.education.integrationsSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-bold text-gray-900 mb-2">{integration.name}</h3>
                <p className="text-gray-600 text-sm">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('seachat.solutions.education.ctaTitle')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('seachat.solutions.education.ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              {t('seachat.solutions.education.ctaTrialButton')}
            </a>
            <a
              href={getMeetingUrl(currentLanguage)}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center"
            >
              {t('seachat.solutions.education.ctaDemoButton')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;