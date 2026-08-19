# 🚀 Deployment Alternatives - Backend Hosting

Do Hugging Face Spaces Docker giờ yêu cầu paid plan, đây là các giải pháp miễn phí thay thế.

---

## 📊 So sánh nền tảng miễn phí

| Platform | Free Tier | Cold Start | Uptime | Ease of Deploy |
|----------|-----------|------------|--------|----------------|
| **Railway** | $5 credit/mo | ~5s | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Render** | 750h/mo | ~30s | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Fly.io** | 3 VMs free | ~2s | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Akamai** | $100 credit | ~3s | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Koyeb** | 1 service | ~10s | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## 🎯 Option 1: Railway.app ⭐ **KHUYẾN NGHỊ**

### Tại sao chọn Railway?

✅ **$5 credit mỗi tháng** (đủ cho hobby project)
✅ **Deploy cực đơn giản** - Connect GitHub và done
✅ **Không sleep** như Render
✅ **Fast cold start** (~5 giây)
✅ **Automatic HTTPS**
✅ **Docker native support**

### Bước 1: Chuẩn bị

File `railway.json` đã có sẵn trong backend folder.

### Bước 2: Deploy

```bash
# 1. Truy cập railway.app
https://railway.app

# 2. Sign up với GitHub

# 3. New Project → Deploy from GitHub repo

# 4. Select repository: script-tutor-backend

# 5. Railway tự động:
#    - Detect Dockerfile
#    - Build Docker image
#    - Deploy service
#    - Generate domain

# 6. Copy domain (vd: tcl-bash-api.up.railway.app)
```

### Bước 3: Configure Environment (Optional)

```
Settings → Variables → Add:
- PORT=7860 (tự động set)
```

### Bước 4: Update CORS

Vào `app.py` trên Railway hoặc local:

```python
allow_origins=[
    "https://YOUR_USERNAME.github.io",
    "http://localhost:8000",
]
```

Commit và push → Railway tự động redeploy.

### Bước 5: Test

```bash
curl https://YOUR-APP.up.railway.app/health
```

**API URL cho frontend:**
```javascript
API_URL: 'https://YOUR-APP.up.railway.app/api'
```

### Cost Estimate

```
Free tier: $5 credit/month
Usage: ~$2-3/month cho small project
Remaining: $2-3 rollover sang tháng sau

→ Đủ dùng vô thời hạn!
```

---

## 🎯 Option 2: Render.com

### Ưu điểm

✅ **Hoàn toàn miễn phí** (750 giờ/tháng)
✅ **Auto HTTPS**
✅ **Easy setup**
⚠️ **Sleep sau 15 phút idle** (cold start ~30s)

### Deploy Steps

```bash
# 1. Truy cập render.com
https://render.com

# 2. Sign up với GitHub

# 3. New → Web Service

# 4. Connect GitHub repository

# 5. Configure:
Name: tcl-bash-tutor-api
Environment: Docker
Plan: Free
Branch: main

# 6. Advanced → Health Check Path: /health

# 7. Create Web Service

# 8. Đợi build (~3-5 phút)
```

**Render Blueprint** (Tự động):

File `render.yaml` đã có sẵn - Render tự động detect và deploy.

### API URL

```javascript
API_URL: 'https://tcl-bash-tutor-api.onrender.com/api'
```

### Nhược điểm

❌ **Sleep after 15 min** - First request sẽ mất ~30s wake up
✅ **Solution:** Dùng cron job ping mỗi 10 phút (miễn phí):
   - cron-job.org
   - UptimeRobot

---

## 🎯 Option 3: Fly.io

### Ưu điểm

✅ **3 shared VMs miễn phí**
✅ **Fast cold start** (~2s)
✅ **Global edge network**
✅ **Auto scale to zero**

### Deploy Steps

#### 1. Install Flyctl

**Windows:**
```powershell
iwr https://fly.io/install.ps1 -useb | iex
```

**Linux/Mac:**
```bash
curl -L https://fly.io/install.sh | sh
```

#### 2. Login

```bash
fly auth login
```

#### 3. Launch App

```bash
cd script-tutor-backend

# Tạo app (file fly.toml đã có sẵn)
fly launch --no-deploy

# Chọn:
# - App name: tcl-bash-tutor-api
# - Region: Singapore (hoặc gần bạn)
# - Database: No

# Deploy
fly deploy
```

#### 4. Check Status

```bash
fly status
fly logs
```

### API URL

```javascript
API_URL: 'https://tcl-bash-tutor-api.fly.dev/api'
```

### Monitoring

```bash
# Check app
fly open

# Check health
curl https://tcl-bash-tutor-api.fly.dev/health
```

---

## 🎯 Option 4: Akamai Connected Cloud (Linode) ⭐ **BEST VALUE**

### Tại sao chọn Akamai?

