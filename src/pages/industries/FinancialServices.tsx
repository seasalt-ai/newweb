import IndustryPageTemplate from './IndustryPageTemplate';
import { getIndustries } from '../../data/industriesData';
import { useTranslation } from 'react-i18next';

const FinancialServices = () => {
  const { t } = useTranslation();
  const industryData = getIndustries(t).find(industry => industry.slug === 'financial-services')!;
  
  return (
    <IndustryPageTemplate
      title={industryData.title}
      headline={industryData.headline}
      benefits={industryData.benefits}
      color={industryData.color}
      bgColor={industryData.bgColor}
      borderColor={industryData.borderColor}
      icon={industryData.icon}
      slug={industryData.slug}
      showSeaHealthLink={false}
    />
  );
};

export default FinancialServices;