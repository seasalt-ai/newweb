import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import i18n from 'i18next';

export interface BlogPost {
  slug: string;
  title: string;
  meta_description: string;
  author: string;
  tags: string[];
  date: string;
  image_thumbnail: string;
  content: string;
  excerpt?: string;
  language?: string;
  availableLanguages?: string[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  meta_description: string;
  author: string;
  tags: string[];
  date: string;
  image_thumbnail: string;
  excerpt?: string;
  language?: string;
  availableLanguages?: string[];
}

// Function to process markdown content
export async function processMarkdown(content: string): Promise<string> {
  const result = await remark()
    .use(remarkHtml, { sanitize: false })
    .process(content);
  
  return result.toString();
}

// Function to parse a markdown file
export async function parseMarkdownFile(content: string, slug: string, language: string = 'en'): Promise<BlogPost> {
  const { data, content: markdownContent } = matter(content);
  
  // Process the markdown content to HTML
  const htmlContent = await processMarkdown(markdownContent);
  
  // Create excerpt from content (first 150 characters)
  const excerpt = markdownContent.replace(/[#*`]/g, '').substring(0, 150) + '...';
  
  // Get available languages for this post
  const availableLanguages = await getAvailableLanguages(slug);
  
  return {
    slug,
    title: data.title || 'Untitled',
    meta_description: data.meta_description || '',
    author: data.author || 'Seasalt.ai Team',
    tags: data.tags || [],
    date: data.date || new Date().toISOString().split('T')[0],
    image_thumbnail: data.image_thumbnail || '/seasalt-ai-icon.png',
    content: htmlContent,
    excerpt,
    language,
    availableLanguages
  };
}

// Function to get blog post metadata only
export async function parseMarkdownMeta(content: string, slug: string, language: string = 'en'): Promise<BlogPostMeta> {
  const { data, content: markdownContent } = matter(content);
  
  // Create excerpt from content (first 150 characters)
  const excerpt = markdownContent.replace(/[#*`]/g, '').substring(0, 150) + '...';
  
  // Get available languages for this post
  const availableLanguages = await getAvailableLanguages(slug);
  
  return {
    slug,
    title: data.title || 'Untitled',
    meta_description: data.meta_description || '',
    author: data.author || 'Seasalt.ai Team',
    tags: data.tags || [],
    date: data.date || new Date().toISOString().split('T')[0],
    image_thumbnail: data.image_thumbnail || '/seasalt-ai-icon.png',
    excerpt,
    language,
    availableLanguages
  };
}

// Function to check which languages are available for a specific post
export async function getAvailableLanguages(slug: string): Promise<string[]> {
  const languages = ['en', 'es', 'zh-TW']; // Supported languages
  const availableLanguages: string[] = [];
  
  for (const lang of languages) {
    try {
      const path = `/content/${lang}/${slug}.md`;
      const modules = import.meta.glob('/content/**/*.md', { as: 'raw' });
      
      if (path in modules) {
        availableLanguages.push(lang);
      }
    } catch (error) {
      console.error(`Error checking language ${lang} for slug ${slug}:`, error);
    }
  }
  
  return availableLanguages;
}

// Function to dynamically load all blog posts
export async function loadAllBlogPosts(language: string = 'en'): Promise<BlogPostMeta[]> {
  const blogModules = import.meta.glob('/content/**/*.md', { eager: true, as: 'raw' });
  const posts: BlogPostMeta[] = [];
  
  for (const path in blogModules) {
    // Only include posts for the specified language
    if (path.startsWith(`/content/${language}/`)) {
      const content = blogModules[path];
      const slug = path.replace(`/content/${language}/`, '').replace('.md', '');
      const post = await parseMarkdownMeta(content, slug, language);
      posts.push(post);
    }
  }
  
  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Function to get all blog slugs (useful for sitemap generation)
export async function getAllBlogSlugs(): Promise<{slug: string, language: string}[]> {
  const blogModules = import.meta.glob('/content/**/*.md', { eager: true, as: 'raw' });
  const slugs: {slug: string, language: string}[] = [];
  
  for (const path in blogModules) {
    // Extract language and slug from path
    // Example: /content/en/blog-post.md -> { language: 'en', slug: 'blog-post' }
    const pathParts = path.split('/');
    if (pathParts.length >= 4) {
      const language = pathParts[2];
      const slug = pathParts[3].replace('.md', '');
      slugs.push({ slug, language });
    }
  }
  
  return slugs;
}

// Function to load a specific blog post
export async function loadBlogPost(slug: string, language: string = 'en'): Promise<BlogPost | null> {
  try {
    const blogModules = import.meta.glob('/content/**/*.md', { as: 'raw' });
    const path = `/content/${language}/${slug}.md`;
    
    if (!(path in blogModules)) {
      // If the post doesn't exist in the requested language, try to fall back to English
      if (language !== 'en') {
        console.log(`Post ${slug} not found in ${language}, trying English fallback`);
        return loadBlogPost(slug, 'en');
      } else {
        return null;
      }
    }
    
    const content = await blogModules[path]();
    return await parseMarkdownFile(content, slug, language);
  } catch (error) {
    console.error('Error loading blog post:', error);
    return null;
  }
}