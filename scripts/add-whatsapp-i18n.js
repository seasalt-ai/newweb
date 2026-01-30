#!/usr/bin/env node

/**
 * Script to add new i18n keys for WhatsApp Coexistence page
 * Adds SEO, Problem, Solution, and WhatIs sections
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const localesDir = path.join(__dirname, '..', 'src', 'i18n', 'locales');

// New English translations to add
const newEnglishKeys = {
  seo: {
    title: "WhatsApp Coexistence | Keep Your App & Scale with Cloud API | Seasalt.ai",
    description: "Discover WhatsApp Coexistence by Seasalt.ai. Keep your WhatsApp Business App while unlocking Cloud API power. No data loss, same number, hybrid human-AI workflows.",
    keywords: "WhatsApp Coexistence, WhatsApp Business API, WhatsApp Business App, hybrid messaging, AI chatbot, customer support automation",
    breadcrumb: {
      home: "Home",
      channels: "Channels",
      current: "WhatsApp Coexistence"
    }
  },
  problem: {
    title: "The",
    impossibleChoice: "Impossible Choice",
    subtitlePart1: "Keep Your Phone App",
    or: "OR",
    subtitlePart2: "Scale with Enterprise Tools?",
    untilNow: "Until now, you had to sacrifice one for the other.",
    vs: "VS",
    whatYouGet: "✓ What You Get",
    dealbreaker: "✗ The Dealbreaker",
    businessApp: {
      badge: "Stay Small",
      title: "WhatsApp Business App",
      subtitle: "The Mobile-Only Trap",
      pros: {
        mobile: "Native mobile experience",
        free: "Free messaging"
      },
      cons: {
        devices: "Maximum 4 linked devices",
        fifthMember: "5th team member? Not possible.",
        fourDevices: "Only 4 devices max",
        cannotAdd: "Cannot add agents as you grow",
        noAutomation: "No automation or CRM"
      }
    },
    cloudAPI: {
      badge: "Lose Mobility",
      title: "Cloud API",
      subtitle: "The Desktop-Only Trap",
      pros: {
        unlimited: "Unlimited agents",
        automation: "AI automation & CRM"
      },
      cons: {
        lockedOut: "Your phone is locked out",
        noMobile: "No mobile access whatsoever",
        noApp: "No mobile app on your phone",
        desktopOnly: "Stuck with desktop/dashboard only"
      }
    },
    summary: {
      part1: "Either you stay stuck with limited team capacity,",
      part2: "or you lose the flexibility your business depends on.",
      dilemma: "This is the dilemma every growing business faces."
    }
  },
  solution: {
    title: "Now,",
    worryNoMore: "Worry No More.",
    subtitle1: "Introducing",
    metaCoexistence: "Meta WhatsApp Coexistence",
    subtitle2: "with Seasalt.ai. The only solution that bridges the gap, giving you the scalability of the API without giving up your phone.",
    coexistenceTitle: "WhatsApp Coexistence",
    tagline: "Two platforms. One phone number. Zero compromises.",
    businessApp: {
      title: "WhatsApp Business App",
      subtitle: "Mobile Experience"
    },
    cloudAPI: {
      title: "WhatsApp Cloud API",
      subtitle: "Enterprise Scale"
    },
    bestBadge: "BEST",
    result: {
      title: "Coexistence",
      subtitle: "Best of Both Worlds"
    }
  },
  whatIs: {
    title: "What is WhatsApp Coexistence?",
    description: "WhatsApp Coexistence is a revolutionary feature that allows businesses to use both WhatsApp Business App and WhatsApp Cloud API on the same phone number,",
    simultaneously: "simultaneously",
    before: {
      title: "Before Coexistence",
      point1: "Lose chat history when migrating to API",
      point2: "Change phone number or get a new one",
      point3: "Choose between personal app or enterprise automation",
      point4: "Disrupt customer relationships during transition"
    },
    after: {
      title: "After Coexistence",
      point1: "Keep same phone number",
      point2: "Sync 180 days of chat history",
      point3: "Use app and API simultaneously",
      point4: "Zero-disruption migration"
    },
    omnichannel: {
      title: "A Unified Omni-Channel Engine",
      subtitle: "It's not just about syncing; it's about upgrading your entire customer support infrastructure."
    },
    features: {
      sync: {
        title: "3-Way Synchronization",
        description: "Messages sync instantly between your Phone, Seasalt Web Dashboard, and Seasalt Mobile App. Send from anywhere, see it everywhere."
      },
      agents: {
        title: "Unlimited Agents",
        description: "Break the 4-device limit. Add 10, 50, or 100 agents to the same WhatsApp number. Assign conversations to human agents or AI bots seamlessly."
      },
      aiHandoff: {
        title: "AI Agent Handoff",
        description: "Enable AI Agents to handle off-hours inquiries on the platform, while you monitor results directly on your personal phone."
      },
      history: {
        title: "6-Month History Import",
        description: "Don't start from scratch. We automatically pull in the last 6 months of chat history so your team has full context immediately."
      },
      mobileApp: {
        title: "Seasalt Mobile App",
        description: "Employees don't need access to your physical phone. They can use Seasalt.ai App on their own devices to reply to customers on the go."
      },
      unifiedInbox: {
        title: "Unified Inbox",
        description: "Combine WhatsApp with SMS, Messenger, LINE, and Instagram in one single view. Stop tab-switching and start solving."
      }
    }
  }
};

// Chinese translations
const newChineseKeys = {
  seo: {
    title: "WhatsApp共存方案 | 保留您的应用并扩展使用云API | Seasalt.ai",
    description: "探索Seasalt.ai的WhatsApp共存方案。保留WhatsApp商业应用的同时解锁云API的强大功能。无数据丢失，同一号码，混合人工-AI工作流。",
    keywords: "WhatsApp共存方案, WhatsApp商业API, WhatsApp商业应用, 混合消息, AI聊天机器人, 客户支持自动化",
    breadcrumb: {
      home: "首页",
      channels: "渠道",
      current: "WhatsApp共存方案"
    }
  },
  problem: {
    title: "",
    impossibleChoice: "两难选择",
    subtitlePart1: "保留手机应用",
    or: "或",
    subtitlePart2: "使用企业工具扩展？",
    untilNow: "直到现在，您必须在两者之间做出取舍。",
    vs: "对比",
    whatYouGet: "✓ 您将获得",
    dealbreaker: "✗ 致命缺陷",
    businessApp: {
      badge: "保持小规模",
      title: "WhatsApp商业应用",
      subtitle: "仅限移动端的陷阱",
      pros: {
        mobile: "原生移动体验",
        free: "免费消息"
      },
      cons: {
        devices: "最多4个关联设备",
        fifthMember: "第5个团队成员？不可能。",
        fourDevices: "最多仅4台设备",
        cannotAdd: "无法随增长添加代理",
        noAutomation: "无自动化或CRM"
      }
    },
    cloudAPI: {
      badge: "失去移动性",
      title: "云API",
      subtitle: "仅限桌面的陷阱",
      pros: {
        unlimited: "无限代理",
        automation: "AI自动化与CRM"
      },
      cons: {
        lockedOut: "您的手机被锁定",
        noMobile: "完全无法移动访问",
        noApp: "手机上无应用",
        desktopOnly: "只能使用桌面/仪表板"
      }
    },
    summary: {
      part1: "要么您被困在有限的团队容量中，",
      part2: "要么失去业务依赖的灵活性。",
      dilemma: "这是每个成长中的企业都面临的困境。"
    }
  },
  solution: {
    title: "现在，",
    worryNoMore: "无需再担心。",
    subtitle1: "介绍",
    metaCoexistence: "Meta WhatsApp共存方案",
    subtitle2: "与Seasalt.ai合作。唯一一个弥合差距的解决方案，让您在不放弃手机的情况下获得API的可扩展性。",
    coexistenceTitle: "WhatsApp共存方案",
    tagline: "两个平台。一个电话号码。零妥协。",
    businessApp: {
      title: "WhatsApp商业应用",
      subtitle: "移动体验"
    },
    cloudAPI: {
      title: "WhatsApp云API",
      subtitle: "企业级规模"
    },
    bestBadge: "最佳",
    result: {
      title: "共存方案",
      subtitle: "两全其美"
    }
  },
  whatIs: {
    title: "什么是WhatsApp共存方案？",
    description: "WhatsApp共存方案是一项革命性功能，允许企业在同一电话号码上同时使用WhatsApp商业应用和WhatsApp云API，",
    simultaneously: "同时",
    before: {
      title: "共存之前",
      point1: "迁移到API时丢失聊天记录",
      point2: "更换电话号码或获取新号码",
      point3: "在个人应用和企业自动化之间选择",
      point4: "在过渡期间破坏客户关系"
    },
    after: {
      title: "共存之后",
      point1: "保留相同的电话号码",
      point2: "同步180天聊天记录",
      point3: "同时使用应用和API",
      point4: "零中断迁移"
    },
    omnichannel: {
      title: "统一的全渠道引擎",
      subtitle: "这不仅仅是同步；这是升级您的整个客户支持基础设施。"
    },
    features: {
      sync: {
        title: "三向同步",
        description: "消息在您的手机、Seasalt Web仪表板和Seasalt移动应用之间即时同步。从任何地方发送，在任何地方查看。"
      },
      agents: {
        title: "无限代理",
        description: "突破4台设备限制。将10、50或100个代理添加到同一个WhatsApp号码。将对话无缝分配给人工代理或AI机器人。"
      },
      aiHandoff: {
        title: "AI代理交接",
        description: "启用AI代理在非工作时间处理平台上的咨询，同时在您的个人手机上监控结果。"
      },
      history: {
        title: "6个月历史导入",
        description: "不要从头开始。我们会自动拉取最近6个月的聊天记录，让您的团队立即获得完整上下文。"
      },
      mobileApp: {
        title: "Seasalt移动应用",
        description: "员工不需要访问您的实体手机。他们可以在自己的设备上使用Seasalt.ai应用，随时随地回复客户。"
      },
      unifiedInbox: {
        title: "统一收件箱",
        description: "在一个视图中结合WhatsApp与SMS、Messenger、LINE和Instagram。停止切换标签页，开始解决问题。"
      }
    }
  }
};

function addNewKeys(target, source) {
  if (!target.whatsappCoexistence) {
    target.whatsappCoexistence = {};
  }
  
  // Add each new section
  Object.keys(source).forEach(key => {
    target.whatsappCoexistence[key] = source[key];
  });
  
  return target;
}

function main() {
  // Update English file
  const enPath = path.join(localesDir, 'en.json');
  let enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
  enData = addNewKeys(enData, newEnglishKeys);
  fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + '\n', 'utf8');
  console.log('✓ Added new keys to en.json');
  
  // Update Chinese file
  const zhPath = path.join(localesDir, 'zh-CN.json');
  let zhData = JSON.parse(fs.readFileSync(zhPath, 'utf8'));
  zhData = addNewKeys(zhData, newChineseKeys);
  fs.writeFileSync(zhPath, JSON.stringify(zhData, null, 2) + '\n', 'utf8');
  console.log('✓ Added new keys to zh-CN.json');
  
  console.log('\n✅ Successfully added new i18n keys for:');
  console.log('  - SEO metadata');
  console.log('  - Problem Section');
  console.log('  - Solution Section');
  console.log('  - WhatIs Coexistence Section');
}

main();
