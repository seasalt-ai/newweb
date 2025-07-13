import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Clock, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BlogPost } from '../types/blog';
import { fetchBlogPosts } from '../utils/blogService';

const BlogPage = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogPosts = async () => {
      setLoading(true);
      try {
        const posts = await fetchBlogPosts(i18n.language);
        setBlogPosts(posts);
      } catch (error) {
        console.error('Failed to load blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, [i18n.language]);

  const categories = ['All', 'AI & Automation', 'Strategy', 'Integration', 'Knowledge Management', 'Customer Success'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.tags.includes(selectedCategory);
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.meta_description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.tags.includes('Featured'));
  const regularPosts = filteredPosts.filter(post => !post.tags.includes('Featured') || selectedCategory !== 'All' || searchTerm !== '');

  if (loading) {
    return (
      <div className="pt-16 flex justify-center items-center min-h-screen">
        <div className="animate-pulse text-xl text-gray-600">{t('blog.loading', 'Loading blog posts...')}</div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('blog.title', 'SeaChat Blog')}
          </h1>
          <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
            {t('blog.subtitle', 'Insights, strategies, and best practices for modern customer support. Stay ahead with expert knowledge on AI, automation, and customer experience.')}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('blog.searchPlaceholder', 'Search articles, topics, or tags...')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {t(`blog.categories.${category.toLowerCase().replace(/\s+/g, '')}`, category)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === 'All' && !searchTerm && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="relative">
                  <img
                    src={featuredPost.thumbnail}
                    alt={featuredPost.title}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                      {t('blog.featured', 'Featured Article')}
                    </span>
                  </div>
                </div>
                
                <div className="p-12">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
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
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 hover:text-blue-600 transition-colors cursor-pointer">
                    <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {featuredPost.meta_description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {featuredPost.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{featuredPost.author}</div>
                        <div className="text-sm text-gray-600">{featuredPost.author_title || 'Content Creator'}</div>
                      </div>
                    </div>
                    
                    <Link to={`/blog/${featuredPost.slug}`} className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold group">
                      <span>{t('common.readMore', 'Read Article')}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === 'All' ? t('blog.latest', 'Latest Articles') : `${selectedCategory} ${t('blog.articles', 'Articles')}`}
            </h2>
            <div className="text-gray-600">
              {filteredPosts.length} {t('blog.articleCount', 'article(s) found')}
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                >
                  <div className="relative">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.tags[0]}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.meta_description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs flex items-center space-x-1"
                        >
                          <Tag className="w-3 h-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm text-gray-700">{post.author}</span>
                      </div>
                      
                      <Link to={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 group">
                        <span>{t('common.readMore', 'Read More')}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('blog.noArticles', 'No articles found')}</h3>
              <p className="text-gray-600">{t('blog.adjustSearch', 'Try adjusting your search terms or category filter.')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('blog.stayUpdated', 'Stay Updated with SeaChat Insights')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('blog.newsletterSubtitle', 'Get the latest articles, industry insights, and product updates delivered to your inbox.')}
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder={t('footer.enterEmail', 'Enter your email')}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              {t('common.subscribe', 'Subscribe')}
            </button>
          </div>
          
          <p className="text-sm text-blue-200 mt-4">
            {t('blog.joinProfessionals', 'Join 10,000+ support professionals. Unsubscribe anytime.')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;