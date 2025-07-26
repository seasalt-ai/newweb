import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export interface BlogPost {
  slug: string;
  title: string; // Display title (for H1, content display)
  seo_title: string; // SEO title (for <title> tag, search results)
  meta_description: string;
  author: string;
  tags: string[];
  date: string;
  modified_date?: string; // Optional modified date for SEO and content updates
  image_thumbnail: string;
  content: string;
  excerpt?: string;
  language?: string;
  availableLanguages?: string[];
  url?: string; // Hugo URL field for custom paths
  draft?: boolean; // Hugo draft status
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  meta_description: string;
  author: string;
  tags: string[];
  date: string;
  modified_date?: string; // Optional modified date for SEO and content updates
  image_thumbnail: string;
  excerpt?: string;
  language?: string;
  availableLanguages?: string[];
  url?: string; // Hugo URL field for custom paths
  draft?: boolean; // Hugo draft status
}

// Function to extract YouTube video ID from URL
function extractYouTubeId(url: string): string | null {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : null;
}

// Function to process YouTube links and convert to embeds
function processYouTubeLinks(content: string): string {
  const youtubeRegex = /!\[([^\]]*)]\(https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([^\s\)]+)\)/g;
  
  return content.replace(youtubeRegex, (match, alt, _, __, videoId) => {
    const cleanVideoId = extractYouTubeId(`https://youtube.com/watch?v=${videoId}`);
    if (cleanVideoId) {
      return `<div class="youtube-embed my-8">
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/${cleanVideoId}" 
          title="${alt || 'YouTube video'}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          class="rounded-lg shadow-lg"
        ></iframe>
      </div>`;
    }
    return match;
  });
}

// Function to process multimedia links (images, videos, audio)
function processMultimediaLinks(content: string): string {
  // Process video files
  const videoRegex = /!\[([^\]]*)]\(([^\)]+\.(mp4|webm|ogg))\)/g;
  content = content.replace(videoRegex, (match, alt, src) => {
    return `<div class="video-embed my-8">
      <video 
        controls 
        width="100%" 
        class="rounded-lg shadow-lg"
        preload="metadata"
      >
        <source src="${src}" type="video/${src.split('.').pop()}">
        Your browser does not support the video tag.
      </video>
      ${alt ? `<p class="text-sm text-gray-600 mt-2 text-center italic">${alt}</p>` : ''}
    </div>`;
  });

  // Process audio files
  const audioRegex = /!\[([^\]]*)]\(([^\)]+\.(mp3|wav|ogg|m4a))\)/g;
  content = content.replace(audioRegex, (match, alt, src) => {
    return `<div class="audio-embed my-6">
      <audio 
        controls 
        class="w-full"
        preload="metadata"
      >
        <source src="${src}" type="audio/${src.split('.').pop()}">
        Your browser does not support the audio tag.
      </audio>
      ${alt ? `<p class="text-sm text-gray-600 mt-2 text-center italic">${alt}</p>` : ''}
    </div>`;
  });

  return content;
}

// Function to process markdown content with enhanced features
export async function processMarkdown(content: string): Promise<string> {
  // First, process custom multimedia elements
  let processedContent = processYouTubeLinks(content);
  processedContent = processMultimediaLinks(processedContent);
  
  // Then process with remark
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm) // GitHub Flavored Markdown support
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug) // Add IDs to headings
    .use(rehypeAutolinkHeadings, {
      behavior: 'wrap',
      properties: {
        className: ['heading-link']
      }
    }) // Add links to headings
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(processedContent);
  
  return result.toString();
}

// Function to normalize image paths to ensure they start with /
function normalizeImagePath(imagePath: string): string {
  if (!imagePath || imagePath.startsWith('http') || imagePath === '/seasalt-ai-icon.png') {
    return imagePath;
  }
  
  // Ensure the path starts with a leading slash
  if (!imagePath.startsWith('/')) {
    return '/' + imagePath;
  }
  
  return imagePath;
}

// Function to extract clean URL path from Hugo URL field
function extractUrlPath(url: string | undefined): string | null {
  if (!url) return null;
  
  // Remove leading/trailing slashes and normalize
  let cleanUrl = url.trim();
  if (cleanUrl.startsWith('/')) {
    cleanUrl = cleanUrl.substring(1);
  }
  if (cleanUrl.endsWith('/')) {
    cleanUrl = cleanUrl.substring(0, cleanUrl.length - 1);
  }
  
  // Remove /blog/ prefix if present since we'll add it back in routing
  if (cleanUrl.startsWith('blog/')) {
    cleanUrl = cleanUrl.substring(5);
  }
  
  return cleanUrl || null;
}

