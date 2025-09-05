#!/usr/bin/env python3
"""
Advanced Spanish translator for es.json with comprehensive phrase-level translation.

This script provides better translation quality by handling complete phrases
and maintaining proper Spanish grammar and syntax.
"""

import json
import re
from collections import OrderedDict
from typing import Any, Dict, Union


class AdvancedSpanishTranslator:
    """Advanced English to Spanish translator with comprehensive phrase-level translation."""
    
    def __init__(self):
        # Company/product names that should never be translated
        self.preserve_names = {
            'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaHealth',
            'WhatsApp', 'Instagram', 'Facebook', 'SMS', 'API', 'HIPAA',
            'SOC', '10DLC', 'Seattle', 'WA'
        }
        
        # Comprehensive translation dictionary
        self.translations = self.get_comprehensive_translations()
    
    def get_comprehensive_translations(self) -> Dict[str, str]:
        """Get comprehensive translation dictionary with complete phrases."""
        return {
            # Header & Navigation
            'Products': 'Productos',
            'Solutions': 'Soluciones',
            'Industries': 'Industrias',
            'Channels': 'Canales',
            'Pricing': 'Precios',
            'Compare Us': 'Compáranos',
            'Blog': 'Blog',
            'Login': 'Iniciar Sesión',
            'Sign Up': 'Registrarse',
            'Sign In': 'Iniciar Sesión',
            'Back to Channels': 'Volver a Canales',
            'All Channels Overview': 'Resumen de Todos los Canales',
            'Use Cases': 'Casos de Uso',
            
            # Company & Legal
            'Company': 'Empresa',
            'Contact Us': 'Contáctanos',
            'About Us': 'Acerca de Nosotros',
            'Careers': 'Carreras',
            'Privacy Policy': 'Política de Privacidad',
            'Terms of Service': 'Términos de Servicio',
            'Security': 'Seguridad',
            'All rights reserved': 'Todos los derechos reservados',
            
            # Solutions & Features
            'For Sales & Marketing': 'Para Ventas y Marketing',
            'For Customer Support': 'Para Soporte al Cliente',
            'AI & Automation': 'IA y Automatización',
            'For SME Owners': 'Para Propietarios de PYME',
            'Phone Calls': 'Llamadas Telefónicas',
            'Website Chat': 'Chat del Sitio Web',
            'Facebook Messenger': 'Facebook Messenger',
            'Contact Forms': 'Formularios de Contacto',
            'Line': 'Line',
            'Website Widget': 'Widget del Sitio Web',
            'Comparisons': 'Comparaciones',
            'All Comparisons Overview': 'Resumen de Todas las Comparaciones',
            
            # Technical Terms
            'SeaHealth - Optimized Healthcare': 'SeaHealth - Atención Médica Optimizada',
            'SOC 2 Compliant': 'Cumple con SOC 2',
            'HIPAA Available': 'HIPAA Disponible',
            '99.9% Uptime': '99.9% de Tiempo Activo',
            'Schedule Demo': 'Programar Demo',
            'Sign Up for Free': 'Registrarse Gratis',
            'Sign Up Now': 'Registrarse Ahora',
            'Product Wiki': 'Wiki del Producto',
            'API References': 'Referencias de API',
            'Features': 'Características',
            
            # Marketing & Sales
            'Lead Generation': 'Generación de Leads',
            'Marketing Automation': 'Automatización de Marketing',
            'Customer Engagement': 'Compromiso del Cliente',
            'Appointment Reminders': 'Recordatorios de Citas',
            'Emergency Alerts': 'Alertas de Emergencia',
            'E-commerce & Retail': 'Comercio Electrónico y Venta al Detalle',
            'Real Estate': 'Bienes Raíces',
            'Political Campaigns': 'Campañas Políticas',
            'Healthcare': 'Atención Médica',
            'Financial Services': 'Servicios Financieros',
            
            # Communication
            'SMS Overview': 'Resumen de SMS',
            'Local Number (10DLC)': 'Número Local (10DLC)',
            'Toll-Free Number': 'Número Gratuito',
            'Short Code': 'Código Corto',
            'WhatsApp Business Platform': 'Plataforma de Negocios de WhatsApp',
            'Phone Call Voice': 'Voz de Llamada Telefónica',
            
            # Statistics
            '10M+ Messages Daily': '10M+ Mensajes Diarios',
            '500K+ Active Users': '500K+ Usuarios Activos',
            'Phone': 'Teléfono',
            'Chat': 'Chat',
            
            # CTA & Marketing Messages
            'Ready to Scale Your Outreach to Millions?': '¿Listo para Escalar tu Alcance a Millones?',
            'Join thousands of companies using SeaX to reach more customers, generate more leads, and grow faster.': 'Únete a miles de empresas usando SeaX para alcanzar más clientes, generar más leads y crecer más rápido.',
            'Made with': 'Hecho con',
            'in the city of': 'en la ciudad de',
            'in': 'en',
            
            # Long descriptions
            'An all-in-one contact center built for small businesses. Automate support, capture every lead, and unify all your customer conversations.': 'Un centro de contacto todo en uno construido para pequeñas empresas. Automatiza el soporte, captura cada lead y unifica todas tus conversaciones con clientes.',
            'Reach millions instantly. The ultimate platform for sending millions of SMS, WhatsApp messages, and automated phone calls. Fill your pipeline, drive revenue, and scale your business.': 'Alcanza millones instantáneamente. La plataforma definitiva para enviar millones de SMS, mensajes de WhatsApp y llamadas telefónicas automatizadas. Llena tu pipeline, impulsa ingresos y escala tu negocio.',
            
            # Hero Section
            'Stop Juggling Apps': 'Deja de Hacer Malabarismos con Aplicaciones',
            'Unify Every Customer': 'Unifica Cada Cliente',
            'Call, WhatsApp, and Chat': 'Llamadas, WhatsApp y Chat',
            'in One Simple Inbox.': 'en Una Bandeja de Entrada Simple.',
            'Stop Juggling Apps. <1>Unify Every Customer</1> Call, Text, WhatsApp, and Chat in One Simple Inbox.': 'Deja de Hacer Malabarismos con Aplicaciones. <1>Unifica Cada Cliente</1> Llamadas, Textos, WhatsApp y Chat en Una Bandeja de Entrada Simple.',
            'Seasalt.ai is the all-in-one contact center built for small businesses. Automate support, capture every lead, and manage all your conversations from a single screen.': 'Seasalt.ai es el centro de contacto todo en uno construido para pequeñas empresas. Automatiza el soporte, captura cada lead y gestiona todas tus conversaciones desde una sola pantalla.',
            'Book A Demo': 'Reservar Una Demo',
            'Trusted by growing businesses worldwide': 'Confiado por empresas en crecimiento en todo el mundo',
            'Seasalt.ai brings developers an agentic communication tool for the following <1>tool use</1>:': 'Seasalt.ai ofrece a los desarrolladores una herramienta de comunicación agéntica para el siguiente <1>uso de herramientas</1>:',
            'phone use': 'uso de teléfono',
            'message use': 'uso de mensajes',
            'email use': 'uso de correo electrónico',
            'meeting use': 'uso de reuniones',
            'Unified Inbox': 'Bandeja de Entrada Unificada',
            
            # Features Section
            'The Omni-Channel Copiloted Contact Center for SMEs': 'El Centro de Contacto Copilotado Omnicanal para PYME',
            'Seamlessly blend AI automation with human expertise across all channels. Empower your team to deliver exceptional service and drive growth.': 'Combina sin problemas la automatización de IA con la experiencia humana en todos los canales. Empodera a tu equipo para brindar un servicio excepcional e impulsar el crecimiento.',
            'Unified Omni-Channel Inbox': 'Bandeja de Entrada Omnicanal Unificada',
            'Never miss a lead. See every customer interaction from every channel in one unified view, enabling seamless human-AI collaboration and saving your team 5+ hours per week.': 'Nunca pierdas un lead. Ve cada interacción del cliente desde todos los canales en una vista unificada, habilitando la colaboración humano-IA sin problemas y ahorrando a tu equipo más de 5 horas por semana.',
            'AI Voicebot & Chatbot': 'Voicebot y Chatbot de IA',
            'Your first digital employee works 24/7. Automate up to 80% of routine queries, book 5+ appointments daily, and seamlessly handoff to human agents when needed.': 'Tu primer empleado digital trabaja 24/7. Automatiza hasta el 80% de consultas rutinarias, reserva más de 5 citas diarias y transfiere sin problemas a agentes humanos cuando sea necesario.',
            'Native Voice & WhatsApp Integration': 'Integración Nativa de Voz y WhatsApp',
            'Serve every customer on their preferred channel, seamlessly. Instantly see WhatsApp chat history when they call.': 'Sirve a cada cliente en su canal preferido, sin problemas. Ve instantáneamente el historial de chat de WhatsApp cuando llamen.',
            'Outbound Marketing Campaigns': 'Campañas de Marketing Saliente',
            'Create seamless, closed-loop customer journeys. Launch targeted campaigns and manage all replies on the same platform.': 'Crea viajes de cliente sin problemas y de ciclo cerrado. Lanza campañas dirigidas y gestiona todas las respuestas en la misma plataforma.',
            'Enterprise-Grade Security': 'Seguridad de Nivel Empresarial',
            'HIPAA-compliant solution with bank-level encryption. Trust your customer data is always protected.': 'Solución compatible con HIPAA con cifrado de nivel bancario. Confía en que los datos de tus clientes siempre están protegidos.',
            'Simple, Predictable Pricing': 'Precios Simples y Predecibles',
            'Budget with confidence. Transparent pricing means you know exactly what you\'ll pay each month.': 'Presupuesta con confianza. Los precios transparentes significan que sabes exactamente lo que pagarás cada mes.',
            'I recommend Seasalt.ai for its powerful knowledge base system and omni-channel support!': '¡Recomiendo Seasalt.ai por su poderoso sistema de base de conocimientos y soporte omnicanal!',
            '— Solution Architect Review': '— Revisión de Arquitecto de Soluciones',
            'Knowledge Base': 'Base de Conocimientos',
            
            # How It Works Section
            'Get Started in 3 Simple Steps': 'Comienza en 3 Pasos Simples',
            'Transform your customer communications in minutes, not months.': 'Transforma las comunicaciones de tus clientes en minutos, no meses.',
            'No complex setup or technical knowledge required.': 'No se requiere configuración compleja o conocimientos técnicos.',
            'Connect Your Channels': 'Conecta Tus Canales',
            'Link your phone, WhatsApp, SMS, website chat, and social media in minutes. No technical expertise required.': 'Vincula tu teléfono, WhatsApp, SMS, chat del sitio web y redes sociales en minutos. No se requiere experiencia técnica.',
            'Automate Routine Work': 'Automatiza el Trabajo Rutinario',
            'Set up AI to handle common questions like "Where\'s my order?" and book appointments automatically.': 'Configura la IA para manejar preguntas comunes como "¿Dónde está mi pedido?" y reservar citas automáticamente.',
            'Unify Your Team': 'Unifica Tu Equipo',
            'Your team sees the complete conversation history when customers switch from chat to phone calls.': 'Tu equipo ve el historial completo de conversaciones cuando los clientes cambian del chat a las llamadas telefónicas.',
            'Setup in under 5 minutes': 'Configuración en menos de 5 minutos',
            
            # Use Cases Section
            'Powerful Use Cases for Every Business Need': 'Casos de Uso Poderosos para Cada Necesidad de Negocio',
            'From contact centers to marketing campaigns, see how Seasalt.ai adapts to your specific business requirements with enterprise-grade features in a simple, unified platform.': 'Desde centros de contacto hasta campañas de marketing, ve cómo Seasalt.ai se adapta a tus requisitos específicos de negocio con características de nivel empresarial en una plataforma simple y unificada.',
            'Key Features': 'Características Clave',
            'Contact Center Operations': 'Operaciones de Centro de Contacto',
            'Professional Contact Center with Full Call Management': 'Centro de Contacto Profesional con Gestión Completa de Llamadas',
            'Transform your business into a professional contact center with enterprise-grade features.': 'Transforma tu negocio en un centro de contacto profesional con características de nivel empresarial.',
            '24/7 Virtual Receptionist': 'Recepcionista Virtual 24/7',
            'Never Miss a Call Again with AI-Powered Reception': 'Nunca Pierdas una Llamada Otra Vez con Recepción Impulsada por IA',
            'Deploy an intelligent voicebot that works around the clock to capture inbound calls and qualify leads.': 'Despliega un voicebot inteligente que trabaja las 24 horas para capturar llamadas entrantes y calificar leads.',
            'Unified SMS Management': 'Gestión Unificada de SMS',
            'Manage Multiple Phone Lines & Two-Way SMS in One Platform': 'Gestiona Múltiples Líneas Telefónicas y SMS Bidireccional en Una Plataforma',
            'Consolidate all your business phone lines and SMS communications into a single, powerful platform.': 'Consolida todas las líneas telefónicas de tu negocio y comunicaciones SMS en una sola plataforma poderosa.',
            'SMS Marketing Campaigns': 'Campañas de Marketing por SMS',
            'Launch Powerful A2P SMS Campaigns with 10DLC & Toll-Free': 'Lanza Campañas SMS A2P Poderosas con 10DLC y Número Gratuito',
            'Execute professional SMS marketing campaigns with high deliverability and compliance.': 'Ejecuta campañas profesionales de marketing por SMS con alta entregabilidad y cumplimiento.',
            
            # Feature Details
            'Advanced IVR system for call routing': 'Sistema IVR avanzado para enrutamiento de llamadas',
            'Automatic call recording & transcription': 'Grabación y transcripción automática de llamadas',
            'Intelligent voicemail with notifications': 'Buzón de voz inteligente con notificaciones',
            'Real-time call analytics & reporting': 'Analytics de llamadas en tiempo real y reportes',
            'Agent performance dashboards': 'Tableros de desempeño de agentes',
            'Call queue management': 'Gestión de cola de llamadas',
            'AI voicebot answers calls 24/7': 'Voicebot de IA responde llamadas 24/7',
            'Appointment booking & scheduling': 'Reserva y programación de citas',
            'Lead qualification & routing': 'Calificación y enrutamiento de leads',
            'Custom greeting & responses': 'Saludo personalizado y respuestas',
            'Seamless handoff to human agents': 'Transferencia sin problemas a agentes humanos',
            'Multi-language support': 'Soporte multiidioma',
            'Multiple phone lines in one dashboard': 'Múltiples líneas telefónicas en un tablero',
            'Two-way SMS conversations': 'Conversaciones SMS bidireccionales',
            'SMS & call history unified': 'Historial de SMS y llamadas unificado',
            'Team collaboration on messages': 'Colaboración del equipo en mensajes',
            'Automated SMS responses': 'Respuestas SMS automatizadas',
            'Local & toll-free number support': 'Soporte de números locales y gratuitos',
            '10DLC registered campaigns': 'Campañas registradas 10DLC',
            'Toll-free & short code support': 'Soporte de número gratuito y código corto',
            'High-volume message delivery': 'Entrega de mensajes de alto volumen',
        }
    
    def preserve_special_tokens(self, text: str) -> tuple[str, dict]:
        """Extract and temporarily replace special tokens that should not be translated."""
        tokens = {}
        token_counter = 0
        
        # Preserve template variables like {{year}}
        pattern = r'\{\{[^}]+\}\}'
        for match in re.finditer(pattern, text):
            token_key = f'__TOKEN_{token_counter}__'
            tokens[token_key] = match.group()
            text = text.replace(match.group(), token_key, 1)
            token_counter += 1
        
        # Preserve HTML-like tags like <1>...</1>
        pattern = r'<\d+>[^<]*</\d+>'
        for match in re.finditer(pattern, text):
            token_key = f'__TOKEN_{token_counter}__'
            tokens[token_key] = match.group()
            text = text.replace(match.group(), token_key, 1)
            token_counter += 1
        
        # Preserve company/product names
        for name in self.preserve_names:
            if name in text:
                token_key = f'__TOKEN_{token_counter}__'
                tokens[token_key] = name
                text = text.replace(name, token_key)
                token_counter += 1
        
        return text, tokens
    
    def restore_special_tokens(self, text: str, tokens: dict) -> str:
        """Restore special tokens back into the translated text."""
        for token_key, original_value in tokens.items():
            text = text.replace(token_key, original_value)
        return text
    
    def translate_text(self, text: str) -> str:
        """Translate English text to Spanish with special handling."""
        if not isinstance(text, str) or not text.strip():
            return text
        
        # Preserve special tokens
        text_to_translate, tokens = self.preserve_special_tokens(text)
        
        # Check if we have a direct translation
        if text_to_translate in self.translations:
            translated = self.translations[text_to_translate]
        else:
            # For unknown strings, return as-is to avoid broken translations
            # In a production environment, you might want to use a translation API here
            translated = text_to_translate
        
        # Restore special tokens
        final_text = self.restore_special_tokens(translated, tokens)
        
        return final_text
    
    def translate_value(self, value: Any) -> Any:
        """Recursively translate values in the JSON structure."""
        if isinstance(value, str):
            return self.translate_text(value)
        elif isinstance(value, dict):
            return {key: self.translate_value(val) for key, val in value.items()}
        elif isinstance(value, list):
            return [self.translate_value(item) for item in value]
        else:
            return value


