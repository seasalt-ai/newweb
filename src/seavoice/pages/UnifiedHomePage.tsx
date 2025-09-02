import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, BarChart3, CheckCircle, ArrowRight, Star, Bot, Users, Headphones, Building2, Zap, Clock, ChevronDown, Brain, Mic, Speaker } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
import SEOHelmet from '../../components/SEOHelmet';
import { getSEOData, getCanonicalUrl } from '../../utils/seo';
import VoiceDemo from '../components/VoiceDemo';
import InteractiveCallDashboard from '../components/hero-variants/InteractiveCallDashboard';
import VoiceConversationFlow from '../components/hero-variants/VoiceConversationFlow';
const UnifiedHomePage = () => {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();
  const { t, i18n } = useTranslation();
  
  // Get current language for canonical URL  
  const currentLang = lang || i18n.language || 'en';
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'seo.seavoice.homepage', {
    canonicalUrl: getCanonicalUrl(currentLang, '/seavoice'),
    image: '/seavoice-logo.png',
    tags: t('seo.seavoice.homepage.keywords')?.split(', ')
  });
  
  const [openFaqIndex, setOpenFaqIndex] = useState<number | string | null>(null);
  
  // Voice Conversation Flow state
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoHighlight, setAutoHighlight] = useState(0);
  const [currentConversation, setCurrentConversation] = useState(0);
  const [showCustomerText, setShowCustomerText] = useState(false);
  const [showAIText, setShowAIText] = useState(false);
  
  // Interactive Call Dashboard state
  const [selectedCall, setSelectedCall] = useState(0);
  const [dashboardFilter, setDashboardFilter] = useState('all');
  
  // Voice Conversation Flow data
  const conversationSteps = [
    {
      step: 1,
      title: t('seavoice.home.conversationFlow.step1.title'),
      description: t('seavoice.home.conversationFlow.step1.description'),
      icon: Phone,
      color: "blue",
      status: "calling"
    },
    {
      step: 2,
      title: t('seavoice.home.conversationFlow.step2.title'),
      description: t('seavoice.home.conversationFlow.step2.description'),
      icon: Bot,
      color: "purple",
      status: "answering"
    },
    {
      step: 3,
      title: t('seavoice.home.conversationFlow.step3.title'),
      description: t('seavoice.home.conversationFlow.step3.description'),
      icon: Mic,
      color: "teal",
      status: "talking"
    },
    {
      step: 4,
      title: t('seavoice.home.conversationFlow.step4.title'),
      description: t('seavoice.home.conversationFlow.step4.description'),
      icon: CheckCircle,
      color: "green",
      status: "completed"
    }
  ];

  const conversationExamples = [
    {
      customerMessage: t('seavoice.home.conversationExamples.appointment.customer'),
      aiResponse: t('seavoice.home.conversationExamples.appointment.ai'),
      scenario: t('seavoice.home.conversationExamples.appointment.scenario')
    },
    {
      customerMessage: t('seavoice.home.conversationExamples.support.customer'),
      aiResponse: t('seavoice.home.conversationExamples.support.ai'),
      scenario: t('seavoice.home.conversationExamples.support.scenario')
    },
    {
      customerMessage: t('seavoice.home.conversationExamples.inquiry.customer'), 
      aiResponse: t('seavoice.home.conversationExamples.inquiry.ai'),
      scenario: t('seavoice.home.conversationExamples.inquiry.scenario')
    }
  ];

  // Animation effects
  useEffect(() => {
    if (isPlaying) {
      const stepInterval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % conversationSteps.length);
      }, 3000);
      
      const highlightInterval = setInterval(() => {
        setAutoHighlight((prev) => (prev + 1) % 4);
      }, 1500);
      
      const conversationInterval = setInterval(() => {
        setCurrentConversation((prev) => (prev + 1) % conversationExamples.length);
        setShowCustomerText(false);
        setShowAIText(false);
        
        setTimeout(() => setShowCustomerText(true), 500);
        setTimeout(() => setShowAIText(true), 1500);
      }, 6000);
      
      // Initial text display
      setTimeout(() => setShowCustomerText(true), 500);
      setTimeout(() => setShowAIText(true), 1500);
      
      return () => {
        clearInterval(stepInterval);
        clearInterval(highlightInterval);
        clearInterval(conversationInterval);
      };
    } else {
      setShowCustomerText(false);
      setShowAIText(false);
    }
  }, [isPlaying, conversationExamples.length]);

  const handleNavigateToSolution = (path: string) => {
    // Navigate within the SeaVoice context with proper language prefix
    const languagePrefix = lang || i18n.language || 'en';
    const fullPath = `/${languagePrefix}/seavoice${path}`;
    navigate(fullPath);
  };
  
  const toggleFaq = (index: number) => {
    if (index === -1) {
      // Uncollapse all - open all FAQs by setting a special state
      setOpenFaqIndex(openFaqIndex === 'all' ? null : 'all');
    } else {
      setOpenFaqIndex(openFaqIndex === index ? null : index);
    }
  };

  const platformSteps = [
    {
      title: t('seavoice.home.howItWorks.step1.title'),
      description: t('seavoice.home.howItWorks.step1.description'),
      icon: Bot,
    },
    {
      title: t('seavoice.home.howItWorks.step2.title'),
      description: t('seavoice.home.howItWorks.step2.description'),
      icon: Phone,
    },
    {
      title: t('seavoice.home.howItWorks.step3.title'),
      description: t('seavoice.home.howItWorks.step3.description'),
      icon: CheckCircle,
    },
    {
      title: t('seavoice.home.howItWorks.step4.title'),
      description: t('seavoice.home.howItWorks.step4.description'),
      icon: Headphones,
    },
    {
      title: t('seavoice.home.howItWorks.step5.title'),
      description: t('seavoice.home.howItWorks.step5.description'),
      icon: BarChart3,
    },
  ];

  // Safe color mapping to prevent Tailwind class purging
  const colorClasses = {
    blue: {
      bg100: 'bg-blue-100',
      bg50: 'bg-blue-50',
      text600: 'text-blue-600',
      text800: 'text-blue-800',
      border100: 'border-blue-100'
    },
    purple: {
      bg100: 'bg-purple-100',
      bg50: 'bg-purple-50',
      text600: 'text-purple-600',
      text800: 'text-purple-800',
      border100: 'border-purple-100'
    }
  };

  const useCaseCategories = [
    {
      category: t('seavoice.home.useCases.inbound.category'),
      icon: Headphones,
      color: 'blue',
          cases: [
            {
              title: t('seavoice.home.useCases.inbound.appointmentBooking.title'),
              description: t('seavoice.home.useCases.inbound.appointmentBooking.description'),
              type: t('seavoice.home.useCases.types.inbound'),
              url: '/solutions/inbound/appointment-booking'
            },
            {
              title: t('seavoice.home.useCases.inbound.technicalSupport.title'),
              description: t('seavoice.home.useCases.inbound.technicalSupport.description'),
              type: t('seavoice.home.useCases.types.inbound'),
              url: '/solutions/inbound/technical-support'
            },
            {
              title: t('seavoice.home.useCases.inbound.virtualAssistant.title'),
              description: t('seavoice.home.useCases.inbound.virtualAssistant.description'),
              type: t('seavoice.home.useCases.types.inbound'),
              url: '/solutions/inbound/virtual-assistant'
            },
            {
              title: t('seavoice.home.useCases.inbound.callTransfer.title'),
              description: t('seavoice.home.useCases.inbound.callTransfer.description'),
              type: t('seavoice.home.useCases.types.inbound'),
              url: '/solutions/inbound/call-transfer'
            },
            {
              title: t('seavoice.home.useCases.inbound.orderTracking.title'),
              description: t('seavoice.home.useCases.inbound.orderTracking.description'),
              type: t('seavoice.home.useCases.types.inbound'),
              url: '/solutions/inbound/order-tracking'
            },
            {
              title: t('seavoice.home.useCases.inbound.paymentProcessing.title'),
              description: t('seavoice.home.useCases.inbound.paymentProcessing.description'),
              type: t('seavoice.home.useCases.types.inbound'),
              url: '/solutions/inbound/payment-processing'
            },
            {
              title: t('seavoice.home.useCases.inbound.ivrReplacement.title'),
              description: t('seavoice.home.useCases.inbound.ivrReplacement.description'),
              type: t('seavoice.home.useCases.types.inbound'),
              url: '/solutions/inbound/ivr-replacement'
            },
            {
              title: t('seavoice.home.useCases.inbound.mentalHealth.title'),
              description: t('seavoice.home.useCases.inbound.mentalHealth.description'),
              type: t('seavoice.home.useCases.types.inbound'),
              url: '/solutions/inbound/mental-health'
            },
            {
              title: t('seavoice.home.useCases.inbound.scamShield.title'),
              description: t('seavoice.home.useCases.inbound.scamShield.description'),
              type: t('seavoice.home.useCases.types.inbound'),
              url: '/solutions/inbound/scam-shield'
            }
          ]
    },
    {
      category: t('seavoice.home.useCases.outbound.category'),
      icon: Phone,
      color: 'purple',
          cases: [
            {
              title: t('seavoice.home.useCases.outbound.leadGeneration.title'),
              description: t('seavoice.home.useCases.outbound.leadGeneration.description'),
              type: t('seavoice.home.useCases.types.outbound'),
              url: '/solutions/outbound/lead-generation'
            },
            {
              title: t('seavoice.home.useCases.outbound.seniorChecks.title'),
              description: t('seavoice.home.useCases.outbound.seniorChecks.description'),
              type: t('seavoice.home.useCases.types.outbound'),
              url: '/solutions/outbound/senior-checks'
            },
            {
              title: t('seavoice.home.useCases.outbound.surveys.title'),
              description: t('seavoice.home.useCases.outbound.surveys.description'),
              type: t('seavoice.home.useCases.types.outbound'),
              url: '/solutions/outbound/surveys'
            },
            {
              title: t('seavoice.home.useCases.outbound.collections.title'),
              description: t('seavoice.home.useCases.outbound.collections.description'),
              type: t('seavoice.home.useCases.types.outbound'),
              url: '/solutions/outbound/collections'
            },
            {
              title: t('seavoice.home.useCases.outbound.reactivation.title'),
              description: t('seavoice.home.useCases.outbound.reactivation.description'),
              type: t('seavoice.home.useCases.types.outbound'),
              url: '/solutions/outbound/reactivation'
            },
            {
              title: t('seavoice.home.useCases.outbound.fraudAlerts.title'),
              description: t('seavoice.home.useCases.outbound.fraudAlerts.description'),
              type: t('seavoice.home.useCases.types.outbound'),
              url: '/solutions/outbound/fraud-alerts'
            },
            {
              title: t('seavoice.home.useCases.outbound.campaigns.title'),
              description: t('seavoice.home.useCases.outbound.campaigns.description'),
              type: t('seavoice.home.useCases.types.outbound'),
              url: '/solutions/outbound/campaigns'
            },
            {
              title: t('seavoice.home.useCases.outbound.proactiveSupport.title'),
              description: t('seavoice.home.useCases.outbound.proactiveSupport.description'),
              type: t('seavoice.home.useCases.types.outbound'),
              url: '/solutions/outbound/proactive-support'
            },
            {
              title: t('seavoice.home.useCases.outbound.renewals.title'),
              description: t('seavoice.home.useCases.outbound.renewals.description'),
              type: t('seavoice.home.useCases.types.outbound'),
              url: '/solutions/outbound/renewals'
            }
          ]
    }
  ];

  const testimonials = [
    {
      quote: t('seavoice.home.testimonials.quote'),
      author: t('seavoice.home.testimonials.author'),
      role: t('seavoice.home.testimonials.role'),
      company: t('seavoice.home.testimonials.company')
    }
  ];

  const faqItems = [
    {
      question: t('seavoice.home.faq.q1.question'),
      answer: t('seavoice.home.faq.q1.answer')
    },
    {
      question: t('seavoice.home.faq.q2.question'),
      answer: t('seavoice.home.faq.q2.answer')
    },
    {
      question: t('seavoice.home.faq.q3.question'),
      answer: t('seavoice.home.faq.q3.answer')
    },
    {
      question: t('seavoice.home.faq.q4.question'),
      answer: t('seavoice.home.faq.q4.answer')
    },
    {
      question: t('seavoice.home.faq.q5.question'),
      answer: t('seavoice.home.faq.q5.answer')
    },
    {
      question: t('seavoice.home.faq.q6.question'),
      answer: t('seavoice.home.faq.q6.answer')
    },
    {
      question: t('seavoice.home.faq.q7.question'),
      answer: t('seavoice.home.faq.q7.answer')
    },
    {
      question: t('seavoice.home.faq.q8.question'),
      answer: t('seavoice.home.faq.q8.answer')
    },
    {
      question: t('seavoice.home.faq.q9.question'),
      answer: t('seavoice.home.faq.q9.answer')
    },
    {
      question: t('seavoice.home.faq.q10.question'),
      answer: t('seavoice.home.faq.q10.answer')
    },
    {
      question: t('seavoice.home.faq.q11.question'),
      answer: t('seavoice.home.faq.q11.answer')
    },
  ];

  // Interactive Call Dashboard data
  const mockCalls = [
    {
      id: 1,
      customer: t('seavoice.home.dashboard.mockCalls.customer1'),
      type: t('seavoice.home.dashboard.mockCalls.type1'),
      status: t('seavoice.home.dashboard.mockCalls.status1'),
      duration: t('seavoice.home.dashboard.mockCalls.duration1'),
      time: t('seavoice.home.dashboard.mockCalls.time1'),
      satisfaction: 5,
      outcome: t('seavoice.home.dashboard.mockCalls.outcome1'),
      tags: ["booking", "satisfied"]
    },
    {
      id: 2,
      customer: t('seavoice.home.dashboard.mockCalls.customer2'),
      type: t('seavoice.home.dashboard.mockCalls.type2'),
      status: t('seavoice.home.dashboard.mockCalls.status2'),
      duration: t('seavoice.home.dashboard.mockCalls.duration2'),
      time: t('seavoice.home.dashboard.mockCalls.time2'),
      satisfaction: 4,
      outcome: t('seavoice.home.dashboard.mockCalls.outcome2'),
      tags: ["support", "escalated"]
    },
    {
      id: 3,
      customer: t('seavoice.home.dashboard.mockCalls.customer3'),
      type: t('seavoice.home.dashboard.mockCalls.type3'),
      status: t('seavoice.home.dashboard.mockCalls.status3'),
      duration: t('seavoice.home.dashboard.mockCalls.duration3'),
      time: t('seavoice.home.dashboard.mockCalls.time3'),
      satisfaction: 5,
      outcome: t('seavoice.home.dashboard.mockCalls.outcome3'),
      tags: ["inquiry", "resolved"]
    },
    {
      id: 4,
      customer: t('seavoice.home.dashboard.mockCalls.customer4'),
      type: t('seavoice.home.dashboard.mockCalls.type4'),
      status: t('seavoice.home.dashboard.mockCalls.status4'),
      duration: t('seavoice.home.dashboard.mockCalls.duration4'),
      time: t('seavoice.home.dashboard.mockCalls.time4'),
      satisfaction: null,
      outcome: t('seavoice.home.dashboard.mockCalls.outcome4'),
      tags: ["billing", "active"]
    }
  ];

  const dashboardStats = {
    totalCalls: 247,
    activeCalls: 3,
    avgWaitTime: "0:12",
    satisfaction: 4.8,
    resolutionRate: 92
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <SEOHelmet {...seoData} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-24 lg:py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/80 text-sm font-medium mb-8"
              >
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                {t('seavoice.home.hero.tagline')}
              </motion.div>
              
              <h1 
                className="font-bold text-white leading-tight mb-8 tracking-tight !text-6xl sm:!text-7xl md:!text-8xl lg:!text-9xl"
                style={{ 
                  fontSize: '4rem !important',
                  lineHeight: '1.1 !important',
                  fontWeight: 'bold !important',
                  color: 'white !important'
                }}
              >
                <span 
                  className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
                  style={{ fontSize: 'inherit !important' }}
                >
                  {t('seavoice.home.hero.title.line1')}
                </span>
                <br />
                <span className="text-white/90" style={{ fontSize: 'inherit !important' }}>{t('seavoice.home.hero.title.line2')}</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-4xl mb-12 font-light">
                {t('seavoice.home.hero.subtitle.line1')}
                <br className="hidden sm:block" />
                <span className="text-blue-300">{t('seavoice.home.hero.subtitle.line2')}</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-start mb-16">
                <motion.a 
                  href={getMeetingUrl(i18n.language)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">{t('seavoice.home.hero.bookDemo')}</span>
                  <ArrowRight className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a 
                  href="https://chat.seasalt.ai/signup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                >
                  <span>{t('seavoice.home.hero.signUp')}</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right column - Conversation Flow Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            >
              <VoiceConversationFlow />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Voice Demo Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">{t('seavoice.home.voiceDemo.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('seavoice.home.voiceDemo.subtitle')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <VoiceDemo />
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 text-blue-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              {t('seavoice.home.useCases.badge')}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {typeof t('seavoice.home.useCases.title') === 'object' ? (
                <>
                  {t('seavoice.home.useCases.title.line1')}
                  <br className="hidden sm:block" />
                  {t('seavoice.home.useCases.title.line2')}
                </>
              ) : (
                t('seavoice.home.useCases.title')
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('seavoice.home.useCases.subtitle')}</p>
          </motion.div>

          {useCaseCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 ${colorClasses[category.color as keyof typeof colorClasses].bg100} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className={`w-6 h-6 ${colorClasses[category.color as keyof typeof colorClasses].text600}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.cases.map((useCase, index) => (
                  <motion.div 
                    key={index} 
                    className={`${colorClasses[category.color as keyof typeof colorClasses].bg50} rounded-xl p-6 hover:shadow-lg transition-all border ${colorClasses[category.color as keyof typeof colorClasses].border100} cursor-pointer group`}
                    onClick={() => handleNavigateToSolution(useCase.url)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[category.color as keyof typeof colorClasses].bg100} ${colorClasses[category.color as keyof typeof colorClasses].text800}`}>
                        {useCase.type}
                      </span>
                      <ArrowRight className={`w-4 h-4 ${colorClasses[category.color as keyof typeof colorClasses].text600} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{useCase.title}</h4>
                    <p className="text-gray-600 text-sm">{useCase.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-600 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-indigo-600 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full border border-indigo-200 text-indigo-700 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              {t('seavoice.home.howItWorks.badge')}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {typeof t('seavoice.home.howItWorks.title') === 'object' ? (
                <>
                  {t('seavoice.home.howItWorks.title.prefix')}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('seavoice.home.howItWorks.title.highlight')}</span>
                  {t('seavoice.home.howItWorks.title.suffix')}
                </>
              ) : (
                <span dangerouslySetInnerHTML={{ __html: t('seavoice.home.howItWorks.title') }} />
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('seavoice.home.howItWorks.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 z-0"></div>
            
            {platformSteps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative z-10 text-center group"
              >
                <div className="relative mb-8">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl mb-4 mx-auto shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <step.icon className="w-10 h-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 group-hover:shadow-xl group-hover:bg-white/90 transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA below steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200 text-green-700 text-sm font-medium">
              <Clock className="w-4 h-4" />
              {t('seavoice.home.howItWorks.liveTime')}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Voice AI vs Human vs Outsourced Services Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('seavoice.home.comparison.title')}</h2>
            <p className="text-xl text-gray-600">{t('seavoice.home.comparison.subtitle')}</p>
          </motion.div>

          <div className="w-full">
              {/* Header Row */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <div className="h-12"></div> {/* Empty space for feature labels */}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-900">{t('seavoice.home.comparison.seavoiceAI')}</h3>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center bg-gray-50 rounded-xl p-6 border border-gray-200"
                >
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-700">{t('seavoice.home.comparison.fullTimeHuman')}</h3>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center bg-gray-50 rounded-xl p-6 border border-gray-200"
                >
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-700">{t('seavoice.home.comparison.outsourcedService')}</h3>
                </motion.div>
              </div>

              {/* Comparison Rows */}
              <div className="space-y-4">
                {[
                  {
                    feature: t('seavoice.home.comparison.availability.feature'),
                    seavoice: { text: t('seavoice.home.comparison.availability.seavoice'), winner: true, icon: '🌟' },
                    human: { text: t('seavoice.home.comparison.availability.human'), winner: false },
                    outsourced: { text: t('seavoice.home.comparison.availability.outsourced'), winner: false }
                  },
                  {
                    feature: t('seavoice.home.comparison.callVolume.feature'),
                    seavoice: { text: t('seavoice.home.comparison.callVolume.seavoice'), winner: true, icon: '🌟' },
                    human: { text: t('seavoice.home.comparison.callVolume.human'), winner: false },
                    outsourced: { text: t('seavoice.home.comparison.callVolume.outsourced'), winner: false }
                  },
                  {
                    feature: t('seavoice.home.comparison.language.feature'),
                    seavoice: { text: t('seavoice.home.comparison.language.seavoice'), winner: true, icon: '🌟' },
                    human: { text: t('seavoice.home.comparison.language.human'), winner: false },
                    outsourced: { text: t('seavoice.home.comparison.language.outsourced'), winner: false }
                  },
                  {
                    feature: t('seavoice.home.comparison.emotional.feature'),
                    seavoice: { text: t('seavoice.home.comparison.emotional.seavoice'), winner: false },
                    human: { text: t('seavoice.home.comparison.emotional.human'), winner: true },
                    outsourced: { text: t('seavoice.home.comparison.emotional.outsourced'), winner: false }
                  },
                  {
                    feature: t('seavoice.home.comparison.compliance.feature'),
                    seavoice: { text: t('seavoice.home.comparison.compliance.seavoice'), winner: true, icon: '🌟' },
                    human: { text: t('seavoice.home.comparison.compliance.human'), winner: false },
                    outsourced: { text: t('seavoice.home.comparison.compliance.outsourced'), winner: false }
                  },
                  {
                    feature: t('seavoice.home.comparison.implementation.feature'),
                    seavoice: { text: t('seavoice.home.comparison.implementation.seavoice'), winner: true, icon: '🌟' },
                    human: { text: t('seavoice.home.comparison.implementation.human'), winner: false },
                    outsourced: { text: t('seavoice.home.comparison.implementation.outsourced'), winner: false }
                  }
                ].map((row, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-4 gap-4 items-center bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="font-semibold text-gray-900 text-left">
                      {row.feature}
                    </div>
                    <div className={`text-center p-4 rounded-lg ${
                      row.seavoice.winner 
                        ? 'bg-purple-50 border-2 border-purple-200 text-purple-900 font-semibold'
                        : 'bg-gray-50 text-gray-700'
                    }`}>
                      <div className="flex items-center justify-center gap-2">
                        {row.seavoice.icon && (
                          <span className="text-lg">{row.seavoice.icon}</span>
                        )}
                        <span>{row.seavoice.text}</span>
                      </div>
                    </div>
                    <div className={`text-center p-4 rounded-lg ${
                      row.human.winner 
                        ? 'bg-green-50 border-2 border-green-200 text-green-900 font-semibold'
                        : 'bg-gray-50 text-gray-700'
                    }`}>
                      {row.human.text}
                    </div>
                    <div className={`text-center p-4 rounded-lg ${
                      row.outsourced.winner 
                        ? 'bg-blue-50 border-2 border-blue-200 text-blue-900 font-semibold'
                        : 'bg-gray-50 text-gray-700'
                    }`}>
                      {row.outsourced.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Cost Comparison Divider */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="my-12 text-center"
              >
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">{t('seavoice.home.comparison.costComparison')}</h3>
                  <p className="text-green-100">{t('seavoice.home.comparison.costDescription')}</p>
                </div>
              </motion.div>

              {/* Cost Comparison Rows */}
              <div className="space-y-4">
                {[
                  {
                    feature: t('seavoice.home.comparison.cost.monthly.feature'),
                    seavoice: { text: t('seavoice.home.comparison.cost.monthly.seavoice'), winner: true, icon: '🌟' },
                    human: { text: t('seavoice.home.comparison.cost.monthly.human'), winner: false },
                    outsourced: { text: t('seavoice.home.comparison.cost.monthly.outsourced'), winner: false }
                  },
                  {
                    feature: t('seavoice.home.comparison.cost.effective.feature'),
                    seavoice: { text: t('seavoice.home.comparison.cost.effective.seavoice'), winner: true, icon: '🌟' },
                    human: { text: t('seavoice.home.comparison.cost.effective.human'), winner: false },
                    outsourced: { text: t('seavoice.home.comparison.cost.effective.outsourced'), winner: false }
                  },
                  {
                    feature: t('seavoice.home.comparison.cost.hidden.feature'),
                    seavoice: { text: t('seavoice.home.comparison.cost.hidden.seavoice'), winner: true, icon: '🌟' },
                    human: { text: t('seavoice.home.comparison.cost.hidden.human'), winner: false },
                    outsourced: { text: t('seavoice.home.comparison.cost.hidden.outsourced'), winner: false }
                  }
                ].map((row, index) => (
                  <motion.div
                    key={`cost-${index}`}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-4 gap-4 items-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 shadow-sm border-2 border-green-200 hover:shadow-md transition-shadow"
                  >
                    <div className="font-semibold text-gray-900 text-left">
                      {row.feature}
                    </div>
                    <div className={`text-center p-4 rounded-lg ${
                      row.seavoice.winner 
                        ? 'bg-green-100 border-2 border-green-300 text-green-900 font-bold text-lg'
                        : 'bg-gray-50 text-gray-700'
                    }`}>
                      <div className="flex items-center justify-center gap-2">
                        {row.seavoice.icon && (
                          <span className="text-lg">{row.seavoice.icon}</span>
                        )}
                        <span>{row.seavoice.text}</span>
                      </div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 font-semibold">
                      {row.human.text}
                    </div>
                    <div className="text-center p-4 rounded-lg bg-orange-50 border border-orange-200 text-orange-800 font-semibold">
                      {row.outsourced.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Cost Savings Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl text-white text-center"
              >
                <div className="flex items-center justify-center gap-8 flex-wrap">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{t('seavoice.home.comparison.savings.costVsHuman')}</div>
                    <div className="text-green-100">{t('seavoice.home.comparison.savings.costVsHumanLabel')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{t('seavoice.home.comparison.savings.costVsOutsourced')}</div>
                    <div className="text-green-100">{t('seavoice.home.comparison.savings.costVsOutsourcedLabel')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{t('seavoice.home.comparison.savings.annualSavings')}</div>
                    <div className="text-green-100">{t('seavoice.home.comparison.savings.annualSavingsLabel')}</div>
                  </div>
                </div>
              </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">{t('seavoice.home.comparison.cta.title')}</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                {t('seavoice.home.comparison.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={getMeetingUrl(i18n.language)} target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  {t('seavoice.home.comparison.cta.bookDemo')}
                </a>
                <a href="https://chat.seasalt.ai/signup" target="_blank" rel="noopener noreferrer" className="bg-purple-500 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 transition-colors">
                  {t('seavoice.home.comparison.cta.signUp')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SeaChat Capabilities Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              {typeof t('seavoice.home.seachat.title') === 'object' ? (
                <>
                  {t('seavoice.home.seachat.title.prefix')}
                  <span className="text-teal-400">{t('seavoice.home.seachat.title.highlight')}</span>
                  {t('seavoice.home.seachat.title.suffix')}
                </>
              ) : (
                <span dangerouslySetInnerHTML={{ __html: t('seavoice.home.seachat.title') }} />
              )}
            </h2>
            <p className="text-xl text-gray-300">
              {t('seavoice.home.seachat.subtitle')}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-semibold text-center mb-8">
              {t('seavoice.home.seachat.teamTitle')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center">
                    <Bot className="w-10 h-10 text-teal-400" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{t('seavoice.home.seachat.chatAgent.title')}</h4>
                <p className="text-gray-300">{t('seavoice.home.seachat.chatAgent.description')}</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-blue-400" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{t('seavoice.home.seachat.humanAgent.title')}</h4>
                <p className="text-gray-300">{t('seavoice.home.seachat.humanAgent.description')}</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Headphones className="w-10 h-10 text-purple-400" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{t('seavoice.home.seachat.voiceAgent.title')}</h4>
                <p className="text-gray-300">{t('seavoice.home.seachat.voiceAgent.description')}</p>
              </motion.div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="/seachat"
                className="inline-flex items-center text-teal-400 hover:text-teal-300 font-semibold transition-colors"
              >
                {t('seavoice.home.seachat.learnMore')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Case Study */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl font-medium leading-relaxed mb-6">
                "{testimonials[0].quote}"
              </blockquote>
              <div>
                <div className="font-semibold">{testimonials[0].author}</div>
                <div className="text-gray-400">{testimonials[0].role}, {testimonials[0].company}</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{t('seavoice.home.testimonial.stat1')}</div>
                <div className="text-gray-400">{t('seavoice.home.testimonial.stat1Label')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400 mb-2">{t('seavoice.home.testimonial.stat2')}</div>
                <div className="text-gray-400">{t('seavoice.home.testimonial.stat2Label')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">{t('seavoice.home.testimonial.stat3')}</div>
                <div className="text-gray-400">{t('seavoice.home.testimonial.stat3Label')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">{t('seavoice.home.testimonial.stat4')}</div>
                <div className="text-gray-400">{t('seavoice.home.testimonial.stat4Label')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Call Dashboard */}
      <InteractiveCallDashboard />

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/20 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100/20 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 text-blue-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              {t('seavoice.home.faq.badge')}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {typeof t('seavoice.home.faq.title') === 'object' ? (
                <>
                  {t('seavoice.home.faq.title.line1')}
                  <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('seavoice.home.faq.title.line2')}</span>
                </>
              ) : (
                <span dangerouslySetInnerHTML={{ __html: t('seavoice.home.faq.title') }} />
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seavoice.home.faq.subtitle')}
            </p>
          </motion.div>

          {/* Uncollapse All Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <button
              onClick={() => toggleFaq(-1)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg px-6 py-3 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {openFaqIndex === 'all' ? t('seavoice.home.faq.collapseAll') : t('seavoice.home.faq.expandAll')}
            </button>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 rounded-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: (openFaqIndex === index || openFaqIndex === 'all') ? "auto" : 0,
                    opacity: (openFaqIndex === index || openFaqIndex === 'all') ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.home.finalCta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.home.finalCta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getMeetingUrl(i18n.language)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('seavoice.home.finalCta.bookDemo')}
                </motion.button>
              </a>
              <a
                href="https://chat.seasalt.ai/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  {t('seavoice.home.finalCta.signUp')}
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default UnifiedHomePage;

