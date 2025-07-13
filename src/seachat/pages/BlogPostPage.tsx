import React, { useEffect, useState } from 'react';
import { Calendar, User, ArrowLeft, Share2, Clock, Tag } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BlogPost } from '../types/blog';
import { fetchBlogPost, fetchRelatedPosts } from '../utils/blogService';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogPost = async () => {
      setLoading(true);
      try {
        if (!slug) return;
        
        const blogPost = await fetchBlogPost(slug, i18n.language);
        if (!blogPost) {
          navigate('/blog');
          return;
        }
        
        setPost(blogPost);
        
        // Fetch related posts based on tags
        if (blogPost.tags && blogPost.tags.length > 0) {
          const related = await fetchRelatedPosts(blogPost.tags, blogPost.slug, i18n.language);
          setRelatedPosts(related);
        }
      } catch (error) {
        console.error('Failed to load blog post:', error);
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    };

    loadBlogPost();
  }, [slug, i18n.language, navigate]);

  if (loading || !post) {
    return (
      <div className="pt-16 flex justify-center items-center min-h-screen">
        <div className="animate-pulse text-xl text-gray-600">{t('blog.loadingPost', 'Loading article...')}</div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('blog.backToBlog', 'Back to Blog')}
          </Link>
          
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              {post.tags && post.tags.length > 0 && (
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                  {post.tags[0]}
                </span>
              )}
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.meta_description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{post.author}</div>
                  <div className="text-sm text-gray-600">{post.author_title || 'Content Creator'}</div>
                </div>
              </div>
              
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>{t('blog.share', 'Share')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Hero Image */}
          <div className="mb-12">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div 
            className="text-gray-800 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('blog.tags', 'Tags')}</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Link 
                    key={index} 
                    to={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center space-x-1 transition-colors"
                  >
                    <Tag className="w-3 h-3" />
                    <span>{tag}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h3>
                <p className="text-gray-600 mb-4">
                  {post.author_title || 'Content Creator at SeaChat'}
                </p>
                <div className="flex space-x-4 text-sm">
                  <a href="#" className="text-blue-600 hover:text-blue-700">{t('blog.followLinkedIn', 'Follow on LinkedIn')}</a>
                  <Link to="/blog" className="text-blue-600 hover:text-blue-700">{t('blog.moreArticles', 'More Articles')}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('blog.relatedArticles', 'Related Articles')}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.slice(0, 2).map((relatedPost) => (
                <Link to={`/blog/${relatedPost.slug}`} key={relatedPost.slug} className="group">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src={relatedPost.thumbnail}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-sm mt-2">{relatedPost.readTime}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostPage;