import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { POSTS_DATA } from './posts.data';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService],
    }).compile();

    service = module.get<PostsService>(PostsService);
  });

  it('findAll returns all posts', () => {
    const posts = service.findAll();
    expect(posts).toHaveLength(POSTS_DATA.length);
  });

  it('findAll filters by tag', () => {
    const posts = service.findAll('react');
    expect(posts.every((p) => p.tags.includes('react'))).toBe(true);
  });

  it('findOne returns the correct post', () => {
    const post = service.findOne(1);
    expect(post.id).toBe(1);
  });

  it('findOne throws NotFoundException for unknown id', () => {
    expect(() => service.findOne(9999)).toThrow(NotFoundException);
  });

  it('findBySlug returns the correct post', () => {
    const post = service.findBySlug('nextjs-14-app-router-na-pratica');
    expect(post.id).toBe(9);
  });

  it('findBySlug throws NotFoundException for unknown slug', () => {
    expect(() => service.findBySlug('slug-inexistente')).toThrow(
      NotFoundException,
    );
  });
});
