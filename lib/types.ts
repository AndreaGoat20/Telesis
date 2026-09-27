export type Article = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  author: string;
  category: string;
  cover: string;
  readingTime: number;
  excerpt?: string;
  content: string;
};
