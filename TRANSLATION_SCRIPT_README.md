# 翻譯腳本使用說明 (API 版本)

## 概述
`add-missing-translations.js` 是一個使用 Seasalt.ai 翻譯 API 的自動化腳本，用於將缺失的翻譯鍵自動翻譯並添加到所有語言檔案中。

## 功能
- 自動檢測 `src/i18n/locales/` 目錄下的所有 JSON 翻譯檔案
- 使用 API 自動翻譯英文內容到各種語言
- 只添加缺失的翻譯鍵，避免重複
- 保持 JSON 檔案的格式化
- 支援 API 請求失敗時的備用機制

## API 配置
腳本使用 Seasalt.ai 的私人翻譯 API：
```
POST https://seaword-dev.seasalt.ai/nlp/v2/i18n/translate
```

## 支援的語言
腳本支援以下語言的 API 翻譯：
- 🇺🇸 English (en)
- 🇦🇪 Arabic (ar)
- 🇧🇩 Bengali (bn)
- 🇩🇰 Danish (da)
- 🇩🇪 German (de)
- 🇪🇸 Spanish (es)
- 🇮🇷 Persian/Farsi (fa)
- 🇵🇭 Filipino (fil)
- 🇫🇷 French (fr)
- 🇮🇳 Hindi (hi)
- 🇮🇹 Italian (it)
- 🇯🇵 Japanese (ja)
- 🇰🇷 Korean (ko)
- 🇲🇾 Malay (ms)
- 🇳🇱 Dutch (nl)
- 🇵🇱 Polish (pl)
- 🇵🇹 Portuguese (pt)
- 🇷🇴 Romanian (ro)
- 🇷🇺 Russian (ru)
- 🇮🇳 Tamil (ta)
- 🇹🇭 Thai (th)
- 🇹🇷 Turkish (tr)
- 🇵🇰 Urdu (ur)
- 🇻🇳 Vietnamese (vi)
- 🇨🇳 Simplified Chinese (zh-CN)
- 🇹🇼 Traditional Chinese (zh-TW)

## 使用方法

### 直接執行
```bash
node add-missing-translations.js
```

### 作為模組導入
```javascript
import { addMissingTranslations } from './add-missing-translations.js';
await addMissingTranslations();
```

## 已添加的翻譯鍵

### Hero 動畫相關
- `seachat.heroAnimations.agentToAI.humanAgent`
- `seachat.heroAnimations.agentToAI.aiAgent`
- `seachat.heroAnimations.realtimeDashboard.subtitle`
- `seachat.heroAnimations.realtimeDashboard.description`

### 全通路功能
- `seachat.features.omnichannel.channels.line.features.0-3`
- `seachat.features.omnichannel.channels.ecommerce.features.0-3`

### SEO 和其他
- `seachat.seo.keywords`
- `common.disclaimer.priceComparison`

## 腳本邏輯

### API 翻譯流程
1. **檢測缺失翻譯**：使用 `getMissingTranslations()` 檢查需要翻譯的鍵
2. **調用翻譯 API**：向 Seasalt.ai API 發送翻譯請求
3. **處理回應**：解析 API 回應並應用翻譯
4. **備用機制**：API 失敗時使用英文作為備用

### API 請求格式
```javascript
{
  language: languageTr[targetLanguage],
  english_source_i18n: missingTranslations,
  existing_target_i18n: {}
}
```

### 檢查機制
- 使用 `hasNestedKey()` 函數檢查嵌套鍵是否已存在
- 只翻譯缺失的翻譯鍵，避免重複處理

### 設置機制  
- 使用 `setNestedValue()` 函數設置深層嵌套的對象值
- 自動創建必要的中間對象

### 語言處理邏輯
- **英文**：直接使用源文本
- **支援的語言**：調用 API 翻譯
- **不支援的語言**：使用英文作為備用
- **API 失敗**：回退到英文翻譯

## 執行結果
腳本會輸出：
- 📝 正在處理的語言 (包括語言名稱)
- 🌐 API 翻譯進度資訊
- ✅ API 翻譯完成狀態
- ✅ 成功添加的翻譯鍵
- ✨ 沒有需要添加的語言
- 💾 儲存的新翻譯數量
- ❌ 錯誤訊息 (包括 API 失敗)
- 🔄 備用機制啟動訊息

### 範例輸出
```
🌐 開始使用 API 添加翻譯到各語言檔案...

📝 處理語言: zh-TW (繁體中文)
   🌐 正在調用 API 翻譯到 繁體中文...
   ✅ API 翻譯完成
   ✅ 添加: seachat.heroAnimations.agentToAI.humanAgent
   ✅ 添加: seachat.heroAnimations.agentToAI.aiAgent
   💾 儲存了 14 個新翻譯
```

## 新增翻譯

如需新增翻譯鍵：

1. 在腳本中的 `newEnglishTranslations` 對象中添加新的英文翻譯
2. API 會自動翻譯到所有支援的語言
3. 執行腳本

```javascript
const newEnglishTranslations = {
  "your.new.key": "Your English translation",
  "another.key": "Another English text to translate",
  // API 會自動翻譯這些內容
};
```

### 優勢
- 只需維護英文版本
- API 自動處理所有語言翻譯
- 一致性和准確性更好
- 節省手動翻譯時間

## 注意事項

### 一般注意事項
- 腳本會保持 JSON 檔案的原有格式（２ 空格縮排）
- 執行前建議備份翻譯檔案
- 支援深層嵌套的對象結構（如：`a.b.c.d.e`）

### API 相關注意事項
- **API 速率限制**：腳本在每個 API 請求間有 1 秒的延遲
- **網路連線**：需要穩定的網路連線存取 API
- **備用機制**：API 失敗時會使用英文作為備用
- **處理時間**：翻譯大量內容時可能需要較長時間

## 故障排除

### ES Module 錯誤
如果遇到 ES module 相關錯誤，確保：
- Node.js 版本 >= 14
- 專案的 `package.json` 設置了 `"type": "module"`

### 路徑錯誤
確保腳本在專案根目錄執行，且 `src/i18n/locales/` 目錄存在。

### 權限問題
確保腳本有讀寫翻譯檔案的權限。