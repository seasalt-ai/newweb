import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Small delay to ensure DOM is ready, then scroll to top
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Use 'instant' to avoid smooth scrolling animation on navigation
      });
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [location.pathname, location.search]);

  return null;
};

export default ScrollToTop;
