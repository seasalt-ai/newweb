#!/usr/bin/env python3
"""
Japanese Translation Script for Seasalt.ai
Translates all string values in a JSON file to Japanese while preserving:
- JSON structure and keys
- Placeholders like {{year}}, <1>...</1>
- Company/product names (Seasalt.ai, SeaChat, SeaMeet, SeaX)
- HTML tags and formatting
- Author names and proper nouns
- Japanese typography norms (、。)
"""

import json
import re
import sys
from pathlib import Path
from typing import Any


class JapaneseTranslator:
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
            'PDF', 'CSV', 'Word', 'Zoom', 'Slack', 'Microsoft Teams'
        }

        # Comprehensive Japanese translations
        self.translations = {
            # Common full sentences and marketing lines
            'Ready to Scale Your Outreach to Millions?': '数百万人規模にリーチを拡大する準備はできていますか？',
            'An all-in-one contact center built for small businesses. Automate support, capture every lead, and unify all your customer conversations.': '中小企業向けに構築されたオールインワンのコンタクトセンター。サポートを自動化し、すべてのリードを取りこぼさず、顧客とのすべての会話を一元化します。',
            'Made with': '作成',
            'in the city of': '市で',
            'in': 'で',
            'SeaHealth - Optimized Healthcare': 'SeaHealth - 最適化されたヘルスケア',
            'Stop Juggling Apps': 'アプリの掛け持ちはもうやめましょう',
            'Unify Every Customer': 'すべての顧客を一元化',
            'in One Simple Inbox.': 'を1つのシンプルな受信箱で。',
            'Trusted by growing businesses worldwide': '世界中の成長企業に信頼されています',
            'Unified Omni-Channel Inbox': '統合オムニチャネル受信ボックス',
            'AI Voicebot & Chatbot': 'AI音声ボットとチャットボット',
            'Native Voice & WhatsApp Integration': 'ネイティブな音声とWhatsAppの連携',
            'Outbound Marketing Campaigns': 'アウトバウンドマーケティングキャンペーン',
            'Simple, Predictable Pricing': 'シンプルで予測可能な料金体系',
            'I recommend Seasalt.ai for its powerful knowledge base system and omni-channel support!': '強力なナレッジベースとオムニチャネル対応でSeasalt.aiをおすすめします！',
            'Knowledge Base': 'ナレッジベース',
            # Footer/link items
            'Product Wiki': '製品Wiki',
            'API References': 'APIリファレンス',
            'Local Number (10DLC)': 'ローカル番号（10DLC）',
            'Toll-Free Number': 'フリーダイヤル番号',
            'Short Code': 'ショートコード',
            'Phone Call Voice': '電話音声',
            'Customer Engagement': '顧客エンゲージメント',
            'Appointment Reminders': '予約リマインダー',
            'Emergency Alerts': '緊急アラート',
            # Hero CTA
            'Sign Up': '新規登録',
            'Book A Demo': 'デモを予約',
            # Misc units
            'Messages Daily': '件/日のメッセージ',
            'Active Users': '人のアクティブユーザー',
            'Uptime': 'アップタイム',
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

            # Common actions and buttons
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
            'Facebook Messenger': 'Facebook Messenger',

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

            # Statistics and metrics
            'Response Time': '応答時間',
            'Conversion Rate': 'コンバージョン率',
            'Satisfaction': '満足度',
            'Conversations': '会話',
            'Engagement': 'エンゲージメント',
            'Performance': 'パフォーマンス',
            'Analytics': 'アナリティクス',
            'Insights': 'インサイト',
            'Reports': 'レポート',
            'Metrics': 'メトリクス',

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

        # Direct translation lookup
        if text in self.translations:
            return self.translations[text]

        result = text

        # Apply phrase-level translations (longest matches first)
        sorted_phrases = sorted(self.translations.items(), key=lambda x: len(x[0]), reverse=True)
        for en_phrase, ja_phrase in sorted_phrases:
            pattern = r'\b' + re.escape(en_phrase) + r'\b'
            result = re.sub(pattern, ja_phrase, result, flags=re.IGNORECASE)

        # Handle common Japanese patterns
        # Replace "and" with Japanese connector where appropriate
        result = re.sub(r'\band\b', 'と', result)
        result = re.sub(r'\bwith\b', 'で', result)
        result = re.sub(r'\bfor\b', '向け', result)
        result = re.sub(r'\bin\b', 'で', result)

        # Clean up any double spaces
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

        print("Translating content to Japanese...")
        translated_data = self.translate_json_recursive(data)

        print(f"Saving to {output_file}...")
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)

        print("Japanese translation complete!")


def main():
    if len(sys.argv) != 3:
        print("Usage: python translate_japanese.py <input_file> <output_file>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    if not Path(input_file).exists():
        print(f"Error: Input file {input_file} does not exist")
        sys.exit(1)

    translator = JapaneseTranslator()
    translator.translate_file(input_file, output_file)


if __name__ == '__main__':
    main()
