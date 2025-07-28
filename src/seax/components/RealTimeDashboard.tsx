import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, TrendingUp, Users, MessageSquare, Phone, Eye, Target, Zap } from 'lucide-react';

interface MetricData {
  id: string;
  label: string;
  value: number;
  previousValue: number;
  trend: 'up' | 'down' | 'stable';
  color: string;
  icon: JSX.Element;
}

interface CampaignActivity {
  id: number;
  type: 'sms' | 'whatsapp' | 'voice';
  status: 'sent' | 'delivered' | 'read' | 'replied';
  count: number;
  timestamp: Date;
}

const RealTimeDashboard = () => {
  const [metrics, setMetrics] = useState<MetricData[]>([
    {
      id: 'messages',
      label: 'Messages Sent',
      value: 245600,
      previousValue: 245600,
      trend: 'stable',
      color: 'text-blue-600',
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      id: 'delivered',
      label: 'Delivered',
      value: 238200,
      previousValue: 238200,
      trend: 'stable',
      color: 'text-green-600',
      icon: <Target className="w-5 h-5" />
    },
    {
      id: 'engagement',
      label: 'Engagement Rate',
      value: 87,
      previousValue: 87,
      trend: 'stable',
      color: 'text-purple-600',
      icon: <Eye className="w-5 h-5" />
    },
    {
      id: 'active',
      label: 'Active Users',
      value: 12400,
      previousValue: 12400,
      trend: 'stable',
      color: 'text-orange-600',
      icon: <Users className="w-5 h-5" />
    }
  ]);

  const [campaignActivity, setCampaignActivity] = useState<CampaignActivity[]>([]);
  const [liveCount, setLiveCount] = useState(0);

  useEffect(() => {
    // Update metrics continuously
    const metricsInterval = setInterval(() => {
      setMetrics(prevMetrics => 
        prevMetrics.map(metric => {
          const changePercent = (Math.random() - 0.5) * 0.02; // ±1% change
          let newValue = metric.value * (1 + changePercent);
          
          // Special handling for percentage values
          if (metric.id === 'engagement') {
            newValue = Math.max(70, Math.min(95, newValue));
          }
          
          const trend = newValue > metric.value ? 'up' : newValue < metric.value ? 'down' : 'stable';
          
          return {
            ...metric,
            previousValue: metric.value,
            value: Math.round(newValue),
            trend
          };
        })
      );
      
      setLiveCount(prev => prev + 1);
    }, 2000);

    return () => clearInterval(metricsInterval);
  }, []);

  useEffect(() => {
    // Generate campaign activity
    const activityInterval = setInterval(() => {
      if (Math.random() > 0.3) {
        const activities: CampaignActivity[] = [
          {
            id: Date.now(),
            type: ['sms', 'whatsapp', 'voice'][Math.floor(Math.random() * 3)] as 'sms' | 'whatsapp' | 'voice',
            status: ['sent', 'delivered', 'read', 'replied'][Math.floor(Math.random() * 4)] as 'sent' | 'delivered' | 'read' | 'replied',
            count: Math.floor(Math.random() * 5000) + 100,
            timestamp: new Date()
          }
        ];
        
        setCampaignActivity(prev => [...activities, ...prev.slice(0, 4)]);
      }
    }, 1500);

    return () => clearInterval(activityInterval);
  }, []);

  const getActivityColor = (status: string) => {
    switch (status) {
      case 'sent': return 'text-blue-500';
      case 'delivered': return 'text-green-500';
      case 'read': return 'text-purple-500';
      case 'replied': return 'text-orange-500';
      default: return 'text-gray-500';
    }
  };

  const getActivityBg = (status: string) => {
    switch (status) {
      case 'sent': return 'bg-blue-50 border-blue-200';
      case 'delivered': return 'bg-green-50 border-green-200';
      case 'read': return 'bg-purple-50 border-purple-200';
      case 'replied': return 'bg-orange-50 border-orange-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (trend === 'down') return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
    return <div className="w-4 h-4" />;
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-20 lg:py-32 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: '100%',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 text-blue-200 text-sm font-medium mb-8"
            >
              <BarChart3 className="w-4 h-4 mr-2 text-cyan-400" />
              Real-Time Analytics
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              <span className="block">Live</span>
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Performance
              </span>
              <span className="block">Insights</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Watch your campaigns perform in real-time with live metrics, engagement tracking, 
              and instant performance insights. Make data-driven decisions as they happen.
            </p>

            {/* Key Performance Indicators */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={metric.color}>
                      {metric.icon}
                    </div>
                    {getTrendIcon(metric.trend)}
                  </div>
                  <motion.div
                    key={metric.value}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-bold text-white mb-1"
                  >
                    {metric.id === 'engagement' ? `${metric.value}%` : metric.value.toLocaleString()}
                  </motion.div>
                  <div className="text-sm text-gray-300">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Live Activity Counter */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-lg p-4 border border-green-400/30">
              <div className="flex items-center space-x-2 mb-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-3 h-3 bg-green-400 rounded-full"
                />
                <span className="text-green-300 font-medium">Live Updates</span>
              </div>
              <motion.div
                key={liveCount}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="text-xl font-bold text-white"
              >
                {liveCount.toLocaleString()} data points refreshed
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Dashboard Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Campaign Analytics</h3>
                <div className="flex items-center space-x-2">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-green-400 rounded-full"
                  />
                  <span className="text-green-300 text-sm font-medium">Live</span>
                </div>
              </div>

              {/* Live Chart Simulation */}
              <div className="relative h-40 bg-slate-800/50 rounded-lg mb-6 overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-around p-4">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-sm"
                      style={{ width: '20px' }}
                      animate={{
                        height: [
                          `${30 + Math.random() * 40}px`,
                          `${40 + Math.random() * 50}px`,
                          `${35 + Math.random() * 45}px`
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
                
                {/* Chart Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="absolute bottom-2 left-2 text-xs text-cyan-300">
                  Engagement Trend
                </div>
              </div>

              {/* Real-time Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-blue-500/20 rounded-lg">
                  <motion.div
                    key={metrics[0]?.value}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-lg font-bold text-blue-300 mb-1"
                  >
                    {(metrics[0]?.value || 0).toLocaleString()}
                  </motion.div>
                  <div className="text-xs text-blue-200">Sent</div>
                </div>
                
                <div className="text-center p-3 bg-green-500/20 rounded-lg">
                  <motion.div
                    key={metrics[1]?.value}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-lg font-bold text-green-300 mb-1"
                  >
                    {(metrics[1]?.value || 0).toLocaleString()}
                  </motion.div>
                  <div className="text-xs text-green-200">Delivered</div>
                </div>
                
                <div className="text-center p-3 bg-purple-500/20 rounded-lg">
                  <motion.div
                    key={metrics[2]?.value}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-lg font-bold text-purple-300 mb-1"
                  >
                    {metrics[2]?.value || 0}%
                  </motion.div>
                  <div className="text-xs text-purple-200">Engagement</div>
                </div>
              </div>

              {/* Live Activity Feed */}
              <div className="space-y-3">
                <div className="text-sm font-medium text-white mb-3 flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                  Live Activity
                </div>
                
                <AnimatePresence mode="popLayout">
                  {campaignActivity.slice(0, 4).map((activity) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 20, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-center justify-between p-3 rounded-lg border ${getActivityBg(activity.status)}`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${activity.status === 'sent' ? 'bg-blue-500' : activity.status === 'delivered' ? 'bg-green-500' : activity.status === 'read' ? 'bg-purple-500' : 'bg-orange-500'} animate-pulse`} />
                        <div>
                          <div className={`text-sm font-medium ${getActivityColor(activity.status)}`}>
                            {activity.count.toLocaleString()} {activity.type.toUpperCase()} {activity.status}
                          </div>
                          <div className="text-xs text-gray-500">
                            {activity.timestamp.toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                      
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${activity.status === 'sent' ? 'bg-blue-100' : activity.status === 'delivered' ? 'bg-green-100' : activity.status === 'read' ? 'bg-purple-100' : 'bg-orange-100'}`}
                      >
                        {activity.type === 'sms' ? <MessageSquare className="w-3 h-3" /> : 
                         activity.type === 'voice' ? <Phone className="w-3 h-3" /> : 
                         <MessageSquare className="w-3 h-3" />}
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Floating Performance Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg p-4 shadow-xl"
            >
              <div className="text-lg font-bold">94.2%</div>
              <div className="text-xs opacity-90">Delivery Rate</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg p-4 shadow-xl"
            >
              <div className="text-lg font-bold">2.1M</div>
              <div className="text-xs opacity-90">This Hour</div>
            </motion.div>

            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-1/3 -left-6 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg p-3 shadow-xl"
            >
              <div className="text-sm font-bold">Live</div>
              <div className="text-xs opacity-90">Updates</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeDashboard;
