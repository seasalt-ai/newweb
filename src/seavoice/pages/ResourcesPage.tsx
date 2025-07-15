import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, TrendingUp, Calendar, Download, ExternalLink } from 'lucide-react';

const ResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'blog', name: 'Blog Posts' },
    { id: 'case-studies', name: 'Case Studies' },
    { id: 'reports', name: 'Analyst Reports' },
    { id: 'webinars', name: 'Webinars' },
  ];

  const resources = [
    {
      category: 'blog',
      title: 'The Future of AI Voice Technology in Customer Service',
      description: 'Exploring how artificial intelligence is transforming customer communications and what it means for businesses.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'blog'
    },
    {
      category: 'case-studies',
      title: 'HealthCorp: Reducing No-Shows by 40% with AI Voice Agents',
      description: 'How a major healthcare provider transformed patient communication and improved appointment attendance.',
      author: 'Case Study',
      date: '2024-01-10',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'case-study'
    },
    {
      category: 'reports',
      title: 'Gartner Market Guide for Conversational AI Platforms 2024',
      description: 'Industry analysis positioning SeaVoice among leading conversational AI platforms.',
      author: 'Gartner, Inc.',
      date: '2024-01-05',
      readTime: 'Download PDF',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'report'
    },
    {
      category: 'webinars',
      title: 'Building Voice-First Customer Experiences',
      description: 'Join our experts for a deep dive into designing and implementing effective voice automation strategies.',
      author: 'SeaVoice Team',
      date: '2024-02-01',
      readTime: '45 min',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'webinar'
    },
    {
      category: 'blog',
      title: 'Integration Best Practices: Connecting SeaVoice to Your CRM',
      description: 'A comprehensive guide to integrating AI voice agents with popular CRM systems for maximum efficiency.',
      author: 'Mike Johnson',
      date: '2024-01-12',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'blog'
    },
    {
      category: 'case-studies',
      title: 'RetailMax: 25% Increase in Conversion with AI Support',
      description: 'E-commerce company transforms customer support with 24/7 AI voice agents and sees immediate ROI.',
      author: 'Case Study',
      date: '2024-01-08',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'case-study'
    }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const getIcon = (type: string) => {
    switch (type) {
      case 'blog': return BookOpen;
      case 'case-study': return TrendingUp;
      case 'report': return Download;
      case 'webinar': return Calendar;
      default: return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Resources & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay ahead with the latest insights, case studies, and best practices 
              in AI voice technology and customer communication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredResources.map((resource, index) => {
              const IconComponent = getIcon(resource.type);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white rounded-full p-2 shadow-lg">
                        <IconComponent className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div>
                        <p className="font-medium">{resource.author}</p>
                        <p>{resource.date}</p>
                      </div>
                      <div className="flex items-center">
                        <span>{resource.readTime}</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Users className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl font-bold mb-6">Stay in the Loop</h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest insights, case studies, and product updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;