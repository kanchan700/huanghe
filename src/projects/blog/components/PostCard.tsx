import type { Post } from '../types';
import './PostCard.css';

interface PostCardProps {
  post: Post;
  onClick: () => void;
}

export function PostCard({ post, onClick }: PostCardProps) {
  return (
    <article className="post-card" onClick={onClick}>
      <div className="post-card-header">
        <h2 className="post-card-title">{post.title}</h2>
        {post.isLocked && <span className="post-lock-icon">🔒</span>}
        {post.isDiary && <span className="post-diary-badge">小日记</span>}
      </div>
      <p className="post-card-excerpt">{post.excerpt}</p>
      <div className="post-card-footer">
        <span className="post-card-date">{post.date}</span>
        <span className="post-card-category">{post.category}</span>
        <span className="post-card-author">{post.author}</span>
      </div>
    </article>
  );
}
