import { BlogPost } from '../types/blog';
import { parseMarkdownPost } from './markdown';

// Cache for blog posts to avoid unnecessary fetches
const blogPostsCache: Record<string, BlogPost[]> = {};
const singlePostCache: Record<string, BlogPost> = {};

// Pre-load all markdown files using Vite's import.meta.glob
const markdownFiles = import.meta.glob('../content/blog/**/*.md', { as: 'raw', eager: true });

// Fetch all blog posts for a specific language
export async function fetchBlogPosts(language: string = 'en'): Promise<BlogPost[]> {
  // Check if we have cached posts for this language
  if (blogPostsCache[language]) {
    return blogPostsCache[language];
  }

  try {
    // In a real application, this would be an API call to fetch blog posts
    // For this example, we'll simulate fetching from our content directory
    const posts: BlogPost[] = [];
    
    // This is a placeholder for the actual implementation
    // In a real app, you would fetch the list of blog posts from your API or CMS
    const slugs = ['ai-customer-support-guide-2024', 'human-agents-foundation', 'omnichannel-support', 'knowledge-base-optimization', 'customer-loyalty-personalization', 'hybrid-support-roi'];
    
    for (const slug of slugs) {
      try {
        const post = await fetchBlogPost(slug, language);
        if (post) {
          posts.push(post);
        }
      } catch (error) {
        console.error(`Failed to fetch blog post ${slug}:`, error);
      }
    }
    
    // Sort posts by date (newest first)
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // Cache the results
    blogPostsCache[language] = posts;
    
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Fetch a single blog post by slug
export async function fetchBlogPost(slug: string, language: string = 'en'): Promise<BlogPost | null> {
  const cacheKey = `${language}:${slug}`;
  
  // Check if we have this post cached
  if (singlePostCache[cacheKey]) {
    return singlePostCache[cacheKey];
  }
  
  try {
    // Construct the file path for the requested language
    const filePath = `../content/blog/${language}/${slug}.md`;
    
    // Get the markdown content from the pre-loaded files
    let markdownContent: string | undefined = markdownFiles[filePath];
    
    // If the post doesn't exist in the requested language, fall back to English
    if (!markdownContent && language !== 'en') {
      const fallbackPath = `../content/blog/en/${slug}.md`;
      markdownContent = markdownFiles[fallbackPath];
    }
    
    // If we still don't have content, throw an error
    if (!markdownContent) {
      throw new Error(`Blog post not found: ${slug} (language: ${language})`);
    }
    
    // Parse the markdown content into a BlogPost object
    const post = parseMarkdownPost(slug, markdownContent, language);
    
    // Cache the result
    singlePostCache[cacheKey] = post;
    
    return post;
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error);
    return null;
  }
}

// Fetch related posts based on tags
export async function fetchRelatedPosts(tags: string[], currentSlug: string, language: string = 'en'): Promise<BlogPost[]> {
  try {
    // Get all posts
    const allPosts = await fetchBlogPosts(language);
    
    // Filter out the current post and find posts with matching tags
    const related = allPosts
      .filter(post => post.slug !== currentSlug)
      .filter(post => post.tags.some(tag => tags.includes(tag)))
      // Sort by number of matching tags (most matches first)
      .sort((a, b) => {
        const aMatches = a.tags.filter(tag => tags.includes(tag)).length;
        const bMatches = b.tags.filter(tag => tags.includes(tag)).length;
        return bMatches - aMatches;
      })
      .slice(0, 3); // Limit to 3 related posts
    
    return related;
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}