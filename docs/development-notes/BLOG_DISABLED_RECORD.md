# Blog 功能暫時停用記錄

## 📅 停用日期
2025-09-09

## 🎯 停用原因
- 加快開發和測試速度
- 專注於 header、footer 和首頁的開發
- 避免處理數百個 blog 頁面的構建時間

## 📋 已執行的停用步驟

### 1. 移動 Blog 頁面文件
```bash
# 創建暫存目錄
mkdir -p _temp_disabled

# 移動 blog 頁面
mv src/pages/blog _temp_disabled/blog
```

### 2. 移動 Blog 內容文件
```bash
# 移動 blog 內容集合
mv src/content/blog _temp_disabled/blog_content
```

### 3. 停用 Content 配置
在 `src/content/config.ts` 中：
- 註解掉 `blogCollection` 的定義
- 註解掉 `collections` 中的 `blog: blogCollection`

### 4. 保持的項目
- Header 和 Footer 中的 blog 連結**保持不變**
- RSS 文件保持不變（會有警告但不影響運行）

## 🔧 恢復 Blog 功能的步驟

### ⚠️ 重要：按順序執行以下命令

```bash
# 1. 恢復 blog 頁面
mv _temp_disabled/blog src/pages/

# 2. 恢復 blog 內容
mv _temp_disabled/blog_content src/content/blog

# 3. 手動編輯 src/content/config.ts
# 取消註解以下內容：
```

### src/content/config.ts 需要恢復的內容：
```typescript
// 取消註解這部分：
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Seasalt.ai Team'),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'es', 'zh-tw', 'zh-cn', 'ja', 'ko', 'fr', 'de', 'ar', 'fa', 'fil', 'hi', 'id', 'ms', 'pl', 'pt', 'ro', 'ru', 'ta', 'th', 'vi']).default('en'),
    slug: z.string().optional(),
    draft: z.boolean().default(false),
    category: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,  // 取消註解這行
};
```

### 4. 驗證恢復
```bash
# 檢查文件是否正確恢復
ls -la src/pages/blog/
ls -la src/content/blog/

# 測試構建
npm run build
```

## 📊 性能改善
- **構建時間**：從 3-5 分鐘縮短至 30-60 秒
- **生成頁面**：從 1000+ 頁面降至僅首頁
- **開發體驗**：大幅提升響應速度

## 📝 注意事項
1. 恢復時請確保按順序執行命令
2. `src/content/config.ts` 需要手動編輯取消註解
3. 恢復後記得測試構建是否正常
4. 完成恢復後可以刪除 `_temp_disabled/` 目錄

## 🗂️ 暫存文件位置
- Blog 頁面：`_temp_disabled/blog/`
- Blog 內容：`_temp_disabled/blog_content/`
- 配置備份：在 `src/content/config.ts` 中以註解形式保存

---
**記住：Header 和 Footer 中的 blog 連結沒有被修改，恢復後會自動恢復功能！**
