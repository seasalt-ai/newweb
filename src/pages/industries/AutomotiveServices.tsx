import IndustryPageTemplate from './IndustryPageTemplate';
import { industries } from '../../data/industriesData';

const AutomotiveServices = () => {
  const industryData = industries.find(industry => industry.slug === 'automotive-services')!;
  
  return (
    <IndustryPageTemplate
      title={industryData.title}
      headline={industryData.headline}
      benefits={industryData.benefits}
      color={industryData.color}
      bgColor={industryData.bgColor}
      borderColor={industryData.borderColor}
      icon={industryData.icon}
    />
  );
};

export default AutomotiveServices;