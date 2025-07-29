import { useEffect, useState } from 'react';

interface StatItem {
  id: string;
  label: string;
  value: string;
  animatedValue: number;
  suffix: string;
  color: string;
}

const StatsCounter = () => {
  const [stats, setStats] = useState<StatItem[]>([
    {
      id: 'messages',
      label: 'Messages Sent Daily',
      value: '10,000,000',
      animatedValue: 0,
      suffix: 'M+',
      color: 'text-blue-600'
    },
    {
      id: 'calls',
      label: 'Calls Per Hour',
      value: '500,000',
      animatedValue: 0,
      suffix: 'K+',
      color: 'text-green-600'
    },
    {
      id: 'uptime',
      label: 'Uptime Guarantee',
      value: '99.9',
      animatedValue: 0,
      suffix: '%',
      color: 'text-purple-600'
    },
    {
      id: 'countries',
      label: 'Countries Supported',
      value: '200',
      animatedValue: 0,
      suffix: '+',
      color: 'text-orange-600'
    },
    {
      id: 'roi',
      label: 'Average ROI',
      value: '400',
      animatedValue: 0,
      suffix: '%',
      color: 'text-red-600'
    }
  ]);

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      stats.forEach((stat) => {
        const targetValue = stat.id === 'messages' ? 10 : 
                          stat.id === 'calls' ? 500 : 
                          stat.id === 'uptime' ? 99.9 : 
                          stat.id === 'countries' ? 200 : 
                          stat.id === 'roi' ? 400 : 0;

        let currentValue = 0;
        const increment = targetValue / steps;

        const interval = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(interval);
          }

          setStats(prevStats => 
            prevStats.map(s => 
              s.id === stat.id 
                ? { ...s, animatedValue: currentValue }
                : s
            )
          );
        }, stepDuration);
      });
    };

    // Start animation after component mounts
    const timer = setTimeout(animateStats, 500);

    return () => clearTimeout(timer);
  }, []);

  const formatValue = (stat: StatItem) => {
    if (stat.id === 'uptime') {
      return stat.animatedValue.toFixed(1);
    }
    return Math.floor(stat.animatedValue).toLocaleString();
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powering High-Volume Communication
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of businesses that trust SeaX to deliver their most important messages at scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {formatValue(stat)}
                  <span className="text-2xl">{stat.suffix}</span>
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard mockup */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border max-w-5xl w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-gray-600">SeaX Dashboard</span>
            </div>

            {/* Campaign stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">2.4M</div>
                <div className="text-sm text-gray-600">Messages Sent</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
                <div className="text-sm text-gray-600">Delivery Rate</div>
              </div>
            </div>

            {/* Recent activity */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-700 mb-2">Recent Activity</div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1 text-sm">
                  <div className="font-medium">Flash Sale Campaign</div>
                  <div className="text-gray-500">50,000 SMS sent • 2 min ago</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1 text-sm">
                  <div className="font-medium">Lead Follow-up</div>
                  <div className="text-gray-500">12,000 calls completed • 5 min ago</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="flex-1 text-sm">
                  <div className="font-medium">WhatsApp Campaign</div>
                  <div className="text-gray-500">25,000 messages queued • 8 min ago</div>
                </div>
              </div>
            </div>

            {/* Live indicator */}
            <div className="mt-6 flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Live campaigns running</span>
            </div>
          </div>
        </div>

        {/* Real-time activity indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Live activity: Messages being sent right now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
