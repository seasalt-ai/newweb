#!/usr/bin/env node

const fs = require("fs").promises;
const path = require("path");

// Language mapping for API
const languageTr = {
  ar: "Arabic",
  bn: "Bengali",
  da: "Danish",
  de: "German",
  en: "English",
  es: "Spanish",
  fa: "Persian",
  fr: "French",
  hi: "Hindi",
  id: "Indonesian",
  it: "Italian",
  ja: "Japanese",
  ko: "Korean",
  ms: "Malay",
  nl: "Dutch",
  pl: "Polish",
  pt: "Portuguese",
  ru: "Russian",
  ta: "Tamil",
  th: "Thai",
  tr: "Turkish",
  ur: "Urdu",
  vi: "Vietnamese",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  fil: "Filipino",
  ro: "Romanian",
};

// File name mapping
const fileNameMapping = {
  "zh-CN": "zh-CN.json",
  "zh-TW": "zh-TW.json",
  // ar: 'ar.json',
  // de: 'de.json',
  // es: 'es.json',
  // fa: 'fa.json',
  // fil: 'fil.json',
  // fr: 'fr.json',
  // hi: 'hi.json',
  // id: 'id.json',
  // ja: 'ja.json',
  // ko: 'ko.json',
  // ms: 'ms.json',
  // pl: 'pl.json',
  // pt: 'pt.json',
  // ru: 'ru.json',
  // ta: 'ta.json',
  // th: 'th.json',
  // vi: 'vi.json',
  // ro: 'ro.json'
};

class I18nApiSyncer {
  constructor(options = {}) {
    this.localesDir = path.join(__dirname, "..", "src", "i18n", "locales");
    this.backupDir = path.join(
      __dirname,
      "..",
      "backups",
      `api-sync-${Date.now()}`
    );
    this.stateFile = path.join(__dirname, "..", ".sync-state.json");
    this.apiUrl = "https://seaword-dev.seasalt.ai/nlp/v2/i18n/translate";
    this.batchSize = 200; // 每次 API 呼叫最多處理的 key 數量
    this.syncState = null; // 同步狀態
    this.forceSync = options.force || false; // 強制同步選項
  }

  async init() {
    console.log("🚀 Starting I18n API Translation Sync...");
    console.log(`📁 Locales directory: ${this.localesDir}`);

    // Create backup directory
    await fs.mkdir(this.backupDir, { recursive: true });
    console.log(`💾 Backup directory created: ${this.backupDir}`);

    // Load sync state
    await this.loadSyncState();
  }

  // 載入同步狀態
  async loadSyncState() {
    try {
      const stateContent = await fs.readFile(this.stateFile, "utf8");
      this.syncState = JSON.parse(stateContent);
      console.log(`📋 Loaded sync state from ${this.stateFile}`);
      console.log(`📅 Last sync: ${new Date(this.syncState.lastSync).toLocaleString()}`);
    } catch (error) {
      // 創建新的同步狀態
      this.syncState = {
        lastSync: null,
        completedLanguages: {},
        englishHash: null,
        version: "1.0.0"
      };
      console.log(`📝 Created new sync state file`);
    }
  }

  // 保存同步狀態
  async saveSyncState() {
    try {
      await fs.writeFile(
        this.stateFile,
        JSON.stringify(this.syncState, null, 2),
        "utf8"
      );
      console.log(`💾 Saved sync state to ${this.stateFile}`);
    } catch (error) {
      console.error(`❌ Failed to save sync state:`, error.message);
    }
  }

  // 清理同步狀態
  async clearSyncState() {
    try {
      await fs.unlink(this.stateFile);
      console.log(`🗑️  Cleared sync state file`);
    } catch (error) {
      if (error.code !== 'ENOENT') {
        console.error(`❌ Failed to clear sync state:`, error.message);
      }
    }
  }

