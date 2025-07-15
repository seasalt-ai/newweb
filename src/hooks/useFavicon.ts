import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useFavicon = () => {
  const location = useLocation();

  const getFaviconPath = () => {
    const pathname = location.pathname;
    
    // Check if we're on a SeaX page
    if (pathname.includes('/seax')) {
      return '/seax-icon.png';
    }
    
    // Check if we're on a SeaVoice page
    if (pathname.includes('/seavoice')) {
      return '/seavoice-icon.png';
    }
    
    // Check if we're on a SeaChat page
    if (pathname.includes('/seachat')) {
      return '/seachat-icon.png';
    }
    
    // Default favicon for main site
    return '/seasalt-ai-favicon.ico';
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
