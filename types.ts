

export enum Country {
  CN = 'China',
  JP = 'Japan',
  KR = 'Korea',
  RU = 'Russia',
  MN = 'Mongolia',
  OTHER = 'Other'
}

export type LanguageCode = 'en' | 'ko' | 'ja' | 'zh' | 'ru' | 'mn';

export interface Game {
  id: string;
  title: string;
  developer: string;
  country: Country;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: 'GameJam' | 'Conference' | 'Meetup';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export type BlogCategory = '联盟动态' | '行业深度' | '成员故事' | '开发技术';

// Helper type for localized content
export type LocalizedString = string | Record<LanguageCode, string>;

export interface BlogPost {
  id: string;
  title: LocalizedString; // Changed to support multi-language
  author: string;
  date: string;
  category: BlogCategory;
  summary: LocalizedString; // Changed to support multi-language
  imageUrl: string;
}

export interface RegionInfo {
  id: string;
  name: string;
  code: string;
  description: string;
  stats: string;
  color: string;
}
