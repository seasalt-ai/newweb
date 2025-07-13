import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types/blog';
import { fetchBlogPosts } from '../utils/blogService';
import { useEffect, useState } from 'react';

const BlogSection = () => {
  const { t, i18n } = useTranslation();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadBlogPosts = async () => {
      setLoading(true);
      try {
        const posts = await fetchBlogPosts(i18n.language);
        setBlogPosts(posts.slice(0, 4)); // Get only the first 4 posts
      } catch (error) {
        console.error('Failed to load blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, [i18n.language]);

  if (loading || blogPosts.length === 0) {
    return null; // Don't show the section if posts are loading or none are available
  }

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);
  
  const categories = [t('blog.categories.all'), t('blog.categories.ai'), t('blog.categories.strategy'), t('blog.categories.integration'), t('blog.categories.knowledge')];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Link
              key={category}
              to="/blog"
              className="px-6 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 bg-white text-gray-700 hover:bg-teal-500 hover:text-white shadow-md"
            >
              {category}
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={featuredPost.thumbnail}
                  alt={featuredPost.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t('blog.featured')}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                    {featuredPost.tags[0]}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-teal-600 transition-colors cursor-pointer">
                  <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h3>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {featuredPost.meta_description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {featuredPost.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{featuredPost.author}</div>
                      <div className="text-sm text-gray-600">{featuredPost.author_title || 'Content Creator'}</div>
                    </div>
                  </div>
                  
                  <Link to={`/blog/${featuredPost.slug}`} className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-semibold group">
                    <span>{t('common.readMore')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* Recent Posts */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('blog.latest')}</h3>
            
            {recentPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="flex space-x-4">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 text-xs text-gray-600 mb-2">
                      <span className="bg-gray-100 px-2 py-1 rounded-full">
                        {post.tags[0]}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h4 className="font-bold text-gray-900 mb-2 hover:text-teal-600 transition-colors line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {post.meta_description}
                    </p>
                    
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
            
            <Link to="/blog" className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors block text-center">
              {t('common.viewAll')}
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">{t('blog.stayUpdated')}</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('blog.newsletterSubtitle')}
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder={t('footer.enterEmail')}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              {t('common.subscribe')}
            </button>
          </div>
          
          <p className="text-sm text-blue-200 mt-4">
            {t('blog.joinProfessionals')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;