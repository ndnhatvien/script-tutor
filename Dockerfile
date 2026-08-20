# Dockerfile at root - Railway will use this
FROM python:3.11-slim

# Install TCL and Bash
RUN apt-get update && apt-get install -y \
    tcl \
    bash \
    && rm -rf /var/lib/apt/lists/*

# Verify installations
RUN echo 'puts "TCL OK"' | tclsh && bash -c 'echo "Bash OK"'

# Set working directory
WORKDIR /app

# Copy backend files
COPY script-tutor-backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY script-tutor-backend/app.py .

# Create temp directory with proper permissions
RUN mkdir -p /tmp && chmod 1777 /tmp

# Expose port (Railway will override with $PORT)
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD python -c "import requests; requests.get('http://localhost:8080/health')" || exit 1

# Run the application
# Railway injects $PORT environment variable
CMD uvicorn app:app --host 0.0.0.0 --port ${PORT:-8080}
