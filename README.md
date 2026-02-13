# Seasalt.ai Website - New Astro Implementation

基於 Astro 的全新 Seasalt.ai 官方網站實現，具備多語言支援、現代化架構和優化的性能。

## 📋 專案概述

本專案是 Seasalt.ai 官網的全面重構，從舊的 Hugo 架構遷移至現代化的 Astro 框架。

### 🎯 主要特色
- **多語言支援**: 支援 20 種語言
- **現代化框架**: 基於 Astro 4.0+
- **內容管理**: 使用 Astro Content Collections
- **優化性能**: 靜態生成 + 部分水合
- **響應式設計**: 全設備適配

### 🌍 支援語言
- English (en)
- 中文繁體 (zh-tw) 
- 中文簡體 (zh-cn)
- 日本語 (ja)
- 한국어 (ko)
- Español (es)
- Français (fr) 
- Deutsch (de)
- العربية (ar)
- فارسی (fa)
- Filipino (fil)
- हिन्दी (hi)
- Bahasa Indonesia (id)
- Bahasa Malaysia (ms)
- Polski (pl)
- Português (pt)
- Română (ro)
- Русский (ru)
- தமிழ் (ta)
- ไทย (th)
- Tiếng Việt (vi)

## 🚀 專案結構

```text
/
├── public/                  # 靜態資源 (21,000+ 檔案)
│   ├── images/             # 圖片資源
│   ├── css/                # 樣式文件
│   └── js/                 # JavaScript 文件
├── src/
│   ├── pages/              # 頁面路由
│   │   ├── index.astro     # 首頁
│   │   └── blog/           # 博客頁面
│   ├── content/            # 內容集合
│   │   └── blog/           # 博客文章 (2,202 篇)
│   │       ├── en/         # 英文文章
│   │       ├── zh-tw/      # 繁體中文文章
│   │       ├── zh-cn/      # 簡體中文文章
│   │       └── ...         # 其他語言文章
│   ├── components/         # Astro 組件
│   └── layouts/            # 頁面佈局
├── _old/                   # 舊專案備份
├── deploy/                 # 部署配置
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
