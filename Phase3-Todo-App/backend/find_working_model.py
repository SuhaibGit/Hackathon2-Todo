import json
import os
from dotenv import load_dotenv
from google import genai
from google.genai import types

def find_working_models():
    load_dotenv()
    api_key = os.getenv('GEMINI_API_KEY')
    if not api_key:
        print("API Key not found.")
        return

    client = genai.Client(api_key=api_key, http_options={'api_version': 'v1beta'})
    
    try:
        with open('models_list.json', 'r') as f:
            data = json.load(f)
            all_models = data.get('models', [])
    except Exception as e:
        print(f"Could not load models_list.json: {e}")
        return

    # Filter models that support generation
    candidate_models = [
        m['name'].replace('models/', '') 
        for m in all_models 
        if 'generateContent' in m.get('supportedGenerationMethods', [])
    ]

    print(f"Found {len(candidate_models)} candidate models for text generation.")
    working_models = []

    for model_id in candidate_models:
        print(f"Testing {model_id}...")
        try:
            response = client.models.generate_content(
                model=model_id,
                contents="Say 'OK'"
            )
            print(f"  [SUCCESS] {model_id} works. Response: {response.text}")
            working_models.append(model_id)
        except Exception as e:
            err_str = str(e)
            if '429' in err_str:
                print(f"  [429] {model_id} quota reached (RESOURCE_EXHAUSTED).")
            elif '404' in err_str:
                print(f"  [404] {model_id} not found.")
            elif '400' in err_str:
                 print(f"  [400] {model_id} invalid argument.")
            elif '403' in err_str:
                 print(f"  [403] {model_id} permission denied.")
            else:
                print(f"  [ERROR] {model_id}: {err_str[:200]}")

    if working_models:
        print("\nWorking models found:")
        for m in working_models:
            print(f" - {m}")
        with open('working_models_list.txt', 'w') as wf:
            wf.write('\n'.join(working_models))
    else:
        print("\nNo working candidate models found with remaining quota.")

if __name__ == "__main__":
    find_working_models()
