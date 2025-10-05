#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

class PageTester {
  constructor() {
    this.baseUrl = 'http://localhost:4321';
    this.srcPagesDir = path.join(__dirname, '..', 'src', 'pages');
    this.results = [];
    this.successCount = 0;
    this.errorCount = 0;
  }

  // 發現所有可能的路由
  async discoverRoutes() {
    const routes = [];
    
    // 基本路由
    const basicRoutes = [
      '/',
      '/pricing',
      '/careers',
      '/blog',
      '/compare-us-overview'
    ];

    // 從頁面文件結構中發現路由
    const discoveredRoutes = await this.scanPagesDirectory();
    
    // 合併並去重
    const allRoutes = [...basicRoutes, ...discoveredRoutes];
    return [...new Set(allRoutes)];
  }

  // 掃描 pages 目錄
  async scanPagesDirectory(dir = this.srcPagesDir, basePath = '') {
    const routes = [];
    
    try {
      const items = await fs.readdir(dir, { withFileTypes: true });
      
      for (const item of items) {
        const itemPath = path.join(dir, item.name);
        const routePath = path.join(basePath, item.name);
        
        if (item.isDirectory()) {
          // 遞歸掃描子目錄
          if (item.name === '[lang]') {
            // 處理 [lang] 動態路由，生成英文路由
            const subRoutes = await this.scanPagesDirectory(itemPath, '/en');
            routes.push(...subRoutes);
          } else if (!item.name.startsWith('[')) {
            // 普通目錄
            const subRoutes = await this.scanPagesDirectory(itemPath, routePath);
            routes.push(...subRoutes);
          }
        } else if (item.isFile()) {
          // 處理文件
          const routeFromFile = this.fileToRoute(routePath, basePath);
          if (routeFromFile) {
            routes.push(routeFromFile);
          }
        }
      }
    } catch (error) {
      console.warn(`⚠️  Cannot scan directory ${dir}: ${error.message}`);
    }
    
    return routes;
  }

  // 將文件路徑轉換為路由
  fileToRoute(filePath, basePath) {
    // 移除文件擴展名
    let route = filePath.replace(/\.(astro|tsx?|jsx?|md|mdx)$/, '');
    
    // 處理 index 文件
    if (route.endsWith('/index') || route === 'index') {
      route = route.replace('/index', '') || '/';
    }
    
    // 處理 [...slug] 動態路由
    if (route.includes('[...slug]')) {
      return null; // 跳過動態路由
    }
    
    // 處理其他動態路由參數
    if (route.includes('[') && route.includes(']')) {
      return null; // 跳過其他動態路由
    }
    
    // 確保路由以 / 開頭
    if (!route.startsWith('/')) {
      route = '/' + route;
    }
    
    // 標準化路徑
    return route.replace(/\/+/g, '/');
  }

