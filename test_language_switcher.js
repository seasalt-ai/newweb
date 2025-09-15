// 測試語言切換函數
import { getLocalizedPath } from './src/i18n/helpers.ts';

// 測試案例
const testCases = [
  {
    input: '/zh-tw/seachat',
    targetLang: 'en',
    expected: '/en/seachat'
  },
  {
    input: '/zh-tw/seachat/pricing',
    targetLang: 'en',
    expected: '/en/seachat/pricing'
  },
  {
    input: '/en/seachat',
    targetLang: 'zh-tw',
    expected: '/zh-tw/seachat'
  },
  {
    input: '/seachat',
    targetLang: 'en',
    expected: '/en/seachat'
  },
  {
    input: '/',
    targetLang: 'zh-tw',
    expected: '/zh-tw/'
  }
];

console.log('🧪 測試語言切換函數...\n');

testCases.forEach((testCase, index) => {
  const result = getLocalizedPath(testCase.input, testCase.targetLang);
  const passed = result === testCase.expected;
  
  console.log(`測試 ${index + 1}: ${passed ? '✅' : '❌'}`);
  console.log(`  輸入: ${testCase.input}`);
  console.log(`  目標語言: ${testCase.targetLang}`);
  console.log(`  期望結果: ${testCase.expected}`);
  console.log(`  實際結果: ${result}`);
  console.log('');
});