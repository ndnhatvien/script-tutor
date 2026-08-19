# 🧪 Local Testing Guide

Hướng dẫn test ứng dụng trên máy local trước khi deploy.

---

## 🔧 Prerequisites

### Windows
```powershell
# Python 3.11+
python --version

# TCL (cài Tcl/Tk từ https://www.tcl.tk/software/tcltk/)
tclsh

# Bash (Git Bash hoặc WSL)
bash --version
```

### Linux/Mac
```bash
# Python 3.11+
python3 --version

# TCL (thường có sẵn)
tclsh

# Bash (có sẵn)
bash --version
```

---

## ⚡ Quick Test (2 phút)

### 1. Test Backend

```bash
# Di chuyển vào thư mục backend
cd script-tutor-backend

# Install dependencies
pip install -r requirements.txt

# Run server
python app.py
```

Server sẽ chạy tại: `http://localhost:7860`

**Test API:**
```bash
# Terminal mới
# Test health
curl http://localhost:7860/health

# Test TCL
curl -X POST http://localhost:7860/api/tcl \
  -H "Content-Type: application/json" \
  -d '{"code": "puts \"Hello TCL!\""}'

# Test Bash
curl -X POST http://localhost:7860/api/bash \
  -H "Content-Type: application/json" \
  -d '{"code": "echo Hello Bash"}'
```

### 2. Test Frontend

**Update API URL:**

Mở `script-tutor-frontend/config.js`:
```javascript
API_URL: 'http://localhost:7860/api',  // Local backend
```

**Start HTTP Server:**

```bash
# Cách 1: Python
cd script-tutor-frontend
python -m http.server 8000

# Cách 2: Node.js
npx http-server -p 8000

# Cách 3: PHP
php -S localhost:8000
```

**Mở browser:**
```
http://localhost:8000
```

### 3. Test toàn bộ

1. Click tab "TCL" hoặc "Bash"
2. Click bài học bất kỳ
3. Click "▶️ Chạy"
4. Xem output

✅ Nếu hiển thị output → Success!

---

## 🐳 Test với Docker

### Backend

```bash
cd script-tutor-backend

# Build image
docker build -t tcl-bash-api .

# Run container
docker run -p 7860:7860 tcl-bash-api
```

Test: `http://localhost:7860/health`

### Full Stack với Docker Compose

Tạo `docker-compose.yml`:

```yaml
version: '3.8'

services:
  backend:
    build: ./script-tutor-backend
    ports:
      - "7860:7860"
    environment:
      - PYTHONUNBUFFERED=1
    
  frontend:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./script-tutor-frontend:/usr/share/nginx/html:ro
```

Run:
```bash
docker-compose up
```

- Backend: `http://localhost:7860`
- Frontend: `http://localhost:8080`

---

## 🧪 Unit Tests (Optional)

### Backend Tests

Tạo `script-tutor-backend/test_app.py`:

```python
from fastapi.testclient import TestClient
from app import app

client = TestClient(app)

def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["tcl_available"] == True
    assert data["bash_available"] == True

def test_tcl_execution():
    response = client.post("/api/tcl", json={
        "code": "puts \"Hello\"",
        "timeout": 5
    })
    assert response.status_code == 200
    data = response.json()
    assert data["success"] == True
    assert "Hello" in data["output"]

def test_bash_execution():
    response = client.post("/api/bash", json={
        "code": "echo Hello",
        "timeout": 5
    })
    assert response.status_code == 200
    data = response.json()
    assert data["success"] == True
    assert "Hello" in data["output"]

def test_timeout():
    response = client.post("/api/bash", json={
        "code": "sleep 10",
        "timeout": 2
    })
    data = response.json()
    assert data["success"] == False
    assert "Timeout" in data["error"]
```

Run tests:
```bash
pip install pytest httpx
pytest test_app.py -v
```

---

## 🔍 Debug Mode

### Backend Debug

Thêm vào `app.py`:

```python
import logging

logging.basicConfig(level=logging.DEBUG)

# Hoặc dùng uvicorn debug mode:
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=7860, log_level="debug")
```

### Frontend Debug

Mở DevTools (F12) và xem:

1. **Console**: JavaScript errors
2. **Network**: API requests/responses
3. **Sources**: Breakpoints

Thêm debug logs trong `app.js`:

```javascript
console.log('API URL:', CONFIG.API_URL);
console.log('Running code:', code);
console.log('API Response:', data);
```

---

## 🌐 Test CORS

Nếu frontend ở domain khác với backend:

### Backend: Enable CORS for local testing

Trong `app.py`:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8000",
        "http://127.0.0.1:8000",
        "*"  # Cho phép tất cả (chỉ dùng dev)
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Test CORS

```bash
curl -H "Origin: http://localhost:8000" \
     -H "Access-Control-Request-Method: POST" \
     -X OPTIONS http://localhost:7860/api/tcl
```

Should return CORS headers.

---

## 📊 Performance Testing

### Load Test với Apache Bench

```bash
# Install apache2-utils (Linux) hoặc brew install ab (Mac)

# Test 100 requests, 10 concurrent
ab -n 100 -c 10 -p tcl_request.json -T application/json \
   http://localhost:7860/api/tcl
```

`tcl_request.json`:
```json
{"code": "puts \"test\"", "timeout": 5}
```

### Memory Profiling

```bash
pip install memory-profiler

# Thêm @profile decorator vào functions
python -m memory_profiler app.py
```

---

## 🐛 Common Issues

### Backend không start

**Lỗi:** `ModuleNotFoundError: No module named 'fastapi'`

**Fix:**
```bash
pip install -r requirements.txt
```

**Lỗi:** `tclsh: command not found`

**Fix:**
- Windows: Install Tcl/Tk từ https://www.tcl.tk/
- Linux: `sudo apt-get install tcl`
- Mac: `brew install tcl-tk`

### Frontend không connect backend

**Lỗi:** `CORS policy: No 'Access-Control-Allow-Origin' header`

**Fix:** Update CORS trong `app.py` (xem phần CORS trên)

**Lỗi:** `ERR_CONNECTION_REFUSED`

**Fix:** Kiểm tra backend có chạy không:
```bash
curl http://localhost:7860/health
```

### Monaco Editor không load

**Lỗi:** Console hiển thị `Failed to load monaco-editor`

**Fix:**
1. Check network trong DevTools
2. Thử CDN khác:
```javascript
// Trong app.js
paths: {
    vs: 'https://unpkg.com/monaco-editor@0.45.0/min/vs'
}
```

---

## ✅ Checklist trước khi Deploy

Backend:
- [ ] Health endpoint works: `/health`
- [ ] TCL execution works: `/api/tcl`
- [ ] Bash execution works: `/api/bash`
- [ ] Timeout protection works
- [ ] Error handling works

Frontend:
- [ ] All lessons load correctly
- [ ] Code editor works
- [ ] Run button executes code
- [ ] Output displays correctly
- [ ] Theme toggle works
- [ ] Responsive on mobile
- [ ] API URL configured correctly

---

## 📝 Next Steps

Sau khi test local thành công:

1. ✅ Update API URL trong `config.js` về production URL
2. ✅ Deploy backend lên Hugging Face Spaces
3. ✅ Deploy frontend lên GitHub Pages
4. ✅ Test production deployment

Xem: [QUICKSTART.md](QUICKSTART.md) hoặc [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

---

Happy testing! 🧪
