import Header from '../components/Header';
import SEOHelmet from '../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Book, FileText, Video, MessageSquare, Download, ExternalLink, Users } from 'lucide-react';

const Resources = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const resourceCategories = [
    {
      title: 'Getting Started',
      description: 'Everything you need to launch your first campaign',
      icon: Book,
      color: 'blue',
      resources: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with SeaX in under 10 minutes',
          type: 'Guide',
          readTime: '5 min read'
        },
        {
          title: 'Best Practices for Mass SMS',
          description: 'Learn how to craft effective messages that convert',
          type: 'Guide',
          readTime: '8 min read'
        },
        {
          title: 'API Integration Tutorial',
          description: 'Step-by-step guide to integrate SeaX with your app',
          type: 'Tutorial',
          readTime: '15 min read'
        }
      ]
    },
    {
      title: 'Video Tutorials',
      description: 'Watch and learn from our expert tutorials',
      icon: Video,
      color: 'green',
      resources: [
        {
          title: 'Creating Your First Campaign',
          description: 'Watch how to set up and launch your first SMS campaign',
          type: 'Video',
          duration: '12 min'
        },
        {
          title: 'Advanced Targeting Strategies',
          description: 'Learn how to segment and target your audience effectively',
          type: 'Video',
          duration: '18 min'
        },
        {
          title: 'Analytics and Reporting Deep Dive',
          description: 'Master SeaX analytics to optimize your campaigns',
          type: 'Video',
          duration: '25 min'
        }
      ]
    },
    {
      title: 'Documentation',
      description: 'Technical documentation and API references',
      icon: FileText,
      color: 'purple',
      resources: [
        {
          title: 'API Reference',
          description: 'Complete API documentation with examples',
          type: 'Documentation',
          badge: 'Developer'
        },
        {
          title: 'Webhook Guide',
          description: 'Set up real-time notifications and callbacks',
          type: 'Documentation',
          badge: 'Developer'
        },
        {
          title: 'SDK Documentation',
          description: 'Client libraries for popular programming languages',
          type: 'Documentation',
          badge: 'Developer'
        }
      ]
    },
    {
      title: 'Case Studies',
      description: 'Real success stories from our customers',
      icon: MessageSquare,
      color: 'orange',
      resources: [
        {
          title: 'E-commerce: 300% ROI with SMS Marketing',
          description: 'How an online retailer tripled their return on investment',
          type: 'Case Study',
          industry: 'E-commerce'
        },
        {
          title: 'Healthcare: Appointment Reminders at Scale',
          description: 'Reducing no-shows by 45% with automated reminders',
          type: 'Case Study',
          industry: 'Healthcare'
        },
        {
          title: 'FinTech: Fraud Prevention via SMS',
          description: 'Real-time fraud alerts protecting millions of users',
          type: 'Case Study',
          industry: 'Financial Services'
        }
      ]
    }
  ];

  const downloads = [
    {
      title: 'SMS Marketing Playbook',
      description: 'Complete guide to SMS marketing with templates and examples',
      format: 'PDF',
      size: '2.5 MB'
    },
    {
      title: 'Compliance Checklist',
      description: 'Ensure your campaigns meet all regulatory requirements',
      format: 'PDF',
      size: '1.2 MB'
    },
    {
      title: 'Message Templates Library',
      description: 'Ready-to-use templates for common use cases',
      format: 'ZIP',
      size: '850 KB'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="SeaX Resources - Guides, Tutorials & Documentation"
        description="Access comprehensive resources for SeaX including guides, tutorials, API documentation, case studies, and more to help you succeed with mass communication."
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Resources &
            <span className="text-indigo-600 block">Learning Center</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Everything you need to master mass communication. From quick start guides to advanced 
            tutorials, we've got you covered.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get Support</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Browse API Docs
            </button>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Resources
            </h2>
            <p className="text-lg text-gray-600">
              Find exactly what you need to succeed with SeaX
            </p>
          </div>
          
          <div className="space-y-16">
            {resourceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="">
                  <div className="flex items-center mb-8">
                    <div className={`p-3 rounded-lg ${getColorClasses(category.color)} mr-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.resources.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(category.color)} bg-opacity-20`}>
                            {resource.type}
                          </span>
                          {(resource as any).badge && (
                            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                              {(resource as any).badge}
                            </span>
                          )}
                        </div>
                        
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {resource.title}
                        </h4>
                        <p className="text-gray-600 mb-4">
                          {resource.description}
                        </p>
                        
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-500">
                            {(resource as any).readTime && (resource as any).readTime}
                            {(resource as any).duration && (resource as any).duration}
                            {(resource as any).industry && (resource as any).industry}
                          </div>
                          <button className="text-indigo-600 hover:text-indigo-800 flex items-center space-x-1">
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Downloads Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Downloads
            </h2>
            <p className="text-lg text-gray-600">
              Free resources to help you get the most out of SeaX
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloads.map((download, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Download className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{download.format}</div>
                    <div className="text-sm text-gray-500">{download.size}</div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {download.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {download.description}
                </p>
                
                <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Need More Help?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our support team is here to help you succeed. Get personalized assistance 
                with your campaigns and technical questions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg w-fit mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Get instant help from our support team</p>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                    Start Chat
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg w-fit mx-auto mb-4">
                    <Book className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Knowledge Base</h3>
                  <p className="text-gray-600 mb-4">Search our comprehensive help articles</p>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center mx-auto">
                    <span>Browse Articles</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg w-fit mx-auto mb-4">
                    <Users className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
                  <p className="text-gray-600 mb-4">Connect with other SeaX users</p>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center mx-auto">
                    <span>Join Community</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of businesses already using SeaX to reach their customers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Sign Up Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <Link
              to={getLocalizedPath('/pricing')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
