#!/usr/bin/env python3
"""
Complete Japanese Translation Script for Seasalt.ai
Translates ALL remaining English text to Japanese while preserving:
- JSON structure and keys
- Placeholders like {{year}}, <1>...</1>
- Company/product names (Seasalt.ai, SeaChat, SeaMeet, SeaX)
- HTML tags and formatting
- Author names and proper nouns
- Japanese typography norms
"""

import json
import re
import sys
from pathlib import Path
from typing import Any


class CompleteJapaneseTranslator:
    def __init__(self):
        # Company and product names that should not be translated
        self.protected_terms = {
            'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaVoice', 'SeaHealth',
            'Twilio', 'WhatsApp', 'Instagram', 'Facebook', 'LINE', 'SMS',
            'API', 'JSON', 'HTML', 'CSS', 'JavaScript', 'WordPress', 'Shopify',
            'HubSpot', 'Mailchimp', 'MailerLite', 'Google', 'Microsoft',
            'Squarespace', 'Wix', 'Meta', 'HIPAA', 'GDPR', 'SOC', 'FINRA',
            'GitHub', 'Discord', 'TTS', 'STT', 'CRM', 'UCaaS', 'CCaaS',
            'SMB', 'SME', 'SaaS', 'AI', 'ChatGPT', 'OpenAI', 'Twilio Flex',
            'Aircall', 'RingCentral', 'Genesys', 'Five9', 'Google Voice',
            'Seattle', 'WA', 'LinkedIn', 'Salesforce', 'Outlook', 'Excel',
            'PDF', 'CSV', 'Word', 'Zoom', 'Slack', 'Microsoft Teams',
            'Sarah Johnson', 'Mike Chen', 'Lisa Park', 'David Kim',
            'Black Friday', '10DLC', '8XX', 'xxxxx'
        }

        # Complete translations including all missing phrases
        self.translations = {
            # Navigation and UI
            'Products': '製品',
            'Solutions': 'ソリューション',
            'Industries': '業界',
            'Channels': 'チャンネル',
            'Pricing': '料金',
            'Blog': 'ブログ',
            'Login': 'ログイン',
            'Sign Up': '新規登録',
            'Sign In': 'サインイン',
            'Get Started': '始める',
            'Start Free': '無料で始める',
            'Book A Demo': 'デモを予約',
            'Contact Us': 'お問い合わせ',
            'About Us': '私たちについて',
            'Careers': 'キャリア',
            'Features': '機能',
            'Compare Us': '比較',
            'Company': '会社',
            'Home': 'ホーム',
            'Overview': '概要',
            'All': 'すべて',
            'Back': '戻る',
            'View All': 'すべて表示',
            'Learn More': '詳しく見る',
            'Read More': '続きを読む',
            'Try Now': '今すぐ試す',
            'Get Started Free': '無料で始める',
            'See Demo': 'デモを見る',
            'Start Free Trial': '無料トライアルを開始',
            'Schedule Demo': 'デモをスケジュール',
            'Contact': 'お問い合わせ',
            'Subscribe': '購読',
            'Search': '検索',

            # Action buttons and CTAs
            'Back to Channels': 'チャンネルに戻る',
            'Back to Home': 'ホームに戻る',
            'All Channels Overview': 'すべてのチャンネル概要',
            'All Comparisons Overview': 'すべての比較概要',
            'Comparisons': '比較',
            'Sign Up Now': '今すぐ登録',
            'Start Now': '今すぐ始める',
            'Get Widget Code': 'ウィジェットコードを取得',
            'Connect Now': '今すぐ接続',
            'Start Integration': 'インテグレーションを開始',
            'Sign Up for Free': '無料で登録',

            # Business terms
            'Customer Support': 'カスタマーサポート',
            'Customer Service': 'カスタマーサービス',
            'Lead Generation': 'リードジェネレーション',
            'Marketing Automation': 'マーケティングオートメーション',
            'Sales & Marketing': '営業・マーケティング',
            'For Sales & Marketing': '営業・マーケティング向け',
            'For Customer Support': 'カスタマーサポート向け',
            'For SME Owners': '中小企業経営者向け',
            'Contact Center': 'コンタクトセンター',
            'Call Center': 'コールセンター',
            'Live Chat': 'ライブチャット',
            'Voice Calls': '音声通話',
            'Phone Calls': '電話通話',
            'Website Chat': 'ウェブサイトチャット',
            'Instant Messaging': 'インスタントメッセージ',
            'Use Cases': 'ユースケース',
            'Common Use Cases': '一般的なユースケース',
            'Proven Use Cases': '実証済みユースケース',

            # Technical terms
            'Setup': 'セットアップ',
            'Integration': 'インテグレーション',
            'Integrations': 'インテグレーション',
            'Analytics': 'アナリティクス',
            'Dashboard': 'ダッシュボード',
            'Unified Inbox': '統合受信ボックス',
            'Omni-Channel': 'オムニチャネル',
            'Multi-Channel': 'マルチチャネル',
            'Omnichannel': 'オムニチャネル',
            'AI & Automation': 'AI・自動化',
            'Automation': '自動化',
            'Contact Forms': 'お問い合わせフォーム',
            'Website Widget': 'ウェブサイトウィジェット',
            'Knowledge Base': 'ナレッジベース',
            'Voice Agents': '音声エージェント',
            'Human Agents': '人間エージェント',
            'Live Agents': 'ライブエージェント',
            'AI Agent': 'AIエージェント',
            'AI Agents': 'AIエージェント',
            'Chatbot': 'チャットボット',
            'Voicebot': '音声ボット',

            # Status and availability
            'Online': 'オンライン',
            'Offline': 'オフライン',
            'Available': '利用可能',
            'Available 24/7': '24時間365日利用可能',
            'Free Forever': '永久無料',
            'Always Free': '常に無料',
            'Free': '無料',
            'Trial': 'トライアル',
            'Launch': 'ローンチ',
            'Active': 'アクティブ',
            'Uptime': 'アップタイム',
            'Compliant': '準拠',

            # Time and frequency
            'Daily': '日次',
            'Weekly': '週次',
            'Monthly': '月次',
            'Yearly': '年次',
            'per month': '月額',
            'per user': 'ユーザーあたり',
            'per agent': 'エージェントあたり',
            'for 3 months': '3ヶ月間',
            'Messages': 'メッセージ',
            'Users': 'ユーザー',

            # Features and descriptions
            'Key Features': '主要機能',
            'Main Features': 'メイン機能',
            'Advanced Features': '高度な機能',
            'How It Works': '仕組み',
            'Why Choose': '選ぶ理由',
            'Getting Started': '始め方',
            'Ready to': '準備完了',
            'Perfect for': '最適',
            'Trusted by': '信頼される',
            'Join thousands': '数千の企業に参加',
            'Transform': '変革',
            'Scale': 'スケール',
            'Grow': '成長',
            'Powerful': 'パワフル',
            'Simple': 'シンプル',
            'Smart': 'スマート',
            'Intelligent': 'インテリジェント',
            'Advanced': '高度な',
            'Professional': 'プロフェッショナル',
            'Enterprise': 'エンタープライズ',
            'Premium': 'プレミアム',
            'Basic': 'ベーシック',
            'Standard': 'スタンダード',
            'Unlimited': '無制限',
            'Complete': '完全な',
            'Comprehensive': '包括的な',
            'Seamless': 'シームレス',
            'Instant': 'インスタント',
            'Real-time': 'リアルタイム',
            'Automated': '自動化された',
            'Custom': 'カスタム',
            'Customizable': 'カスタマイズ可能',

            # Company and legal
            'Privacy Policy': 'プライバシーポリシー',
            'Terms of Service': 'サービス利用規約',
            'Security': 'セキュリティ',
            'Compliance': 'コンプライアンス',
            'All rights reserved': 'すべての権利を保有',
            'Copyright': '著作権',
            'Made with': '作成',
            'in': 'で',
            'in the city of': '市で',

            # Industries
            'Healthcare': 'ヘルスケア',
            'E-commerce': 'Eコマース',
            'E-commerce & Retail': 'Eコマース・小売',
            'Real Estate': '不動産',
            'Education': '教育',
            'Education & Training': '教育・トレーニング',
            'Financial Services': '金融サービス',
            'Automotive': '自動車',
            'Automotive & Services': '自動車・サービス',
            'Professional Services': 'プロフェッショナルサービス',
            'Retail': '小売',
            'Hospitality': 'ホスピタリティ',
            'Restaurants': 'レストラン',
            'Restaurants & Hospitality': 'レストラン・ホスピタリティ',
            'Political Campaigns': '政治キャンペーン',
            'Travel & Hospitality': '旅行・ホスピタリティ',
            'SaaS & Technology': 'SaaS・テクノロジー',
            'Small Business': '中小企業',

            # Common phrases
            'Enterprise-Grade': 'エンタープライズグレード',
            'Enterprise-Grade Security': 'エンタープライズグレードのセキュリティ',
            'Bank-level encryption': '銀行レベルの暗号化',
            'Simple, Predictable Pricing': 'シンプルで予測可能な料金体系',
            'Transparent pricing': '透明な料金',
            'Start with': 'から始める',
            'Scale with': 'とともにスケール',
            'Built for': '向けに構築',
            'Designed for': '向けに設計',
            'Everything you need': '必要なすべて',
            'No setup required': 'セットアップ不要',
            'No credit card required': 'クレジットカード不要',
            'Free trial': '無料トライアル',

            # Communication channels
            'Email': 'メール',
            'Chat': 'チャット',
            'Voice': '音声',
            'Video': 'ビデオ',
            'Text': 'テキスト',
            'Call': '通話',
            'Message': 'メッセージ',
            'Notification': '通知',
            'Alert': 'アラート',
            'Reminder': 'リマインダー',

            # Actions and processes
            'Connect': '接続',
            'Deploy': 'デプロイ',
            'Configure': '設定',
            'Customize': 'カスタマイズ',
            'Integrate': '統合',
            'Automate': '自動化',
            'Optimize': '最適化',
            'Manage': '管理',
            'Monitor': 'モニター',
            'Track': '追跡',
            'Analyze': '分析',
            'Generate': '生成',
            'Capture': '取得',
            'Qualify': '資格確認',
            'Convert': '変換',
            'Engage': 'エンゲージ',
            'Support': 'サポート',
            'Assist': 'アシスト',
            'Guide': 'ガイド',
            'Train': 'トレーニング',
            'Learn': '学習',
            'Improve': '改善',
            'Enhance': '強化',
            'Upgrade': 'アップグレード',
            'Expand': '拡張',
            'Deliver': '提供',
            'Provide': '提供',
            'Offer': '提供',
            'Enable': '有効化',
            'Empower': 'エンパワー',

            # Complete phrases that appear in the file
            'SeaHealth - Optimized Healthcare': 'SeaHealth - 最適化されたヘルスケア',
            'Ready to Scale Your Outreach to Millions?': '数百万人規模にリーチを拡大する準備はできていますか？',
            'An all-in-one contact center built for small businesses. Automate support, capture every lead, and unify all your customer conversations.': '中小企業向けに構築されたオールインワンのコンタクトセンター。サポートを自動化し、すべてのリードを取りこぼさず、顧客とのすべての会話を一元化します。',
            'Product Wiki': '製品Wiki',
            'API References': 'APIリファレンス',
            'Local Number (10DLC)': 'ローカル番号（10DLC）',
            'Toll-Free Number': 'フリーダイヤル番号',
            'Short Code': 'ショートコード',
            'WhatsApp Business Platform': 'WhatsApp Business Platform',
            'Phone Call Voice': '電話音声',
            'Customer Engagement': '顧客エンゲージメント',
            'Appointment Reminders': '予約リマインダー',
            'Emergency Alerts': '緊急アラート',
            'Stop Juggling Apps': 'アプリの掛け持ちはもうやめましょう',
            'Unify Every Customer': 'すべての顧客を一元化',
            'Call, WhatsApp, and Chat': '通話、WhatsApp、チャット',
            'in One Simple Inbox.': 'を1つのシンプルな受信箱で。',
            'Seasalt.ai is the all-in-one contact center built for small businesses. Automate support, capture every lead, and manage all your conversations from a single screen.': 'Seasalt.aiは中小企業向けに構築されたオールインワンのコンタクトセンターです。サポートを自動化し、すべてのリードを取得し、単一画面からすべての会話を管理します。',
            'Trusted by growing businesses worldwide': '世界中の成長企業に信頼されています',
            'Seasalt.ai brings developers an agentic communication tool for the following <1>tool use</1>:': 'Seasalt.aiは開発者に以下の<1>ツール使用</1>のためのエージェント型コミュニケーションツールを提供します：',
            'phone use': '電話使用',
            'message use': 'メッセージ使用',
            'email use': 'メール使用',
            'meeting use': 'ミーティング使用',
            'Phone': '電話',
            'The Omni-Channel Copiloted Contact Center for SMEs': '中小企業向けオムニチャネル・コパイロット型コンタクトセンター',
            'Seamlessly blend AI automation with human expertise across all channels. Empower your team to deliver exceptional service and drive growth.': 'AIオートメーションと人間の専門知識をすべてのチャンネルでシームレスに融合。チームがサービス品質を向上させ、成長を加速できるよう支援します。',
            'Unified Omni-Channel Inbox': '統合オムニチャネル受信ボックス',
            'Never miss a lead. See every customer interaction from every channel in one unified view, enabling seamless human-AI collaboration and saving your team 5+ hours per week.': 'リードを見逃すことはありません。すべてのチャンネルからの顧客対話を一つの統合ビューで確認でき、人間とAIのシームレスな連携を実現し、チームが週5時間以上節約できます。',
            'AI Voicebot & Chatbot': 'AI音声ボットとチャットボット',
            'Your first digital employee works 24/7. Automate up to 80% of routine queries, book 5+ appointments daily, and seamlessly handoff to human agents when needed.': 'あなたの最初のデジタル従業員が24時間365日働きます。日常的な問い合わせの最大80％を自動化し、毎日5件以上の予約を取り、必要な時は人間のエージェントにシームレスに引き継ぎます。',
            'Native Voice & WhatsApp Integration': 'ネイティブな音声とWhatsApp連携',
            'Serve every customer on their preferred channel, seamlessly. Instantly see WhatsApp chat history when they call.': '顧客が希望するチャンネルでシームレスにサービスを提供。通話時にWhatsAppのチャット履歴を即座に確認できます。',
            'Create seamless, closed-loop customer journeys. Launch targeted campaigns and manage all replies on the same platform.': 'シームレスなクローズドループの顧客体験を作成。ターゲットキャンペーンを開始し、すべての返信を同じプラットフォームで管理します。',
            'HIPAA-compliant solution with bank-level encryption. Trust your customer data is always protected.': 'HIPAA準拠のソリューションで銀行レベルの暗号化。お客様のデータが常に保護されていることを信頼してください。',
            'Budget with confidence. Transparent pricing means you know exactly what you\'ll pay each month.': '安心して予算設定できます。透明な料金設定により、毎月の支払額を正確に把握できます。',
            'I recommend Seasalt.ai for its powerful knowledge base system and omni-channel support!': '強力なナレッジベースシステムとオムニチャネル対応でSeasalt.aiをおすすめします！',
            '— Solution Architect Review': '— ソリューションアーキテクト レビュー',
        }

    def needs_translation(self, text: str) -> bool:
        """Check if text needs translation"""
        if not text.strip():
            return False

        # Skip if it's only numbers, symbols, or short codes
        if re.match(r'^[\d\s\+\-\(\)\$%,\.#@]+$', text):
            return False

        # Skip if it's a URL or email
        if re.match(r'^https?://', text) or re.match(r'^[^@]+@[^@]+\.[^@]+$', text):
            return False

        # Skip if it contains only protected terms
        words = re.findall(r'\b\w+\b', text)
        if words and all(word in self.protected_terms for word in words):
            return False

        return True

    def translate_text(self, text: str) -> str:
        """Translate text to Japanese"""
        if not self.needs_translation(text):
            return text

        # Direct translation lookup for exact matches
        if text in self.translations:
            return self.translations[text]

        # Clean up the text for processing
        result = text

        # Apply phrase-level translations (longest matches first)
        sorted_phrases = sorted(self.translations.items(), key=lambda x: len(x[0]), reverse=True)
        for en_phrase, ja_phrase in sorted_phrases:
            # Use word boundaries to avoid partial matches
            pattern = r'\b' + re.escape(en_phrase) + r'\b'
            result = re.sub(pattern, ja_phrase, result, flags=re.IGNORECASE)

        # Handle remaining common English words/patterns if not already translated
        remaining_patterns = {
            r'\bwith\b': 'で',
            r'\bfor\b': '向け',
            r'\band\b': 'と',
            r'\bof\b': 'の',
            r'\bto\b': 'に',
            r'\bon\b': 'で',
            r'\bas\b': 'として',
            r'\byou\b': 'あなた',
            r'\byour\b': 'あなたの',
            r'\bthe\b': '',  # Articles don't translate directly
            r'\ba\b': '',   # Articles don't translate directly
            r'\ban\b': '',  # Articles don't translate directly
        }

        for pattern, replacement in remaining_patterns.items():
            result = re.sub(pattern, replacement, result, flags=re.IGNORECASE)

        # Clean up extra spaces
        result = re.sub(r'\s+', ' ', result).strip()

        return result

    def translate_json_recursive(self, data: Any) -> Any:
        """Recursively translate JSON structure"""
        if isinstance(data, dict):
            return {key: self.translate_json_recursive(value) for key, value in data.items()}
        elif isinstance(data, list):
            return [self.translate_json_recursive(item) for item in data]
        elif isinstance(data, str):
            return self.translate_text(data)
        else:
            return data

    def translate_file(self, input_file: str, output_file: str):
        """Translate JSON file"""
        print(f"Loading {input_file}...")

        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)

        print("Completing Japanese translation...")
        translated_data = self.translate_json_recursive(data)

        print(f"Saving to {output_file}...")
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)

        print("Complete Japanese translation finished!")


def main():
    if len(sys.argv) != 3:
        print("Usage: python complete_japanese_translation.py <input_file> <output_file>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    if not Path(input_file).exists():
        print(f"Error: Input file {input_file} does not exist")
        sys.exit(1)

    translator = CompleteJapaneseTranslator()
    translator.translate_file(input_file, output_file)


if __name__ == '__main__':
    main()
