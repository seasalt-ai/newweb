import React from 'react';
import { Plane, MapPin, Calendar, Clock, Globe, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TravelPage = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Plane,
      title: t('solutions.travel.features.booking.title', 'Booking Assistance'),
      description: t('solutions.travel.features.booking.description', 'Help customers with flight, hotel, and activity bookings with real-time availability'),
      benefits: [
        t('solutions.travel.features.booking.benefits.availability', 'Real-time availability'), 
        t('solutions.travel.features.booking.benefits.comparisons', 'Price comparisons'), 
        t('solutions.travel.features.booking.benefits.modifications', 'Booking modifications'), 
        t('solutions.travel.features.booking.benefits.cancellation', 'Cancellation support')
      ]
    },
    {
      icon: MapPin,
      title: t('solutions.travel.features.planning.title', 'Travel Planning'),
      description: t('solutions.travel.features.planning.description', 'Provide personalized travel recommendations and itinerary planning'),
      benefits: [
        t('solutions.travel.features.planning.benefits.insights', 'Destination insights'), 
        t('solutions.travel.features.planning.benefits.itinerary', 'Itinerary creation'), 
        t('solutions.travel.features.planning.benefits.recommendations', 'Local recommendations'), 
        t('solutions.travel.features.planning.benefits.weather', 'Weather updates')
      ]
    },
    {
      icon: Clock,
      title: t('solutions.travel.features.support.title', '24/7 Travel Support'),
      description: t('solutions.travel.features.support.description', 'Round-the-clock assistance for travelers across different time zones'),
      benefits: [
        t('solutions.travel.features.support.benefits.timezone', 'Global time zone support'), 
        t('solutions.travel.features.support.benefits.emergency', 'Emergency assistance'), 
        t('solutions.travel.features.support.benefits.updates', 'Real-time updates'), 
        t('solutions.travel.features.support.benefits.multilanguage', 'Multi-language help')
      ]
    },
    {
      icon: Calendar,
      title: t('solutions.travel.features.management.title', 'Trip Management'),
      description: t('solutions.travel.features.management.description', 'Comprehensive trip management from booking to post-travel follow-up'),
      benefits: [
        t('solutions.travel.features.management.benefits.tracking', 'Trip tracking'), 
        t('solutions.travel.features.management.benefits.documents', 'Document management'), 
        t('solutions.travel.features.management.benefits.reminders', 'Reminder notifications'), 
        t('solutions.travel.features.management.benefits.loyalty', 'Loyalty programs')
      ]
    }
  ];

  const useCases = [
    {
      title: t('solutions.travel.useCases.flight.title', 'Flight Booking & Changes'),
      description: t('solutions.travel.useCases.flight.description', 'Assist with flight reservations, changes, and cancellations'),
      example: t('solutions.travel.useCases.flight.example', '"I need to change my flight from Tuesday to Thursday"'),
      outcome: t('solutions.travel.useCases.flight.outcome', 'Real-time flight availability check with rebooking options and fee information')
    },
    {
      title: t('solutions.travel.useCases.disruptions.title', 'Travel Disruptions'),
      description: t('solutions.travel.useCases.disruptions.description', 'Handle flight delays, cancellations, and rebooking assistance'),
      example: t('solutions.travel.useCases.disruptions.example', '"My flight was cancelled, what are my options?"'),
      outcome: t('solutions.travel.useCases.disruptions.outcome', 'Immediate rebooking assistance with alternative flights and compensation information')
    },
    {
      title: t('solutions.travel.useCases.destination.title', 'Destination Information'),
      description: t('solutions.travel.useCases.destination.description', 'Provide travel advice, local insights, and destination recommendations'),
      example: t('solutions.travel.useCases.destination.example', '"What are the best restaurants in Paris?"'),
      outcome: t('solutions.travel.useCases.destination.outcome', 'Curated restaurant recommendations with reservations and local insights')
    },
    {
      title: t('solutions.travel.useCases.documentation.title', 'Travel Documentation'),
      description: t('solutions.travel.useCases.documentation.description', 'Help with visa requirements, passport info, and travel documents'),
      example: t('solutions.travel.useCases.documentation.example', '"Do I need a visa to travel to Japan?"'),
      outcome: t('solutions.travel.useCases.documentation.outcome', 'Comprehensive visa requirements with application process and timeline')
    }
  ];

  const metrics = [
    { 
      value: '60%', 
      label: t('solutions.travel.metrics.booking.label', 'Faster Booking Process'), 
      description: t('solutions.travel.metrics.booking.description', 'With AI-assisted search and booking') 
    },
    { 
      value: '85%', 
      label: t('solutions.travel.metrics.satisfaction.label', 'Customer Satisfaction'), 
      description: t('solutions.travel.metrics.satisfaction.description', 'With 24/7 travel support availability') 
    },
    { 
      value: '40%', 
      label: t('solutions.travel.metrics.call.label', 'Reduced Call Volume'), 
      description: t('solutions.travel.metrics.call.description', 'Through automated travel assistance') 
    },
    { 
      value: '95%', 
      label: t('solutions.travel.metrics.resolution.label', 'Issue Resolution Rate'), 
      description: t('solutions.travel.metrics.resolution.description', 'For travel-related inquiries') 
    }
  ];

  const travelServices = [
    {
      title: t('solutions.travel.services.airlines.title', 'Airlines'),
      description: t('solutions.travel.services.airlines.description', 'Flight bookings, check-ins, and travel updates'),
      features: [
        t('solutions.travel.services.airlines.features.status', 'Flight status'), 
        t('solutions.travel.services.airlines.features.seat', 'Seat selection'), 
        t('solutions.travel.services.airlines.features.baggage', 'Baggage tracking'), 
        t('solutions.travel.services.airlines.features.loyalty', 'Loyalty programs')
      ]
    },
    {
      title: t('solutions.travel.services.hotels.title', 'Hotels & Accommodation'),
      description: t('solutions.travel.services.hotels.description', 'Hotel reservations and guest services'),
      features: [
        t('solutions.travel.services.hotels.features.booking', 'Room booking'), 
        t('solutions.travel.services.hotels.features.amenity', 'Amenity information'), 
        t('solutions.travel.services.hotels.features.requests', 'Special requests'), 
        t('solutions.travel.services.hotels.features.loyalty', 'Loyalty rewards')
      ]
    },
    {
      title: t('solutions.travel.services.agencies.title', 'Travel Agencies'),
      description: t('solutions.travel.services.agencies.description', 'Comprehensive travel planning and booking services'),
      features: [
        t('solutions.travel.services.agencies.features.deals', 'Package deals'), 
        t('solutions.travel.services.agencies.features.itineraries', 'Custom itineraries'), 
        t('solutions.travel.services.agencies.features.groups', 'Group bookings'), 
        t('solutions.travel.services.agencies.features.insurance', 'Travel insurance')
      ]
    },
    {
      title: t('solutions.travel.services.car.title', 'Car Rentals'),
      description: t('solutions.travel.services.car.description', 'Vehicle rental assistance and support'),
      features: [
        t('solutions.travel.services.car.features.availability', 'Car availability'), 
        t('solutions.travel.services.car.features.locations', 'Pickup locations'), 
        t('solutions.travel.services.car.features.insurance', 'Insurance options'), 
        t('solutions.travel.services.car.features.roadside', 'Roadside assistance')
      ]
    },
    {
      title: t('solutions.travel.services.cruise.title', 'Cruise Lines'),
      description: t('solutions.travel.services.cruise.description', 'Cruise booking and onboard services'),
      features: [
        t('solutions.travel.services.cruise.features.cabin', 'Cabin selection'), 
        t('solutions.travel.services.cruise.features.shore', 'Shore excursions'), 
        t('solutions.travel.services.cruise.features.dining', 'Dining reservations'), 
        t('solutions.travel.services.cruise.features.entertainment', 'Entertainment booking')
      ]
    },
    {
      title: t('solutions.travel.services.tour.title', 'Tour Operators'),
      description: t('solutions.travel.services.tour.description', 'Guided tours and activity bookings'),
      features: [
        t('solutions.travel.services.tour.features.availability', 'Tour availability'), 
        t('solutions.travel.services.tour.features.sizes', 'Group sizes'), 
        t('solutions.travel.services.tour.features.equipment', 'Equipment rental'), 
        t('solutions.travel.services.tour.features.guides', 'Local guides')
      ]
    }
  ];

  const integrations = t('solutions.travel.integrations', { returnObjects: true });
  const safeIntegrations = Array.isArray(integrations) ? integrations : [];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-teal-800 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Plane className="w-16 h-16 text-cyan-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('solutions.travel.title', 'Travel & Hospitality')}
              </h1>
            </div>
            <p className="text-2xl text-cyan-200 mb-8 max-w-4xl mx-auto">
              {t('solutions.travel.subtitle', 'Transform travel experiences with AI-powered customer support that handles bookings, provides 24/7 assistance, and creates memorable journeys for your customers.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
            >
              {t('solutions.travel.trialButton', 'Start Travel For Free')}
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
            >
              {t('solutions.travel.demoButton', 'Schedule Travel Demo')}
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('solutions.travel.featuresTitle', 'Travel Industry Features')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.travel.featuresSubtitle', 'Purpose-built features for travel and hospitality businesses to enhance customer experiences.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{feature.description}</p>
                  
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Travel Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('solutions.travel.servicesTitle', 'All Travel Services Covered')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.travel.servicesSubtitle', 'From airlines to hotels, car rentals to cruise lines - we support every aspect of travel.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('solutions.travel.impactTitle', 'Travel Industry Impact')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.travel.impactSubtitle', 'Real results from travel companies using SeaChat for customer support and booking assistance.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-cyan-600 mb-4">{metric.value}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('solutions.travel.useCasesTitle', 'Travel Support Use Cases')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.travel.useCasesSubtitle', 'See how SeaChat handles typical travel inquiries and booking assistance.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                
                <div className="space-y-4">
                  <div className="bg-cyan-50 rounded-lg p-4 border-l-4 border-cyan-500">
                    <h4 className="font-semibold text-cyan-900 mb-2">{t('solutions.travel.travelerRequest', 'Traveler Request')}:</h4>
                    <p className="text-cyan-800 italic">"{useCase.example}"</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 mb-2">{t('solutions.travel.seachatResponse', 'SeaChat Response')}:</h4>
                    <p className="text-green-800">{useCase.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('solutions.travel.integrationsTitle', 'Travel Industry Integrations')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('solutions.travel.integrationsSubtitle', 'Seamlessly connect with travel booking systems, GDS platforms, and hospitality management tools for unified operations.')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {safeIntegrations.map((integration, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{integration}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('solutions.travel.bookingFlowTitle', 'Travel Booking Flow')}</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('solutions.travel.flow.inquiry.title', 'Travel Inquiry')}</h4>
                    <p className="text-gray-600 text-sm">{t('solutions.travel.flow.inquiry.description', 'Customer asks about travel options')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('solutions.travel.flow.search.title', 'Real-time Search')}</h4>
                    <p className="text-gray-600 text-sm">{t('solutions.travel.flow.search.description', 'AI searches across multiple systems')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('solutions.travel.flow.assistance.title', 'Booking Assistance')}</h4>
                    <p className="text-gray-600 text-sm">{t('solutions.travel.flow.assistance.description', 'Guided booking with payment processing')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('solutions.travel.flow.confirmation.title', 'Confirmation & Support')}</h4>
                    <p className="text-gray-600 text-sm">{t('solutions.travel.flow.confirmation.description', 'Booking confirmation with ongoing support')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('solutions.travel.ctaTitle', 'Ready to Transform Travel Experiences?')}
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            {t('solutions.travel.ctaSubtitle', 'Join travel companies already using SeaChat to provide exceptional customer service and streamline booking processes worldwide.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              {t('solutions.travel.ctaTrialButton', 'Start Travel For Free')}
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center"
            >
              {t('solutions.travel.ctaDemoButton', 'Schedule Travel Demo')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelPage;