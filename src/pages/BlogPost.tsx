import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { loadBlogPost, BlogPost } from '../utils/markdown';
import SEOHelmet from '../components/SEOHelmet';

// Helper function to create a structured data for blog post
const createArticleStructuredData = (post: BlogPost) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
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
  const { t, i18n } = useTranslation();
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
        const blogPost = await loadBlogPost(slug, lang || i18n.language);
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
          title={post.title}
          description={post.meta_description || `${post.title} - Seasalt.ai Blog`}
          favicon="/seasalt-ai-favicon.ico"
          canonicalUrl={canonicalUrl}
          availableLanguages={post.availableLanguages}
          image={post.image_thumbnail}
          type="article"
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
                        {langCode === 'en' ? 'English' : 
                         langCode === 'es' ? 'Español' : 
                         langCode === 'zh-TW' ? '繁體中文' : langCode}
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
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article 
              className="prose sm:prose-lg prose-blue max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
                prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8
                prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:mb-6 prose-ol:mb-6
                prose-li:text-gray-700 prose-li:mb-2
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
                prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4
                prose-img:rounded-lg prose-img:shadow-lg prose-img:mx-auto"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-base sm:text-xl">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{post.author}</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Part of the Seasalt.ai team, passionate about helping businesses transform their 
                    customer communications with AI-powered automation and intelligent insights.
                  </p>
                </div>
              </div>
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