✅ **$100 credit trong 60 ngày** (trial - HUGE!)
✅ **Sau trial: $5/month** cho Nanode (1GB RAM)
✅ **Full VPS control** - Root access, Docker, tất cả mọi thứ
✅ **No cold start** - Always on
✅ **Global locations** - Singapore, Tokyo, etc.
✅ **Enterprise-grade** - Infrastructure của Akamai

### Pros & Cons

**Pros:**
- $100 credit = 20 tháng miễn phí ($5/mo Nanode)
- Full control (VPS, not container platform)
- Chạy bất kỳ Docker image nào
- Cực kỳ stable (99.9% uptime)
- Backup, monitoring, firewall built-in

**Cons:**
- Phải setup manual (SSH, Docker install)
- Cần biết Linux basics
- Sau trial phải pay $5/mo (nhưng worth it!)

### Deploy Steps

#### 1. Create Account

```bash
# 1. Truy cập: https://www.linode.com/lp/free-credit-100/
# 2. Sign up (cần credit card cho verify - không charge)
# 3. Get $100 credit (60 days)
```

#### 2. Create Linode (VPS)

```
Dashboard → Create Linode

Choose:
  - Distribution: Ubuntu 22.04 LTS
  - Region: Singapore (gần Việt Nam)
  - Plan: Nanode 1GB ($5/mo)
  - Label: tcl-bash-api
  - Root Password: (strong password)
  
Click "Create Linode"
```

#### 3. Setup Server (SSH)

```bash
# Wait cho Linode boot (~30s)
# SSH vào server (IP hiển thị trong dashboard)

ssh root@YOUR_LINODE_IP

# Update system
apt update && apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Verify Docker
docker --version
```

#### 4. Deploy Application

```bash
# Clone code (hoặc upload files)
git clone https://github.com/YOUR_USERNAME/script-tutor.git
cd script-tutor/script-tutor-backend

# Build Docker image
docker build -t tcl-bash-api .

# Run container
docker run -d \
  --name tcl-bash-api \
  --restart unless-stopped \
  -p 80:7860 \
  -p 443:7860 \
  tcl-bash-api

# Check logs
docker logs -f tcl-bash-api
```

#### 5. Configure Firewall

```bash
# Allow HTTP/HTTPS
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 22/tcp  # SSH
ufw enable
```

#### 6. Setup Domain (Optional)

**Cách 1: Dùng Linode IP trực tiếp**
```
http://YOUR_LINODE_IP/health
```

**Cách 2: Custom domain (free)**
```bash
# Dùng Duck DNS (free dynamic DNS)
# 1. Truy cập: duckdns.org
# 2. Tạo subdomain: tcl-bash-api.duckdns.org
# 3. Point đến Linode IP
# 4. Update frontend config với domain này
```

**Cách 3: Let's Encrypt SSL (free HTTPS)**
```bash
# Install Certbot
apt install certbot python3-certbot-nginx -y

# Get SSL certificate
certbot --nginx -d tcl-bash-api.yourdomain.com
```

### API URL

```javascript
// With IP
API_URL: 'http://YOUR_LINODE_IP/api'

// With domain
API_URL: 'https://tcl-bash-api.duckdns.org/api'

// With custom domain + SSL
API_URL: 'https://api.yourdomain.com/api'
```

### Cost Breakdown

```
Trial (60 days):
  $100 credit
  Usage: $5/mo × 2 = $10
  Remaining: $90

Month 3-20:
  Credit: $90 remaining
  Usage: $5/mo × 18 = $90
  Cost: $0

Month 21+:
  Pay: $5/month
  (hoặc upgrade cho production use)
```

**Total free period:** ~20 tháng! 🎉

### Monitoring & Maintenance

```bash
# Check container status
docker ps

# View logs
docker logs tcl-bash-api

# Restart container
docker restart tcl-bash-api

# Update application
cd script-tutor/script-tutor-backend
git pull
docker build -t tcl-bash-api .
docker stop tcl-bash-api
docker rm tcl-bash-api
docker run -d --name tcl-bash-api --restart unless-stopped -p 80:7860 tcl-bash-api
```

### Auto-start on Reboot

Docker's `--restart unless-stopped` flag handles this automatically.

---

## 🎯 Option 5: Koyeb

### Deploy Steps

```bash
# 1. Truy cập koyeb.com
https://koyeb.com

# 2. Sign up với GitHub

# 3. Create App → Deploy from GitHub

# 4. Select repo: script-tutor-backend

# 5. Configure:
Builder: Dockerfile
Port: 7860

# 6. Deploy
```

**Free tier:** 1 service, 512MB RAM, 2GB storage

---

## 🎯 Option 6: Back4App Containers (NEW)

```bash
# Free tier:
# - 1 container
# - 256MB RAM
# - 1GB storage

# Deploy tương tự Railway
```

---

## 📋 Quick Comparison Matrix

### Performance

