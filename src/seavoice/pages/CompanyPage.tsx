
import { motion } from 'framer-motion';
import { Users, Award, Globe, Briefcase, Mail, MapPin } from 'lucide-react';

const CompanyPage = () => {
  const teamMembers = [
    {
      name: 'Guoguo Chen',
      role: 'Co-Founder & CEO',
      bio: 'Former Johns Hopkins researcher and speech recognition expert. Led the original Kaldi development team.',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Xuchen Yao',
      role: 'Co-Founder & CTO',
      bio: 'AI researcher with expertise in natural language processing and conversational AI systems.',
      image: 'https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const values = [
    {
      icon: Users,
      title: 'Human-Centered AI',
      description: 'We believe AI should enhance human capabilities, not replace human connections.'
    },
    {
      icon: Award,
      title: 'Excellence in Innovation',
      description: 'Continuous innovation drives us to push the boundaries of what\'s possible in voice technology.'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Making advanced voice AI accessible to businesses of all sizes, everywhere.'
    }
  ];

  const milestones = [
    { year: '2019', event: 'Company founded by Guoguo Chen and Xuchen Yao' },
    { year: '2020', event: 'First commercial deployment of Kaldi-based speech recognition' },
    { year: '2022', event: 'Launch of SeaVoice AI voice agent platform' },
    { year: '2023', event: 'Gartner recognition in Conversational AI Market Guide' },
    { year: '2024', event: 'Global expansion and enterprise partnerships' }
  ];

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
              About Seasalt.ai
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Founded by leading speech recognition researchers, we're on a mission to make 
              AI voice technology accessible to every business, transforming how companies 
              communicate with their customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To democratize AI voice technology and enable every business to provide 
                exceptional customer experiences through intelligent, human-like voice interactions. 
                We believe that advanced AI should be accessible, reliable, and seamlessly 
                integrated into existing business workflows.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2019 by renowned speech recognition researchers Guoguo Chen and 
                Xuchen Yao, Seasalt.ai builds on decades of research and innovation in the 
                field of artificial intelligence and speech technology.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6"
            >
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the researchers and entrepreneurs driving innovation in AI voice technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-lg text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to transform business communications
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-800 font-medium">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Briefcase className="w-16 h-16 mb-6 opacity-80" />
              <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
              <p className="text-xl mb-8 opacity-90">
                Help us build the future of AI voice technology. We're looking for passionate 
                researchers, engineers, and business professionals who want to make a real impact.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Open Positions
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-lg">Competitive compensation and equity</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-lg">Remote-first culture with global team</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-lg">Comprehensive health and wellness benefits</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-lg">Professional development opportunities</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-lg">Work on cutting-edge AI technology</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to transform your customer communications? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <MapPin className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Headquarters</h3>
              <p className="text-gray-600">
                Redmond, Washington<br />
                United States
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <Mail className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>
              <p className="text-gray-600">
                sales@seasalt.ai<br />
                support@seasalt.ai
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;