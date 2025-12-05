

import { Game, Country, Event, BlogPost, RegionInfo, LanguageCode, Member } from './types';

export const APP_VERSION = '0.0.3';

export const ORGANIZATION_NAMES: Record<LanguageCode, string> = {
  zh: '东北亚独立游戏联盟',
  en: 'Northeast Asia Indie Game Alliance',
  ja: '北東アジアインディーゲームアライアンス',
  ko: '동북아시아 인디 게임 연합',
  ru: 'Альянс инди-игр Северо-Восточной Азии',
  mn: 'Зүүн Хойд Азийн Инди Тоглоомын Холбоо'
};

export const TAGLINES: Record<LanguageCode, string> = {
  zh: '连接东北亚 · 无国界的创意',
  en: 'Connecting Northeast Asia · Borderless Creativity',
  ja: '北東アジアをつなぐ · 国境なき創造性',
  ko: '동북아시아를 잇다 · 국경 없는 창의성',
  ru: 'Соединяя Северо-Восточную Азию · Творчество без границ',
  mn: 'Зүүн Хойд Азийг Холбоно · Хил хязгааргүй Бүтээлч байдал'
};

export const REGION_DATA: RegionInfo[] = [
  {
    id: 'kr',
    name: '韩国',
    code: 'KR',
    description: '全球竞争最激烈的市场之一，拥有独特的美术审美与高度发达的移动端生态。',
    stats: '150+ 成员',
    color: 'border-blue-500/50 text-blue-400'
  },
  {
    id: 'jp',
    name: '日本',
    code: 'JP',
    description: '独立游戏文化的圣地，拥有深厚的同人文化基础与主机游戏开发传统。',
    stats: '200+ 成员',
    color: 'border-pink-500/50 text-pink-400'
  },
  {
    id: 'cn',
    name: '中国',
    code: 'CN',
    description: '庞大的单一市场与快速崛起的技术力量，类型多元化，Steam 份额激增。',
    stats: '300+ 成员',
    color: 'border-red-500/50 text-red-400'
  },
  {
    id: 'ru',
    name: '俄罗斯',
    code: 'RU',
    description: '硬核技术的代表，擅长沉浸式叙事与复杂的系统设计，拥有极客精神。',
    stats: '80+ 成员',
    color: 'border-indigo-500/50 text-indigo-400'
  },
  {
    id: 'mn',
    name: '蒙古',
    code: 'MN',
    description: '东北亚的新兴力量，正在将独特的游牧文化与现代交互叙事相结合。',
    stats: '20+ 成员',
    color: 'border-yellow-500/50 text-yellow-400'
  }
];

export const MEMBERS: Member[] = [
  {
    id: 'm_naiga',
    name: { zh: 'NAIGA 秘书处', en: 'NAIGA Secretariat' },
    country: Country.OTHER,
    description: { zh: '联盟官方管理机构，负责活动组织与资源对接。', en: 'Official governing body of the alliance.' },
    logoUrl: 'https://ui-avatars.com/api/?name=NAIGA&background=0aff68&color=000'
  },
  {
    id: 'm_reddragon',
    name: { zh: '赤龙工作室', en: 'Red Dragon Studio' },
    country: Country.CN,
    description: { zh: '专注于赛博朋克风格动作游戏的中国独立开发团队。', en: 'Chinese indie team focused on cyberpunk action games.' },
    logoUrl: 'https://ui-avatars.com/api/?name=RD&background=ff0000&color=fff'
  },
  {
    id: 'm_kyoto',
    name: { zh: '京都像素', en: 'Kyoto Pixels' },
    country: Country.JP,
    description: { zh: '来自日本京都的像素艺术职人团队，擅长经营模拟。', en: 'Pixel art artisans from Kyoto, Japan.' },
    logoUrl: 'https://ui-avatars.com/api/?name=KP&background=ffc0cb&color=000'
  },
  {
    id: 'm_seoul',
    name: { zh: '首尔未来实验室', en: 'Seoul Future Lab' },
    country: Country.KR,
    description: { zh: '韩国前沿叙事游戏探索者。', en: 'Korean explorers of narrative frontiers.' },
    logoUrl: 'https://ui-avatars.com/api/?name=SF&background=0000ff&color=fff'
  },
  {
    id: 'm_siberia',
    name: { zh: '西伯利亚代码', en: 'Siberia Code' },
    country: Country.RU,
    description: { zh: '来自俄罗斯的硬核科幻游戏开发者。', en: 'Hardcore sci-fi developers from Russia.' },
    logoUrl: 'https://ui-avatars.com/api/?name=SC&background=4b0082&color=fff'
  },
  {
    id: 'm_steppe',
    name: { zh: '草原狼互动', en: 'Steppe Wolf Interactive' },
    country: Country.MN,
    description: { zh: '蒙古国新兴独立游戏力量，致力于传播游牧文化。', en: 'Emerging indie power from Mongolia.' },
    logoUrl: 'https://ui-avatars.com/api/?name=SW&background=ffd700&color=000'
  }
];

