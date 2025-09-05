#!/usr/bin/env python3
"""
COMPREHENSIVE ENGLISH TO SPANISH TRANSLATOR
This script will systematically translate ALL remaining English strings to Spanish
"""

import json
import re
from collections import OrderedDict


class ComprehensiveTranslator:
    """Comprehensive translator for all English strings"""
    
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
        
        # Comprehensive translation dictionary
        self.translations = self.build_comprehensive_dictionary()
    
    def build_comprehensive_dictionary(self):
        """Build comprehensive English to Spanish translation dictionary"""
        return {
            # Copyright and legal
            'All rights reserved': 'Todos los derechos reservados',
            '© 2020 - {{year}} Seasalt.ai. All rights reserved.': '© 2020 - {{year}} Seasalt.ai. Todos los derechos reservados.',
            
            # Common phrases and sentences
            'Transform your customer communications in minutes, not months': 'Transforma las comunicaciones con tus clientes en minutos, no meses',
            'No complex setup or technical knowledge required': 'No se requiere configuración compleja ni conocimientos técnicos',
            'Personalized sessions with the SeaChat team': 'Sesiones personalizadas con el equipo de SeaChat',
            'Continuous enhancement based on usage and feedback': 'Mejora continua basada en el uso y retroalimentación',
            'Establish standard operating procedures for the long-term operation of AI agents': 'Establecer procedimientos operativos estándar para la operación a largo plazo de agentes de IA',
            'Join industry leaders who trust Seasalt.ai to deliver exceptional customer experiences while meeting specific regulatory and operational requirements': 'Únete a los líderes de la industria que confían en Seasalt.ai para brindar experiencias excepcionales al cliente mientras cumplen con requisitos regulatorios y operativos específicos',
            'See how Seasalt.ai helps': 'Ve cómo Seasalt.ai ayuda',
            'Why Choose Seasalt.ai for': 'Por qué elegir Seasalt.ai para',
            'Our AI-powered platform streamlines communications and automates workflows for': 'Nuestra plataforma impulsada por IA optimiza las comunicaciones y automatiza flujos de trabajo para',
            'Capture and qualify leads automatically with AI-powered conversations': 'Captura y califica leads automáticamente con conversaciones impulsadas por IA',
            'Track performance and gain insights into customer interactions': 'Rastrea el rendimiento y obtén información sobre las interacciones con clientes',
            'Streamline enrollment, scheduling, and institutional operations': 'Optimiza la inscripción, programación y operaciones institucionales',
            'Seasalt.ai has transformed our customer service operations. Response times are down 80% and satisfaction is at an all-time high': 'Seasalt.ai ha transformado nuestras operaciones de servicio al cliente. Los tiempos de respuesta han disminuido un 80% y la satisfacción está en su punto más alto',
            'The AI automation has saved us countless hours. We can focus on growing our business instead of managing repetitive tasks': 'La automatización de IA nos ha ahorrado innumerables horas. Podemos enfocarnos en hacer crecer nuestro negocio en lugar de gestionar tareas repetitivas',
            'The learning management features have made remote and hybrid learning seamless for our students and faculty': 'Las características de gestión del aprendizaje han hecho que el aprendizaje remoto e híbrido sea fluido para nuestros estudiantes y profesores',
            'Our administrative efficiency has improved dramatically. Everything from enrollment to reporting is now streamlined': 'Nuestra eficiencia administrativa ha mejorado dramáticamente. Todo desde la inscripción hasta los informes ahora está optimizado',
            'Join thousands of companies that trust Seasalt.ai to manage their customer communications efficiently and securely': 'Únete a miles de empresas que confían en Seasalt.ai para gestionar sus comunicaciones con clientes de manera eficiente y segura',
            'Unify all your customer communications in one platform. From WhatsApp to phone calls, SMS to social media - manage every conversation from a single dashboard': 'Unifica todas las comunicaciones con tus clientes en una plataforma. Desde WhatsApp hasta llamadas telefónicas, SMS hasta redes sociales: gestiona cada conversación desde un panel único',
            'Connect your WhatsApp Business account to Seasalt.ai for AI-powered conversations, bulk campaigns, and seamless human agent support. Reach 2+ billion users worldwide': 'Conecta tu cuenta de WhatsApp Business a Seasalt.ai para conversaciones impulsadas por IA, campañas masivas y soporte fluido de agentes humanos. Alcanza a más de 2 mil millones de usuarios mundialmente',
            'Transform WhatsApp into Your': 'Transforma WhatsApp en tu',
            'Your order is out for delivery and will arrive today by 6 PM. Track it here': 'Tu pedido está en camino y llegará hoy antes de las 6 PM. Rastréalo aquí',
            'Let me connect you with a human agent for address changes': 'Permíteme conectarte con un agente humano para cambios de dirección',
            'Everything you need to turn WhatsApp into a powerful business communication platform': 'Todo lo que necesitas para convertir WhatsApp en una poderosa plataforma de comunicación empresarial',
            'Send template messages to thousands of contacts with advanced targeting and scheduling': 'Envía mensajes de plantilla a miles de contactos con segmentación avanzada y programación',
            'Seamless transition from bot to live agent with /live_agent command and full conversation history': 'Transición fluida de bot a agente en vivo con el comando /live_agent e historial completo de conversación',
            'Full access to WhatsApp Business Platform features with enterprise-grade security': 'Acceso completo a las características de WhatsApp Business Platform con seguridad de nivel empresarial',
            'Step-by-step guide to connect your WhatsApp Business account with enterprise-grade security': 'Guía paso a paso para conectar tu cuenta de WhatsApp Business con seguridad de nivel empresarial',
            'Launch your first campaign': 'Lanza tu primera campaña',
            'Your WhatsApp integration includes end-to-end encryption, secure token management, and compliance with Meta\'s business policies. All data is protected with bank-level security': 'Tu integración de WhatsApp incluye cifrado de extremo a extremo, gestión segura de tokens y cumplimiento con las políticas comerciales de Meta. Todos los datos están protegidos con seguridad de nivel bancario',
            'Join thousands of businesses using WhatsApp to provide better customer service and drive more sales': 'Únete a miles de negocios que usan WhatsApp para proporcionar mejor servicio al cliente e impulsar más ventas',
            'Professional phone system with AI voicebot and human agent support': 'Sistema telefónico profesional con voicebot de IA y soporte de agentes humanos',
            'Reach customers instantly with personalized SMS campaigns': 'Alcanza a los clientes instantáneamente con campañas de SMS personalizadas',
            'Reach customers instantly with personalized SMS campaigns and automated responses. 98% open rates and global delivery to 200+ countries. Start your SMS marketing today': 'Alcanza a los clientes instantáneamente con campañas de SMS personalizadas y respuestas automatizadas. 98% de tasas de apertura y entrega global a más de 200 países. Comienza tu marketing por SMS hoy',
            'SMS Marketing That': 'Marketing por SMS que',
            'Start SMS Campaigns': 'Iniciar Campañas SMS',
            'Enterprise-grade SMS platform with global reach and automatic compliance management': 'Plataforma SMS de nivel empresarial con alcance global y gestión automática de cumplimiento',
            'SMS delivery to 200+ countries with local number support and carrier optimization': 'Entrega de SMS a más de 200 países con soporte de números locales y optimización de operadores',
            'TCPA and GDPR compliance features with automatic opt-out management': 'Características de cumplimiento TCPA y GDPR con gestión automática de exclusión',
            'Real-time delivery tracking, response rates, and campaign performance metrics': 'Seguimiento de entrega en tiempo real, tasas de respuesta y métricas de rendimiento de campañas',
            'Timezone-aware sending with optimal timing based on recipient behavior': 'Envío consciente de zona horaria con tiempo óptimo basado en el comportamiento del destinatario',
            'See how businesses use SMS to drive engagement and revenue': 'Ve cómo los negocios usan SMS para impulsar el compromiso y los ingresos',
            'Create sophisticated SMS campaigns with drag-and-drop automation and smart targeting': 'Crea campañas SMS sofisticadas con automatización de arrastrar y soltar y segmentación inteligente',
            'Ready to Launch Your SMS Campaigns?': '¿Listo para lanzar tus campañas SMS?',
            'Join thousands of businesses using SMS to drive higher engagement and revenue. Start with our free trial': 'Únete a miles de negocios que usan SMS para impulsar mayor compromiso e ingresos. Comienza con nuestro ensayo gratuito',
            
            # Common words
            'all': 'todos',
            'rights': 'derechos',
            'reserved': 'reservados',
            'and': 'y',
            'or': 'o',
            'the': 'el',
            'with': 'con',
            'for': 'para',
            'to': 'a',
            'in': 'en',
            'on': 'en',
            'at': 'en',
            'by': 'por',
            'from': 'de',
            'of': 'de',
            'is': 'es',
            'are': 'son',
            'will': 'será',
            'can': 'puede',
            'your': 'tu',
            'you': 'tú',
            'we': 'nosotros',
            'our': 'nuestro',
            'their': 'su',
            'this': 'este',
            'that': 'ese',
            'these': 'estos',
            'those': 'esos',
            'into': 'en',
            'through': 'a través de',
            'during': 'durante',
            'before': 'antes',
            'after': 'después',
            'above': 'arriba',
            'below': 'abajo',
            'between': 'entre',
            'under': 'bajo',
            'over': 'sobre',
            'up': 'arriba',
            'down': 'abajo',
            'out': 'fuera',
            'off': 'apagado',
            'down': 'abajo',
            'again': 'de nuevo',
            'further': 'más',
            'then': 'entonces',
            'once': 'una vez',
            'here': 'aquí',
            'there': 'allí',
            'when': 'cuando',
            'where': 'dónde',
            'why': 'por qué',
            'how': 'cómo',
            'each': 'cada',
            'few': 'pocos',
            'more': 'más',
            'most': 'más',
            'other': 'otro',
            'some': 'algunos',
            'such': 'tal',
            'no': 'no',
            'nor': 'ni',
            'not': 'no',
            'only': 'solo',
            'own': 'propio',
            'same': 'mismo',
            'so': 'así',
            'than': 'que',
            'too': 'también',
            'very': 'muy',
            'just': 'solo',
            'now': 'ahora',
            'about': 'acerca de',
            'any': 'cualquier',
            'both': 'ambos',
            'DIY with product wiki': 'Hazlo tú mismo con wiki del producto',
            'based': 'basado',
            'usage': 'uso',
            'feedback': 'retroalimentación',
            'standard': 'estándar',
            'operating': 'operativo',
            'procedures': 'procedimientos',
            'long-term': 'largo plazo',
            'operation': 'operación',
            'agents': 'agentes',
            'industry': 'industria',
            'leaders': 'líderes',
            'who': 'que',
            'trust': 'confían',
            'deliver': 'entregar',
            'exceptional': 'excepcional',
            'customer': 'cliente',
            'experiences': 'experiencias',
            'while': 'mientras',
            'meeting': 'cumplir',
            'specific': 'específico',
            'regulatory': 'regulatorio',
            'operational': 'operativo',
            'requirements': 'requisitos',
            'helps': 'ayuda',
            'choose': 'elegir',
            'AI-powered': 'impulsado por IA',
            'platform': 'plataforma',
            'streamlines': 'optimiza',
            'communications': 'comunicaciones',
            'automates': 'automatiza',
            'workflows': 'flujos de trabajo',
            'capture': 'capturar',
            'qualify': 'calificar',
            'leads': 'leads',
            'automatically': 'automáticamente',
            'conversations': 'conversaciones',
            'track': 'rastrear',
            'performance': 'rendimiento',
            'gain': 'obtener',
            'insights': 'información',
            'interactions': 'interacciones',
            'streamline': 'optimizar',
            'enrollment': 'inscripción',
            'scheduling': 'programación',
            'institutional': 'institucional',
            'operations': 'operaciones',
            'has': 'ha',
            'transformed': 'transformado',
            'service': 'servicio',
            'response': 'respuesta',
            'times': 'tiempos',
            'down': 'bajado',
            '80%': '80%',
            'satisfaction': 'satisfacción',
            'all-time': 'todos los tiempos',
            'high': 'alto',
            'automation': 'automatización',
            'saved': 'ahorrado',
            'us': 'nos',
            'countless': 'innumerables',
            'hours': 'horas',
            'focus': 'enfocar',
            'growing': 'crecer',
            'business': 'negocio',
            'instead': 'en lugar de',
            'managing': 'gestionar',
            'repetitive': 'repetitivas',
            'tasks': 'tareas',
            'learning': 'aprendizaje',
            'management': 'gestión',
            'features': 'características',
            'have': 'han',
            'made': 'hecho',
            'remote': 'remoto',
            'hybrid': 'híbrido',
            'seamless': 'fluido',
            'students': 'estudiantes',
            'faculty': 'profesores',
            'administrative': 'administrativo',
            'efficiency': 'eficiencia',
            'improved': 'mejorado',
            'dramatically': 'dramáticamente',
            'everything': 'todo',
            'reporting': 'informes',
            'streamlined': 'optimizado',
            'join': 'unirse',
            'thousands': 'miles',
            'companies': 'empresas',
            'manage': 'gestionar',
            'efficiently': 'eficientemente',
            'securely': 'de forma segura',
            'unify': 'unificar',
            'one': 'una',
            'phone': 'teléfono',
            'calls': 'llamadas',
            'social': 'social',
            'media': 'medios',
            'every': 'cada',
            'conversation': 'conversación',
            'single': 'único',
            'dashboard': 'panel',
            'connect': 'conectar',
            'account': 'cuenta',
            'bulk': 'masiva',
            'campaigns': 'campañas',
            'human': 'humano',
            'agent': 'agente',
            'support': 'soporte',
            'reach': 'alcanzar',
            'billion': 'mil millones',
            'users': 'usuarios',
            'worldwide': 'mundialmente',
            'transform': 'transformar',
            'order': 'pedido',
            'delivery': 'entrega',
            'arrive': 'llegar',
            'today': 'hoy',
            'track': 'rastrear',
            'let': 'dejar',
            'me': 'me',
            'address': 'dirección',
            'changes': 'cambios',
            'everything': 'todo',
            'need': 'necesitar',
            'turn': 'convertir',
            'powerful': 'poderoso',
            'communication': 'comunicación',
            'send': 'enviar',
            'template': 'plantilla',
            'messages': 'mensajes',
            'contacts': 'contactos',
            'advanced': 'avanzado',
            'targeting': 'segmentación',
            'transition': 'transición',
            'bot': 'bot',
            'live': 'en vivo',
            'command': 'comando',
            'full': 'completo',
            'history': 'historial',
            'access': 'acceso',
            'enterprise-grade': 'nivel empresarial',
            'security': 'seguridad',
            'step-by-step': 'paso a paso',
            'guide': 'guía',
            'launch': 'lanzar',
            'first': 'primera',
            'campaign': 'campaña',
            'integration': 'integración',
            'includes': 'incluye',
            'end-to-end': 'extremo a extremo',
            'encryption': 'cifrado',
            'secure': 'seguro',
            'token': 'token',
            'compliance': 'cumplimiento',
            'business': 'comercial',
            'policies': 'políticas',
            'data': 'datos',
            'protected': 'protegido',
            'bank-level': 'nivel bancario',
            'businesses': 'negocios',
            'using': 'usar',
            'provide': 'proporcionar',
            'better': 'mejor',
            'drive': 'impulsar',
            'sales': 'ventas',
            'professional': 'profesional',
            'system': 'sistema',
            'voicebot': 'voicebot',
            'customers': 'clientes',
            'instantly': 'instantáneamente',
            'personalized': 'personalizado',
            'automated': 'automatizado',
            'responses': 'respuestas',
            'open': 'apertura',
            'rates': 'tasas',
            'global': 'global',
            'countries': 'países',
            'start': 'comenzar',
            'marketing': 'marketing',
            'ready': 'listo',
            'automatic': 'automático',
            'local': 'local',
            'number': 'número',
            'carrier': 'operador',
            'optimization': 'optimización',
            'opt-out': 'exclusión',
            'real-time': 'tiempo real',
            'tracking': 'seguimiento',
            'metrics': 'métricas',
            'timezone-aware': 'consciente de zona horaria',
            'sending': 'envío',
            'optimal': 'óptimo',
            'timing': 'tiempo',
            'based': 'basado',
            'recipient': 'destinatario',
            'behavior': 'comportamiento',
            'see': 'ver',
            'use': 'usar',
            'engagement': 'compromiso',
            'revenue': 'ingresos',
            'create': 'crear',
            'sophisticated': 'sofisticadas',
            'drag-and-drop': 'arrastrar y soltar',
            'smart': 'inteligente',
            'higher': 'mayor',
            'trial': 'ensayo',
            'free': 'gratuito',
            'sessions': 'sesiones',
            'team': 'equipo',
            'continuous': 'continuo',
            'enhancement': 'mejora',
            'establish': 'establecer',
            'AI': 'IA',
            'See': 'Ver',
            'How': 'Cómo',
            'Why': 'Por qué',
            'Our': 'Nuestra',
            'The': 'La',
            'All': 'Todos',
            'Transform': 'Transforma',
            'Connect': 'Conecta',
            'Send': 'Envía',
            'Join': 'Únete',
            'Start': 'Iniciar',
            'Ready': 'Listo',
            'Create': 'Crear',
            
            # Fix malformed words
            'Transparamaa': 'Transforma',
            'Clientes': 'clientes',
            'deen vivor': 'entregar',
            'deen vivory': 'entrega',
            'conectar tú': 'conectarte',
            'en vivo': 'en vivo',
            'historia': 'historial',
            'por-step': 'paso a paso',
            'Lanzamiento': 'Lanza',
            'primero': 'primera',
            'integración': 'integración',
            'es': 'están',
            'flujo de trabajos': 'flujos de trabajo',
            'automaticaliado': 'automáticamente',
            'rendimiento': 'rendimiento',
            'cliente': 'cliente',
            'opeproporciónns': 'operaciones',
            'Nosotros': 'Nosotros',
            'crecering': 'hacer crecer',
            'gestionarment': 'gestión',
            'informeing': 'informes',
            'enlace': 'enlace',
            'agente': 'agente',
            'campaña': 'campaña',
            'tarifas': 'tasas',
            'Lanzamiento': 'Lanza',
            'See cómo': 'Ve cómo'
        }
    
    def should_preserve_term(self, text: str) -> bool:
        """Check if text contains terms that should be preserved"""
        if not isinstance(text, str):
            return True
            
        # Preserve URLs, emails, technical patterns
        if any(x in text for x in ['@', '.com', '.net', '.org', 'http', 'www.', 'mailto:', 'tel:']):
            return True
            
        # Check preserved terms
        for term in self.preserve_terms:
            if term in text:
                return True
                
        return False
    
    def comprehensive_translate(self, text: str) -> str:
        """Comprehensive translation of English text to Spanish"""
        if not isinstance(text, str) or not text.strip():
            return text
            
        original_text = text
        
        # Don't translate if contains preserved terms (but still translate around them)
        if self.should_preserve_term(text):
            # For mixed text with preserved terms, translate parts
            for english, spanish in sorted(self.translations.items(), key=lambda x: len(x[0]), reverse=True):
                if len(english) > 3 and english.lower() in text.lower():
                    # Only replace if not part of a preserved term
                    temp_text = text
                    for term in self.preserve_terms:
                        if term in temp_text:
                            temp_text = temp_text.replace(term, f"__PRESERVE_{term.replace('.', '_DOT_').replace(' ', '_SPACE_')}__")
                    
                    if english.lower() in temp_text.lower():
                        pattern = re.compile(re.escape(english), re.IGNORECASE)
                        temp_text = pattern.sub(spanish, temp_text)
                        
                        # Restore preserved terms
                        for term in self.preserve_terms:
                            placeholder = f"__PRESERVE_{term.replace('.', '_DOT_').replace(' ', '_SPACE_')}__"
                            temp_text = temp_text.replace(placeholder, term)
                        
                        text = temp_text
        else:
            # Full translation for non-preserved text
            # First try exact matches
            if text in self.translations:
                return self.translations[text]
            
            # Try phrase matches (longer first)
            for english, spanish in sorted(self.translations.items(), key=lambda x: len(x[0]), reverse=True):
                if len(english) > 3 and english.lower() in text.lower():
                    pattern = re.compile(re.escape(english), re.IGNORECASE)
                    text = pattern.sub(spanish, text)
            
            # Word-by-word translation for remaining words
            words = re.findall(r'\b\w+\b|\W+', text)
            translated_words = []
            
            for word in words:
                if re.match(r'\w+', word):  # It's a word
                    translated = False
                    word_lower = word.lower()
                    
                    for english, spanish in self.translations.items():
                        if english.lower() == word_lower:
                            # Preserve original case
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
                    translated_words.append(word)
            
            text = ''.join(translated_words)
        
        return text
    
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
    """Main translation process"""
    print("🚀 COMPREHENSIVE ENGLISH TO SPANISH TRANSLATION")
    print("=" * 60)
    
    try:
        # Load the JSON file
        with open('es.json', 'r', encoding='utf-8') as f:
            data = json.load(f, object_pairs_hook=OrderedDict)
        print("✅ Loaded es.json successfully")
        
        # Initialize translator
        translator = ComprehensiveTranslator()
        print(f"📚 Loaded {len(translator.translations)} translation entries")
        
        # Translate all content
        print("🔄 Translating all English content...")
        translated_data = translator.translate_json_recursively(data)
        
        # Validate JSON structure
        json_string = json.dumps(translated_data, ensure_ascii=False, indent=2)
        json.loads(json_string)
        print("✅ JSON structure validation passed")
        
        # Save translated file
        with open('es.json', 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)
        print("💾 Successfully saved translated es.json")
        
        return True
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return False


if __name__ == "__main__":
    success = main()
    if success:
        print("\n🎉 COMPREHENSIVE TRANSLATION COMPLETED!")
        print("🔍 Run verification to check remaining English strings...")
    else:
        print("\n❌ Translation failed!")
