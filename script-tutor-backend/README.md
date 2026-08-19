---
title: TCL Bash Script Tutor API
emoji: 🖥️
colorFrom: blue
colorTo: green
sdk: docker
pinned: false
---

# 🖥️ TCL & Bash Script Tutor - Backend API

API backend để thực thi TCL và Bash scripts một cách an toàn cho ứng dụng học lập trình script.

## 🚀 Features

- ✅ Thực thi TCL code với sandbox an toàn
- ✅ Thực thi Bash scripts với môi trường giới hạn
- ✅ Timeout protection (mặc định 5s, tối đa 30s)
- ✅ CORS support cho GitHub Pages
- ✅ Error handling và validation
- ✅ Health check endpoints

## 📡 API Endpoints

### `GET /`
Health check và danh sách endpoints

### `GET /health`
Kiểm tra trạng thái TCL và Bash interpreters

### `POST /api/tcl`
Thực thi TCL code

**Request:**
```json
{
  "code": "puts \"Hello TCL!\"",
  "timeout": 5
}
```

**Response:**
```json
{
  "output": "Hello TCL!\n",
  "error": null,
  "success": true,
  "execution_time": 0.023
}
```

### `POST /api/bash`
Thực thi Bash script

**Request:**
```json
{
  "code": "echo 'Hello Bash!'",
  "timeout": 5
}
```

**Response:**
```json
{
  "output": "Hello Bash!\n",
  "error": null,
  "success": true,
  "execution_time": 0.018
}
```

## 🔧 Local Development

### Prerequisites
- Python 3.11+
- TCL (tclsh)
- Bash

### Setup

```bash
# Clone repository
cd script-tutor-backend

# Install dependencies
pip install -r requirements.txt

# Run server
python app.py
# hoặc
uvicorn app:app --reload --port 7860
```

API sẽ chạy tại: `http://localhost:7860`

### Test API

```bash
# Test TCL
curl -X POST http://localhost:7860/api/tcl \
  -H "Content-Type: application/json" \
  -d '{"code": "puts \"Hello TCL!\""}'

# Test Bash
curl -X POST http://localhost:7860/api/bash \
  -H "Content-Type: application/json" \
  -d '{"code": "echo Hello Bash"}'
```

## 🐳 Docker

```bash
# Build
docker build -t tcl-bash-api .

# Run
docker run -p 7860:7860 tcl-bash-api
```

## 🌐 Deploy to Hugging Face Spaces

### Bước 1: Tạo Space mới

1. Truy cập https://huggingface.co/new-space
2. Chọn tên: `tcl-bash-tutor-api`
3. License: Apache 2.0
4. SDK: **Docker**
5. Visibility: Public

### Bước 2: Clone và push code

```bash
# Clone space repository
git clone https://huggingface.co/spaces/YOUR_USERNAME/tcl-bash-tutor-api
cd tcl-bash-tutor-api

# Copy files
cp /path/to/app.py .
cp /path/to/requirements.txt .
cp /path/to/Dockerfile .
cp /path/to/README.md .

# Commit and push
git add .
git commit -m "Initial API deployment"
git push
```

### Bước 3: Đợi build

Space sẽ tự động build và deploy. Sau khoảng 2-3 phút, API sẽ available tại:

```
https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space
```

### Bước 4: Test deployment

```bash
curl https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space/health
```

## 🔒 Security Features

- ✅ Sandboxed execution environment
- ✅ Timeout limits (max 30s)
- ✅ Restricted environment variables
- ✅ Temporary file cleanup
- ✅ No network access from executed code
- ✅ Read-only filesystem for user code

## 📊 Rate Limits

Hugging Face Spaces free tier:
- No explicit rate limit
- Fair usage policy applies
- Consider caching for production use

## 🤝 Frontend Integration

URL API của bạn:
```javascript
const API_URL = 'https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space';
```

## 📝 License

Apache 2.0
