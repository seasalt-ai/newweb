import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');

  // English-only feed: matches the /en/ URL prefix below and keeps
  // translated duplicates out of a single mixed feed.
  const sortedPosts = blog
    .filter(post => !post.data.draft && post.id.startsWith('en/'))
    .sort((a, b) => new Date(b.data.publishDate) - new Date(a.data.publishDate));

  return rss({
    title: 'SeaSalt.ai Blog',
    description: 'Latest articles and insights from SeaSalt.ai - AI-Powered Contact Center Solutions',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      // Mirror getStaticPaths in [lang]/blog/[...slug].astro: derive the slug
      // from entry.id (slug includes the language dir and Astro's post.slug
      // lowercases filenames, which 404s on case-sensitive GH Pages).
      link: `/en/blog/${post.id.split('/')[1].replace('.md', '')}/`,
      author: post.data.author,
      categories: post.data.tags || [],
    })),
    customData: `<language>en-us</language>`,
  });
}
