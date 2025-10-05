import React from 'react';
import { Globe } from 'lucide-react';
import { SiWordpress, SiShopify, SiWix, SiSquarespace, SiWebflow } from 'react-icons/si';

interface PlatformIconProps {
  iconType: string;
  className?: string;
}

const PlatformIcon: React.FC<PlatformIconProps> = ({ iconType, className = "w-8 h-8 text-white" }) => {
  switch (iconType) {
    case 'globe':
      return <Globe className={className} />;
    case 'wordpress':
      return <SiWordpress className={className} />;
    case 'shopify':
      return <SiShopify className={className} />;
    case 'wix':
      return <SiWix className={className} />;
    case 'squarespace':
      return <SiSquarespace className={className} />;
    case 'webflow':
      return <SiWebflow className={className} />;
    default:
      return <Globe className={className} />;
  }
};

export default PlatformIcon;