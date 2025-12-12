// 画廊相关类型定义

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  description: string;
  imageUrl: string;
  thumbnailUrl?: string;
  year?: number;
  category?: string;
  tags?: string[];
}

export interface GalleryConfig {
  title: string;
  description?: string;
  artworks: Artwork[];
}

