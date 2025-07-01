import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

interface SEOHelmetProps {
  title: string;
  description: string;
  canonicalUrl: string;
  availableLanguages?: string[];
  image?: string;
  type?: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({ 
  title, 
  description, 
  canonicalUrl,
  availableLanguages = [],
  image = '/seasalt-ai-icon.png',
  type = 'website'
}) => {
  const { lang } = useParams<{ lang: string }>();
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  
  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${image}`} />
      
      {/* Language alternates */}
      {availableLanguages.map(language => {
        const langUrl = canonicalUrl.replace(`/${lang}/`, `/${language}/`);
        return <link key={language} rel="alternate" hrefLang={language} href={langUrl} />;
      })}
      
      {/* x-default hreflang (points to English version) */}
      {lang !== 'en' && (
        <link 
          rel="alternate" 
          hrefLang="x-default" 
          href={canonicalUrl.replace(`/${lang}/`, '/en/')} 
        />
      )}
    </Helmet>
  );
};

export default SEOHelmet;