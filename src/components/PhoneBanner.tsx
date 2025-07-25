import { Phone, Clock } from 'lucide-react';

const PhoneBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-3 px-4 shadow-lg border-b-2 border-blue-500">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-2 text-center">
          <Phone className="w-5 h-5 animate-pulse" />
          <span className="font-semibold text-lg">
            Call <a 
              href="tel:+1-762-244-3688" 
              className="text-yellow-300 hover:text-yellow-200 underline decoration-2 underline-offset-2"
            >
              +1 (SMB)-AI-AGENT
            </a> to book a meeting with the SeaVoice AI agent.
          </span>
          <div className="flex items-center space-x-1 text-yellow-300">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Available 24/7</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneBanner;
