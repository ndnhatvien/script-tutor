# 📝 Cheat Sheet - TCL & Bash Script Tutor

Quick reference cho deployment và customization.

---

## 🚀 Quick Deploy Commands

### Backend (Hugging Face)

```bash
# Clone Space
git clone https://huggingface.co/spaces/YOUR_USERNAME/tcl-bash-tutor-api
cd tcl-bash-tutor-api

# Copy files
cp ../script-tutor-backend/* .

# Deploy
git add .
git commit -m "Deploy backend"
git push
```

### Frontend (GitHub Pages)

```bash
# Init repo
cd script-tutor-frontend
git init
git add .
git commit -m "Initial commit"

# Push
git remote add origin https://github.com/YOUR_USERNAME/script-tutor.git
git branch -M main
git push -u origin main

# Enable Pages: Settings → Pages → main branch
```

---

## 🔗 Important URLs

### Replace these placeholders:

```
YOUR_USERNAME → Your Hugging Face username
YOUR_USERNAME → Your GitHub username (same or different)
```

### After deployment:

```
Backend API:
https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space

Frontend:
https://YOUR_USERNAME.github.io/script-tutor/

Health Check:
https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space/health

API Docs:
https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space/docs
```

---

## ⚙️ Configuration Quick Reference

### Frontend: config.js

```javascript
const CONFIG = {
    // IMPORTANT: Update this URL!
    API_URL: 'https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space/api',
    
    DEFAULT_TIMEOUT: 5,  // seconds
    
    EDITOR: {
        theme: 'vs-dark',        // or 'vs' for light
        fontSize: 14,
        minimap: { enabled: false },
        wordWrap: 'on'
    }
};
```

### Backend: CORS in app.py

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://YOUR_USERNAME.github.io",  # Your GitHub Pages
        "http://localhost:8000",            # Local dev
    ],
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)
```

---

## 🎨 Customization Quick Edits

### Change Colors (styles.css)

```css
:root {
    --primary-color: #0066cc;      /* Main blue */
    --secondary-color: #00994d;    /* Green */
    --success-color: #28a745;      /* Success green */
}
```

### Change Theme Default (app.js)

```javascript
let isDarkTheme = true;  // false for light theme default
```

### Add New Lesson (lessons.js)

```javascript
LESSONS.tcl.push({
    id: 'tcl-09',
    title: 'Bài 9: Your Topic',
    description: 'Short description',
    code: `# Your code here
puts "Hello"`,
    explanation: `Your explanation here`
});
```

---

## 🧪 Testing Commands

### Backend Local

```bash
# Start server
cd script-tutor-backend
python app.py

# Test in another terminal
curl http://localhost:7860/health
curl -X POST http://localhost:7860/api/tcl \
  -H "Content-Type: application/json" \
  -d '{"code":"puts Hello"}'
```

### Frontend Local

```bash
# Start HTTP server
cd script-tutor-frontend
python -m http.server 8000

# Open browser
# http://localhost:8000
```

### Docker Test

```bash
# Build & run backend
cd script-tutor-backend
docker build -t tcl-bash-api .
docker run -p 7860:7860 tcl-bash-api
```

---

## 🐛 Common Issues & Quick Fixes

### Issue: CORS Error

**Symptom:** "Access-Control-Allow-Origin" error in console

**Fix:** Update `app.py`:
```python
allow_origins=[
    "https://YOUR_USERNAME.github.io",  # Add your domain
]
```

### Issue: API Connection Failed

**Symptom:** "API connection failed" in output

**Fix:** Check `config.js`:
```javascript
API_URL: 'https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space/api',
// Make sure this matches your Hugging Face Space URL
```

### Issue: Monaco Editor Not Loading

**Symptom:** Blank editor area

**Fix:** Check CDN in `app.js`:
```javascript
paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs'
    // Try different CDN if blocked
}
```

### Issue: Backend Build Failed

**Symptom:** Build errors in Hugging Face logs

**Fix:** Check these files exist:
- ✅ app.py
- ✅ requirements.txt
- ✅ Dockerfile
- ✅ README.md (with frontmatter)

---

## 📋 File Checklist

### Backend Files Required

```
script-tutor-backend/
├── app.py              ✅ Main API
├── requirements.txt    ✅ Dependencies
├── Dockerfile          ✅ Container config
└── README.md           ✅ With YAML frontmatter
```

### Frontend Files Required

```
script-tutor-frontend/
├── index.html          ✅ Main page
├── styles.css          ✅ Styles
├── config.js           ✅ Configuration
├── lessons.js          ✅ Lesson data
├── app.js              ✅ App logic
└── README.md           ✅ Docs
```

---

## 🔍 Verification Checklist

### After Backend Deploy

```bash
✅ curl https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space/health
   Should return: {"status":"healthy",...}

