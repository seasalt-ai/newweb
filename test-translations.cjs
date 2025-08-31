// Test script to verify zh-TW translations
const fs = require('fs');
const path = require('path');

try {
  // Load zh-TW translations
  const zhTWPath = path.join(__dirname, 'public/locales/zh-TW.json');
  const zhTWContent = fs.readFileSync(zhTWPath, 'utf8');
  const zhTW = JSON.parse(zhTWContent);
  
  // Check realTimeDashboard translations
  console.log('🔍 Checking realTimeDashboard translations...\n');
  
  const dashboard = zhTW.seax?.realTimeDashboard;
  if (!dashboard) {
    console.log('❌ seax.realTimeDashboard not found!');
    process.exit(1);
  }
  
  // Check all required keys
  const requiredKeys = [
    'badge',
    'title.live',
    'title.performance', 
    'title.insights',
    'description',
    'metrics.messagesSent',
    'metrics.delivered',
    'metrics.engagementRate', 
    'metrics.activeUsers',
    'liveUpdates.title',
    'liveUpdates.dataPoints',
    'dashboard.title',
    'dashboard.liveStatus',
    'dashboard.chartLabel',
    'dashboard.sent',
    'dashboard.delivered',
    'dashboard.engagement',
    'activity.title',
    'activity.types.sms',
    'activity.types.whatsapp',
    'activity.types.voice',
    'activity.statuses.sent',
    'activity.statuses.delivered', 
    'activity.statuses.read',
    'activity.statuses.replied',
    'cards.deliveryValue',
    'cards.deliveryRate',
    'cards.hourlyValue',
    'cards.thisHour',
    'cards.liveUpdates'
  ];
  
  let allFound = true;
  requiredKeys.forEach(key => {
    const keys = key.split('.');
    let current = dashboard;
    
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        console.log(`❌ Missing key: seax.realTimeDashboard.${key}`);
        allFound = false;
        return;
      }
    }
    
    if (current) {
      console.log(`✅ ${key}: "${current}"`);
    }
  });
  
  if (allFound) {
    console.log('\n🎉 All realTimeDashboard translations found in zh-TW.json!');
    console.log('\nThe issue is likely browser cache or i18n loading.');
    console.log('\nTry:');
    console.log('1. Clear browser cache completely (Ctrl+Shift+Del)');
    console.log('2. Open incognito window and test');
    console.log('3. Check browser DevTools Network tab for zh-TW.json loading');
  }
  
} catch (error) {
  console.error('❌ Error reading translations:', error.message);
}
