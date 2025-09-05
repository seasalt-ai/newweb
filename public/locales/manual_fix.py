#!/usr/bin/env python3
"""
Manual fix script to handle the specific remaining English strings.
"""

import json
from collections import OrderedDict


def main():
    """Manually fix the remaining specific English strings."""
    print("Loading es.json for manual fixes...")
    
    try:
        with open('es.json', 'r', encoding='utf-8') as f:
            es_data = json.load(f, object_pairs_hook=OrderedDict)
    except Exception as e:
        print(f"Error loading es.json: {e}")
        return False
    
    print("Applying manual translations...")
    
    # Manual translations for specific remaining strings
    manual_fixes = {
        # howItWorks section
        ('howItWorks', 'connectYourChannels', 'description'): 'Vincula tu teléfono, WhatsApp, SMS, chat del sitio web y redes sociales en minutos. No se requiere experiencia técnica.',
        
        # useCases section
        ('useCases', 'description'): 'Desde centros de contacto hasta campañas de marketing, ve cómo Seasalt.ai se adapta a tus requisitos específicos de negocio con características de nivel empresarial en una plataforma simple y unificada.',
        
        # SMS Management
        ('useCases', 'smsManagement', 'title'): 'Gestión Unificada de SMS',
        ('useCases', 'smsManagement', 'headline'): 'Gestiona Múltiples Líneas Telefónicas y SMS Bidireccional en Una Plataforma',
        ('useCases', 'smsManagement', 'description'): 'Consolida todas las líneas telefónicas de tu negocio y comunicaciones SMS en una sola plataforma poderosa.',
        ('useCases', 'smsManagement', 'features', 'twoWaySms'): 'Conversaciones SMS bidireccionales',
        ('useCases', 'smsManagement', 'features', 'unifiedHistory'): 'Historial de SMS y llamadas unificado',
        ('useCases', 'smsManagement', 'features', 'automatedResponses'): 'Respuestas SMS automatizadas',
        
        # SMS Marketing
        ('useCases', 'smsMarketing', 'title'): 'Campañas de Marketing por SMS',
        ('useCases', 'smsMarketing', 'headline'): 'Lanza Campañas SMS A2P Poderosas con 10DLC y Número Gratuito',
        ('useCases', 'smsMarketing', 'description'): 'Ejecuta campañas profesionales de marketing por SMS con alta entregabilidad y cumplimiento.',
        ('useCases', 'smsMarketing', 'features', 'tenDlc'): 'Campañas registradas 10DLC',
        
        # WhatsApp Business
        ('useCases', 'whatsappBusiness', 'title'): 'Campañas de Negocios de WhatsApp',
        ('useCases', 'whatsappBusiness', 'headline'): 'Alcanza Clientes Globales con la Plataforma de Negocios de WhatsApp',
        ('useCases', 'whatsappBusiness', 'description'): 'Lanza campañas dirigidas de WhatsApp usando la Plataforma Oficial de Negocios de WhatsApp.',
        ('useCases', 'whatsappBusiness', 'features', 'apiIntegration'): 'Integración de API de Negocios de WhatsApp',
        
        # Problem Solution
        ('problemSolution', 'description'): 'Tus clientes están tratando de contactarte en todas partes. Un mensaje perdido es una venta perdida. Seasalt.ai reúne todas tus comunicaciones en un solo lugar, para que nunca pierdas una oportunidad.',
        ('problemSolution', 'problems', 'fragmented', 'description'): 'Saltar entre WhatsApp, registros telefónicos y chat web crea caos y desperdicia tiempo.',
        ('problemSolution', 'solution', 'title'): 'Seasalt.ai: Tu Solución Omnicanal Copilotada',
        ('problemSolution', 'solution', 'cta'): 'Usa Seasalt.ai para Resolver Esto',
        
        # Mock Data - more entries
        ('problemSolution', 'mockData', 'supportTickets', 'mike', 'description'): 'WhatsApp: Pregunta sobre envío',
        ('problemSolution', 'mockData', 'supportTickets', 'lisa', 'description'): 'Chat del sitio web: Consulta sobre producto',
        ('problemSolution', 'mockData', 'supportTickets', 'lisa', 'timeAgo'): 'hace 8m',
        ('problemSolution', 'mockData', 'supportTickets', 'david', 'description'): 'Llamada de soporte: Problema técnico',
        ('problemSolution', 'mockData', 'supportTickets', 'david', 'timeAgo'): 'hace 12m',
        
        # Campaign data
        ('problemSolution', 'mockData', 'campaigns', 'blackFriday', 'name'): 'Campaña Black Friday',
        ('problemSolution', 'mockData', 'campaigns', 'blackFriday', 'description'): 'SMS: 2,847 enviados • 312 respuestas',
        ('problemSolution', 'mockData', 'campaigns', 'whatsappLaunch', 'name'): 'Lanzamiento de Producto WhatsApp',
        ('problemSolution', 'mockData', 'campaigns', 'whatsappLaunch', 'description'): '1,523 mensajes • 89 conversaciones',
        ('problemSolution', 'mockData', 'campaigns', 'whatsappLaunch', 'result'): '+23 ventas',
        ('problemSolution', 'mockData', 'campaigns', 'cartRecovery', 'name'): 'Recuperación de Carrito Abandonado',
        ('problemSolution', 'mockData', 'campaigns', 'cartRecovery', 'description'): 'Correo + SMS: 156 recuperados',
        ('problemSolution', 'mockData', 'campaigns', 'followUp', 'name'): 'Campaña de Llamadas de Seguimiento',
        ('problemSolution', 'mockData', 'campaigns', 'followUp', 'description'): 'Voicebot de IA: 89 llamadas • 34 citas',
        ('problemSolution', 'mockData', 'campaigns', 'followUp', 'result'): '+34 citas',
    }
    
    # Apply manual fixes
    for path, translation in manual_fixes.items():
        current = es_data
        # Navigate to the nested location
        for key in path[:-1]:
            current = current[key]
        # Set the translation
        current[path[-1]] = translation
    
    print("Validating JSON...")
    try:
        json_string = json.dumps(es_data, ensure_ascii=False, indent=2)
        json.loads(json_string)  # Validate
        print("✓ JSON validation successful")
    except Exception as e:
        print(f"✗ JSON validation failed: {e}")
        return False
    
    print("Writing manually fixed es.json...")
    try:
        with open('es.json', 'w', encoding='utf-8') as f:
            json.dump(es_data, f, ensure_ascii=False, indent=2)
        print("✓ Successfully applied manual fixes")
        return True
    except Exception as e:
        print(f"✗ Error writing es.json: {e}")
        return False


if __name__ == "__main__":
    success = main()
    if success:
        print("\n🎉 Manual fixes applied successfully!")
        print("All remaining English strings have been manually translated.")
        print("The es.json file should now be completely in Spanish.")
    else:
        print("\n❌ Manual fixes failed.")