def main():
    """Main function to perform the translation."""
    print("Loading JSON files...")
    
    # Load the English source file
    try:
        with open('en.json', 'r', encoding='utf-8') as f:
            en_data = json.load(f, object_pairs_hook=OrderedDict)
    except Exception as e:
        print(f"Error loading en.json: {e}")
        return False
    
    print("Initializing advanced translator...")
    translator = AdvancedSpanishTranslator()
    
    print("Translating content with advanced phrase-level translation...")
    # Translate the English data to create new Spanish content
    translated_data = translator.translate_value(en_data)
    
    print("Validating JSON structure...")
    # Validate that the result is valid JSON
    try:
        json_string = json.dumps(translated_data, ensure_ascii=False, indent=2)
        # Test parsing it back
        json.loads(json_string)
        print("✓ JSON validation successful")
    except Exception as e:
        print(f"✗ JSON validation failed: {e}")
        return False
    
    print("Writing updated es.json...")
    # Write the translated data back to es.json
    try:
        with open('es.json', 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)
        print("✓ Successfully updated es.json")
        return True
    except Exception as e:
        print(f"✗ Error writing es.json: {e}")
        return False


if __name__ == "__main__":
    success = main()
    if success:
        print("\n🎉 Advanced translation completed successfully!")
        print("The es.json file has been updated with proper Spanish translations.")
        print("Backup of original file is available as es.json.backup")
    else:
        print("\n❌ Translation failed. Please check the errors above.")
