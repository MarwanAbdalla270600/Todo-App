export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  instructor: string;
  level: string;
  price: number;
  tags: string[];
  duration: number;
  lessons: number;
  imageUrl?: string;
}
