import React, { useState, useEffect } from 'react';
import { Activity, Clock, Users, MessageCircle, TrendingUp, Zap } from 'lucide-react';

interface Metric {
  id: string;
  label: string;
  value: number;
  change: number;
  icon: React.ComponentType<any>;
  color: string;
  unit: string;
}

const RealtimeDashboard = () => {
  const [metrics, setMetrics] = useState<Metric[]>([
    { id: 'conversations', label: 'Active Chats', value: 247, change: 0, icon: MessageCircle, color: 'text-blue-600', unit: '' },
    { id: 'response', label: 'Avg Response', value: 15, change: 0, icon: Clock, color: 'text-green-600', unit: 's' },
    { id: 'agents', label: 'Online Agents', value: 12, change: 0, icon: Users, color: 'text-purple-600', unit: '' },
    { id: 'satisfaction', label: 'Satisfaction', value: 94, change: 0, icon: TrendingUp, color: 'text-teal-600', unit: '%' },
  ]);

  const [activityPulses, setActivityPulses] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);
  const [nextPulseId, setNextPulseId] = useState(1);

  useEffect(() => {
    // Update metrics every 2 seconds
    const metricsInterval = setInterval(() => {
      setMetrics(prev => prev.map(metric => {
        let newValue = metric.value;
        let change = 0;
        
        switch (metric.id) {
          case 'conversations':
            change = Math.floor(Math.random() * 10 - 5);
            newValue = Math.max(200, Math.min(300, metric.value + change));
            break;
          case 'response':
            change = Math.floor(Math.random() * 6 - 3);
            newValue = Math.max(10, Math.min(30, metric.value + change));
            break;
          case 'agents':
            change = Math.floor(Math.random() * 3 - 1);
            newValue = Math.max(8, Math.min(15, metric.value + change));
            break;
          case 'satisfaction':
            change = Math.floor(Math.random() * 4 - 2);
            newValue = Math.max(85, Math.min(99, metric.value + change));
            break;
        }
        
        return { ...metric, value: newValue, change };
      }));
    }, 2000);

    // Create activity pulses
    const pulseInterval = setInterval(() => {
      const newPulse = {
        id: nextPulseId,
        x: Math.random() * 80 + 10,
        y: Math.random() * 60 + 20,
        delay: Math.random() * 1000,
      };
      
      setActivityPulses(prev => [...prev.slice(-8), newPulse]);
      setNextPulseId(prev => prev + 1);
    }, 800);

    return () => {
      clearInterval(metricsInterval);
      clearInterval(pulseInterval);
    };
  }, [nextPulseId]);

  useEffect(() => {
    // Remove old pulses
    const cleanupInterval = setInterval(() => {
      setActivityPulses(prev => prev.slice(-5));
    }, 3000);

    return () => clearInterval(cleanupInterval);
  }, []);

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl overflow-hidden p-6">
      {/* Activity Pulses */}
      {activityPulses.map((pulse) => (
        <div
          key={pulse.id}
          className="absolute w-4 h-4 bg-teal-400 rounded-full opacity-70 animate-ping"
          style={{
            left: `${pulse.x}%`,
            top: `${pulse.y}%`,
            animationDelay: `${pulse.delay}ms`,
          }}
        />
      ))}

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Activity className="w-6 h-6 text-teal-400" />
          <h3 className="text-xl font-bold text-white">Live Dashboard</h3>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-400 text-sm font-medium">Live</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {metrics.map((metric) => {
          const IconComponent = metric.icon;
          return (
            <div
              key={metric.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <IconComponent className={`w-5 h-5 ${metric.color}`} />
                {metric.change !== 0 && (
                  <div className={`flex items-center text-xs px-2 py-1 rounded-full ${
                    metric.change > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {metric.change > 0 ? '+' : ''}{metric.change}
                    {metric.unit}
                  </div>
                )}
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {metric.value}{metric.unit}
              </div>
              <div className="text-gray-300 text-sm">{metric.label}</div>
            </div>
          );
        })}
      </div>

      {/* Activity Chart */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
        <div className="flex items-center justify-end mb-3">
          <Zap className="w-4 h-4 text-yellow-400" />
        </div>
        
        {/* Simulated Chart Bars */}
        <div className="flex items-end justify-between h-16 space-x-1">
          {Array.from({ length: 12 }, (_, i) => {
            const height = Math.random() * 80 + 20;
            const isActive = Math.random() > 0.7;
            return (
              <div
                key={i}
                className={`w-full rounded-t transition-all duration-500 ${
                  isActive ? 'bg-teal-400' : 'bg-blue-400/60'
                }`}
                style={{ height: `${height}%` }}
              />
            );
          })}
        </div>
        
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>12h ago</span>
          <span>6h ago</span>
          <span>Now</span>
        </div>
      </div>

    </div>
  );
};

export default RealtimeDashboard;
