# ⚡ Quick Start Guide - 10 phút để có app chạy

## 🎯 Mục tiêu

Trong 10 phút, bạn sẽ có:
- ✅ Backend API chạy trên Hugging Face (miễn phí)
- ✅ Frontend web app trên GitHub Pages (miễn phí)
- ✅ Ứng dụng học TCL & Bash hoàn chỉnh

---

## ⏱️ Bước 1: Deploy Backend (5 phút)

> **⚠️ UPDATE:** Hugging Face Spaces Docker giờ yêu cầu paid. Dùng **Railway.app** thay thế (miễn phí $5 credit/tháng).

### 1. Tạo Railway Account

```
1. Truy cập: https://railway.app
2. Sign up with GitHub (miễn phí)
3. Verify email
```

### 2. Deploy Backend

**Cách 1 - From GitHub (Khuyến nghị):**
```
1. Push backend code lên GitHub repo của bạn
2. Railway → New Project
3. Deploy from GitHub repo
4. Select: script-tutor-backend folder
5. Railway tự động:
   ✓ Detect Dockerfile
   ✓ Build & deploy
   ✓ Generate domain (~2 min)
```

**Cách 2 - Railway CLI:**
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Deploy
cd script-tutor-backend
railway init
railway up
```

### 3. Get API URL

```
Railway Dashboard → Deployments → Domains
Copy domain: YOUR-APP.up.railway.app
```

### 4. Test API

```bash
curl https://YOUR-APP.up.railway.app/health
```

Expected:
```json
{"status":"healthy","tcl_available":true,"bash_available":true}
```

✅ **Backend DONE!** URL của bạn:
```
https://YOUR-APP.up.railway.app
```

**Alternatives:** Xem [DEPLOYMENT_ALTERNATIVES.md](DEPLOYMENT_ALTERNATIVES.md) cho Render, Fly.io, Koyeb

---

## ⏱️ Bước 2: Deploy Frontend (5 phút)

### 1. Tạo GitHub Repository

```
1. Truy cập: https://github.com/new
2. Repository name: script-tutor
3. Public
4. ✅ Add README
5. Click "Create repository"
```

### 2. Cập nhật API URL

Mở file: `script-tutor-frontend/config.js`

Thay dòng:
```javascript
API_URL: 'https://YOUR-APP.up.railway.app/api',  // Railway
// Hoặc nền tảng khác - xem DEPLOYMENT_ALTERNATIVES.md
```

Bằng URL backend của bạn ở Bước 1.

### 3. Push code lên GitHub

```bash
cd script-tutor-frontend

git init
git add .
git commit -m "Initial commit"

git remote add origin https://github.com/YOUR_USERNAME/script-tutor.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

```
1. Vào repo: github.com/YOUR_USERNAME/script-tutor
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: main, folder: / (root)
5. Save
```

### 5. Đợi deploy (~1 phút)

Sẽ hiển thị:
```
✓ Your site is live at https://YOUR_USERNAME.github.io/script-tutor/
```

✅ **Frontend DONE!** Mở URL trên để xem app!

---

## ✅ Bước 3: Test toàn bộ (1 phút)

1. Mở: `https://YOUR_USERNAME.github.io/script-tutor/`
2. Click tab "TCL"
3. Click "Bài 1: Hello World"
4. Click nút "▶️ Chạy"

**Expected:**
```
Hello, World!
Chào mừng đến với
TCL Programming

⏱️ 0.023s
```

---

## 🎉 Xong rồi!

Bạn đã có app hoàn chỉnh:

- **Frontend:** https://YOUR_USERNAME.github.io/script-tutor/
- **Backend:** https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space

---

## 🐛 Gặp lỗi?

### Lỗi: "API connection failed"

**Fix:**
1. Check API URL trong `config.js` có đúng không?
2. Test backend: `curl https://YOUR-APP.up.railway.app/health`
3. Nếu backend lỗi, check logs trong Railway Dashboard

### Lỗi: "CORS blocked"

**Fix:**
1. Vào Railway Dashboard
2. Click vào service → Variables
3. (Hoặc edit `app.py` và redeploy)
4. Trong `app.py`, update:
```python
allow_origins=[
    "https://YOUR_USERNAME.github.io",
]
```
5. Git push → Railway tự động redeploy

### Lỗi: GitHub Pages không hiển thị

**Fix:**
1. Check Settings → Pages → Build status
2. Hard refresh: Ctrl+Shift+R (Windows) hoặc Cmd+Shift+R (Mac)
3. Đợi 2-3 phút rồi thử lại

---

## 📚 Next Steps

- ✅ Thử tất cả 16 bài học
- ✅ Customize lessons trong `lessons.js`
- ✅ Thay đổi theme/colors trong `styles.css`
- ✅ Chia sẻ với bạn bè!

---

## 📞 Cần help?

- 📖 Chi tiết: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- 🐛 Issues: [GitHub Issues](https://github.com/ndnhatvien/script-tutor/issues)
- 📧 Email: your-email@example.com

Happy coding! 🚀
