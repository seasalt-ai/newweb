import React from 'react';
import useFavicon from '../hooks/useFavicon';

interface FaviconManagerProps {
  children: React.ReactNode;
}

const FaviconManager: React.FC<FaviconManagerProps> = ({ children }) => {
  // This hook will automatically update the favicon based on the current route
  useFavicon();

  return <>{children}</>;
};

export default FaviconManager;
