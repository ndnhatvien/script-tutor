#!/bin/bash
# Auto-setup script for Akamai/Linode VPS
# Run: bash <(curl -s https://raw.githubusercontent.com/YOUR_USERNAME/script-tutor/main/script-tutor-backend/setup-akamai.sh)

set -e

echo "================================================"
echo "  TCL & Bash Script Tutor - Akamai Setup"
echo "================================================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running as root
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}Error: This script must be run as root${NC}"
   exit 1
fi

echo -e "${GREEN}✓${NC} Running as root"

# Update system
echo ""
echo "Step 1: Updating system..."
apt update && apt upgrade -y
echo -e "${GREEN}✓${NC} System updated"

# Install Docker
echo ""
echo "Step 2: Installing Docker..."
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    rm get-docker.sh
    echo -e "${GREEN}✓${NC} Docker installed"
else
    echo -e "${YELLOW}!${NC} Docker already installed"
fi

# Verify Docker
docker --version

# Install Git
echo ""
echo "Step 3: Installing Git..."
if ! command -v git &> /dev/null; then
    apt install git -y
    echo -e "${GREEN}✓${NC} Git installed"
else
    echo -e "${YELLOW}!${NC} Git already installed"
fi

# Clone repository
echo ""
echo "Step 4: Cloning repository..."
read -p "Enter your GitHub username: " GITHUB_USER
read -p "Enter your repository name [script-tutor]: " REPO_NAME
REPO_NAME=${REPO_NAME:-script-tutor}

if [ -d "$REPO_NAME" ]; then
    echo -e "${YELLOW}!${NC} Repository already exists, pulling latest..."
    cd $REPO_NAME
    git pull
    cd ..
else
    git clone https://github.com/$GITHUB_USER/$REPO_NAME.git
    echo -e "${GREEN}✓${NC} Repository cloned"
fi

# Build Docker image
echo ""
echo "Step 5: Building Docker image..."
cd $REPO_NAME/script-tutor-backend
docker build -t tcl-bash-api .
echo -e "${GREEN}✓${NC} Docker image built"

# Stop existing container if running
echo ""
echo "Step 6: Deploying application..."
if [ "$(docker ps -q -f name=tcl-bash-api)" ]; then
    echo -e "${YELLOW}!${NC} Stopping existing container..."
    docker stop tcl-bash-api
    docker rm tcl-bash-api
fi

# Run container
docker run -d \
  --name tcl-bash-api \
  --restart unless-stopped \
  -p 80:7860 \
  -p 443:7860 \
  tcl-bash-api

echo -e "${GREEN}✓${NC} Application deployed"

# Configure firewall
echo ""
echo "Step 7: Configuring firewall..."
ufw --force enable
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 22/tcp
ufw reload
echo -e "${GREEN}✓${NC} Firewall configured"

# Get server IP
SERVER_IP=$(curl -s ifconfig.me)

# Test application
echo ""
echo "Step 8: Testing application..."
sleep 5
if curl -s http://localhost/health > /dev/null; then
    echo -e "${GREEN}✓${NC} Application is running!"
else
    echo -e "${RED}✗${NC} Application failed to start. Check logs: docker logs tcl-bash-api"
    exit 1
fi

# Display summary
echo ""
echo "================================================"
echo -e "  ${GREEN}Setup Complete!${NC}"
echo "================================================"
echo ""
echo "Your API is now running at:"
echo -e "${GREEN}http://$SERVER_IP/health${NC}"
echo ""
echo "API endpoints:"
echo "  - Health check: http://$SERVER_IP/health"
echo "  - TCL API: http://$SERVER_IP/api/tcl"
echo "  - Bash API: http://$SERVER_IP/api/bash"
echo "  - API Docs: http://$SERVER_IP/docs"
echo ""
echo "Update your frontend config.js with:"
echo -e "${YELLOW}API_URL: 'http://$SERVER_IP/api'${NC}"
echo ""
echo "Useful commands:"
echo "  - View logs: docker logs -f tcl-bash-api"
echo "  - Restart: docker restart tcl-bash-api"
echo "  - Stop: docker stop tcl-bash-api"
echo "  - Update: cd $REPO_NAME/script-tutor-backend && git pull && ./setup-akamai.sh"
echo ""
echo "Next steps:"
echo "  1. (Optional) Setup custom domain & SSL"
echo "  2. Update frontend config.js with your API URL"
echo "  3. Deploy frontend to GitHub Pages"
echo ""
echo "Done! 🎉"
