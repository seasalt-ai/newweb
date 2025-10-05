import React from 'react';
import { SiSalesforce, SiHubspot } from 'react-icons/si';
import { Database } from 'lucide-react';

interface CRMPlatformIconProps {
  platform: string;
  className?: string;
}

const CRMPlatformIcon: React.FC<CRMPlatformIconProps> = ({ platform, className = "w-10 h-10" }) => {
  const platformLower = platform.toLowerCase();
  
  switch (platformLower) {
    case 'salesforce':
      return <SiSalesforce className={`${className} text-[#00A1E0]`} />;
    
    case 'hubspot':
      return <SiHubspot className={`${className} text-[#FF7A59]`} />;
    
    case 'pipedrive':
      // Pipedrive custom SVG logo
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-13h4c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2z" fill="#172B4D"/>
        </svg>
      );
    
    case 'zoho':
    case 'zoho crm':
      // Zoho custom SVG logo
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zM8.5 16.5L6 14l2.5-2.5L11 14l-2.5 2.5zm7 0L13 14l2.5-2.5L18 14l-2.5 2.5zm-3.5-6L9.5 8 12 5.5 14.5 8 12 10.5z" fill="#C8242D"/>
        </svg>
      );
    
    case 'microsoft dynamics':
    case 'dynamics':
      // Microsoft Dynamics custom SVG logo
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.4 6v12l9.6-6zm-2.4 0l-7 4.4v7.2L9 13.2V6z" fill="#0078D4"/>
          <path d="M2 17.6L9 22v-7.8L2 10.4v7.2z" fill="#40E0D0"/>
          <path d="M11.4 6v12l9.6-6L11.4 6z" fill="#0078D4"/>
          <path d="M11.4 2v4l9.6 6V6l-9.6-4z" fill="#005A9E"/>
        </svg>
      );
    
    case 'freshworks':
    case 'freshworks crm':
      // Freshworks custom SVG logo
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4v9.82c0 4.16-2.88 8.04-6.75 9.15A9.98 9.98 0 015 17V8.18l7-3.5z" fill="#12B76A"/>
        </svg>
      );
    
    default:
      return <Database className={className} />;
  }
};

export default CRMPlatformIcon;