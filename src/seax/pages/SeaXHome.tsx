import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import StatsCounter from '../components/StatsCounter';
import Footer from '../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { MessageSquare, Phone, Zap, TrendingUp, Target, CheckCircle, Star, ArrowRight, BarChart3, Users, Upload, Smartphone, Send } from 'lucide-react';

const SeaXHome = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;
  
  // Generate canonical URL for SEO
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${currentLanguage}/seax` 
    : `/${currentLanguage}/seax`;
  
  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="SeaX - Reach Millions Instantly | Mass SMS, WhatsApp & Voice Communication"
        description="The ultimate platform for sending millions of SMS, WhatsApp messages, and automated phone calls. Fill your pipeline, drive revenue, and scale your business with powerful outreach."
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={canonicalUrl}
      />
      
      <Header />
      <Hero />
      <StatsCounter />
      
      {/* Social Proof Bar */}
      <div className="bg-gray-50 py-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-6 font-medium">
            Powering outreach for leading brands in...
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechCorp</div>
            <div className="text-2xl font-bold text-gray-400">SalesForce</div>
            <div className="text-2xl font-bold text-gray-400">MarketPro</div>
            <div className="text-2xl font-bold text-gray-400">GrowthCo</div>
            <div className="text-2xl font-bold text-gray-400">LeadGen</div>
          </div>
        </div>
      </div>
      
      {/* The Scaling Problem Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stop Cold Calling. Start Converting.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your outreach from tedious manual processes to powerful automated campaigns that reach millions instantly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-red-600 transform rotate-45" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Manual Outreach</h3>
                  <p className="text-gray-600">100 calls per day, 2% connection rate, exhausted sales team</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">SeaX Automation</h3>
                  <p className="text-gray-600">500,000 messages per hour, 15% engagement rate, scalable growth</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10M+</div>
                  <div className="text-sm text-gray-600">Messages Sent Daily</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500K</div>
                  <div className="text-sm text-gray-600">Calls per Hour</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Delivery Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15x</div>
                  <div className="text-sm text-gray-600">ROI Average</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Massive Scale Features */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for Massive Scale
            </h2>
            <p className="text-xl text-gray-600">
              The infrastructure and features you need to reach millions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Millions of Texts (SMS)</h3>
              <p className="text-gray-600">Carrier-grade deliverability for your largest campaigns with real-time analytics.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unlimited WhatsApp</h3>
              <p className="text-gray-600">Go beyond limits with our robust WhatsApp Business API integration.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High-Volume Voice</h3>
              <p className="text-gray-600">Deploy thousands of AI-powered or pre-recorded calls in minutes.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Conversations</h3>
              <p className="text-gray-600">Let AI handle follow-ups and qualify your leads 24/7 at scale.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lead Generation Focus */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From First Touch to Closed Deal
            </h2>
            <p className="text-xl text-gray-600">
              A complete lead generation and nurturing system that scales with your business
            </p>
          </div>
          
          <div className="relative">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Target, title: "Capture", desc: "Reach millions with targeted campaigns" },
                { icon: Users, title: "Qualify", desc: "AI automatically scores and segments leads" },
                { icon: TrendingUp, title: "Nurture", desc: "Automated follow-ups that convert" },
                { icon: CheckCircle, title: "Close", desc: "Hand off hot leads to your sales team" }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-blue-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How SeaX Works
            </h2>
            <p className="text-xl text-gray-600">
              Launch a Campaign to Millions in 4 Simple Steps
            </p>
          </div>
          <div className="space-y-20">
            {[
              {
                number: '01',
                title: 'Upload Your Contacts',
                description: 'Import your contact list from CSV, Excel, or connect your CRM. Our system handles millions of contacts with ease.',
                icon: <Upload className="w-6 h-6 text-blue-600" />,
                illustration: (
                  <div className="relative bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
                    <div className="space-y-4 w-full max-w-sm">
                      <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-blue-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">✓</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">contacts.csv</div>
                            <div className="text-sm text-gray-600">10,000 contacts</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-dashed border-gray-300">
                        <div className="flex items-center space-x-3">
                          <Upload className="w-8 h-8 text-gray-400" />
                          <div>
                            <div className="font-semibold text-gray-700">Drop files here</div>
                            <div className="text-sm text-gray-500">or browse</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">100K+</div>
                        <div className="text-sm text-gray-600">contacts imported</div>
                      </div>
                    </div>
                  </div>
                ),
                time: '2 minutes'
              },
              {
                number: '02',
                title: 'Choose Delivery Method',
                description: 'Select how you want to reach your audience via SMS, WhatsApp, or Phone Calls.',
                icon: <Smartphone className="w-6 h-6 text-blue-600" />,
                illustration: (
                  <div className="relative bg-gradient-to-r from-green-50 to-teal-100 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                      <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-green-200 text-center">
                        <MessageSquare className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">SMS</div>
                        <div className="text-sm text-gray-600">98% open rate</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-teal-200 text-center">
                        <Send className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">WhatsApp</div>
                        <div className="text-sm text-gray-600">85% engagement</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-blue-200 text-center">
                        <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">Voice</div>
                        <div className="text-sm text-gray-600">Real-time calls</div>
                      </div>
                    </div>
                  </div>
                ),
                time: '1 minute'
              },
              {
                number: '03',
                title: 'Create Your Campaign',
                description: 'Design your message and set your campaign parameters.',
                icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
                illustration: (
                  <div className="relative bg-gradient-to-r from-purple-50 to-pink-100 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
                    <div className="space-y-4 w-full max-w-sm">
                      <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-purple-200">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-semibold text-gray-900">Campaign Draft</span>
                          <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded">Draft</span>
                        </div>
                        <div className="bg-gray-50 rounded p-3 mb-3">
                          <div className="text-sm text-gray-700">"Hi {name}, Check out our new product launch..."</div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="flex-1 bg-purple-600 text-white px-3 py-2 rounded text-sm font-medium">Preview</button>
                          <button className="flex-1 bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm font-medium">A/B Test</button>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-pink-200">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-900">Schedule</span>
                          <span className="text-sm text-pink-600">Now</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
                time: '5 minutes'
              },
              {
                number: '04',
                title: 'Launch & Analyze',
                description: 'Deploy your campaign to millions instantly and track real-time performance with detailed analytics.',
                icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
                illustration: (
                  <div className="relative bg-gradient-to-r from-orange-50 to-red-100 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
                    <div className="space-y-4 w-full max-w-sm">
                      <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-orange-200">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-semibold text-gray-900">Campaign Status</span>
                          <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">Live</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-orange-600">847K</div>
                            <div className="text-sm text-gray-600">Delivered</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">12.3%</div>
                            <div className="text-sm text-gray-600">Response</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-red-200">
                        <div className="h-20 bg-gradient-to-r from-orange-200 to-red-200 rounded relative">
                          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-orange-400 to-red-400 rounded-b"><p className="text-xs text-gray-700">Real-time Analytics</p></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
                time: '1 click'
              }
            ].map((step, index) => (
              <div key={step.number} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl font-bold text-blue-600">
                      {step.number}
                    </div>
                    <div className="bg-blue-100 p-3 rounded-lg">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {step.description}
                  </p>
                  <div className="space-y-3">
                    {step.features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">
                        Time required: {step.time}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  {step.illustration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Growth Leaders
            </h2>
            <p className="text-xl text-gray-600">
              See how companies scale their outreach with SeaX
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "We doubled our qualified leads in a month thanks to SeaX's ability to reach our entire database.",
                author: "Sarah Chen",
                role: "VP of Sales, TechScale",
                rating: 5
              },
              {
                quote: "The ROI is incredible. We're sending 2 million messages monthly and our pipeline has never been fuller.",
                author: "Michael Rodriguez",
                role: "Growth Manager, LeadForce",
                rating: 5
              },
              {
                quote: "SeaX replaced 5 different tools and 10x'd our outreach capacity. Game-changing for our sales team.",
                author: "Jennifer Park",
                role: "CEO, MarketBoost",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg border">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Final CTA Section */}
      <div className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Grow?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies using SeaX to scale their outreach and fill their pipeline with qualified leads.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Request a Personalized Demo</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to={getLocalizedPath('/pricing')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <BarChart3 className="w-5 h-5" />
              <span>Calculate Your ROI</span>
            </Link>
          </div>
          
          <p className="text-blue-100">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SeaXHome;
