import React from 'react';
import { Calendar, Clock, Users, Video, CheckCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CalendarPage = () => {
  const { t } = useTranslation();
  
  const platforms = [
    {
      name: t('integrations.calendar.platforms.acuity.name', 'Acuity Scheduling'),
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      description: t('integrations.calendar.platforms.acuity.description', 'Advanced scheduling with client management features'),
      features: [
        t('integrations.calendar.platforms.acuity.features.intake', 'Client intake forms'),
        t('integrations.calendar.platforms.acuity.features.packages', 'Package scheduling'),
        t('integrations.calendar.platforms.acuity.features.group', 'Group appointments'),
        t('integrations.calendar.platforms.acuity.features.workflows', 'Automated workflows')
      ],
      setupTime: t('integrations.calendar.platforms.acuity.setupTime', '12 minutes'),
      category: t('integrations.calendar.platforms.acuity.category', 'Professional')
    },
    {
      name: t('integrations.calendar.platforms.apple.name', 'Apple Calendar'),
      icon: Calendar,
      color: 'from-gray-600 to-gray-800',
      description: t('integrations.calendar.platforms.apple.description', 'iCloud calendar integration for Apple ecosystem users'),
      features: [
        t('integrations.calendar.platforms.apple.features.sync', 'iCloud sync'),
        t('integrations.calendar.platforms.apple.features.devices', 'Cross-device access'),
        t('integrations.calendar.platforms.apple.features.sharing', 'Event sharing'),
        t('integrations.calendar.platforms.apple.features.location', 'Location services')
      ],
      setupTime: t('integrations.calendar.platforms.apple.setupTime', '6 minutes'),
      category: t('integrations.calendar.platforms.apple.category', 'Apple Ecosystem')
    },
    {
      name: t('integrations.calendar.platforms.calcom.name', 'Cal.com'),
      icon: Clock,
      color: 'from-gray-800 to-gray-600',
      description: t('integrations.calendar.platforms.calcom.description', 'Open scheduling infrastructure for teams and individuals'),
      features: [
        t('integrations.calendar.platforms.calcom.features.booking', 'Booking links'),
        t('integrations.calendar.platforms.calcom.features.workflows', 'Custom workflows'),
        t('integrations.calendar.platforms.calcom.features.payments', 'Payment integration'),
        t('integrations.calendar.platforms.calcom.features.api', 'API & webhooks')
      ],
      setupTime: t('integrations.calendar.platforms.calcom.setupTime', '7 minutes'),
      category: t('integrations.calendar.platforms.calcom.category', 'Open Scheduling')
    },
    {
      name: t('integrations.calendar.platforms.calendly.name', 'Calendly'),
      icon: Clock,
      color: 'from-green-500 to-teal-500',
      description: t('integrations.calendar.platforms.calendly.description', 'Popular scheduling tool for automated appointment booking'),
      features: [
        t('integrations.calendar.platforms.calendly.features.booking', 'Booking pages'),
        t('integrations.calendar.platforms.calendly.features.buffer', 'Buffer times'),
        t('integrations.calendar.platforms.calendly.features.questions', 'Custom questions'),
        t('integrations.calendar.platforms.calendly.features.payment', 'Payment integration')
      ],
      setupTime: t('integrations.calendar.platforms.calendly.setupTime', '10 minutes'),
      category: t('integrations.calendar.platforms.calendly.category', 'Scheduling')
    },
    {
      name: t('integrations.calendar.platforms.google.name', 'Google Calendar'),
      icon: Calendar,
      color: 'from-blue-500 to-indigo-500',
      description: t('integrations.calendar.platforms.google.description', 'Seamless integration with Google Calendar for appointment scheduling'),
      features: [
        t('integrations.calendar.platforms.google.features.meetings', 'Meeting scheduling'),
        t('integrations.calendar.platforms.google.features.availability', 'Availability sync'),
        t('integrations.calendar.platforms.google.features.events', 'Event creation'),
        t('integrations.calendar.platforms.google.features.reminders', 'Reminder notifications')
      ],
      setupTime: t('integrations.calendar.platforms.google.setupTime', '5 minutes'),
      category: t('integrations.calendar.platforms.google.category', 'Google Workspace')
    },
    {
      name: t('integrations.calendar.platforms.highlevel.name', 'HighLevel'),
      icon: Users,
      color: 'from-indigo-700 to-blue-700',
      description: t('integrations.calendar.platforms.highlevel.description', 'All-in-one sales, marketing, and calendar automation'),
      features: [
        t('integrations.calendar.platforms.highlevel.features.pipelines', 'Sales pipelines'),
        t('integrations.calendar.platforms.highlevel.features.reminders', 'Automated reminders'),
        t('integrations.calendar.platforms.highlevel.features.forms', 'Booking forms'),
        t('integrations.calendar.platforms.highlevel.features.integration', 'CRM integration')
      ],
      setupTime: t('integrations.calendar.platforms.highlevel.setupTime', '9 minutes'),
      category: t('integrations.calendar.platforms.highlevel.category', 'All-in-One')
    },
    {
      name: t('integrations.calendar.platforms.notion.name', 'Notion'),
      icon: Calendar,
      color: 'from-black to-gray-700',
      description: t('integrations.calendar.platforms.notion.description', 'Calendar and project management with Notion integration'),
      features: [
        t('integrations.calendar.platforms.notion.features.sync', 'Calendar sync'),
        t('integrations.calendar.platforms.notion.features.tasks', 'Task scheduling'),
        t('integrations.calendar.platforms.notion.features.templates', 'Custom templates'),
        t('integrations.calendar.platforms.notion.features.automation', 'Workflow automation')
      ],
      setupTime: t('integrations.calendar.platforms.notion.setupTime', '6 minutes'),
      category: t('integrations.calendar.platforms.notion.category', 'Productivity')
    },
    {
      name: t('integrations.calendar.platforms.outlook.name', 'Microsoft Outlook'),
      icon: Calendar,
      color: 'from-blue-600 to-purple-600',
      description: t('integrations.calendar.platforms.outlook.description', 'Microsoft Outlook and Office 365 calendar integration'),
      features: [
        t('integrations.calendar.platforms.outlook.features.exchange', 'Exchange sync'),
        t('integrations.calendar.platforms.outlook.features.rooms', 'Meeting rooms'),
        t('integrations.calendar.platforms.outlook.features.recurring', 'Recurring events'),
        t('integrations.calendar.platforms.outlook.features.team', 'Team calendars')
      ],
      setupTime: t('integrations.calendar.platforms.outlook.setupTime', '8 minutes'),
      category: t('integrations.calendar.platforms.outlook.category', 'Microsoft 365')
    },
    {
      name: t('integrations.calendar.platforms.zoom.name', 'Zoom Scheduler'),
      icon: Video,
      color: 'from-blue-400 to-blue-600',
      description: t('integrations.calendar.platforms.zoom.description', 'Video meeting scheduling with Zoom integration'),
      features: [
        t('integrations.calendar.platforms.zoom.features.meetings', 'Video meetings'),
        t('integrations.calendar.platforms.zoom.features.webinar', 'Webinar scheduling'),
        t('integrations.calendar.platforms.zoom.features.recording', 'Recording setup'),
        t('integrations.calendar.platforms.zoom.features.waiting', 'Waiting rooms')
      ],
      setupTime: t('integrations.calendar.platforms.zoom.setupTime', '7 minutes'),
      category: t('integrations.calendar.platforms.zoom.category', 'Video Conferencing')
    }
  ];

  const benefits = [
    {
      title: t('integrations.calendar.benefits.scheduling.title', 'Automated Scheduling'),
      description: t('integrations.calendar.benefits.scheduling.description', 'Let customers book appointments directly from chat conversations'),
      metric: '80%'
    },
    {
      title: t('integrations.calendar.benefits.noShows.title', 'Reduced No-Shows'),
      description: t('integrations.calendar.benefits.noShows.description', 'Automatic reminders and confirmations reduce missed appointments'),
      metric: '65%'
    },
    {
      title: t('integrations.calendar.benefits.timeSavings.title', 'Time Savings'),
      description: t('integrations.calendar.benefits.timeSavings.description', 'Eliminate back-and-forth scheduling emails and calls'),
      metric: '3hrs'
    },
    {
      title: t('integrations.calendar.benefits.utilization.title', 'Better Utilization'),
      description: t('integrations.calendar.benefits.utilization.description', 'Optimize calendar usage with intelligent scheduling'),
      metric: '45%'
    }
  ];

  const featuresFromTranslation = t('integrations.calendar.features', { returnObjects: true });
  const features = Array.isArray(featuresFromTranslation) ? featuresFromTranslation : [];

  const schedulingFlow = [
    {
      step: 1,
      title: t('integrations.calendar.flow.request.title', 'Customer Request'),
      description: t('integrations.calendar.flow.request.description', 'Customer asks to schedule a meeting or appointment'),
      example: t('integrations.calendar.flow.request.example', '"I\'d like to schedule a demo for next week"')
    },
    {
      step: 2,
      title: t('integrations.calendar.flow.availability.title', 'Availability Check'),
      description: t('integrations.calendar.flow.availability.description', 'System checks real-time calendar availability'),
      example: t('integrations.calendar.flow.availability.example', 'Available slots: Tue 2PM, Wed 10AM, Thu 3PM')
    },
    {
      step: 3,
      title: t('integrations.calendar.flow.confirmation.title', 'Booking Confirmation'),
      description: t('integrations.calendar.flow.confirmation.description', 'Customer selects time and appointment is automatically booked'),
      example: t('integrations.calendar.flow.confirmation.example', 'Meeting booked for Tuesday 2PM with calendar invite sent')
    },
    {
      step: 4,
      title: t('integrations.calendar.flow.followup.title', 'Automated Follow-up'),
      description: t('integrations.calendar.flow.followup.description', 'Reminders and confirmations sent automatically'),
      example: t('integrations.calendar.flow.followup.example', '24hr reminder + meeting link + preparation materials')
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Calendar className="w-16 h-16 text-blue-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('integrations.calendar.title', 'Calendar & Scheduling')}
              </h1>
            </div>
            <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
              {t('integrations.calendar.subtitle', 'Integrate with popular calendar platforms to enable seamless appointment scheduling directly from customer support conversations.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
              >
                {t('integrations.calendar.connectButton', 'Connect Calendar')}
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
              >
                {t('integrations.calendar.demoButton', 'Book Scheduling Demo')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('integrations.calendar.platformsTitle', 'Calendar Platform Integrations')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.calendar.platformsSubtitle', 'Connect with all major calendar and scheduling platforms for seamless appointment management.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {platform.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                  <p className="text-gray-600 mb-6">{platform.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm text-gray-600">
                      {t('integrations.calendar.setup')}: <span className="font-medium text-gray-900">{platform.setupTime}</span>
                    </div>
                  </div>
                  
                  <a
                    href="https://chat.seasalt.ai/gpt/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full bg-gradient-to-r ${platform.color} hover:opacity-90 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 text-center block`}
                  >
                    {t('integrations.calendar.connectPlatform', 'Connect')} {platform.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('integrations.calendar.benefitsTitle', 'Calendar Integration Benefits')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.calendar.benefitsSubtitle', 'Streamline your scheduling process and improve customer experience with automated booking.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">{benefit.metric}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scheduling Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('integrations.calendar.flowTitle', 'Automated Scheduling Flow')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.calendar.flowSubtitle', 'See how seamless appointment booking works within customer conversations.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {schedulingFlow.map((flow, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{flow.step}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{flow.title}</h3>
                <p className="text-gray-600 mb-4">{flow.description}</p>
                
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <p className="text-sm text-blue-800 italic">"{flow.example}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('integrations.calendar.solutionTitle', 'Complete Scheduling Solution')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('integrations.calendar.solutionSubtitle', 'Everything you need to manage appointments, meetings, and events directly from your customer support platform.')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('integrations.calendar.exampleTitle', 'Scheduling Example')}</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600 mb-2">{t('integrations.calendar.customer', 'Customer')}</div>
                  <p className="text-gray-800">{t('integrations.calendar.customerRequest', '"I\'d like to schedule a product demo for next week"')}</p>
                </div>
                
                <div className="bg-blue-100 rounded-lg p-4">
                  <div className="text-sm text-blue-600 mb-2">{t('integrations.calendar.seachatAI', 'SeaChat AI')}</div>
                  <p className="text-gray-800">{t('integrations.calendar.aiResponse1', '"I\'d be happy to help you schedule a demo! I have these available slots next week:')}</p>
                  <div className="mt-3 space-y-2">
                    <div className="bg-white rounded p-2 text-sm">📅 {t('integrations.calendar.slot1', 'Tuesday, Jan 16 - 2:00 PM PST')}</div>
                    <div className="bg-white rounded p-2 text-sm">📅 {t('integrations.calendar.slot2', 'Wednesday, Jan 17 - 10:00 AM PST')}</div>
                    <div className="bg-white rounded p-2 text-sm">📅 {t('integrations.calendar.slot3', 'Thursday, Jan 18 - 3:00 PM PST')}</div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600 mb-2">{t('integrations.calendar.customer', 'Customer')}</div>
                  <p className="text-gray-800">{t('integrations.calendar.customerChoice', '"Tuesday at 2 PM works perfect!"')}</p>
                </div>
                
                <div className="bg-green-100 rounded-lg p-4">
                  <div className="text-sm text-green-600 mb-2">{t('integrations.calendar.seachatAI', 'SeaChat AI')}</div>
                  <p className="text-gray-800">✅ {t('integrations.calendar.aiResponse2', 'Perfect! I\'ve booked your demo for Tuesday, Jan 16 at 2:00 PM PST. You\'ll receive a calendar invite with the meeting link shortly.')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('integrations.calendar.ctaTitle', 'Ready to Automate Your Scheduling?')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('integrations.calendar.ctaSubtitle', 'Connect your calendar and let customers book appointments seamlessly through your support conversations.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              {t('integrations.calendar.ctaConnectButton', 'Connect Your Calendar')}
            </a>
            <a
              href="http://wiki.seasalt.ai/seachat/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center"
            >
              {t('integrations.calendar.ctaGuideButton', 'View Setup Guide')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalendarPage;