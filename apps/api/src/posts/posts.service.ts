import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from './posts.entity';
import { POSTS_DATA } from './posts.data';

@Injectable()
export class PostsService {
  private readonly posts: Post[] = POSTS_DATA;

  findAll(tag?: string): Post[] {
    if (tag) {
      return this.posts.filter((post) => post.tags.includes(tag));
    }
    return this.posts;
  }

  findOne(id: number): Post {
    const post = this.posts.find((p) => p.id === id);
    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
    return post;
  }

  findBySlug(slug: string): Post {
    const post = this.posts.find((p) => p.slug === slug);
    if (!post) {
      throw new NotFoundException(`Post with slug "${slug}" not found`);
    }
    return post;
  }
}
