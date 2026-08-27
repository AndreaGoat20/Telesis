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

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  order: number;
  bio: string;
};
