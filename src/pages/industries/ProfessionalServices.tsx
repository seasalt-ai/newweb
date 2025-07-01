import React from 'react';
import IndustryPageTemplate from './IndustryPageTemplate';
import { industries } from '../../data/industriesData';

const ProfessionalServices = () => {
  const industryData = industries.find(industry => industry.slug === 'professional-services')!;
  
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

export default ProfessionalServices;