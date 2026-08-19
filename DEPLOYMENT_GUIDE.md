# 🚀 Hướng dẫn Deploy Full Stack TCL & Bash Script Tutor

Hướng dẫn chi tiết để deploy ứng dụng học lập trình script với:
- **Frontend**: GitHub Pages (static hosting - miễn phí)
- **Backend**: Hugging Face Spaces (API server - miễn phí)

---

## 📋 Tổng quan

```
Frontend (GitHub Pages)          Backend (Hugging Face)
┌─────────────────────┐         ┌──────────────────────┐
│  Monaco Editor      │         │   FastAPI Server     │
│  HTML/CSS/JS        │ ──────► │   TCL Interpreter    │
│  User Interface     │  HTTPS  │   Bash Shell         │
└─────────────────────┘         └──────────────────────┘

URL: username.github.io/repo    URL: username-api.hf.space
```

---

## 🎯 Bước 1: Deploy Backend trên Hugging Face Spaces

### 1.1. Tạo tài khoản Hugging Face

1. Truy cập: https://huggingface.co/join
2. Đăng ký với email
3. Verify email

### 1.2. Tạo Space mới

1. Truy cập: https://huggingface.co/new-space
2. Điền thông tin:
   - **Owner**: Chọn username của bạn
   - **Space name**: `tcl-bash-tutor-api`
   - **License**: Apache 2.0
   - **Select the Space SDK**: **Docker**
   - **Space hardware**: CPU basic (free)
   - **Visibility**: Public
3. Click **Create Space**

### 1.3. Upload code Backend

Có 2 cách:

#### **Cách 1: Qua Web UI (Dễ nhất)**

1. Trong Space vừa tạo, click **Files** tab
2. Upload lần lượt các files từ thư mục `script-tutor-backend/`:
   - `app.py`
   - `requirements.txt`
   - `Dockerfile`
   - `README.md`
3. Commit message: "Initial backend deployment"

#### **Cách 2: Qua Git (Khuyến nghị)**

```bash
# Clone Space repository
git clone https://huggingface.co/spaces/YOUR_USERNAME/tcl-bash-tutor-api
cd tcl-bash-tutor-api

# Copy backend files
cp /path/to/script-tutor-backend/app.py .
cp /path/to/script-tutor-backend/requirements.txt .
cp /path/to/script-tutor-backend/Dockerfile .
cp /path/to/script-tutor-backend/README.md .

# Commit và push
git add .
git commit -m "Deploy backend API"
git push
```

### 1.4. Đợi Build

1. Sau khi push, Space sẽ tự động build Docker image
2. Xem logs trong tab **Logs**
3. Build thành công (~2-3 phút) sẽ hiển thị: "Application startup complete"

### 1.5. Test API

```bash
# Test health check
curl https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space/health

# Expected response:
# {
#   "status": "healthy",
#   "tcl_available": true,
#   "bash_available": true
# }

# Test TCL execution
curl -X POST https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space/api/tcl \
  -H "Content-Type: application/json" \
  -d '{"code": "puts \"Hello TCL!\""}'

# Test Bash execution
curl -X POST https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space/api/bash \
  -H "Content-Type: application/json" \
  -d '{"code": "echo Hello Bash"}'
```

✅ Nếu API trả về kết quả, backend đã sẵn sàng!

---

## 🌐 Bước 2: Deploy Frontend trên GitHub Pages

### 2.1. Tạo GitHub Repository

1. Truy cập: https://github.com/new
2. Repository name: `script-tutor` (hoặc tên khác)
3. Description: "TCL & Bash Script Interactive Tutor"
4. Visibility: Public
5. ✅ Add README
6. Click **Create repository**

### 2.2. Cập nhật API URL

Mở file `script-tutor-frontend/config.js` và thay `YOUR_USERNAME`:

```javascript
const CONFIG = {
    // Thay YOUR_USERNAME bằng username Hugging Face của bạn
    API_URL: 'https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space/api',
    ...
};
```

Ví dụ:
```javascript
API_URL: 'https://johndoe-tcl-bash-tutor-api.hf.space/api',
```

### 2.3. Push code lên GitHub

```bash
# Di chuyển vào thư mục frontend
cd script-tutor-frontend

# Initialize git
git init
git add .
git commit -m "Initial frontend deployment"

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/script-tutor.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2.4. Enable GitHub Pages

1. Vào repository: `https://github.com/YOUR_USERNAME/script-tutor`
2. Click **Settings** (tab trên cùng)
3. Sidebar bên trái → Click **Pages**
4. Trong section **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### 2.5. Đợi Deployment

1. GitHub sẽ build và deploy (~1-2 phút)
2. Sau khi xong, sẽ hiển thị URL:
   ```
   Your site is live at https://YOUR_USERNAME.github.io/script-tutor/
   ```
3. Click vào URL để mở app

---

## ✅ Bước 3: Kiểm tra hoạt động

### 3.1. Test Frontend

