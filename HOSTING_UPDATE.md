# 🔄 Hosting Update - Railway.app thay Hugging Face

## ⚠️ Important Change

**Hugging Face Spaces Docker** giờ yêu cầu **paid subscription**.

➡️ **Giải pháp:** Chuyển sang **Railway.app** (vẫn miễn phí!)

---

## 🆕 New Recommendation: Railway.app

### Why Railway?

✅ **$5 credit mỗi tháng** - Đủ cho hobby projects  
✅ **Deploy siêu đơn giản** - Connect GitHub và xong  
✅ **Không sleep** - App luôn available  
✅ **Fast** - Cold start ~5 giây  
✅ **Auto HTTPS** - SSL certificate tự động  

### Quick Deploy (3 phút)

```bash
1. Truy cập: https://railway.app
2. Sign up with GitHub
3. New Project → Deploy from GitHub
4. Select backend folder
5. Railway tự động build & deploy
6. Copy domain: YOUR-APP.up.railway.app
```

Done! ✅

---

## 📋 What Changed

### Files Updated

✅ `DEPLOYMENT_ALTERNATIVES.md` - **NEW** - Hướng dẫn chi tiết các nền tảng  
✅ `QUICKSTART.md` - Updated với Railway instructions  
✅ `config.js` - Added Railway URL template  
✅ `README.md` - Updated hosting info  

### New Config Files

✅ `railway.json` - Railway configuration  
✅ `render.yaml` - Render.com alternative  
✅ `fly.toml` - Fly.io alternative  

---

## 🎯 Deployment Options

Có **5 options miễn phí**:

| Platform | Cost | Sleep? | Deploy Ease | Best For |
|----------|------|--------|-------------|----------|
| **Akamai** ⭐⭐ | $100 credit (20mo) | No | ⭐⭐⭐ | Production |
| **Railway** ⭐ | $5 credit/mo | No | ⭐⭐⭐⭐⭐ | Beginners |
| **Render** | 750h free | Yes (15min) | ⭐⭐⭐⭐⭐ | Free forever |
| **Fly.io** | 3 VMs free | No | ⭐⭐⭐⭐ | Performance |
| **Koyeb** | 1 service | No | ⭐⭐⭐⭐ | Docker |

**Khuyến nghị:** 
- Beginners: **Railway** (easiest)
- Production: **Akamai** (best value - $100 credit!)
- Free forever: **Render** (accept sleep)

---

## 🔧 Migration Guide

### Nếu đã deploy trên Hugging Face

```bash
# Bước 1: Git push backend lên GitHub (nếu chưa)
cd script-tutor-backend
git init
git add .
git commit -m "Backend code"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main

# Bước 2: Railway deploy
# 1. railway.app → New Project
# 2. Deploy from GitHub
# 3. Select repo
# 4. Done!

# Bước 3: Update frontend config.js
# Thay HF URL bằng Railway URL

# Bước 4: Push frontend update
cd ../script-tutor-frontend
git add config.js
git commit -m "Update API URL to Railway"
git push
```

**Migration time:** ~5 phút

---

## 📝 Action Required

### For New Users

➡️ Follow **[QUICKSTART.md](QUICKSTART.md)** - Đã update với Railway

### For Existing Users

➡️ Read **[DEPLOYMENT_ALTERNATIVES.md](DEPLOYMENT_ALTERNATIVES.md)** - Chi tiết 4 options

### Configuration

Update `script-tutor-frontend/config.js`:

```javascript
// OLD (Hugging Face)
API_URL: 'https://username-api.hf.space/api',

// NEW (Railway - Recommended)
API_URL: 'https://your-app.up.railway.app/api',
```

---

## 💰 Cost Comparison

### Old: Hugging Face Spaces

```
Docker tier: $9/month (paid only)
```

### New: Railway

```
Free credit: $5/month
Actual usage: ~$2-3/month
Net cost: $0 (credit covers!)
```

**Result:** Vẫn MIỄN PHÍ! 🎉

---

## 🚀 Get Started

### Quick Links

- **[DEPLOYMENT_ALTERNATIVES.md](DEPLOYMENT_ALTERNATIVES.md)** - Full guide cho tất cả platforms
- **[QUICKSTART.md](QUICKSTART.md)** - Updated 10-min deploy
- **[Railway.app](https://railway.app)** - Deploy ngay!

### Support

Gặp vấn đề? Check:
1. [DEPLOYMENT_ALTERNATIVES.md](DEPLOYMENT_ALTERNATIVES.md) - Troubleshooting section
2. [GitHub Issues](https://github.com/ndnhatvien/script-tutor/issues)

---

## ✅ Summary

**Before:**
- Hugging Face Spaces (Docker) → ❌ Now paid

**After:**
- Railway.app (Docker) → ✅ Still FREE
- Render.com → ✅ Still FREE  
- Fly.io → ✅ Still FREE
- Koyeb → ✅ Still FREE

**Recommendation:** Railway.app

➡️ **Deploy now:** [railway.app](https://railway.app)

---

Updated: 2024-08-19
