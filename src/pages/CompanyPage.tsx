import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Globe, 
  Briefcase, 
  Mail, 
  MapPin, 
  Target, 
  Eye, 
  Heart,
  Zap,
  Shield,
  Building2,
  DollarSign,
  Handshake,
  Phone,
  MessageCircle,
  Bot,
  BarChart3,
  ExternalLink,
  Download,
  Send
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';

const CompanyPage = () => {
  const leadership = [
    {
      name: 'Xuchen Yao',
      role: 'CEO & Co-Founder',
      bio: 'Previously co-founded KITT.AI (backed by Amazon and Microsoft, acquired by Baidu), two-time founder and recognized AI expert. PhD in Natural Language Processing from Johns Hopkins University\'s CLSP.',
      homepage: 'https://xuchen.github.io/',
      image: '/people-images/xuchen_yao.jpg'
    },
    {
      name: 'Guoguo Chen', 
      role: 'CTO & Co-Founder',
      bio: 'Expert in speech technology, also co-founder of KITT.AI. Deep experience in multilingual speech recognition and conversational AI. PhD in Speech Recognition from Johns Hopkins University\'s CLSP.',
      scholar: 'https://scholar.google.com/citations?user=iDALeq4AAAAJ&hl=en&oi=ao',
      image: '/people-images/guoguo_chen.jpg'
    }
  ];

  const coreValues = [
    {
      icon: Users,
      title: 'Human-first AI',
      description: 'We prioritize augmenting people, not replacing them.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'From data privacy to pricing, we believe in clarity and openness.'
    },
    {
      icon: Zap,
      title: 'Speed with Safety',
      description: 'We move fast but never compromise on trust or security.'
    },
    {
      icon: Target,
      title: 'Build with Purpose',
      description: 'We create technology that solves real-world problems.'
    },
    {
      icon: Heart,
      title: 'Global Empathy',
      description: 'Our tools serve users across languages, cultures, and time zones.'
    }
  ];

  const products = [
    {
      name: 'SeaChat (Response AI)',
      description: 'AI-powered, multilingual, omnichannel customer service (WhatsApp, FB Messenger, Instagram, Line, web, SMS, voice).',
      icon: MessageCircle
    },
    {
      name: 'SeaX (Outreach AI)', 
      description: 'Outbound engagement, dialpad, campaigns, bulk SMS/WhatsApp/voice for sales and marketing.',
      icon: Phone
    },
    {
      name: 'SeaMeet (Insights AI)',
      description: 'AI meeting copilot: automated minutes, summaries, semantic analytics, and voice AI for business meetings.',
      icon: BarChart3
    },
    {
      name: 'SeaVoice (Voice Autopilot)',
      description: 'Advanced voice AI infrastructure enabling human-like phone agents for inbound and outbound calls — built with state-of-the-art LLMs and speech recognition.',
      icon: Bot
    }
  ];

  const investors = [
    'Unlock Venture Partners (Lead Investor)',
    'Z Venture Capital (ZVC, the corporate venture arm of LINE)',
    'SparkLabs Group (SparkLabs Taiwan)',
    'Grand Vision Capital Group',
    'PatientsForce'
  ];

  const partnerships = [
    {
      company: 'Twilio',
      description: 'As a Twilio Gold Partner and authorized reseller of Twilio Flex, we have a strengthened strategic relationship to enhance customer experience with conversational AI. Key to our expansion in the Asia-Pacific and Japan (APJ) region.',
      type: 'Gold Partner'
    },
    {
      company: 'Meta',
      description: 'Official platform integrations with Facebook/WhatsApp/Instagram, enabling seamless omnichannel communications.',
      type: 'Official Integration'
    },
    {
      company: 'Nylas',
      description: 'Partnership allows us to seamlessly build advanced email and scheduling features directly into our applications, enhancing the contextual depth of our AI agents.',
      type: 'Strategic Partner'
    },
    {
      company: 'LINE',
      description: 'Through our investor ZVC, we have unique access to LINE\'s business call APIs, critical for our strategy in key Asian markets where LINE is the dominant communication platform.',
      type: 'Strategic Partner and Investment'
    }
  ];

  const offices = [
    {
      title: 'Global Headquarters',
      location: 'Seattle, Washington, USA',
      type: 'headquarters'
    },
    {
      title: 'Asia R&D and Support Center',
      location: 'Taipei, Taiwan',
      type: 'rd_center'
    }
  ];

  const milestones = [
    { year: '2020.1', event: 'Seasalt.ai founded by industry veterans in AI and voice technologies' },
    { year: '2020~2023', event: 'Surviving Covid19. No one was let go.' },
    { year: '2022', event: 'Launch of SeaChat omnichannel customer service platform' },
    { year: '2023', event: 'Introduction of SeaX outreach AI and SeaMeet insights AI' },
    { year: '2025', event: 'Launch of SeaVoice advanced voice AI infrastructure' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="About Seasalt.ai - Company Information & Leadership"
        description="Learn about Seasalt.ai, a leading provider of cloud communication AI technology solutions. Founded by AI experts, we're transforming business communications with omnichannel AI platforms."
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
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
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Seasalt.ai is a leading provider of cloud communication AI technology solutions, building unified, multilingual, 
              and omnichannel platforms for businesses around the world. Founded in 2020 by industry veterans in AI and voice 
              technologies, Seasalt.ai is on a mission to make enterprise-grade conversational AI accessible, secure, and scalable for everyone.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From SMEs to non-profits to public sector organizations, Seasalt.ai empowers teams to automate communication, 
              elevate customer experiences, and unlock new channels for growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Transform the world of business communication with AI—building natural, actionable conversations anywhere, on any channel.
                  </p>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
                  <p className="text-lg text-gray-700">
                    Create a world where humans and AI collaborate seamlessly, delivering business value rooted in simplicity, trust, and technological excellence.
                  </p>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed italic">
                  We build AI agents that talk, listen, and act — across messaging, voice, and web — so humans can focus on what truly matters.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                  We believe the future of work is AI-augmented, not AI-replaced. Our technology helps people do their jobs better, faster, and more meaningfully.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">🧭 Our Core Values</h3>
              <div className="space-y-6">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership & Co-founders</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="text-center mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">{leader.role}</p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{leader.bio}</p>
                <div className="flex justify-center space-x-4">
                  {leader.homepage && (
                    <a href={leader.homepage} target="_blank" rel="noopener noreferrer" 
                       className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                      <ExternalLink className="w-4 h-4" />
                      <span>Homepage</span>
                    </a>
                  )}
                  {leader.scholar && (
                    <a href={leader.scholar} target="_blank" rel="noopener noreferrer" 
                       className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                      <ExternalLink className="w-4 h-4" />
                      <span>Google Scholar</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Office Locations</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-500"
              >
                <Building2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{office.title}</h3>
                <p className="text-gray-600">{office.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🌐 What We Build</h2>
            <h3 className="text-2xl font-semibold text-gray-700 mb-8">Product Portfolio</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <product.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h4>
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="./press/Seasalt.ai_logo_press.zip"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Download the Product Logo & Press Kit</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Funding & Investors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Funding & Investors</h2>
              <div className="bg-green-50 rounded-xl p-6 mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-green-900">Seed Funding</h3>
                </div>
                <p className="text-xl font-semibold text-green-800">$4.2 million USD raised in 2024</p>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Our investors include:</h4>
              <ul className="space-y-3">
                {investors.map((investor, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{investor}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Strategic Partnerships</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform's power is amplified by deep, strategic partnerships with global technology leaders:
              </p>
              <div className="space-y-6">
                {partnerships.map((partnership, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6 py-2">
                    <div className="flex items-center space-x-3 mb-2">
                      <Handshake className="w-5 h-5 text-blue-600" />
                      <h4 className="text-lg font-bold text-gray-900">{partnership.company}</h4>
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {partnership.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{partnership.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
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
              <h2 className="text-4xl font-bold mb-6">Careers at Seasalt.ai</h2>
              <p className="text-xl mb-8 opacity-90">
                Seasalt.ai operates with a global, diverse, and remote-friendly culture, always seeking engineers, 
                AI scientists, developers, and business builders. 
              </p>
              <motion.a
                href="/careers"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                See open positions
              </motion.a>
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
                <span className="text-lg">Global, diverse, and remote-friendly culture</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-lg">Work with cutting-edge AI technology</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-lg">Make real impact in business communications</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-lg">Collaborate with industry veterans</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact & Press</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <Mail className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Press & Media</h3>
              <p className="text-gray-600">
                <a href="mailto:press@seasalt.ai" className="text-blue-600 hover:text-blue-800">
                  press@seasalt.ai
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <DollarSign className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Investors</h3>
              <p className="text-gray-600">
                <a href="mailto:invest@seasalt.ai" className="text-blue-600 hover:text-blue-800">
                  invest@seasalt.ai
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <Handshake className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Partnerships</h3>
              <p className="text-gray-600">
                <a href="mailto:partnerships@seasalt.ai" className="text-blue-600 hover:text-blue-800">
                  partnerships@seasalt.ai
                </a>
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg inline-block">
              <Phone className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Hotline</h3>
              <p className="text-2xl font-bold text-blue-600">+1-(SMB)-AI-AGENT</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <motion.a
              href="./press/Seasalt.ai_logo_press.zip"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors mb-6"
            >
              <Download className="w-5 h-5" />
              <span>Download the Product Logo & Press Kit</span>
            </motion.a>
            <p className="text-lg text-gray-600 italic">
              Seasalt.ai—bridging innovation and impact in business communication, making cloud AI accessible for teams worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-8">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Sign Up to Our Newsletter</h2>
              <p className="text-xl text-blue-100 mb-2">
                One per week, written by the CEO
              </p>
              <p className="text-lg text-blue-200">
                Get insights on AI, business communications, and the future of work directly from our leadership team.
              </p>
            </div>
            
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle newsletter signup here
                const formData = new FormData(e.target);
                const email = formData.get('email');
                console.log('Newsletter signup:', email);
                // Add your newsletter signup logic here
              }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Subscribe</span>
                </motion.button>
              </div>
            </motion.form>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm text-blue-200 mt-6"
            >
              No spam, unsubscribe at any time. We respect your privacy.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CompanyPage;
