import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { loadBlogPostByUrlPath, BlogPost } from '../utils/markdown';
import SEOHelmet from '../components/SEOHelmet';
import { LANGUAGE_DETAILS } from '../constants/languages';
import BlogTableOfContents from '../components/BlogTableOfContents';

// Helper function to create a structured data for blog post
const createArticleStructuredData = (post: BlogPost) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.seo_title, // Use SEO title for search engines
    "description": post.meta_description,
    "image": post.image_thumbnail,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Seasalt.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "/seasalt-ai-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": typeof window !== 'undefined' ? window.location.href : ''
    }
  };
};

const BlogPostPage = () => {
  const { slug, lang } = useParams<{ slug: string; lang: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setError('No blog post specified');
        setLoading(false);
        return;
      }

      try {
        const blogPost = await loadBlogPostByUrlPath(slug, lang || i18n.language);
        if (blogPost) {
          setPost(blogPost);
        } else {
          setError('Blog post not found');
        }
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Error loading blog post');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug, lang, i18n.language]);

  // Additional scroll to top when blog post changes
  useEffect(() => {
    if (post && !loading) {
      // Ensure we scroll to top when the blog post content is loaded
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [post, loading]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

  const sharePost = () => {
    if (navigator.share && post) {
      navigator.share({
        title: post.title,
        text: post.meta_description,
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Function to switch language for the current post
  const switchLanguage = (languageCode: string) => {
    if (post?.availableLanguages?.includes(languageCode)) {
      navigate(`/${languageCode}/blog/${slug}`);
    }
  };

  // Generate canonical URL for SEO
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${lang}/blog/${slug}` 
    : `/${lang}/blog/${slug}`;

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading blog post...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
              <p className="text-xl text-gray-600 mb-8">{error || 'The blog post you\'re looking for doesn\'t exist.'}</p>
              <Link
                to="/blog"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Blog
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* SEO Tags */}
      {post && (
        <SEOHelmet
          title={post.seo_title}
          description={post.meta_description || `${post.title} - Seasalt.ai Blog`}
          favicon="/seasalt-ai-favicon.ico"
          canonicalUrl={canonicalUrl}
          availableLanguages={post.availableLanguages}
          image={post.image_thumbnail}
          type="article"
          author={post.author}
          publishedTime={new Date(post.date).toISOString()}
          tags={post.tags}
          slug={slug}
        />
      )}
      
      {/* Add structured data for blog post */}
      {post && (
        <script type="application/ld+json">
          {JSON.stringify(createArticleStructuredData(post))}
        </script>
      )}
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/${i18n.language}/blog`} className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-6 sm:mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Blog
            </Link>
            
            <div className="mb-6 sm:mb-8">
              <img
                src={post.image_thumbnail}
                alt={post.title}
                className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/seasalt-ai-icon.png';
                }}
              />
            </div>

            <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 gap-2 sm:gap-4">
              <div className="flex items-center flex-shrink-0">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center flex-shrink-0">
                <User className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center flex-shrink-0">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <span>{estimateReadingTime(post.content)} min read</span>
              </div>
              
              {/* Language Switcher for this post */}
              {post.availableLanguages && post.availableLanguages.length > 1 && (
                <div className="flex items-center flex-wrap gap-1 mt-2 sm:mt-0">
                  <span className="text-xs sm:text-sm text-gray-500 mr-1 sm:mr-2">Available in:</span>
                  <div className="flex flex-wrap gap-1 sm:space-x-2">
                    {post.availableLanguages.map(langCode => (
                      <button
                        key={langCode}
                        onClick={() => switchLanguage(langCode)}
                        className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs rounded ${
                          post.language === langCode 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {LANGUAGE_DETAILS.find(l => l.code === langCode)?.name || langCode}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <button
                onClick={sharePost}
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 mt-2 sm:mt-0"
              >
                <Share2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                Share
              </button>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              {post.meta_description}
            </p>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium rounded-full"
                  >
                    <Tag className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-8 sm:py-12 bg-white relative">
          {/* Table of Contents */}
          <BlogTableOfContents content={post.content} />
          
          <div className="max-w-none mx-auto">
            {/* Content Container with Medium-like width */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <article 
                className="prose prose-lg prose-blue max-w-none
                  prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
                  prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:font-extrabold prose-h1:leading-tight
                  prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:font-bold prose-h2:leading-tight
                  prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-10 prose-h3:font-semibold prose-h3:leading-tight
                  prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-8 prose-h4:font-semibold
                  prose-p:text-gray-800 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg prose-p:font-normal
                  prose-a:text-blue-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-700
                  prose-strong:text-gray-900 prose-strong:font-semibold
                  prose-em:text-gray-700 prose-em:font-medium
                  prose-ul:mb-8 prose-ol:mb-8 prose-ul:text-lg prose-ol:text-lg
                  prose-li:text-gray-800 prose-li:mb-3 prose-li:leading-relaxed
                  prose-blockquote:border-l-4 prose-blockquote:border-green-500 prose-blockquote:bg-green-50 
                  prose-blockquote:py-6 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:my-8
                  prose-blockquote:text-lg prose-blockquote:font-medium prose-blockquote:italic
                  prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-base prose-code:font-mono
                  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-8 prose-pre:text-sm
                  prose-img:rounded-xl prose-img:shadow-xl prose-img:mx-auto prose-img:my-8
                  prose-table:my-8 prose-table:text-base
                  prose-th:bg-gray-50 prose-th:font-semibold prose-th:text-gray-900
                  prose-td:text-gray-800
                  prose-hr:my-12 prose-hr:border-gray-200
                  first:prose-p:text-xl first:prose-p:font-medium first:prose-p:text-gray-700 first:prose-p:leading-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your Customer Communications?
            </h2>
            <p className="text-lg sm:text-xl text-white opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              See how Seasalt.ai can help your business automate support, capture leads, 
              and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-blue-600 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200"
               >
                 Sign Up
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;