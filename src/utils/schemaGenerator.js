"use strict";
/**
 * Schema Generator Utilities
 *
 * Pure functions for generating schema.org compliant JSON-LD objects
 * from the business data defined in schemaData.ts configuration.
 * Used for SEO structured data across the Seasalt.ai website.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLocalizedUrl = createLocalizedUrl;
exports.getLocalizedOrganizationDescription = getLocalizedOrganizationDescription;
exports.createOrganizationSchema = createOrganizationSchema;
exports.createWebSiteSchema = createWebSiteSchema;
exports.createWebPageSchema = createWebPageSchema;
exports.createOfferSchema = createOfferSchema;
exports.createSoftwareApplicationSchema = createSoftwareApplicationSchema;
exports.createBreadcrumbListSchema = createBreadcrumbListSchema;
exports.createFAQPageSchema = createFAQPageSchema;
exports.createArticleSchema = createArticleSchema;
exports.createProductSchema = createProductSchema;
exports.createLocalizedOrganizationSchema = createLocalizedOrganizationSchema;
exports.createLocalizedProductSchema = createLocalizedProductSchema;
exports.createLocalizedWebSiteSchema = createLocalizedWebSiteSchema;
exports.createLocalizedWebPageSchema = createLocalizedWebPageSchema;
exports.createLocalizedBreadcrumbSchema = createLocalizedBreadcrumbSchema;
exports.createEnhancedFAQPageSchema = createEnhancedFAQPageSchema;
exports.generatePageSchemas = generatePageSchemas;
exports.getProductKeyFromPath = getProductKeyFromPath;
exports.validateStructuredData = validateStructuredData;
exports.stringifyStructuredData = stringifyStructuredData;
const schemaData_1 = require("../config/schemaData");
/**
 * Creates localized URLs for structured data
 */