  // 顯示同步狀態統計
  displaySyncStats() {
    if (!this.syncState) return;

    const completedLangs = Object.keys(this.syncState.completedLanguages)
      .filter(lang => this.syncState.completedLanguages[lang]?.completed);
    const failedLangs = Object.keys(this.syncState.completedLanguages)
      .filter(lang => this.syncState.completedLanguages[lang]?.error);

    console.log(`📊 Sync Statistics:`);
    console.log(`  - ✅ Completed languages: ${completedLangs.length}`);
    console.log(`  - ❌ Failed languages: ${failedLangs.length}`);
    if (this.syncState.lastSync) {
      console.log(`  - 📅 Last sync: ${new Date(this.syncState.lastSync).toLocaleString()}`);
    }
  }

  // 生成內容的簡單哈希
  generateHash(obj) {
    const str = JSON.stringify(obj);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString();
  }

  // 檢查語言是否需要同步
  async needsSync(langCode, englishData) {
    // 強制同步模式
    if (this.forceSync) {
      console.log(`🔄 Force sync enabled for ${langCode}`);
      return true;
    }

    const englishHash = this.generateHash(englishData);

    // 檢查英文源文件是否有變更
    if (this.syncState.englishHash !== englishHash) {
      console.log(`🔄 English source changed, full sync required`);
      this.syncState.englishHash = englishHash;
      return true;
    }

    // 檢查該語言的完成狀態
    const langState = this.syncState.completedLanguages[langCode];
    if (!langState) {
      console.log(`🆕 ${langCode} never synced before`);
      return true;
    }

    // 檢查語言文件是否存在
    const fileName = fileNameMapping[langCode];
    const filePath = path.join(this.localesDir, fileName);
    try {
      await fs.access(filePath);
    } catch {
      console.log(`📝 ${fileName} file doesn't exist, sync required`);
      return true;
    }

    // 檢查上次同步是否完全成功
    if (!langState.completed) {
      console.log(`⚠️  ${langCode} previous sync was incomplete`);
      return true;
    }

    console.log(`✅ ${langCode} is up to date (last sync: ${new Date(langState.lastSync).toLocaleString()})`);
    return false;
  }

  // Deep comparison to find missing keys
  findMissingKeys(source, target, prefix = "") {
    const missing = {};

    for (const key in source) {
      const currentPath = prefix ? `${prefix}.${key}` : key;

      if (
        typeof source[key] === "object" &&
        source[key] !== null &&
        !Array.isArray(source[key])
      ) {
        if (!target[key] || typeof target[key] !== "object") {
          // Entire object is missing
          missing[key] = source[key];
        } else {
          // Recursively check nested objects
          const nestedMissing = this.findMissingKeys(
            source[key],
            target[key],
            currentPath
          );
          if (Object.keys(nestedMissing).length > 0) {
            missing[key] = nestedMissing;
          }
        }
      } else {
        // Primitive value
        if (!(key in target)) {
          missing[key] = source[key];
        }
      }
    }

    return missing;
  }

  // Flatten nested object for API
  flattenObject(obj, prefix = "") {
    const flattened = {};

    for (const key in obj) {
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        Object.assign(flattened, this.flattenObject(obj[key], newKey));
      } else {
        flattened[newKey] = obj[key];
      }
    }

