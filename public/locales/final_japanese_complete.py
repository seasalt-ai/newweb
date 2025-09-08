#!/usr/bin/env python3
import json
import re

def translate_to_japanese():
    # Load the file
    with open('ja.json', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Comprehensive translation mapping - every English phrase to Japanese
    translations = {
        # Mixed phrases that appear in the file
        'で minutes, not months': 'を数分で、数か月ではありません',
        'No complex': '複雑な',
        'or technical knowledge required': 'や技術的知識は必要ありません',
        'Set up AI に handle': 'AIを設定して処理',
        'common questions like': 'よくある質問、例えば',
        "Where's my order?": '私の注文はどこですか？',
        'と book appointments automatically': 'そして予約を自動的に取る',
        'あなたの team sees': 'あなたのチームは見ることができます',
        '完全な conversation history': '完全な会話履歴を',
        'when customers switch from': '顧客が切り替える時',
        'に 電話通話': 'から電話通話へ',
        'で under 5 minutes': 'を5分以内で',
        
        # Common English words that appear mixed with Japanese
        'Steps': 'ステップ',
        'Work': 'ワーク',
        'Team': 'チーム',
        'Business': 'ビジネス',
        'Platform': 'プラットフォーム',
        'System': 'システム',
        'Tool': 'ツール',
        'Service': 'サービス',
        'Support': 'サポート',
        'Management': 'マネジメント',
        'Operations': 'オペレーション',
        'Campaign': 'キャンペーン',
        'Campaigns': 'キャンペーン',
        'Launch': 'ローンチ',
        'Deploy': 'デプロイ',
        'Setup': 'セットアップ',
        'Configuration': '設定',
        'Integration': 'インテグレーション',
        'Automation': '自動化',
        'Performance': 'パフォーマンス',
        'Analytics': 'アナリティクス',
        'Insights': 'インサイト',
        'Reports': 'レポート',
        'Dashboard': 'ダッシュボード',
        'Overview': '概要',
        'Review': 'レビュー',
        'Demo': 'デモ',
        'Trial': 'トライアル',
        'Plan': 'プラン',
        'Pricing': '料金',
        'Features': '機能',
        'Benefits': 'メリット',
        'Solutions': 'ソリューション',
        'Products': '製品',
        'Channels': 'チャンネル',
        'Industries': '業界',
        'Companies': '企業',
        'Customers': '顧客',
        'Users': 'ユーザー',
        'Agents': 'エージェント',
        'Employees': '従業員',
        'Members': 'メンバー',
        'Partners': 'パートナー',
        'Clients': 'クライアント',
        
        # Phrases with mixed English/Japanese
        'number': '番号',
        'minutes': '分',
        'hours': '時間',
        'days': '日',
        'weeks': '週',
        'months': 'か月',
        'years': '年',
        'daily': '日次',
        'weekly': '週次',
        'monthly': '月次',
        'yearly': '年次',
        
        # Action words
        'reach': 'リーチ',
        'more': 'より多くの',
        'generate': '生成',
        'leads': 'リード',
        'grow': '成長',
        'faster': 'より速く',
        'better': 'より良い',
        'best': '最高の',
        'top': 'トップ',
        'new': '新しい',
        'latest': '最新の',
        'advanced': '高度な',
        'professional': 'プロフェッショナル',
        'enterprise': 'エンタープライズ',
        'premium': 'プレミアム',
        'standard': 'スタンダード',
        'basic': 'ベーシック',
        'free': '無料',
        'trial': 'トライアル',
        
        # Fill in specific problematic phrases
        'ultimate platform': '究極のプラットフォーム',
        'sending millions': '数百万件の送信',
        'Fill あなたの pipeline': 'あなたのパイプラインを満たし',
        'drive revenue': '収益を向上させ',
        'スケール あなたの business': 'あなたのビジネスを拡大',
        
        # Fix remaining mixed text
        'companies using': '企業が使用している',
        'Unify あなたの': 'あなたを統一',
        'で One シンプル Inbox': 'を1つのシンプルな受信箱で',
        'Routine': '定型的な',
        
        # Long phrases that need complete translation
        'The ultimate platform 向け sending millions の SMS, WhatsApp メッセージ, と 自動化された 電話通話. Fill あなたの pipeline, drive revenue, と スケール あなたの business.': '数百万件のSMS、WhatsAppメッセージ、自動化された電話通話を送信するための究極のプラットフォーム。パイプラインを満たし、収益を向上させ、ビジネスを拡大します。',
        
        ' 数千の企業に参加 の companies using SeaX に reach more customers, 生成 more leads, と 成長 faster.': 'SeaXを使ってより多くの顧客にリーチし、より多くのリードを生成し、より速く成長する数千の企業に参加しましょう。',
        
        'Reach millions instantly. ultimate platform 向け sending millions の SMS, WhatsApp メッセージ, と 自動化された 電話通話. Fill あなたの pipeline, drive revenue, と スケール あなたの business.': '数百万人に即座にリーチ。数百万件のSMS、WhatsAppメッセージ、自動化された電話通話を送信するための究極のプラットフォーム。パイプラインを満たし、収益を向上させ、ビジネスを拡大します。'
    }
    
    # Apply translations
    for en, jp in translations.items():
        content = content.replace(f'"{en}"', f'"{jp}"')
        content = content.replace(en, jp)
    
    # Additional cleanup for remaining English patterns
    content = re.sub(r'\b([A-Z][a-z]+)\b(?!["\s]*:)', lambda m: {
        'Business': 'ビジネス',
        'Platform': 'プラットフォーム', 
        'System': 'システム',
        'Service': 'サービス',
        'Management': 'マネジメント',
        'Campaign': 'キャンペーン',
        'Review': 'レビュー',
        'Agent': 'エージェント',
        'Customer': '顧客',
        'Company': '会社',
        'Team': 'チーム',
        'Plan': 'プラン'
    }.get(m.group(1), m.group(1)), content)
    
    # Save the file
    with open('ja.json', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Complete Japanese translation applied!")

if __name__ == '__main__':
    translate_to_japanese()
