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
  // 'zh-CN': 'zh-CN.json',
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
  constructor() {
    this.localesDir = path.join(__dirname, "..", "src", "i18n", "locales");
    this.backupDir = path.join(
      __dirname,
      "..",
      "backups",
      `api-sync-${Date.now()}`
    );
    this.apiUrl = "https://seaword-dev.seasalt.ai/nlp/v2/i18n/translate";
    this.batchSize = 100; // 每次 API 呼叫最多處理的 key 數量
  }

  async init() {
    console.log("🚀 Starting I18n API Translation Sync...");
    console.log(`📁 Locales directory: ${this.localesDir}`);

    // Create backup directory
    await fs.mkdir(this.backupDir, { recursive: true });
    console.log(`💾 Backup directory created: ${this.backupDir}`);
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
    existingTranslations = {}
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
        return;
      }

      console.log(`🔍 Found ${missingCount} missing keys in ${fileName}`);

      // Translate missing keys
      const translations = await this.translateMissingKeys(
        missingKeys,
        langCode,
        existingData
      );

      // Merge with existing data while maintaining English structure
      const mergedData = this.mergeWithEnglishStructure(
        englishData,
        translations,
        existingData
      );

      // Write the updated file
      await fs.writeFile(filePath, JSON.stringify(mergedData, null, 2), "utf8");

      const finalCount = Object.keys(this.flattenObject(mergedData)).length;
      console.log(
        `✅ Updated ${fileName} - ${finalCount} total keys (+${missingCount} new)`
      );
    } catch (error) {
      console.error(`❌ Failed to process ${langCode}:`, error.message);
      // Log more details for debugging
      if (error.stack) {
        console.error(error.stack);
      }
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

      for (const langCode of languages) {
        console.log(
          `\n--- Processing ${langCode} (${languageTr[langCode]}) ---`
        );
        await this.processLanguage(langCode, englishData);

        // Add delay between languages
        if (langCode !== languages[languages.length - 1]) {
          console.log(
            "⏳ Waiting 3 seconds before processing next language..."
          );
          await new Promise((resolve) => setTimeout(resolve, 3000));
        }
      }

      console.log("\n🎉 I18n API sync completed!");
      console.log(`📁 Backups saved in: ${this.backupDir}`);
    } catch (error) {
      console.error("💥 Fatal error:", error);
      process.exit(1);
    }
  }
}

// Run the script
if (require.main === module) {
  const syncer = new I18nApiSyncer();
  syncer.run().catch(console.error);
}

module.exports = I18nApiSyncer;
