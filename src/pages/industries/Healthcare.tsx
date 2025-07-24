import IndustryPageTemplate from './IndustryPageTemplate';
import { industries } from '../../data/industriesData';

const Healthcare = () => {
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