# Local Docker test script for Hugging Face deployment (PowerShell)

Write-Host "Building Docker image..." -ForegroundColor Green
docker build -t todo-backend .

Write-Host "`nRunning container on port 8080..." -ForegroundColor Green
Write-Host "Make sure you have DATABASE_URL set in your environment or .env file" -ForegroundColor Yellow
Write-Host ""
Write-Host "To run with custom env vars:" -ForegroundColor Cyan
Write-Host "docker run -p 8080:8080 `"
Write-Host "  -e DATABASE_URL=postgresql://... `"
Write-Host "  -e BETTER_AUTH_SECRET=... `"
Write-Host "  -e ALLOWED_ORIGINS='[\"http://localhost:3000\"]' `"
Write-Host "  todo-backend"
Write-Host ""
Write-Host "Or with .env file:" -ForegroundColor Cyan
Write-Host "docker run -p 8080:8080 --env-file .env todo-backend"
