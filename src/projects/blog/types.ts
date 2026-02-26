// 博客相关类型定义

export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  category: Category;
  date: string;
  tags: string[];
  isLocked?: boolean; // 是否需要密码访问
  isDiary?: boolean; // 是否为小日记
}

export type Category = '哲文' | '念与惗' | '丢丢丢' | '山野村夫' | '小日记' | '无铭集' | '问道四海' | '给女友的信' | '金融知识' | '拍照片' | '做梦';

export interface BlogConfig {
  title: string;
  subtitle?: string;
  description?: string;
  posts: Post[];
}
