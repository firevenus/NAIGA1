export enum Country {
  CN = 'China',
  JP = 'Japan',
  KR = 'Korea',
  OTHER = 'Other'
}

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

export interface MarketData {
  year: string;
  cn: number;
  jp: number;
  kr: number;
}

export type BlogCategory = '联盟动态' | '行业深度' | '成员故事' | '开发技术';

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  category: BlogCategory;
  summary: string;
  imageUrl: string;
}