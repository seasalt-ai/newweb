#!/usr/bin/env python3
"""
EXTENDED TRANSLATOR
This script will fix malformed Spanish and translate ALL remaining English content
"""

import json
import re
from collections import OrderedDict


class ExtendedTranslator:
    """Extended translator to fix malformed Spanish and remaining English"""
    
    def __init__(self):
        # Terms to preserve (never translate)
        self.preserve_terms = {
            'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaHealth', 'SeaVoice',
            'WhatsApp', 'Instagram', 'Facebook', 'Twitter', 'LinkedIn', 'YouTube',
            'SMS', 'API', 'HIPAA', 'SOC', '10DLC', 'Seattle', 'WA', 'USA',
            'SMB', 'AI-AGENT', 'VoIP', 'SIP', 'BYOC', 'PBX', 'TLS', 'SRTP',
            'RTP', 'AES-256', 'G.711', 'G.722', 'G.729', 'Opus', 'QoS',
            'Sarah Johnson', 'Mike Chen', 'Lisa Park', 'David Kim',
            'Professional Sarah', 'Friendly Mike', 'Caring Emma',
            'Black Friday', 'JSON', 'HTTP', 'HTTPS', 'TCP', 'UDP', 'IP',
            'DIY', 'FAQ', 'ROI', 'SLA', 'CEO', 'CTO', 'CFO', 'AI', 'ML',
            'Google Pay', 'Apple Pay', 'Kakao Pay', 'Line Pay', 'Zalo Pay',
            'Meta'
        }
        
        self.malformed_fixes = {
            'Transformaara': 'Transforma',
            'Transformaarado': 'transformado',
            'agentees': 'agentes',
            'agentee': 'agente',
            '__PRESERVE_Scadaat__': 'SeaChat',
            'plazo': 'largo plazo',
            'long-plazo': 'largo plazo',
            'AI-powered': 'impulsado por IA',
            'personalizado': 'Personalizadas'
        }
        
        # Comprehensive translation mappings
        self.translations = self.build_extended_dictionary()
    
    def build_extended_dictionary(self):
        """Build extended translation dictionary"""
        return {
            # Complete sentence translations first
            'Transform your customer communications in minutes, not months': 'Transforma las comunicaciones con tus clientes en minutos, no meses',
            'No complex setup or technical knowledge required': 'No se requiere configuración compleja ni conocimientos técnicos',
            'Connect your phone, WhatsApp, SMS, website chat and social media in minutes. No technical experience required': 'Conecta tu teléfono, WhatsApp, SMS, chat del sitio web y redes sociales en minutos. No se requiere experiencia técnica',
            'Personalized sessions with the SeaChat team': 'Sesiones personalizadas con el equipo de SeaChat',
            'Establish standard operating procedures for the long-term operation of AI agents': 'Establecer procedimientos operativos estándar para la operación a largo plazo de agentes de IA',
            'Join industry leaders who trust Seasalt.ai to deliver exceptional customer experiences while meeting specific regulatory and operational requirements': 'Únete a los líderes de la industria que confían en Seasalt.ai para brindar experiencias excepcionales al cliente mientras cumplen con requisitos regulatorios y operativos específicos',
            'Why Choose Seasalt.ai for': 'Por qué elegir Seasalt.ai para',
            'Our AI-powered platform streamlines communications and automates workflows for': 'Nuestra plataforma impulsada por IA optimiza las comunicaciones y automatiza flujos de trabajo para',
            'Capture and qualify leads automatically with AI-powered conversations': 'Captura y califica leads automáticamente con conversaciones impulsadas por IA',
            'Seasalt.ai has transformed our customer service operations. Response times are down 80% and satisfaction is at an all-time high': 'Seasalt.ai ha transformado nuestras operaciones de servicio al cliente. Los tiempos de respuesta han disminuido un 80% y la satisfacción está en su punto más alto',
            'The AI automation has saved us countless hours. We can focus on growing our business instead of managing repetitive tasks': 'La automatización de IA nos ha ahorrado innumerables horas. Podemos enfocarnos en hacer crecer nuestro negocio en lugar de gestionar tareas repetitivas',
            'Join thousands of companies that trust Seasalt.ai to manage their customer communications efficiently and securely': 'Únete a miles de empresas que confían en Seasalt.ai para gestionar sus comunicaciones con clientes de manera eficiente y segura',
            'Unify all your customer communications in one platform. From WhatsApp to phone calls, SMS to social media - manage every conversation from a single dashboard': 'Unifica todas las comunicaciones con tus clientes en una plataforma. Desde WhatsApp hasta llamadas telefónicas, SMS hasta redes sociales: gestiona cada conversación desde un panel único',
            'Connect your WhatsApp Business account to Seasalt.ai for AI-powered conversations, bulk campaigns, and seamless human agent support. Reach 2+ billion users worldwide': 'Conecta tu cuenta de WhatsApp Business a Seasalt.ai para conversaciones impulsadas por IA, campañas masivas y soporte fluido de agentes humanos. Alcanza a más de 2 mil millones de usuarios mundialmente',
            'Your order is out for delivery and will arrive today by 6 PM. Track it here': 'Tu pedido está en camino y llegará hoy antes de las 6 PM. Rastréalo aquí',
            'Let me connect you with a human agent for address changes': 'Permíteme conectarte con un agente humano para cambios de dirección',
            'Your WhatsApp integration includes end-to-end encryption, secure token management, and compliance with Meta\'s business policies. All data is protected with bank-level security': 'Tu integración de WhatsApp incluye cifrado de extremo a extremo, gestión segura de tokens y cumplimiento con las políticas comerciales de Meta. Todos los datos están protegidos con seguridad de nivel bancario',
            'Join thousands of businesses using WhatsApp to provide better customer service and drive more sales': 'Únete a miles de negocios que usan WhatsApp para proporcionar mejor servicio al cliente e impulsar más ventas',
            'Professional phone system with AI voicebot and human agent support': 'Sistema telefónico profesional con voicebot de IA y soporte de agentes humanos',
            
            # Common phrases
            'has': 'ha',
            'has transformed': 'ha transformado',
            'transformed our': 'transformado nuestras',
            'customer service operations': 'operaciones de servicio al cliente',
            'response times': 'tiempos de respuesta',
            'are down': 'han disminuido',
            'satisfaction is': 'la satisfacción está',
            'at an all-time high': 'en su punto más alto',
            'saved us countless hours': 'nos ha ahorrado innumerables horas',
            'we can focus': 'podemos enfocarnos',
            'on growing our business': 'en hacer crecer nuestro negocio',
            'instead of managing': 'en lugar de gestionar',
            'repetitive tasks': 'tareas repetitivas',
            'thousands of companies': 'miles de empresas',
            'that trust': 'que confían en',
            'to manage their': 'para gestionar sus',
            'customer communications': 'comunicaciones con clientes',
            'efficiently and securely': 'de manera eficiente y segura',
            'all your customer': 'todas tus comunicaciones con',
            'communications in one platform': 'clientes en una plataforma',
            'from WhatsApp to phone calls': 'desde WhatsApp hasta llamadas telefónicas',
            'SMS to social media': 'SMS hasta redes sociales',
            'manage every conversation': 'gestiona cada conversación',
            'from a single dashboard': 'desde un panel único',
            'your WhatsApp Business account': 'tu cuenta de WhatsApp Business',
            'for AI-powered conversations': 'para conversaciones impulsadas por IA',
            'bulk campaigns': 'campañas masivas',
            'seamless human agent support': 'soporte fluido de agentes humanos',
            'reach 2+ billion users': 'alcanza a más de 2 mil millones de usuarios',
            'worldwide': 'mundialmente',
            'your order is out': 'tu pedido está',
            'for delivery and will arrive': 'en camino y llegará',
            'today by': 'hoy antes de las',
            'track it here': 'rastréalo aquí',
            'let me connect you': 'permíteme conectarte',
            'with a human agent': 'con un agente humano',
            'for address changes': 'para cambios de dirección',
            'includes end-to-end encryption': 'incluye cifrado de extremo a extremo',
            'secure token management': 'gestión segura de tokens',
            'compliance with': 'cumplimiento con las',
            'business policies': 'políticas comerciales',
            'all data is protected': 'todos los datos están protegidos',
            'with bank-level security': 'con seguridad de nivel bancario',
            'thousands of businesses': 'miles de negocios',
            'using WhatsApp to provide': 'que usan WhatsApp para proporcionar',
            'better customer service': 'mejor servicio al cliente',
            'and drive more sales': 'e impulsar más ventas',
            
            # Individual words and common terms
            'why': 'por qué',
            'choose': 'elegir',
            'for': 'para',
            'our': 'nuestra',
            'platform': 'plataforma',
            'streamlines': 'optimiza',
            'communications': 'comunicaciones',
            'and': 'y',
            'automates': 'automatiza',
            'workflows': 'flujos de trabajo',
            'capture': 'captura',
            'qualify': 'califica',
            'leads': 'leads',
            'automatically': 'automáticamente',
            'with': 'con',
            'conversations': 'conversaciones',
            'the': 'la',
            'automation': 'automatización',
            'saved': 'ha ahorrado',
            'us': 'nos',
            'countless': 'innumerables',
            'hours': 'horas',
            'we': 'podemos',
            'can': 'podemos',
            'focus': 'enfocarnos',
            'on': 'en',
            'growing': 'hacer crecer',
            'business': 'negocio',
            'instead': 'en lugar',
            'of': 'de',
            'managing': 'gestionar',
            'repetitive': 'repetitivas',
            'tasks': 'tareas',
            'join': 'únete',
            'thousands': 'miles',
            'companies': 'empresas',
            'that': 'que',
            'trust': 'confían',
            'to': 'para',
            'manage': 'gestionar',
            'their': 'sus',
            'customer': 'cliente',
            'efficiently': 'eficientemente',
            'securely': 'de forma segura',
            'unify': 'unifica',
            'all': 'todas',
            'your': 'tus',
            'in': 'en',
            'one': 'una',
            'from': 'desde',
            'phone': 'teléfono',
            'calls': 'llamadas',
            'social': 'redes',
            'media': 'sociales',
            'every': 'cada',
            'conversation': 'conversación',
            'single': 'único',
            'dashboard': 'panel',
            'connect': 'conecta',
            'account': 'cuenta',
            'bulk': 'masivas',
            'campaigns': 'campañas',
            'seamless': 'fluido',
            'human': 'humanos',
            'agent': 'agente',
            'agents': 'agentes',
            'support': 'soporte',
            'reach': 'alcanza',
            'billion': 'mil millones',
            'users': 'usuarios',
            'order': 'pedido',
            'is': 'está',
            'out': 'en',
            'delivery': 'camino',
            'will': 'llegará',
            'arrive': 'llegará',
            'today': 'hoy',
            'by': 'antes de las',
            'track': 'rastrea',
            'it': 'lo',
            'here': 'aquí',
            'let': 'permite',
            'me': 'me',
            'you': 'te',
            'address': 'dirección',
            'changes': 'cambios',
            'integration': 'integración',
            'includes': 'incluye',
            'end-to-end': 'extremo a extremo',
            'encryption': 'cifrado',
            'secure': 'segura',
            'token': 'tokens',
            'management': 'gestión',
            'compliance': 'cumplimiento',
            'policies': 'políticas',
            'data': 'datos',
            'protected': 'protegidos',
            'security': 'seguridad',
            'businesses': 'negocios',
            'using': 'usan',
            'provide': 'proporcionar',
            'better': 'mejor',
            'service': 'servicio',
            'drive': 'impulsar',
            'more': 'más',
            'sales': 'ventas',
            'professional': 'profesional',
            'system': 'sistema',
            'voicebot': 'voicebot',
            'industry': 'industria',
            'leaders': 'líderes',
            'who': 'que',
            'deliver': 'brindar',
            'exceptional': 'excepcionales',
            'experiences': 'experiencias',
            'while': 'mientras',
            'meeting': 'cumplen',
            'specific': 'específicos',
            'regulatory': 'regulatorios',
            'operational': 'operativos',
            'requirements': 'requisitos',
            'personalized': 'personalizadas',
            'sessions': 'sesiones',
            'team': 'equipo',
            'establish': 'establecer',
            'standard': 'estándar',
            'operating': 'operativos',
            'procedures': 'procedimientos',
            'long-term': 'largo plazo',
            'operation': 'operación',
            'AI': 'IA',
            'at': 'en',
            'an': 'su',
            'all-time': 'todos los tiempos',
            'high': 'alto',
            'are': 'están',
            'down': 'disminuido',
            '80%': '80%',
            'satisfaction': 'satisfacción',
            'times': 'tiempos',
            'response': 'respuesta'
        }
    
    def fix_malformed_spanish(self, text: str) -> str:
        """Fix malformed Spanish words"""
        if not isinstance(text, str):
            return text
        
        # Fix malformed words
        for malformed, correct in self.malformed_fixes.items():
            text = re.sub(re.escape(malformed), correct, text, flags=re.IGNORECASE)
        
        return text
    
    def comprehensive_translate(self, text: str) -> str:
        """Comprehensive translation with malformed fixes"""
        if not isinstance(text, str) or not text.strip():
            return text
            
        # First fix malformed Spanish
        text = self.fix_malformed_spanish(text)
        
        # Check if we should skip translation (preserve terms)
        should_preserve = False
        for term in self.preserve_terms:
            if term in text and text.strip() == term:
                should_preserve = True
                break
        
        if should_preserve:
            return text
            
        original_text = text
        
        # Try exact phrase matches first (longest first)
        for english, spanish in sorted(self.translations.items(), key=lambda x: len(x[0]), reverse=True):
            if len(english) > 3 and english.lower() in text.lower():
                # Create regex pattern to match whole phrases
                pattern = re.compile(re.escape(english), re.IGNORECASE)
                text = pattern.sub(spanish, text)
        
        # Word-by-word translation for remaining English words
        words = re.findall(r'\b\w+\b|\W+', text)
        translated_words = []
        
        for word in words:
            if re.match(r'\w+', word):  # It's a word
                word_lower = word.lower()
                translated = False
                
                # Skip preserved terms
                preserve_word = False
                for term in self.preserve_terms:
                    if word in term or term in word:
                        preserve_word = True
                        break
                
                if preserve_word:
                    translated_words.append(word)
                    continue
                
                # Find translation
                for english, spanish in self.translations.items():
                    if english.lower() == word_lower:
                        # Preserve case
                        if word.isupper():
                            translated_words.append(spanish.upper())
                        elif word.istitle():
                            translated_words.append(spanish.title())
                        else:
                            translated_words.append(spanish)
                        translated = True
                        break
                
                if not translated:
                    translated_words.append(word)
            else:
                # Punctuation or whitespace
                translated_words.append(word)
        
        return ''.join(translated_words)
    
    def translate_json_recursively(self, obj):
        """Recursively translate JSON structure"""
        if isinstance(obj, str):
            return self.comprehensive_translate(obj)
        elif isinstance(obj, dict):
            return {key: self.translate_json_recursively(value) for key, value in obj.items()}
        elif isinstance(obj, list):
            return [self.translate_json_recursively(item) for item in obj]
        else:
            return obj


