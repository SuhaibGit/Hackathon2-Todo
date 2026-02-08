from setuptools import setup, find_packages

setup(
    name="todo-backend",
    version="1.0.0",
    packages=find_packages(),
    install_requires=[
        "fastapi==0.104.1",
        "sqlmodel==0.0.16",
        "uvicorn==0.24.0",
        "python-jose[cryptography]==3.3.0",
        "pydantic==2.8.2",
        "python-multipart==0.0.9",
        "python-dotenv==1.0.0",
        "httpx==0.25.2",
    ],
)