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

# Copy entrypoint script
COPY start.sh .
RUN chmod +x start.sh

# Create temp directory with proper permissions
RUN mkdir -p /tmp && chmod 1777 /tmp

# Expose port (Railway will override with $PORT)
EXPOSE 8080

# Run the application
CMD ["./start.sh"]
