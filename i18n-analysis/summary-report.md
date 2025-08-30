# I18n Translation Coverage Analysis Report

Generated: 2025-08-30T01:53:18.309Z

## Executive Summary

- **Languages Analyzed**: 20
- **Base Language (en) Keys**: 4562
- **Components Analyzed**: 210
- **Translation Coverage**: 79.97%
- **Missing Keys**: 1086
- **Hardcoded Strings Found**: 3776

## Translation Files Status

| Language | Total Keys | Coverage vs Base | Status |
|----------|------------|------------------|--------|
| ar | 909 | 19.42% | ❌ Incomplete |
| de | 887 | 18.94% | ❌ Incomplete |
| en | 4562 | 100.00% | ✅ Good |
| es | 835 | 17.80% | ❌ Incomplete |
| fa | 755 | 16.07% | ❌ Incomplete |
| fil | 739 | 15.69% | ❌ Incomplete |
| fr | 739 | 15.69% | ❌ Incomplete |
| hi | 690 | 14.62% | ❌ Incomplete |
| id | 690 | 14.62% | ❌ Incomplete |
| ja | 690 | 14.64% | ❌ Incomplete |
| ko | 690 | 14.62% | ❌ Incomplete |
| ms | 690 | 14.62% | ❌ Incomplete |
| pl | 676 | 14.31% | ❌ Incomplete |
| pt | 676 | 14.31% | ❌ Incomplete |
| ru | 676 | 14.31% | ❌ Incomplete |
| ta | 739 | 15.69% | ❌ Incomplete |
| th | 679 | 14.38% | ❌ Incomplete |
| vi | 739 | 15.69% | ❌ Incomplete |
| zh-CN | 802 | 17.10% | ❌ Incomplete |
| zh-TW | 4564 | 99.96% | ✅ Good |

## Priority Actions Required

### 1. Add missing translation keys to base language
**Category**: Translation Structure
**Description**: 1086 keys used in components but missing from en.json
**Action**: Add these keys to public/locales/en.json: industriesData.ecommerce.benefits.0, industriesData.ecommerce.benefits.1, industriesData.ecommerce.benefits.2, industriesData.ecommerce.benefits.3, industriesData.healthcare.benefits.0...

### 2. Replace hardcoded strings with translation keys
**Category**: Hardcoded Strings
**Description**: Found 3776 hardcoded strings that should be internationalized
**Action**: Review and replace hardcoded strings with t() function calls


## Missing Translation Keys


The following keys are used in components but missing from the base language file:

```
industriesData.ecommerce.benefits.0
industriesData.ecommerce.benefits.1
industriesData.ecommerce.benefits.2
industriesData.ecommerce.benefits.3
industriesData.healthcare.benefits.0
industriesData.healthcare.benefits.1
industriesData.healthcare.benefits.2
industriesData.healthcare.benefits.3
industriesData.realEstate.benefits.0
industriesData.realEstate.benefits.1
industriesData.realEstate.benefits.2
industriesData.realEstate.benefits.3
industriesData.restaurants.benefits.0
industriesData.restaurants.benefits.1
industriesData.restaurants.benefits.2
industriesData.restaurants.benefits.3
industriesData.education.benefits.0
industriesData.education.benefits.1
industriesData.education.benefits.2
industriesData.education.benefits.3
industriesData.automotive.benefits.0
industriesData.automotive.benefits.1
industriesData.automotive.benefits.2
industriesData.automotive.benefits.3
industriesData.professional.benefits.0
industriesData.professional.benefits.1
industriesData.professional.benefits.2
industriesData.professional.benefits.3
industriesData.financial.benefits.0
industriesData.financial.benefits.1
industriesData.financial.benefits.2
industriesData.financial.benefits.3
company.partnerships.list.0.description
company.partnerships.list.0.type
company.partnerships.list.1.description
company.partnerships.list.1.type
company.partnerships.list.2.description
company.partnerships.list.2.type
company.partnerships.list.3.description
company.partnerships.list.3.type
company.offices.list.0.title
company.offices.list.0.location
company.offices.list.1.title
company.offices.list.1.location
company.timeline.list.0.event
company.timeline.list.1.event
company.timeline.list.2.event
company.timeline.list.3.event
company.timeline.list.4.event
pricing.legacy.enterprise.period
seachat.pricing.plans.free.features
seachat.pricing.plans.free.limitations
seachat.pricing.plans.free.button
seachat.pricing.plans.starter.name
seachat.pricing.plans.starter.description
seachat.pricing.plans.starter.badge
seachat.pricing.plans.starter.features
seachat.pricing.plans.starter.button
seachat.pricing.plans.growth.name
seachat.pricing.plans.growth.description
seachat.pricing.plans.growth.features
seachat.pricing.plans.growth.button
seachat.pricing.plans.enterprise.features
seachat.pricing.plans.enterprise.button
seachat.pricing.plans.free.period
seachat.pricing.enterprise.button
seachat.features.aiAutomation.contextAware.title
seachat.features.aiAutomation.contextAware.description
seachat.features.aiAutomation.learning.title
seachat.features.aiAutomation.learning.description
seachat.features.aiAutomation.handoff.title
seachat.features.aiAutomation.handoff.description
seachat.features.aiAutomation.availability.title
seachat.features.aiAutomation.availability.description
seachat.features.aiAutomation.response.title
seachat.features.aiAutomation.response.description
seachat.features.aiAutomation.multilanguage.title
seachat.features.aiAutomation.multilanguage.description
seachat.features.aiAutomation.types.faq.title
seachat.features.aiAutomation.types.faq.description
seachat.features.aiAutomation.types.orders.title
seachat.features.aiAutomation.types.orders.description
seachat.features.aiAutomation.types.appointments.title
seachat.features.aiAutomation.types.appointments.description
seachat.features.aiAutomation.types.recommendations.title
seachat.features.aiAutomation.types.recommendations.description
seachat.features.aiAutomation.title
seachat.features.aiAutomation.subtitle
seachat.features.aiAutomation.tryButton
seachat.features.aiAutomation.featuresTitle
seachat.features.aiAutomation.featuresSubtitle
seachat.features.aiAutomation.performanceTitle
seachat.features.aiAutomation.performanceSubtitle
seachat.features.aiAutomation.hybridTitle
seachat.features.aiAutomation.hybridSubtitle
seachat.features.aiAutomation.aiStrengthsTitle
seachat.features.aiAutomation.aiStrengths
seachat.features.aiAutomation.humanStrengthsTitle
seachat.features.aiAutomation.humanStrengths
seachat.features.aiAutomation.ctaTitle
seachat.features.aiAutomation.ctaSubtitle
seachat.features.api.restful.title
seachat.features.api.restful.description
seachat.features.api.webhooks.title
seachat.features.api.webhooks.description
seachat.features.api.security.title
seachat.features.api.security.description
seachat.features.api.cdn.title
seachat.features.api.cdn.description
seachat.features.api.endpoints.createConversation
seachat.features.api.endpoints.getConversation
seachat.features.api.endpoints.sendMessage
seachat.features.api.sdks.available
seachat.features.api.sdks.comingSoon
seachat.features.api.title
seachat.features.api.subtitle
seachat.features.api.getKeyButton
seachat.features.api.viewDocsButton
seachat.features.api.featuresTitle
seachat.features.api.featuresSubtitle
seachat.features.api.endpointsTitle
seachat.features.api.endpointsSubtitle
seachat.features.api.exampleRequestResponse
seachat.features.api.tryItOut
seachat.features.api.testConsole
seachat.features.api.copyCurl
seachat.features.api.sdksTitle
seachat.features.api.sdksSubtitle
seachat.features.api.exampleTitle
seachat.features.api.exampleSubtitle
seachat.features.api.jsExample
seachat.features.api.copy
seachat.features.api.ctaTitle
seachat.features.api.ctaSubtitle
seachat.features.api.ctaAccessButton
seachat.features.api.ctaDocsButton
seachat.features.analytics.metrics.satisfaction.title
seachat.features.analytics.metrics.responseTime.title
seachat.features.analytics.metrics.resolution.title
seachat.features.analytics.metrics.growth.title
seachat.features.analytics.seachat.features.dashboards.title
seachat.features.analytics.seachat.features.dashboards.description
seachat.features.analytics.seachat.features.dashboards.benefits.metrics
seachat.features.analytics.seachat.features.dashboards.benefits.kpi
seachat.features.analytics.seachat.features.dashboards.benefits.team
seachat.features.analytics.seachat.features.dashboards.benefits.alerts
seachat.features.analytics.seachat.features.reporting.title
seachat.features.analytics.seachat.features.reporting.description
seachat.features.analytics.seachat.features.reporting.benefits.automated
seachat.features.analytics.seachat.features.reporting.benefits.dates
seachat.features.analytics.seachat.features.reporting.benefits.export
seachat.features.analytics.seachat.features.reporting.benefits.scheduled
seachat.features.analytics.seachat.features.journey.title
seachat.features.analytics.seachat.features.journey.description
seachat.features.analytics.seachat.features.journey.benefits.tracking
seachat.features.analytics.seachat.features.journey.benefits.visualization
seachat.features.analytics.seachat.features.journey.benefits.conversion
seachat.features.analytics.seachat.features.journey.benefits.dropoff
seachat.features.analytics.seachat.features.optimization.title
seachat.features.analytics.seachat.features.optimization.description
seachat.features.analytics.seachat.features.optimization.benefits.bottlenecks
seachat.features.analytics.seachat.features.optimization.benefits.resources
seachat.features.analytics.seachat.features.optimization.benefits.efficiency
seachat.features.analytics.seachat.features.optimization.benefits.roi
seachat.features.analytics.title
seachat.features.analytics.subtitle
seachat.features.analytics.metricsTitle
seachat.features.analytics.metricsSubtitle
seachat.features.analytics.metrics.period
seachat.features.analytics.featuresTitle
seachat.features.analytics.featuresSubtitle
seachat.features.analytics.dashboardTitle
seachat.features.analytics.dashboardSubtitle
seachat.features.analytics.dashboard.overview
seachat.features.analytics.dashboard.months.jan
seachat.features.analytics.dashboard.months.dec
seachat.features.analytics.dashboard.quickStats
seachat.features.analytics.dashboard.activeConversations
seachat.features.analytics.dashboard.systemUptime
seachat.features.analytics.dashboard.customerRating
seachat.features.analytics.ctaTitle
seachat.features.analytics.ctaSubtitle
seachat.features.humanAgents.unlimited.title
seachat.features.humanAgents.unlimited.description
seachat.features.humanAgents.realtime.title
seachat.features.humanAgents.realtime.description
seachat.features.humanAgents.collaboration.title
seachat.features.humanAgents.collaboration.description
seachat.features.humanAgents.security.title
seachat.features.humanAgents.security.description
seachat.features.humanAgents.analytics.title
seachat.features.humanAgents.analytics.description
seachat.features.humanAgents.workflows.title
seachat.features.humanAgents.workflows.description
seachat.features.humanAgents.benefits.personal.title
seachat.features.humanAgents.benefits.personal.description
seachat.features.humanAgents.benefits.complex.title
seachat.features.humanAgents.benefits.complex.description
seachat.features.humanAgents.benefits.brand.title
seachat.features.humanAgents.benefits.brand.description
seachat.features.humanAgents.benefits.relationships.title
seachat.features.humanAgents.benefits.relationships.description
seachat.features.humanAgents.title
seachat.features.humanAgents.subtitle
seachat.features.humanAgents.startButton
seachat.features.humanAgents.demoButton
seachat.features.humanAgents.freeForever.title
seachat.features.humanAgents.freeForever.subtitle
seachat.features.humanAgents.freeForever.meaningTitle
seachat.features.humanAgents.freeForever.agent
seachat.features.humanAgents.freeForever.conversations
seachat.features.humanAgents.freeForever.history
seachat.features.humanAgents.freeForever.contacts
seachat.features.humanAgents.freeForever.export
seachat.features.humanAgents.freeForever.noCredit
seachat.features.humanAgents.freeForever.unlimited
seachat.features.humanAgents.freeForever.noCaps
seachat.features.humanAgents.freeForever.forever
seachat.features.humanAgents.featuresTitle
seachat.features.humanAgents.featuresSubtitle
seachat.features.humanAgents.whyMatterTitle
seachat.features.humanAgents.whyMatterSubtitle
seachat.features.humanAgents.ctaTitle
seachat.features.humanAgents.ctaSubtitle
seachat.features.humanAgents.ctaStartButton
seachat.features.humanAgents.ctaDemoButton
common.back
features.knowledgeBase.title
seachat.features.knowledgeBase.subtitle
seachat.features.knowledgeBase.managementTitle
seachat.features.knowledgeBase.managementSubtitle
seachat.features.knowledgeBase.smartSearch.title
seachat.features.knowledgeBase.smartSearch.description
seachat.features.knowledgeBase.documentManagement.title
seachat.features.knowledgeBase.documentManagement.description
seachat.features.knowledgeBase.collaboration.title
seachat.features.knowledgeBase.collaboration.description
seachat.features.knowledgeBase.autoLearning.title
seachat.features.knowledgeBase.autoLearning.description
seachat.features.knowledgeBase.accessControl.title
seachat.features.knowledgeBase.accessControl.description
seachat.features.knowledgeBase.multiLanguage.title
seachat.features.knowledgeBase.multiLanguage.description
seachat.features.knowledgeBase.demoTitle
seachat.features.knowledgeBase.demoSubtitle
seachat.features.knowledgeBase.interfaceTitle
seachat.features.knowledgeBase.categories
seachat.features.knowledgeBase.productDocs
seachat.features.knowledgeBase.articles
seachat.features.knowledgeBase.supportFaqs
seachat.features.knowledgeBase.policies
seachat.features.knowledgeBase.recentUpdates
seachat.features.knowledgeBase.refundUpdate
seachat.features.knowledgeBase.hoursAgo
seachat.features.knowledgeBase.returnWindow
seachat.features.knowledgeBase.featureGuide
seachat.features.knowledgeBase.dayAgo
seachat.features.knowledgeBase.analyticsDoc
seachat.features.knowledgeBase.transformTitle
seachat.features.knowledgeBase.transformSubtitle
seachat.features.knowledgeBase.benefitsTitle
seachat.features.knowledgeBase.fasterResponse.title
seachat.features.knowledgeBase.fasterResponse.description
seachat.features.knowledgeBase.consistency.title
seachat.features.knowledgeBase.consistency.description
seachat.features.knowledgeBase.training.title
seachat.features.knowledgeBase.training.description
seachat.features.knowledgeBase.readyTitle
seachat.features.knowledgeBase.readySubtitle
seachat.features.knowledgeBase.startButton
seachat.features.omnichannel.channels.website.name
seachat.features.omnichannel.channels.website.description
seachat.features.omnichannel.channels.website.seachat.features.compatibility
seachat.features.omnichannel.channels.website.seachat.features.styling
seachat.features.omnichannel.channels.website.seachat.features.responsive
seachat.features.omnichannel.channels.website.seachat.features.sync
seachat.features.omnichannel.channels.whatsapp.name
seachat.features.omnichannel.channels.whatsapp.description
seachat.features.omnichannel.channels.whatsapp.seachat.features.api
seachat.features.omnichannel.channels.whatsapp.seachat.features.media
seachat.features.omnichannel.channels.whatsapp.seachat.features.templates
seachat.features.omnichannel.channels.whatsapp.seachat.features.groups
seachat.features.omnichannel.channels.instagram.name
seachat.features.omnichannel.channels.instagram.description
seachat.features.omnichannel.channels.instagram.seachat.features.replies
seachat.features.omnichannel.channels.instagram.seachat.features.media
seachat.features.omnichannel.channels.instagram.seachat.features.responses
seachat.features.omnichannel.channels.instagram.seachat.features.greetings
seachat.features.omnichannel.channels.facebook.name
seachat.features.omnichannel.channels.facebook.description
seachat.features.omnichannel.channels.facebook.seachat.features.integration
seachat.features.omnichannel.channels.facebook.seachat.features.responses
seachat.features.omnichannel.channels.facebook.seachat.features.cards
seachat.features.omnichannel.channels.facebook.seachat.features.menu
seachat.features.omnichannel.channels.voice.name
seachat.features.omnichannel.channels.voice.description
seachat.features.omnichannel.channels.voice.seachat.features.conversations
seachat.features.omnichannel.channels.voice.seachat.features.routing
seachat.features.omnichannel.channels.voice.seachat.features.voicemail
seachat.features.omnichannel.channels.voice.seachat.features.conference
seachat.features.omnichannel.channels.email.name
seachat.features.omnichannel.channels.email.description
seachat.features.omnichannel.channels.email.seachat.features.categorization
seachat.features.omnichannel.channels.email.seachat.features.responses
seachat.features.omnichannel.channels.email.seachat.features.templates
seachat.features.omnichannel.channels.email.seachat.features.priority
seachat.features.omnichannel.benefits.unifiedView.title
seachat.features.omnichannel.benefits.unifiedView.description
seachat.features.omnichannel.benefits.handoffs.title
seachat.features.omnichannel.benefits.handoffs.description
seachat.features.omnichannel.benefits.resolution.title
seachat.features.omnichannel.benefits.resolution.description
seachat.features.omnichannel.benefits.satisfaction.title
seachat.features.omnichannel.benefits.satisfaction.description
seachat.features.omnichannel.title
seachat.features.omnichannel.subtitle
seachat.features.omnichannel.channelsTitle
seachat.features.omnichannel.channelsSubtitle
seachat.features.omnichannel.benefitsTitle
seachat.features.omnichannel.benefitsSubtitle
seachat.features.omnichannel.inboxTitle
seachat.features.omnichannel.inboxSubtitle
seachat.features.omnichannel.activeConversations
seachat.features.omnichannel.websiteChat
seachat.features.omnichannel.whatsappInquiry
seachat.features.omnichannel.instagramDM
seachat.features.omnichannel.conversationView
seachat.features.omnichannel.customerVia
seachat.features.omnichannel.customerMessage
seachat.features.omnichannel.agentResponse
seachat.features.omnichannel.agentMessage
seachat.features.omnichannel.customerViaWhatsapp
seachat.features.omnichannel.whatsappMessage
seachat.features.omnichannel.ctaTitle
seachat.features.omnichannel.ctaSubtitle
seachat.features.voiceAgents.featuresList
seachat.features.voiceAgents.natural.title
seachat.features.voiceAgents.natural.description
seachat.features.voiceAgents.speech.title
seachat.features.voiceAgents.speech.description
seachat.features.voiceAgents.synthesis.title
seachat.features.voiceAgents.synthesis.description
seachat.features.voiceAgents.support.title
seachat.features.voiceAgents.support.description
seachat.features.voiceAgents.multilanguage.title
seachat.features.voiceAgents.multilanguage.description
seachat.features.voiceAgents.routing.title
seachat.features.voiceAgents.routing.description
seachat.features.voiceAgents.capabilities.service.title
seachat.features.voiceAgents.capabilities.service.description
seachat.features.voiceAgents.capabilities.appointments.title
seachat.features.voiceAgents.capabilities.appointments.description
seachat.features.voiceAgents.capabilities.orders.title
seachat.features.voiceAgents.capabilities.orders.description
seachat.features.voiceAgents.capabilities.support.title
seachat.features.voiceAgents.capabilities.support.description
seachat.features.voiceAgents.title
seachat.features.voiceAgents.subtitle
seachat.features.voiceAgents.capabilitiesTitle
seachat.features.voiceAgents.capabilitiesSubtitle
seachat.features.voiceAgents.performanceTitle
seachat.features.voiceAgents.performanceSubtitle
seachat.features.voiceAgents.accuracyRate
seachat.features.voiceAgents.avgDuration
seachat.features.voiceAgents.experienceTitle
seachat.features.voiceAgents.experienceSubtitle
seachat.features.voiceAgents.sampleTitle
seachat.features.voiceAgents.voiceAgent
seachat.features.voiceAgents.agentGreeting
seachat.features.voiceAgents.customer
seachat.features.voiceAgents.customerQuestion
seachat.features.voiceAgents.agentResponse
seachat.features.voiceAgents.playDemo
seachat.features.voiceAgents.moreSamples
seachat.features.voiceAgents.featuresTitle
seachat.features.voiceAgents.ctaTitle
seachat.features.voiceAgents.ctaSubtitle
seachat.integrations.calendar.customerRequest
seachat.integrations.calendar.aiResponse1
seachat.integrations.calendar.aiResponse2
seachat.solutions.ecommerce.features.orders.title
seachat.solutions.ecommerce.features.orders.description
seachat.solutions.ecommerce.features.orders.benefits.status
seachat.solutions.ecommerce.features.orders.benefits.shipping
seachat.solutions.ecommerce.features.orders.benefits.returns
seachat.solutions.ecommerce.features.orders.benefits.inventory
seachat.solutions.ecommerce.features.accounts.title
seachat.solutions.ecommerce.features.accounts.description
seachat.solutions.ecommerce.features.accounts.benefits.recovery
seachat.solutions.ecommerce.features.accounts.benefits.updates
seachat.solutions.ecommerce.features.accounts.benefits.subscriptions
seachat.solutions.ecommerce.features.accounts.benefits.billing
seachat.solutions.ecommerce.features.recommendations.title
seachat.solutions.ecommerce.features.recommendations.description
seachat.solutions.ecommerce.features.recommendations.benefits.personalized
seachat.solutions.ecommerce.features.recommendations.benefits.cross
seachat.solutions.ecommerce.features.recommendations.benefits.upselling
seachat.solutions.ecommerce.features.recommendations.benefits.inventory
seachat.solutions.ecommerce.features.assistance.title
seachat.solutions.ecommerce.features.assistance.description
seachat.solutions.ecommerce.features.assistance.benefits.global
seachat.solutions.ecommerce.features.assistance.benefits.peak
seachat.solutions.ecommerce.features.assistance.benefits.holiday
seachat.solutions.ecommerce.features.assistance.benefits.mobile
seachat.solutions.ecommerce.integrations.shopify.name
seachat.solutions.ecommerce.integrations.shopify.description
seachat.solutions.ecommerce.integrations.woocommerce.name
seachat.solutions.ecommerce.integrations.woocommerce.description
seachat.solutions.ecommerce.integrations.magento.name
seachat.solutions.ecommerce.integrations.magento.description
seachat.solutions.ecommerce.integrations.bigcommerce.name
seachat.solutions.ecommerce.integrations.bigcommerce.description
seachat.solutions.ecommerce.integrations.stripe.name
seachat.solutions.ecommerce.integrations.stripe.description
seachat.solutions.ecommerce.integrations.paypal.name
seachat.solutions.ecommerce.integrations.paypal.description
seachat.solutions.ecommerce.metrics.conversion.label
seachat.solutions.ecommerce.metrics.conversion.description
seachat.solutions.ecommerce.metrics.abandonment.label
seachat.solutions.ecommerce.metrics.abandonment.description
seachat.solutions.ecommerce.metrics.resolution.label
seachat.solutions.ecommerce.metrics.resolution.description
seachat.solutions.ecommerce.metrics.satisfaction.label
seachat.solutions.ecommerce.metrics.satisfaction.description
seachat.solutions.ecommerce.title
seachat.solutions.ecommerce.subtitle
seachat.solutions.ecommerce.trialButton
seachat.solutions.ecommerce.demoButton
seachat.solutions.ecommerce.featuresTitle
seachat.solutions.ecommerce.featuresSubtitle
seachat.solutions.ecommerce.resultsTitle
seachat.solutions.ecommerce.resultsSubtitle
seachat.solutions.ecommerce.integrationsTitle
seachat.solutions.ecommerce.integrationsSubtitle
seachat.solutions.ecommerce.successTitle
seachat.solutions.ecommerce.challenge
seachat.solutions.ecommerce.challengeDescription
seachat.solutions.ecommerce.solution
seachat.solutions.ecommerce.solutionDescription
seachat.solutions.ecommerce.results
seachat.solutions.ecommerce.result1
seachat.solutions.ecommerce.result2
seachat.solutions.ecommerce.result3
seachat.solutions.ecommerce.chatPreview
seachat.solutions.ecommerce.customer
seachat.solutions.ecommerce.customerQuestion
seachat.solutions.ecommerce.seachatAI
seachat.solutions.ecommerce.aiResponse1
seachat.solutions.ecommerce.customerResponse
seachat.solutions.ecommerce.aiResponse2
seachat.solutions.ecommerce.ctaTitle
seachat.solutions.ecommerce.ctaSubtitle
seachat.solutions.ecommerce.ctaTrialButton
seachat.solutions.ecommerce.ctaDemoButton
seachat.solutions.education.features.student.title
seachat.solutions.education.features.student.description
seachat.solutions.education.features.student.benefits.support
seachat.solutions.education.features.student.benefits.enrollment
seachat.solutions.education.features.student.benefits.academic
seachat.solutions.education.features.student.benefits.technical
seachat.solutions.education.features.admin.title
seachat.solutions.education.features.admin.description
seachat.solutions.education.features.admin.benefits.scheduling
seachat.solutions.education.features.admin.benefits.events
seachat.solutions.education.features.admin.benefits.deadlines
seachat.solutions.education.features.admin.benefits.registration
seachat.solutions.education.features.stakeholder.title
seachat.solutions.education.features.stakeholder.description
seachat.solutions.education.features.stakeholder.benefits.portals
seachat.solutions.education.features.stakeholder.benefits.parent
seachat.solutions.education.features.stakeholder.benefits.faculty
seachat.solutions.education.features.stakeholder.benefits.staff
seachat.solutions.education.features.lms.title
seachat.solutions.education.features.lms.description
seachat.solutions.education.features.lms.benefits.connectivity
seachat.solutions.education.features.lms.benefits.grades
seachat.solutions.education.features.lms.benefits.assignments
seachat.solutions.education.features.lms.benefits.courses
seachat.solutions.education.useCases.enrollment.title
seachat.solutions.education.useCases.enrollment.description
seachat.solutions.education.useCases.enrollment.example
seachat.solutions.education.useCases.enrollment.outcome
seachat.solutions.education.useCases.academic.title
seachat.solutions.education.useCases.academic.description
seachat.solutions.education.useCases.academic.example
seachat.solutions.education.useCases.academic.outcome
seachat.solutions.education.useCases.campus.title
seachat.solutions.education.useCases.campus.description
seachat.solutions.education.useCases.campus.example
seachat.solutions.education.useCases.campus.outcome
seachat.solutions.education.useCases.financial.title
seachat.solutions.education.useCases.financial.description
seachat.solutions.education.useCases.financial.example
seachat.solutions.education.useCases.financial.outcome
seachat.solutions.education.metrics.admin.label
seachat.solutions.education.metrics.admin.description
seachat.solutions.education.metrics.satisfaction.label
seachat.solutions.education.metrics.satisfaction.description
seachat.solutions.education.metrics.response.label
seachat.solutions.education.metrics.response.description
seachat.solutions.education.metrics.enrollment.label
seachat.solutions.education.metrics.enrollment.description
seachat.solutions.education.integrations.canvas.name
seachat.solutions.education.integrations.canvas.description
seachat.solutions.education.integrations.blackboard.name
seachat.solutions.education.integrations.blackboard.description
seachat.solutions.education.integrations.moodle.name
seachat.solutions.education.integrations.moodle.description
seachat.solutions.education.integrations.google.name
seachat.solutions.education.integrations.google.description
seachat.solutions.education.integrations.zoom.name
seachat.solutions.education.integrations.zoom.description
seachat.solutions.education.integrations.teams.name
seachat.solutions.education.integrations.teams.description
seachat.solutions.education.integrations.sis.name
seachat.solutions.education.integrations.sis.description
seachat.solutions.education.integrations.library.name
seachat.solutions.education.integrations.library.description
seachat.solutions.education.stakeholders.students.title
seachat.solutions.education.stakeholders.students.description
seachat.solutions.education.stakeholders.students.features.courses
seachat.solutions.education.stakeholders.students.features.assignments
seachat.solutions.education.stakeholders.students.features.grades
seachat.solutions.education.stakeholders.students.features.campus
seachat.solutions.education.stakeholders.parents.title
seachat.solutions.education.stakeholders.parents.description
seachat.solutions.education.stakeholders.parents.features.progress
seachat.solutions.education.stakeholders.parents.features.payment
seachat.solutions.education.stakeholders.parents.features.events
seachat.solutions.education.stakeholders.parents.features.communication
seachat.solutions.education.stakeholders.faculty.title
seachat.solutions.education.stakeholders.faculty.description
seachat.solutions.education.stakeholders.faculty.features.management
seachat.solutions.education.stakeholders.faculty.features.inquiries
seachat.solutions.education.stakeholders.faculty.features.resources
seachat.solutions.education.stakeholders.faculty.features.technical
seachat.solutions.education.stakeholders.staff.title
seachat.solutions.education.stakeholders.staff.description
seachat.solutions.education.stakeholders.staff.features.automation
seachat.solutions.education.stakeholders.staff.features.information
seachat.solutions.education.stakeholders.staff.features.workflow
seachat.solutions.education.stakeholders.staff.features.reporting
seachat.solutions.education.title
seachat.solutions.education.subtitle
seachat.solutions.education.trialButton
seachat.solutions.education.demoButton
seachat.solutions.education.featuresTitle
seachat.solutions.education.featuresSubtitle
seachat.solutions.education.stakeholdersTitle
seachat.solutions.education.stakeholdersSubtitle
seachat.solutions.education.metricsTitle
seachat.solutions.education.metricsSubtitle
seachat.solutions.education.useCasesTitle
seachat.solutions.education.useCasesSubtitle
seachat.solutions.education.studentInquiry
seachat.solutions.education.seachatResponse
seachat.solutions.education.integrationsTitle
seachat.solutions.education.integrationsSubtitle
seachat.solutions.education.ctaTitle
seachat.solutions.education.ctaSubtitle
seachat.solutions.education.ctaTrialButton
seachat.solutions.education.ctaDemoButton
seachat.solutions.fintech.features.security.title
seachat.solutions.fintech.features.security.description
seachat.solutions.fintech.features.security.benefits.pci
seachat.solutions.fintech.features.security.benefits.fraud
seachat.solutions.fintech.features.security.benefits.transactions
seachat.solutions.fintech.features.security.benefits.identity
seachat.solutions.fintech.features.payment.title
seachat.solutions.fintech.features.payment.description
seachat.solutions.fintech.features.payment.benefits.tracking
seachat.solutions.fintech.features.payment.benefits.dispute
seachat.solutions.fintech.features.payment.benefits.refund
seachat.solutions.fintech.features.payment.benefits.methods
seachat.solutions.fintech.features.investment.title
seachat.solutions.fintech.features.investment.description
seachat.solutions.fintech.features.investment.benefits.insights
seachat.solutions.fintech.features.investment.benefits.portfolio
seachat.solutions.fintech.features.investment.benefits.risk
seachat.solutions.fintech.features.investment.benefits.recommendations
seachat.solutions.fintech.features.compliance.title
seachat.solutions.fintech.features.compliance.description
seachat.solutions.fintech.features.compliance.benefits.kyc
seachat.solutions.fintech.features.compliance.benefits.reporting
seachat.solutions.fintech.features.compliance.benefits.audit
seachat.solutions.fintech.features.compliance.benefits.protection
seachat.solutions.fintech.useCases.account.title
seachat.solutions.fintech.useCases.account.description
seachat.solutions.fintech.useCases.account.example
seachat.solutions.fintech.useCases.account.outcome
seachat.solutions.fintech.useCases.transaction.title
seachat.solutions.fintech.useCases.transaction.description
seachat.solutions.fintech.useCases.transaction.example
seachat.solutions.fintech.useCases.transaction.outcome
seachat.solutions.fintech.useCases.fraud.title
seachat.solutions.fintech.useCases.fraud.description
seachat.solutions.fintech.useCases.fraud.example
seachat.solutions.fintech.useCases.fraud.outcome
seachat.solutions.fintech.useCases.investment.title
seachat.solutions.fintech.useCases.investment.description
seachat.solutions.fintech.useCases.investment.example
seachat.solutions.fintech.useCases.investment.outcome
seachat.solutions.fintech.metrics.accuracy.label
seachat.solutions.fintech.metrics.accuracy.description
seachat.solutions.fintech.metrics.resolution.label
seachat.solutions.fintech.metrics.resolution.description
seachat.solutions.fintech.metrics.fraud.label
seachat.solutions.fintech.metrics.fraud.description
seachat.solutions.fintech.metrics.satisfaction.label
seachat.solutions.fintech.metrics.satisfaction.description
seachat.solutions.fintech.regulations.pci.name
seachat.solutions.fintech.regulations.pci.description
seachat.solutions.fintech.regulations.pci.status
seachat.solutions.fintech.regulations.sox.name
seachat.solutions.fintech.regulations.sox.description
seachat.solutions.fintech.regulations.sox.status
seachat.solutions.fintech.regulations.gdpr.name
seachat.solutions.fintech.regulations.gdpr.description
seachat.solutions.fintech.regulations.gdpr.status
seachat.solutions.fintech.regulations.kyc.name
seachat.solutions.fintech.regulations.kyc.description
seachat.solutions.fintech.regulations.kyc.status
seachat.solutions.fintech.regulations.ccpa.name
seachat.solutions.fintech.regulations.ccpa.description
seachat.solutions.fintech.regulations.ccpa.status
seachat.solutions.fintech.regulations.finra.name
seachat.solutions.fintech.regulations.finra.description
seachat.solutions.fintech.regulations.finra.status
seachat.solutions.fintech.title
seachat.solutions.fintech.subtitle
seachat.solutions.fintech.trialButton
seachat.solutions.fintech.demoButton
seachat.solutions.fintech.featuresTitle
seachat.solutions.fintech.featuresSubtitle
seachat.solutions.fintech.impactTitle
seachat.solutions.fintech.impactSubtitle
seachat.solutions.fintech.useCasesTitle
seachat.solutions.fintech.useCasesSubtitle
seachat.solutions.fintech.customerInquiry
seachat.solutions.fintech.seachatResponse
seachat.solutions.fintech.securityTitle
seachat.solutions.fintech.securitySubtitle
seachat.solutions.fintech.regulatoryTitle
seachat.solutions.fintech.ctaTitle
seachat.solutions.fintech.ctaSubtitle
seachat.solutions.fintech.ctaTrialButton
seachat.solutions.fintech.ctaDemoButton
seachat.solutions.healthcare.useCases.appointments.outcome
seachat.solutions.healthcare.useCases.prescriptions.outcome
seachat.solutions.healthcare.useCases.insurance.outcome
seachat.solutions.healthcare.useCases.symptoms.outcome
seachat.solutions.realEstate.features.search.title
seachat.solutions.realEstate.features.search.description
seachat.solutions.realEstate.features.search.benefits.matching
seachat.solutions.realEstate.features.search.benefits.insights
seachat.solutions.realEstate.features.search.benefits.neighborhood
seachat.solutions.realEstate.features.search.benefits.analysis
seachat.solutions.realEstate.features.showing.title
seachat.solutions.realEstate.features.showing.description
seachat.solutions.realEstate.features.showing.benefits.scheduling
seachat.solutions.realEstate.features.showing.benefits.availability
seachat.solutions.realEstate.features.showing.benefits.reminders
seachat.solutions.realEstate.features.showing.benefits.route
seachat.solutions.realEstate.features.leads.title
seachat.solutions.realEstate.features.leads.description
seachat.solutions.realEstate.features.leads.benefits.qualification
seachat.solutions.realEstate.features.leads.benefits.followup
seachat.solutions.realEstate.features.leads.benefits.crm
seachat.solutions.realEstate.features.leads.benefits.tracking
seachat.solutions.realEstate.features.communication.title
seachat.solutions.realEstate.features.communication.description
seachat.solutions.realEstate.features.communication.benefits.availability
seachat.solutions.realEstate.features.communication.benefits.updates
seachat.solutions.realEstate.features.communication.benefits.assistance
seachat.solutions.realEstate.features.communication.benefits.market
seachat.solutions.realEstate.useCases.property.title
seachat.solutions.realEstate.useCases.property.description
seachat.solutions.realEstate.useCases.property.example
seachat.solutions.realEstate.useCases.property.outcome
seachat.solutions.realEstate.useCases.showing.title
seachat.solutions.realEstate.useCases.showing.description
seachat.solutions.realEstate.useCases.showing.example
seachat.solutions.realEstate.useCases.showing.outcome
seachat.solutions.realEstate.useCases.market.title
seachat.solutions.realEstate.useCases.market.description
seachat.solutions.realEstate.useCases.market.example
seachat.solutions.realEstate.useCases.market.outcome
seachat.solutions.realEstate.useCases.transaction.title
seachat.solutions.realEstate.useCases.transaction.description
seachat.solutions.realEstate.useCases.transaction.example
seachat.solutions.realEstate.useCases.transaction.outcome
seachat.solutions.realEstate.metrics.leads.label
seachat.solutions.realEstate.metrics.leads.description
seachat.solutions.realEstate.metrics.response.label
seachat.solutions.realEstate.metrics.response.description
seachat.solutions.realEstate.metrics.showing.label
seachat.solutions.realEstate.metrics.showing.description
seachat.solutions.realEstate.metrics.satisfaction.label
seachat.solutions.realEstate.metrics.satisfaction.description
seachat.solutions.realEstate.propertyTypes.residential.name
seachat.solutions.realEstate.propertyTypes.residential.description
seachat.solutions.realEstate.propertyTypes.commercial.name
seachat.solutions.realEstate.propertyTypes.commercial.description
seachat.solutions.realEstate.propertyTypes.rental.name
seachat.solutions.realEstate.propertyTypes.rental.description
seachat.solutions.realEstate.propertyTypes.luxury.name
seachat.solutions.realEstate.propertyTypes.luxury.description
seachat.solutions.realEstate.propertyTypes.investment.name
seachat.solutions.realEstate.propertyTypes.investment.description
seachat.solutions.realEstate.propertyTypes.new.name
seachat.solutions.realEstate.propertyTypes.new.description
seachat.solutions.realEstate.integrations
seachat.solutions.realEstate.title
seachat.solutions.realEstate.subtitle
seachat.solutions.realEstate.trialButton
seachat.solutions.realEstate.demoButton
seachat.solutions.realEstate.featuresTitle
seachat.solutions.realEstate.featuresSubtitle
seachat.solutions.realEstate.metricsTitle
seachat.solutions.realEstate.metricsSubtitle
seachat.solutions.realEstate.propertyTypesTitle
seachat.solutions.realEstate.propertyTypesSubtitle
seachat.solutions.realEstate.useCasesTitle
seachat.solutions.realEstate.useCasesSubtitle
seachat.solutions.realEstate.clientInquiry
seachat.solutions.realEstate.seachatResponse
seachat.solutions.realEstate.integrationsTitle
seachat.solutions.realEstate.integrationsSubtitle
seachat.solutions.realEstate.leadCaptureTitle
seachat.solutions.realEstate.websiteVisitor
seachat.solutions.realEstate.visitorQuery
seachat.solutions.realEstate.seachatAI
seachat.solutions.realEstate.aiResponse
seachat.solutions.realEstate.visitorResponse
seachat.solutions.realEstate.systemAction
seachat.solutions.realEstate.leadCaptured
seachat.solutions.realEstate.ctaTitle
seachat.solutions.realEstate.ctaSubtitle
seachat.solutions.realEstate.ctaTrialButton
seachat.solutions.realEstate.ctaDemoButton
seachat.solutions.saas.features.technical.title
seachat.solutions.saas.features.technical.description
seachat.solutions.saas.features.technical.benefits.api
seachat.solutions.saas.features.technical.benefits.integration
seachat.solutions.saas.features.technical.benefits.troubleshooting
seachat.solutions.saas.features.technical.benefits.resources
seachat.solutions.saas.features.onboarding.title
seachat.solutions.saas.features.onboarding.description
seachat.solutions.saas.features.onboarding.benefits.tutorials
seachat.solutions.saas.features.onboarding.benefits.walkthroughs
seachat.solutions.saas.features.onboarding.benefits.setup
seachat.solutions.saas.features.onboarding.benefits.practices
seachat.solutions.saas.features.success.title
seachat.solutions.saas.features.success.description
seachat.solutions.saas.features.success.benefits.analytics
seachat.solutions.saas.features.success.benefits.adoption
seachat.solutions.saas.features.success.benefits.churn
seachat.solutions.saas.features.success.benefits.upselling
seachat.solutions.saas.features.security.title
seachat.solutions.saas.features.security.description
seachat.solutions.saas.features.security.benefits.documentation
seachat.solutions.saas.features.security.benefits.compliance
seachat.solutions.saas.features.security.benefits.protection
seachat.solutions.saas.features.security.benefits.audit
seachat.solutions.saas.useCases.api.title
seachat.solutions.saas.useCases.api.description
seachat.solutions.saas.useCases.api.example
seachat.solutions.saas.useCases.api.outcome
seachat.solutions.saas.useCases.feature.title
seachat.solutions.saas.useCases.feature.description
seachat.solutions.saas.useCases.feature.example
seachat.solutions.saas.useCases.feature.outcome
seachat.solutions.saas.useCases.billing.title
seachat.solutions.saas.useCases.billing.description
seachat.solutions.saas.useCases.billing.example
seachat.solutions.saas.useCases.billing.outcome
seachat.solutions.saas.useCases.performance.title
seachat.solutions.saas.useCases.performance.description
seachat.solutions.saas.useCases.performance.example
seachat.solutions.saas.useCases.performance.outcome
seachat.solutions.saas.metrics.tickets.label
seachat.solutions.saas.metrics.tickets.description
seachat.solutions.saas.metrics.onboarding.label
seachat.solutions.saas.metrics.onboarding.description
seachat.solutions.saas.metrics.adoption.label
seachat.solutions.saas.metrics.adoption.description
seachat.solutions.saas.metrics.churn.label
seachat.solutions.saas.metrics.churn.description
seachat.solutions.saas.types.b2b.title
seachat.solutions.saas.types.b2b.description
seachat.solutions.saas.types.b2b.features.tenant
seachat.solutions.saas.types.b2b.features.security
seachat.solutions.saas.types.b2b.features.api
seachat.solutions.saas.types.b2b.features.assistance
seachat.solutions.saas.types.developer.title
seachat.solutions.saas.types.developer.description
seachat.solutions.saas.types.developer.features.examples
seachat.solutions.saas.types.developer.features.documentation
seachat.solutions.saas.types.developer.features.debugging
seachat.solutions.saas.types.developer.features.community
seachat.solutions.saas.types.marketing.title
seachat.solutions.saas.types.marketing.description
seachat.solutions.saas.types.marketing.features.campaign
seachat.solutions.saas.types.marketing.features.analytics
seachat.solutions.saas.types.marketing.features.integration
seachat.solutions.saas.types.marketing.features.practices
seachat.solutions.saas.types.productivity.title
seachat.solutions.saas.types.productivity.description
seachat.solutions.saas.types.productivity.features.tutorials
seachat.solutions.saas.types.productivity.features.workflow
seachat.solutions.saas.types.productivity.features.team
seachat.solutions.saas.types.productivity.features.usage
seachat.solutions.saas.types.ecommerce.title
seachat.solutions.saas.types.ecommerce.description
seachat.solutions.saas.types.ecommerce.features.store
seachat.solutions.saas.types.ecommerce.features.payment
seachat.solutions.saas.types.ecommerce.features.theme
seachat.solutions.saas.types.ecommerce.features.performance
seachat.solutions.saas.types.analytics.title
seachat.solutions.saas.types.analytics.description
seachat.solutions.saas.types.analytics.features.dashboard
seachat.solutions.saas.types.analytics.features.data
seachat.solutions.saas.types.analytics.features.report
seachat.solutions.saas.types.analytics.features.visualization
seachat.solutions.saas.integrations
seachat.solutions.saas.title
seachat.solutions.saas.subtitle
seachat.solutions.saas.trialButton
seachat.solutions.saas.demoButton
seachat.solutions.saas.featuresTitle
seachat.solutions.saas.featuresSubtitle
seachat.solutions.saas.typesTitle
seachat.solutions.saas.typesSubtitle
seachat.solutions.saas.impactTitle
seachat.solutions.saas.impactSubtitle
seachat.solutions.saas.useCasesTitle
seachat.solutions.saas.useCasesSubtitle
seachat.solutions.saas.userQuestion
seachat.solutions.saas.seachatResponse
seachat.solutions.saas.integrationsTitle
seachat.solutions.saas.integrationsSubtitle
seachat.solutions.saas.successFlowTitle
seachat.solutions.saas.flow.onboarding.title
seachat.solutions.saas.flow.onboarding.description
seachat.solutions.saas.flow.adoption.title
seachat.solutions.saas.flow.adoption.description
seachat.solutions.saas.flow.monitoring.title
seachat.solutions.saas.flow.monitoring.description
seachat.solutions.saas.flow.growth.title
seachat.solutions.saas.flow.growth.description
seachat.solutions.saas.ctaTitle
seachat.solutions.saas.ctaSubtitle
seachat.solutions.saas.ctaTrialButton
seachat.solutions.saas.ctaDemoButton
seachat.solutions.smallBusiness.features.local.title
seachat.solutions.smallBusiness.features.local.description
seachat.solutions.smallBusiness.features.local.benefits.seo
seachat.solutions.smallBusiness.features.local.benefits.google
seachat.solutions.smallBusiness.features.local.benefits.reviews
seachat.solutions.smallBusiness.features.local.benefits.customer
seachat.solutions.smallBusiness.features.cost.title
seachat.solutions.smallBusiness.features.cost.description
seachat.solutions.smallBusiness.features.cost.benefits.free
seachat.solutions.smallBusiness.features.cost.benefits.setup
seachat.solutions.smallBusiness.features.cost.benefits.pricing
seachat.solutions.smallBusiness.features.cost.benefits.roi
seachat.solutions.smallBusiness.features.setup.title
seachat.solutions.smallBusiness.features.setup.description
seachat.solutions.smallBusiness.features.setup.benefits.minutes
seachat.solutions.smallBusiness.features.setup.benefits.templates
seachat.solutions.smallBusiness.features.setup.benefits.integration
seachat.solutions.smallBusiness.features.setup.benefits.activation
seachat.solutions.smallBusiness.features.personal.title
seachat.solutions.smallBusiness.features.personal.description
seachat.solutions.smallBusiness.features.personal.benefits.history
seachat.solutions.smallBusiness.features.personal.benefits.notes
seachat.solutions.smallBusiness.features.personal.benefits.relationship
seachat.solutions.smallBusiness.features.personal.benefits.community
seachat.solutions.smallBusiness.types.retail.title
seachat.solutions.smallBusiness.types.retail.description
seachat.solutions.smallBusiness.types.retail.features.product
seachat.solutions.smallBusiness.types.retail.features.hours
seachat.solutions.smallBusiness.types.retail.features.inventory
seachat.solutions.smallBusiness.types.retail.features.appointment
seachat.solutions.smallBusiness.types.restaurants.title
seachat.solutions.smallBusiness.types.restaurants.description
seachat.solutions.smallBusiness.types.restaurants.features.menu
seachat.solutions.smallBusiness.types.restaurants.features.reservations
seachat.solutions.smallBusiness.types.restaurants.features.takeout
seachat.solutions.smallBusiness.types.restaurants.features.dietary
seachat.solutions.smallBusiness.types.professional.title
seachat.solutions.smallBusiness.types.professional.description
seachat.solutions.smallBusiness.types.professional.features.consultation
seachat.solutions.smallBusiness.types.professional.features.service
seachat.solutions.smallBusiness.types.professional.features.documents
seachat.solutions.smallBusiness.types.professional.features.followup
seachat.solutions.smallBusiness.types.health.title
seachat.solutions.smallBusiness.types.health.description
seachat.solutions.smallBusiness.types.health.features.appointment
seachat.solutions.smallBusiness.types.health.features.class
seachat.solutions.smallBusiness.types.health.features.membership
seachat.solutions.smallBusiness.types.health.features.consultations
seachat.solutions.smallBusiness.types.home.title
seachat.solutions.smallBusiness.types.home.description
seachat.solutions.smallBusiness.types.home.features.quotes
seachat.solutions.smallBusiness.types.home.features.scheduling
seachat.solutions.smallBusiness.types.home.features.emergency
seachat.solutions.smallBusiness.types.home.features.followup
seachat.solutions.smallBusiness.types.creative.title
seachat.solutions.smallBusiness.types.creative.description
seachat.solutions.smallBusiness.types.creative.features.portfolio
seachat.solutions.smallBusiness.types.creative.features.quotes
seachat.solutions.smallBusiness.types.creative.features.booking
seachat.solutions.smallBusiness.types.creative.features.consultations
seachat.solutions.smallBusiness.useCases.inquiries.title
seachat.solutions.smallBusiness.useCases.inquiries.description
seachat.solutions.smallBusiness.useCases.inquiries.example
seachat.solutions.smallBusiness.useCases.inquiries.outcome
seachat.solutions.smallBusiness.useCases.booking.title
seachat.solutions.smallBusiness.useCases.booking.description
seachat.solutions.smallBusiness.useCases.booking.example
seachat.solutions.smallBusiness.useCases.booking.outcome
seachat.solutions.smallBusiness.useCases.product.title
seachat.solutions.smallBusiness.useCases.product.description
seachat.solutions.smallBusiness.useCases.product.example
seachat.solutions.smallBusiness.useCases.product.outcome
seachat.solutions.smallBusiness.useCases.directions.title
seachat.solutions.smallBusiness.useCases.directions.description
seachat.solutions.smallBusiness.useCases.directions.example
seachat.solutions.smallBusiness.useCases.directions.outcome
seachat.solutions.smallBusiness.metrics.inquiries.label
seachat.solutions.smallBusiness.metrics.inquiries.description
seachat.solutions.smallBusiness.metrics.bookings.label
seachat.solutions.smallBusiness.metrics.bookings.description
seachat.solutions.smallBusiness.metrics.time.label
seachat.solutions.smallBusiness.metrics.time.description
seachat.solutions.smallBusiness.metrics.satisfaction.label
seachat.solutions.smallBusiness.metrics.satisfaction.description
seachat.solutions.smallBusiness.affordableFeatures
seachat.solutions.smallBusiness.title
seachat.solutions.smallBusiness.subtitle
seachat.solutions.smallBusiness.startButton
seachat.solutions.smallBusiness.demoButton
seachat.solutions.smallBusiness.featuresTitle
seachat.solutions.smallBusiness.featuresSubtitle
seachat.solutions.smallBusiness.typesTitle
seachat.solutions.smallBusiness.typesSubtitle
seachat.solutions.smallBusiness.affordableTitle
seachat.solutions.smallBusiness.affordableSubtitle
seachat.solutions.smallBusiness.pricingTitle
seachat.solutions.smallBusiness.pricing.free.title
seachat.solutions.smallBusiness.pricing.free.period
seachat.solutions.smallBusiness.pricing.free.agent
seachat.solutions.smallBusiness.pricing.free.conversations
seachat.solutions.smallBusiness.pricing.free.widget
seachat.solutions.smallBusiness.pricing.free.support
seachat.solutions.smallBusiness.pricing.starter.title
seachat.solutions.smallBusiness.pricing.starter.period
seachat.solutions.smallBusiness.pricing.starter.everything
seachat.solutions.smallBusiness.pricing.starter.ai
seachat.solutions.smallBusiness.pricing.starter.analytics
seachat.solutions.smallBusiness.pricing.starter.priority
seachat.solutions.smallBusiness.resultsTitle
seachat.solutions.smallBusiness.resultsSubtitle
seachat.solutions.smallBusiness.scenariosTitle
seachat.solutions.smallBusiness.scenariosSubtitle
seachat.solutions.smallBusiness.customerQuestion
seachat.solutions.smallBusiness.seachatResponse
seachat.solutions.smallBusiness.ctaTitle
seachat.solutions.smallBusiness.ctaSubtitle
seachat.solutions.smallBusiness.ctaStartButton
seachat.solutions.smallBusiness.ctaDemoButton
seachat.solutions.travel.features.booking.title
seachat.solutions.travel.features.booking.description
seachat.solutions.travel.features.booking.benefits.availability
seachat.solutions.travel.features.booking.benefits.comparisons
seachat.solutions.travel.features.booking.benefits.modifications
seachat.solutions.travel.features.booking.benefits.cancellation
seachat.solutions.travel.features.planning.title
seachat.solutions.travel.features.planning.description
seachat.solutions.travel.features.planning.benefits.insights
seachat.solutions.travel.features.planning.benefits.itinerary
seachat.solutions.travel.features.planning.benefits.recommendations
seachat.solutions.travel.features.planning.benefits.weather
seachat.solutions.travel.features.support.title
seachat.solutions.travel.features.support.description
seachat.solutions.travel.features.support.benefits.timezone
seachat.solutions.travel.features.support.benefits.emergency
seachat.solutions.travel.features.support.benefits.updates
seachat.solutions.travel.features.support.benefits.multilanguage
seachat.solutions.travel.features.management.title
seachat.solutions.travel.features.management.description
seachat.solutions.travel.features.management.benefits.tracking
seachat.solutions.travel.features.management.benefits.documents
seachat.solutions.travel.features.management.benefits.reminders
seachat.solutions.travel.features.management.benefits.loyalty
seachat.solutions.travel.useCases.flight.title
seachat.solutions.travel.useCases.flight.description
seachat.solutions.travel.useCases.flight.example
seachat.solutions.travel.useCases.flight.outcome
seachat.solutions.travel.useCases.disruptions.title
seachat.solutions.travel.useCases.disruptions.description
seachat.solutions.travel.useCases.disruptions.example
seachat.solutions.travel.useCases.disruptions.outcome
seachat.solutions.travel.useCases.destination.title
seachat.solutions.travel.useCases.destination.description
seachat.solutions.travel.useCases.destination.example
seachat.solutions.travel.useCases.destination.outcome
seachat.solutions.travel.useCases.documentation.title
seachat.solutions.travel.useCases.documentation.description
seachat.solutions.travel.useCases.documentation.example
seachat.solutions.travel.useCases.documentation.outcome
seachat.solutions.travel.metrics.booking.label
seachat.solutions.travel.metrics.booking.description
seachat.solutions.travel.metrics.satisfaction.label
seachat.solutions.travel.metrics.satisfaction.description
seachat.solutions.travel.metrics.call.label
seachat.solutions.travel.metrics.call.description
seachat.solutions.travel.metrics.resolution.label
seachat.solutions.travel.metrics.resolution.description
seachat.solutions.travel.services.airlines.title
seachat.solutions.travel.services.airlines.description
seachat.solutions.travel.services.airlines.features.status
seachat.solutions.travel.services.airlines.features.seat
seachat.solutions.travel.services.airlines.features.baggage
seachat.solutions.travel.services.airlines.features.loyalty
seachat.solutions.travel.services.hotels.title
seachat.solutions.travel.services.hotels.description
seachat.solutions.travel.services.hotels.features.booking
seachat.solutions.travel.services.hotels.features.amenity
seachat.solutions.travel.services.hotels.features.requests
seachat.solutions.travel.services.hotels.features.loyalty
seachat.solutions.travel.services.agencies.title
seachat.solutions.travel.services.agencies.description
seachat.solutions.travel.services.agencies.features.deals
seachat.solutions.travel.services.agencies.features.itineraries
seachat.solutions.travel.services.agencies.features.groups
seachat.solutions.travel.services.agencies.features.insurance
seachat.solutions.travel.services.car.title
seachat.solutions.travel.services.car.description
seachat.solutions.travel.services.car.features.availability
seachat.solutions.travel.services.car.features.locations
seachat.solutions.travel.services.car.features.insurance
seachat.solutions.travel.services.car.features.roadside
seachat.solutions.travel.services.cruise.title
seachat.solutions.travel.services.cruise.description
seachat.solutions.travel.services.cruise.features.cabin
seachat.solutions.travel.services.cruise.features.shore
seachat.solutions.travel.services.cruise.features.dining
seachat.solutions.travel.services.cruise.features.entertainment
seachat.solutions.travel.services.tour.title
seachat.solutions.travel.services.tour.description
seachat.solutions.travel.services.tour.features.availability
seachat.solutions.travel.services.tour.features.sizes
seachat.solutions.travel.services.tour.features.equipment
seachat.solutions.travel.services.tour.features.guides
seachat.solutions.travel.integrations
seachat.solutions.travel.title
seachat.solutions.travel.subtitle
seachat.solutions.travel.trialButton
seachat.solutions.travel.demoButton
seachat.solutions.travel.featuresTitle
seachat.solutions.travel.featuresSubtitle
seachat.solutions.travel.servicesTitle
seachat.solutions.travel.servicesSubtitle
seachat.solutions.travel.impactTitle
seachat.solutions.travel.impactSubtitle
seachat.solutions.travel.useCasesTitle
seachat.solutions.travel.useCasesSubtitle
seachat.solutions.travel.travelerRequest
seachat.solutions.travel.seachatResponse
seachat.solutions.travel.integrationsTitle
seachat.solutions.travel.integrationsSubtitle
seachat.solutions.travel.bookingFlowTitle
seachat.solutions.travel.flow.inquiry.title
seachat.solutions.travel.flow.inquiry.description
seachat.solutions.travel.flow.search.title
seachat.solutions.travel.flow.search.description
seachat.solutions.travel.flow.assistance.title
seachat.solutions.travel.flow.assistance.description
seachat.solutions.travel.flow.confirmation.title
seachat.solutions.travel.flow.confirmation.description
seachat.solutions.travel.ctaTitle
seachat.solutions.travel.ctaSubtitle
seachat.solutions.travel.ctaTrialButton
seachat.solutions.travel.ctaDemoButton
```


