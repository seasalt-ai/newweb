/**
 * Structured Data (JSON-LD) Utility Functions
 * 
 * Pure functions for generating schema.org compliant JSON-LD objects
 * for use in SEO metadata across the Seasalt.ai website.
 */

import {
  SCHEMA_IDS,
  SCHEMA_CONTEXT,
  COMMON_SCHEMA_TYPES,
  ORGANIZATION_INFO,
  WEBSITE_INFO,
  PRODUCTS_INFO,
  SCHEMA_AVAILABILITY,
  type ProductKey,
  type ProductInfo,
  type OrganizationInfo,
  type WebsiteInfo,
  type SchemaAvailability
} from '../config/structuredData';

// =============================================================================
// Type Definitions for Schema.org JSON-LD Objects
// =============================================================================

export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  '@id': string;
  name: string;
  alternateName: string;
  description?: string;
  url: string;
  logo: {
    '@type': string;
    url: string;
    width: number;
    height: number;
  };
  foundingDate: string;
  contactPoint: {
    '@type': string;
    email: string;
    contactType: string;
    availableLanguage: string[];
  };
  sameAs: string[];
  areaServed: Array<{
    '@type': string;
    identifier: string;
  }>;
  availableLanguage: Array<{
    '@type': string;
    name: string;
    alternateName?: string[];
  }>;
}

export interface WebSiteSchema {
  '@context': string;
  '@type': string;
  '@id': string;
  name: string;
  url: string;
  description: string;
  inLanguage: string[];
  publisher: {
    '@id': string;
  };
  potentialAction: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
      'query-input': string;
    };
  };
}

export interface WebPageSchema {
  '@context': string;
  '@type': string;
  '@id': string;
  name: string;
  description: string;
  url: string;
  inLanguage: string;
  isPartOf: {
    '@id': string;
  };
  publisher: {
    '@id': string;
  };
  dateModified?: string;
  lastReviewed?: string;
}

export interface OfferSchema {
  '@type': string;
  price: string;
  priceCurrency: string;
  availability: string;
  description?: string;
  validFrom?: string;
  seller: {
    '@id': string;
  };
}

export interface SoftwareApplicationSchema {
  '@context': string;
  '@type': string;
  '@id': string;
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  url: string;
  image: string;
  screenshot?: string[];
  featureList?: string[];
  offers: OfferSchema;
  publisher: {
    '@id': string;
  };
  aggregateRating?: {
    '@type': string;
    ratingValue: number;
    bestRating: number;
    ratingCount: number;
  };
}

export interface BreadcrumbListSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }>;
}

export interface FAQPageSchema {
  '@context': string;
  '@type': string;
  mainEntity: Array<{
    '@type': string;
    name: string;
    acceptedAnswer: {
      '@type': string;
      text: string;
    };
  }>;
}

export interface ArticleSchema {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  image: string;
  author: {
    '@type': string;
    name: string;
  };
  publisher: {
    '@id': string;
  };
  datePublished?: string;
  dateModified?: string;
  mainEntityOfPage: {
    '@type': string;
    '@id': string;
  };
}

// =============================================================================
// Core Schema Generators
// =============================================================================

/**
 * Creates an enhanced Organization schema with comprehensive company information
 */
export function createOrganizationSchema(
  orgInfo: OrganizationInfo = ORGANIZATION_INFO,
  description?: string,
  availableLanguages?: string[]
): OrganizationSchema {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': COMMON_SCHEMA_TYPES.ORGANIZATION,
    '@id': SCHEMA_IDS.ORGANIZATION,
    name: orgInfo.name,
    alternateName: orgInfo.alternateName,
    ...(description && { description }),
    url: orgInfo.url,
    logo: {
      '@type': COMMON_SCHEMA_TYPES.IMAGE_OBJECT,
      url: orgInfo.logo.url,
      width: orgInfo.logo.width,
      height: orgInfo.logo.height
    },
    foundingDate: orgInfo.foundingDate,
    contactPoint: {
      '@type': COMMON_SCHEMA_TYPES.CONTACT_POINT,
      email: orgInfo.contactPoint.email,
      contactType: orgInfo.contactPoint.contactType,
      availableLanguage: availableLanguages || orgInfo.contactPoint.availableLanguage
    },
    sameAs: orgInfo.sameAs,
    areaServed: orgInfo.areaServed.map(countryCode => ({
      '@type': 'Country',
      identifier: countryCode
    })),
    availableLanguage: (availableLanguages || orgInfo.availableLanguage).map(lang => ({
      '@type': 'Language',
      name: lang,
      ...(orgInfo.contactPoint.availableLanguage.includes(lang) && {
        alternateName: [lang]
      })
    }))
  };
}

