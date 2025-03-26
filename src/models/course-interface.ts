export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  level: string;
  price: number;
  tags: string[];
  imageUrl?: string;
}
