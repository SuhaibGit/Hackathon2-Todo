import os
import sys
from dotenv import load_dotenv
from google import genai
from google.genai import types

def run_diagnostic():
    load_dotenv()
    api_key = os.getenv('GEMINI_API_KEY')
    if not api_key:
        print("Error: GEMINI_API_KEY not found in .env")
        return

    print(f"Testing with API Key: {api_key[:10]}...")
    
    # Test different configurations
    configs = [
        {"name": "v1beta Default", "version": "v1beta"},
        {"name": "v1 Stable", "version": "v1"},
    ]
    
    models_to_test = [
        "gemini-1.5-flash",
        "gemini-1.5-flash-latest",
        "gemini-1.5-pro",
        "gemini-1.0-pro",
        "gemini-2.0-flash-exp"
    ]

    for config in configs:
        print(f"\n--- Testing Configuration: {config['name']} ---")
        try:
            client = genai.Client(api_key=api_key, http_options={'api_version': config['version']})
            
            # List models
            print(f"Listing models for {config['version']}...")
            models = list(client.models.list())
            print(f"Found {len(models)} models.")
            for m in models:
                if 'flash' in m.name or 'pro' in m.name:
                    print(f"  - {m.name}")

            # Try generation with specified models
            for model_id in models_to_test:
                try:
                    print(f"Trying {model_id}...")
                    response = client.models.generate_content(
                        model=model_id,
                        contents="Say hello"
                    )
                    print(f"  [SUCCESS] {model_id} works. Response: {response.text}")
                except Exception as e:
                    print(f"  [FAILED] {model_id}: {str(e)[:100]}")
        except Exception as ec:
            print(f"Configuration {config['name']} failed completely: {ec}")

if __name__ == "__main__":
    run_diagnostic()
