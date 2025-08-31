# I18n Translation Coverage Analysis Report

Generated: 2025-08-30T15:29:03.754Z

## Executive Summary

- **Languages Analyzed**: 20
- **Base Language (en) Keys**: 5489
- **Components Analyzed**: 210
- **Translation Coverage**: 70.76%
- **Hardcoded Strings Found**: 2435

|----------|------------|------------------|--------|
| ar | 909 | 16.10% | ❌ Incomplete |
| de | 887 | 15.70% | ❌ Incomplete |
| en | 5489 | 100.00% | ✅ Good |
| es | 835 | 14.76% | ❌ Incomplete |
| fa | 755 | 13.35% | ❌ Incomplete |
| fil | 739 | 13.04% | ❌ Incomplete |
| fr | 739 | 13.04% | ❌ Incomplete |
| hi | 690 | 12.15% | ❌ Incomplete |
| id | 690 | 12.15% | ❌ Incomplete |
| ja | 690 | 12.17% | ❌ Incomplete |
| ko | 690 | 12.15% | ❌ Incomplete |
| ms | 690 | 12.15% | ❌ Incomplete |
| pl | 676 | 11.90% | ❌ Incomplete |
| pt | 676 | 11.90% | ❌ Incomplete |
| ru | 676 | 11.90% | ❌ Incomplete |
| ta | 739 | 13.04% | ❌ Incomplete |
| th | 739 | 13.04% | ❌ Incomplete |
| vi | 739 | 13.04% | ❌ Incomplete |
| zh-CN | 802 | 14.19% | ❌ Incomplete |
| zh-TW | 5585 | 99.98% | ✅ Good |

## Priority Actions Required

### 1. Add missing translation keys to base language
**Category**: Translation Structure
**Description**: 2024 keys used in components but missing from en.json
**Action**: Add these keys to public/locales/en.json: industriesData.ecommerce.benefits.0, industriesData.ecommerce.benefits.1, industriesData.ecommerce.benefits.2, industriesData.ecommerce.benefits.3, industriesData.healthcare.benefits.0...

### 2. Replace hardcoded strings with translation keys
**Category**: Hardcoded Strings
**Description**: Found 2435 hardcoded strings that should be internationalized
**Action**: Review and replace hardcoded strings with t() function calls


The following keys are used in components but missing from the base language file:

```
industriesData.ecommerce.benefits.1
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
channels.sms.hero.title.prefix
channels.sms.hero.title.highlight
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
seachat.solutions.realEstate.integrations
seachat.solutions.saas.integrations
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
seax.channelTemplate.pricing.title
seax.channelTemplate.pricing.subtitle
seax.channelTemplate.pricing.setup
seax.channelTemplate.pricing.monthly
seax.channelTemplate.pricing.perMessage
seax.realTimeDashboard.cards.deliveryValue
seax.realTimeDashboard.cards.hourlyValue
seax.features.core.bulkMessaging.benefits
seax.features.core.aiFollowup.benefits
seax.features.core.analytics.benefits
seax.features.core.compliance.benefits
seax.features.core.collaboration.benefits
seax.features.core.scale.benefits
seax.resources.categories.gettingStarted.title
seax.resources.categories.gettingStarted.description
seax.resources.categories.gettingStarted.quickStart.title
seax.resources.categories.gettingStarted.quickStart.description
seax.resources.categories.gettingStarted.quickStart.type
seax.resources.categories.gettingStarted.quickStart.readTime
seax.resources.categories.gettingStarted.bestPractices.title
seax.resources.categories.gettingStarted.bestPractices.description
seax.resources.categories.gettingStarted.bestPractices.type
seax.resources.categories.gettingStarted.bestPractices.readTime
seax.resources.categories.gettingStarted.apiIntegration.title
seax.resources.categories.gettingStarted.apiIntegration.description
seax.resources.categories.gettingStarted.apiIntegration.type
seax.resources.categories.gettingStarted.apiIntegration.readTime
seax.resources.categories.videos.title
seax.resources.categories.videos.description
seax.resources.categories.videos.firstCampaign.title
seax.resources.categories.videos.firstCampaign.description
seax.resources.categories.videos.firstCampaign.type
seax.resources.categories.videos.firstCampaign.duration
seax.resources.categories.videos.targeting.title
seax.resources.categories.videos.targeting.description
seax.resources.categories.videos.targeting.type
seax.resources.categories.videos.targeting.duration
seax.resources.categories.videos.analytics.title
seax.resources.categories.videos.analytics.description
seax.resources.categories.videos.analytics.type
seax.resources.categories.videos.analytics.duration
seax.resources.categories.documentation.title
seax.resources.categories.documentation.description
seax.resources.categories.documentation.apiReference.title
seax.resources.categories.documentation.apiReference.description
seax.resources.categories.documentation.apiReference.type
seax.resources.categories.documentation.apiReference.badge
seax.resources.categories.documentation.webhook.title
seax.resources.categories.documentation.webhook.description
seax.resources.categories.documentation.webhook.type
seax.resources.categories.documentation.webhook.badge
seax.resources.categories.documentation.sdk.title
seax.resources.categories.documentation.sdk.description
seax.resources.categories.documentation.sdk.type
seax.resources.categories.documentation.sdk.badge
seax.resources.categories.caseStudies.title
seax.resources.categories.caseStudies.description
seax.resources.categories.caseStudies.ecommerce.title
seax.resources.categories.caseStudies.ecommerce.description
seax.resources.categories.caseStudies.ecommerce.type
seax.resources.categories.caseStudies.ecommerce.industry
seax.resources.categories.caseStudies.healthcare.title
seax.resources.categories.caseStudies.healthcare.description
seax.resources.categories.caseStudies.healthcare.type
seax.resources.categories.caseStudies.healthcare.industry
seax.resources.categories.caseStudies.fintech.title
seax.resources.categories.caseStudies.fintech.description
seax.resources.categories.caseStudies.fintech.type
seax.resources.categories.caseStudies.fintech.industry
seax.resources.downloads.playbook.title
seax.resources.downloads.playbook.description
seax.resources.downloads.playbook.format
seax.resources.downloads.playbook.size
seax.resources.downloads.compliance.title
seax.resources.downloads.compliance.description
seax.resources.downloads.compliance.format
seax.resources.downloads.compliance.size
seax.resources.downloads.templates.title
seax.resources.downloads.templates.description
seax.resources.downloads.templates.format
seax.resources.downloads.templates.size
seax.resources.seo.title
seax.resources.seo.description
seax.resources.hero.title
seax.resources.hero.titleHighlight
seax.resources.hero.description
seax.resources.hero.getSupport
seax.resources.hero.browseApiDocs
seax.resources.explore.title
seax.resources.explore.subtitle
seax.resources.common.readMore
seax.resources.downloads.title
seax.resources.downloads.subtitle
seax.resources.downloads.download
seax.resources.support.title
seax.resources.support.subtitle
seax.resources.support.liveChat.title
seax.resources.support.liveChat.description
seax.resources.support.liveChat.action
seax.resources.support.knowledgeBase.title
seax.resources.support.knowledgeBase.description
seax.resources.support.knowledgeBase.action
seax.resources.support.community.title
seax.resources.support.community.description
seax.resources.support.community.action
seax.resources.cta.title
seax.resources.cta.subtitle
seax.resources.cta.signUp
seax.resources.cta.viewPricing
seax.channels.smsLocal.features.items
seax.channels.smsLocal.useCases.items
seax.channels.smsLocal.pricing
seax.channels.smsShortCode.features.items
seax.channels.smsShortCode.useCases.items
seax.channels.smsShortCode.pricing
seax.channels.smsTollFree.features.items
seax.channels.smsTollFree.useCases.items
seax.channels.smsTollFree.pricing
seax.channels.voice.features.items
seax.channels.voice.useCases.items
seax.channels.voice.pricing
```


## Hardcoded Strings Summary

Found 2435 potential hardcoded strings across components:


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

... and 2425 more. See hardcoded-strings.json for complete list.


## Recommendations for Phase 2.1


### 1. Add missing translation keys to base language (HIGH Priority)
**Category**: Translation Structure
**Description**: 2024 keys used in components but missing from en.json
**Action**: Add these keys to public/locales/en.json: industriesData.ecommerce.benefits.0, industriesData.ecommerce.benefits.1, industriesData.ecommerce.benefits.2, industriesData.ecommerce.benefits.3, industriesData.healthcare.benefits.0...


### 2. Replace hardcoded strings with translation keys (HIGH Priority)
**Category**: Hardcoded Strings
**Description**: Found 2435 hardcoded strings that should be internationalized
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