    return flattened;
  }

  // Unflatten object back to nested structure
  unflattenObject(flattened) {
    const unflattened = {};

    for (const key in flattened) {
      const keys = key.split(".");
      let current = unflattened;

      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
          current[keys[i]] = {};
        }
        current = current[keys[i]];
      }

      current[keys[keys.length - 1]] = flattened[key];
    }

    return unflattened;
  }

  // Split object into chunks of specified size
  chunkObject(obj, chunkSize) {
    const entries = Object.entries(obj);
    const chunks = [];

    for (let i = 0; i < entries.length; i += chunkSize) {
      const chunkEntries = entries.slice(i, i + chunkSize);
      chunks.push(Object.fromEntries(chunkEntries));
    }

    return chunks;
  }

  // Call translation API with batch processing
  async translateMissingKeys(
    missingKeys,
    targetLanguage,
    existingTranslations = {},
    englishData = {},
    filePath = null
  ) {
    try {
      const flattenedMissing = this.flattenObject(missingKeys);
      const flattenedExisting = this.flattenObject(existingTranslations);

      const totalKeys = Object.keys(flattenedMissing).length;
      console.log(
        `🌐 Translating ${totalKeys} missing keys for ${targetLanguage}...`
      );

      if (totalKeys === 0) {
        return {};
      }

      // Split into batches
      const batches = this.chunkObject(flattenedMissing, this.batchSize);
      console.log(
        `📦 Split into ${batches.length} batches (max ${this.batchSize} keys per batch)`
      );

      let allTranslations = {};

      for (let i = 0; i < batches.length; i++) {
        const batch = batches[i];
        const batchSize = Object.keys(batch).length;

        console.log(
          `🔄 Processing batch ${i + 1}/${batches.length} (${batchSize} keys)...`
        );

        const response = await fetch(this.apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            language: languageTr[targetLanguage],
            english_source_i18n: batch,
            existing_target_i18n: flattenedExisting,
          }),
        });

        if (!response.ok) {
          throw new Error(
            `API Error in batch ${i + 1}: ${response.status} - ${response.statusText}`
          );
        }

        const batchResult = await response.json();

        if (batchResult.error) {
          throw new Error(
            `API returned error in batch ${i + 1}: ${batchResult.error}`
          );
        }

        // Merge batch results
        Object.assign(allTranslations, batchResult);
        console.log(
          `✅ Batch ${i + 1} completed (${Object.keys(batchResult).length} keys translated)`
        );

        // 立即更新文件 - 將當前已完成的翻譯結果寫入
        if (filePath && englishData) {
          try {
            // 將目前累積的翻譯結果轉換回嵌套結構
            const currentTranslations = this.unflattenObject(allTranslations);

            // 與現有資料合併並保持英文結構
            const mergedData = this.mergeWithEnglishStructure(
              englishData,
              currentTranslations,
              existingTranslations
            );

            // 寫入文件
            await fs.writeFile(filePath, JSON.stringify(mergedData, null, 2), "utf8");

            const currentCount = Object.keys(this.flattenObject(currentTranslations)).length;
            console.log(`💾 Updated file with ${currentCount} translations so far...`);
          } catch (writeError) {
            console.warn(`⚠️  Failed to update file after batch ${i + 1}:`, writeError.message);
            // 繼續處理，不因為寫入錯誤而停止翻譯
          }
        }

        // Add delay between batches to avoid rate limiting
        if (i < batches.length - 1) {
          console.log("⏳ Waiting 2 seconds before next batch...");
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
      }

      console.log(
        `🎉 Successfully translated ${Object.keys(allTranslations).length} total keys for ${targetLanguage}`
      );
      return this.unflattenObject(allTranslations);
    } catch (error) {
      console.error(
        `❌ Translation failed for ${targetLanguage}:`,
        error.message
      );
      throw error;
    }
  }

  // Merge objects while preserving English structure
  mergeWithEnglishStructure(englishObj, translatedObj, existingObj = {}) {
    const merged = {};

    for (const key in englishObj) {
      if (
        typeof englishObj[key] === "object" &&
        englishObj[key] !== null &&
        !Array.isArray(englishObj[key])
      ) {
        merged[key] = this.mergeWithEnglishStructure(
          englishObj[key],
          translatedObj[key] || {},
          existingObj[key] || {}
        );
      } else {
        // Use translated value if available, otherwise existing, otherwise English (fallback)
        if (translatedObj && translatedObj[key] !== undefined) {
          merged[key] = translatedObj[key];
        } else if (existingObj && existingObj[key] !== undefined) {
          merged[key] = existingObj[key];
        } else {
          merged[key] = englishObj[key]; // Fallback to English
        }
      }
    }

    return merged;
  }

  async processLanguage(langCode, englishData) {
    try {
      const fileName = fileNameMapping[langCode];
      if (!fileName) {
        console.warn(`⚠️  No file mapping found for language: ${langCode}`);
        return;
      }

      // 檢查是否需要同步
      const needsSync = await this.needsSync(langCode, englishData);
      if (!needsSync) {
        return; // 跳過此語言
      }

      // 標記該語言開始同步
      this.syncState.completedLanguages[langCode] = {
        startTime: Date.now(),
        completed: false,
        lastSync: null
      };
      await this.saveSyncState();

      const filePath = path.join(this.localesDir, fileName);
      let existingData = {};
      let hasExistingFile = false;

      // Try to read existing file
      try {
        const existingContent = await fs.readFile(filePath, "utf8");
        existingData = JSON.parse(existingContent);
        hasExistingFile = true;
        console.log(`📖 Loaded existing ${fileName}`);
      } catch (error) {
        console.log(`📝 Creating new ${fileName} (file doesn't exist)`);
      }

      // Create backup if file exists
      if (hasExistingFile) {
        const backupPath = path.join(this.backupDir, fileName);
        await fs.writeFile(
          backupPath,
          JSON.stringify(existingData, null, 2),
          "utf8"
        );
        console.log(`💾 Backed up ${fileName}`);
      }

      // Find missing keys
      const missingKeys = this.findMissingKeys(englishData, existingData);
      const missingCount = Object.keys(this.flattenObject(missingKeys)).length;

      if (missingCount === 0) {
        console.log(
          `✅ ${fileName} is already complete (${Object.keys(this.flattenObject(existingData)).length} keys)`
        );

        // Still rewrite to maintain English structure
        const reorderedData = this.mergeWithEnglishStructure(
          englishData,
          {},
          existingData
        );
        await fs.writeFile(
          filePath,
          JSON.stringify(reorderedData, null, 2),
          "utf8"
        );
        console.log(`🔄 Reordered ${fileName} to match English structure`);

        // 標記該語言同步完成(只是重新排序)
        const reorderedKeyCount = Object.keys(this.flattenObject(reorderedData)).length;
        this.syncState.completedLanguages[langCode] = {
          ...this.syncState.completedLanguages[langCode],
          completed: true,
          lastSync: Date.now(),
          totalKeys: reorderedKeyCount,
          addedKeys: 0
        };
        await this.saveSyncState();
        return;
      }

      console.log(
        `🔍 Found ${missingCount} missing keys in ${fileName}`
      );

      // Translate missing keys with error handling
      let translations = {};
      try {
        translations = await this.translateMissingKeys(
          missingKeys,
          langCode,
          existingData,
          englishData,
          filePath
        );
        console.log(`🎉 Successfully completed all translations for ${langCode}`);
      } catch (translationError) {
        console.error(`❌ Translation process failed for ${langCode}:`, translationError.message);

        // 嘗試讀取最後一次儲存的文件，可能已經有部分翻譯內容
        try {
          const currentContent = await fs.readFile(filePath, "utf8");
          const currentData = JSON.parse(currentContent);
          const currentTranslations = this.findMissingKeys(currentData, existingData);

          if (Object.keys(this.flattenObject(currentTranslations)).length > 0) {
            console.log(`💾 Found ${Object.keys(this.flattenObject(currentTranslations)).length} partially completed translations`);
            translations = currentTranslations;
          }
        } catch (readError) {
          console.warn(`⚠️  Could not recover partial translations:`, readError.message);
        }

        // 重新拋出錯誤，但至少保留了部分結果
        throw translationError;
      }

      // Merge with existing data while maintaining English structure
      const mergedData = this.mergeWithEnglishStructure(
        englishData,
        translations,
        existingData
      );

      // Final write to ensure everything is properly saved
      await fs.writeFile(filePath, JSON.stringify(mergedData, null, 2), "utf8");

      const totalKeyCount = Object.keys(this.flattenObject(mergedData)).length;
      console.log(
        `✅ Final update: ${fileName} - ${totalKeyCount} total keys (+${missingCount} new)`
      );

      // 標記該語言同步完成
      this.syncState.completedLanguages[langCode] = {
        ...this.syncState.completedLanguages[langCode],
        completed: true,
        lastSync: Date.now(),
        totalKeys: totalKeyCount,
        addedKeys: missingCount
      };
      await this.saveSyncState();

    } catch (error) {
      console.error(`❌ Failed to process ${langCode}:`, error.message);

      // 標記該語言同步失敗
      if (this.syncState.completedLanguages[langCode]) {
        this.syncState.completedLanguages[langCode].completed = false;
        this.syncState.completedLanguages[langCode].error = error.message;
        await this.saveSyncState();
      }

      // Log more details for debugging
      if (error.stack) {
        console.error(error.stack);
      }
      throw error; // 重新拋出錯誤以便在 run() 中處理
    }
  }

  async run() {
    try {
      await this.init();

      // Load English as reference
      const englishPath = path.join(this.localesDir, "en.json");
      console.log(`📖 Loading English reference: ${englishPath}`);

      const englishContent = await fs.readFile(englishPath, "utf8");
      const englishData = JSON.parse(englishContent);

      const englishKeyCount = Object.keys(
        this.flattenObject(englishData)
      ).length;
      console.log(`📊 English reference has ${englishKeyCount} total keys`);

      // Process each language
      const languages = Object.keys(fileNameMapping);
      console.log(`🌍 Processing ${languages.length} languages...`);

      let processedCount = 0;
      let skippedCount = 0;
      let failedCount = 0;

      for (const langCode of languages) {
        console.log(
          `\n--- Processing ${langCode} (${languageTr[langCode]}) ---`
        );

        try {
          const beforeCount = Object.keys(this.syncState.completedLanguages).filter(k =>
            this.syncState.completedLanguages[k]?.completed
          ).length;

          await this.processLanguage(langCode, englishData);

          const afterCount = Object.keys(this.syncState.completedLanguages).filter(k =>
            this.syncState.completedLanguages[k]?.completed
          ).length;

          if (afterCount > beforeCount) {
            processedCount++;
          } else {
            skippedCount++;
          }

        } catch (error) {
          failedCount++;
          console.error(`❌ Failed to process ${langCode}:`, error.message);
          // 繼續處理其他語言，不停止整個同步過程
        }

        // Add delay between languages
        if (langCode !== languages[languages.length - 1]) {
          console.log(
            "⏳ Waiting 3 seconds before processing next language..."
          );
          await new Promise((resolve) => setTimeout(resolve, 3000));
        }
      }

      // 更新最後同步時間
      this.syncState.lastSync = Date.now();
      await this.saveSyncState();

      console.log("\n🎉 I18n API sync completed!");
      console.log(`📁 Backups saved in: ${this.backupDir}`);
      console.log(`📊 Summary: ✅ ${processedCount} processed, ⏭️ ${skippedCount} skipped, ❌ ${failedCount} failed`);

      // 顯示詳細統計
      console.log('');
      this.displaySyncStats();
    } catch (error) {
      console.error("💥 Fatal error:", error);
      process.exit(1);
    }
  }
}

