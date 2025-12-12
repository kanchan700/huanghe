import { useEffect } from 'react';
import type { Artwork } from '../types';
import './ArtworkModal.css';

interface ArtworkModalProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export function ArtworkModal({ artwork, onClose }: ArtworkModalProps) {
  useEffect(() => {
    if (artwork) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [artwork]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && artwork) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [artwork, onClose]);

  if (!artwork) return null;

  return (
    <div className="artwork-modal-backdrop" onClick={onClose}>
      <div className="artwork-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="artwork-modal-close" onClick={onClose} aria-label="关闭">
          ×
        </button>
        
        <div className="artwork-modal-image-container">
          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            className="artwork-modal-image"
          />
        </div>
        
        <div className="artwork-modal-info">
          <h2 className="artwork-modal-title">{artwork.title}</h2>
          <p className="artwork-modal-artist">{artwork.artist}</p>
          
          {artwork.year && (
            <div className="artwork-modal-meta">
              <span className="artwork-modal-year">创作年份: {artwork.year}</span>
              {artwork.category && (
                <span className="artwork-modal-category">{artwork.category}</span>
              )}
            </div>
          )}
          
          {artwork.description && (
            <p className="artwork-modal-description">{artwork.description}</p>
          )}
          
          {artwork.tags && artwork.tags.length > 0 && (
            <div className="artwork-modal-tags">
              {artwork.tags.map((tag) => (
                <span key={tag} className="artwork-modal-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

