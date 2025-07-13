export interface BlogPost {
  slug: string;
  title: string;
  meta_description: string;
  date: string;
  author: string;
  author_title?: string;
  author_avatar?: string;
  tags: string[];
  thumbnail: string;
  content: string;
  readTime?: string;
}

interface BlogCategory {
  id: string;
  name: string;
}