/**
 * Creates a WebSite schema with search functionality
 */
export function createWebSiteSchema(
  websiteInfo: WebsiteInfo = WEBSITE_INFO
): WebSiteSchema {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': COMMON_SCHEMA_TYPES.WEBSITE,
    '@id': SCHEMA_IDS.WEBSITE,
    name: websiteInfo.name,
    url: websiteInfo.url,
    description: websiteInfo.description,
    inLanguage: websiteInfo.inLanguage,
    publisher: {
      '@id': SCHEMA_IDS.ORGANIZATION
    },
    potentialAction: websiteInfo.potentialAction
  };
}

/**
 * Creates a WebPage schema for individual pages
 */
export function createWebPageSchema({
  title,
  description,
  url,
  language,
  dateModified,
  lastReviewed
}: {
  title: string;
  description: string;
  url: string;
  language: string;
  dateModified?: string;
  lastReviewed?: string;
}): WebPageSchema {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': COMMON_SCHEMA_TYPES.WEBPAGE,
    '@id': url,
    name: title,
    description,
    url,
    inLanguage: language,
    isPartOf: {
      '@id': SCHEMA_IDS.WEBSITE
    },
    publisher: {
      '@id': SCHEMA_IDS.ORGANIZATION
    },
    ...(dateModified && { dateModified }),
    ...(lastReviewed && { lastReviewed })
  };
}

/**
 * Creates an Offer schema for products/services
 */
export function createOfferSchema({
  price,
  priceCurrency = 'USD',
  availability = SCHEMA_AVAILABILITY.IN_STOCK,
  description,
  validFrom
}: {
  price: string;
  priceCurrency?: string;
  availability?: SchemaAvailability;
  description?: string;
  validFrom?: string;
}): OfferSchema {
  return {
    '@type': COMMON_SCHEMA_TYPES.OFFER,
    price,
    priceCurrency,
    availability,
    ...(description && { description }),
    ...(validFrom && { validFrom }),
    seller: {
      '@id': SCHEMA_IDS.ORGANIZATION
    }
  };
}

/**
 * Creates a SoftwareApplication schema for products
 */
export function createSoftwareApplicationSchema({
  productInfo,
  url,
  offer,
  schemaId
}: {
  productInfo: ProductInfo;
  url: string;
  offer: OfferSchema;
  schemaId: string;
}): SoftwareApplicationSchema {
  const schema: SoftwareApplicationSchema = {
    '@context': SCHEMA_CONTEXT,
    '@type': COMMON_SCHEMA_TYPES.SOFTWARE_APPLICATION,
    '@id': schemaId,
    name: productInfo.name,
    description: productInfo.description,
    applicationCategory: productInfo.applicationCategory,
    operatingSystem: productInfo.operatingSystem,
    url,
    image: productInfo.image.startsWith('http') ? 
      productInfo.image : 
      `https://seasalt.ai${productInfo.image}`,
    offers: offer,
    publisher: {
      '@id': SCHEMA_IDS.ORGANIZATION
    }
  };

  // Add optional properties if they exist
  if (productInfo.screenshots && productInfo.screenshots.length > 0) {
    schema.screenshot = productInfo.screenshots.map(screenshot => 
      screenshot.startsWith('http') ? screenshot : `https://seasalt.ai${screenshot}`
    );
  }

  if (productInfo.features && productInfo.features.length > 0) {
    schema.featureList = productInfo.features;
  }

  if (productInfo.aggregateRating) {
    schema.aggregateRating = {
      '@type': COMMON_SCHEMA_TYPES.AGGREGATE_RATING,
      ratingValue: productInfo.aggregateRating.ratingValue,
      bestRating: productInfo.aggregateRating.bestRating,
      ratingCount: productInfo.aggregateRating.ratingCount
    };
  }

  return schema;
}

// =============================================================================
// Helper Schema Generators
// =============================================================================

