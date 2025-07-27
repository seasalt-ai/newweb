import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, BarChart3, CheckCircle, ArrowRight, Star, Bot, Users, Headphones, Building2, Zap, Clock, ChevronDown, Brain, Mic, Speaker } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import VoiceDemo from '../components/VoiceDemo';
import InteractiveCallDashboard from '../components/hero-variants/InteractiveCallDashboard';
import VoiceConversationFlow from '../components/hero-variants/VoiceConversationFlow';

const UnifiedHomePage = () => {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  
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
      title: "Customer Calls",
      description: "Caller dials your business number",
      icon: Phone,
      color: "blue",
      status: "calling"
    },
    {
      step: 2,
      title: "AI Agent Answers",
      description: "SeaVoice AI picks up instantly",
      icon: Bot,
      color: "purple",
      status: "answering"
    },
    {
      step: 3,
      title: "Natural Conversation",
      description: "Human-like voice interaction",
      icon: Mic,
      color: "teal",
      status: "talking"
    },
    {
      step: 4,
      title: "Task Completion",
      description: "Booking, support, or transfer",
      icon: CheckCircle,
      color: "green",
      status: "completed"
    }
  ];

  const conversationExamples = [
    {
      customerMessage: "Hi, I'd like to book an appointment for next week.",
      aiResponse: "I'd be happy to help you schedule an appointment! Let me check our availability for next week. What type of service are you looking for?",
      scenario: "Appointment booking"
    },
    {
      customerMessage: "I'm having trouble with my recent order. Can you help?",
      aiResponse: "Of course! I'm here to help with your order. Can you please provide your order number so I can look up the details for you?",
      scenario: "Customer support"
    },
    {
      customerMessage: "What are your business hours?", 
      aiResponse: "We're open Monday through Friday from 9 AM to 6 PM, and Saturday from 10 AM to 4 PM. We're closed on Sundays. Is there anything specific you'd like to know about our services?",
      scenario: "General inquiry"
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
      title: 'Train Your Voice Agent',
      description: 'Customize your voice, scripts, and responses in minutes. Our AI learns from your website and Google Business Profile to accurately represent your brand.',
      icon: Bot,
    },
    {
      title: 'Connect Your Phone System',
      description: 'Seamlessly integrate SeaVoice with your existing phone setup (SIP/VoIP/PSTN). Forward calls to SeaVoice without changing your business number.',
      icon: Phone,
    },
    {
      title: 'Set Up Call Rules',
      description: 'Define how SeaVoice handles different call types and when to escalate to your team. Ensure every caller gets the right response.',
      icon: CheckCircle,
    },
    {
      title: 'Go Live',
      description: 'Activate your AI voice agent and start handling calls. The entire process typically takes less than 20 minutes from start to finish.',
      icon: Headphones,
    },
    {
      title: '24/7 Support & Analytics',
      description: 'Monitor calls in real-time, receive detailed transcripts, and leverage insights to improve your business. Our support team is always available to help you optimize performance.',
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
      category: 'Inbound Solutions',
      icon: Headphones,
      color: 'blue',
          cases: [
            {
              title: 'Appointment Booking & Management',
              description: 'Automate appointment scheduling with AI that understands availability, preferences, and business rules.',
              type: 'Inbound',
              url: '/solutions/inbound/appointment-booking'
            },
            {
              title: 'Technical Support Automation',
              description: 'Provide instant technical support with AI that can diagnose problems and guide customers through solutions.',
              type: 'Inbound',
              url: '/solutions/inbound/technical-support'
            },
            {
              title: 'Virtual Assistant',
              description: 'Handle general inquiries, provide information, and route calls intelligently.',
              type: 'Inbound',
              url: '/solutions/inbound/virtual-assistant'
            },
            {
              title: 'Call Transfer & Routing',
              description: 'Intelligently route calls to the right department or agent based on caller needs.',
              type: 'Inbound',
              url: '/solutions/inbound/call-transfer'
            },
            {
              title: 'Order Tracking & Support',
              description: 'Allow customers to check order status, track shipments, and get delivery updates.',
              type: 'Inbound',
              url: '/solutions/inbound/order-tracking'
            },
            {
              title: 'Payment Processing',
              description: 'Securely process payments, handle billing inquiries, and manage account information.',
              type: 'Inbound',
              url: '/solutions/inbound/payment-processing'
            },
            {
              title: 'IVR Replacement',
              description: 'Replace traditional menus with natural language understanding for a smoother experience.',
              type: 'Inbound',
              url: '/solutions/inbound/ivr-replacement'
            },
            {
              title: 'Mental Health Support',
              description: 'Provide empathetic AI-driven mental health support around the clock.',
              type: 'Inbound',
              url: '/solutions/inbound/mental-health'
            },
            {
              title: 'Scam Shield Protection',
              description: 'Protect your users from scams with real-time detection and blocking.',
              type: 'Inbound',
              url: '/solutions/inbound/scam-shield'
            }
          ]
    },
    {
      category: 'Outbound Solutions',
      icon: Phone,
      color: 'purple',
          cases: [
            {
              title: 'Lead Generation & Qualification',
              description: 'Transform your sales pipeline with AI-powered lead generation that identifies and qualifies prospects.',
              type: 'Outbound',
              url: '/solutions/outbound/lead-generation'
            },
            {
              title: 'Senior Check Calls & Wellness',
              description: 'Regular AI-powered wellness checks for seniors with compassionate conversations that monitor health.',
              type: 'Outbound',
              url: '/solutions/outbound/senior-checks'
            },
            {
              title: 'Customer Surveys & Feedback',
              description: 'Conduct post-purchase surveys and collect valuable customer feedback automatically.',
              type: 'Outbound',
              url: '/solutions/outbound/surveys'
            },
            {
              title: 'Collections & Payment Reminders',
              description: 'Respectful and effective collection calls that improve payment rates while maintaining relationships.',
              type: 'Outbound',
              url: '/solutions/outbound/collections'
            },
            {
              title: 'Customer Reactivation',
              description: 'Re-engage dormant customers with personalized outreach campaigns.',
              type: 'Outbound',
              url: '/solutions/outbound/reactivation'
            },
            {
              title: 'Fraud Alerts & Verification',
              description: 'Notify customers about suspicious transactions and verify their identity for security.',
              type: 'Outbound',
              url: '/solutions/outbound/fraud-alerts'
            },
            {
              title: 'Large Scale Campaigns',
              description: 'Execute massive voice campaigns to reach thousands of customers globally.',
              type: 'Outbound',
              url: '/solutions/outbound/campaigns'
            },
            {
              title: 'Proactive Customer Support',
              description: 'Keep customers informed proactively with intelligent notifications.',
              type: 'Outbound',
              url: '/solutions/outbound/proactive-support'
            },
            {
              title: 'Subscription Renewals',
              description: 'Automate renewals with reminders and seamless payment processing.',
              type: 'Outbound',
              url: '/solutions/outbound/renewals'
            }
          ]
    }
  ];

  const testimonials = [
    {
      quote: "SeaVoice reduced our agent training time by 2 weeks and increased efficiency by 20%",
      author: "Sarah Johnson",
      role: "VP of Customer Success",
      company: "TechCorp Inc."
    }
  ];

  const faqItems = [
    {
      question: 'How does SeaVoice differ from a traditional chatbot?',
      answer: 'SeaVoice provides real-time voice conversations with advanced AI that can understand context, handle interruptions, and deliver human-like responses over the phone. Unlike text-based chatbots, SeaVoice handles actual voice calls with natural speech patterns.'
    },
    {
      question: 'How long does it take to set up?',
      answer: 'Setup typically takes less than 20 minutes. You can train your voice agent, connect your phone system, set up call rules, and go live in one session.'
    },
    {
      question: 'Can callers tell they\'re speaking with an AI?',
      answer: 'Our advanced voice technology creates very human-like conversations. While some callers may notice, most find the experience natural and helpful. You can also customize the AI to introduce itself as an AI assistant if preferred.'
    },
    {
      question: 'What happens if SeaVoice can\'t answer a question?',
      answer: 'SeaVoice is designed to handle escalations gracefully. It can transfer calls to human agents, take messages, schedule callbacks, or direct callers to appropriate resources based on your configured rules.'
    },
    {
      question: 'How does pricing work?',
      answer: 'We offer transparent per-minute pricing. Premium plans include base minutes with additional usage billed per minute. Enterprise plans are customized based on volume and specific needs.'
    },
    {
      question: 'Can I customize the AI\'s voice?',
      answer: 'Yes! You can choose from multiple voice options, adjust tone and speaking style, and even clone custom voices for Enterprise plans. The AI can be trained to match your brand\'s communication style.'
    },
    {
      question: 'Is SeaVoice multilingual?',
      answer: 'Yes, SeaVoice supports conversations in over 10 languages including English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Chinese, and Japanese.'
    },
    {
      question: 'What industries benefit most from SeaVoice?',
      answer: 'SeaVoice works well across industries including healthcare, real estate, hospitality, financial services, e-commerce, professional services, and any business that handles high call volumes or needs 24/7 availability.'
    },
    {
      question: 'Can SeaVoice handle emergency calls?',
      answer: 'While SeaVoice can handle urgent inquiries and escalate appropriately, we recommend maintaining direct emergency protocols. SeaVoice can be configured to immediately transfer emergency-related calls to human operators.'
    },
    {
      question: 'Can SeaVoice detect spam calls?',
      answer: 'Yes, SeaVoice includes built-in spam detection that can identify and filter suspicious calls, protecting your business from unwanted interruptions while ensuring legitimate calls get through.'
    },
    {
      question: 'How do I get started?',
      answer: 'Getting started is easy! Book a demo to see SeaVoice in action, then our team will help you set up your voice agent, integrate with your phone system, and configure it for your specific needs. Most customers are up and running within a day.'
    },
  ];

  // Interactive Call Dashboard data
  const mockCalls = [
    {
      id: 1,
      customer: "Sarah Johnson",
      type: "Appointment Booking",
      status: "completed",
      duration: "3:42",
      time: "2 minutes ago",
      satisfaction: 5,
      outcome: "Appointment scheduled for next Tuesday at 2 PM",
      tags: ["booking", "satisfied"]
    },
    {
      id: 2,
      customer: "Mike Chen", 
      type: "Technical Support",
      status: "transferred",
      duration: "1:28",
      time: "5 minutes ago",
      satisfaction: 4,
      outcome: "Transferred to technical specialist - Issue: Login problems",
      tags: ["support", "escalated"]
    },
    {
      id: 3,
      customer: "Emily Rodriguez",
      type: "Order Inquiry",
      status: "completed",
      duration: "2:15",
      time: "8 minutes ago",
      satisfaction: 5,
      outcome: "Order status provided - Package will arrive tomorrow",
      tags: ["inquiry", "resolved"]
    },
    {
      id: 4,
      customer: "David Wilson",
      type: "Billing Question",
      status: "in-progress",
      duration: "1:03",
      time: "Just now",
      satisfaction: null,
      outcome: "Currently discussing billing discrepancy",
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
                Your Business Never Sleeps
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  AI Voice Agents
                </span>
                <br />
                <span className="text-white/90">Handle Calls 24/7</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-4xl mb-12 font-light">
                Transform customer interactions with human-like AI that never sleeps.
                <br className="hidden sm:block" />
                <span className="text-blue-300">Automate support, bookings, and <span className="font-bold text-yellow-300">outbound call with scale</span>.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-start mb-16">
                <motion.a 
                  href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Book a Demo</span>
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
                  <span>Sign Up Now</span>
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
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">Try Our Voice Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Listen to real examples of SeaVoice in action and experience the future of AI-powered conversations</p>
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
              Proven Success Stories
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">Transform Your Business with <br className="hidden sm:block" />Successful Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover how industry leaders leverage SeaVoice AI to revolutionize customer interactions and drive growth</p>
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
              Simple Setup Process
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">Get Started in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5 Easy Steps</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From setup to go-live in under 20 minutes. Our streamlined process gets your AI voice agent ready to handle calls immediately.</p>
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
              Most customers are live within 20 minutes
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Voice AI vs Human vs Outsourced Services</h2>
            <p className="text-xl text-gray-600">See how SeaVoice AI compares to traditional alternatives</p>
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
                  <h3 className="text-xl font-bold text-purple-900">SeaVoice AI</h3>
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
                  <h3 className="text-xl font-bold text-gray-700">Full-Time Human</h3>
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
                  <h3 className="text-xl font-bold text-gray-700">Outsourced Service</h3>
                </motion.div>
              </div>

              {/* Comparison Rows */}
              <div className="space-y-4">
                {[
                  {
                    feature: '24/7 Availability',
                    seavoice: { text: 'Always on', winner: true, icon: '🌟' },
                    human: { text: '9-5 only', winner: false },
                    outsourced: { text: 'Extra fees', winner: false }
                  },
                  {
                    feature: 'Call Volume Handling',
                    seavoice: { text: '500+ concurrent', winner: true, icon: '🌟' },
                    human: { text: '1 call at a time', winner: false },
                    outsourced: { text: '5-10 concurrent', winner: false }
                  },
                  {
                    feature: 'Language Support',
                    seavoice: { text: '30+ languages', winner: true, icon: '🌟' },
                    human: { text: 'Limited by hire', winner: false },
                    outsourced: { text: 'Extra $/language', winner: false }
                  },
                  {
                    feature: 'Emotional Intelligence',
                    seavoice: { text: 'Basic empathy', winner: false },
                    human: { text: 'High', winner: true },
                    outsourced: { text: 'Agent-dependent', winner: false }
                  },
                  {
                    feature: 'Compliance',
                    seavoice: { text: 'Built-in tools', winner: true, icon: '🌟' },
                    human: { text: 'Training required', winner: false },
                    outsourced: { text: 'Training required', winner: false }
                  },
                  {
                    feature: 'Implementation Time',
                    seavoice: { text: '<1 day', winner: true, icon: '🌟' },
                    human: { text: '6-8 week hiring', winner: false },
                    outsourced: { text: '2-4 weeks', winner: false }
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
                  <h3 className="text-3xl font-bold mb-2">💰 Cost Comparison</h3>
                  <p className="text-green-100">See the dramatic cost savings with SeaVoice AI</p>
                </div>
              </motion.div>

              {/* Cost Comparison Rows */}
              <div className="space-y-4">
                {[
                  {
                    feature: 'Monthly Cost',
                    seavoice: { text: 'Starts at $30', winner: true, icon: '🌟' },
                    human: { text: '$3,397+', winner: false },
                    outsourced: { text: '$1,500-$2,500', winner: false }
                  },
                  {
                    feature: 'Effective Rate',
                    seavoice: { text: '$0.12/minute', winner: true, icon: '🌟' },
                    human: { text: '$6.79/call', winner: false },
                    outsourced: { text: '$3.00-$5.00/call', winner: false }
                  },
                  {
                    feature: 'Hidden Costs',
                    seavoice: { text: 'None', winner: true, icon: '🌟' },
                    human: { text: 'Benefits ($800+/mo)', winner: false },
                    outsourced: { text: 'Setup fees', winner: false }
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
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-green-100">Cost Savings vs Human</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">80%</div>
                    <div className="text-green-100">Savings vs Outsourced</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">$40K+</div>
                    <div className="text-green-100">Annual Savings</div>
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
              <h3 className="text-2xl font-bold mb-4">Ready to Experience the SeaVoice AI Advantage?</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Join thousands of businesses that have transformed their customer service with AI that works 24/7, handles unlimited calls, and scales with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Book a Demo
                </a>
                <a href="https://chat.seasalt.ai/signup" target="_blank" rel="noopener noreferrer" className="bg-purple-500 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 transition-colors">
                  Sign Up Now
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
              Capabilities of SeaVoice is brought to you by{' '}
              <span className="text-teal-400">SeaChat</span>
            </h2>
            <p className="text-xl text-gray-300">
              An omni-channel and multi-modal no-code agent platform
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
              One Team, Working Together for You
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
                <h4 className="text-lg font-semibold mb-2">Chat AI Agent</h4>
                <p className="text-gray-300">Instant responses across web, mobile, and messaging platforms</p>
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
                <h4 className="text-lg font-semibold mb-2">Human Agent</h4>
                <p className="text-gray-300">Seamless handoff for complex queries that need a human touch</p>
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
                <h4 className="text-lg font-semibold mb-2">Voice AI Agent</h4>
                <p className="text-gray-300">Natural phone conversations powered by advanced voice AI</p>
              </motion.div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="/seachat"
                className="inline-flex items-center text-teal-400 hover:text-teal-300 font-semibold transition-colors"
              >
                Learn more about SeaChat
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
                <div className="text-4xl font-bold text-blue-400 mb-2">2 weeks</div>
                <div className="text-gray-400">Reduced training time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400 mb-2">20%</div>
                <div className="text-gray-400">Efficiency gain</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">94%</div>
                <div className="text-gray-400">Customer satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-gray-400">Simultaneous calls</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
              Got Questions?
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Frequently Asked <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about SeaVoice AI and how it can transform your business communications
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
              {openFaqIndex === 'all' ? 'Collapse All' : 'Expand All Questions'}
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
          
          {/* Additional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Our team is here to help you understand how SeaVoice can work for your specific business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Schedule a Call
                </a>
                <a 
                  href="mailto:seax@seasalt.ai" 
                  className="bg-white/10 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  Email Support
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Call Dashboard */}
      <InteractiveCallDashboard />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to see it in action?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get a personalized demo and discover how SeaVoice can transform your customer communications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Book a Demo Today
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
                  Sign Up Now
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

