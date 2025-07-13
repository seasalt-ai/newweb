import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'Customer Success Director',
      company: 'TechFlow Solutions',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'SeaChat transformed our support operations. Starting with free human agents was perfect for our startup, and scaling with AI has been seamless. Our response times improved by 70%.',
      rating: 5,
      metrics: { improvement: '70%', feature: 'Response Time' }
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Operations Manager',
      company: 'EcoCommerce',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'The knowledge base feature is incredible. We uploaded our entire product catalog and FAQs, and the AI now handles 80% of customer queries with perfect accuracy.',
      rating: 5,
      metrics: { improvement: '80%', feature: 'Query Resolution' }
    },
    {
      name: 'Emily Watson',
      title: 'Head of Customer Experience',
      company: 'HealthTech Pro',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'The omnichannel integration is flawless. Our customers can start a conversation on WhatsApp and continue on our website without losing context. Game-changing!',
      rating: 5,
      metrics: { improvement: '95%', feature: 'Customer Satisfaction' }
    },
    {
      name: 'David Park',
      title: 'Founder & CEO',
      company: 'StartupFlow',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'As a bootstrap startup, the free plan was a lifesaver. We provided professional support from day one without any upfront costs. Now we\'re happily paying for AI features as we scale.',
      rating: 5,
      metrics: { improvement: '$0', feature: 'Initial Cost' }
    },
    {
      name: 'Lisa Thompson',
      title: 'Support Team Lead',
      company: 'GlobalRetail Inc',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'The human-AI handoff is so smooth that customers don\'t even notice when they\'re switched between AI and human agents. It\'s exactly what we needed for our complex support scenarios.',
      rating: 5,
      metrics: { improvement: '100%', feature: 'Seamless Handoff' }
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('seachat.testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('seachat.testimonials.subtitle')}
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              {/* Testimonial Content */}
              <div className="md:w-2/3 p-12">
                <div className="flex items-center mb-6">
                  <Quote className="w-12 h-12 text-teal-500 mr-4" />
                  <div className="flex space-x-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
                  "{currentTestimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{currentTestimonial.name}</div>
                    <div className="text-gray-600">{currentTestimonial.title}</div>
                    <div className="text-teal-600 font-medium">{currentTestimonial.company}</div>
                  </div>
                  
                  <div className="text-center bg-teal-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-teal-600">{currentTestimonial.metrics.improvement}</div>
                    <div className="text-sm text-gray-600">{currentTestimonial.metrics.feature}</div>
                  </div>
                </div>
              </div>
              
              {/* Profile Image */}
              <div className="md:w-1/3 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center p-12">
                <div className="relative">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="bg-gray-50 px-12 py-6 flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                className="flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>{t('seachat.testimonials.navigation.previous')}</span>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-teal-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition-colors"
              >
                <span>{t('seachat.testimonials.navigation.next')}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <p className="text-gray-600 mb-8">{t('seachat.testimonials.trustedBy')}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['TechFlow', 'EcoCommerce', 'HealthTech Pro', 'StartupFlow', 'GlobalRetail'].map((company) => (
              <div key={company} className="bg-gray-100 px-6 py-3 rounded-lg">
                <span className="text-gray-700 font-semibold">{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{t('seachat.testimonials.stats.customers').split(' ')[0]}</div>
              <div className="text-gray-600">{t('seachat.testimonials.stats.customers').split(' ').slice(1).join(' ')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">{t('seachat.testimonials.stats.uptime').split(' ')[0]}</div>
              <div className="text-gray-600">{t('seachat.testimonials.stats.uptime').split(' ').slice(1).join(' ')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">{t('seachat.testimonials.stats.messages').split(' ')[0]}</div>
              <div className="text-gray-600">{t('seachat.testimonials.stats.messages').split(' ').slice(1).join(' ')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">{t('seachat.testimonials.stats.rating').split(' ')[0]}</div>
              <div className="text-gray-600">{t('seachat.testimonials.stats.rating').split(' ').slice(1).join(' ')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;