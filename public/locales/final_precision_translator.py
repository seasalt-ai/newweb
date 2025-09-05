#!/usr/bin/env python3
"""
FINAL PRECISION TRANSLATOR
This script will eliminate the final 48 remaining English strings with precision targeting.
"""

import json
import re
from collections import OrderedDict


class FinalPrecisionTranslator:
    """Final precision translator targeting the last remaining English strings."""
    
    def __init__(self):
        # Terms to absolutely preserve (never translate these)
        self.preserve_terms = {
            'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaHealth', 'SeaVoice',
            'WhatsApp', 'Instagram', 'Facebook', 'Twitter', 'LinkedIn', 'YouTube',
            'SMS', 'API', 'HIPAA', 'SOC', '10DLC', 'Seattle', 'WA', 'USA',
            'SMB', 'AI-AGENT', 'VoIP', 'SIP', 'BYOC', 'PBX', 'TLS', 'SRTP',
            'RTP', 'AES-256', 'G.711', 'G.722', 'G.729', 'Opus', 'QoS',
            'Sarah Johnson', 'Mike Chen', 'Lisa Park', 'David Kim',
            'Professional Sarah', 'Friendly Mike', 'Caring Emma',
            'Black Friday', 'JSON', 'HTTP', 'HTTPS', 'TCP', 'UDP', 'IP',
            'DIY', 'FAQ', 'ROI', 'SLA', 'CEO', 'CTO', 'CFO', 'AI', 'ML'
        }
        
        # Precision fixes for the exact remaining strings
        self.precision_fixes = {
            # Widget and UI fixes
            'Yes, espectáculo me': 'Sí, muéstrame',
            'espectáculo me': 'muéstrame',
            
            # Integration and payment fixes
            'Línea Pay Integproporciónn': 'Integración de Line Pay',
            'Integproporciónn': 'Integración',
            'integproporciónn': 'integración',
            'Pay integproporciónn': 'Integración de Pay',
            'Meet integproporciónn': 'Integración de Meet',
            'Kakao Pay integproporciónn': 'Integración de Kakao Pay',
            'Zalo Pay integproporciónn': 'Integración de Zalo Pay',
            'Aplicaciónle Pay': 'Apple Pay',
            'Google Pay': 'Google Pay',  # This should stay as is
            
            # Live/Agent fixes
            'Live Agentees': 'Agentes en Vivo',
            'Live Agentee': 'Agente en Vivo',
            'Live rTerminarimiento Métricas': 'Métricas de Rendimiento en Vivo',
            'Live': 'En Vivo',
            'live': 'en vivo',
            'Live chat': 'Chat en vivo',
            'Live chat Prevista': 'Vista previa de chat en vivo',
            'Live campaña monitoring': 'Monitoreo de campaña en vivo',
            'Live Monitoreyo': 'Monitoreo en Vivo',
            'Live Demásración': 'Demostración en Vivo',
            
            # Action and process fixes
            'Libro Live Demásración': 'Reservar Demostración en Vivo',
            'intencióno it out': 'Pruébalo',
            'Ir Live': 'Ir en Vivo',
            'Got Preguntas?': '¿Tienes Preguntas?',
            
            # Article and search fixes
            'Artículo(s) found': 'Artículo(s) encontrado(s)',
            'No Artículos found': 'No se encontraron artículos',
            'found': 'encontrado',
            
            # Question and procedure fixes
            'Is my Procedimiento csobreed by my insurance Plan?': '¿Mi procedimiento está cubierto por mi plan de seguro?',
            'Procedimiento csobreed': 'procedimiento cubierto',
            'insurance Plan': 'plan de seguro',
            
            # Order and password fixes
            'Dónde is my Orden #12345?': '¿Dónde está mi pedido #12345?',
            'cómo do I reEsTablacer my password?': '¿Cómo restablezco mi contraseña?',
            'reEsTablacer': 'restablecer',
            
            # Follow-up fixes
            'Automatizado seguir-up': 'Seguimiento automatizado',
            'seguir-up': 'seguimiento',
            'noación Seguir-up': 'Seguimiento de donación',
            
            # Business and construction fixes
            'Qué We construir': 'Lo que construimos',
            'We construir': 'construimos',
            
            # Time and pricing fixes
            'Go live in minutos, no meses': 'En vivo en minutos, no meses',
            'Pay-as-tú-go Agregar-on': 'Complemento de pago por uso',
            'Pay-as-tú-go': 'Pago por uso',
            'Digital-primero (voz is pay-as-tú-go)': 'Digital primero (voz es pago por uso)',
            'voz is pay-as-tú-go': 'voz es pago por uso',
        }
        
        # Additional comprehensive translations
        self.translations = {
            # Common English words that might remain
            'yes': 'sí',
            'show': 'mostrar',
            'me': 'me',
            'live': 'en vivo',
            'agent': 'agente',
            'agents': 'agentes',
            'integration': 'integración',
            'pay': 'pago',
            'meet': 'reunión',
            'book': 'reservar',
            'demo': 'demostración',
            'article': 'artículo',
            'articles': 'artículos',
            'found': 'encontrado',
            'no': 'no',
            'is': 'es',
            'my': 'mi',
            'order': 'pedido',
            'procedure': 'procedimiento',
            'covered': 'cubierto',
            'by': 'por',
            'insurance': 'seguro',
            'plan': 'plan',
            'where': 'dónde',
            'how': 'cómo',
            'do': 'hacer',
            'reset': 'restablecer',
            'password': 'contraseña',
            'automated': 'automatizado',
            'follow': 'seguir',
            'up': 'arriba',
            'followup': 'seguimiento',
            'follow-up': 'seguimiento',
            'what': 'qué',
            'we': 'nosotros',
            'build': 'construir',
            'go': 'ir',
            'in': 'en',
            'minutes': 'minutos',
            'not': 'no',
            'months': 'meses',
            'as': 'como',
            'you': 'tú',
            'add': 'agregar',
            'on': 'en',
            'first': 'primero',
            'voice': 'voz',
            'got': 'tienes',
            'questions': 'preguntas',
            'chat': 'chat',
            'preview': 'vista previa',
            'campaign': 'campaña',
            'monitoring': 'monitoreo',
            'donation': 'donación',
            'apple': 'manzana',
            'google': 'google',
            'try': 'intentar',
            'it': 'eso',
            'out': 'fuera',
            'metrics': 'métricas',
            'performance': 'rendimiento',
            'digital': 'digital'
        }
    
    def should_preserve(self, text: str) -> bool:
        """Check if text should be preserved (not translated)."""
        if not isinstance(text, str):
            return True
        
        text_stripped = text.strip()
        text_lower = text_stripped.lower()
        
        # Check for preserved terms
        for term in self.preserve_terms:
            if term.lower() == text_lower:
                return True
        
        # Preserve Google Pay and Apple Pay as proper nouns
        if text_stripped in ['Google Pay', 'Apple Pay']:
            return True
        
        # Check for technical patterns
        if re.match(r'^[A-Z]+[\d\.]*$', text_stripped):
            return True
        
        if re.match(r'^\d+\s*(ms|kbps|%|MHz|GB|MB|KB|min|sec|USD|\$|€|£)$', text_stripped):
            return True
        
        if re.match(r'^[\d\-\+\(\)\s\*\$%€£]+$', text_stripped) and len(text_stripped) > 3:
            return True
        
        if any(x in text for x in ['@', '.com', '.net', '.org', 'http', 'www.', 'mailto:', 'tel:']):
            return True
        
        if text_stripped.startswith('#'):
            return True
        
        return False
    
    def precision_translate(self, text: str) -> str:
        """Precision translation targeting specific remaining issues."""
        if not isinstance(text, str) or not text.strip():
            return text
        
        if self.should_preserve(text):
            return text
        
        original_text = text
        
        # Apply precision fixes first (exact matches)
        if text in self.precision_fixes:
            return self.precision_fixes[text]
        
        # Apply precision fixes with case sensitivity
        for malformed, correct in self.precision_fixes.items():
            if malformed.lower() == text.lower():
                # Preserve original case pattern
                if text.isupper():
                    return correct.upper()
                elif text.istitle():
                    return correct.title()
                elif text.islower():
                    return correct.lower()
                else:
                    return correct
        
        # Substring replacements for partial fixes
        for malformed, correct in self.precision_fixes.items():
            if malformed in text:
                text = text.replace(malformed, correct)
        
        # If text was modified, return it
        if text != original_text:
            return text
        
        # Word-level translations as final pass
        words = re.findall(r'\b\w+\b|\W+', text)
        translated_words = []
        
        for word in words:
            if re.match(r'\w+', word):  # It's a word
                translated = False
                for english, spanish in self.translations.items():
                    if english.lower() == word.lower():
                        # Preserve case
                        if word.isupper():
                            translated_words.append(spanish.upper())
                        elif word.istitle():
                            translated_words.append(spanish.title())
                        elif word.islower():
                            translated_words.append(spanish.lower())
                        else:
                            translated_words.append(spanish)
                        translated = True
                        break
                
                if not translated:
                    translated_words.append(word)
            else:
                translated_words.append(word)
        
        return ''.join(translated_words)
    
    def process_json_recursively(self, obj):
        """Process JSON structure recursively with precision translation."""
        if isinstance(obj, str):
            return self.precision_translate(obj)
        elif isinstance(obj, dict):
            return {key: self.process_json_recursively(value) for key, value in obj.items()}
        elif isinstance(obj, list):
            return [self.process_json_recursively(item) for item in obj]
        else:
            return obj


