import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getProductAssets } from '../utils/productAssets';

const useFavicon = () => {
  const location = useLocation();

  const getFaviconPath = () => {
    // Use the centralized product detection logic
    const productAssets = getProductAssets(location.pathname);
    return productAssets.favicon;
  };

  const updateFavicon = (faviconPath: string) => {
    // Remove existing favicon links
    const existingLinks = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
    existingLinks.forEach(link => link.remove());

    // Create new favicon link
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = faviconPath.endsWith('.ico') ? 'image/x-icon' : 'image/png';
    link.href = faviconPath;
    
    // Add to head
    document.head.appendChild(link);
  };

  useEffect(() => {
    const faviconPath = getFaviconPath();
    updateFavicon(faviconPath);
  }, [location.pathname]);

  return getFaviconPath();
};

export default useFavicon;
