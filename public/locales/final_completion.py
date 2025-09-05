#!/usr/bin/env python3
"""
Final completion script for missing Spanish translations in es.json.

This script adds translations for the remaining English strings that weren't 
covered in the previous translation passes.
"""

import json
from collections import OrderedDict
import re


def main():
    """Complete the remaining translations in es.json."""
    print("Loading es.json for final completion...")
    
    # Load the current Spanish file
    try:
        with open('es.json', 'r', encoding='utf-8') as f:
            es_data = json.load(f, object_pairs_hook=OrderedDict)
    except Exception as e:
        print(f"Error loading es.json: {e}")
        return False
    
    # Final translations for remaining English strings
    final_translations = {
        'SeaHealth - Optimized Healthcare': 'SeaHealth - Atención Médica Optimizada',
        'All rights reserved': 'Todos los derechos reservados',
        'API References': 'Referencias de API',
        'SMS Overview': 'Resumen de SMS',
        'SOC 2 Compliant': 'Cumple con SOC 2',
        'HIPAA Available': 'HIPAA Disponible',
        'WhatsApp Business Platform': 'Plataforma de Negocios de WhatsApp',
        'Join thousands of companies using SeaX to reach more customers, generate more leads, and grow faster.': 'Únete a miles de empresas usando SeaX para alcanzar más clientes, generar más leads y crecer más rápido.',
        'Reach millions instantly. The ultimate platform for sending millions of SMS, WhatsApp messages, and automated phone calls. Fill your pipeline, drive revenue, and scale your business.': 'Alcanza millones instantáneamente. La plataforma definitiva para enviar millones de SMS, mensajes de WhatsApp y llamadas telefónicas automatizadas. Llena tu pipeline, impulsa ingresos y escala tu negocio.',
        'Call, WhatsApp, and Chat': 'Llamadas, WhatsApp y Chat',
        'Stop Juggling Apps. <1>Unify Every Customer</1> Call, Text, WhatsApp, and Chat in One Simple Inbox.': 'Deja de Hacer Malabarismos con Aplicaciones. <1>Unifica Cada Cliente</1> Llamadas, Textos, WhatsApp y Chat en Una Bandeja de Entrada Simple.',
        'Seasalt.ai is the all-in-one contact center built for small businesses. Automate support, capture every lead, and manage all your conversations from a single screen.': 'Seasalt.ai es el centro de contacto todo en uno construido para pequeñas empresas. Automatiza el soporte, captura cada lead y gestiona todas tus conversaciones desde una sola pantalla.',
        'Seasalt.ai brings developers an agentic communication tool for the following <1>tool use</1>:': 'Seasalt.ai ofrece a los desarrolladores una herramienta de comunicación agéntica para el siguiente <1>uso de herramientas</1>:',
        'Native Voice & WhatsApp Integration': 'Integración Nativa de Voz y WhatsApp',
        'Serve every customer on their preferred channel, seamlessly. Instantly see WhatsApp chat history when they call.': 'Sirve a cada cliente en su canal preferido, sin problemas. Ve instantáneamente el historial de chat de WhatsApp cuando llamen.',
        'HIPAA-compliant solution with bank-level encryption. Trust your customer data is always protected.': 'Solución compatible con HIPAA con cifrado de nivel bancario. Confía en que los datos de tus clientes siempre están protegidos.',
        'I recommend Seasalt.ai for its powerful knowledge base system and omni-channel support!': '¡Recomiendo Seasalt.ai por su poderoso sistema de base de conocimientos y soporte omnicanal!',
    }
    
    def apply_translations(obj):
        """Recursively apply final translations to the JSON object."""
        if isinstance(obj, dict):
            return {key: apply_translations(val) for key, val in obj.items()}
        elif isinstance(obj, list):
            return [apply_translations(item) for item in obj]
        elif isinstance(obj, str):
            # Preserve company names and special tokens
            if obj in final_translations:
                return final_translations[obj]
            else:
                # For any remaining complex strings, apply the translations if they match
                result = obj
                for english_text, spanish_text in final_translations.items():
                    if english_text == result:
                        result = spanish_text
                        break
                return result
        else:
            return obj
    
    print("Applying final translations...")
    completed_data = apply_translations(es_data)
    
    print("Validating final JSON...")
    try:
        json_string = json.dumps(completed_data, ensure_ascii=False, indent=2)
        json.loads(json_string)  # Validate
        print("✓ JSON validation successful")
    except Exception as e:
        print(f"✗ JSON validation failed: {e}")
        return False
    
    print("Writing final es.json...")
    try:
        with open('es.json', 'w', encoding='utf-8') as f:
            json.dump(completed_data, f, ensure_ascii=False, indent=2)
        print("✓ Successfully completed es.json")
        return True
    except Exception as e:
        print(f"✗ Error writing es.json: {e}")
        return False


if __name__ == "__main__":
    success = main()
    if success:
        print("\n🎉 Final completion successful!")
        print("All Spanish translations have been applied to es.json.")
    else:
        print("\n❌ Final completion failed.")
