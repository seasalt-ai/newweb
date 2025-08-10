import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LANGUAGE_DETAILS } from '../constants/languages';
// Note: useTranslation not currently needed as this component handles SEO metadata
// Most content is passed via props and brand constants should not be translated

interface SEOHelmetProps {
  title: string;
  description: string;
  favicon: string;
  canonicalUrl?: string;
  availableLanguages?: string[];
  image?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  slug?: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({ 
  title, 
  description, 
  favicon, 
  canonicalUrl,
  availableLanguages = [],
  image = '/seasalt-ai-icon.png',
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  tags = [],
  slug
}) => {
  const fullImageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`;
  const siteName = 'Seasalt.ai';
  
  // Generate hreflang links for available languages
  const hrefLangLinks = availableLanguages.map(lang => {
    const langDetail = LANGUAGE_DETAILS.find(l => l.code === lang);
    const hrefLangUrl = slug 
      ? `${window.location.origin}/${lang}/blog/${slug}`
      : `${window.location.origin}/${lang}/blog`;
    
    // Convert language codes to proper hreflang codes
    let hrefLangCode = lang;
    if (lang === 'zh-TW') hrefLangCode = 'zh-Hant';
    if (lang === 'zh-CN') hrefLangCode = 'zh-Hans';
    if (lang === 'fa') hrefLangCode = 'fa';
    
    return {
      lang: hrefLangCode,
      url: hrefLangUrl
    };
  });
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/x-icon" href={favicon} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Article-specific Open Graph tags */}
      {type === 'article' && (
        <>
          {author && <meta property="article:author" content={author} />}
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@seasalt_ai" />
      
      {/* Language and Regional Meta Tags */}
      <meta httpEquiv="content-language" content={availableLanguages[0] || 'en'} />
      
      {/* Hreflang Links for Internationalization */}
      {hrefLangLinks.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* Add x-default for international targeting */}
      {hrefLangLinks.length > 0 && (
        <link rel="alternate" hrefLang="x-default" href={hrefLangLinks.find(l => l.lang === 'en')?.url || hrefLangLinks[0].url} />
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Structured Data - Basic Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteName,
          "url": window.location.origin,
          "logo": `${window.location.origin}/seasalt-ai-logo.png`,
          "sameAs": [
            "https://www.linkedin.com/company/seasalt-ai",
            "https://twitter.com/seasalt_ai",
            "https://github.com/seasalt-ai"
          ]
        })}
      </script>
      
      {/* Blog-specific structured data */}
      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "description": description,
            "image": fullImageUrl,
            "author": {
              "@type": "Person",
              "name": author || "Seasalt.ai Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": siteName,
              "logo": {
                "@type": "ImageObject",
                "url": `${window.location.origin}/seasalt-ai-logo.png`
              }
            },
            "datePublished": publishedTime,
            "dateModified": modifiedTime || publishedTime,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl
            }
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHelmet;