  // 添加特定的已知路由
  getKnownRoutes() {
    return [
      // 主要頁面
      '/',
      '/pricing',
      '/careers',
      '/blog',
      '/compare-us-overview',
      
      // 行業頁面
      '/en/industries/ecommerce',
      '/en/industries/healthcare', 
      '/en/industries/real-estate',
      '/en/industries/restaurants-hospitality',
      '/en/industries/education',
      '/en/industries/automotive',
      '/en/industries/professional-services',
      '/en/industries/financial-services',
      
      // 解決方案頁面
      '/en/solutions/sme-owners',
      '/en/seahealth',
      
      // 頻道頁面
      '/en/channels/whatsapp',
      '/en/channels/phone-calls',
      '/en/channels/sms',
      '/en/channels/website-chat',
      '/en/channels/instagram',
      '/en/channels/facebook-messenger',
      '/en/channels/contact-forms',
      '/en/channels/line',
      '/en/channels/website-widget',
      
      // 比較頁面
      '/en/compare/aircall-alternative',
      '/en/compare/ringcentral-alternative',
      '/en/compare/genesys-alternative',
      '/en/compare/five9-alternative',
      '/en/compare/avaya-alternative',
      '/en/compare/google-voice-alternative',
      '/en/compare/respond-io-alternative',
      '/en/compare/intercom-alternative',
      '/en/compare/kustomer-alternative',
      '/en/compare/3cx-alternative',
      '/en/compare/dialpad-alternative',
      '/en/compare/8x8-alternative',
      '/en/compare/openphone-alternative',
      
      // SeaChat 頁面
      '/en/seachat',
      '/en/seachat/features/human-agents',
      '/en/seachat/features/ai-automation',
      '/en/seachat/features/advanced-ai',
      '/en/seachat/features/knowledge-base',
      '/en/seachat/features/voice-agents',
      '/en/seachat/features/analytics',
      '/en/seachat/features/omnichannel',
      '/en/seachat/features/api',
      '/en/seachat/integrations/websites',
      '/en/seachat/integrations/crm',
      '/en/seachat/integrations/ecommerce',
      '/en/seachat/integrations/social-media',
      '/en/seachat/integrations/communication',
      '/en/seachat/integrations/marketing',
      '/en/seachat/integrations/calendar',
      '/en/seachat/integrations/api',
      '/en/seachat/solutions/ecommerce',
      '/en/seachat/solutions/healthcare',
      '/en/seachat/solutions/fintech',
      '/en/seachat/solutions/education',
      '/en/seachat/solutions/real-estate',
      '/en/seachat/solutions/small-business',
      '/en/seachat/solutions/travel',
      '/en/seachat/solutions/saas',
      '/en/seachat/pricing',
      
      // SeaX 頁面
      '/en/seax',
      '/en/seax/features',
      '/en/seax/channels/sms',
      '/en/seax/channels/sms-local',
      '/en/seax/channels/sms-toll-free',
      '/en/seax/channels/sms-short-code',
      '/en/seax/channels/whatsapp',
      '/en/seax/channels/voice',
      '/en/seax/solutions/lead-generation',
      '/en/seax/solutions/marketing-automation',
      '/en/seax/solutions/customer-engagement',
      '/en/seax/solutions/appointment-reminders',
      '/en/seax/solutions/emergency-alerts',
      '/en/seax/industries/ecommerce-retail',
      '/en/seax/industries/real-estate',
      '/en/seax/industries/political-campaigns',
      '/en/seax/industries/healthcare',
      '/en/seax/industries/financial-services',
      '/en/seax/pricing',
      
      // SeaVoice 頁面
      '/en/seavoice',
      '/en/seavoice/platform',
      '/en/seavoice/platform/landline-mobile',
      '/en/seavoice/platform/voip-sip-byoc',
      '/en/seavoice/platform/line-call-plus',
      '/en/seavoice/platform/whatsapp-voice',
      '/en/seavoice/platform/speech-to-text',
      '/en/seavoice/platform/text-to-speech',
      '/en/seavoice/platform/end-to-end-llms',
      '/en/seavoice/solutions/inbound/virtual-assistant',
      '/en/seavoice/solutions/inbound/call-transfer',
      '/en/seavoice/solutions/inbound/ivr-replacement',
      '/en/seavoice/solutions/inbound/mental-health',
      '/en/seavoice/solutions/inbound/scam-shield',
      '/en/seavoice/solutions/inbound/technical-support',
      '/en/seavoice/solutions/inbound/order-tracking',
      '/en/seavoice/solutions/inbound/payment-processing',
      '/en/seavoice/solutions/inbound/appointment-booking',
      '/en/seavoice/solutions/outbound/lead-generation',
      '/en/seavoice/solutions/outbound/collections',
      '/en/seavoice/solutions/outbound/reactivation',
      '/en/seavoice/solutions/outbound/senior-checks',
      '/en/seavoice/solutions/outbound/campaigns',
      '/en/seavoice/solutions/outbound/proactive-support',
      '/en/seavoice/solutions/outbound/renewals',
      '/en/seavoice/solutions/outbound/surveys',
      '/en/seavoice/solutions/outbound/fraud-alerts',
      '/en/seavoice/pricing'
    ];
  }

  // 測試單個頁面
  async testPage(route) {
    const url = `${this.baseUrl}${route}`;
    const startTime = Date.now();
    
    try {
      // 使用 curl 測試頁面，跟隨重定向
      const result = execSync(`curl -s -L -o /dev/null -w "%{http_code}:%{time_total}:%{url_effective}" "${url}"`, {
        encoding: 'utf8',
        timeout: 30000 // 30 秒超時
      });
      
      const [statusCode, timeTotal, finalUrl] = result.trim().split(':');
      const responseTime = Math.round(parseFloat(timeTotal) * 1000); // 轉換為毫秒
      
      const testResult = {
        route,
        url,
        finalUrl: finalUrl || url,
        statusCode: parseInt(statusCode),
        responseTime,
        success: statusCode === '200',
        redirected: finalUrl !== url,
        timestamp: new Date().toISOString()
      };
      
      this.results.push(testResult);
      
      if (testResult.success) {
        this.successCount++;
        const redirectInfo = testResult.redirected ? ` → ${testResult.finalUrl}` : '';
        console.log(`✅ [${statusCode}] ${route}${redirectInfo} ${responseTime}ms`);
      } else {
        this.errorCount++;
        console.log(`❌ [${statusCode}] ${route} ${responseTime}ms`);
      }
      
      return testResult;
      
    } catch (error) {
      this.errorCount++;
      const testResult = {
        route,
        url,
        statusCode: 0,
        responseTime: Date.now() - startTime,
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      };
      
      this.results.push(testResult);
      console.log(`💥 [ERR] ${route} - ${error.message}`);
      return testResult;
    }
  }

