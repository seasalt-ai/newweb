import { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

interface BlogTableOfContentsProps {
  content: string;
}

const BlogTableOfContents: React.FC<BlogTableOfContentsProps> = ({ content }) => {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const tocRef = useRef<HTMLDivElement>(null);

  // Extract headings from HTML content
  useEffect(() => {
    const extractHeadings = () => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, 'text/html');
      const headingElements = doc.querySelectorAll('h1, h2, h3, h4');
      
      const extractedHeadings: HeadingItem[] = [];
      
      headingElements.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        const text = heading.textContent || '';
        let id = heading.id;
        
        // Create ID if it doesn't exist
        if (!id) {
          id = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
          
          // Ensure uniqueness
          let finalId = id;
          let counter = 1;
          while (extractedHeadings.some(h => h.id === finalId)) {
            finalId = `${id}-${counter}`;
            counter++;
          }
          id = finalId;
        }
        
        extractedHeadings.push({
          id,
          text,
          level
        });
      });
      
      setHeadings(extractedHeadings);
    };

    if (content) {
      extractHeadings();
    }
  }, [content]);

  // Add IDs to actual DOM headings and set up intersection observer
  useEffect(() => {
    const addIdsToHeadings = () => {
      const headingElements = document.querySelectorAll('article h1, article h2, article h3, article h4');
      
      headingElements.forEach((heading, index) => {
        if (headings[index]) {
          heading.id = headings[index].id;
        }
      });
    };

    const setupIntersectionObserver = () => {
      const headingElements = document.querySelectorAll('article h1, article h2, article h3, article h4');
      
      const observer = new IntersectionObserver(
        (entries) => {
          const visibleHeadings = entries
            .filter(entry => entry.isIntersecting)
            .map(entry => entry.target.id);
          
          if (visibleHeadings.length > 0) {
            setActiveId(visibleHeadings[0]);
          }
        },
        {
          rootMargin: '-100px 0px -66% 0px',
          threshold: 0
        }
      );

      headingElements.forEach(heading => {
        if (heading.id) {
          observer.observe(heading);
        }
      });

      return observer;
    };

    if (headings.length > 0) {
      addIdsToHeadings();
      const observer = setupIntersectionObserver();
      
      // Check if TOC should be visible based on content height
      const articleElement = document.querySelector('article');
      if (articleElement) {
        const contentHeight = articleElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        setIsVisible(contentHeight > viewportHeight * 1.5); // Show TOC if content is longer than 1.5 viewport heights
      }

      return () => observer.disconnect();
    }
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getIndentClass = (level: number) => {
    switch (level) {
      case 1: return 'pl-0';
      case 2: return 'pl-4';
      case 3: return 'pl-8';
      case 4: return 'pl-12';
      default: return 'pl-0';
    }
  };

  const getTextSize = (level: number) => {
    switch (level) {
      case 1: return 'text-sm font-semibold';
      case 2: return 'text-sm font-medium';
      case 3: return 'text-xs font-medium';
      case 4: return 'text-xs';
      default: return 'text-sm';
    }
  };

  if (!isVisible || headings.length === 0) {
    return null;
  }

  return (
    <div 
      ref={tocRef}
      className="fixed top-1/2 right-8 transform -translate-y-1/2 hidden xl:block z-40"
      style={{ maxHeight: '70vh' }}
    >
      <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg p-4 max-w-xs">
        <div className="flex items-center mb-3 pb-2 border-b border-gray-100">
          <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
          <h3 className="text-sm font-semibold text-gray-900">Table of Contents</h3>
        </div>
        
        <nav className="space-y-1 max-h-96 overflow-y-auto scrollbar-thin">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              className={`
                block w-full text-left py-1 px-2 rounded transition-all duration-200 hover:bg-blue-50
                ${getIndentClass(heading.level)}
                ${getTextSize(heading.level)}
                ${activeId === heading.id 
                  ? 'text-blue-600 bg-blue-50 border-l-3 border-blue-600 font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
                }
              `}
              title={heading.text}
            >
              <span className="line-clamp-2 leading-tight">
                {heading.text}
              </span>
            </button>
          ))}
        </nav>
        
        {/* Progress indicator */}
        <div className="mt-3 pt-2 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Progress</span>
            <span>{Math.round((headings.findIndex(h => h.id === activeId) + 1) / headings.length * 100)}%</span>
          </div>
          <div className="mt-1 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{
                width: `${(headings.findIndex(h => h.id === activeId) + 1) / headings.length * 100}%`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTableOfContents;
