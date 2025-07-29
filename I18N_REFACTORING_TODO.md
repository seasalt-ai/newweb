# i18n Refactoring TODO List

## Status Legend
- ✅ **DONE** - Fully refactored to use i18n translations
- 🔄 **IN PROGRESS** - Partially refactored or currently being worked on
- ❌ **TODO** - Not started yet

## Completed Files ✅
- [x] `src/seax/data/seaxSolutions.ts` ✅ **DONE**
- [x] `src/seax/data/seaxFeatures.ts` ✅ **DONE** 
- [x] `src/data/industriesData.ts` ✅ **DONE**
- [x] `src/data/solutionsData.ts` ✅ **DONE**
- [x] `src/data/productsData.ts` ✅ **DONE**
- [x] `src/components/Header.tsx` ✅ **DONE** (partially - main channels/competitors)
- [x] `src/seavoice/components/Footer.tsx` ✅ **DONE** (partially - platform links)
- [x] `src/seachat/components/Header.tsx` ✅ **DONE** - SeaChat header navigation
- [x] `src/seachat/components/Footer.tsx` ✅ **DONE** - SeaChat footer links  
- [x] `src/seax/components/Header.tsx` ✅ **DONE** - SeaX header navigation
- [x] `src/seax/components/Footer.tsx` ✅ **DONE** - SeaX footer links
- [x] `src/seavoice/components/Header.tsx` ✅ **DONE** - SeaVoice header navigation
- [x] `src/constants/languages.ts` ✅ **DONE** - Language configuration data
- [x] `src/components/Hero.tsx` ✅ **DONE** - Main hero section (already had i18n)
- [x] `src/components/Features.tsx` ✅ **DONE** - Main features section
- [x] `src/components/UseCases.tsx` ✅ **DONE** - Use cases section
- [x] `src/components/Channels.tsx` ✅ **DONE** - Channels overview
- [x] `src/components/Comparison.tsx` ✅ **DONE** - Comparison components
- [x] `src/components/HowItWorks.tsx` ✅ **DONE** - How it works section

## Priority 1: Core Data Files (High Impact) 
- [x] `src/constants/languages.ts` ✅ **DONE** - Language configuration data

## Priority 2: Header/Footer Components (High Visibility)
- [x] `src/seachat/components/Header.tsx` ✅ **DONE** - SeaChat header navigation
- [x] `src/seachat/components/Footer.tsx` ✅ **DONE** - SeaChat footer links  
- [x] `src/seax/components/Header.tsx` ✅ **DONE** - SeaX header navigation
- [x] `src/seax/components/Footer.tsx` ✅ **DONE** - SeaX footer links
- [x] `src/seavoice/components/Header.tsx` ✅ **DONE** - SeaVoice header navigation

## Priority 3: Main Page Components (Medium Impact)
- [x] `src/components/Hero.tsx` ✅ **DONE** - Main hero section (already had i18n)
- [x] `src/components/Features.tsx` ✅ **DONE** - Main features section
- [x] `src/components/UseCases.tsx` ✅ **DONE** - Use cases section
- [x] `src/components/Channels.tsx` ✅ **DONE** - Channels overview
- [x] `src/components/Comparison.tsx` ✅ **DONE** - Comparison components
- [x] `src/components/HowItWorks.tsx` ✅ **DONE** - How it works section

## Priority 4: SeaChat Components 
- [ ] `src/seachat/components/Hero.tsx` ❌ **TODO**
- [ ] `src/seachat/components/KeyFeatures.tsx` ❌ **TODO**
- [ ] `src/seachat/components/FeatureTabs.tsx` ❌ **TODO**
- [ ] `src/seachat/components/OmnichannelDemo.tsx` ❌ **TODO**
- [ ] `src/seachat/components/KnowledgeBase.tsx` ❌ **TODO**
- [ ] `src/seachat/components/UseCases.tsx` ❌ **TODO**
- [ ] `src/seachat/components/Testimonials.tsx` ❌ **TODO**
- [ ] `src/seachat/components/PricingSection.tsx` ❌ **TODO**

## Priority 5: Page-Level Components
### SeaChat Pages
- [ ] `src/seachat/pages/PricingPage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/features/HumanAgentsPage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/features/AIAutomationPage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/features/AdvancedAIPage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/features/VoiceAgentsPage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/features/AnalyticsPage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/features/OmnichannelPage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/features/APIPage.tsx` ❌ **TODO**

### SeaChat Integration Pages
- [ ] `src/seachat/pages/integrations/WebsitesPage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/integrations/CRMPage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/integrations/EcommercePage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/integrations/SocialMediaPage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/integrations/CommunicationPage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/integrations/MarketingPage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/integrations/CalendarPage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/integrations/IntegrationAPIPage.tsx` ❌ **TODO**

### SeaChat Solution Pages
- [ ] `src/seachat/pages/solutions/EcommerceSolutionPage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/solutions/HealthcarePage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/solutions/FintechPage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/solutions/EducationPage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/solutions/RealEstatePage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/solutions/TravelPage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/solutions/SaaSPage.tsx` ❌ **TODO**
- [ ] `src/seachat/pages/solutions/SmallBusinessPage.tsx` ❌ **TODO**

## Priority 6: SeaX Components & Pages
### SeaX Core Pages
- [ ] `src/seax/pages/SeaXHome.tsx` ❌ **TODO**
- [ ] `src/seax/pages/Features.tsx` ❌ **TODO**
- [ ] `src/seax/pages/Pricing.tsx` ❌ **TODO**
- [ ] `src/seax/pages/Resources.tsx` ❌ **TODO**
- [ ] `src/seax/pages/HowItWorks.tsx` ❌ **TODO**
- [ ] `src/seax/pages/ContactSales.tsx` ❌ **TODO**