  // 檢查服務是否運行
  async checkServer() {
    try {
      // 測試根路徑，允許重定向
      const result = execSync(`curl -s -L -o /dev/null -w "%{http_code}" "${this.baseUrl}"`, {
        encoding: 'utf8',
        timeout: 5000
      });
      
      const statusCode = result.trim();
      return statusCode === '200';
    } catch (error) {
      return false;
    }
  }

  // 生成報告
  generateReport() {
    const totalTests = this.results.length;
    const successRate = ((this.successCount / totalTests) * 100).toFixed(1);
    const avgResponseTime = Math.round(
      this.results
        .filter(r => r.success)
        .reduce((sum, r) => sum + r.responseTime, 0) / this.successCount
    );
    
    console.log('\n📊 測試報告');
    console.log('='.repeat(50));
    console.log(`總頁面數: ${totalTests}`);
    console.log(`成功: ${this.successCount} (${successRate}%)`);
    console.log(`失敗: ${this.errorCount}`);
    console.log(`平均響應時間: ${avgResponseTime}ms`);
    
    // 顯示錯誤頁面
    const errors = this.results.filter(r => !r.success);
    if (errors.length > 0) {
      console.log('\n❌ 錯誤頁面:');
      errors.forEach(error => {
        console.log(`  - [${error.statusCode}] ${error.route}`);
      });
    }
    
    // 顯示最慢的頁面
    const slowPages = this.results
      .filter(r => r.success)
      .sort((a, b) => b.responseTime - a.responseTime)
      .slice(0, 5);
      
    if (slowPages.length > 0) {
      console.log('\n🐌 響應最慢的頁面:');
      slowPages.forEach(page => {
        console.log(`  - ${page.route}: ${page.responseTime}ms`);
      });
    }
  }

  // 保存結果到文件
  async saveResults() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `page-test-results-${timestamp}.json`;
    const filepath = path.join(__dirname, '..', 'reports', filename);
    
    // 確保目錄存在
    await fs.mkdir(path.dirname(filepath), { recursive: true });
    
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      totalTests: this.results.length,
      successCount: this.successCount,
      errorCount: this.errorCount,
      successRate: ((this.successCount / this.results.length) * 100).toFixed(1),
      results: this.results
    };
    
    await fs.writeFile(filepath, JSON.stringify(report, null, 2));
    console.log(`\n💾 結果已保存到: ${filepath}`);
  }

  // 主執行函數
  async run() {
    console.log('🚀 開始測試所有英文頁面...');
    console.log(`📍 Base URL: ${this.baseUrl}`);
    
    // 檢查服務是否運行
    console.log('🔍 檢查服務狀態...');
    const serverRunning = await this.checkServer();
    if (!serverRunning) {
      console.error('❌ 服務未運行！請先啟動開發服務器:');
      console.error('   npm run dev');
      console.error('   or');
      console.error('   pnpm dev');
      process.exit(1);
    }
    
    console.log('✅ 服務運行中！');
    
    // 獲取所有路由
    console.log('📋 收集所有英文路由...');
    const discoveredRoutes = await this.discoverRoutes();
    const knownRoutes = this.getKnownRoutes();
    const allRoutes = [...new Set([...discoveredRoutes, ...knownRoutes])];
    
    console.log(`📄 找到 ${allRoutes.length} 個頁面`);
    console.log('\n開始測試...\n');
    
    // 並發測試 (限制併發數)
    const concurrency = 5;
    const batches = [];
    for (let i = 0; i < allRoutes.length; i += concurrency) {
      batches.push(allRoutes.slice(i, i + concurrency));
    }
    
    for (let i = 0; i < batches.length; i++) {
      const batch = batches[i];
      console.log(`\n--- 批次 ${i + 1}/${batches.length} ---`);
      
      await Promise.all(batch.map(route => this.testPage(route)));
      
      // 批次間短暫延遲
      if (i < batches.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    // 生成報告
    this.generateReport();
    
    // 保存結果
    await this.saveResults();
    
    console.log('\n🎉 測試完成！');
    
    // 如果有錯誤，以非零狀態碼退出
    if (this.errorCount > 0) {
      process.exit(1);
    }
  }
}

// 處理命令行參數
const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  console.log(`
🔧 頁面測試工具

用法:
  node scripts/test-all-en-pages.cjs [選項]

選項:
  --help, -h     顯示此幫助信息

描述:
  此腳本會自動發現並測試所有英文頁面，檢查頁面是否能正常載入。
  
前置條件:
  1. 確保開發服務器運行在 http://localhost:4321
  2. 執行 npm run dev 或 pnpm dev 啟動服務

輸出:
  - 即時顯示每個頁面的測試結果
  - 生成完整的測試報告
  - 將結果保存為 JSON 文件到 reports/ 目錄
`);
  process.exit(0);
}

// 運行腳本
if (require.main === module) {
  const tester = new PageTester();
  tester.run().catch(error => {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  });
}

module.exports = PageTester;