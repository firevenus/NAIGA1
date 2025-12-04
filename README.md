
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
- **Deployment**: Cloudflare Pages

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

### 4. 部署 (Deployment)

项目预配置了 Cloudflare Pages 部署脚本。

1. 登录 Cloudflare (如果尚未登录):
```bash
npx wrangler login
```

2. 构建并部署:
```bash
npm run deploy
```

---

## 📅 更新日志 (Update Log)

### v0.0.1 - 初始测试版发布 (Initial Beta Release)

**发布日期**: 2024-05-20

**核心功能 (Core Features):**
- **多语言门户 (Multilingual Portal)**: 完整支持中、英、日、韩、俄、蒙 6 种语言，包括 UI、导航及动态内容的实时切换。
- **AI 智能中枢 (AI Integration)**:
  - **新闻自动本地化**: 成员提交新闻时，通过 Gemini API 自动翻译成所有支持语言。
  - **智能助手**: 内置悬浮聊天机器人，提供行业咨询和网站导航服务。
- **区域展示 (Region Showcase)**: 可视化展示东北亚五国（CN, JP, KR, RU, MN）的游戏市场概况与特色。
- **数据可视化 (Data Viz)**: 集成 Recharts 展示区域市场增长趋势。
- **成员服务 (Member Services)**:
  - 新闻与博客投稿系统。
  - 集成 `contact@naiga.org` 官方联络通道与 "About" 详细介绍页。
- **视觉体验 (Visuals)**: 赛博朋克/暗黑风格设计，适配移动端与桌面端，Hero 区域包含动态光效与品牌水印。