function createLocalizedUrl(baseUrl, language, path = '') {
    const cleanPath = path.replace(/^\//, ''); // Remove leading slash
    const langPrefix = language === 'en' ? '' : `/${language}`;
    return `${baseUrl}${langPrefix}${cleanPath ? `/${cleanPath}` : ''}`;
}
/**
 * Gets localized organization description based on language
 */
function getLocalizedOrganizationDescription(language, fallback) {
    const descriptions = {
        // English
        'en': 'Leading AI conversation intelligence platform offering omnichannel customer communication solutions for businesses of all sizes.',
        // Chinese (Traditional)
        'zh-TW': '領先的 AI 對話智能平台，為各種規模的企業提供全通路客戶溝通解決方案。',
        // Chinese (Simplified)
        'zh-CN': '领先的 AI 对话智能平台，为各种规模的企业提供全渠道客户沟通解决方案。',
        // Spanish
        'es': 'Plataforma líder de inteligencia conversacional de IA que ofrece soluciones de comunicación omnicanal para empresas de todos los tamaños.',
        // French
        'fr': 'Plateforme d\'intelligence conversationnelle IA leader offrant des solutions de communication omnicanale pour les entreprises de toutes tailles.',
        // German
        'de': 'Führende KI-Konversationsintelligenz-Plattform, die Omnichannel-Kundenkommunikationslösungen für Unternehmen jeder Größe bietet.',
        // Japanese
        'ja': 'あらゆる規模の企業向けにオムニチャネル顧客コミュニケーションソリューションを提供する、主要なAI会話インテリジェンスプラットフォーム。',
        // Korean
        'ko': '모든 규모의 비즈니스를 위한 옴니채널 고객 커뮤니케이션 솔루션을 제공하는 선도적인 AI 대화 인텔리전스 플랫폼.',
        // Portuguese
        'pt': 'Plataforma líder de inteligência conversacional de IA oferecendo soluções de comunicação omnicanal para empresas de todos os tamanhos.',
        // Arabic
        'ar': 'منصة رائدة لذكاء المحادثة الذكية القائمة على الذكاء الاصطناعي تقدم حلول التواصل متعدد القنوات للعملاء للشركات من جميع الأحجام.',
        // Russian
        'ru': 'Ведущая платформа искусственного интеллекта для анализа разговоров, предлагающая омниканальные решения для общения с клиентами для компаний любого размера.',
        // Hindi
        'hi': 'सभी आकार के व्यवसायों के लिए ऑम्निचैनल ग्राहक संचार समाधान प्रदान करने वाला अग्रणी AI बातचीत बुद्धिमत्ता प्लेटफॉर्म।',
        // Indonesian
        'id': 'Platform kecerdasan percakapan AI terdepan yang menawarkan solusi komunikasi pelanggan omnichannel untuk bisnis dari segala ukuran.',
        // Thai
        'th': 'แพลตฟอร์มปัญญาประดิษฐ์สำหรับการสนทนาชั้นนำที่นำเสนอโซลูชันการสื่อสารลูกค้าแบบ omnichannel สำหรับธุรกิจทุกขนาด',
        // Vietnamese
        'vi': 'Nền tảng trí tuệ hội thoại AI hàng đầu cung cấp các giải pháp giao tiếp khách hàng đa kênh cho doanh nghiệp mọi quy mô.',
        // Malay
        'ms': 'Platform kecerdasan perbualan AI terkemuka yang menawarkan penyelesaian komunikasi pelanggan pelbagai saluran untuk perniagaan semua saiz.',
        // Filipino
        'fil': 'Nangungunang AI conversation intelligence platform na nag-aalok ng omnichannel customer communication solutions para sa mga negosyo ng lahat ng laki.',
        // Polish
        'pl': 'Wiodąca platforma inteligencji konwersacyjnej AI oferująca wielokanałowe rozwiązania komunikacji z klientami dla firm każdej wielkości.',
        // Persian/Farsi
        'fa': 'پلتفرم پیشرو هوش مصنوعی مکالمه که راه‌حل‌های ارتباطی چندکاناله با مشتری را برای کسب‌وکارهای همه اندازه‌ها ارائه می‌دهد.',
        // Tamil
        'ta': 'அனைத்து அளவிலான வணிகங்களுக்கும் ஆம்னிசேனல் வாடிக்கையாளர் தொடர்பு தீர்வுகளை வழங்கும் முன்னணி AI உரையாடல் அறிவுத்திறன் தளம்.'
    };
    return descriptions[language] || fallback;
}
// =============================================================================
// Core Schema Generators
// =============================================================================
/**
 * Creates an enhanced Organization schema with comprehensive company information
 */
function createOrganizationSchema(orgInfo = schemaData_1.ORGANIZATION_INFO, description, availableLanguages) {
    return {
        '@context': schemaData_1.SCHEMA_CONTEXT,
        '@type': schemaData_1.COMMON_SCHEMA_TYPES.ORGANIZATION,
        '@id': schemaData_1.SCHEMA_IDS.ORGANIZATION,
        name: orgInfo.name,
        alternateName: orgInfo.alternateName,
        ...(description && { description }),
        url: orgInfo.url,
        logo: {
            '@type': schemaData_1.COMMON_SCHEMA_TYPES.IMAGE_OBJECT,
            url: orgInfo.logo.url,
            width: orgInfo.logo.width,
            height: orgInfo.logo.height
        },
        foundingDate: orgInfo.foundingDate,
        contactPoint: {
            '@type': schemaData_1.COMMON_SCHEMA_TYPES.CONTACT_POINT,
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
function createWebSiteSchema(websiteInfo = schemaData_1.WEBSITE_INFO) {
    return {
        '@context': schemaData_1.SCHEMA_CONTEXT,
        '@type': schemaData_1.COMMON_SCHEMA_TYPES.WEBSITE,
        '@id': schemaData_1.SCHEMA_IDS.WEBSITE,
        name: websiteInfo.name,
        url: websiteInfo.url,
        description: websiteInfo.description,
        inLanguage: websiteInfo.inLanguage,
        publisher: {
            '@id': schemaData_1.SCHEMA_IDS.ORGANIZATION
        },
        potentialAction: websiteInfo.potentialAction
    };
}
/**
 * Creates a WebPage schema for individual pages
 */
function createWebPageSchema({ title, description, url, language, dateModified, lastReviewed }) {
    return {
        '@context': schemaData_1.SCHEMA_CONTEXT,
        '@type': schemaData_1.COMMON_SCHEMA_TYPES.WEBPAGE,
        '@id': url,
        name: title,
        description,
        url,
        inLanguage: language,
        isPartOf: {
            '@id': schemaData_1.SCHEMA_IDS.WEBSITE
        },
        publisher: {
            '@id': schemaData_1.SCHEMA_IDS.ORGANIZATION
        },
        ...(dateModified && { dateModified }),
        ...(lastReviewed && { lastReviewed })
    };
}
/**
 * Creates an Offer schema for products/services
 */
function createOfferSchema({ price, priceCurrency = 'USD', availability = schemaData_1.SCHEMA_AVAILABILITY.IN_STOCK, description, validFrom }) {
    return {
        '@type': schemaData_1.COMMON_SCHEMA_TYPES.OFFER,
        price,
        priceCurrency,
        availability,
        ...(description && { description }),
        ...(validFrom && { validFrom }),
        seller: {
            '@id': schemaData_1.SCHEMA_IDS.ORGANIZATION
        }
    };
}
/**
 * Creates a SoftwareApplication schema for products
 */
function createSoftwareApplicationSchema({ productInfo, url, offer, schemaId }) {
    const schema = {
        '@context': schemaData_1.SCHEMA_CONTEXT,
        '@type': schemaData_1.COMMON_SCHEMA_TYPES.SOFTWARE_APPLICATION,
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
            '@id': schemaData_1.SCHEMA_IDS.ORGANIZATION
        }
    };
    // Add optional properties if they exist
    if (productInfo.screenshots && productInfo.screenshots.length > 0) {
        schema.screenshot = productInfo.screenshots.map(screenshot => screenshot.startsWith('http') ? screenshot : `https://seasalt.ai${screenshot}`);
    }
    if (productInfo.features && productInfo.features.length > 0) {
        schema.featureList = productInfo.features;
    }
    if (productInfo.aggregateRating) {
        schema.aggregateRating = {
            '@type': schemaData_1.COMMON_SCHEMA_TYPES.AGGREGATE_RATING,
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
function createBreadcrumbListSchema(breadcrumbs) {
    return {
        '@context': schemaData_1.SCHEMA_CONTEXT,
        '@type': schemaData_1.COMMON_SCHEMA_TYPES.BREADCRUMB_LIST,
        itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': schemaData_1.COMMON_SCHEMA_TYPES.LIST_ITEM,
            position: index + 1,
            name: crumb.name,
            item: crumb.url
        }))
    };
}
/**
 * Creates an FAQPage schema
 */
function createFAQPageSchema(faqs) {
    return {
        '@context': schemaData_1.SCHEMA_CONTEXT,
        '@type': schemaData_1.COMMON_SCHEMA_TYPES.FAQ_PAGE,
        mainEntity: faqs.map(faq => ({
            '@type': schemaData_1.COMMON_SCHEMA_TYPES.QUESTION,
            name: faq.question,
            acceptedAnswer: {
                '@type': schemaData_1.COMMON_SCHEMA_TYPES.ANSWER,
                text: faq.answer
            }
        }))
    };
}
/**
 * Creates an Article schema for blog posts
 */
function createArticleSchema({ title, description, image, author, datePublished, dateModified, url }) {
    const fullImageUrl = image.startsWith('http') ? image : `https://seasalt.ai${image}`;
    return {
        '@context': schemaData_1.SCHEMA_CONTEXT,
        '@type': schemaData_1.COMMON_SCHEMA_TYPES.ARTICLE,
        headline: title,
        description,
        image: fullImageUrl,
        author: {
            '@type': schemaData_1.COMMON_SCHEMA_TYPES.PERSON,
            name: author
        },
        publisher: {
            '@id': schemaData_1.SCHEMA_IDS.ORGANIZATION
        },
        ...(datePublished && { datePublished }),
        ...(dateModified && { dateModified }),
        mainEntityOfPage: {
            '@type': schemaData_1.COMMON_SCHEMA_TYPES.WEBPAGE,
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
function createProductSchema({ productKey, url, customPrice, customPriceCurrency, customAvailability, customDescription, language = 'en' }) {
    // Get localized product info based on language
    const productInfo = (0, schemaData_1.getLocalizedProductInfo)(productKey, language);
    if (!productInfo) {
        throw new Error(`Product information not found for key: ${productKey}`);
    }
    // Create offer with custom pricing or defaults
    const offer = createOfferSchema({
        price: customPrice || productInfo.defaultOffer.price,
        priceCurrency: customPriceCurrency || productInfo.defaultOffer.priceCurrency,
        availability: customAvailability || productInfo.defaultOffer.availability,
        description: customDescription || productInfo.defaultOffer.description,
        validFrom: new Date().toISOString()
    });
    // Determine schema ID based on product
    const schemaId = productKey === 'seachat' ? schemaData_1.SCHEMA_IDS.SEACHAT_PRODUCT :
        productKey === 'seax' ? schemaData_1.SCHEMA_IDS.SEAX_PRODUCT :
            schemaData_1.SCHEMA_IDS.SEAVOICE_PRODUCT;
    return createSoftwareApplicationSchema({
        productInfo,
        url,
        offer,
        schemaId
    });
}
// =============================================================================
// Advanced Schema Generators with Localization
// =============================================================================
/**
 * Creates a localized organization schema with enhanced details
 */
function createLocalizedOrganizationSchema({ language, baseUrl, customDescription }) {
    const orgInfo = {
        ...schemaData_1.ORGANIZATION_INFO,
        description: customDescription || getLocalizedOrganizationDescription(language, schemaData_1.ORGANIZATION_INFO.name)
    };
    return {
        '@context': schemaData_1.SCHEMA_CONTEXT,
        '@type': schemaData_1.COMMON_SCHEMA_TYPES.ORGANIZATION,
        '@id': schemaData_1.SCHEMA_IDS.ORGANIZATION,
        name: orgInfo.name,
        alternateName: orgInfo.alternateName,
        description: orgInfo.description,
        url: orgInfo.url,
        logo: {
            '@type': schemaData_1.COMMON_SCHEMA_TYPES.IMAGE_OBJECT,
            url: orgInfo.logo.url,
            width: orgInfo.logo.width,
            height: orgInfo.logo.height
        },
        foundingDate: orgInfo.foundingDate,
        contactPoint: {
            '@type': schemaData_1.COMMON_SCHEMA_TYPES.CONTACT_POINT,
            email: orgInfo.contactPoint.email,
            contactType: orgInfo.contactPoint.contactType,
            availableLanguage: orgInfo.contactPoint.availableLanguage
        },
        sameAs: orgInfo.sameAs,
        areaServed: orgInfo.areaServed.map(countryCode => ({
            '@type': 'Country',
            identifier: countryCode
        })),
        availableLanguage: orgInfo.availableLanguage.map(lang => ({
            '@type': 'Language',
            name: lang
        }))
    };
}
/**
 * Creates a localized product schema with enhanced features
 */
function createLocalizedProductSchema({ productKey, language, baseUrl, customOffer, customFeatures, path = '' }) {
    // Get localized product info based on language
    const productInfo = (0, schemaData_1.getLocalizedProductInfo)(productKey, language);
    if (!productInfo) {
        throw new Error(`Product information not found for key: ${productKey}`);
    }
    const localizedDescription = (0, schemaData_1.getLocalizedProductDescription)(productKey, language);
    const productUrl = createLocalizedUrl(baseUrl, language, path);
    const schemaId = `${baseUrl}/#${productKey}`;
    // Create enhanced offer
    const offer = {
        '@type': schemaData_1.COMMON_SCHEMA_TYPES.OFFER,
        price: customOffer?.price || productInfo.defaultOffer.price,
        priceCurrency: customOffer?.priceCurrency || productInfo.defaultOffer.priceCurrency,
        availability: customOffer?.availability || productInfo.defaultOffer.availability,
        description: customOffer?.description || productInfo.defaultOffer.description,
        validFrom: customOffer?.validFrom || new Date().toISOString(),
        seller: {
            '@id': schemaData_1.SCHEMA_IDS.ORGANIZATION
        }
    };
    const schema = {
        '@context': schemaData_1.SCHEMA_CONTEXT,
        '@type': schemaData_1.COMMON_SCHEMA_TYPES.SOFTWARE_APPLICATION,
        '@id': schemaId,
        name: productInfo.name,
        description: localizedDescription,
        applicationCategory: productInfo.applicationCategory,
        operatingSystem: productInfo.operatingSystem,
        url: productUrl,
        image: productInfo.image.startsWith('http') ? productInfo.image : `${baseUrl}${productInfo.image}`,
        featureList: customFeatures || productInfo.features,
        offers: offer,
        publisher: {
            '@id': schemaData_1.SCHEMA_IDS.ORGANIZATION
        }
    };
    // Add screenshots if available
    if (productInfo.screenshots && productInfo.screenshots.length > 0) {
        schema.screenshot = productInfo.screenshots.map(screenshot => screenshot.startsWith('http') ? screenshot : `${baseUrl}${screenshot}`);
    }
    // Add ratings if available
    if (productInfo.aggregateRating) {
        schema.aggregateRating = {
            '@type': schemaData_1.COMMON_SCHEMA_TYPES.AGGREGATE_RATING,
            ratingValue: productInfo.aggregateRating.ratingValue,
            bestRating: productInfo.aggregateRating.bestRating,
            ratingCount: productInfo.aggregateRating.ratingCount
        };
    }
    return schema;
}
/**
 * Creates a localized WebSite schema with localized description
 */
function createLocalizedWebSiteSchema({ language, baseUrl, customDescription }) {
    const websiteInfo = {
        ...schemaData_1.WEBSITE_INFO,
        description: customDescription || getLocalizedOrganizationDescription(language, schemaData_1.WEBSITE_INFO.description)
    };
    return {
        '@context': schemaData_1.SCHEMA_CONTEXT,
        '@type': schemaData_1.COMMON_SCHEMA_TYPES.WEBSITE,
        '@id': schemaData_1.SCHEMA_IDS.WEBSITE,
        name: websiteInfo.name,
        url: websiteInfo.url,
        description: websiteInfo.description,
        inLanguage: websiteInfo.inLanguage,
        publisher: {
            '@id': schemaData_1.SCHEMA_IDS.ORGANIZATION
        },
        potentialAction: websiteInfo.potentialAction
    };
}
/**
 * Creates a localized webpage schema
 */
function createLocalizedWebPageSchema({ title, description, language, baseUrl, path = '', dateModified, lastReviewed }) {
    const url = createLocalizedUrl(baseUrl, language, path);
    return {
        '@context': schemaData_1.SCHEMA_CONTEXT,
        '@type': schemaData_1.COMMON_SCHEMA_TYPES.WEBPAGE,
        '@id': url,
        name: title,
        description,
        url,
        inLanguage: language,
        isPartOf: {
            '@id': schemaData_1.SCHEMA_IDS.WEBSITE
        },
        publisher: {
            '@id': schemaData_1.SCHEMA_IDS.ORGANIZATION
        },
        ...(dateModified && { dateModified }),
        ...(lastReviewed && { lastReviewed: lastReviewed || new Date().toISOString() })
    };
}
/**
 * Creates a localized breadcrumb schema
 */
function createLocalizedBreadcrumbSchema({ breadcrumbs, language, baseUrl }) {
    return {
        '@context': schemaData_1.SCHEMA_CONTEXT,
        '@type': schemaData_1.COMMON_SCHEMA_TYPES.BREADCRUMB_LIST,
        itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': schemaData_1.COMMON_SCHEMA_TYPES.LIST_ITEM,
            position: index + 1,
            name: crumb.name,
            item: createLocalizedUrl(baseUrl, language, crumb.path)
        }))
    };
}
/**
 * Creates a comprehensive FAQ page schema with additional metadata
 */
function createEnhancedFAQPageSchema({ faqs, pageName, pageDescription, language, baseUrl, path = 'faq' }) {
    const url = createLocalizedUrl(baseUrl, language, path);
    return {
        '@context': schemaData_1.SCHEMA_CONTEXT,
        '@type': schemaData_1.COMMON_SCHEMA_TYPES.FAQ_PAGE,
        ...(pageName && { name: pageName }),
        ...(pageDescription && { description: pageDescription }),
        ...(url && { url }),
        mainEntity: faqs.map(faq => ({
            '@type': schemaData_1.COMMON_SCHEMA_TYPES.QUESTION,
            name: faq.question,
            acceptedAnswer: {
                '@type': schemaData_1.COMMON_SCHEMA_TYPES.ANSWER,
                text: faq.answer
            }
        }))
    };
}
/**
 * Generates complete schema set for a page with localization
 */
function generatePageSchemas({ pageType, title, description, language, baseUrl, path = '', breadcrumbs, faqs, productKey, customOffer, customFeatures, articleData, customStructuredData }) {
    const schemas = [];
    // Always include organization and website schemas
    schemas.push(createLocalizedOrganizationSchema({ language, baseUrl }), createLocalizedWebSiteSchema({ language, baseUrl }));
    // Add webpage schema
    schemas.push(createLocalizedWebPageSchema({
        title,
        description,
        language,
        baseUrl,
        path,
        lastReviewed: new Date().toISOString()
    }));
    // Add page-specific schemas
    switch (pageType) {
        case 'homepage':
        case 'product':
            if (productKey) {
                schemas.push(createLocalizedProductSchema({
                    productKey,
                    language,
                    baseUrl,
                    customOffer,
                    customFeatures,
                    path
                }));
            }
            break;
        case 'blog':
            if (articleData) {
                schemas.push(createArticleSchema({
                    title,
                    description,
                    image: `${baseUrl}/images/blog-default.jpg`,
                    author: articleData.author,
                    datePublished: articleData.datePublished,
                    dateModified: articleData.dateModified,
                    url: createLocalizedUrl(baseUrl, language, path)
                }));
            }
            break;
        case 'faq':
            if (faqs && faqs.length > 0) {
                schemas.push(createEnhancedFAQPageSchema({
                    faqs,
                    pageName: title,
                    pageDescription: description,
                    language,
                    baseUrl,
                    path
                }));
            }
            break;
    }
    // Add breadcrumbs if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
        schemas.push(createLocalizedBreadcrumbSchema({
            breadcrumbs,
            language,
            baseUrl
        }));
    }
    // Add FAQs if provided (for non-FAQ pages)
    if (faqs && faqs.length > 0 && pageType !== 'faq') {
        schemas.push(createFAQPageSchema(faqs));
    }
    // Add custom structured data
    if (customStructuredData && customStructuredData.length > 0) {
        schemas.push(...customStructuredData);
    }
    return schemas.filter(schema => validateStructuredData(schema));
}
// =============================================================================
// Utility Functions
// =============================================================================
/**
 * Determines the product key from a URL path
 */
function getProductKeyFromPath(pathname) {
    const path = pathname.toLowerCase();
    if (path.includes('/seachat'))
        return 'seachat';
    if (path.includes('/seax'))
        return 'seax';
    if (path.includes('/seavoice'))
        return 'seavoice';
    return null;
}
/**
 * Validates that all required structured data fields are present
 */
function validateStructuredData(schema) {
    const required = ['@context', '@type'];
    return required.every(field => field in schema && schema[field]);
}
/**
 * Converts structured data objects to JSON-LD script content
 */
function stringifyStructuredData(schemas) {
    return schemas
        .filter(validateStructuredData)
        .map(schema => JSON.stringify(schema, null, 0));
}
