#!/bin/bash
# Local Docker test script for Hugging Face deployment

echo "Building Docker image..."
docker build -t todo-backend .

echo ""
echo "Running container on port 8080..."
echo "Make sure you have DATABASE_URL set in your environment or .env file"
echo ""
echo "To run with custom env vars:"
echo "docker run -p 8080:8080 \\"
echo "  -e DATABASE_URL=postgresql://... \\"
echo "  -e BETTER_AUTH_SECRET=... \\"
echo "  -e ALLOWED_ORIGINS='[\"http://localhost:3000\"]' \\"
echo "  todo-backend"
echo ""
echo "Or with .env file:"
echo "docker run -p 8080:8080 --env-file .env todo-backend"
