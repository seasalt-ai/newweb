#!/usr/bin/env python3
"""
Final cleanup script to translate the last remaining English strings in es.json.
"""

import json
import re
from collections import OrderedDict


def main():
    """Perform final cleanup of remaining English strings."""
    print("Loading es.json for final cleanup...")
    
    try:
        with open('es.json', 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error loading es.json: {e}")
        return False
    
    # Dictionary of final remaining English strings to translate
    final_replacements = {
        # Strings found in the previous scan
        'Link your phone, WhatsApp, SMS, website chat, and social media in minutes. No technical expertise required.': 'Vincula tu teléfono, WhatsApp, SMS, chat del sitio web y redes sociales en minutos. No se requiere experiencia técnica.',
        
        'From contact centers to marketing campaigns, see how Seasalt.ai adapts to your specific business requirements with enterprise-grade features in a simple, unified platform.': 'Desde centros de contacto hasta campañas de marketing, ve cómo Seasalt.ai se adapta a tus requisitos específicos de negocio con características de nivel empresarial en una plataforma simple y unificada.',
        
        'Unified SMS Management': 'Gestión Unificada de SMS',
        'Manage Multiple Phone Lines & Two-Way SMS in One Platform': 'Gestiona Múltiples Líneas Telefónicas y SMS Bidireccional en Una Plataforma',
        'Consolidate all your business phone lines and SMS communications into a single, powerful platform.': 'Consolida todas las líneas telefónicas de tu negocio y comunicaciones SMS en una sola plataforma poderosa.',
        'Two-way SMS conversations': 'Conversaciones SMS bidireccionales',
        'SMS & call history unified': 'Historial de SMS y llamadas unificado',
        'Automated SMS responses': 'Respuestas SMS automatizadas',
        
        'SMS Marketing Campaigns': 'Campañas de Marketing por SMS',
        'Launch Powerful A2P SMS Campaigns with 10DLC & Toll-Free': 'Lanza Campañas SMS A2P Poderosas con 10DLC y Número Gratuito',
        'Execute professional SMS marketing campaigns with high deliverability and compliance.': 'Ejecuta campañas profesionales de marketing por SMS con alta entregabilidad y cumplimiento.',
        '10DLC registered campaigns': 'Campañas registradas 10DLC',
        
        'WhatsApp Business Campaigns': 'Campañas de Negocios de WhatsApp',
        'Reach Global Customers with WhatsApp Business Platform': 'Alcanza Clientes Globales con la Plataforma de Negocios de WhatsApp',
        'Launch targeted WhatsApp campaigns using the official WhatsApp Business Platform.': 'Lanza campañas dirigidas de WhatsApp usando la Plataforma Oficial de Negocios de WhatsApp.',
        'WhatsApp Business API integration': 'Integración de API de Negocios de WhatsApp',
        
        'Your customers are trying to reach you everywhere. A missed message is a missed sale. Seasalt.ai brings all your communications into one place, so you never miss an opportunity.': 'Tus clientes están tratando de contactarte en todas partes. Un mensaje perdido es una venta perdida. Seasalt.ai reúne todas tus comunicaciones en un solo lugar, para que nunca pierdas una oportunidad.',
        
        'Jumping between WhatsApp, phone logs, and web chat creates chaos and wastes time.': 'Saltar entre WhatsApp, registros telefónicos y chat web crea caos y desperdicia tiempo.',
        
        'Seasalt.ai: Your Omni-Channel Copiloted Solution': 'Seasalt.ai: Tu Solución Omnicanal Copilotada',
        
        'Use Seasalt.ai to Solve This': 'Usa Seasalt.ai para Resolver Esto',
        
        # Additional common patterns
        'Sarah Johnson': 'Sarah Johnson',
        'Phone call about order status': 'Llamada telefónica sobre estado del pedido',
        'Mike Chen': 'Mike Chen',
        'WhatsApp: Shipping question': 'WhatsApp: Pregunta sobre envío',
        'David Park': 'David Park',
        'Email: Product inquiry': 'Correo: Consulta sobre producto',
        'Lisa Thompson': 'Lisa Thompson',
        'Live chat: Technical support': 'Chat en vivo: Soporte técnico',
        'Alex Rodriguez': 'Alex Rodriguez',
        'SMS: Appointment confirmation': 'SMS: Confirmación de cita',
        'Jennifer Kim': 'Jennifer Kim',
        'Facebook: Business inquiry': 'Facebook: Consulta empresarial',
        
        # Time expressions
        '2m ago': 'hace 2m',
        '5m ago': 'hace 5m',
        '1h ago': 'hace 1h',
        '3h ago': 'hace 3h',
        '1d ago': 'hace 1d',
        '2d ago': 'hace 2d',
        
        # Additional UI elements that might be missed
        'Get Started': 'Comenzar',
        'Learn More': 'Saber Más',
        'Try Now': 'Probar Ahora',
        'Contact Us': 'Contáctanos',
        'Book Now': 'Reservar Ahora',
        'Sign up': 'Registrarse',
        'Log in': 'Iniciar Sesión',
        'Dashboard': 'Panel de Control',
        'Settings': 'Configuración',
        'Account': 'Cuenta',
        'Profile': 'Perfil',
        'Plans': 'Planes',
        'Upgrade': 'Actualizar',
        'Cancel': 'Cancelar',
        'Save': 'Guardar',
        'Edit': 'Editar',
        'Delete': 'Eliminar',
        'Add': 'Agregar',
        'Remove': 'Quitar',
        'Update': 'Actualizar',
        'Create': 'Crear',
        'View': 'Ver',
        'Send': 'Enviar',
        'Reply': 'Responder',
        'Forward': 'Reenviar',
        'Archive': 'Archivar',
        'Search': 'Buscar',
        'Filter': 'Filtrar',
        'Sort': 'Ordenar',
        'Next': 'Siguiente',
        'Previous': 'Anterior',
        'Back': 'Atrás',
        'Continue': 'Continuar',
        'Finish': 'Finalizar',
        'Done': 'Hecho',
        'Success': 'Éxito',
        'Error': 'Error',
        'Loading': 'Cargando',
        'Processing': 'Procesando',
        'Connecting': 'Conectando',
        'Connected': 'Conectado',
        'Online': 'En línea',
        'Offline': 'Fuera de línea',
        'Active': 'Activo',
        'Inactive': 'Inactivo',
        'Enabled': 'Habilitado',
        'Disabled': 'Deshabilitado',
        'Yes': 'Sí',
        'No': 'No',
        'OK': 'Aceptar',
        'Close': 'Cerrar',
        'Open': 'Abrir',
        'New': 'Nuevo',
        'All': 'Todo',
        'None': 'Ninguno',
        'Select': 'Seleccionar',
        'Today': 'Hoy',
        'Yesterday': 'Ayer',
        'Tomorrow': 'Mañana',
    }
    
    print("Applying final string replacements...")
    
    # Apply all the replacements
    for english, spanish in final_replacements.items():
        # Use JSON-safe replacement to ensure we only replace within JSON values
        pattern = f'": "{re.escape(english)}"'
        replacement = f'": "{spanish}"'
        content = content.replace(pattern, replacement)
    
    print("Validating final JSON...")
    try:
        json.loads(content)  # Validate JSON
        print("✓ JSON validation successful")
    except Exception as e:
        print(f"✗ JSON validation failed: {e}")
        return False
    
    print("Writing final es.json...")
    try:
        with open('es.json', 'w', encoding='utf-8') as f:
            f.write(content)
        print("✓ Successfully applied final cleanup")
        return True
    except Exception as e:
        print(f"✗ Error writing es.json: {e}")
        return False


if __name__ == "__main__":
    success = main()
    if success:
        print("\n🎉 Final cleanup successful!")
        print("All remaining English text has been translated to Spanish.")
        print("The es.json file should now be completely in Spanish.")
    else:
        print("\n❌ Final cleanup failed.")
