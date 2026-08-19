# 🖥️ TCL & Bash Script Tutor

> **Ứng dụng web học lập trình TCL và Bash Shell scripting với môi trường thực thi trực tuyến**

[![Deploy Status](https://img.shields.io/badge/deploy-ready-brightgreen)](https://github.com/ndnhatvien/script-tutor)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## 📖 Giới thiệu

**TCL & Bash Script Tutor** là nền tảng học lập trình script tương tác, cho phép:

- ✅ Học TCL (Tool Command Language) - ngôn ngữ script phổ biến trong thiết kế vi mạch (EDA)
- ✅ Học Bash Shell Scripting - ngôn ngữ script cho Linux/Unix
- ✅ Thực thi code real-time trên server an toàn
- ✅ 16 bài học có cấu trúc (8 TCL + 8 Bash)
- ✅ Editor chuyên nghiệp (Monaco Editor - core của VS Code)
- ✅ Hoàn toàn miễn phí và open source

---

## 🎯 Demo

- **Live Demo**: [https://your-username.github.io/script-tutor/](https://your-username.github.io/script-tutor/)
- **API Backend**: [https://your-username-tcl-bash-tutor-api.hf.space](https://your-username-tcl-bash-tutor-api.hf.space)

---

## 🏗️ Kiến trúc

```
┌─────────────────────────────────────────────────────────────┐
│                        User Browser                         │
│  ┌─────────────────────────────────────────────────────┐   │
│  │           Frontend (GitHub Pages)                    │   │
│  │  • Monaco Editor (Syntax Highlighting)               │   │
│  │  • Lesson Management                                 │   │
│  │  • UI/UX Components                                  │   │
│  └───────────────────┬─────────────────────────────────┘   │
└────────────────────────┼───────────────────────────────────┘
                         │ HTTPS POST /api/{tcl|bash}
                         │ { code, timeout }
                         ▼
┌─────────────────────────────────────────────────────────────┐
│           Backend (Hugging Face Spaces)                     │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  FastAPI Server (Docker Container)                   │   │
│  │  ├─ TCL Interpreter (tclsh)                          │   │
│  │  ├─ Bash Shell                                       │   │
│  │  ├─ Sandboxed Execution                              │   │
│  │  └─ Timeout Protection                               │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## 📂 Cấu trúc Project

```
script-tutor/
├── script-tutor-frontend/          # Frontend - GitHub Pages
│   ├── index.html                  # Main HTML
│   ├── styles.css                  # Styles & Responsive
│   ├── config.js                   # Configuration (API URL)
│   ├── lessons.js                  # Lesson data (16 lessons)
│   ├── app.js                      # Application logic
│   └── README.md                   # Frontend docs
│
├── script-tutor-backend/           # Backend - Hugging Face Spaces
│   ├── app.py                      # FastAPI application
│   ├── requirements.txt            # Python dependencies
│   ├── Dockerfile                  # Docker configuration
│   └── README.md                   # Backend docs
│
├── DEPLOYMENT_GUIDE.md             # 🚀 Hướng dẫn deploy chi tiết
└── README.md                       # This file
```

---

## 🚀 Quick Start

### Option 1: Sử dụng Demo có sẵn

Truy cập demo: [https://your-username.github.io/script-tutor/](https://your-username.github.io/script-tutor/)

### Option 2: Deploy của bạn (Recommended)

**Bước 1: Deploy Backend (5 phút)**

1. Tạo tài khoản [Hugging Face](https://huggingface.co/join)
2. Tạo Space mới với SDK: **Docker**
3. Upload files từ `script-tutor-backend/`
4. Đợi build hoàn tất

**Bước 2: Deploy Frontend (3 phút)**

1. Fork repo này hoặc tạo repo mới
2. Copy files từ `script-tutor-frontend/`
3. Cập nhật `API_URL` trong `config.js`
4. Enable GitHub Pages trong Settings

**Chi tiết đầy đủ:** Xem [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

---

## ✨ Features

### 🎓 Học tập

- **16 Bài học có cấu trúc**
  - TCL: Hello World → Procedures
  - Bash: Hello World → Functions
- **Interactive Coding**: Code và chạy ngay
- **Real-time Feedback**: Xem kết quả tức thì
- **Explanation**: Mỗi bài có giải thích chi tiết

### 🛠️ Editor

- **Monaco Editor**: Editor giống VS Code
- **Syntax Highlighting**: TCL và Bash
- **Auto-completion**: Gợi ý code
- **Keyboard Shortcuts**: Ctrl+Enter để chạy

### 🎨 UI/UX

- **Dark/Light Theme**: Chuyển theme dễ dàng
- **Responsive Design**: Hoạt động trên mọi thiết bị
- **Smooth Animations**: Trải nghiệm mượt mà
- **Mobile-friendly**: Sidebar collapsible

### 🔒 Security

- **Sandboxed Execution**: Code chạy trong môi trường cô lập
- **Timeout Protection**: Max 30s execution
- **Restricted Environment**: Giới hạn quyền truy cập
- **No Data Storage**: Không lưu code của user

---

## 🎯 Đối tượng sử dụng

### 🎓 Sinh viên

- Học TCL cho các môn thiết kế vi mạch (VLSI, EDA)
- Học Bash cho Linux/Unix system programming
- Thực hành ngay không cần cài đặt

### 👨‍🏫 Giảng viên

- Tích hợp vào bài giảng
- Gán bài tập thực hành
- Customize lessons cho khóa học

### 💼 Kỹ sư

- Ôn tập TCL cho EDA tools (Cadence, Synopsys)
- Học Bash automation
- Quick reference và testing

---

## 📚 Nội dung Lessons

### TCL (8 Bài)

1. **Hello World** - Làm quen với TCL
2. **Variables** - Khai báo và sử dụng biến
3. **Expressions** - Phép toán số học
4. **If-Else** - Cấu trúc rẽ nhánh
5. **For Loop** - Vòng lặp với số lần xác định
6. **While Loop** - Vòng lặp theo điều kiện
7. **Lists** - Làm việc với danh sách
8. **Procedures** - Tạo và sử dụng functions

### Bash (8 Bài)

1. **Hello World** - Câu lệnh đầu tiên
2. **Variables** - Biến trong Bash
3. **Arithmetic** - Phép tính số học
4. **If Statements** - Điều kiện rẽ nhánh
5. **For Loop** - Vòng lặp for
6. **While Loop** - Vòng lặp while
7. **Arrays** - Làm việc với mảng
8. **Functions** - Tạo và gọi functions

---

## 🔧 Công nghệ

### Frontend

- **HTML5/CSS3/JavaScript** - Core web technologies
- **Monaco Editor** - Code editor (VS Code core)
- **GitHub Pages** - Static hosting (free)

### Backend

- **Python 3.11** - Programming language
- **FastAPI** - Modern web framework
- **TCL 8.6** - TCL interpreter
- **Bash 5.x** - Shell interpreter
- **Docker** - Containerization
- **Railway / Render / Fly.io** - Hosting platforms (free)

> **Note:** Xem [DEPLOYMENT_ALTERNATIVES.md](DEPLOYMENT_ALTERNATIVES.md) cho deployment options.

---

## 🌟 Roadmap

### Version 1.0 (Current)

- ✅ 16 bài học cơ bản
- ✅ Code execution
- ✅ Dark/Light theme

### Version 1.1 (Planned)

- [ ] User authentication
- [ ] Save/Load code
- [ ] More lessons (Advanced topics)
- [ ] Code sharing via URL

### Version 2.0 (Future)

- [ ] AI-powered hints
- [ ] Code challenges & competitions
- [ ] Leaderboard system
- [ ] Certificate of completion

---

## 🤝 Contributing

Chúng tôi hoan nghênh mọi đóng góp!

### Cách đóng góp:

1. Fork repository
2. Tạo branch: `git checkout -b feature/amazing-feature`
3. Commit: `git commit -m 'Add amazing feature'`
4. Push: `git push origin feature/amazing-feature`
5. Tạo Pull Request

### Ý tưởng đóng góp:

- 💡 Thêm lessons mới
- 🐛 Fix bugs
- 🎨 Cải thiện UI/UX
- 📚 Viết documentation
- 🌍 Dịch sang ngôn ngữ khác

---

## 📄 License

MIT License - Xem [LICENSE](LICENSE) để biết chi tiết

Tóm tắt:
- ✅ Sử dụng cho mục đích thương mại
- ✅ Modify và distribute
- ✅ Private use
- ⚠️ Không warranty

---

## 👥 Authors

- **Nguyen Duc Nhat Vien** - *Initial work* - [@ndnhatvien](https://github.com/ndnhatvien)

---

## 🙏 Acknowledgments

- **Monaco Editor** - Microsoft
- **FastAPI** - Sebastián Ramírez
- **Hugging Face** - Hosting platform
- **GitHub** - Code hosting & Pages
- **TCL Community** - Language support
- **Bash Community** - Shell scripting resources

---

## 📞 Contact & Support

### Issues

Gặp vấn đề? [Open an issue](https://github.com/ndnhatvien/script-tutor/issues)

### Email

your-email@example.com

### Social

- GitHub: [@ndnhatvien](https://github.com/ndnhatvien)
- Twitter: [@your_handle](https://twitter.com/your_handle)

---

## 🔗 Links

- **Documentation**: [/docs](./docs)
- **Deployment Guide**: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- **Frontend README**: [Frontend Docs](script-tutor-frontend/README.md)
- **Backend README**: [Backend Docs](script-tutor-backend/README.md)
- **Changelog**: [CHANGELOG.md](CHANGELOG.md)

---

<div align="center">

**⭐ Nếu project này hữu ích, hãy cho một star! ⭐**

Made with ❤️ for the scripting community

[Demo](https://your-username.github.io/script-tutor/) • [Report Bug](https://github.com/ndnhatvien/script-tutor/issues) • [Request Feature](https://github.com/ndnhatvien/script-tutor/issues)

</div>