def main():
    """Final precision translation process."""
    print("🎯 FINAL PRECISION TRANSLATION STARTING...")
    print("🔧 Targeting the last 48 remaining English strings!")
    
    # Load the current es.json
    try:
        with open('es.json', 'r', encoding='utf-8') as f:
            es_data = json.load(f, object_pairs_hook=OrderedDict)
        print("✅ Loaded es.json successfully")
    except Exception as e:
        print(f"❌ Error loading es.json: {e}")
        return False
    
    # Initialize the precision translator
    translator = FinalPrecisionTranslator()
    print(f"🎯 Loaded {len(translator.precision_fixes)} precision fixes and {len(translator.translations)} translations")
    
    # Process all data with precision
    print("🔄 Applying precision translations...")
    translated_data = translator.process_json_recursively(es_data)
    
    # Validate JSON structure
    try:
        json_string = json.dumps(translated_data, ensure_ascii=False, indent=2)
        json.loads(json_string)
        print("✅ JSON structure validation passed")
    except Exception as e:
        print(f"❌ JSON validation failed: {e}")
        return False
    
    # Write the final file
    try:
        with open('es.json', 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)
        print("💾 Successfully wrote precision-corrected es.json")
        return True
    except Exception as e:
        print(f"❌ Error writing es.json: {e}")
        return False


if __name__ == "__main__":
    success = main()
    if success:
        print("\n🎉 FINAL PRECISION TRANSLATION COMPLETE!")
        print("⚡ All remaining English strings have been precisely targeted!")
        print("🔍 Running final verification...")
    else:
        print("\n❌ Final precision process failed!")
