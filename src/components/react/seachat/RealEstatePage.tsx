import React from "react";
import {
  Home,
  Calendar,
  Users,
  Phone,
  Search,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useTranslation, type SupportedLanguage } from "../../../i18n/helpers";
import { getMeetingUrl } from "../../../constants/urls";

interface RealEstatePageProps {
  lang: SupportedLanguage;
  translations?: any;
}

const RealEstatePage: React.FC<RealEstatePageProps> = ({
  lang,
  translations,
}) => {
  // Use conditional hook pattern for SSR compatibility
  const { t: hookT, isLoading } = translations
    ? { t: null, isLoading: false }
    : useTranslation(lang);

  // Unified translation function
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

  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const features = [
    {
      icon: Search,
      title: getText(
        "seachat.solutions.realEstate.features.search.title",
        "Property Search Assistance"
      ),
      description: getText(
        "seachat.solutions.realEstate.features.search.description",
        "Help clients find their perfect property with AI-powered search and recommendations"
      ),
      benefits: [
        getText(
          "seachat.solutions.realEstate.features.search.benefits.matching",
          "Smart property matching"
        ),
        getText(
          "seachat.solutions.realEstate.features.search.benefits.insights",
          "Market insights"
        ),
        getText(
          "seachat.solutions.realEstate.features.search.benefits.neighborhood",
          "Neighborhood information"
        ),
        getText(
          "seachat.solutions.realEstate.features.search.benefits.analysis",
          "Price analysis"
        ),
      ],
    },
    {
      icon: Calendar,
      title: getText(
        "seachat.solutions.realEstate.features.showing.title",
        "Showing Coordination"
      ),
      description: getText(
        "seachat.solutions.realEstate.features.showing.description",
        "Streamline property showings with automated scheduling and coordination"
      ),
      benefits: [
        getText(
          "seachat.solutions.realEstate.features.showing.benefits.scheduling",
          "Automated scheduling"
        ),
        getText(
          "seachat.solutions.realEstate.features.showing.benefits.availability",
          "Availability sync"
        ),
        getText(
          "seachat.solutions.realEstate.features.showing.benefits.reminders",
          "Reminder notifications"
        ),
        getText(
          "seachat.solutions.realEstate.features.showing.benefits.route",
          "Route optimization"
        ),
      ],
    },
    {
      icon: Users,
      title: getText(
        "seachat.solutions.realEstate.features.leads.title",
        "Lead Management"
      ),
      description: getText(
        "seachat.solutions.realEstate.features.leads.description",
        "Capture and nurture leads with intelligent qualification and follow-up"
      ),
      benefits: [
        getText(
          "seachat.solutions.realEstate.features.leads.benefits.qualification",
          "Lead qualification"
        ),
        getText(
          "seachat.solutions.realEstate.features.leads.benefits.followup",
          "Automated follow-up"
        ),
        getText(
          "seachat.solutions.realEstate.features.leads.benefits.crm",
          "CRM integration"
        ),
        getText(
          "seachat.solutions.realEstate.features.leads.benefits.tracking",
          "Conversion tracking"
        ),
      ],
    },
    {
      icon: Phone,
      title: getText(
        "seachat.solutions.realEstate.features.communication.title",
        "Client Communication"
      ),
      description: getText(
        "seachat.solutions.realEstate.features.communication.description",
        "24/7 client support for inquiries, updates, and transaction assistance"
      ),
      benefits: [
        getText(
          "seachat.solutions.realEstate.features.communication.benefits.availability",
          "24/7 availability"
        ),
        getText(
          "seachat.solutions.realEstate.features.communication.benefits.updates",
          "Transaction updates"
        ),
        getText(
          "seachat.solutions.realEstate.features.communication.benefits.assistance",
          "Document assistance"
        ),
        getText(
          "seachat.solutions.realEstate.features.communication.benefits.market",
          "Market updates"
        ),
      ],
    },
  ];

  const useCases = [
    {
      title: getText(
        "seachat.solutions.realEstate.useCases.property.title",
        "Property Inquiries"
      ),
      description: getText(
        "seachat.solutions.realEstate.useCases.property.description",
        "Handle property questions and provide detailed information"
      ),
      example: getText(
        "seachat.solutions.realEstate.useCases.property.example",
        '"Tell me about the 3-bedroom house on Oak Street"'
      ),
      outcome: getText(
        "seachat.solutions.realEstate.useCases.property.outcome",
        "Detailed property information with photos, pricing, and neighborhood data"
      ),
    },
    {
      title: getText(
        "seachat.solutions.realEstate.useCases.showing.title",
        "Showing Requests"
      ),
      description: getText(
        "seachat.solutions.realEstate.useCases.showing.description",
        "Schedule property viewings and coordinate with all parties"
      ),
      example: getText(
        "seachat.solutions.realEstate.useCases.showing.example",
        '"I\'d like to schedule a showing for this weekend"'
      ),
      outcome: getText(
        "seachat.solutions.realEstate.useCases.showing.outcome",
        "Automated scheduling with agent availability and confirmation"
      ),
    },
    {
      title: getText(
        "seachat.solutions.realEstate.useCases.market.title",
        "Market Analysis"
      ),
      description: getText(
        "seachat.solutions.realEstate.useCases.market.description",
        "Provide market insights and property valuations"
      ),
      example: getText(
        "seachat.solutions.realEstate.useCases.market.example",
        "\"What's my home worth in today's market?\""
      ),
      outcome: getText(
        "seachat.solutions.realEstate.useCases.market.outcome",
        "Comparative market analysis with recent sales and trends"
      ),
    },
    {
      title: getText(
        "seachat.solutions.realEstate.useCases.transaction.title",
        "Transaction Support"
      ),
      description: getText(
        "seachat.solutions.realEstate.useCases.transaction.description",
        "Guide clients through the buying or selling process"
      ),
      example: getText(
        "seachat.solutions.realEstate.useCases.transaction.example",
        '"What documents do I need for the closing?"'
      ),
      outcome: getText(
        "seachat.solutions.realEstate.useCases.transaction.outcome",
        "Checklist of required documents with deadlines and instructions"
      ),
    },
  ];

  const metrics = [
    {
      value: "65%",
      label: getText(
        "seachat.solutions.realEstate.metrics.leads.label",
        "More Qualified Leads"
      ),
      description: getText(
        "seachat.solutions.realEstate.metrics.leads.description",
        "Through intelligent lead qualification"
      ),
    },
    {
      value: "45%",
      label: getText(
        "seachat.solutions.realEstate.metrics.response.label",
        "Faster Response Time"
      ),
      description: getText(
        "seachat.solutions.realEstate.metrics.response.description",
        "For client inquiries and requests"
      ),
    },
    {
      value: "80%",
      label: getText(
        "seachat.solutions.realEstate.metrics.showing.label",
        "Showing Efficiency"
      ),
      description: getText(
        "seachat.solutions.realEstate.metrics.showing.description",
        "With automated scheduling coordination"
      ),
    },
    {
      value: "90%",
      label: getText(
        "seachat.solutions.realEstate.metrics.satisfaction.label",
        "Client Satisfaction"
      ),
      description: getText(
        "seachat.solutions.realEstate.metrics.satisfaction.description",
        "With 24/7 support availability"
      ),
    },
  ];

  const propertyTypes = [
    {
      name: getText(
        "seachat.solutions.realEstate.propertyTypes.residential.name",
        "Residential Sales"
      ),
      description: getText(
        "seachat.solutions.realEstate.propertyTypes.residential.description",
        "Single-family homes, condos, and townhouses"
      ),
    },
    {
      name: getText(
        "seachat.solutions.realEstate.propertyTypes.commercial.name",
        "Commercial Real Estate"
      ),
      description: getText(
        "seachat.solutions.realEstate.propertyTypes.commercial.description",
        "Office buildings, retail spaces, and warehouses"
      ),
    },
    {
      name: getText(
        "seachat.solutions.realEstate.propertyTypes.rental.name",
        "Rental Properties"
      ),
      description: getText(
        "seachat.solutions.realEstate.propertyTypes.rental.description",
        "Apartment complexes and rental management"
      ),
    },
    {
      name: getText(
        "seachat.solutions.realEstate.propertyTypes.luxury.name",
        "Luxury Properties"
      ),
      description: getText(
        "seachat.solutions.realEstate.propertyTypes.luxury.description",
        "High-end homes and exclusive listings"
      ),
    },
    {
      name: getText(
        "seachat.solutions.realEstate.propertyTypes.investment.name",
        "Investment Properties"
      ),
      description: getText(
        "seachat.solutions.realEstate.propertyTypes.investment.description",
        "Fix-and-flip and rental investments"
      ),
    },
    {
      name: getText(
        "seachat.solutions.realEstate.propertyTypes.new.name",
        "New Construction"
      ),
      description: getText(
        "seachat.solutions.realEstate.propertyTypes.new.description",
        "Builder partnerships and new developments"
      ),
    },
  ];

  // Get integrations safely
  let integrations: string[] = [];
  try {
    const integrationsData =
      translations?.seachat?.solutions?.realEstate?.integrations ||
      hookT?.("seachat.solutions.realEstate.integrations", {
        returnObjects: true,
      });
    if (Array.isArray(integrationsData)) {
      integrations = integrationsData;
    } else if (integrationsData && typeof integrationsData === "object") {
      integrations = Object.values(integrationsData);
    }
  } catch (error) {
    console.warn("Failed to get integrations:", error);
    integrations = [
      "MLS Systems",
      "Zillow",
      "Realtor.com",
      "CRM Platforms",
      "Email Marketing",
      "Virtual Tour Software",
      "Property Management",
      "Document Management",
    ];
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Home className="w-16 h-16 text-blue-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {getText(
                  "seachat.solutions.realEstate.title",
                  "Real Estate Solutions"
                )}
              </h1>
            </div>
            <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
              {getText(
                "seachat.solutions.realEstate.subtitle",
                "Transform your real estate business with AI-powered customer support that captures leads, coordinates showings, and provides 24/7 client assistance."
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
                  "seachat.solutions.realEstate.trialButton",
                  "Start Real Estate For Free"
                )}
              </a>
              <a
                href={getMeetingUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
              >
                {getText(
                  "seachat.solutions.realEstate.demoButton",
                  "Schedule Real Estate Demo"
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
                "seachat.solutions.realEstate.featuresTitle",
                "Real Estate Specialized Features"
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getText(
                "seachat.solutions.realEstate.featuresSubtitle",
                "Purpose-built features for real estate professionals to capture leads and serve clients better."
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
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

      {/* Performance Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {getText(
                "seachat.solutions.realEstate.metricsTitle",
                "Real Estate Impact Metrics"
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getText(
                "seachat.solutions.realEstate.metricsSubtitle",
                "Real results from real estate professionals using SeaChat for client support and lead generation."
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
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

      {/* Property Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {getText(
                "seachat.solutions.realEstate.propertyTypesTitle",
                "All Property Types Supported"
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getText(
                "seachat.solutions.realEstate.propertyTypesSubtitle",
                "Whether you specialize in residential, commercial, or investment properties, we've got you covered."
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertyTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {type.name}
                </h3>
                <p className="text-gray-600">{type.description}</p>
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
                "seachat.solutions.realEstate.useCasesTitle",
                "Real Estate Use Cases"
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getText(
                "seachat.solutions.realEstate.useCasesSubtitle",
                "See how SeaChat handles typical real estate client interactions and lead generation."
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
                        "seachat.solutions.realEstate.clientInquiry",
                        "Client Inquiry"
                      )}
                      :
                    </h4>
                    <p className="text-blue-800 italic">"{useCase.example}"</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 mb-2">
                      {getText(
                        "seachat.solutions.realEstate.seachatResponse",
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {getText(
                  "seachat.solutions.realEstate.integrationsTitle",
                  "Real Estate Platform Integrations"
                )}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {getText(
                  "seachat.solutions.realEstate.integrationsSubtitle",
                  "Seamlessly connect with the tools and platforms you already use to manage your real estate business."
                )}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{integration}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {getText(
                  "seachat.solutions.realEstate.leadCaptureTitle",
                  "Lead Capture Example"
                )}
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600 mb-2">
                    {getText(
                      "seachat.solutions.realEstate.websiteVisitor",
                      "Website Visitor"
                    )}
                  </div>
                  <p className="text-gray-800">
                    {getText(
                      "seachat.solutions.realEstate.visitorQuery",
                      '"I\'m looking for a 3-bedroom house under $500k"'
                    )}
                  </p>
                </div>

                <div className="bg-blue-100 rounded-lg p-4">
                  <div className="text-sm text-blue-600 mb-2">
                    {getText(
                      "seachat.solutions.realEstate.seachatAI",
                      "SeaChat AI"
                    )}
                  </div>
                  <p className="text-gray-800">
                    {getText(
                      "seachat.solutions.realEstate.aiResponse",
                      '"I\'d love to help you find the perfect home! I have several 3-bedroom properties under $500k. Can I get your contact information to send you some options?"'
                    )}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600 mb-2">
                    {getText(
                      "seachat.solutions.realEstate.websiteVisitor",
                      "Website Visitor"
                    )}
                  </div>
                  <p className="text-gray-800">
                    {getText(
                      "seachat.solutions.realEstate.visitorResponse",
                      '"Sure! My email is john@email.com"'
                    )}
                  </p>
                </div>

                <div className="bg-green-100 rounded-lg p-4">
                  <div className="text-sm text-green-600 mb-2">
                    {getText(
                      "seachat.solutions.realEstate.systemAction",
                      "System Action"
                    )}
                  </div>
                  <p className="text-gray-800">
                    ✅{" "}
                    {getText(
                      "seachat.solutions.realEstate.leadCaptured",
                      "Lead captured and added to CRM with property preferences"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {getText(
              "seachat.solutions.realEstate.ctaTitle",
              "Ready to Transform Your Real Estate Business?"
            )}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {getText(
              "seachat.solutions.realEstate.ctaSubtitle",
              "Join real estate professionals already using SeaChat to capture more leads, coordinate showings, and provide exceptional client service."
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
                "seachat.solutions.realEstate.ctaTrialButton",
                "Start Real Estate For Free"
              )}
            </a>
            <a
              href={getMeetingUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center"
            >
              {getText(
                "seachat.solutions.realEstate.ctaDemoButton",
                "Schedule Real Estate Demo"
              )}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstatePage;
