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
    );
  }

  return (
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
  );
};

export default ContactSalesForm;