// Run the script
if (require.main === module) {
  // 處理命令列參數
  const args = process.argv.slice(2);
  const options = {
    force: args.includes('--force') || args.includes('-f')
  };

  if (options.force) {
    console.log('🔄 Force sync mode enabled - all languages will be processed');
  }

  // 清理命令
  if (args.includes('--clear')) {
    const syncer = new I18nApiSyncer();
    syncer.clearSyncState().then(() => {
      console.log('🔄 Sync state cleared. Next run will process all languages.');
    });
    return;
  }

  // 狀態命令
  if (args.includes('--status')) {
    const syncer = new I18nApiSyncer();
    syncer.loadSyncState().then(() => {
      syncer.displaySyncStats();
    });
    return;
  }

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Seasalt.ai I18n API Sync Tool

Usage:
  node sync-i18n-api.cjs [options]

Options:
  --force, -f    Force sync all languages regardless of cache
  --clear        Clear sync state (next run will process all languages)
  --status       Show current sync status
  --help, -h     Show this help message

Examples:
  node sync-i18n-api.cjs            # Normal incremental sync
  node sync-i18n-api.cjs --force    # Force sync all languages
  node sync-i18n-api.cjs --clear    # Clear sync state
  node sync-i18n-api.cjs --status   # Show sync status
`);
    process.exit(0);
  }

  const syncer = new I18nApiSyncer(options);
  syncer.run().catch(console.error);
}

module.exports = I18nApiSyncer;