/**
 * Creates a BreadcrumbList schema
 */
export function createBreadcrumbListSchema(
  breadcrumbs: Array<{ name: string; url: string }>
): BreadcrumbListSchema {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': COMMON_SCHEMA_TYPES.BREADCRUMB_LIST,
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': COMMON_SCHEMA_TYPES.LIST_ITEM,
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
}

/**
 * Creates an FAQPage schema
 */
export function createFAQPageSchema(
  faqs: Array<{ question: string; answer: string }>
): FAQPageSchema {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': COMMON_SCHEMA_TYPES.FAQ_PAGE,
    mainEntity: faqs.map(faq => ({
      '@type': COMMON_SCHEMA_TYPES.QUESTION,
      name: faq.question,
      acceptedAnswer: {
        '@type': COMMON_SCHEMA_TYPES.ANSWER,
        text: faq.answer
      }
    }))
  };
}

/**
 * Creates an Article schema for blog posts
 */
export function createArticleSchema({
  title,
  description,
  image,
  author,
  datePublished,
  dateModified,
  url
}: {
  title: string;
  description: string;
  image: string;
  author: string;
  datePublished?: string;
  dateModified?: string;
  url: string;
}): ArticleSchema {
  const fullImageUrl = image.startsWith('http') ? image : `https://seasalt.ai${image}`;

  return {
    '@context': SCHEMA_CONTEXT,
    '@type': COMMON_SCHEMA_TYPES.ARTICLE,
    headline: title,
    description,
    image: fullImageUrl,
    author: {
      '@type': COMMON_SCHEMA_TYPES.PERSON,
      name: author
    },
    publisher: {
      '@id': SCHEMA_IDS.ORGANIZATION
    },
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    mainEntityOfPage: {
      '@type': COMMON_SCHEMA_TYPES.WEBPAGE,
      '@id': url
    }
  };
}

// =============================================================================
// Product-Specific Schema Generators
// =============================================================================

/**
 * Creates a complete product schema (SoftwareApplication + Offer) for a given product
 */
export function createProductSchema({
  productKey,
  url,
  customPrice,
  customPriceCurrency,
  customAvailability,
  customDescription
}: {
  productKey: ProductKey;
  url: string;
  customPrice?: string;
  customPriceCurrency?: string;
  customAvailability?: SchemaAvailability;
  customDescription?: string;
}): SoftwareApplicationSchema {
  const productInfo = PRODUCTS_INFO[productKey];
  
  if (!productInfo) {
    throw new Error(`Product information not found for key: ${productKey}`);
  }

  // Create offer with custom pricing or defaults
  const offer = createOfferSchema({
    price: customPrice || productInfo.defaultOffer.price,
    priceCurrency: customPriceCurrency || productInfo.defaultOffer.priceCurrency,
    availability: customAvailability || (productInfo.defaultOffer.availability as SchemaAvailability),
    description: customDescription || productInfo.defaultOffer.description
  });

  // Determine schema ID based on product
  const schemaId = productKey === 'seachat' ? SCHEMA_IDS.SEACHAT_PRODUCT :
                   productKey === 'seax' ? SCHEMA_IDS.SEAX_PRODUCT :
                   SCHEMA_IDS.SEAVOICE_PRODUCT;

  return createSoftwareApplicationSchema({
    productInfo,
    url,
    offer,
    schemaId
  });
}

// =============================================================================
// Utility Functions
// =============================================================================

/**
 * Determines the product key from a URL path
 */
export function getProductKeyFromPath(pathname: string): ProductKey | null {
  const path = pathname.toLowerCase();
  
  if (path.includes('/seachat')) return 'seachat';
  if (path.includes('/seax')) return 'seax';
  if (path.includes('/seavoice')) return 'seavoice';
  
  return null;
}

/**
 * Validates that all required structured data fields are present
 */
export function validateStructuredData(schema: Record<string, any>): boolean {
  const required = ['@context', '@type'];
  return required.every(field => field in schema && schema[field]);
}

/**
 * Converts structured data objects to JSON-LD script content
 */
export function stringifyStructuredData(schemas: Array<Record<string, any>>): string[] {
  return schemas
    .filter(validateStructuredData)
    .map(schema => JSON.stringify(schema, null, 0));
}
