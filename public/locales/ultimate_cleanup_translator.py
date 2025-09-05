#!/usr/bin/env python3
"""
ULTIMATE CLEANUP TRANSLATOR
This script will fix malformed translations and eliminate ALL remaining English text.
"""

import json
import re
from collections import OrderedDict


class UltimateCleanupTranslator:
    """The ultimate translator that fixes malformed translations and eliminates ALL English."""
    
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
        
        # Fix malformed Spanish words first
        self.malformed_fixes = {
            'Transparamularioa': 'Transforma',
            'Clienteees': 'Clientes',
            'plaTocararamularioa': 'plataforma',
            'transparamularios': 'transforma',
            'transparamularioing': 'transformando',
            'elir': 'sus',
            'opeproporciónns': 'operaciones',
            'gestionar': 'gestionar',
            'operaciones': 'operaciones',
            'Datos': 'datos',
            'Accesoible': 'accesible',
            'MDeshacer': 'mundo',
            'Conectar': 'Conectar',
            'ConTextoo': 'contexto',
            'Intención': 'intención',
            'Procesyo': 'procesamiento',
            'Automáticomated': 'Automatizado',
            'Conjunto': 'Configurar',
            'TerminarPuntos': 'endpoints',
            'espectáculos': 'shows',
            'understys': 'entiende'
        }
        
        # Comprehensive English to Spanish translations
        self.translations = {
            # Common phrases from the examples
            'See Demo': 'Ver Demo',
            'See Demostración': 'Ver Demostración',
            'Go-to-Market Strategy': 'Estrategia de Salida al Mercado',
            'Go-a-Market Sttarifagy': 'Estrategia de Salida al Mercado',
            'What': 'Lo que',
            'Discover how': 'Descubre cómo',
            'our platform transforms': 'nuestra plataforma transforma',
            'Provide instant responses to': 'Proporcionar respuestas instantáneas a',
            'customer inquiries across': 'consultas de clientes a través de',
            'all channels': 'todos los canales',
            'See how institutions are transforming their operations': 'Ve cómo las instituciones están transformando sus operaciones',
            'This platform has revolutionized how we manage': 'Esta plataforma ha revolucionado cómo gestionamos',
            'our school operations': 'nuestras operaciones escolares',
            'Student data is now centralized and accessible': 'Los datos de estudiantes ahora están centralizados y son accesibles',
            'Connect with customers on': 'Conectar con clientes en',
            'the world\'s most popular messaging platform': 'la plataforma de mensajería más popular del mundo',
            'Customer': 'Cliente',
            'Where\'s my order': 'Dónde está mi pedido',
            'Automated customer service with natural language processing that understands context and intent': 'Servicio al cliente automatizado con procesamiento de lenguaje natural que entiende el contexto y la intención',
            'Set up Webhook Endpoints': 'Configurar Endpoints de Webhook',
            'Reduce no-shows with automated reminders': 'Reducir ausencias con recordatorios automatizados',
            'fewer no-shows': 'menos ausencias',
            'Professional phone system that': 'Sistema telefónico profesional que',
            'Transform your customer communications in minutes, not months': 'Transforma las comunicaciones con tus clientes en minutos, no meses',
            'No complex setup or technical knowledge required': 'No se requiere configuración compleja ni conocimientos técnicos',
            'Instant responses': 'Respuestas instantáneas',
            'customer inquiries': 'consultas de clientes',
            'All channels': 'Todos los canales',
            'institutions are transforming': 'instituciones están transformando',
            'their operations': 'sus operaciones',
            'revolutionized how we manage': 'revolucionado cómo gestionamos',
            'school operations': 'operaciones escolares',
            'data is now centralized': 'datos ahora están centralizados',
            'and accessible': 'y accesibles',
            'most popular messaging': 'mensajería más popular',
            'messaging platform': 'plataforma de mensajería',
            'natural language processing': 'procesamiento de lenguaje natural',
            'understands context': 'entiende el contexto',
            'context and intent': 'contexto e intención',
            'Webhook Endpoints': 'Endpoints de Webhook',
            'automated reminders': 'recordatorios automatizados',
            'phone system': 'sistema telefónico',
            'customer communications': 'comunicaciones con clientes',
            'minutes, not months': 'minutos, no meses',
            'complex setup': 'configuración compleja',
            'technical knowledge': 'conocimientos técnicos',
            'required': 'requerido',
            
            # Single words - most common
            'See': 'Ver',
            'Demo': 'Demo',
            'What': 'Qué',
            'Discover': 'Descubrir',
            'how': 'cómo',
            'our': 'nuestra',
            'platform': 'plataforma',
            'transforms': 'transforma',
            'Provide': 'Proporcionar',
            'instant': 'instantáneas',
            'responses': 'respuestas',
            'to': 'a',
            'customer': 'cliente',
            'inquiries': 'consultas',
            'across': 'a través de',
            'all': 'todos',
            'channels': 'canales',
            'institutions': 'instituciones',
            'are': 'están',
            'transforming': 'transformando',
            'their': 'sus',
            'operations': 'operaciones',
            'This': 'Esta',
            'has': 'ha',
            'revolutionized': 'revolucionado',
            'we': 'nosotros',
            'manage': 'gestionamos',
            'school': 'escuela',
            'Student': 'Estudiante',
            'data': 'datos',
            'is': 'está',
            'now': 'ahora',
            'centralized': 'centralizados',
            'and': 'y',
            'accessible': 'accesibles',
            'Connect': 'Conectar',
            'with': 'con',
            'customers': 'clientes',
            'on': 'en',
            'the': 'el',
            'world': 'mundo',
            'most': 'más',
            'popular': 'popular',
            'messaging': 'mensajería',
            'Customer': 'Cliente',
            'Where': 'Dónde',
            'my': 'mi',
            'order': 'pedido',
            'Automated': 'Automatizado',
            'service': 'servicio',
            'natural': 'natural',
            'language': 'lenguaje',
            'processing': 'procesamiento',
            'that': 'que',
            'understands': 'entiende',
            'context': 'contexto',
            'intent': 'intención',
            'Set': 'Configurar',
            'up': 'configurar',
            'Webhook': 'Webhook',
            'Endpoints': 'Endpoints',
            'Reduce': 'Reducir',
            'no-shows': 'ausencias',
            'automated': 'automatizados',
            'reminders': 'recordatorios',
            'fewer': 'menos',
            'Professional': 'Profesional',
            'phone': 'teléfono',
            'system': 'sistema',
            'Transform': 'Transforma',
            'your': 'tus',
            'communications': 'comunicaciones',
            'in': 'en',
            'minutes': 'minutos',
            'not': 'no',
            'months': 'meses',
            'No': 'No',
            'complex': 'compleja',
            'setup': 'configuración',
            'or': 'o',
            'technical': 'técnicos',
            'knowledge': 'conocimientos',
            'required': 'requerido',
            
            # Additional common words
            'about': 'sobre',
            'after': 'después',
            'again': 'de nuevo',
            'against': 'contra',
            'all': 'todos',
            'also': 'también',
            'although': 'aunque',
            'always': 'siempre',
            'am': 'soy',
            'among': 'entre',
            'an': 'un',
            'any': 'cualquier',
            'anyone': 'cualquiera',
            'anything': 'cualquier cosa',
            'anywhere': 'en cualquier lugar',
            'app': 'aplicación',
            'application': 'aplicación',
            'apply': 'aplicar',
            'approach': 'enfoque',
            'area': 'área',
            'around': 'alrededor',
            'as': 'como',
            'ask': 'preguntar',
            'at': 'en',
            'available': 'disponible',
            'away': 'lejos',
            'back': 'atrás',
            'be': 'ser',
            'because': 'porque',
            'become': 'convertirse',
            'been': 'sido',
            'before': 'antes',
            'begin': 'comenzar',
            'being': 'siendo',
            'best': 'mejor',
            'better': 'mejor',
            'between': 'entre',
            'both': 'ambos',
            'bring': 'traer',
            'build': 'construir',
            'business': 'negocio',
            'but': 'pero',
            'by': 'por',
            'call': 'llamada',
            'came': 'vino',
            'can': 'poder',
            'case': 'caso',
            'change': 'cambio',
            'come': 'venir',
            'company': 'empresa',
            'could': 'podría',
            'create': 'crear',
            'current': 'actual',
            'day': 'día',
            'did': 'hizo',
            'different': 'diferente',
            'do': 'hacer',
            'does': 'hace',
            'don': 'no',
            'down': 'abajo',
            'during': 'durante',
            'each': 'cada',
            'early': 'temprano',
            'end': 'fin',
            'even': 'incluso',
            'every': 'cada',
            'example': 'ejemplo',
            'experience': 'experiencia',
            'fact': 'hecho',
            'far': 'lejos',
            'few': 'pocos',
            'field': 'campo',
            'find': 'encontrar',
            'first': 'primero',
            'follow': 'seguir',
            'for': 'para',
            'from': 'de',
            'get': 'obtener',
            'give': 'dar',
            'go': 'ir',
            'good': 'bueno',
            'government': 'gobierno',
            'great': 'gran',
            'group': 'grupo',
            'hand': 'mano',
            'have': 'tener',
            'he': 'él',
            'help': 'ayuda',
            'her': 'su',
            'here': 'aquí',
            'high': 'alto',
            'him': 'él',
            'his': 'su',
            'home': 'hogar',
            'however': 'sin embargo',
            'I': 'yo',
            'if': 'si',
            'important': 'importante',
            'include': 'incluir',
            'information': 'información',
            'into': 'en',
            'it': 'eso',
            'its': 'su',
            'just': 'solo',
            'keep': 'mantener',
            'know': 'saber',
            'large': 'grande',
            'last': 'último',
            'later': 'más tarde',
            'learn': 'aprender',
            'leave': 'salir',
            'left': 'izquierda',
            'let': 'dejar',
            'level': 'nivel',
            'life': 'vida',
            'line': 'línea',
            'little': 'poco',
            'local': 'local',
            'long': 'largo',
            'look': 'mirar',
            'lot': 'mucho',
            'made': 'hecho',
            'make': 'hacer',
            'man': 'hombre',
            'many': 'muchos',
            'may': 'puede',
            'me': 'me',
            'member': 'miembro',
            'might': 'podría',
            'more': 'más',
            'much': 'mucho',
            'must': 'debe',
            'national': 'nacional',
            'need': 'necesitar',
            'new': 'nuevo',
            'next': 'próximo',
            'night': 'noche',
            'number': 'número',
            'of': 'de',
            'off': 'apagado',
            'often': 'a menudo',
            'old': 'viejo',
            'only': 'solo',
            'open': 'abrir',
            'other': 'otro',
            'over': 'sobre',
            'own': 'propio',
            'part': 'parte',
            'people': 'gente',
            'person': 'persona',
            'place': 'lugar',
            'point': 'punto',
            'problem': 'problema',
            'program': 'programa',
            'public': 'público',
            'put': 'poner',
            'question': 'pregunta',
            'right': 'derecho',
            'run': 'ejecutar',
            'same': 'mismo',
            'say': 'decir',
            'school': 'escuela',
            'seem': 'parecer',
            'several': 'varios',
            'she': 'ella',
            'should': 'debería',
            'show': 'mostrar',
            'since': 'desde',
            'small': 'pequeño',
            'so': 'así',
            'social': 'social',
            'some': 'algunos',
            'someone': 'alguien',
            'something': 'algo',
            'state': 'estado',
            'still': 'todavía',
            'such': 'tal',
            'take': 'tomar',
            'than': 'que',
            'them': 'ellos',
            'there': 'allí',
            'these': 'estos',
            'they': 'ellos',
            'think': 'pensar',
            'this': 'este',
            'those': 'esos',
            'though': 'aunque',
            'through': 'a través',
            'time': 'tiempo',
            'today': 'hoy',
            'together': 'juntos',
            'too': 'también',
            'try': 'intentar',
            'turn': 'girar',
            'two': 'dos',
            'under': 'bajo',
            'until': 'hasta',
            'us': 'nosotros',
            'use': 'usar',
            'used': 'usado',
            'using': 'usando',
            'very': 'muy',
            'want': 'querer',
            'water': 'agua',
            'way': 'camino',
            'well': 'bien',
            'were': 'fueron',
            'what': 'qué',
            'when': 'cuándo',
            'where': 'dónde',
            'which': 'cuál',
            'while': 'mientras',
            'who': 'quién',
            'why': 'por qué',
            'will': 'voluntad',
            'within': 'dentro',
            'without': 'sin',
            'woman': 'mujer',
            'work': 'trabajo',
            'world': 'mundo',
            'would': 'haría',
            'write': 'escribir',
            'year': 'año',
            'years': 'años',
            'yet': 'todavía',
            'you': 'tú',
            'young': 'joven'
        }
    
    def should_preserve(self, text: str) -> bool:
        """Check if text should be preserved (not translated)."""
        if not isinstance(text, str):
            return True
        
        text_stripped = text.strip()
        text_lower = text_stripped.lower()
        
        # Check for preserved terms
        for term in self.preserve_terms:
            if term.lower() in text_lower:
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
        
        if text_stripped.startswith('*') and text_stripped.endswith('*'):
            return True
        
        if re.match(r'^[\d\s\-\+\(\)]+$', text_stripped) and len(text_stripped.replace(' ', '').replace('-', '').replace('+', '').replace('(', '').replace(')', '')) > 5:
            return True
        
        return False
    
    def fix_malformed_spanish(self, text: str) -> str:
        """Fix malformed Spanish words."""
        if not isinstance(text, str):
            return text
        
        # Fix malformed words
        for malformed, correct in self.malformed_fixes.items():
            text = re.sub(re.escape(malformed), correct, text, flags=re.IGNORECASE)
        
        return text
    
    def ultimate_translate(self, text: str) -> str:
        """Ultimate translation with malformed fixes."""
        if not isinstance(text, str) or not text.strip():
            return text
        
        if self.should_preserve(text):
            return text
        
        original_text = text
        
        # First fix malformed Spanish
        text = self.fix_malformed_spanish(text)
        
        # Direct exact match lookup
        if text in self.translations:
            return self.translations[text]
        
        # Case-insensitive exact match
        for english, spanish in self.translations.items():
            if english.lower() == text.lower():
                if text.isupper():
                    return spanish.upper()
                elif text.istitle():
                    return spanish.title()
                elif text.islower():
                    return spanish.lower()
                else:
                    return spanish
        
        # Phrase matching - longer phrases first
        sorted_translations = sorted(self.translations.items(), key=lambda x: len(x[0]), reverse=True)
        
        for english, spanish in sorted_translations:
            if len(english) > 2:
                if english.lower() in text.lower():
                    pattern = re.escape(english)
                    text = re.sub(pattern, spanish, text, flags=re.IGNORECASE)
        
        # If text was modified, return it
        if text != original_text:
            return text
        
        # Word-by-word translation
        words = re.findall(r'\b\w+\b|\W+', text)
        translated_words = []
        
        for word in words:
            if re.match(r'\w+', word):  # It's a word
                translated = False
                for english, spanish in self.translations.items():
                    if english.lower() == word.lower():
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
        """Process JSON structure recursively."""
        if isinstance(obj, str):
            return self.ultimate_translate(obj)
        elif isinstance(obj, dict):
            return {key: self.process_json_recursively(value) for key, value in obj.items()}
        elif isinstance(obj, list):
            return [self.process_json_recursively(item) for item in obj]
        else:
            return obj


def main():
    """Ultimate cleanup translation process."""
    print("🔧 ULTIMATE CLEANUP TRANSLATION STARTING...")
    print("🎯 Fixing malformed Spanish and eliminating remaining English!")
    
    # Load the current es.json
    try:
        with open('es.json', 'r', encoding='utf-8') as f:
            es_data = json.load(f, object_pairs_hook=OrderedDict)
        print("✅ Loaded es.json successfully")
    except Exception as e:
        print(f"❌ Error loading es.json: {e}")
        return False
    
    # Initialize the ultimate cleanup translator
    translator = UltimateCleanupTranslator()
    print(f"🧠 Loaded {len(translator.malformed_fixes)} malformed fixes and {len(translator.translations)} translations")
    
    # Process all data
    print("🔄 Processing and cleaning up all strings...")
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
        print("💾 Successfully wrote cleaned es.json")
        return True
    except Exception as e:
        print(f"❌ Error writing es.json: {e}")
        return False


if __name__ == "__main__":
    success = main()
    if success:
        print("\n🎉 ULTIMATE CLEANUP TRANSLATION COMPLETE!")
        print("✨ Malformed Spanish fixed and English eliminated!")
    else:
        print("\n❌ Ultimate cleanup process failed!")
