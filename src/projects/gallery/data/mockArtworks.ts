import type { Artwork } from '../types';

// 世界名画数据 - 使用 Wikimedia Commons 等公共领域的真实画作图片
export const mockArtworks: Artwork[] = [
  {
    id: '1',
    title: '星夜',
    artist: '文森特·梵高',
    description: '一幅充满动感的夜空画作，展现了艺术家对自然和宇宙的独特理解。',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/400px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
    year: 1889,
    category: '后印象派',
    tags: ['夜空', '风景', '经典']
  },
  {
    id: '2',
    title: '睡莲',
    artist: '克劳德·莫奈',
    description: '宁静的水面倒映着天空和云朵，展现了光影变化的微妙之美。',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/9/9e/WLA_metmuseum_Water_Lilies_by_Claude_Monet.jpg',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/WLA_metmuseum_Water_Lilies_by_Claude_Monet.jpg/640px-WLA_metmuseum_Water_Lilies_by_Claude_Monet.jpg',
    year: 1919,
    category: '印象派',
    tags: ['水景', '自然', '光影']
  },
  {
    id: '3',
    title: '记忆的永恒',
    artist: '萨尔瓦多·达利',
    description: '超现实主义杰作，展现了时间与记忆的哲学思考。',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/The_Persistence_of_Memory.jpg/400px-The_Persistence_of_Memory.jpg',
    year: 1931,
    category: '超现实主义',
    tags: ['超现实', '哲学', '时间']
  },
  {
    id: '4',
    title: '向日葵',
    artist: '文森特·梵高',
    description: '明亮的黄色花朵在阳光下绽放，传递着生命的力量与希望。',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/1280px-Vincent_Willem_van_Gogh_127.jpg',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/400px-Vincent_Willem_van_Gogh_127.jpg',
    year: 1888,
    category: '后印象派',
    tags: ['花卉', '色彩', '生命']
  },
  {
    id: '5',
    title: '呐喊',
    artist: '爱德华·蒙克',
    description: '表现主义经典，展现了人类内心的焦虑与不安。',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/1280px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/400px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg',
    year: 1893,
    category: '表现主义',
    tags: ['情感', '表现', '经典']
  },
  {
    id: '6',
    title: '日出·印象',
    artist: '克劳德·莫奈',
    description: '印象派的开山之作，捕捉了晨光中港口的瞬间美景。',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/1280px-Monet_-_Impression%2C_Sunrise.jpg',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/400px-Monet_-_Impression%2C_Sunrise.jpg',
    year: 1872,
    category: '印象派',
    tags: ['日出', '港口', '印象派']
  },
  {
    id: '7',
    title: '蒙娜丽莎',
    artist: '列奥纳多·达·芬奇',
    description: '文艺复兴时期的杰作，神秘的微笑至今仍让人着迷。',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1280px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/400px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    year: 1503,
    category: '文艺复兴',
    tags: ['肖像', '经典', '神秘']
  },
  {
    id: '8',
    title: '夜巡',
    artist: '伦勃朗',
    description: '巴洛克时期的杰作，展现了精湛的光影技巧和构图艺术。',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/640px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg',
    year: 1642,
    category: '巴洛克',
    tags: ['群像', '光影', '历史']
  }
];

