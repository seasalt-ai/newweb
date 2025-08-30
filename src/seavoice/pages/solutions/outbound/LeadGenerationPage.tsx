
import { motion } from 'framer-motion';
import { Users, Target, BarChart3, Phone, CheckCircle, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LeadGenerationPage = () => {
  const { t } = useTranslation();
  const namespace = 'seavoice.pages.solutions.outbound.leadGeneration';
  const features = [
    {
      icon: Target,
      title: t(`${namespace}.features.intelligentQualification.title`),
      description: t(`${namespace}.features.intelligentQualification.description`),
      benefits: [
        t(`${namespace}.features.intelligentQualification.benefits.automatedScoring`),
        t(`${namespace}.features.intelligentQualification.benefits.intentDetection`),
        t(`${namespace}.features.intelligentQualification.benefits.demographicProfiling`)
      ]
    },
    {
      icon: Phone,
      title: t(`${namespace}.features.personalizedOutreach.title`),
      description: t(`${namespace}.features.personalizedOutreach.description`),
      benefits: [
        t(`${namespace}.features.personalizedOutreach.benefits.customMessaging`),
        t(`${namespace}.features.personalizedOutreach.benefits.behavioralTriggers`),
        t(`${namespace}.features.personalizedOutreach.benefits.contextualResponses`)
      ]
    },
    {
      icon: BarChart3,
      title: t(`${namespace}.features.realTimeAnalytics.title`),
      description: t(`${namespace}.features.realTimeAnalytics.description`),
      benefits: [
        t(`${namespace}.features.realTimeAnalytics.benefits.conversionTracking`),
        t(`${namespace}.features.realTimeAnalytics.benefits.qualityMetrics`),
        t(`${namespace}.features.realTimeAnalytics.benefits.roiAnalysis`)
      ]
    }
  ];

  const qualificationProcess = [
    {
      step: 1,
      title: t(`${namespace}.process.steps.initialContact.title`),
      description: t(`${namespace}.process.steps.initialContact.description`),
      outcome: t(`${namespace}.process.steps.initialContact.outcome`)
    },
    {
      step: 2,
      title: t(`${namespace}.process.steps.needsAssessment.title`),
      description: t(`${namespace}.process.steps.needsAssessment.description`),
      outcome: t(`${namespace}.process.steps.needsAssessment.outcome`)
    },
    {
      step: 3,
      title: t(`${namespace}.process.steps.interestScoring.title`),
      description: t(`${namespace}.process.steps.interestScoring.description`),
      outcome: t(`${namespace}.process.steps.interestScoring.outcome`)
    },
    {
      step: 4,
      title: t(`${namespace}.process.steps.handoffToSales.title`),
      description: t(`${namespace}.process.steps.handoffToSales.description`),
      outcome: t(`${namespace}.process.steps.handoffToSales.outcome`)
    }
  ];

  const benefits = [
    {
      metric: t(`${namespace}.results.qualifiedLeads.metric`),
      description: t(`${namespace}.results.qualifiedLeads.description`)
    },
    {
      metric: t(`${namespace}.results.costReduction.metric`),
      description: t(`${namespace}.results.costReduction.description`)
    },
    {
      metric: t(`${namespace}.results.accuracy.metric`),
      description: t(`${namespace}.results.accuracy.description`)
    },
    {
      metric: t(`${namespace}.results.conversion.metric`),
      description: t(`${namespace}.results.conversion.description`)
    }
  ];

  const industries = [
    {
      name: t(`${namespace}.industries.realEstate.name`),
      description: t(`${namespace}.industries.realEstate.description`),
      results: [
        t(`${namespace}.industries.realEstate.results.moreLeads`),
        t(`${namespace}.industries.realEstate.results.fasterCycle`)
      ]
    },
    {
      name: t(`${namespace}.industries.insurance.name`),
      description: t(`${namespace}.industries.insurance.description`),
      results: [
        t(`${namespace}.industries.insurance.results.increaseSales`),
        t(`${namespace}.industries.insurance.results.costReduction`)
      ]
    },
    {
      name: t(`${namespace}.industries.softwareSaas.name`),
      description: t(`${namespace}.industries.softwareSaas.description`),
      results: [
        t(`${namespace}.industries.softwareSaas.results.demoBookings`),
        t(`${namespace}.industries.softwareSaas.results.closeRate`)
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Users className="w-16 h-16 text-purple-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t(`${namespace}.hero.title`)}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t(`${namespace}.hero.subtitle`)}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              {t(`${namespace}.hero.cta`)}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t(`${namespace}.features.title`)}
            </h2>
            <p className="text-xl text-gray-600">
              {t(`${namespace}.features.subtitle`)}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t(`${namespace}.process.title`)}
            </h2>
            <p className="text-xl text-gray-600">
              {t(`${namespace}.process.subtitle`)}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualificationProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 mb-4">{process.description}</p>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm font-semibold text-purple-800">{process.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t(`${namespace}.results.title`)}
            </h2>
            <p className="text-xl text-gray-600">
              {t(`${namespace}.results.subtitle`)}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg text-center border border-gray-200"
              >
                <div className="text-4xl font-bold text-purple-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t(`${namespace}.industries.title`)}
            </h2>
            <p className="text-xl text-gray-600">
              {t(`${namespace}.industries.subtitle`)}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <div className="space-y-2">
                  {industry.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t(`${namespace}.cta.title`)}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t(`${namespace}.cta.subtitle`)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t(`${namespace}.cta.startTrial`)}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                {t(`${namespace}.cta.scheduleDemo`)}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LeadGenerationPage;