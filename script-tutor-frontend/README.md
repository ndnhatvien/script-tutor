# 🖥️ TCL & Bash Script Tutor - Frontend

Web application để học lập trình TCL và Bash Shell scripting với môi trường thực thi tương tác.

## ✨ Features

- ✅ Monaco Editor với syntax highlighting
- ✅ Thực thi code real-time qua API
- ✅ 8 bài học cho mỗi ngôn ngữ (TCL & Bash)
- ✅ Dark/Light theme
- ✅ Responsive design (mobile-friendly)
- ✅ Keyboard shortcuts (Ctrl+Enter để chạy)
- ✅ Execution time tracking

## 🚀 Quick Start

### 1. Cấu hình API URL

Mở file `config.js` và thay YOUR_USERNAME:

```javascript
const CONFIG = {
    API_URL: 'https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space/api',
    // Ví dụ: 'https://johndoe-tcl-bash-tutor-api.hf.space/api'
    ...
};
```

### 2. Test Local

```bash
# Dùng Python HTTP server
cd script-tutor-frontend
python -m http.server 8000

# Hoặc dùng Node.js
npx http-server -p 8000
```

Mở trình duyệt: `http://localhost:8000`

### 3. Deploy lên GitHub Pages

#### Bước 1: Tạo GitHub Repository

```bash
cd script-tutor-frontend
git init
git add .
git commit -m "Initial commit"
```

#### Bước 2: Push lên GitHub

```bash
# Tạo repo trên GitHub: https://github.com/new
# Đặt tên: script-tutor (hoặc tên khác)

git remote add origin https://github.com/YOUR_USERNAME/script-tutor.git
git branch -M main
git push -u origin main
```

#### Bước 3: Enable GitHub Pages

1. Vào repository trên GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `main` → folder: `/ (root)`
5. Save

Đợi vài phút, site sẽ available tại:
```
https://YOUR_USERNAME.github.io/script-tutor/
```

## 📁 Cấu trúc Project

```
script-tutor-frontend/
├── index.html          # Main HTML
├── styles.css          # Styles & responsive
├── config.js           # Configuration (API URL)
├── lessons.js          # Lesson data (TCL & Bash)
├── app.js              # Main application logic
└── README.md           # Documentation
```

## 🎨 Customization

### Thay đổi Theme Colors

Trong `styles.css`, chỉnh biến CSS:

```css
:root {
    --primary-color: #0066cc;      /* Màu chính */
    --secondary-color: #00994d;    /* Màu phụ */
    --success-color: #28a745;      /* Màu success */
    ...
}
```

### Thêm Lessons

Trong `lessons.js`, thêm object vào array:

```javascript
const LESSONS = {
    tcl: [
        {
            id: 'tcl-09',
            title: 'Bài 9: String Operations',
            description: 'Thao tác với chuỗi',
            code: `# Your code here`,
            explanation: `# Explanation`
        }
    ],
    ...
};
```

### Thay đổi Editor Settings

Trong `config.js`:

```javascript
EDITOR: {
    theme: 'vs-dark',        // hoặc 'vs' (light)
    fontSize: 14,            // kích thước chữ
    minimap: { enabled: false },
    wordWrap: 'on'           // tự động xuống dòng
}
```

## 🔧 API Integration

Frontend gọi API endpoints:

```javascript
// Execute TCL
POST /api/tcl
Body: { "code": "puts 'Hello'", "timeout": 5 }

// Execute Bash
POST /api/bash
Body: { "code": "echo Hello", "timeout": 5 }
```

Response format:
```json
{
    "output": "Hello\n",
    "error": null,
    "success": true,
    "execution_time": 0.023
}
```

## 📱 Responsive Design

- Desktop: Sidebar + Editor + Output
- Tablet: Collapsible sidebar
- Mobile: Hidden sidebar với floating button

## ⌨️ Keyboard Shortcuts

- `Ctrl+Enter` (Cmd+Enter trên Mac): Chạy code
- Các shortcuts khác của Monaco Editor

## 🌐 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive

## 🐛 Troubleshooting

### Lỗi: CORS blocked

**Nguyên nhân:** Backend chưa cấu hình CORS cho domain của bạn

**Giải pháp:** Trong backend `app.py`, thêm origin:
```python
allow_origins=[
    "https://your-username.github.io",
]
```

### Lỗi: API connection failed

**Kiểm tra:**
1. API URL trong `config.js` đúng chưa?
2. Backend đã deploy trên Hugging Face chưa?
3. Backend có đang chạy không? (test với curl)

```bash
curl https://YOUR_USERNAME-tcl-bash-tutor-api.hf.space/health
```

### Monaco Editor không load

**Nguyên nhân:** CDN blocked hoặc slow

**Giải pháp:** Download Monaco Editor và host locally:
```bash
npm install monaco-editor
# Copy node_modules/monaco-editor vào project
```

## 🔒 Security Notes

- Code được thực thi trên server (backend), không phải client
- Backend có timeout protection (max 30s)
- Backend chạy trong sandboxed environment
- Không lưu code của user

## 📊 Performance

- First load: ~500ms (Monaco Editor CDN)
- Code execution: 50-200ms (tùy code)
- API latency: 100-500ms (Hugging Face Spaces)

## 🤝 Contributing

Để thêm features hoặc lessons mới:

1. Fork repository
2. Tạo branch mới: `git checkout -b feature/new-lesson`
3. Commit changes: `git commit -m 'Add new lesson'`
4. Push: `git push origin feature/new-lesson`
5. Tạo Pull Request

## 📝 License

MIT License - Free to use and modify

## 🔗 Links

- **Backend API:** [Backend README](../script-tutor-backend/README.md)
- **Hugging Face Spaces:** https://huggingface.co/spaces
- **Monaco Editor:** https://microsoft.github.io/monaco-editor/

## 📧 Support

Nếu gặp vấn đề:
1. Check [Troubleshooting](#-troubleshooting)
2. Open issue trên GitHub
3. Contact: your-email@example.com
