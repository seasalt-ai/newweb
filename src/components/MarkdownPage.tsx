import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Header from './Header';
import Footer from './Footer';
import SEOHelmet from './SEOHelmet';

interface MarkdownPageProps {
  pageType: 'privacy' | 'terms';
}

const MarkdownPage: React.FC<MarkdownPageProps> = ({ pageType }) => {
  const [markdown, setMarkdown] = useState('');
  const { lang } = useParams<{ lang: string }>();

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/content/${pageType}.md`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        setMarkdown(text);
      } catch (error) {
        console.error(`Could not fetch ${pageType} markdown:`, error);
        setMarkdown(`# Error\n\nCould not load ${pageType} content.`);
      }
    };

    fetchMarkdown();
  }, [pageType]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEOHelmet
        title={pageType === 'privacy' ? 'Privacy Policy - Seasalt.ai' : 'Terms of Service - Seasalt.ai'}
        description={pageType === 'privacy' ? 'Read the Privacy Policy of Seasalt.ai.' : 'Read the Terms of Service of Seasalt.ai.'}
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={typeof window !== 'undefined' ? `${window.location.origin}/${pageType}` : `/${pageType}`}
      />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ className = '', children, inline, ...props }: { className?: string; children?: React.ReactNode; inline?: boolean; [key: string]: any; }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={atomDark as {[key: string]: React.CSSProperties}}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              h1: ({ node, ...props }) => <h1 className="text-4xl font-bold mb-4" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-3xl font-semibold mb-3 mt-6" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-2xl font-medium mb-2 mt-4" {...props} />,
              p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4" {...props} />,
              li: ({ node, ...props }) => <li className="mb-2" {...props} />,
              a: ({ node, ...props }) => <a className="text-blue-600 hover:underline" {...props} />,
              blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />,
            }}
          >
            {markdown}
          </ReactMarkdown>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default MarkdownPage;