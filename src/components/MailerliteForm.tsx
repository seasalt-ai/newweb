import { useEffect } from 'react';

declare global {
  interface Window {
    ml?: (...args: any[]) => void;
  }
}

function MailerLiteForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.mailerlite.com/js/universal.js';
    script.async = true;
    script.onload = () => {
      if (window.ml) {
        window.ml('forms', '672229', 'embed');
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="max-w-[420px] w-full h-[200px]">
      <div className="mailerlite-form"></div>
    </div>
  );
}

export default MailerLiteForm;
