import Header from '../components/Header';
import SEOHelmet from '../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Users, Globe, Shield, Target } from 'lucide-react';

const About = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="About SeaX - Powering Mass Communication at Scale"
        description="Learn about SeaX's mission to democratize mass communication. Discover our story, values, and commitment to helping businesses reach millions."
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Democratizing
            <span className="text-blue-600 block">Mass Communication</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            SeaX was built on the belief that every business should have the power to reach millions of customers 
            with the same ease as sending a single message.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're on a mission to make mass communication accessible to businesses of all sizes. 
                From startups to enterprises, everyone deserves the power to reach their audience at scale.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                By combining cutting-edge technology with simple, intuitive design, we're breaking down 
                the barriers that once made high-volume communication the exclusive domain of large corporations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10M+</div>
                  <div className="text-gray-600">Messages Daily</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
                  <div className="text-gray-600">Businesses Served</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Scale Without Limits</h3>
                    <p className="text-gray-600">From 1,000 to 10 million messages, we scale with you</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Enterprise Security</h3>
                    <p className="text-gray-600">Bank-level security for every business</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Global Reach</h3>
                    <p className="text-gray-600">Connect with customers in 200+ countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-lg w-fit mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make puts our customers' success at the center.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-lg w-fit mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust & Security</h3>
              <p className="text-gray-600">
                We protect your data and communications with the highest security standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-lg w-fit mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of what's possible in communication.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-lg w-fit mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Impact</h3>
              <p className="text-gray-600">
                We're building technology that connects businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-600">
              How SeaX came to be
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <span className="text-blue-600 font-bold text-lg">2020</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The Problem</h3>
                <p className="text-gray-600">
                  Small businesses were struggling to reach their customers at scale. Existing solutions 
                  were either too expensive, too complex, or simply couldn't handle the volume needed 
                  for modern business growth.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <span className="text-green-600 font-bold text-lg">2021</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The Solution</h3>
                <p className="text-gray-600">
                  We built SeaX with a simple vision: make mass communication as easy as sending 
                  a single message. By leveraging cloud infrastructure and AI, we created a platform 
                  that could scale from thousands to millions of messages seamlessly.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <span className="text-purple-600 font-bold text-lg">2022</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The Growth</h3>
                <p className="text-gray-600">
                  Within a year, we were processing millions of messages daily for thousands of 
                  businesses. From startups to Fortune 500 companies, SeaX became the go-to platform 
                  for high-volume communication.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                <span className="text-orange-600 font-bold text-lg">2024</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The Future</h3>
                <p className="text-gray-600">
                  Today, SeaX powers over 10 million messages daily across 200+ countries. 
                  We're just getting started on our mission to democratize mass communication 
                  for businesses everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover how SeaX can transform your business communication
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={getLocalizedPath('/contact-sales')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to={getLocalizedPath('/how-it-works')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
