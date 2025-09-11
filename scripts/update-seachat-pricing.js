#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { bulkUpdateTranslation } from './bulk-update-translation.js';

const SUPPORTED_LANGUAGES = ['ar', 'de', 'en', 'es', 'fa', 'fil', 'fr', 'hi', 'id', 'ja', 'ko', 'ms', 'pl', 'pt', 'ru', 'ta', 'th', 'vi', 'zh-CN', 'zh-TW'];

const LOCALES_DIR = 'public/locales';

// Define the updates for each change
const updates = {
  // Update 1: Add new GPT-4o Realtime API feature to Enterprise plan
  seachat: {
    pricing: {
      plans: {
        enterprise: {
          features: {
            gpt4oRealtimeAPI: "Access to GPT-4o Realtime API"
          }
        }
      },
      calculator: {
        // Update 2: Change calculator title
        title: "Plan & Model Usage Calculator"
      }
    }
  }
};

// Localized titles where we have translations, fallback to English for others
const localizedCalculatorTitles = {
  'en': 'Plan & Model Usage Calculator',
  'es': 'Calculadora de Plan y Uso de Modelo',
  'fr': 'Calculateur de Plan et Utilisation de Modèle',
  'de': 'Plan & Modellnutzung-Rechner',
  'ja': 'プラン＆モデル使用量計算機',
  'ko': '플랜 및 모델 사용량 계산기',
  'zh-TW': '方案與模型使用量計算器',
  'zh-CN': '方案与模型使用量计算器',
  'pt': 'Calculadora de Plano e Uso do Modelo',
  'ru': 'Калькулятор Плана и Использования Модели',
  'ar': 'حاسبة خطة واستخدام النموذج',
  'hi': 'योजना और मॉडल उपयोग कैलकुलेटर',
  'th': 'เครื่องคำนวณแผนและการใช้โมเดล',
  'vi': 'Máy tính Gói và Sử dụng Mô hình',
  'id': 'Kalkulator Paket & Penggunaan Model',
  'ms': 'Kalkulator Pelan & Penggunaan Model',
  'fil': 'Calculator ng Plan & Paggamit ng Model',
  'ta': 'திட்ட & மாதிரி பயன்பாட்டு கணிப்பான்',
  'fa': 'ماشین حساب طرح و استفاده از مدل',
  'pl': 'Kalkulator Planu i Użycia Modelu'
};

// GPT-4o Realtime API feature - keep "GPT-4o Realtime API" untranslated (proper noun)
const localizedGpt4oFeature = {
  'en': 'Access to GPT-4o Realtime API',
  'es': 'Acceso a GPT-4o Realtime API',
  'fr': 'Accès à GPT-4o Realtime API',
  'de': 'Zugang zu GPT-4o Realtime API',
  'ja': 'GPT-4o Realtime API へのアクセス',
  'ko': 'GPT-4o Realtime API 액세스',
  'zh-TW': '存取 GPT-4o Realtime API',
  'zh-CN': '访问 GPT-4o Realtime API',
  'pt': 'Acesso ao GPT-4o Realtime API',
  'ru': 'Доступ к GPT-4o Realtime API',
  'ar': 'الوصول إلى GPT-4o Realtime API',
  'hi': 'GPT-4o Realtime API तक पहुंच',
  'th': 'การเข้าถึง GPT-4o Realtime API',
  'vi': 'Truy cập GPT-4o Realtime API',
  'id': 'Akses ke GPT-4o Realtime API',
  'ms': 'Akses kepada GPT-4o Realtime API',
  'fil': 'Access sa GPT-4o Realtime API',
  'ta': 'GPT-4o Realtime API அணুகல்',
  'fa': 'دسترسی به GPT-4o Realtime API',
  'pl': 'Dostęp do GPT-4o Realtime API'
};

async function updateAllLanguageFiles() {
  console.log('🚀 Starting SeaChat pricing updates across all language files...\n');
  
  let successCount = 0;
  let failureCount = 0;
  
  for (const lang of SUPPORTED_LANGUAGES) {
    const filePath = path.join(LOCALES_DIR, `${lang}.json`);
    
    console.log(`📝 Updating ${lang}.json...`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      failureCount++;
      continue;
    }
    
    try {
      // Read the current file to understand its structure
      const content = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(content);
      
      // Create language-specific updates
      const langUpdates = {
        seachat: {
          pricing: {
            plans: {
              enterprise: {
                features: {
                  gpt4oRealtimeAPI: localizedGpt4oFeature[lang] || localizedGpt4oFeature['en']
                }
              }
            },
            calculator: {
              title: localizedCalculatorTitles[lang] || localizedCalculatorTitles['en']
            }
          }
        }
      };
      
      // Apply updates using the bulk update function
      const success = bulkUpdateTranslation(filePath, langUpdates, {
        backup: true,
        validate: true
      });
      
      if (success) {
        successCount++;
        console.log(`✅ Successfully updated ${lang}.json\n`);
      } else {
        failureCount++;
        console.log(`❌ Failed to update ${lang}.json\n`);
      }
      
    } catch (error) {
      console.log(`❌ Error updating ${lang}.json:`, error.message);
      failureCount++;
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`✅ Successfully updated: ${successCount} files`);
  console.log(`❌ Failed to update: ${failureCount} files`);
  console.log(`📁 Total processed: ${SUPPORTED_LANGUAGES.length} files`);
  
  if (successCount === SUPPORTED_LANGUAGES.length) {
    console.log('\n🎉 All language files updated successfully!');
    console.log('\n📋 Changes made:');
    console.log('  1. ✅ Added "Access to GPT-4o Realtime API" to Enterprise plan features');
    console.log('  2. ✅ Changed calculator title to "Plan & Model Usage Calculator"');
    console.log('  3. ✅ Updated all 20 language files with localized translations');
  } else {
    console.log('\n⚠️  Some files failed to update. Please check the error messages above.');
  }
  
  return successCount === SUPPORTED_LANGUAGES.length;
}

// Run the script
updateAllLanguageFiles().then(success => {
  process.exit(success ? 0 : 1);
}).catch(error => {
  console.error('❌ Script failed:', error);
  process.exit(1);
});
