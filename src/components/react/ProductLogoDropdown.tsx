import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProductLogoDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: string;
}

const ProductLogoDropdown = ({ isOpen, onClose, currentLanguage }: ProductLogoDropdownProps) => {
  const products = [
    {
      name: 'SeaChat',
      description: 'AI-powered chatbot platform',
      logo: '/products/seachat-logo.png',
      url: `/${currentLanguage}`
    },
    {
      name: 'SeaVoice',
      description: 'AI voice assistant platform',
      logo: '/products/seavoice-logo.png',
      url: `/${currentLanguage}/seavoice`
    },
    {
      name: 'SeaX',
      description: 'Omnichannel communication platform',
      logo: '/seax-logo.png',
      url: `/${currentLanguage}/seax`,
      current: true
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 pt-2 w-80 z-[60]"
        >
          <div className="bg-white rounded-md shadow-lg py-4 border">
            <div className="px-4 py-2">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">All Seasalt.ai Products</h3>
              <div className="space-y-1">
                {products.map((product) => (
                  <a
                    key={product.name}
                    href={product.url}
                    className={`flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors ${
                      product.current ? 'bg-blue-50 border border-blue-200' : ''
                    }`}
                    onClick={onClose}
                  >
                    <img 
                      src={product.logo} 
                      alt={product.name}
                      className="w-8 h-8 mr-3"
                    />
                    <div className="flex-1">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-900">{product.name}</span>
                        {product.current && (
                          <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                            Current
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">{product.description}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductLogoDropdown;
