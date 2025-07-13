import { Link, Bot, Users } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Link className="h-12 w-12" />,
      title: 'Connect Your Channels',
      description: 'Link your phone, WhatsApp, SMS, website chat, and social media in minutes. No technical expertise required.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: <Bot className="h-12 w-12" />,
      title: 'Automate Routine Work',
      description: 'Set up AI to handle common questions like "Where\'s my order?" and book appointments automatically.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Unify Your Team',
      description: 'Your team sees the complete conversation history when customers switch from chat to phone calls.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your customer communications in minutes, not months. 
            No complex setup or technical knowledge required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-lg mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">{index + 1}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 sm:top-8 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-8"></div>
                )}
              </div>

              {/* Step Content */}
              <div className="text-center">
                <div className={`${step.bgColor} ${step.color} p-3 sm:p-4 rounded-2xl w-fit mx-auto mb-4 sm:mb-6`}>
                  {step.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
             href="https://seax.seasalt.ai/signup" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Sign Up Now
          </a>
          <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">Setup in under 5 minutes</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;