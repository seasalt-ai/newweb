import { motion } from 'framer-motion';
import { 
  Users,
  Briefcase, 
  Mail, 
  Target, 
  Eye, 
  Heart,
  Zap,
  Handshake,
  Phone,
  MessageCircle,
  Bot,
  BarChart3,
  ExternalLink,
  Download,
  Send,
  DollarSign,
  Building2
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';

const CompanyPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const leadership = [
    {
      name: 'Xuchen Yao',
      key: 'company.leadership.0',
      homepage: 'https://xuchen.github.io/',
      image: '/people-images/xuchen_yao.jpg'
    },
    {
      name: 'Guoguo Chen', 
      key: 'company.leadership.1',
      scholar: 'https://scholar.google.com/citations?user=iDALeq4AAAAJ&hl=en&oi=ao',
      image: '/people-images/guoguo_chen.jpg'
    }
  ];

  const coreValues = [
    {
      icon: Users,
      titleKey: 'company.values.humanFirst.title',
      descriptionKey: 'company.values.humanFirst.description'
    },
    {
      icon: Eye,
      titleKey: 'company.values.transparency.title',
      descriptionKey: 'company.values.transparency.description'
    },
    {
      icon: Zap,
      titleKey: 'company.values.speedSafety.title',
      descriptionKey: 'company.values.speedSafety.description'
    },
    {
      icon: Target,
      titleKey: 'company.values.buildPurpose.title',
      descriptionKey: 'company.values.buildPurpose.description'
    },
    {
      icon: Heart,
      titleKey: 'company.values.globalEmpathy.title',
      descriptionKey: 'company.values.globalEmpathy.description'
    }
  ];

  const products = [
    {
      name: t('company.products.product1.name'),
      description: t('company.products.product1.description'),
      icon: MessageCircle
    },
    {
      name: t('company.products.product2.name'),
      description: t('company.products.product2.description'),
      icon: Phone
    },
    {
      name: t('company.products.product3.name'),
      description: t('company.products.product3.description'),
      icon: BarChart3
    },
    {
      name: t('company.products.product4.name'),
      description: t('company.products.product4.description'),
      icon: Bot
    }
  ];

  const investors = t('company.funding.investorsList', { returnObjects: true }) as unknown as string[];

  const partnerships = [
    {
      company: 'Twilio',
      description: t('company.partnerships.list.0.description'),
      type: t('company.partnerships.list.0.type')
    },
    {
      company: 'Meta',
      description: t('company.partnerships.list.1.description'),
      type: t('company.partnerships.list.1.type')
    },
    {
      company: 'Nylas',
      description: t('company.partnerships.list.2.description'),
      type: t('company.partnerships.list.2.type')
    },
    {
      company: 'LINE',
      description: t('company.partnerships.list.3.description'),
      type: t('company.partnerships.list.3.type')
    }
  ];

  const offices = [
    {
      title: t('company.offices.list.0.title'),
      location: t('company.offices.list.0.location'),
      type: 'headquarters'
    },
    {
      title: t('company.offices.list.1.title'),
      location: t('company.offices.list.1.location'),
      type: 'rd_center'
    }
  ];

  const milestones = [
    { year: '2020.1', event: t('company.timeline.list.0.event') },
    { year: '2020~2023', event: t('company.timeline.list.1.event') },
    { year: '2022', event: t('company.timeline.list.2.event') },
    { year: '2023', event: t('company.timeline.list.3.event') },
    { year: '2025', event: t('company.timeline.list.4.event') }
  ];


  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('company.seo.title')}
        description={t('company.seo.description')}
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
              {t('company.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              {t('company.hero.description')}
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('company.hero.subtitle')}
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
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('company.mission.title')}</h2>
                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{t('company.mission.heading')}</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    {t('company.mission.text')}
                  </p>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{t('company.vision.heading')}</h3>
                  <p className="text-lg text-gray-700">
                    {t('company.vision.text')}
                  </p>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed italic">
                  {t('company.mission.statement')}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                  {t('company.mission.future')}
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">{t('company.values.title')}</h3>
              <div className="space-y-6">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{t(value.titleKey)}</h4>
                      <p className="text-gray-600">{t(value.descriptionKey)}</p>
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
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            {t('company.leadership.title', 'Leadership Team')}
          </h2>

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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">
                    {t(`${leader.key}.role`)}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t(`${leader.key}.bio`)}
                </p>
                <div className="flex justify-center space-x-4">
                  {t(`${leader.key}.homepage`, { defaultValue: "" }) && (
                    <a
                      href={t(`${leader.key}.homepage`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t('company.leadership.homepage', 'Homepage')}</span>
                    </a>
                  )}
                  {t(`${leader.key}.scholar`, { defaultValue: "" }) && (
                    <a
                      href={t(`${leader.key}.scholar`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t('company.leadership.scholar', 'Scholar')}</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('company.offices.title')}</h2>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('company.products.title')}</h2>
            <h3 className="text-2xl font-semibold text-gray-700 mb-8">{t('company.products.subtitle')}</h3>
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
              <span>{t('company.products.downloadPressKit')}</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{t('company.funding.title')}</h2>
              <div className="bg-green-50 rounded-xl p-6 mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-green-900">{t('company.funding.seedFunding')}</h3>
                </div>
                <p className="text-xl font-semibold text-green-800">{t('company.funding.raised')}</p>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{t('company.funding.investorsTitle')}</h4>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{t('company.partnership.title')}</h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('company.partnership.description')}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('company.timeline.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('company.timeline.subtitle')}
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
              <h2 className="text-4xl font-bold mb-6">{t('company.careers.title')}</h2>
              <p className="text-xl mb-8 opacity-90">
                {t('company.careers.description')} 
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={`/${currentLanguage}/careers`}
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('company.careers.cta')}
                </Link>
              </motion.div>
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
                <span className="text-lg">{t('company.careers.bullet1')}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-lg">{t('company.careers.bullet2')}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-lg">{t('company.careers.bullet3')}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-lg">{t('company.careers.bullet4')}</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('company.contact.title')}</h2>
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('company.contact.press.title')}</h3>
              <p className="text-gray-600">
                <a href="mailto:press@seasalt.ai" className="text-blue-600 hover:text-blue-800">
                  {t('company.contact.press.email')}
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('company.contact.investors.title')}</h3>
              <p className="text-gray-600">
                <a href="mailto:invest@seasalt.ai" className="text-blue-600 hover:text-blue-800">
                  {t('company.contact.investors.email')}
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('company.contact.partnerships.title')}</h3>
              <p className="text-gray-600">
                <a href="mailto:partnerships@seasalt.ai" className="text-blue-600 hover:text-blue-800">
                  {t('company.contact.partnerships.email')}
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('company.contact.hotline.title')}</h3>
              <p className="text-2xl font-bold text-blue-600"> {t('company.contact.hotline.number')}</p>
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
              <span>{t('company.contact.pressKit.downloadText')}</span>
            </motion.a>
            <p className="text-lg text-gray-600 italic">
              {t('company.contact.pressKit.description')}
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
              <h2 className="text-4xl font-bold mb-4">{t('company.newsletter.title')}</h2>
              <p className="text-xl text-blue-100 mb-2">
                {t('company.newsletter.subtitle')}
              </p>
              <p className="text-lg text-blue-200">
                {t('company.newsletter.description')}
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
                const formData = new FormData(e.target as HTMLFormElement);
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
                  <span>{t('company.newsletter.cta')}</span>
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
              {t('company.newsletter.disclaimer')}
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CompanyPage;