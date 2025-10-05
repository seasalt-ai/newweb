# 翻譯差異檢查工具 (Translation Differences Checker)

這個工具會分析所有語言的翻譯檔案，找出缺失的翻譯鍵值和額外的鍵值。

## 使用方法

### 基本使用
```bash
node scripts/check-translation-differences.js
```

### 匯出詳細報告到 JSON 檔案
```bash
node scripts/check-translation-differences.js --export
# 或
node scripts/check-translation-differences.js -e
```

### 顯示幫助訊息
```bash
node scripts/check-translation-differences.js --help
# 或
node scripts/check-translation-differences.js -h
```

## 報告說明

### 📊 摘要統計
- **Total unique keys**: 所有語言中發現的唯一翻譯鍵值總數
- **Languages analyzed**: 分析的語言數量

### 🔢 各語言鍵值計數
- **Keys count**: 每個語言的翻譯鍵值數量
- **Percentage**: 完成度百分比
- **Status**: 
  - ✅ Complete: 沒有缺失的鍵值
  - ⚠ Almost complete: 缺失 5 個或更少的鍵值
  - ❌ Missing X keys: 缺失的鍵值數量

### 📋 詳細差異
- **❌ Missing keys**: 該語言缺失的翻譯鍵值
- **➕ Extra keys**: 該語言特有但其他語言沒有的鍵值

### 🎯 最常缺失的鍵值
顯示在最多語言中缺失的翻譯鍵值，這些通常是需要優先處理的。

### 🏁 完成狀態
- **Complete languages**: 沒有缺失鍵值的語言
- **Incomplete languages**: 有缺失鍵值的語言

## 當前分析結果摘要

根據最新分析：

- **總鍵值數**: 10,542
- **最完整的語言**: 
  1. 繁體中文 (zh-TW): 99.7% (缺失 33 個鍵值)
  2. 英文 (en): 98.7% (缺失 132 個鍵值)
- **需要優先翻譯的語言**: 大部分其他語言都缺失大量翻譯

## 輸出檔案

當使用 `--export` 選項時，會產生 `translation-differences.json` 檔案，包含：
- 每個語言的詳細缺失和額外鍵值列表
- 可供自動化工具進一步處理的結構化數據

## 建議使用情境

1. **定期檢查**: 在添加新翻譯鍵值後運行
2. **翻譯工作規劃**: 識別需要優先翻譯的鍵值和語言
3. **質量控制**: 確保所有語言的翻譯完整性
4. **自動化整合**: 結合 CI/CD 流程進行翻譯完整性檢查

## 技術細節

- **檔案格式**: 支援嵌套 JSON 結構
- **鍵值格式**: 使用點記號 (dot notation) 扁平化嵌套結構
- **語言檔案位置**: `src/i18n/locales/*.json`
- **輸出格式**: 彩色終端輸出 + 可選 JSON 匯出
