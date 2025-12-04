
# NAIGA - Northeast Asia Indie Game Alliance (东北亚独立游戏联盟)

这是一个为东北亚独立游戏联盟（NAIGA）构建的官方门户网站。该平台旨在连接中国、日本、韩国、俄罗斯及蒙古的独立游戏开发者，促进创意交流与市场合作。

项目集成了 **Google Gemini API**，提供多语言智能助手及新闻自动翻译功能。

## 🛠 技术栈 (Tech Stack)

- **Frontend Framework**: React 19 (TypeScript)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **AI Integration**: Google GenAI SDK (Gemini 2.5 Flash)
- **Build Tool**: Vite

## 🚀 快速开始 (Getting Started)

### 1. 安装依赖
```bash
npm install
```

### 2. 配置环境变量
在项目根目录创建 `.env` 文件（或在 Cloudflare Pages 后台配置）：

```env
API_KEY=your_google_gemini_api_key
```

### 3. 启动开发服务器
```bash
npm run dev
```

---

## 📅 更新日志 (Update Log)

### v0.0.6 - 联系方式与关于页面增强 (Contact & About)
- **新增**: `About` 组件，详细展示联盟愿景、服务内容及联系方式。
- **优化**: 全局集成 `contact@naiga.org` 官方邮箱，支持点击直接发信。
- **交互**: 导航栏 "加入联盟" 按钮现在平滑滚动至联系板块。
- **AI**: 更新 Gemini 助手欢迎语，增加人工客服指引。

### v0.0.5 - 品牌国际化与视觉升级 (Branding & Localization)
- **视觉**: 在 Hero 区域增加巨大的 "NAIGA" 水印背景，强化品牌认知。
- **多语言**: 实现了组织名称（Organization Name）和口号（Tagline）的 6 国语言动态切换。
- **页脚**: 更新页脚版权信息，确保在非英语环境下同时展示英文全称以体现国际化。

### v0.0.4 - AI 驱动的新闻投稿系统 (AI Translation Workflow)
- **功能**: 新增成员新闻投稿模态框 (`NewsBlog` 组件)。
- **AI**: 集成 Gemini API 的翻译功能，将用户提交的单一语言内容自动翻译为 EN/ZH/JA/KO/RU/MN 六种语言。
- **数据**: 升级 `BlogPost` 数据结构，支持多语言标题和摘要存储。

### v0.0.3 - 多语言架构支持 (Multi-language Architecture)
- **架构**: 在 `App.tsx` 提升语言状态管理 (`LanguageCode`)。
- **UI**: 导航栏新增语言切换下拉菜单，支持 6 种语言 (英/中/日/韩/俄/蒙)。
- **AI**: 更新 `geminiService`，使 AI 助手能够根据当前网站语言设置自动调整回复语言。

### v0.0.2 - 区域展示板块 (Region Showcase)
- **新增**: `RegionShowcase` 组件，横向展示 CN, JP, KR, RU, MN 五国市场概况。
- **视觉**: 为每个国家配置了专属的主题色（如：中国红、日本粉、韩国蓝等）和悬停光效。

### v0.0.1 - 初始化发布 (Initial Release)
- **核心组件**: Hero, GameGrid, MarketChart (Recharts), Events, Footer.
- **AI 助手**: 集成悬浮式 Gemini 聊天机器人。
- **基础样式**: 确立赛博朋克/暗黑风格 UI (Tailwind)。
