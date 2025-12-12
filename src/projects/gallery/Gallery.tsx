import { useMemo, useState } from 'react';
import type { Artwork } from './types';
import { ArtworkCard } from './components/ArtworkCard';
import { ArtworkModal } from './components/ArtworkModal';
import { mockArtworks } from './data/mockArtworks';
import './Gallery.css';

export function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArtworks = useMemo(() => {
    return mockArtworks.filter((artwork) => {
      const query = searchQuery.trim().toLowerCase();
      if (!query) return true;
      return (
        artwork.title.toLowerCase().includes(query) ||
        artwork.artist.toLowerCase().includes(query) ||
        artwork.description.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  return (
    <div className="lt2-shell">
      <header className="lt2-hero">
        <div className="lt2-search">
          <input
            type="text"
            placeholder="Search artworks"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      <main className="lt2-content">
        <section className="lt2-section">
          <div className="lt2-grid">
            {filteredArtworks.map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                onClick={() => setSelectedArtwork(artwork)}
              />
            ))}
          </div>
        </section>

        {filteredArtworks.length === 0 && (
          <div className="gallery-empty">
            <p>未找到匹配的画作</p>
          </div>
        )}
      </main>

      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </div>
  );
}

