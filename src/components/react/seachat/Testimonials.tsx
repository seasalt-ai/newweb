import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../../../i18n/helpers';

interface TestimonialsProps {
  lang: SupportedLanguage;
  translations?: any;
}

const Testimonials: React.FC<TestimonialsProps> = ({ lang, translations }) => {
  const { t: hookT, isLoading } = translations ? 
    { t: null, isLoading: false } : 
    useTranslation(lang);
    
  const getText = (key: string, fallback: string = key): string => {
    if (translations) {
      const keys = key.split('.');
      let result: any = translations;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          console.warn(`Missing translation key: "${key}" in locale "${lang}"`);
          return fallback;
        }
      }
      
      return typeof result === 'string' ? result : fallback;
    }
    
    return hookT ? hookT(key) : fallback;
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: getText('seachat.testimonials.testimonials.0.name', 'Sarah Chen'),
      title: getText('seachat.testimonials.testimonials.0.title', 'Customer Success Manager'),
      company: getText('seachat.testimonials.testimonials.0.company', 'TechFlow Solutions'),
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: getText('seachat.testimonials.testimonials.0.quote', 'SeaChat transformed our customer support operations. We reduced response times by 80% and our customers love the instant, accurate responses they get 24/7.'),
      rating: 5,
      metrics: { 
        improvement: getText('seachat.testimonials.testimonials.0.metrics.improvement', '80% Faster'), 
        feature: getText('seachat.testimonials.testimonials.0.metrics.feature', 'Response Time') 
      }
    },
    {
      name: getText('seachat.testimonials.testimonials.1.name', 'Michael Rodriguez'),
      title: getText('seachat.testimonials.testimonials.1.title', 'Operations Director'),
      company: getText('seachat.testimonials.testimonials.1.company', 'EcoCommerce Global'),
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: getText('seachat.testimonials.testimonials.1.quote', 'The AI agents handle complex customer queries that would normally require human intervention. Our team can now focus on high-value tasks.'),
      rating: 5,
      metrics: { 
        improvement: getText('seachat.testimonials.testimonials.1.metrics.improvement', '60% Reduced'), 
        feature: getText('seachat.testimonials.testimonials.1.metrics.feature', 'Support Tickets') 
      }
    },
    {
      name: getText('seachat.testimonials.testimonials.2.name', 'Emily Johnson'),
      title: getText('seachat.testimonials.testimonials.2.title', 'Head of Digital'),
      company: getText('seachat.testimonials.testimonials.2.company', 'HealthTech Pro'),
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: getText('seachat.testimonials.testimonials.2.quote', 'SeaChat\'s omnichannel capabilities allowed us to unify our customer communication across WhatsApp, website, and social media.'),
      rating: 5,
      metrics: { 
        improvement: getText('seachat.testimonials.testimonials.2.metrics.improvement', '95% Satisfaction'), 
        feature: getText('seachat.testimonials.testimonials.2.metrics.feature', 'Customer Rating') 
      }
    },
    {
      name: getText('seachat.testimonials.testimonials.3.name', 'David Kim'),
      title: getText('seachat.testimonials.testimonials.3.title', 'CTO'),
      company: getText('seachat.testimonials.testimonials.3.company', 'StartupFlow'),
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: getText('seachat.testimonials.testimonials.3.quote', 'The voice AI capabilities are incredible. Our customers can now call us anytime and get instant support in multiple languages.'),
      rating: 5,
      metrics: { 
        improvement: getText('seachat.testimonials.testimonials.3.metrics.improvement', '24/7 Available'), 
        feature: getText('seachat.testimonials.testimonials.3.metrics.feature', 'Voice Support') 
      }
    },
    {
      name: getText('seachat.testimonials.testimonials.4.name', 'Lisa Wang'),
      title: getText('seachat.testimonials.testimonials.4.title', 'VP of Sales'),
      company: getText('seachat.testimonials.testimonials.4.company', 'GlobalRetail Inc'),
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: getText('seachat.testimonials.testimonials.4.quote', 'The ROI was immediate. We saved thousands in support costs while improving customer satisfaction scores.'),
      rating: 5,
      metrics: { 
        improvement: getText('seachat.testimonials.testimonials.4.metrics.improvement', '3x ROI'), 
        feature: getText('seachat.testimonials.testimonials.4.metrics.feature', 'First Year') 
      }
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
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  // Handle loading state
  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="max-w-4xl mx-auto bg-gray-200 h-96 rounded-3xl"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getText('seachat.testimonials.title', 'What Our Customers Say')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {getText('seachat.testimonials.subtitle', 'Join thousands of businesses transforming their customer support with SeaChat')}
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
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>{getText('seachat.testimonials.navigation.previous', 'Previous')}</span>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-teal-500' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition-colors"
                aria-label="Next testimonial"
              >
                <span>{getText('seachat.testimonials.navigation.next', 'Next')}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <p className="text-gray-600 mb-8">
            {getText('seachat.testimonials.trustedBy', 'Trusted by industry leaders')}
          </p>
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
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {getText('seachat.testimonials.stats.customers', '10,000+ Customers').split(' ')[0]}
              </div>
              <div className="text-gray-600">
                {getText('seachat.testimonials.stats.customers', '10,000+ Customers').split(' ').slice(1).join(' ')}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">
                {getText('seachat.testimonials.stats.uptime', '99.9% Uptime').split(' ')[0]}
              </div>
              <div className="text-gray-600">
                {getText('seachat.testimonials.stats.uptime', '99.9% Uptime').split(' ').slice(1).join(' ')}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {getText('seachat.testimonials.stats.messages', '100M+ Messages').split(' ')[0]}
              </div>
              <div className="text-gray-600">
                {getText('seachat.testimonials.stats.messages', '100M+ Messages').split(' ').slice(1).join(' ')}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {getText('seachat.testimonials.stats.rating', '4.9/5 Rating').split(' ')[0]}
              </div>
              <div className="text-gray-600">
                {getText('seachat.testimonials.stats.rating', '4.9/5 Rating').split(' ').slice(1).join(' ')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;