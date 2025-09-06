#!/usr/bin/env python3
"""Quality gate to detect residual English text in translated files."""
import json
import os
import re
from typing import Any, Dict, List, Set


# Protected terms that are allowed to remain in English
ALLOWED_ENGLISH_TERMS = {
    'seasalt.ai', 'seachat', 'seameet', 'seax', 'seahealth', 'seavoice',
    'whatsapp', 'facebook', 'instagram', 'line', 'sms', 'api', 'crm',
    'hipaa', 'soc', 'gdpr', 'tcpa', 'json', 'html', 'css', 'javascript',
    'twilio', 'hubspot', 'salesforce', 'shopify', 'wordpress', 'squarespace',
    'wix', 'mailchimp', 'mailerlite', 'meta', 'google', 'microsoft',
    'zoom', 'slack', 'discord', 'openai', 'chatgpt', 'gpt', 'ai', 'ml',
    'sdk', 'rest', 'oauth', 'ssl', 'tls', 'http', 'https', 'url', 'uri',
    'uuid', 'base64', 'jwt', 'xml', 'csv', 'pdf', 'png', 'jpg', 'jpeg',
    'gif', 'svg', 'mp3', 'mp4', 'avi', 'mov', 'zip', 'rar', '7z',
    'iphone', 'ipad', 'android', 'ios', 'macos', 'windows', 'linux',
    'chrome', 'firefox', 'safari', 'edge', 'opera', 'github', 'gitlab',
    'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'cdn', 'dns', 'vpn',
    'seattle', 'wa', 'usa', 'ca', 'smb', 'agent', '10dlc', '8xx', 'xxxxx',
    'clickable', 'dragable', 'hoverable', 'scrollable', 'responsive',
    'omnichannel', 'dashboard', 'workflow', 'automation', 'integration',
    'platform', 'analytics', 'real-time', '24/7', 'email', 'online',
    'offline', 'beta', 'demo', 'saas', 'ccaas', 'ucaas', 'finra',
    'widget', 'embed', 'iframe', 'pixel', 'retina', 'mobile', 'tablet',
    'desktop', 'browser', 'cache', 'cookie', 'session', 'token', 'hash'
}

# Common English words that might need manual review
COMMON_ENGLISH_WORDS = {
    'about', 'account', 'action', 'active', 'add', 'admin', 'advanced',
    'after', 'agent', 'all', 'also', 'amazing', 'analysis', 'and',
    'any', 'app', 'application', 'are', 'as', 'at', 'auto', 'available',
    'back', 'backup', 'based', 'basic', 'be', 'been', 'before', 'best',
    'better', 'between', 'big', 'both', 'build', 'built', 'business',
    'but', 'button', 'buy', 'by', 'call', 'campaign', 'can', 'card',
    'case', 'center', 'change', 'chat', 'check', 'choose', 'click',
    'client', 'close', 'code', 'collect', 'come', 'comment', 'common',
    'company', 'complete', 'configuration', 'connect', 'contact',
    'content', 'continue', 'control', 'conversation', 'convert', 'copy',
    'create', 'customer', 'customize', 'data', 'date', 'day', 'default',
    'delete', 'demo', 'design', 'desktop', 'detail', 'different', 'do',
    'document', 'done', 'down', 'download', 'each', 'easy', 'edit',
    'email', 'enable', 'end', 'engagement', 'enterprise', 'error',
    'event', 'every', 'example', 'experience', 'expert', 'export',
    'feature', 'field', 'file', 'filter', 'find', 'first', 'flow',
    'folder', 'follow', 'for', 'form', 'free', 'from', 'full',
    'function', 'general', 'generate', 'get', 'give', 'go', 'good',
    'great', 'group', 'grow', 'growth', 'guide', 'handle', 'has',
    'have', 'help', 'here', 'high', 'history', 'home', 'how', 'icon',
    'if', 'image', 'import', 'in', 'include', 'increase', 'info',
    'information', 'input', 'install', 'instant', 'integration',
    'interface', 'into', 'is', 'it', 'item', 'join', 'just', 'keep',
    'key', 'know', 'language', 'large', 'last', 'launch', 'lead',
    'learn', 'leave', 'left', 'level', 'like', 'limit', 'link',
    'list', 'live', 'load', 'local', 'location', 'log', 'login',
    'logout', 'look', 'lot', 'low', 'main', 'make', 'manage',
    'management', 'manual', 'marketing', 'match', 'max', 'maximum',
    'may', 'me', 'mean', 'member', 'menu', 'message', 'method',
    'min', 'minimum', 'mobile', 'mode', 'model', 'modify', 'more',
    'most', 'move', 'multiple', 'my', 'name', 'navigation', 'need',
    'new', 'next', 'no', 'not', 'note', 'notification', 'now',
    'number', 'of', 'off', 'offer', 'on', 'one', 'only', 'open',
    'option', 'or', 'order', 'organization', 'other', 'our', 'out',
    'over', 'overview', 'own', 'page', 'parameter', 'password', 'path',
    'payment', 'people', 'permission', 'personal', 'phone', 'photo',
    'picture', 'plan', 'please', 'point', 'policy', 'popular',
    'position', 'possible', 'post', 'power', 'premium', 'preview',
    'previous', 'price', 'pricing', 'primary', 'priority', 'private',
    'problem', 'process', 'product', 'professional', 'profile',
    'project', 'property', 'provide', 'public', 'publish', 'purchase',
    'put', 'quality', 'question', 'quick', 'quote', 'rate', 'rating',
    'read', 'ready', 'real', 'receive', 'recent', 'record', 'redirect',
    'reference', 'refresh', 'region', 'register', 'related', 'remove',
    'repeat', 'replace', 'reply', 'report', 'request', 'require',
    'reset', 'resource', 'response', 'result', 'return', 'review',
    'right', 'role', 'room', 'rule', 'run', 'sale', 'sales', 'same',
    'save', 'scale', 'schedule', 'screen', 'script', 'search',
    'second', 'section', 'security', 'see', 'select', 'send',
    'service', 'session', 'set', 'setting', 'setup', 'share', 'show',
    'sign', 'simple', 'single', 'site', 'size', 'small', 'social',
    'software', 'solution', 'some', 'source', 'space', 'special',
    'specific', 'standard', 'start', 'state', 'status', 'step',
    'stop', 'store', 'style', 'submit', 'success', 'support',
    'switch', 'sync', 'system', 'table', 'tag', 'take', 'task',
    'team', 'technical', 'technology', 'template', 'term', 'test',
    'text', 'than', 'that', 'the', 'then', 'there', 'these', 'they',
    'thing', 'this', 'those', 'through', 'time', 'tip', 'title',
    'to', 'today', 'toggle', 'tool', 'top', 'total', 'track',
    'traffic', 'training', 'transfer', 'try', 'type', 'up', 'update',
    'upload', 'url', 'use', 'user', 'using', 'value', 'variable',
    'version', 'video', 'view', 'visit', 'way', 'we', 'web', 'website',
    'week', 'welcome', 'well', 'what', 'when', 'where', 'which',
    'while', 'who', 'why', 'will', 'with', 'work', 'workflow',
    'world', 'would', 'write', 'year', 'yes', 'you', 'your', 'zone'
}


