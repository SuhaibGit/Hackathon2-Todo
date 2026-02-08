import uvicorn
import os
import sys
from dotenv import load_dotenv

# Add the parent directory to the path so we can import backend modules
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Load environment variables from .env file
load_dotenv()

if __name__ == "__main__":
    # Import the app directly to avoid module import issues
    from backend.main import app

    uvicorn.run(
        app,
        host="0.0.0.0",
        port=int(os.getenv("PORT", 8001)),  # Changed to port 8001 to avoid conflict
        reload=False,  # Disable reload to avoid subprocess issues
        log_level="info"
    )