1. Mở browser: `https://YOUR_USERNAME.github.io/script-tutor/`
2. Chọn tab **TCL** hoặc **Bash**
3. Click vào bài học đầu tiên
4. Click nút **▶️ Chạy**

### 3.2. Expected Results

✅ **Nếu thành công:**
- Code execute và hiển thị output
- Thời gian thực thi hiển thị (vd: `⏱️ 0.023s`)
- Output màu xanh (success)

❌ **Nếu lỗi:**
- Hiển thị lỗi kết nối API
- Xem [Troubleshooting](#-troubleshooting) bên dưới

---

## 🔧 Bước 4: Cấu hình CORS (nếu cần)

Nếu gặp lỗi CORS, cập nhật backend:

### 4.1. Mở file `app.py` trên Hugging Face

1. Vào Space: `https://huggingface.co/spaces/YOUR_USERNAME/tcl-bash-tutor-api`
2. Click **Files** → `app.py`
3. Click **Edit** (icon bút chì)

### 4.2. Cập nhật CORS configuration

Tìm dòng:
```python
allow_origins=[
    "*",  # Development - nên thay bằng domain cụ thể khi production
    "https://*.github.io",
],
```

Thay bằng:
```python
allow_origins=[
    "https://YOUR_USERNAME.github.io",  # Thay YOUR_USERNAME
    "http://localhost:8000",            # Cho local dev
],
```

### 4.3. Commit changes

1. Scroll xuống dưới
2. Commit message: "Update CORS origins"
3. Click **Commit changes to main**

---

## 🐛 Troubleshooting

### Lỗi 1: "API connection failed"

**Nguyên nhân:**
- API URL sai trong config.js
- Backend chưa running
- CORS chưa cấu hình đúng

**Giải pháp:**
```bash
# 1. Kiểm tra API có hoạt động không
curl https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space/health

# 2. Kiểm tra API URL trong config.js
# Phải khớp với URL Hugging Face Space

# 3. Check CORS trong app.py (Bước 4 trên)
```

### Lỗi 2: "Mixed Content" (HTTP vs HTTPS)

**Nguyên nhân:** GitHub Pages dùng HTTPS, nếu API dùng HTTP sẽ bị block

**Giải pháp:** Hugging Face Spaces tự động dùng HTTPS, không cần lo

### Lỗi 3: Build failed trên Hugging Face

**Kiểm tra:**
1. Xem tab **Logs** trong Space
2. Check syntax lỗi trong `app.py`
3. Check `requirements.txt` có đúng không

**Rebuild:**
```bash
# Local
cd tcl-bash-tutor-api
git commit --allow-empty -m "Trigger rebuild"
git push
```

### Lỗi 4: GitHub Pages không update

**Giải pháp:**
1. Settings → Pages → Check build status
2. Actions tab → Xem workflow có failed không
3. Hard refresh browser: `Ctrl+Shift+R` (Windows) hoặc `Cmd+Shift+R` (Mac)

### Lỗi 5: Monaco Editor không load

**Nguyên nhân:** CDN bị chặn hoặc chậm

**Giải pháp tạm:**
- Dùng browser khác
- Check network trong DevTools (F12)

---

## 📊 Monitoring & Maintenance

### Kiểm tra Backend Health

```bash
# Automated health check
curl https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space/health
```

Tạo cronjob hoặc GitHub Actions để ping định kỳ.

### Xem Logs

1. Hugging Face Space → Tab **Logs**
2. Xem request/response, errors

### Update Code

**Frontend:**
```bash
cd script-tutor-frontend
# Edit files
git add .
git commit -m "Update features"
git push
# GitHub Pages tự động deploy
```

**Backend:**
```bash
cd tcl-bash-tutor-api
# Edit app.py hoặc files khác
git add .
git commit -m "Update API"
git push
# Hugging Face tự động rebuild
```

---

## 🎉 Hoàn tất!

Bây giờ bạn đã có:

✅ **Frontend:** `https://YOUR_USERNAME.github.io/script-tutor/`
✅ **Backend:** `https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space`

Chia sẻ link với bạn bè để học TCL và Bash!

---

## 📚 Next Steps

### Thêm Features

1. **Authentication**: Thêm login để lưu progress
2. **More Lessons**: Thêm bài tập nâng cao
3. **Code Sharing**: Share code qua URL
4. **Leaderboard**: Xếp hạng học viên
5. **AI Hints**: Gợi ý code với AI

### Optimization

1. **CDN**: Self-host Monaco Editor
2. **Caching**: Cache API responses
3. **Analytics**: Google Analytics tracking

---

## 🔗 Resources

- **Hugging Face Docs**: https://huggingface.co/docs/hub/spaces
- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Monaco Editor**: https://microsoft.github.io/monaco-editor/
- **FastAPI Docs**: https://fastapi.tiangolo.com/

---

## 📧 Support

Nếu cần hỗ trợ:
1. Check [Troubleshooting](#-troubleshooting)
2. Open issue trên GitHub
3. Liên hệ: your-email@example.com

Happy coding! 🚀