✅ curl https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space/docs
   Should show: FastAPI Swagger docs

✅ Test TCL:
   curl -X POST .../api/tcl -H "Content-Type: application/json" \
   -d '{"code":"puts test"}'
   
✅ Test Bash:
   curl -X POST .../api/bash -H "Content-Type: application/json" \
   -d '{"code":"echo test"}'
```

### After Frontend Deploy

```
✅ Open: https://YOUR_USERNAME.github.io/script-tutor/
✅ Check: Sidebar loads with lessons
✅ Click: Any lesson
✅ Click: "▶️ Chạy" button
✅ Verify: Output appears (green = success, red = error)
✅ Test: Theme toggle (🌙 button)
✅ Check: Mobile view (responsive sidebar)
```

---

## 🔄 Update Workflow

### Update Backend

```bash
cd tcl-bash-tutor-api
# Edit app.py or other files
git add .
git commit -m "Update: description"
git push
# Hugging Face auto-rebuilds
```

### Update Frontend

```bash
cd script-tutor-frontend
# Edit files
git add .
git commit -m "Update: description"
git push
# GitHub Pages auto-deploys (~1 min)
```

### Force Rebuild

**Backend:**
```bash
git commit --allow-empty -m "Trigger rebuild"
git push
```

**Frontend:**
```bash
# Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

---

## 📊 Useful Git Commands

```bash
# Check status
git status

# See changes
git diff

# Undo local changes
git checkout -- filename

# Undo last commit (keep changes)
git reset --soft HEAD~1

# View commit history
git log --oneline

# Create new branch
git checkout -b feature-name

# Switch branch
git checkout main
```

---

## 🌐 API Endpoints Reference

### GET /

Health check + endpoints list

### GET /health

```json
{
  "status": "healthy",
  "tcl_available": true,
  "bash_available": true
}
```

### POST /api/tcl

**Request:**
```json
{
  "code": "puts \"Hello\"",
  "timeout": 5
}
```

**Response:**
```json
{
  "output": "Hello\n",
  "error": null,
  "success": true,
  "execution_time": 0.023
}
```

### POST /api/bash

Same as `/api/tcl` but for Bash scripts.

---

## 💡 Pro Tips

### 1. Local Development

```bash
# Terminal 1: Backend
cd script-tutor-backend
python app.py

# Terminal 2: Frontend
cd script-tutor-frontend
python -m http.server 8000

# config.js → API_URL: 'http://localhost:7860/api'
```

### 2. Quick Lesson Test

```javascript
// In browser console (F12)
fetch('https://YOUR-API.hf.space/api/tcl', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({code: 'puts "test"'})
}).then(r => r.json()).then(console.log)
```

### 3. Debug Mode

```javascript
// Add to app.js
console.log('API Response:', data);  // After fetch
```

### 4. Mobile Testing

```
Chrome DevTools → Toggle device toolbar (Ctrl+Shift+M)
Test: iPhone, iPad, responsive
```

---

## 📱 Keyboard Shortcuts

### In Editor

```
Ctrl+Enter (Cmd+Enter)  → Run code
Ctrl+/                  → Toggle comment
Ctrl+Z                  → Undo
Ctrl+Shift+Z            → Redo
Ctrl+F                  → Find
Ctrl+H                  → Replace
```

### In Browser DevTools

```
F12                     → Open DevTools
Ctrl+Shift+C            → Inspect element
Ctrl+Shift+M            → Toggle device mode
Ctrl+Shift+R            → Hard refresh
```

---

## 🎯 One-Liners

```bash
# Backend health check
curl https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space/health

# Frontend git push
git add . && git commit -m "Update" && git push

# Docker quick test
docker build -t api . && docker run -p 7860:7860 api

# Python HTTP server
python -m http.server 8000

# Find large files
find . -type f -size +1M

# Count lines of code
find . -name "*.py" -o -name "*.js" | xargs wc -l
```

---

## 📞 Support Links

- [Full Documentation](README.md)
- [Deployment Guide](DEPLOYMENT_GUIDE.md)
- [Quick Start](QUICKSTART.md)
- [Local Testing](LOCAL_TESTING.md)
- [Project Summary](PROJECT_SUMMARY.md)

---

**Keep this cheat sheet handy for quick reference!** 📌