def extract_string_values(data: Any, path: str = "") -> List[str]:
    """Extract all string values from JSON structure with their paths."""
    strings = []
    if isinstance(data, dict):
        for key, value in data.items():
            current_path = f"{path}.{key}" if path else key
            strings.extend(extract_string_values(value, current_path))
    elif isinstance(data, list):
        for i, item in enumerate(data):
            current_path = f"{path}[{i}]"
            strings.extend(extract_string_values(item, current_path))
    elif isinstance(data, str):
        strings.append((path, data))
    return strings


def is_english_word(word: str) -> bool:
    """Check if a word is likely English."""
    word_lower = word.lower().strip('.,!?;:"()[]{}')
    
    # Skip if it's a protected/allowed term
    if word_lower in ALLOWED_ENGLISH_TERMS:
        return False
    
    # Skip numbers, single characters, or very short strings
    if len(word_lower) <= 2 or word_lower.isdigit():
        return False
    
    # Skip common symbols or technical strings
    if any(char in word_lower for char in ['@', '.', '/', '\\', ':', '_']):
        return False
    
    # Check if it's a common English word
    return word_lower in COMMON_ENGLISH_WORDS


def find_english_text(text: str, path: str) -> List[str]:
    """Find potentially untranslated English text in a string."""
    if not isinstance(text, str):
        return []
    
    # Skip if it looks like a URL, email, or technical string
    if any(indicator in text.lower() for indicator in [
        'http', 'www.', '.com', '.net', '.org', '@', '{{', '}}'
    ]):
        return []
    
    # Extract words and check them
    words = re.findall(r'\b[a-zA-Z]{3,}\b', text)
    english_words = [word for word in words if is_english_word(word)]
    
    if english_words:
        return [f"{path}: '{text}' contains English words: {english_words}"]
    
    return []


def check_translation_quality(file_path: str) -> List[str]:
    """Check a translated JSON file for residual English text."""
    issues = []
    
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    string_values = extract_string_values(data)
    
    for path, text in string_values:
        issues.extend(find_english_text(text, path))
    
    return issues


def main() -> None:
    """Main quality check function."""
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    all_issues = []
    
    # Check all translated parts
    for part_num in range(1, 6):
        file_path = f"public/locales/fil_part{part_num}_translated.json"
        print(f"Checking {file_path}...")
        
        issues = check_translation_quality(file_path)
        if issues:
            all_issues.extend(issues)
            print(f"  Found {len(issues)} potential issues")
        else:
            print("  ✓ No issues found")
    
    print(f"\nQuality Check Summary:")
    print(f"Total potential issues: {len(all_issues)}")
    
    if all_issues:
        print("\nPotential issues found:")
        for issue in all_issues[:20]:  # Show first 20 issues
            print(f"  - {issue}")
        
        if len(all_issues) > 20:
            print(f"  ... and {len(all_issues) - 20} more issues")
        
        print("\nNote: These may include false positives.")
        print("Review manually before proceeding.")
    else:
        print("✓ No obvious English text detected in translated files")


if __name__ == "__main__":
    main()
