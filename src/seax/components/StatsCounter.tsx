import { useEffect, useState } from 'react';
import { seaxStats } from '../data/seaxFeatures';

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

      stats.forEach((stat, index) => {
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
