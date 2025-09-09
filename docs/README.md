# Seasalt.ai 新網站項目文檔

這裡包含了 Seasalt.ai 新網站項目的所有技術文檔和開發記錄。

## 📋 文檔導覽

### 🚀 核心技術文檔
- **[I18N_GUIDE.md](./I18N_GUIDE.md)** - 多語言(i18n)處理完整指南
  - 支援 20 種語言的實現方式
  - 翻譯系統使用方法
  - 語言路由和切換機制
  - 開發最佳實踐和故障排除

### 🔄 遷移相關文檔
- **[搬遷計畫.md](./搬遷計畫.md)** - 從舊版 React 網站到新版 Astro 網站的遷移計畫
- **[migration-tracking.md](./migration-tracking.md)** - 遷移進度追蹤和完成狀況
- **[現有功能文件.md](./現有功能文件.md)** - 舊版網站功能分析和記錄

### 📊 效能與分析
- **[效能基準.json](./效能基準.json)** - 網站效能基準測試結果

### 📝 開發記錄
- **[development-notes/](./development-notes/)** - 開發過程中的重要記錄
  - **[I18N_FIX_SUMMARY.md](./development-notes/I18N_FIX_SUMMARY.md)** - i18n 翻譯鍵修復記錄
  - **[BLOG_DISABLED_RECORD.md](./development-notes/BLOG_DISABLED_RECORD.md)** - Blog 功能暫時停用記錄

## 🎯 快速開始

### 對於新開發者
1. 先閱讀 **[I18N_GUIDE.md](./I18N_GUIDE.md)** 了解多語言系統
2. 查看 **[搬遷計畫.md](./搬遷計畫.md)** 了解專案背景
3. 參考 **[migration-tracking.md](./migration-tracking.md)** 了解目前完成狀況

### 對於維護者
1. 查看 **[development-notes/](./development-notes/)** 了解最近的修復和變更
2. 參考 **[I18N_GUIDE.md](./I18N_GUIDE.md)** 進行多語言功能維護
3. 使用 **[效能基準.json](./效能基準.json)** 對比效能變化

## 🛠️ 技術棧

- **框架**: Astro
- **UI 組件**: React (嵌入在 Astro 中)
- **樣式**: Tailwind CSS
- **語言**: TypeScript
- **多語言**: 自定義 i18n 系統
- **建置**: 靜態生成 (SSG)

## 📁 專案結構

```
src/
├── components/          # Astro 和 React 組件
├── i18n/               # 多語言系統
│   ├── helpers.ts      # i18n 核心函數
│   └── locales/        # 翻譯檔案 (20 種語言)
├── pages/              # 頁面路由
│   ├── index.astro     # 根頁面 (語言重定向)
│   └── [lang]/         # 動態語言頁面
├── layouts/            # 佈局組件
└── styles/             # 全域樣式

docs/
├── I18N_GUIDE.md       # 多語言指南 ⭐
├── development-notes/  # 開發記錄
├── 搬遷計畫.md          # 遷移計畫
└── migration-tracking.md # 遷移追蹤
```

## 🔧 常用命令

```bash
# 安裝依賴
npm install

# 開發服務器
npm run dev

# 建置生產版本
npm run build

# 預覽建置結果
npm run preview

# 型別檢查
npm run astro check
```

## 📞 聯絡資訊

如有問題或建議，請聯絡開發團隊。

---

**最後更新**: 2025-09-09
**維護者**: Seasalt.ai 開發團隊