// Function to get the URL path for a blog post (custom URL or slug)
export function getBlogPostUrlPath(post: { slug: string; url?: string }): string {
  const customPath = extractUrlPath(post.url);
  return customPath || post.slug;
}

// Function to normalize date format (handles both string dates and Date objects)
function normalizeDateFormat(date: any): string {
  if (!date) return new Date().toISOString().split('T')[0];
  
  // If it's already a string in YYYY-MM-DD format, return it
  if (typeof date === 'string' && /^\d{4}-\d{2}-\d{2}/.test(date)) {
    return date.split('T')[0]; // Take only the date part if it includes time
  }
  
  // Try to parse as Date and convert to YYYY-MM-DD
  try {
    const parsedDate = new Date(date);
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate.toISOString().split('T')[0];
    }
  } catch (error) {
    console.warn('Could not parse date:', date);
  }
  
  // Fallback to current date
  return new Date().toISOString().split('T')[0];
}

// Function to parse a markdown file with Hugo YAML support
export async function parseMarkdownFile(content: string, slug: string, language: string = 'en'): Promise<BlogPost> {
  const { data, content: markdownContent } = matter(content);
  
  // Skip draft posts in production
  if (data.draft === true && process.env.NODE_ENV === 'production') {
    throw new Error('Draft post should not be rendered in production');
  }
  
  // Process the markdown content to HTML
  const htmlContent = await processMarkdown(markdownContent);
  
  // Create excerpt from content (first 150 characters)
  const excerpt = markdownContent.replace(/[#*`]/g, '').substring(0, 150) + '...';
  
  // Get available languages for this post
  const availableLanguages = await getAvailableLanguages(slug);
  
  return {
    slug,
    // Display title (for H1, content display) - title takes precedence for display
    title: data.title || data.metatitle || 'Untitled',
    // SEO title (for <title> tag, search results) - metatitle takes precedence for SEO
    seo_title: data.metatitle || data.title || 'Untitled',
    // Hugo compatibility: map 'description' to 'meta_description'
    meta_description: data.meta_description || data.description || '',
    author: data.author || 'Seasalt.ai Team',
    tags: data.tags || [],
    // Normalize date format to handle Hugo's date format
    date: normalizeDateFormat(data.date),
    // Handle modified_date field for SEO and content updates
    modified_date: data.modified_date ? normalizeDateFormat(data.modified_date) : undefined,
    // Hugo compatibility: map 'image' to 'image_thumbnail'
    // Normalize image paths to ensure they start with /
    image_thumbnail: normalizeImagePath(data.image_thumbnail || data.image || '/seasalt-ai-icon.png'),
    content: htmlContent,
    excerpt,
    language,
    availableLanguages,
    // Hugo fields
    url: data.url || data.canonicalURL,
    draft: data.draft || false
  };
}

// Function to get blog post metadata only with Hugo YAML support
export async function parseMarkdownMeta(content: string, slug: string, language: string = 'en'): Promise<BlogPostMeta> {
  const { data, content: markdownContent } = matter(content);
  
  // Skip draft posts in production
  if (data.draft === true && process.env.NODE_ENV === 'production') {
    throw new Error('Draft post should not be rendered in production');
  }
  
  // Create excerpt from content (first 150 characters)
  const excerpt = markdownContent.replace(/[#*`]/g, '').substring(0, 150) + '...';
  
  // Get available languages for this post
  const availableLanguages = await getAvailableLanguages(slug);
  
  return {
    slug,
    title: data.title || data.metatitle || 'Untitled',
    // Hugo compatibility: map 'description' to 'meta_description'
    meta_description: data.meta_description || data.description || '',
    author: data.author || 'Seasalt.ai Team',
    tags: data.tags || [],
    // Normalize date format to handle Hugo's date format
    date: normalizeDateFormat(data.date),
    // Handle modified_date field for SEO and content updates
    modified_date: data.modified_date ? normalizeDateFormat(data.modified_date) : undefined,
    // Hugo compatibility: map 'image' to 'image_thumbnail'
    // Normalize image paths to ensure they start with /
    image_thumbnail: normalizeImagePath(data.image_thumbnail || data.image || '/seasalt-ai-icon.png'),
    excerpt,
    language,
    availableLanguages,
    // Hugo fields
    url: data.url || data.canonicalURL,
    draft: data.draft || false
  };
}

// Function to check which languages are available for a specific post
export async function getAvailableLanguages(slug: string): Promise<string[]> {
  // Import supported languages from constants
  const { SUPPORTED_LANGUAGES } = await import('../constants/languages');
  const availableLanguages: string[] = [];
  
  for (const lang of SUPPORTED_LANGUAGES) {
    try {
      const path = `/content/blog/${lang}/${slug}.md`;
      const modules = import.meta.glob('/content/blog/**/*.md', { as: 'raw' });
      
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
  const blogModules = import.meta.glob('/content/blog/**/*.md', { eager: true, as: 'raw' });
  const posts: BlogPostMeta[] = [];
  
  for (const path in blogModules) {
    // Only include posts for the specified language
    if (path.startsWith(`/content/blog/${language}/`)) {
      const content = blogModules[path];
      const slug = path.replace(`/content/blog/${language}/`, '').replace('.md', '');
      const post = await parseMarkdownMeta(content, slug, language);
      posts.push(post);
    }
  }
  
  // Filter out draft posts in production and sort by date (newest first)
  const filteredPosts = posts.filter(post => {
    if (process.env.NODE_ENV === 'production' && post.draft === true) {
      return false;
    }
    return true;
  });
  
  return filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Function to get all blog slugs (useful for sitemap generation)
export async function getAllBlogSlugs(): Promise<{slug: string, language: string}[]> {
  const blogModules = import.meta.glob('/content/blog/**/*.md', { eager: true, as: 'raw' });
  const slugs: {slug: string, language: string}[] = [];
  
  for (const path in blogModules) {
    // Extract language and slug from path
    // Example: /content/blog/en/blog-post.md -> { language: 'en', slug: 'blog-post' }
    const pathParts = path.split('/');
    if (pathParts.length >= 5) {
      const language = pathParts[3];
      const slug = pathParts[4].replace('.md', '');
      slugs.push({ slug, language });
    }
  }
  
  return slugs;
}

// Function to load a specific blog post with Hugo YAML support
export async function loadBlogPost(slug: string, language: string = 'en'): Promise<BlogPost | null> {
  try {
    const blogModules = import.meta.glob('/content/blog/**/*.md', { as: 'raw' });
    const path = `/content/blog/${language}/${slug}.md`;
    
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
    const post = await parseMarkdownFile(content, slug, language);
    
    // Skip draft posts in production
    if (process.env.NODE_ENV === 'production' && post.draft === true) {
      return null;
    }
    
    return post;
  } catch (error) {
    console.error('Error loading blog post:', error);
    return null;
  }
}

// Function to load a blog post by its URL path (custom URL or slug)
export async function loadBlogPostByUrlPath(urlPath: string, language: string = 'en'): Promise<BlogPost | null> {
  try {
    // First, try to load it as a direct slug
    let post = await loadBlogPost(urlPath, language);
    if (post) {
      return post;
    }
    
    // If not found, search through all blog posts to find one with matching custom URL
    const blogModules = import.meta.glob('/content/blog/**/*.md', { eager: true, as: 'raw' });
    
    for (const path in blogModules) {
      // Only check posts for the specified language
      if (path.startsWith(`/content/blog/${language}/`)) {
        const content = blogModules[path];
        const slug = path.replace(`/content/blog/${language}/`, '').replace('.md', '');
        const postMeta = await parseMarkdownMeta(content, slug, language);
        
        // Check if this post's custom URL matches the requested path
        const postUrlPath = getBlogPostUrlPath(postMeta);
        if (postUrlPath === urlPath) {
          // Load the full post
          return await loadBlogPost(slug, language);
        }
      }
    }
    
    // If still not found and not already trying English, try English fallback
    if (language !== 'en') {
      console.log(`Post with URL path ${urlPath} not found in ${language}, trying English fallback`);
      return loadBlogPostByUrlPath(urlPath, 'en');
    }
    
    return null;
  } catch (error) {
    console.error('Error loading blog post by URL path:', error);
    return null;
  }
}
