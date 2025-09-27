#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// API 配置
const TRANSLATION_API_URL =
  "https://seaword-dev.seasalt.ai/nlp/v2/i18n/translate";

// 語言代碼映射 - 將檔案名稱映射到 API 所需的語言名稱
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
  it: "Italian",
  ja: "Japanese",
  ko: "Korean",
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
  fil: "Filipino", // 加入缺失的語言
  ms: "Malay",
  ro: "Romanian",
};

// 需要添加的新翻譯內容（英文版本，作為 API 翻譯的源文本）
const newEnglishTranslations = {
  "seachat.heroAnimations.agentToAI.humanAgent": "Human Agent",
  "seachat.heroAnimations.agentToAI.aiAgent": "AI Agent",
  "seachat.heroAnimations.realtimeDashboard.subtitle":
    "Monitor your business in real-time",
  "seachat.heroAnimations.realtimeDashboard.description":
    "Track conversations, response times, and performance metrics across all channels with comprehensive analytics.",
  "seachat.features.omnichannel.channels.line.features.0":
    "Native LINE Official Account integration",
  "seachat.features.omnichannel.channels.line.features.1":
    "Rich messaging with stickers and menus",
  "seachat.features.omnichannel.channels.line.features.2":
    "Multi-language support for Asian markets",
  "seachat.features.omnichannel.channels.line.features.3":
    "LINE Pay payment integration",
  "seachat.features.omnichannel.channels.ecommerce.features.0":
    "Shopping cart abandonment recovery",
  "seachat.features.omnichannel.channels.ecommerce.features.1":
    "Product recommendations and upselling",
  "seachat.features.omnichannel.channels.ecommerce.features.2":
    "Order status and shipping updates",
  "seachat.features.omnichannel.channels.ecommerce.features.3":
    "Customer support for returns and refunds",
  "seachat.seo.keywords":
    "AI chatbot, customer service automation, omnichannel support, WhatsApp business, live chat, voice agents, SeaChat",
  "common.disclaimer.priceComparison":
    "Prices shown are based on publicly available information and may vary. Please verify current pricing with each vendor.",
};

// 函數：調用翻譯 API
async function translateText(targetLanguage, englishTranslations) {
  try {
    console.log(`   🌐 正在調用 API 翻譯到 ${languageTr[targetLanguage]}...`);

    const response = await fetch(TRANSLATION_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: languageTr[targetLanguage],
        english_source_i18n: englishTranslations,
        existing_target_i18n: {},
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log(`   ✅ API 翻譯完成`);
    return result.translated_target_i18n;
  } catch (error) {
    console.error(`   ❌ API 翻譯失敗:`, error.message);
    // 如果 API 失敗，返回英文作為備用
    console.log(`   🔄 使用英文作為備用翻譯`);
    return englishTranslations;
  }
}

// 函數：設置嵌套對象的值
function setNestedValue(obj, path, value) {
  const keys = path.split(".");
  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current)) {
      current[key] = {};
    }
    current = current[key];
  }

  current[keys[keys.length - 1]] = value;
}

// 函數：檢查嵌套鍵是否存在
function hasNestedKey(obj, path) {
  const keys = path.split(".");
  let current = obj;

  for (const key of keys) {
    if (current === null || current === undefined || !(key in current)) {
      return false;
    }
    current = current[key];
  }

  return true;
}

// 函數：獲取需要翻譯的缺失鍵
function getMissingTranslations(translations, englishTranslations) {
  const missing = {};

  Object.entries(englishTranslations).forEach(([key, value]) => {
    if (!hasNestedKey(translations, key)) {
      missing[key] = value;
    }
  });

  return missing;
}

// 主函數
async function addMissingTranslations() {
  const localesDir = path.join(__dirname, "src", "i18n", "locales");

  // 獲取所有語言檔案
  const files = fs
    .readdirSync(localesDir)
    .filter((file) => file.endsWith(".json"));

  console.log("🌐 開始使用 API 添加翻譯到各語言檔案...\n");

  for (const file of files) {
    const langCode = file.replace(".json", "");
    const filePath = path.join(localesDir, file);

    console.log(
      `📝 處理語言: ${langCode} (${languageTr[langCode] || "Unknown"})`
    );

    try {
      // 讀取現有檔案
      const existingContent = fs.readFileSync(filePath, "utf8");
      const translations = JSON.parse(existingContent);

      // 檢查需要翻譯的缺失鍵
      const missingTranslations = getMissingTranslations(
        translations,
        newEnglishTranslations
      );

      if (Object.keys(missingTranslations).length === 0) {
        console.log(`   ✨ 沒有需要添加的翻譯`);
        console.log("");
        continue;
      }

      let translatedContent;

      if (langCode === "en") {
        // 英文檔案直接使用源文本
        translatedContent = missingTranslations;
        console.log(`   📋 使用英文源文本`);
      } else if (!languageTr[langCode]) {
        // 不支援的語言使用英文
        translatedContent = missingTranslations;
        console.log(`   ⚠️  語言 ${langCode} 不支援，使用英文`);
      } else {
        // 使用 API 翻譯
        translatedContent = await translateText(langCode, missingTranslations);

        // 等待 1 秒避免 API 請求過於頻繁
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      let addedCount = 0;

      // 添加翻譯
      Object.entries(translatedContent).forEach(([key, value]) => {
        if (!hasNestedKey(translations, key)) {
          setNestedValue(translations, key, value);
          addedCount++;
          console.log(`   ✅ 添加: ${key}`);
        }
      });

      if (addedCount > 0) {
        // 寫回檔案，保持格式化
        fs.writeFileSync(
          filePath,
          JSON.stringify(translations, null, 2) + "\n",
          "utf8"
        );
        console.log(`   💾 儲存了 ${addedCount} 個新翻譯`);
      }
    } catch (error) {
      console.error(`   ❌ 處理 ${file} 時出錯:`, error.message);
    }

    console.log("");
  }

  console.log("🎉 翻譯添加完成！");
}

// 如果是直接執行這個腳本
if (import.meta.url === `file://${process.argv[1]}`) {
  addMissingTranslations().catch((error) => {
    console.error("❌ 腳本執行失敗:", error);
    process.exit(1);
  });
}

export { addMissingTranslations };
