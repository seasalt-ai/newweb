import { motion } from 'framer-motion';
import { ExternalLink, Users, Target, Heart, Briefcase } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';

const careers = [
  {
    department: 'Business',
    positions: [
      {
        title: 'Business Developer',
        location: 'APAC, Taipei',
        type: 'Full-time, contractor',
        url: 'https://docs.google.com/document/d/1XntRJxtRs8JWoCvwd-ib-e0YSi1frpoM-V4rHDo8W8U/edit',
      },
      {
        title: 'Field Marketing and Direct Sales',
        location: 'Seattle',
        type: 'Internship, full-time, contractor, work-study',
        url: 'https://docs.google.com/document/d/1XntRJxtRs8JWoCvwd-ib-e0YSi1frpoM-V4rHDo8W8U/edit',
      },
    ],
  },
  {
    department: 'Product',
    positions: [
      {
        title: 'Technical Product Manager',
        location: 'Remote',
        type: 'Full-time, contractor, internship',
        url: 'https://docs.google.com/document/d/1c6-HLeU9xnVe_i6iIR_Rc-1jeSYoe8xR7mY7s6IOsD8/edit',
      },
      {
        title: 'Product Marketing',
        location: 'APAC, Seattle',
        type: 'Internship, full-time, contractor',
        url: 'https://docs.google.com/document/d/1OuSpZCvHcp8P6NGqBV5ZAqd2SwkVGpsryZu3coG2UHI/edit',
      },
    ],
  },
  {
    department: 'Engineering',
    positions: [
      {
        title: 'Frontend Engineer',
        location: 'Remote',
        type: 'Full-time, contractor, internship',
        url: 'https://docs.google.com/document/d/1uh3yF_yE8keinz5ky1XK1GO8PiuK_Heum0PNGkr8OHQ/edit',
      },
      {
        title: 'Backend Engineer (Python)',
        location: 'Remote',
        type: 'Full-time, contractor, internship',
        url: 'https://docs.google.com/document/d/1iSCBjVV3HOwgwifkCWXMsi9w7AE0KNxWuuURfvR-A-s/edit',
      },
      {
        title: 'DevOps',
        location: 'Remote',
        type: 'Full-time, contractor, internship',
        url: 'https://docs.google.com/document/d/1dg5vCWRc7xeussw27XgCGVcMX8UNhRN2MGR49pRE_Qo/edit',
      },
      {
        title: 'ML Engineer - Natural Language Processing',
        location: 'Remote',
        type: 'Full-time, contractor, internship',
        url: 'https://docs.google.com/document/d/1uu8rrIZAvj29DE5jF-9bTTjxH9rCYcD-dQTb0se8p1w/edit',
      },
      {
        title: 'ML Engineer - Language Modeling',
        location: 'Remote',
        type: 'Full-time, contractor, internship',
        url: 'https://docs.google.com/document/d/1eFAm3_-ubpoDJGuSBSOvb6WZWdrdQ2a_dGOsRNFEGVI/edit',
      },
      {
        title: 'ML Engineer - Speech Recognition',
        location: 'Remote',
        type: 'Full-time, contractor, internship',
        url: 'https://docs.google.com/document/d/1kHnqQfjU67U6lfMD0dEyUzo2knWHmszTq6DAtjgwp_g/edit',
      },
    ],
  },
];

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SEOHelmet 
        title="Careers at Seasalt.ai"
        description="Explore career opportunities at Seasalt.ai. Join our mission to transform the world of business communication with AI."
        favicon="/seasalt-ai-favicon.ico"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Careers at Seasalt.ai
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Join our mission to transform the world of business communication with AI. 
            We hire the world's best and brightest people to help make this transformation a reality.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Mission Illustration Placeholder */}
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-16 h-16 mx-auto mb-4 text-white" />
                  <Target className="w-12 h-12 mx-auto text-white opacity-80" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Seasalt.ai's Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Seasalt.ai's mission is to transform the world of businesses with AI. We 
                hire the world's best and brightest people to help make this 
                transformation a reality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold mb-6">Seasalt.ai's Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Seasalt.ai's vision is to create a world where humans coexist with AI. We 
                solve B2B with B2C in mind.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              {/* Vision Illustration Placeholder */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-16 h-16 mx-auto mb-4 text-white" />
                  <Briefcase className="w-12 h-12 mx-auto text-white opacity-80" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {careers.map((department, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6 text-teal-400">
                {department.department}
              </h2>
              <div className="space-y-4">
                {department.positions.map((position, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-teal-500 transition-colors group"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors">
                          {position.title}
                        </h3>
                        <p className="text-teal-400 font-medium mb-1">
                          {position.location}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {position.type}
                        </p>
                      </div>
                      <a
                        href={position.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors group-hover:bg-teal-500"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="font-medium">Detail</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CareersPage;

