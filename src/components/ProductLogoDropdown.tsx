import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { products } from '../data/productsData';
import { normalizeLanguage } from '../constants/languages';

interface ProductLogoDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage?: string;
}

const ProductLogoDropdown = ({ isOpen, onClose, currentLanguage = 'en' }: ProductLogoDropdownProps) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  // Normalize the language to prevent race conditions with unsupported variants like 'en-US'
  const normalizedLanguage = normalizeLanguage(currentLanguage);
  console.log('[ProductLogoDropdown] Language normalization:', { currentLanguage, normalizedLanguage });

  const getMainSiteLink = () => {
    // For SeaVoice, link to root, for others link to language-specific root
    const link = normalizedLanguage === 'en' ? '/' : `/${normalizedLanguage}`;
    console.log('[ProductLogoDropdown] getMainSiteLink:', { currentLanguage, normalizedLanguage, link });
    return link;
  };

  const getProductLink = (href: string) => {
    console.log('[ProductLogoDropdown] getProductLink called:', { href, currentLanguage, normalizedLanguage });
    
    // Ensure we have a clean product href
    if (!href.startsWith('/')) {
      console.log('[ProductLogoDropdown] External link, returning as-is:', href);
      return href; // External link, return as-is
    }
    
    // For internal links, construct the proper language-prefixed path using normalized language
    const finalLink = normalizedLanguage === 'en' ? href : `/${normalizedLanguage}${href}`;
    console.log('[ProductLogoDropdown] Internal link generated:', { originalHref: href, currentLanguage, normalizedLanguage, finalLink });
    return finalLink;
  };

  return (
    <div className="absolute top-full left-0 w-80 z-50">
      {/* Invisible bridge to prevent gap */}
      <div className="h-2 w-full" />
      {/* Actual dropdown content */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
      {/* Main Site Link */}
      <Link
        to={getMainSiteLink()}
        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100"
        onClick={() => {
          console.log('[ProductLogoDropdown] Main site link clicked:', { to: getMainSiteLink(), currentLanguage });
          onClose();
        }}
      >
        <Home className="w-5 h-5 mr-3 text-blue-600" />
        <div>
          <div className="font-medium text-gray-900">{t('productDropdown.mainSite.title')}</div>
          <div className="text-xs text-gray-500">{t('productDropdown.mainSite.description')}</div>
        </div>
      </Link>
      
      {/* Products */}
      <div className="py-2">
        <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('productDropdown.productsLabel')}</div>
        {products.map((product, index) => (
          <div key={index}>
            {product.subProducts ? (
              <div>
                {product.href.startsWith('/') ? (
                  <Link
                    to={getProductLink(product.href)}
                    className="flex items-center block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => {
                      const link = getProductLink(product.href);
                      console.log('[ProductLogoDropdown] Product link clicked:', { product: product.title, originalHref: product.href, finalLink: link, currentLanguage });
                      onClose();
                    }}
                  >
                    {product.icon && <product.icon className="w-5 h-5 mr-3 text-blue-600" />}
                    <div>
                      <div className="font-medium">{product.title}</div>
                      <div className="text-xs text-gray-500">{product.description}</div>
                    </div>
                  </Link>
                ) : (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    {product.icon && <product.icon className="w-5 h-5 mr-3 text-blue-600" />}
                    <div>
                      <div className="font-medium">{product.title}</div>
                      <div className="text-xs text-gray-500">{product.description}</div>
                    </div>
                  </a>
                )}
                <div className="bg-gray-50 border-t border-gray-100">
                  {product.subProducts.map((subProduct, subIndex) => (
                    <a
                      key={subIndex}
                      href={subProduct.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-8 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    >
                      {subProduct.title}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              product.href.startsWith('/') ? (
                <Link
                  to={getProductLink(product.href)}
                  className="flex items-center block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => {
                    const link = getProductLink(product.href);
                    console.log('[ProductLogoDropdown] Product link (no subProducts) clicked:', { product: product.title, originalHref: product.href, finalLink: link, currentLanguage });
                    onClose();
                  }}
                >
                  {product.icon && <product.icon className="w-5 h-5 mr-3 text-blue-600" />}
                  <div>
                    <div className="font-medium">{product.title}</div>
                    <div className="text-xs text-gray-500">{product.description}</div>
                  </div>
                </Link>
              ) : (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                >
                  {product.icon && <product.icon className="w-5 h-5 mr-3 text-blue-600" />}
                  <div>
                    <div className="font-medium">{product.title}</div>
                    <div className="text-xs text-gray-500">{product.description}</div>
                  </div>
                </a>
              )
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ProductLogoDropdown;
