import { Link } from 'react-router-dom';
import { getIndustries } from '../data/industriesData';
import { useTranslation } from 'react-i18next';

const Industries = () => {
  const { t, i18n } = useTranslation();
  const industries = getIndustries(t);
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Industries
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses in your industry are using Seasalt.ai to automate communications, 
            improve customer experience, and drive growth.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Link
                key={index}
                to={`/${i18n.language}/industries/${industry.slug}`}
                className={`p-4 sm:p-6 rounded-2xl border-2 ${industry.borderColor} ${industry.bgColor} hover:shadow-lg transition-all duration-300 group cursor-pointer`}
              >
                <div className="text-center mb-4 sm:mb-6">
                  <div className={`${industry.color} mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto w-fit`}>
                    <IconComponent className="h-10 w-10 sm:h-12 sm:w-12" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {industry.title}
                  </h3>
                  <h4 className={`text-xs sm:text-sm font-semibold ${industry.color} mb-3 sm:mb-4`}>
                    {industry.headline}
                  </h4>
                </div>

                <ul className="space-y-1.5 sm:space-y-2">
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <div className={`w-1.5 h-1.5 ${industry.color.replace('text-', 'bg-')} rounded-full mt-1.5 mr-2 flex-shrink-0`}></div>
                      <span className="text-xs text-gray-700 leading-tight">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Ready to See How It Works for Your Industry?
          </h3>
          <p className="text-lg sm:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of growing businesses who have streamlined their customer communications with Seasalt.ai.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
               href="https://seax.seasalt.ai/signup"
               className="bg-white text-blue-600 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200"
             >
               Sign Up
            </a>
            <a
               href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200"
            >
              Book A Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;