def main():
    """Main extended translation process"""
    print("🔧 EXTENDED TRANSLATION - FIXING MALFORMED SPANISH & REMAINING ENGLISH")
    print("=" * 75)
    
    try:
        # Load the JSON file
        with open('es.json', 'r', encoding='utf-8') as f:
            data = json.load(f, object_pairs_hook=OrderedDict)
        print("✅ Loaded es.json successfully")
        
        # Initialize translator
        translator = ExtendedTranslator()
        print(f"📚 Loaded {len(translator.malformed_fixes)} malformed fixes")
        print(f"📖 Loaded {len(translator.translations)} translation entries")
        
        # Translate all content
        print("🔄 Fixing malformed Spanish and translating English content...")
        translated_data = translator.translate_json_recursively(data)
        
        # Validate JSON structure
        json_string = json.dumps(translated_data, ensure_ascii=False, indent=2)
        json.loads(json_string)
        print("✅ JSON structure validation passed")
        
        # Save translated file
        with open('es.json', 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)
        print("💾 Successfully saved extended translated es.json")
        
        return True
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return False


if __name__ == "__main__":
    success = main()
    if success:
        print("\n🎉 EXTENDED TRANSLATION COMPLETED!")
        print("🔍 Run verification to check remaining English strings...")
    else:
        print("\n❌ Extended translation failed!")
