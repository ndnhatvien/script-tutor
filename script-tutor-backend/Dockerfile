FROM python:3.11-slim

# Install TCL and Bash
RUN apt-get update && apt-get install -y \
    tcl \
    bash \
    && rm -rf /var/lib/apt/lists/*

# Verify installations
RUN tclsh <<< 'puts "TCL OK"' && bash -c 'echo "Bash OK"'

# Set working directory
WORKDIR /app

# Copy requirements first for better caching
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY app.py .

# Create temp directory with proper permissions
RUN mkdir -p /tmp && chmod 1777 /tmp

# Expose port
EXPOSE 7860

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD python -c "import requests; requests.get('http://localhost:7860/health')" || exit 1

# Run the application
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "7860"]
