import { Check } from 'lucide-react';

const SupportPlan = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Support Plan
          </h2>
          <p className="text-xl text-gray-600">
            *All prices are in US dollars
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Trial Plan */}
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl p-8 text-white shadow-xl lg:col-span-1 flex flex-col h-full">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 text-white">Trial</h3>
              <div className="text-6xl font-bold mb-6 text-yellow-50">$0</div>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Check className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-lg font-medium text-white">DIY with product wiki</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Check className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-lg font-medium text-white">Email (seachat@seasalt.ai)</span>
                </div>
                <div className="text-base text-yellow-50 mt-4">
                  or chat with customer<br />support (on this page)
                </div>
              </div>
            </div>
          </div>

          {/* Launch Plan */}
          <div className="bg-black rounded-2xl p-8 text-white shadow-xl lg:col-span-2 flex flex-col h-full">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Launch</h3>
              <div className="mb-4">
                <span className="text-2xl">Starts at </span>
                <span className="text-4xl font-bold text-pink-200">$500</span>
                <span className="text-2xl"> up to </span>
                <span className="text-4xl font-bold text-pink-200">$10,000</span>
              </div>
              <div className="text-lg mb-6">per month for 3 months</div>
            </div>

            <div className="mb-8">
              <p className="text-pink-100 mb-6">
                With the Launch Support Plan, our team is committed to providing professional guidance in the following areas:
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Unlimited 1-on-1 Meetings:</div>
                  <div className="text-pink-100">Personalized sessions with the SeaChat team.</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Prompt Tuning:</div>
                  <div className="text-pink-100">Customization for both chat and voice applications.</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Design and Technical Guidance:</div>
                  <div className="text-pink-100">Expert advice on design and technical aspects.</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">AI Agent Launch Support:</div>
                  <div className="text-pink-100">Comprehensive assistance throughout the launch process.</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Go-to-Market Strategy:</div>
                  <div className="text-pink-100">Strategic planning for market entry.</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Successful AI Agent Launch:</div>
                  <div className="text-pink-100">Achieve a successful launch within 4-6 weeks.</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Post-Launch Iteration and Improvement:</div>
                  <div className="text-pink-100">Continuous enhancement based on usage and feedback.</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Operational Stability:</div>
                  <div className="text-pink-100">Establish standard operating procedures for the long-term operation of AI agents.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportPlan;
