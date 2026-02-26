import type { Post } from '../types';
import './PostDetail.css';

interface PostDetailProps {
  post: Post | null;
  onClose: () => void;
}

export function PostDetail({ post, onClose }: PostDetailProps) {
  if (!post) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="post-detail-overlay" onClick={handleBackdropClick}>
      <div className="post-detail-modal">
        <button className="post-detail-close" onClick={onClose}>
          ×
        </button>
        <article className="post-detail-content">
          <header className="post-detail-header">
            <h1 className="post-detail-title">{post.title}</h1>
            <div className="post-detail-meta">
              <span className="post-detail-date">{post.date}</span>
              <span className="post-detail-category">{post.category}</span>
              <span className="post-detail-author">{post.author}</span>
            </div>
            {post.tags.length > 0 && (
              <div className="post-detail-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="post-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>
          <div className="post-detail-body">
            {post.isLocked ? (
              <div className="post-locked">
                <p>请输入密码访问</p>
                <input
                  type="password"
                  placeholder="密码"
                  className="post-password-input"
                />
              </div>
            ) : (
              <div
                className="post-content"
                dangerouslySetInnerHTML={{
                  __html: post.content.replace(/\n/g, '<br />'),
                }}
              />
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
