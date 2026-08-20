# 🚂 Railway Deployment Guide

Quick guide để deploy backend lên Railway.app

---

## ✅ **Files đã có sẵn:**

```
✓ Dockerfile          (at root - Railway sẽ dùng này)
✓ railway.json        (Railway configuration)
✓ nixpacks.toml       (Alternative build config)
```

---

## 🚀 **Deploy Steps:**

### **Step 1: Redeploy trên Railway**

Nếu bạn đang thấy lỗi build:

```
Railway Dashboard → Your Project
→ Click "Redeploy" 
   (Railway sẽ detect Dockerfile mới)
```

### **Step 2: Hoặc tạo project mới**

```
1. Truy cập: https://railway.app
2. New Project
3. Deploy from GitHub repo
4. Select: ndnhatvien/script-tutor
5. Railway auto-detect:
   ✓ Dockerfile found
   ✓ Building Docker image...
   ✓ Done!
```

### **Step 3: Configure (nếu cần)**

```
Settings → Environment Variables

Không cần set gì - Railway tự động inject:
  - PORT (Railway tự set)
  - Public URL (auto-generated)
```

### **Step 4: Get API URL**

```
Deployments → Domains
Copy: https://YOUR-APP.up.railway.app
```

---

## 🧪 **Test API:**

```bash
# Health check
curl https://YOUR-APP.up.railway.app/health

# Expected response:
{
  "status": "healthy",
  "tcl_available": true,
  "bash_available": true
}

# Test TCL
curl -X POST https://YOUR-APP.up.railway.app/api/tcl \
  -H "Content-Type: application/json" \
  -d '{"code": "puts \"Hello TCL!\""}'

# Test Bash
curl -X POST https://YOUR-APP.up.railway.app/api/bash \
  -H "Content-Type: application/json" \
  -d '{"code": "echo Hello Bash"}'
```

---

## 🔧 **Troubleshooting:**

### **Error: "Railpack could not determine how to build"**

**Giải pháp:** Đã fix! Push mới có Dockerfile ở root.

```bash
# Verify files tồn tại:
git ls-files | grep -E "(Dockerfile|railway.json)"

# Should see:
Dockerfile
railway.json
```

### **Error: "PORT not defined"**

**Giải pháp:** Railway tự động inject `$PORT`. App đã config:

```python
# app.py already uses PORT from environment
port = int(os.environ.get("PORT", 7860))
```

### **Error: Build timeout**

**Giải pháp:** Build lần đầu mất ~2-3 phút (install TCL/Bash). Lần sau sẽ nhanh hơn (cached layers).

---

## 📋 **Build Process:**

Railway sẽ:

```
1. Detect Dockerfile ✓
2. Build Docker image:
   → Install Python 3.11
   → Install TCL + Bash
   → Install Python dependencies
   → Copy app.py
3. Start container:
   → uvicorn app:app --host 0.0.0.0 --port $PORT
4. Expose public URL
5. Done! ✅
```

---

## 🎯 **Update Frontend Config:**

Sau khi Railway deploy thành công:

```javascript
// script-tutor-frontend/config.js
const CONFIG = {
    API_URL: 'https://YOUR-APP.up.railway.app/api',
    // Replace với Railway URL của bạn
    ...
};
```

Commit và push:

```bash
cd script-tutor-frontend
# Edit config.js
git add config.js
git commit -m "Update API URL to Railway"
git push
```

---

## 💰 **Cost Monitoring:**

```
Railway Dashboard → Usage

Free tier: $5 credit/month
Typical usage: $2-3/month

Monitor:
  - CPU usage
  - Memory usage
  - Network bandwidth
```

---

## 🔄 **Auto-deploy:**

Railway tự động redeploy khi push code:

```bash
# Make changes to backend
cd script-tutor-backend
# Edit app.py

git add app.py
git commit -m "Update API"
git push

# Railway automatically:
# 1. Detects push
# 2. Rebuilds Docker image
# 3. Redeploys (~1-2 min)
```

---

## 📊 **Logs & Monitoring:**

```
Railway Dashboard → Deployments → View Logs

Useful logs:
  - Build logs (Docker build process)
  - Runtime logs (app output)
  - Error logs (if any)
```

---

## ✅ **Success Checklist:**

- [ ] Repository pushed to GitHub
- [ ] Dockerfile at root
- [ ] Railway project created
- [ ] Build successful (check logs)
- [ ] API accessible (test /health)
- [ ] TCL execution works
- [ ] Bash execution works
- [ ] Frontend config updated
- [ ] Frontend deployed (GitHub Pages)
- [ ] End-to-end test passed

---

## 🎉 **Done!**

Backend đang chạy trên Railway!

Next: Deploy frontend lên GitHub Pages

```bash
# See: QUICKSTART.md
cd script-tutor-frontend
# Push to gh-pages branch
```

---

## 📞 **Need Help?**

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- Project Issues: https://github.com/ndnhatvien/script-tutor/issues

---

**Happy deploying! 🚀**
