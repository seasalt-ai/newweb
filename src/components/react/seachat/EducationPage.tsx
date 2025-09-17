import {
  GraduationCap,
  BookOpen,
  Users,
  Calendar,
  MessageSquare,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useTranslation, type SupportedLanguage } from "../../../i18n/helpers";
import { getMeetingUrl } from "../../../constants/urls";

interface EducationPageProps {
  lang: SupportedLanguage;
  translations?: any;
}

const EducationPage = ({ lang, translations }: EducationPageProps) => {
  const { t: hookT, isLoading } = translations
    ? { t: null, isLoading: false }
    : useTranslation(lang);

  const getText = (key: string, fallback: string = key): string => {
    if (translations) {
      const keys = key.split(".");
      let result: any = translations;

      for (const k of keys) {
        if (result && typeof result === "object" && k in result) {
          result = result[k];
        } else {
          console.warn(`Missing translation key: "${key}" in locale "${lang}"`);
          return fallback;
        }
      }

      return typeof result === "string" ? result : fallback;
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
      icon: BookOpen,
      title: getText(
        "seachat.solutions.education.features.student.title",
        "24/7 Student Support"
      ),
      description: getText(
        "seachat.solutions.education.features.student.description",
        "Provide instant answers to student queries about courses, schedules, campus services, and academic policies"
      ),
      benefits: [
        getText(
          "seachat.solutions.education.features.student.benefits.support",
          "Round-the-clock student support"
        ),
        getText(
          "seachat.solutions.education.features.student.benefits.enrollment",
          "Enrollment assistance"
        ),
        getText(
          "seachat.solutions.education.features.student.benefits.academic",
          "Academic advising"
        ),
        getText(
          "seachat.solutions.education.features.student.benefits.technical",
          "Technical support"
        ),
      ],
    },
    {
      icon: Calendar,
      title: getText(
        "seachat.solutions.education.features.admin.title",
        "Administrative Automation"
      ),
      description: getText(
        "seachat.solutions.education.features.admin.description",
        "Automate routine administrative tasks and free up staff for higher-value activities"
      ),
      benefits: [
        getText(
          "seachat.solutions.education.features.admin.benefits.scheduling",
          "Class scheduling"
        ),
        getText(
          "seachat.solutions.education.features.admin.benefits.events",
          "Event management"
        ),
        getText(
          "seachat.solutions.education.features.admin.benefits.deadlines",
          "Deadline reminders"
        ),
        getText(
          "seachat.solutions.education.features.admin.benefits.registration",
          "Registration processing"
        ),
      ],
    },
    {
      icon: Users,
      title: getText(
        "seachat.solutions.education.features.stakeholder.title",
        "Multi-Stakeholder Engagement"
      ),
      description: getText(
        "seachat.solutions.education.features.stakeholder.description",
        "Connect students, parents, faculty, and staff through unified communication"
      ),
      benefits: [
        getText(
          "seachat.solutions.education.features.stakeholder.benefits.portals",
          "Personalized portals"
        ),
        getText(
          "seachat.solutions.education.features.stakeholder.benefits.parent",
          "Parent engagement"
        ),
        getText(
          "seachat.solutions.education.features.stakeholder.benefits.faculty",
          "Faculty collaboration"
        ),
        getText(
          "seachat.solutions.education.features.stakeholder.benefits.staff",
          "Staff coordination"
        ),
      ],
    },
    {
      icon: MessageSquare,
      title: getText(
        "seachat.solutions.education.features.lms.title",
        "LMS Integration"
      ),
      description: getText(
        "seachat.solutions.education.features.lms.description",
        "Seamless integration with popular Learning Management Systems"
      ),
      benefits: [
        getText(
          "seachat.solutions.education.features.lms.benefits.connectivity",
          "Canvas & Blackboard connectivity"
        ),
        getText(
          "seachat.solutions.education.features.lms.benefits.grades",
          "Grade access"
        ),
        getText(
          "seachat.solutions.education.features.lms.benefits.assignments",
          "Assignment tracking"
        ),
        getText(
          "seachat.solutions.education.features.lms.benefits.courses",
          "Course information"
        ),
      ],
    },
  ];

  const useCases = [
    {
      title: getText(
        "seachat.solutions.education.useCases.enrollment.title",
        "Enrollment & Admissions"
      ),
      description: getText(
        "seachat.solutions.education.useCases.enrollment.description",
        "Guide prospective students through the enrollment process with personalized assistance"
      ),
      example: getText(
        "seachat.solutions.education.useCases.enrollment.example",
        "What are the admission requirements for the Computer Science program?"
      ),
      outcome: getText(
        "seachat.solutions.education.useCases.enrollment.outcome",
        "Instant program information, requirements, deadlines, and application assistance"
      ),
    },
    {
      title: getText(
        "seachat.solutions.education.useCases.academic.title",
        "Academic Support"
      ),
      description: getText(
        "seachat.solutions.education.useCases.academic.description",
        "Provide instant academic advising and course planning support"
      ),
      example: getText(
        "seachat.solutions.education.useCases.academic.example",
        "Which courses should I take next semester to graduate on time?"
      ),
      outcome: getText(
        "seachat.solutions.education.useCases.academic.outcome",
        "Personalized course recommendations based on degree requirements and prerequisites"
      ),
    },
    {
      title: getText(
        "seachat.solutions.education.useCases.campus.title",
        "Campus Services"
      ),
      description: getText(
        "seachat.solutions.education.useCases.campus.description",
        "Help students navigate campus resources and services efficiently"
      ),
      example: getText(
        "seachat.solutions.education.useCases.campus.example",
        "Where can I get help with my research paper?"
      ),
      outcome: getText(
        "seachat.solutions.education.useCases.campus.outcome",
        "Direct students to writing center, library resources, and tutoring services"
      ),
    },
    {
      title: getText(
        "seachat.solutions.education.useCases.financial.title",
        "Financial Aid"
      ),
      description: getText(
        "seachat.solutions.education.useCases.financial.description",
        "Answer questions about tuition, scholarships, and financial aid options"
      ),
      example: getText(
        "seachat.solutions.education.useCases.financial.example",
        "What scholarships am I eligible for?"
      ),
      outcome: getText(
        "seachat.solutions.education.useCases.financial.outcome",
        "Personalized scholarship recommendations and application guidance"
      ),
    },
  ];

  const metrics = [
    {
      value: "50%",
      label: getText(
        "seachat.solutions.education.metrics.admin.label",
        "Administrative Reduction"
      ),
      description: getText(
        "seachat.solutions.education.metrics.admin.description",
        "Less time on routine inquiries"
      ),
    },
    {
      value: "85%",
      label: getText(
        "seachat.solutions.education.metrics.satisfaction.label",
        "Student Satisfaction"
      ),
      description: getText(
        "seachat.solutions.education.metrics.satisfaction.description",
        "With 24/7 support availability"
      ),
    },
    {
      value: "40%",
      label: getText(
        "seachat.solutions.education.metrics.response.label",
        "Faster Response"
      ),
      description: getText(
        "seachat.solutions.education.metrics.response.description",
        "To student inquiries"
      ),
    },
    {
      value: "60%",
      label: getText(
        "seachat.solutions.education.metrics.enrollment.label",
        "Enrollment Efficiency"
      ),
      description: getText(
        "seachat.solutions.education.metrics.enrollment.description",
        "Streamlined enrollment process"
      ),
    },
  ];

  const integrations = [
    {
      name: getText(
        "seachat.solutions.education.integrations.canvas.name",
        "Canvas"
      ),
      description: getText(
        "seachat.solutions.education.integrations.canvas.description",
        "Full LMS integration"
      ),
    },
    {
      name: getText(
        "seachat.solutions.education.integrations.blackboard.name",
        "Blackboard"
      ),
      description: getText(
        "seachat.solutions.education.integrations.blackboard.description",
        "Course management"
      ),
    },
    {
      name: getText(
        "seachat.solutions.education.integrations.moodle.name",
        "Moodle"
      ),
      description: getText(
        "seachat.solutions.education.integrations.moodle.description",
        "Open-source LMS"
      ),
    },
    {
      name: getText(
        "seachat.solutions.education.integrations.google.name",
        "Google Workspace"
      ),
      description: getText(
        "seachat.solutions.education.integrations.google.description",
        "Education suite"
      ),
    },
    {
      name: getText(
        "seachat.solutions.education.integrations.zoom.name",
        "Zoom"
      ),
      description: getText(
        "seachat.solutions.education.integrations.zoom.description",
        "Virtual classrooms"
      ),
    },
    {
      name: getText(
        "seachat.solutions.education.integrations.teams.name",
        "Microsoft Teams"
      ),
      description: getText(
        "seachat.solutions.education.integrations.teams.description",
        "Collaboration platform"
      ),
    },
    {
      name: getText(
        "seachat.solutions.education.integrations.sis.name",
        "Student Information Systems"
      ),
      description: getText(
        "seachat.solutions.education.integrations.sis.description",
        "SIS integration"
      ),
    },
    {
      name: getText(
        "seachat.solutions.education.integrations.library.name",
        "Library Systems"
      ),
      description: getText(
        "seachat.solutions.education.integrations.library.description",
        "Resource access"
      ),
    },
  ];

  const stakeholders = [
    {
      title: getText(
        "seachat.solutions.education.stakeholders.students.title",
        "Students"
      ),
      description: getText(
        "seachat.solutions.education.stakeholders.students.description",
        "Get instant help with academic and campus life"
      ),
      features: [
        getText(
          "seachat.solutions.education.stakeholders.students.features.courses",
          "Course information"
        ),
        getText(
          "seachat.solutions.education.stakeholders.students.features.assignments",
          "Assignment deadlines"
        ),
        getText(
          "seachat.solutions.education.stakeholders.students.features.grades",
          "Grade inquiries"
        ),
        getText(
          "seachat.solutions.education.stakeholders.students.features.campus",
          "Campus resources"
        ),
      ],
    },
    {
      title: getText(
        "seachat.solutions.education.stakeholders.parents.title",
        "Parents"
      ),
      description: getText(
        "seachat.solutions.education.stakeholders.parents.description",
        "Stay connected with student progress"
      ),
      features: [
        getText(
          "seachat.solutions.education.stakeholders.parents.features.progress",
          "Progress tracking"
        ),
        getText(
          "seachat.solutions.education.stakeholders.parents.features.payment",
          "Payment information"
        ),
        getText(
          "seachat.solutions.education.stakeholders.parents.features.events",
          "School events"
        ),
        getText(
          "seachat.solutions.education.stakeholders.parents.features.communication",
          "Faculty communication"
        ),
      ],
    },
    {
      title: getText(
        "seachat.solutions.education.stakeholders.faculty.title",
        "Faculty"
      ),
      description: getText(
        "seachat.solutions.education.stakeholders.faculty.description",
        "Focus on teaching, not administration"
      ),
      features: [
        getText(
          "seachat.solutions.education.stakeholders.faculty.features.management",
          "Class management"
        ),
        getText(
          "seachat.solutions.education.stakeholders.faculty.features.inquiries",
          "Student inquiries"
        ),
        getText(
          "seachat.solutions.education.stakeholders.faculty.features.resources",
          "Resource sharing"
        ),
        getText(
          "seachat.solutions.education.stakeholders.faculty.features.technical",
          "Technical support"
        ),
      ],
    },
    {
      title: getText(
        "seachat.solutions.education.stakeholders.staff.title",
        "Staff"
      ),
      description: getText(
        "seachat.solutions.education.stakeholders.staff.description",
        "Streamline administrative workflows"
      ),
      features: [
        getText(
          "seachat.solutions.education.stakeholders.staff.features.automation",
          "Task automation"
        ),
        getText(
          "seachat.solutions.education.stakeholders.staff.features.information",
          "Information routing"
        ),
        getText(
          "seachat.solutions.education.stakeholders.staff.features.workflow",
          "Workflow optimization"
        ),
        getText(
          "seachat.solutions.education.stakeholders.staff.features.reporting",
          "Analytics reporting"
        ),
      ],
    },
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
                {getText(
                  "seachat.solutions.education.title",
                  "Education Solutions"
                )}
              </h1>
            </div>
            <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
              {getText(
                "seachat.solutions.education.subtitle",
                "Transform education with AI-powered student support, streamlined administration, and enhanced campus communication"
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
              >
                {getText(
                  "seachat.solutions.education.trialButton",
                  "Start Free Trial"
                )}
              </a>
              <a
                href={getMeetingUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
              >
                {getText(
                  "seachat.solutions.education.demoButton",
                  "Schedule Demo"
                )}
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
              {getText(
                "seachat.solutions.education.featuresTitle",
                "Transform Campus Communication"
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getText(
                "seachat.solutions.education.featuresSubtitle",
                "Empower your institution with AI-driven solutions that enhance student success and operational efficiency"
              )}
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

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {feature.description}
                  </p>

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
              {getText(
                "seachat.solutions.education.stakeholdersTitle",
                "Support Every Stakeholder"
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getText(
                "seachat.solutions.education.stakeholdersSubtitle",
                "Tailored experiences for students, parents, faculty, and staff"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stakeholders.map((stakeholder, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {stakeholder.title}
                </h3>
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
              {getText(
                "seachat.solutions.education.metricsTitle",
                "Proven Results"
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getText(
                "seachat.solutions.education.metricsSubtitle",
                "Educational institutions see immediate improvements with SeaChat"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {metric.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.label}
                </h3>
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
              {getText(
                "seachat.solutions.education.useCasesTitle",
                "Real-World Applications"
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getText(
                "seachat.solutions.education.useCasesSubtitle",
                "See how SeaChat handles common education scenarios"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>

                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      {getText(
                        "seachat.solutions.education.studentInquiry",
                        "Student Inquiry"
                      )}
                      :
                    </h4>
                    <p className="text-blue-800 italic">"{useCase.example}"</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 mb-2">
                      {getText(
                        "seachat.solutions.education.seachatResponse",
                        "SeaChat Response"
                      )}
                      :
                    </h4>
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
              {getText(
                "seachat.solutions.education.integrationsTitle",
                "Seamless Integrations"
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getText(
                "seachat.solutions.education.integrationsSubtitle",
                "Connect with your existing education technology stack"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-bold text-gray-900 mb-2">
                  {integration.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {getText(
              "seachat.solutions.education.ctaTitle",
              "Ready to Transform Your Institution?"
            )}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {getText(
              "seachat.solutions.education.ctaSubtitle",
              "Join leading educational institutions using SeaChat to enhance student success"
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              {getText(
                "seachat.solutions.education.ctaTrialButton",
                "Start Free Trial"
              )}
            </a>
            <a
              href={getMeetingUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center"
            >
              {getText(
                "seachat.solutions.education.ctaDemoButton",
                "Schedule a Demo"
              )}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;
