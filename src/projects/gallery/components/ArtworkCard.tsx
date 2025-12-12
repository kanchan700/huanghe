import type { Artwork } from '../types';
import './ArtworkCard.css';

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: () => void;
}

export function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
  return (
    <div className="artwork-card" onClick={onClick}>
      <div className="artwork-card-image-wrapper">
        <img
          src={artwork.thumbnailUrl || artwork.imageUrl}
          alt={artwork.title}
          className="artwork-card-image"
          loading="lazy"
        />
      </div>

      <div className="artwork-card-info">
        <h3 className="artwork-card-title">{artwork.title}</h3>
        <p className="artwork-card-artist">{artwork.artist}</p>
        <div className="artwork-card-meta">
          {artwork.year && (
            <span className="artwork-card-year">{artwork.year}</span>
          )}
        </div>
      </div>
    </div>
  );
}

