import { useMemo, useState } from 'react';
import type { Post, Category } from './types';
import { PostCard } from './components/PostCard';
import { PostDetail } from './components/PostDetail';
import { mockPosts } from './data/mockPosts';
import './Blog.css';

const categories: Category[] = ['哲文', '念与惗', '丢丢丢', '山野村夫', '小日记', '无铭集', '问道四海', '给女友的信', '金融知识', '拍照片', '做梦'];

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | '全部'>('全部');

  const filteredPosts = useMemo(() => {
    return mockPosts.filter((post) => {
      const matchesSearch = searchQuery.trim() === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === '全部' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="blog-shell">
      <header className="blog-hero">
        <h1 className="blog-title">汝者非鱼</h1>
        <p className="blog-subtitle">听从己心，无问西东</p>
        <div className="blog-search">
          <input
            type="text"
            placeholder="搜索文章..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <nav className="blog-categories">
          <button
            className={`category-btn ${selectedCategory === '全部' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('全部')}
          >
            全部
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>
      </header>

      <main className="blog-content">
        <section className="blog-section">
          <div className="blog-posts">
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onClick={() => setSelectedPost(post)}
              />
            ))}
          </div>
        </section>

        {filteredPosts.length === 0 && (
          <div className="blog-empty">
            <p>未找到匹配的文章</p>
          </div>
        )}
      </main>

      <PostDetail
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </div>
  );
}
