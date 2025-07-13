import { marked } from 'marked';
import { BlogPost } from '../types/blog';

// Configure marked options
// @ts-ignore
marked.setOptions({
  gfm: true,
  breaks: true
});

// Custom renderer to handle code blocks with syntax highlighting
const renderer = new marked.Renderer();
renderer.code = function(token: any) {
  return `<pre><code class="language-${token.lang || 'text'}">${token.text}</code></pre>`;
};

marked.use({ renderer });

// Parse YAML frontmatter from markdown
function parseFrontmatter(markdown: string): { frontmatter: Record<string, any>; content: string } {
  const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(markdown);

  if (!match) {
    return {
      frontmatter: {},
      content: markdown
    };
  }

  const frontmatterBlock = match[1];
  const content = markdown.replace(frontmatterRegex, '').trim();
  const frontmatter: Record<string, any> = {};

  // Parse the frontmatter block
  frontmatterBlock.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      
      // Handle arrays (comma-separated values)
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(item => item.trim()) as any;
      } else if (value.startsWith('"') && value.endsWith('"')) {
        // Handle quoted strings
        value = value.slice(1, -1);
      }
      
      frontmatter[key] = value;
    }
  });

  return { frontmatter, content };
}

// Convert markdown to HTML
function markdownToHtml(markdown: string): string {
  return marked(markdown) as string;
}

// Parse a markdown file into a BlogPost object
export function parseMarkdownPost(slug: string, markdown: string): BlogPost {
  const { frontmatter, content } = parseFrontmatter(markdown);
  
  // Calculate read time (rough estimate: 200 words per minute)
  const wordCount = content.trim().split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);
  
  return {
    slug,
    title: frontmatter.title || 'Untitled',
    meta_description: frontmatter.meta_description || '',
    date: frontmatter.date || new Date().toISOString().split('T')[0],
    author: frontmatter.author || 'Unknown',
    author_title: frontmatter.author_title,
    author_avatar: frontmatter.author_avatar,
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
    thumbnail: frontmatter.thumbnail || '',
    content: markdownToHtml(content),
    readTime: `${readTime} min read`
  };
}