### SeaX Solution Pages
- [ ] `src/seax/pages/solutions/LeadGeneration.tsx` ❌ **TODO**
- [ ] `src/seax/pages/solutions/MarketingAutomation.tsx` ❌ **TODO**
- [ ] `src/seax/pages/solutions/CustomerEngagement.tsx` ❌ **TODO**
- [ ] `src/seax/pages/solutions/AppointmentReminders.tsx` ❌ **TODO**
- [ ] `src/seax/pages/solutions/EmergencyAlerts.tsx` ❌ **TODO**

### SeaX Industry Pages
- [ ] `src/seax/pages/industries/Healthcare.tsx` ❌ **TODO**
- [ ] `src/seax/pages/industries/FinancialServices.tsx` ❌ **TODO**
- [ ] `src/seax/pages/industries/EcommerceRetail.tsx` ❌ **TODO**
- [ ] `src/seax/pages/industries/RealEstate.tsx` ❌ **TODO**
- [ ] `src/seax/pages/industries/PoliticalCampaigns.tsx` ❌ **TODO**

### SeaX Channel Pages
- [ ] `src/seax/pages/channels/SMS.tsx` ❌ **TODO**
- [ ] `src/seax/pages/channels/WhatsApp.tsx` ❌ **TODO**

## Priority 7: SeaVoice Components & Pages
### SeaVoice Core Pages
- [ ] `src/seavoice/pages/HomePage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/UnifiedHomePage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/PlatformPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/SolutionsPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/PricingPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/ResourcesPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/DevelopersPage.tsx` ❌ **TODO**

### SeaVoice Platform Pages
- [ ] `src/seavoice/pages/platform/LandlineMobilePage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/platform/VoipSipByocPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/platform/LineCallPlusPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/platform/WhatsAppVoicePage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/platform/SpeechToTextPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/platform/TextToSpeechPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/platform/EndToEndLLMsPage.tsx` ❌ **TODO**

### SeaVoice Solution Pages (Inbound)
- [ ] `src/seavoice/pages/solutions/inbound/VirtualAssistantPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/solutions/inbound/CallTransferPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/solutions/inbound/IvrReplacementPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/solutions/inbound/MentalHealthPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/solutions/inbound/ScamShieldPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/solutions/inbound/TechnicalSupportPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/solutions/inbound/OrderTrackingPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/solutions/inbound/PaymentProcessingPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/solutions/inbound/AppointmentBookingPage.tsx` ❌ **TODO**

### SeaVoice Solution Pages (Outbound)
- [ ] `src/seavoice/pages/solutions/outbound/LeadGenerationPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/solutions/outbound/CollectionsPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/solutions/outbound/CustomerReactivationPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/solutions/outbound/SeniorCheckCallsPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/solutions/outbound/LargeScaleCampaignsPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/solutions/outbound/ProactiveSupportPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/solutions/outbound/SubscriptionRenewalsPage.tsx` ❌ **TODO**
- [ ] `src/seavoice/pages/solutions/outbound/CustomerSurveysPage.tsx` ❌ **TODO**

## Priority 8: Channel Pages
- [ ] `src/pages/channels/WebsiteChat.tsx` ❌ **TODO**
- [ ] `src/pages/channels/WebsiteWidget.tsx` ❌ **TODO**
- [ ] `src/pages/channels/WhatsApp.tsx` ❌ **TODO**
- [ ] `src/pages/channels/SMS.tsx` ❌ **TODO**
- [ ] `src/pages/channels/Instagram.tsx` ❌ **TODO**
- [ ] `src/pages/channels/FacebookMessenger.tsx` ❌ **TODO**
- [ ] `src/pages/channels/ContactForms.tsx` ❌ **TODO**
- [ ] `src/pages/channels/Line.tsx` ❌ **TODO**
- [ ] `src/pages/channels/PhoneCalls.tsx` ❌ **TODO**

## Priority 9: Solution & Industry Pages
- [ ] `src/pages/solutions/SalesMarketing.tsx` ❌ **TODO**
- [ ] `src/pages/solutions/CustomerSupport.tsx` ❌ **TODO**
- [ ] `src/pages/solutions/AIAutomation.tsx` ❌ **TODO**
- [ ] `src/pages/solutions/SmeOwners.tsx` ❌ **TODO**
- [ ] `src/pages/industries/IndustryPageTemplate.tsx` ❌ **TODO**

## Priority 10: Utility & Misc Components
- [ ] `src/components/SEOHelmet.tsx` ❌ **TODO**
- [ ] `src/components/MarkdownPage.tsx` ❌ **TODO**
- [ ] `src/components/ProblemSolution.tsx` ❌ **TODO**
- [ ] `src/pages/CompareUsOverview.tsx` ❌ **TODO**
- [ ] `src/pages/ChannelsOverview.tsx` ❌ **TODO**
- [ ] `src/pages/Pricing.tsx` ❌ **TODO**
- [ ] `src/pages/CompanyPage.tsx` ❌ **TODO**
- [ ] `src/pages/careers.tsx` ❌ **TODO**
- [ ] `src/pages/SeaHealth.tsx` ❌ **TODO**
- [ ] `src/utils/markdown.ts` ❌ **TODO**

## Progress Summary
- **Total Files**: ~150+ files identified
- **Completed**: 19 files ✅
- **Remaining**: ~131 files ❌
- **Completion Rate**: ~13%

## Notes
- Focus on Priority 1-3 first for maximum impact
- Each file needs translation keys added to `public/locales/en.json`
- After English is complete, create translations for all 20 languages
- Test functionality after each major component refactoring
