import IndustryPageTemplate from './IndustryPageTemplate';
import { getIndustries } from '../../data/industriesData';
import { useTranslation } from 'react-i18next';

const Healthcare = () => {
  const { t } = useTranslation();
  const industries = getIndustries(t);
  const industryData = industries.find(industry => industry.slug === 'healthcare')!;
  
  return (
    <IndustryPageTemplate
      title={industryData.title}
      headline={industryData.headline}
      benefits={industryData.benefits}
      color={industryData.color}
      bgColor={industryData.bgColor}
      borderColor={industryData.borderColor}
      icon={industryData.icon}
      showSeaHealthLink={true}
    />
  );
};

export default Healthcare;