## Hardcoded Strings Summary


Found 3776 potential hardcoded strings across components:

- **File**: src/App.tsx
  **Text**: "Seasalt.ai - Omni-Channel Contact Center for Small Businesses"
  **Context**: `    <div className="min-h-screen bg-white">\n      <SEOHelmet \n        title="Seasalt.ai - Omni-Cha...`

- **File**: src/components/BlogTableOfContents.tsx
  **Text**: "Table of Contents"
  **Context**: `        <div className="flex items-center mb-3 pb-2 border-b border-gray-100">\n          <ChevronRi...`

- **File**: src/components/BlogTableOfContents.tsx
  **Text**: "Table of Contents"
  **Context**: `h3 className="text-sm font-semibold text-gray-900">Table of Contents</h3>\n        </div>\n        \...`

- **File**: src/components/Comparison.tsx
  **Text**: "Genesys Cloud CX"
  **Context**: `    },\n    {\n      name: 'Genesys Cloud CX',\n      startingPrice: t('comparison.competitors.genes...`

- **File**: src/components/Comparison.tsx
  **Text**: "Google Voice"
  **Context**: `    },\n    {\n      name: 'Google Voice',\n      startingPrice: t('comparison.competitors.googleVoi...`

- **File**: src/components/Footer.tsx
  **Text**: "+1 (SMB)-AI-AGENT"
  **Context**: `              <div className="flex items-center text-gray-300">\n                <Phone className="h...`

- **File**: src/components/Footer.tsx
  **Text**: "info@seasalt.ai"
  **Context**: `              <div className="flex items-center text-gray-300">\n                <Mail className="h-...`

- **File**: src/components/Footer.tsx
  **Text**: "Seattle, WA"
  **Context**: `              <div className="flex items-center text-gray-300">\n                <MapPin className="...`

- **File**: src/components/Footer.tsx
  **Text**: "🌍"
  **Context**: `                {t('footer.compliance.hipaa')}\n              </Link>\n              <span>🌍 {t('fo...`

- **File**: src/components/Footer.tsx
  **Text**: "Made with"
  **Context**: `          </div>\n          <div className="text-center mt-4">\n            <p className="text-gray-...`


... and 3766 more. See hardcoded-strings.json for complete list.


## Recommendations for Phase 2.1


### 1. Add missing translation keys to base language (HIGH Priority)
**Category**: Translation Structure
**Description**: 1086 keys used in components but missing from en.json
**Action**: Add these keys to public/locales/en.json: industriesData.ecommerce.benefits.0, industriesData.ecommerce.benefits.1, industriesData.ecommerce.benefits.2, industriesData.ecommerce.benefits.3, industriesData.healthcare.benefits.0...


### 2. Replace hardcoded strings with translation keys (HIGH Priority)
**Category**: Hardcoded Strings
**Description**: Found 3776 hardcoded strings that should be internationalized
**Action**: Review and replace hardcoded strings with t() function calls


### 3. Complete translations for under-covered languages (MEDIUM Priority)
**Category**: Translation Completeness
**Description**: 18 languages have less than 80% translation coverage
**Action**: Priority languages to complete: pl, pt, ru


### 4. Organize translations by page/component sections (MEDIUM Priority)
**Category**: Organization
**Description**: Current translation structure should be organized by page and component
**Action**: Group translation keys by logical page sections (home, features, pricing, etc.)


## Next Steps

1. **Address High Priority Items**: Focus on missing translation keys and hardcoded strings
2. **Complete Base Language**: Ensure all used keys exist in en.json
3. **Organize Translation Structure**: Group keys by page/component sections
4. **Update Components**: Replace hardcoded strings with t() calls
5. **Cross-Language Sync**: Update all language files with missing keys

---
*This report was generated by the SeaMeet I18n Analysis Script*
