import { useState } from 'react';
import { 
  Clock, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../i18n/helpers';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  monthlyVolume: string;
  useCase: string;
  message: string;
}

interface ContactSalesFormProps {
  lang: SupportedLanguage;
}

const ContactSalesForm = ({ lang }: ContactSalesFormProps) => {
  const { t, isLoading } = useTranslation(lang);
  
  const [formData, setFormData] = useState<FormData>({
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
  
  // 載入狀態時顯示預設內容
  if (isLoading) {
    return (
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto animate-pulse"></div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="animate-pulse space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>
                <div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="h-32 bg-gray-200 rounded"></div>
              <div className="h-12 bg-blue-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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

  if (isSubmitted) {
    return (
      <div className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 rounded-2xl p-12">
            <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {t?.('seax.contactSales.success.title') || 'Thank You!'}
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              {t?.('seax.contactSales.success.message') || 'We\'ve received your request and will be in touch soon.'}
            </p>
            
            <div className="bg-white rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t?.('seax.contactSales.success.nextSteps.title') || 'Next Steps'}
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </div>
                  <span className="text-gray-700">{t?.('seax.contactSales.success.nextSteps.step1') || 'We\'ll review your requirements'}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-bold">2</span>
                  </div>
                  <span className="text-gray-700">{t?.('seax.contactSales.success.nextSteps.step2') || 'Schedule a personalized demo'}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-bold">3</span>
                  </div>
                  <span className="text-gray-700">{t?.('seax.contactSales.success.nextSteps.step3') || 'Customize your solution'}</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-500">
              {t?.('seax.contactSales.success.immediateHelp') || 'Need immediate help? Call us at'} <strong>+1 (555) 123-SEAX</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t?.('seax.contactSales.form.title') || 'Contact Sales'}
          </h2>
          <p className="text-lg text-gray-600">
            {t?.('seax.contactSales.form.subtitle') || 'Get in touch with our sales team to learn more about our enterprise solutions'}
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t?.('seax.contactSales.form.firstName.label') || 'First Name'} *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t?.('seax.contactSales.form.firstName.placeholder') || 'Enter your first name'}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t?.('seax.contactSales.form.lastName.label') || 'Last Name'} *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t?.('seax.contactSales.form.lastName.placeholder') || 'Enter your last name'}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t?.('seax.contactSales.form.email.label') || 'Business Email'} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t?.('seax.contactSales.form.email.placeholder') || 'you@company.com'}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t?.('seax.contactSales.form.company.label') || 'Company'} *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t?.('seax.contactSales.form.company.placeholder') || 'Your company name'}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t?.('seax.contactSales.form.phone.label') || 'Phone Number'}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t?.('seax.contactSales.form.phone.placeholder') || '+1 (555) 123-4567'}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t?.('seax.contactSales.form.monthlyVolume.label') || 'Expected Monthly Volume'}
                </label>
                <select
                  name="monthlyVolume"
                  value={formData.monthlyVolume}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">{t?.('seax.contactSales.form.monthlyVolume.placeholder') || 'Select volume range'}</option>
                  <option value="0-10k">{t?.('seax.contactSales.form.monthlyVolume.options.0to10k') || '0 - 10,000 messages'}</option>
                  <option value="10k-100k">{t?.('seax.contactSales.form.monthlyVolume.options.10kto100k') || '10,000 - 100,000 messages'}</option>
                  <option value="100k-1m">{t?.('seax.contactSales.form.monthlyVolume.options.100kto1m') || '100,000 - 1M messages'}</option>
                  <option value="1m+">{t?.('seax.contactSales.form.monthlyVolume.options.1mplus') || '1M+ messages'}</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t?.('seax.contactSales.form.useCase.label') || 'Primary Use Case'}
              </label>
              <select
                name="useCase"
                value={formData.useCase}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">{t?.('seax.contactSales.form.useCase.placeholder') || 'Select primary use case'}</option>
                <option value="marketing">{t?.('seax.contactSales.form.useCase.options.marketing') || 'Marketing Campaigns'}</option>
                <option value="notifications">{t?.('seax.contactSales.form.useCase.options.notifications') || 'Transactional Notifications'}</option>
                <option value="customer-support">{t?.('seax.contactSales.form.useCase.options.customerSupport') || 'Customer Support'}</option>
                <option value="alerts">{t?.('seax.contactSales.form.useCase.options.alerts') || 'Emergency Alerts'}</option>
                <option value="appointments">{t?.('seax.contactSales.form.useCase.options.appointments') || 'Appointment Reminders'}</option>
                <option value="other">{t?.('seax.contactSales.form.useCase.options.other') || 'Other'}</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t?.('seax.contactSales.form.message.label') || 'Message'}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder={t?.('seax.contactSales.form.message.placeholder') || 'Tell us about your specific requirements...'}
              />
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{t?.('seax.contactSales.form.submitting') || 'Submitting...'}</span>
                  </>
                ) : (
                  <>
                    <span>{t?.('seax.contactSales.form.submit') || 'Contact Sales Team'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
            
            <div className="text-center text-sm text-gray-500">
              <Clock className="w-4 h-4 inline mr-1" />
              {t?.('seax.contactSales.form.responseTime') || 'We typically respond within 24 hours'}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSalesForm;