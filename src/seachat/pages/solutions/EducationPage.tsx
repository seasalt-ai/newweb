import { GraduationCap, BookOpen, Users, Calendar, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const EducationPage = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: BookOpen,
      title: t('solutions.education.features.student.title', 'Student Support Services'),
      description: t('solutions.education.features.student.description', 'Comprehensive support for student inquiries, enrollment, and academic assistance'),
      benefits: [
        t('solutions.education.features.student.benefits.support', '24/7 student support'), 
        t('solutions.education.features.student.benefits.enrollment', 'Enrollment assistance'), 
        t('solutions.education.features.student.benefits.academic', 'Academic guidance'), 
        t('solutions.education.features.student.benefits.technical', 'Technical help')
      ]
    },
    {
      icon: Calendar,
      title: t('solutions.education.features.admin.title', 'Administrative Automation'),
      description: t('solutions.education.features.admin.description', 'Streamline administrative tasks with automated scheduling and notifications'),
      benefits: [
        t('solutions.education.features.admin.benefits.scheduling', 'Class scheduling'), 
        t('solutions.education.features.admin.benefits.events', 'Event management'), 
        t('solutions.education.features.admin.benefits.deadlines', 'Deadline reminders'), 
        t('solutions.education.features.admin.benefits.registration', 'Registration support')
      ]
    },
    {
      icon: Users,
      title: t('solutions.education.features.stakeholder.title', 'Multi-Stakeholder Support'),
      description: t('solutions.education.features.stakeholder.description', 'Support students, parents, faculty, and staff with tailored experiences'),
      benefits: [
        t('solutions.education.features.stakeholder.benefits.portals', 'Student portals'), 
        t('solutions.education.features.stakeholder.benefits.parent', 'Parent communication'), 
        t('solutions.education.features.stakeholder.benefits.faculty', 'Faculty assistance'), 
        t('solutions.education.features.stakeholder.benefits.staff', 'Staff coordination')
      ]
    },
    {
      icon: MessageSquare,
      title: t('solutions.education.features.lms.title', 'Learning Management Integration'),
      description: t('solutions.education.features.lms.description', 'Seamless integration with LMS platforms and educational tools'),
      benefits: [
        t('solutions.education.features.lms.benefits.connectivity', 'LMS connectivity'), 
        t('solutions.education.features.lms.benefits.grades', 'Grade inquiries'), 
        t('solutions.education.features.lms.benefits.assignments', 'Assignment help'), 
        t('solutions.education.features.lms.benefits.courses', 'Course information')
      ]
    }
  ];

  const useCases = [
    {
      title: t('solutions.education.useCases.enrollment.title', 'Student Enrollment'),
      description: t('solutions.education.useCases.enrollment.description', 'Guide prospective students through the enrollment process'),
      example: t('solutions.education.useCases.enrollment.example', '"I want to apply for the Computer Science program"'),
      outcome: t('solutions.education.useCases.enrollment.outcome', 'Step-by-step enrollment guidance with document requirements and deadlines')
    },
    {
      title: t('solutions.education.useCases.academic.title', 'Academic Support'),
      description: t('solutions.education.useCases.academic.description', 'Provide academic assistance and course information'),
      example: t('solutions.education.useCases.academic.example', '"When is the deadline for my History assignment?"'),
      outcome: t('solutions.education.useCases.academic.outcome', 'Real-time access to assignment deadlines and submission guidelines')
    },
    {
      title: t('solutions.education.useCases.campus.title', 'Campus Services'),
      description: t('solutions.education.useCases.campus.description', 'Help with campus facilities, dining, housing, and transportation'),
      example: t('solutions.education.useCases.campus.example', '"How do I reserve a study room in the library?"'),
      outcome: t('solutions.education.useCases.campus.outcome', 'Direct booking system integration with availability and confirmation')
    },
    {
      title: t('solutions.education.useCases.financial.title', 'Financial Aid'),
      description: t('solutions.education.useCases.financial.description', 'Assist with financial aid applications and scholarship information'),
      example: t('solutions.education.useCases.financial.example', '"What scholarships am I eligible for?"'),
      outcome: t('solutions.education.useCases.financial.outcome', 'Personalized scholarship recommendations based on student profile')
    }
  ];

  const metrics = [
    { 
      value: '50%', 
      label: t('solutions.education.metrics.admin.label', 'Reduced Admin Workload'), 
      description: t('solutions.education.metrics.admin.description', 'Through automated student inquiries') 
    },
    { 
      value: '85%', 
      label: t('solutions.education.metrics.satisfaction.label', 'Student Satisfaction'), 
      description: t('solutions.education.metrics.satisfaction.description', 'With 24/7 support availability') 
    },
    { 
      value: '40%', 
      label: t('solutions.education.metrics.response.label', 'Faster Response Time'), 
      description: t('solutions.education.metrics.response.description', 'For student and parent inquiries') 
    },
    { 
      value: '60%', 
      label: t('solutions.education.metrics.enrollment.label', 'Increased Enrollment'), 
      description: t('solutions.education.metrics.enrollment.description', 'With streamlined application process') 
    }
  ];

  const integrations = [
    { 
      name: t('solutions.education.integrations.canvas.name', 'Canvas LMS'), 
      description: t('solutions.education.integrations.canvas.description', 'Learning management system integration') 
    },
    { 
      name: t('solutions.education.integrations.blackboard.name', 'Blackboard'), 
      description: t('solutions.education.integrations.blackboard.description', 'Course management and content delivery') 
    },
    { 
      name: t('solutions.education.integrations.moodle.name', 'Moodle'), 
      description: t('solutions.education.integrations.moodle.description', 'Open-source learning platform') 
    },
    { 
      name: t('solutions.education.integrations.google.name', 'Google Classroom'), 
      description: t('solutions.education.integrations.google.description', 'Educational collaboration platform') 
    },
    { 
      name: t('solutions.education.integrations.zoom.name', 'Zoom'), 
      description: t('solutions.education.integrations.zoom.description', 'Video conferencing for virtual classes') 
    },
    { 
      name: t('solutions.education.integrations.teams.name', 'Microsoft Teams'), 
      description: t('solutions.education.integrations.teams.description', 'Educational collaboration and communication') 
    },
    { 
      name: t('solutions.education.integrations.sis.name', 'Student Information Systems'), 
      description: t('solutions.education.integrations.sis.description', 'SIS integration for student records') 
    },
    { 
      name: t('solutions.education.integrations.library.name', 'Library Systems'), 
      description: t('solutions.education.integrations.library.description', 'Resource booking and catalog search') 
    }
  ];

  const stakeholders = [
    {
      title: t('solutions.education.stakeholders.students.title', 'Students'),
      description: t('solutions.education.stakeholders.students.description', 'Academic support, enrollment help, and campus services'),
      features: [
        t('solutions.education.stakeholders.students.features.courses', 'Course information'), 
        t('solutions.education.stakeholders.students.features.assignments', 'Assignment deadlines'), 
        t('solutions.education.stakeholders.students.features.grades', 'Grade inquiries'), 
        t('solutions.education.stakeholders.students.features.campus', 'Campus navigation')
      ]
    },
    {
      title: t('solutions.education.stakeholders.parents.title', 'Parents'),
      description: t('solutions.education.stakeholders.parents.description', 'Stay informed about student progress and institutional updates'),
      features: [
        t('solutions.education.stakeholders.parents.features.progress', 'Progress updates'), 
        t('solutions.education.stakeholders.parents.features.payment', 'Payment information'), 
        t('solutions.education.stakeholders.parents.features.events', 'Event notifications'), 
        t('solutions.education.stakeholders.parents.features.communication', 'Communication with faculty')
      ]
    },
    {
      title: t('solutions.education.stakeholders.faculty.title', 'Faculty'),
      description: t('solutions.education.stakeholders.faculty.description', 'Administrative support and teaching assistance'),
      features: [
        t('solutions.education.stakeholders.faculty.features.management', 'Class management'), 
        t('solutions.education.stakeholders.faculty.features.inquiries', 'Student inquiries'), 
        t('solutions.education.stakeholders.faculty.features.resources', 'Resource requests'), 
        t('solutions.education.stakeholders.faculty.features.technical', 'Technical support')
      ]
    },
    {
      title: t('solutions.education.stakeholders.staff.title', 'Staff'),
      description: t('solutions.education.stakeholders.staff.description', 'Operational efficiency and administrative automation'),
      features: [
        t('solutions.education.stakeholders.staff.features.automation', 'Process automation'), 
        t('solutions.education.stakeholders.staff.features.information', 'Information access'), 
        t('solutions.education.stakeholders.staff.features.workflow', 'Workflow management'), 
        t('solutions.education.stakeholders.staff.features.reporting', 'Reporting tools')
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
                {t('solutions.education.title', 'Education Solutions')}
              </h1>
            </div>
            <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
              {t('solutions.education.subtitle', 'Transform educational support with AI-powered assistance for students, parents, faculty, and staff. Streamline operations and enhance the learning experience.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
              >
                {t('solutions.education.trialButton', 'Start Education For Free')}
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
              >
                {t('solutions.education.demoButton', 'Schedule Education Demo')}
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
              {t('solutions.education.featuresTitle', 'Education-Specific Features')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.education.featuresSubtitle', 'Purpose-built features for educational institutions to enhance student success and operational efficiency.')}
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
              {t('solutions.education.stakeholdersTitle', 'Support for All Stakeholders')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.education.stakeholdersSubtitle', 'Tailored experiences for every member of your educational community.')}
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
              {t('solutions.education.metricsTitle', 'Educational Impact Metrics')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.education.metricsSubtitle', 'Real results from educational institutions using SeaChat for student and administrative support.')}
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
              {t('solutions.education.useCasesTitle', 'Common Educational Use Cases')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.education.useCasesSubtitle', 'See how SeaChat handles typical student and administrative interactions.')}
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
                    <h4 className="font-semibold text-blue-900 mb-2">{t('solutions.education.studentInquiry', 'Student Inquiry')}:</h4>
                    <p className="text-blue-800 italic">"{useCase.example}"</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 mb-2">{t('solutions.education.seachatResponse', 'SeaChat Response')}:</h4>
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
              {t('solutions.education.integrationsTitle', 'Educational Platform Integrations')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.education.integrationsSubtitle', 'Seamlessly connect with popular educational tools and platforms.')}
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
            {t('solutions.education.ctaTitle', 'Ready to Transform Education Support?')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('solutions.education.ctaSubtitle', 'Join educational institutions already using SeaChat to enhance student success and streamline administrative operations.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              {t('solutions.education.ctaTrialButton', 'Start Education For Free')}
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center"
            >
              {t('solutions.education.ctaDemoButton', 'Schedule Education Demo')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;