```
Speed (Cold Start):
Fly.io:    ████████████████████ 2s
Akamai:    ███████████████████  3s (no sleep!)
Railway:   ████████████████     5s
Koyeb:     ████████████         10s
Render:    ████                 30s

Uptime (No sleep):
Akamai:    ██████████ Always on (VPS)
Railway:   ██████████ Always on
Fly.io:    ██████████ Scale to 0 (fast)
Koyeb:     ██████████ Always on
Render:    ████       Sleep after 15min
```

### Cost

```
Akamai:    $100 credit → $5/mo after 20 months
Railway:   $5 credit/mo → ~$2-3 usage = FREE
Render:    750h free = FREE (with sleep)
Fly.io:    3 VMs free = FREE
Koyeb:     1 service = FREE
```

### Ease of Use

```
Railway:   ⭐⭐⭐⭐⭐ (Easiest - GitHub connect)
Render:    ⭐⭐⭐⭐⭐ (Easy - GitHub connect)
Fly.io:    ⭐⭐⭐⭐   (CLI required)
Koyeb:     ⭐⭐⭐⭐   (GitHub connect)
Akamai:    ⭐⭐⭐     (VPS - SSH & Docker setup)
```

### Best For

```
Akamai:    Production, long-term (20 months free!)
Railway:   Quick hobby projects (easiest)
Render:    Free forever (accept sleep)
Fly.io:    Fast performance needed
Koyeb:     Simple Docker deploy
```

---

## 🏆 Recommendation

### Cho Beginners (Dễ nhất)

**Railway.app**
- Dễ nhất
- Deploy từ GitHub 1 click
- Không sleep
- $5 credit đủ dùng

### Cho Production Use (Best Value)

**Akamai Connected Cloud**
- $100 credit = 20 tháng FREE
- Full VPS control
- Cực kỳ stable
- Sau đó chỉ $5/mo
- **Worth it cho long-term!**

### Cho Developers

**Fly.io**
- Nhanh nhất (cold start 2s)
- Full control
- CLI powerful
- Global edge

### Cho "Absolutely Free Forever"

**Render.com**
- 100% miễn phí vĩnh viễn
- Chấp nhận sleep 15 phút
- Dùng UptimeRobot ping để không sleep

---

## 🔧 Update Frontend Config

Sau khi deploy backend, update `config.js`:

```javascript
const CONFIG = {
    // Railway
    API_URL: 'https://YOUR-APP.up.railway.app/api',
    
    // Render
    // API_URL: 'https://tcl-bash-tutor-api.onrender.com/api',
    
    // Fly.io
    // API_URL: 'https://tcl-bash-tutor-api.fly.dev/api',
    
    // Koyeb
    // API_URL: 'https://YOUR-APP.koyeb.app/api',
    
    DEFAULT_TIMEOUT: 5,
    ...
};
```

---

## 🐛 Troubleshooting

### Railway Issues

**Build fails:**
```bash
# Check logs trong Dashboard
# Common: PORT not set
# Fix: Railway auto-sets PORT, no action needed
```

### Render Issues

**Cold start slow:**
```bash
# Solution: Ping service every 10 min
# Use: cron-job.org or UptimeRobot
# URL: https://YOUR-APP.onrender.com/health
```

### Fly.io Issues

**Deploy fails:**
```bash
# Check logs
fly logs

# Rebuild
fly deploy --force

# Check status
fly status
```

---

## 🎯 Migration from Hugging Face

Nếu đã deploy trên Hugging Face, chuyển sang Railway:

```bash
# 1. Copy repository URL
# 2. Railway → New Project → Deploy from GitHub
# 3. Select repo
# 4. Done! (~2 minutes)

# Update frontend config.js với Railway URL
```

---

## 📊 Cost Calculator

### Railway

```
Monthly usage estimate:
- Always on: $3-5/month
- Light traffic (<1000 req/day): $2-3/month
- Free credit: $5/month

Net cost: $0 (credit covers)
```

### Render

```
Free tier: 750 hours/month
= 31 days × 24 hours = 744 hours

→ Đủ chạy 1 service 24/7
Net cost: $0
```

### Fly.io

```
Free tier:
- 3 shared-cpu VMs
- 256MB RAM each
- 3GB storage

Usage: 1 VM for this project
Net cost: $0
```

---

## ✅ Final Checklist

- [ ] Choose platform (Railway recommended)
- [ ] Create account
- [ ] Deploy backend
- [ ] Get API URL
- [ ] Update `config.js`
- [ ] Deploy frontend (GitHub Pages)
- [ ] Test end-to-end
- [ ] Done! 🎉

---

## 📞 Need Help?

### Platform Support

- Railway: https://railway.app/discord
- Render: https://render.com/docs
- Fly.io: https://fly.io/docs
- Koyeb: https://koyeb.com/docs

### Project Issues

- GitHub: [Create Issue](https://github.com/ndnhatvien/script-tutor/issues)

---

<div align="center">

**Khuyến nghị: Railway.app cho deploy dễ nhất!** 🚀

[Back to Main](README.md) • [Quick Start](QUICKSTART.md)

</div>
