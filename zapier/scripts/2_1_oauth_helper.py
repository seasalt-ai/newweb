#!/usr/bin/env python3
"""
OAuth Helper for Zapier API Authentication

This script helps you obtain a valid OAuth access token from Zapier.

Steps:
1. Start ngrok to expose a local server
2. Configure the redirect URI in Zapier Developer Platform
3. Run this script to start the OAuth flow
4. Authorize the app in your browser
5. Get the access token and refresh token

Usage:
    python tmp_rovodev_oauth_helper.py
"""

import os
import sys
import json
import secrets
import webbrowser
from urllib.parse import urlencode, parse_qs, urlparse
from http.server import HTTPServer, BaseHTTPRequestHandler
from dotenv import load_dotenv
import requests

# Load environment variables
load_dotenv()

# Configuration
CLIENT_ID = os.getenv("ZAPIER_CLIENT_ID")
CLIENT_SECRET = os.getenv("ZAPIER_CLIENT_SECRET")
REDIRECT_PORT = 8888
REDIRECT_URI = f"http://localhost:{REDIRECT_PORT}/callback"

# OAuth scopes needed for the Zapier API
# For accessing apps data, we likely need minimal scopes
SCOPES = "zap zap:write authentication"

# State for CSRF protection
oauth_state = secrets.token_urlsafe(32)

# Store the authorization code
auth_code = None


class OAuthCallbackHandler(BaseHTTPRequestHandler):
    """Handle OAuth callback from Zapier."""
    
    def log_message(self, format, *args):
        """Suppress default logging."""
        pass
    
    def do_GET(self):
        """Handle GET request to callback URL."""
        global auth_code
        
        # Parse the query parameters
        parsed_url = urlparse(self.path)
        query_params = parse_qs(parsed_url.query)
        
        if parsed_url.path == '/callback':
            # Check for authorization code
            if 'code' in query_params:
                received_state = query_params.get('state', [None])[0]
                
                # Verify state to prevent CSRF
                if received_state != oauth_state:
                    self.send_error(400, "Invalid state parameter")
                    return
                
                auth_code = query_params['code'][0]
                
                # Send success response
                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                html = """
                    <html>
                    <head><title>Authorization Successful</title></head>
                    <body style="font-family: Arial, sans-serif; padding: 50px; text-align: center;">
                        <h1 style="color: #4CAF50;">Authorization Successful!</h1>
                        <p>You can close this window and return to the terminal.</p>
                    </body>
                    </html>
                """
                self.wfile.write(html.encode('utf-8'))
                
            elif 'error' in query_params:
                error = query_params.get('error', ['unknown'])[0]
                error_description = query_params.get('error_description', ['No description'])[0]
                
                # Send error response
                self.send_response(400)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                html = f"""
                    <html>
                    <head><title>Authorization Failed</title></head>
                    <body style="font-family: Arial, sans-serif; padding: 50px; text-align: center;">
                        <h1 style="color: #f44336;">Authorization Failed</h1>
                        <p><strong>Error:</strong> {error}</p>
                        <p>{error_description}</p>
                    </body>
                    </html>
                """
                self.wfile.write(html.encode('utf-8'))
        else:
            self.send_error(404, "Not Found")


def exchange_code_for_token(code: str) -> dict:
    """
    Exchange authorization code for access token.
    
    Args:
        code: Authorization code from OAuth flow
        
    Returns:
        dict: Token response with access_token and refresh_token
    """
    url = "https://zapier.com/oauth/token/"
    
    data = {
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': REDIRECT_URI
    }
    
    try:
        response = requests.post(
            url,
            data=data,
            auth=(CLIENT_ID, CLIENT_SECRET),
            headers={'Content-Type': 'application/x-www-form-urlencoded'}
        )
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"\n❌ Error exchanging code for token: {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"Response status: {e.response.status_code}")
            print(f"Response body: {e.response.text}")
        return None


