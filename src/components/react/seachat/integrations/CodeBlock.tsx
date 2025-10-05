import React, { useState } from 'react';
import type { SupportedLanguage } from '../../../../i18n/helpers';

interface CodeBlockProps {
  code: string;
  lang: SupportedLanguage;
  translations?: any;
  copyButtonText?: string;
  copiedText?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  lang, 
  translations,
  copyButtonText = 'Copy Code',
  copiedText = 'Copied!'
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Helper function for getting translations
  const getText = (key: string, fallback: string = key): string => {
    if (translations) {
      const keys = key.split('.');
      let result: any = translations;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          return fallback;
        }
      }
      
      return typeof result === 'string' ? result : fallback;
    }
    
    return fallback;
  };

  const buttonText = copied ? copiedText : copyButtonText;

  return (
    <div className="relative group">
      <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
        <pre className="text-green-400 text-sm">
          <code>{code}</code>
        </pre>
      </div>
      <button
        onClick={handleCopy}
        className={`absolute top-4 right-4 px-3 py-1 rounded-md text-sm font-medium transition-all ${
          copied 
            ? 'bg-green-500 text-white' 
            : 'bg-gray-700 text-gray-200 hover:bg-gray-600 opacity-0 group-hover:opacity-100'
        }`}
      >
        {copied ? (
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{buttonText}</span>
          </div>
        ) : (
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>{buttonText}</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default CodeBlock;