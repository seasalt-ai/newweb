import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title: string;
  description: string;
  favicon: string;
  canonicalUrl?: string;
  availableLanguages?: string[];
  image?: string;
  type?: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({ title, description, favicon }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/x-icon" href={favicon} />
    </Helmet>
  );
};

export default SEOHelmet;