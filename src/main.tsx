import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Buffer } from 'buffer';
import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import './i18n';

// Make Buffer available globally for libraries that expect it
window.Buffer = Buffer;

// Handle redirect from 404.html
const redirectPath = sessionStorage.getItem('redirectPath');
if (redirectPath) {
  sessionStorage.removeItem('redirectPath');
  // Use replaceState to avoid adding to the history stack
  window.history.replaceState(null, '', redirectPath);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
        <App />
      </Suspense>
    </HelmetProvider>
  </StrictMode>
);