def start_oauth_flow():
    """Start the OAuth authorization flow."""
    global REDIRECT_URI
    
    # Check if credentials are configured
    if not CLIENT_ID:
        print("❌ Error: ZAPIER_CLIENT_ID not found in .env file")
        print("\nPlease add your Client ID to the .env file:")
        print("ZAPIER_CLIENT_ID=your_client_id_here")
        sys.exit(1)
    
    if not CLIENT_SECRET:
        print("❌ Error: ZAPIER_CLIENT_SECRET not found in .env file")
        print("\nPlease add your Client Secret to the .env file:")
        print("ZAPIER_CLIENT_SECRET=your_client_secret_here")
        sys.exit(1)
    
    print("=" * 80)
    print("ZAPIER OAUTH HELPER")
    print("=" * 80)
    print()
    print("This script will help you obtain OAuth credentials for the Zapier API.")
    print()
    
    # Build authorization URL
    auth_params = {
        'response_type': 'code',
        'client_id': CLIENT_ID,
        'redirect_uri': REDIRECT_URI,
        'scope': SCOPES,
        'response_mode': 'query',
        'state': oauth_state
    }
    
    auth_url = f"https://api.zapier.com/v2/authorize?{urlencode(auth_params)}"
    
    print("SETUP INSTRUCTIONS:")
    print("-" * 80)
    print()
    print("1. Start ngrok to expose the local server:")
    print(f"   ngrok http {REDIRECT_PORT}")
    print()
    print("2. Copy the HTTPS forwarding URL from ngrok (e.g., https://abc123.ngrok.io)")
    print()
    print("3. Go to Zapier Developer Platform:")
    print("   https://developer.zapier.com/")
    print()
    print("4. Navigate to: Embed → Settings → Redirect URIs")
    print()
    print("5. Add this redirect URI:")
    print(f"   https://YOUR_NGROK_URL/callback")
    print()
    print("6. Save the configuration in Zapier")
    print()
    print("-" * 80)
    print()
    
    input("Press Enter when you've completed the setup and ngrok is running...")
    
    print()
    print("Starting local OAuth callback server...")
    print(f"Listening on http://localhost:{REDIRECT_PORT}/callback")
    print()
    
    # Update redirect URI if user provides ngrok URL
    ngrok_url = input("Enter your ngrok HTTPS URL (or press Enter to use localhost): ").strip()
    if ngrok_url:
        if not ngrok_url.startswith('http'):
            ngrok_url = f"https://{ngrok_url}"
        ngrok_url = ngrok_url.rstrip('/')
        REDIRECT_URI = f"{ngrok_url}/callback"
        auth_params['redirect_uri'] = REDIRECT_URI
        auth_url = f"https://api.zapier.com/v2/authorize?{urlencode(auth_params)}"
        print(f"\nUsing redirect URI: {REDIRECT_URI}")
    
    print()
    print("Opening browser for authorization...")
    print(f"If browser doesn't open, visit: {auth_url}")
    print()
    
    # Open browser
    webbrowser.open(auth_url)
    
    # Start HTTP server to handle callback
    server = HTTPServer(('localhost', REDIRECT_PORT), OAuthCallbackHandler)
    
    print("Waiting for authorization...")
    print("(Authorize the app in your browser)")
    print()
    
    # Wait for callback
    while auth_code is None:
        server.handle_request()
    
    print("✓ Authorization code received!")
    print()
    print("Exchanging authorization code for access token...")
    
    # Exchange code for token
    token_response = exchange_code_for_token(auth_code)
    
    if token_response:
        print("\n" + "=" * 80)
        print("✓ SUCCESS! OAUTH TOKENS OBTAINED")
        print("=" * 80)
        print()
        print("Add these to your .env file:")
        print()
        print(f"ZAPIER_OAUTH_TOKEN={token_response.get('access_token')}")
        print(f"ZAPIER_REFRESH_TOKEN={token_response.get('refresh_token')}")
        print()
        print("Token details:")
        print(f"  - Access token expires in: {token_response.get('expires_in')} seconds ({token_response.get('expires_in') / 3600:.1f} hours)")
        print(f"  - Token type: {token_response.get('token_type')}")
        print(f"  - Scopes: {token_response.get('scope')}")
        print()
        
        # Optionally update .env file
        update = input("Would you like to automatically update your .env file? (y/n): ").strip().lower()
        if update == 'y':
            update_env_file(token_response)
        else:
            print("\nPlease manually update your .env file with the tokens above.")
        
        print("\n✓ You can now run 2_fetch_apps_by_category.py!")
    else:
        print("\n❌ Failed to obtain access token.")
        print("Please check your Client ID and Client Secret, and try again.")


def update_env_file(token_response: dict):
    """
    Update .env file with new tokens.
    
    Args:
        token_response: Token response from OAuth exchange
    """
    env_file = ".env"
    
    # Read existing .env file
    if os.path.exists(env_file):
        with open(env_file, 'r') as f:
            lines = f.readlines()
    else:
        lines = []
    
    # Update or add token lines
    access_token_line = f"ZAPIER_OAUTH_TOKEN={token_response.get('access_token')}\n"
    refresh_token_line = f"ZAPIER_REFRESH_TOKEN={token_response.get('refresh_token')}\n"
    
    # Find and replace existing token lines
    access_token_found = False
    refresh_token_found = False
    
    for i, line in enumerate(lines):
        if line.startswith('ZAPIER_OAUTH_TOKEN='):
            lines[i] = access_token_line
            access_token_found = True
        elif line.startswith('ZAPIER_REFRESH_TOKEN='):
            lines[i] = refresh_token_line
            refresh_token_found = True
    
    # Add new lines if not found
    if not access_token_found:
        lines.append(access_token_line)
    if not refresh_token_found:
        lines.append(refresh_token_line)
    
    # Write back to file
    with open(env_file, 'w') as f:
        f.writelines(lines)
    
    print(f"\n✓ Updated {env_file} with new tokens!")


if __name__ == "__main__":
    try:
        start_oauth_flow()
    except KeyboardInterrupt:
        print("\n\nInterrupted by user.")
        sys.exit(0)
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