export const FEATURED_GAMES: Game[] = [
  {
    id: '1',
    title: 'Neon Ronin: Cyber Showdown',
    developer: 'Red Dragon Studio',
    country: Country.CN,
    description: '一款快节奏的赛博朋克风格横版动作游戏，融合了传统武术与未来科技。',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    tags: ['Action', 'Cyberpunk', '2D']
  },
  {
    id: '2',
    title: 'Sakura Spirits',
    developer: 'Kyoto Pixels',
    country: Country.JP,
    description: '温馨的经营模拟游戏，你在灵界经营一家深夜居酒屋。',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    tags: ['Simulation', 'Relaxing', 'Pixel Art']
  },
  {
    id: '3',
    title: 'Seoul 2088',
    developer: 'Null Pointer Games',
    country: Country.KR,
    description: '深度叙事驱动的黑客解谜游戏，揭开巨型企业的阴谋。',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    tags: ['Puzzle', 'Narrative', 'Sci-Fi']
  },
  {
    id: '4',
    title: 'Wandering Swordsman',
    developer: 'Ink Flow',
    country: Country.CN,
    description: '水墨画风格的回合制策略RPG，探索失落的江湖秘籍。',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    tags: ['RPG', 'Strategy', 'Traditional']
  }
];

export const UPCOMING_EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'NAIGA Winter Game Jam',
    date: '2023-12-15',
    location: 'Online / Discord',
    type: 'GameJam'
  },
  {
    id: 'e2',
    title: 'Indie Wave Tokyo 2024',
    date: '2024-01-20',
    location: 'Tokyo, Akihabara UDX',
    type: 'Conference'
  },
  {
    id: 'e3',
    title: 'Seoul Indie Meetup',
    date: '2024-02-10',
    location: 'Seoul, Gangnam',
    type: 'Meetup'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    memberId: 'm_naiga',
    title: 'NAIGA 2024 年度路线图发布：聚焦跨国发行与本地化支持',
    author: '联盟秘书处',
    date: '2024-03-15',
    category: '联盟动态',
    summary: '我们很高兴地宣布 NAIGA 2024 年的战略规划。今年，我们将重点建设中日韩三语本地化资源库，并与 Steam 及主机平台建立绿色通道，帮助成员更顺畅地进入国际市场。',
    imageUrl: 'https://picsum.photos/600/400?random=10'
  },
  {
    id: 'b2',
    memberId: 'm_seoul',
    title: '从独立开发者到独角兽：韩国手游市场的生存法则',
    author: 'Seoul Future Lab',
    date: '2024-03-10',
    category: '行业深度',
    summary: '韩国作为全球竞争最激烈的手游市场之一，独立开发者如何突围？本文深度分析了近年来成功的案例，探讨了小团队如何在巨头林立的市场中寻找细分赛道。',
    imageUrl: 'https://picsum.photos/600/400?random=11'
  },
  {
    id: 'b3',
    memberId: 'm_reddragon',
    title: '专访《霓虹浪人》制作人：如何用代码构建赛博武侠世界',
    author: 'Red Dragon Studio',
    date: '2024-02-28',
    category: '成员故事',
    summary: 'Red Dragon Studio 的核心成员分享了他们开发《Neon Ronin》的心路历程。从早期的概念设计到美术风格的确立，以及如何平衡动作手感与视觉特效。',
    imageUrl: 'https://picsum.photos/600/400?random=12'
  },
  {
    id: 'b4',
    memberId: 'm_siberia',
    title: '在西伯利亚编码：寒冷如何激发硬核系统设计',
    author: 'Siberia Code',
    date: '2024-02-15',
    category: '成员故事',
    summary: '俄罗斯开发者以其硬核的技术实力著称。Siberia Code 分享了他们如何在极端的环境中保持专注，并构建极其复杂的物理模拟系统。',
    imageUrl: 'https://picsum.photos/600/400?random=13'
  },
  {
    id: 'b5',
    memberId: 'm_steppe',
    title: '数字游牧：将蒙古传统文化融入现代游戏',
    author: 'Steppe Wolf Interactive',
    date: '2024-02-01',
    category: '开发技术',
    summary: '探索如何通过互动媒体保存和传播非物质文化遗产。我们的新项目尝试将马头琴音乐与节奏游戏机制相结合。',
    imageUrl: 'https://picsum.photos/600/400?random=14'
  }
];