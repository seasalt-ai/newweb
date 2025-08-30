import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import SEOHelmet from '../../components/SEOHelmet';
import { 
  Mail, 
  Phone, 
  Calendar, 
  MessageCircle, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Shield
} from 'lucide-react';

const ContactSales = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    monthlyVolume: '',
    useCase: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: t('seax.contactSales.contactMethods.email.title'),
      description: t('seax.contactSales.contactMethods.email.description'),
      action: t('seax.contactSales.contactMethods.email.action'),
      color: 'blue'
    },
    {
      icon: Phone,
      title: t('seax.contactSales.contactMethods.phone.title'),
      description: t('seax.contactSales.contactMethods.phone.description'),
      action: t('seax.contactSales.contactMethods.phone.action'),
      color: 'green'
    },
    {
      icon: Calendar,
      title: t('seax.contactSales.contactMethods.demo.title'),
      description: t('seax.contactSales.contactMethods.demo.description'),
      action: t('seax.contactSales.contactMethods.demo.action'),
      color: 'purple'
    },
    {
      icon: MessageCircle,
      title: t('seax.contactSales.contactMethods.chat.title'),
      description: t('seax.contactSales.contactMethods.chat.description'),
      action: t('seax.contactSales.contactMethods.chat.action'),
      color: 'orange'
    }
  ];

  const stats = [
    { value: t('seax.contactSales.stats.responseTime.value'), label: t('seax.contactSales.stats.responseTime.label') },
    { value: t('seax.contactSales.stats.satisfaction.value'), label: t('seax.contactSales.stats.satisfaction.label') },
    { value: t('seax.contactSales.stats.businesses.value'), label: t('seax.contactSales.stats.businesses.label') }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <div className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-green-50 rounded-2xl p-12">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {t('seax.contactSales.success.title')}
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                {t('seax.contactSales.success.message')}
              </p>
              
              <div className="bg-white rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('seax.contactSales.success.nextSteps.title')}
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-bold">1</span>
                    </div>
                    <span className="text-gray-700">{t('seax.contactSales.success.nextSteps.step1')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-bold">2</span>
                    </div>
                    <span className="text-gray-700">{t('seax.contactSales.success.nextSteps.step2')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-bold">3</span>
                    </div>
                    <span className="text-gray-700">{t('seax.contactSales.success.nextSteps.step3')}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-500">
                {t('seax.contactSales.success.immediateHelp')} <strong>+1 (555) 123-SEAX</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('seax.contactSales.seo.title')}
        description={t('seax.contactSales.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t('seax.contactSales.hero.title.line1')}
              <span className="text-blue-600 block">{t('seax.contactSales.hero.title.line2')}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('seax.contactSales.hero.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.contactSales.contactMethods.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.contactSales.contactMethods.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className={`p-3 rounded-lg w-fit mb-4 ${getColorClasses(method.color)}`}>
                  <method.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                <div className="text-sm font-medium text-blue-600">
                  {method.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.contactSales.form.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.contactSales.form.subtitle')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('seax.contactSales.form.firstName.label')}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('seax.contactSales.form.firstName.placeholder')}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('seax.contactSales.form.lastName.label')}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('seax.contactSales.form.lastName.placeholder')}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('seax.contactSales.form.email.label')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('seax.contactSales.form.email.placeholder')}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('seax.contactSales.form.company.label')}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('seax.contactSales.form.company.placeholder')}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('seax.contactSales.form.phone.label')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('seax.contactSales.form.phone.placeholder')}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('seax.contactSales.form.volume.label')}
                  </label>
                  <select
                    name="monthlyVolume"
                    value={formData.monthlyVolume}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">{t('seax.contactSales.form.volume.placeholder')}</option>
                    <option value="under-10k">{t('seax.contactSales.form.volume.under10k')}</option>
                    <option value="10k-50k">{t('seax.contactSales.form.volume.10k50k')}</option>
                    <option value="50k-200k">{t('seax.contactSales.form.volume.50k200k')}</option>
                    <option value="200k-1m">{t('seax.contactSales.form.volume.200k1m')}</option>
                    <option value="over-1m">{t('seax.contactSales.form.volume.over1m')}</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('seax.contactSales.form.useCase.label')}
                </label>
                <select
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">{t('seax.contactSales.form.useCase.placeholder')}</option>
                  <option value="marketing">{t('seax.contactSales.form.useCase.marketing')}</option>
                  <option value="notifications">{t('seax.contactSales.form.useCase.notifications')}</option>
                  <option value="reminders">{t('seax.contactSales.form.useCase.reminders')}</option>
                  <option value="alerts">{t('seax.contactSales.form.useCase.alerts')}</option>
                  <option value="lead-generation">{t('seax.contactSales.form.useCase.leadGeneration')}</option>
                  <option value="support">{t('seax.contactSales.form.useCase.support')}</option>
                  <option value="other">{t('seax.contactSales.form.useCase.other')}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('seax.contactSales.form.message.label')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t('seax.contactSales.form.message.placeholder')}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  {t('seax.contactSales.form.consent.label')}
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Clock className="w-5 h-5 animate-spin" />
                    <span>{t('seax.contactSales.form.submit.submitting')}</span>
                  </>
                ) : (
                  <>
                    <span>{t('seax.contactSales.form.submit.default')}</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('seax.contactSales.whyChoose.title')}
            </h2>
            <p className="text-xl text-blue-100">
              {t('seax.contactSales.whyChoose.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-lg w-fit mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('seax.contactSales.whyChoose.results.title')}</h3>
              <p className="text-blue-100">
                {t('seax.contactSales.whyChoose.results.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-lg w-fit mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('seax.contactSales.whyChoose.security.title')}</h3>
              <p className="text-blue-100">
                {t('seax.contactSales.whyChoose.security.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-lg w-fit mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('seax.contactSales.whyChoose.support.title')}</h3>
              <p className="text-blue-100">
                {t('seax.contactSales.whyChoose.support.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSales;
