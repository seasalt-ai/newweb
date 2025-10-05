import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  
  const sortedPosts = blog
    .filter(post => !post.data.draft)
    .sort((a, b) => new Date(b.data.publishDate) - new Date(a.data.publishDate));

  return rss({
    title: 'SeaSalt.ai Blog',
    description: 'Latest articles and insights from SeaSalt.ai - AI-Powered Contact Center Solutions',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.slug}/`,
      author: post.data.author,
      categories: post.data.tags || [],
    })),
    customData: `<language>en-us</language>`,
  });
}
