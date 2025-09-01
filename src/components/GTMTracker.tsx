import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gtmTrackPageView } from '../utils/gtm';

/**
 * GTMTracker component handles automatic page view tracking
 * This component should be placed in your main App component to track route changes
 */
const GTMTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    const pagePath = location.pathname + location.search;
    gtmTrackPageView(pagePath);
  }, [location]);

  // This component doesn't render anything
  return null;
};

export default GTMTracker;
