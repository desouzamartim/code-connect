export interface Author {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

export interface Post {
  id: number;
  title: string;
  description: string;
  slug: string;
  coverImage: string;
  author: Author;
  likes: number;
  comments: number;
  tags: string[];
  createdAt: string;
}
