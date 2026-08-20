#!/bin/bash
# Entrypoint script for Railway deployment

PORT=${PORT:-8080}
echo "Starting uvicorn on port $PORT"
exec uvicorn app:app --host 0.0.0.0 --port "$PORT"
