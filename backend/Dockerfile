FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend code
COPY . .

# Ensure Python sees the app module
ENV PYTHONPATH=/app

# Copy environment variables inside container (optional if you use docker-compose env_file)
# If using docker-compose with env_file, this line is not needed.
# COPY .env /app/.env

# Run FastAPI with Uvicorn (no --reload in production)
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]