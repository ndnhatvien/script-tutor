# 🏗️ Architecture Overview - TCL & Bash Script Tutor

## 📐 System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                          End User (Browser)                         │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │                     Web Browser                                │ │
│  │                                                                │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │ │
│  │  │   Monaco     │  │   Lessons    │  │   Theme      │       │ │
│  │  │   Editor     │  │   Manager    │  │   Toggle     │       │ │
│  │  └──────────────┘  └──────────────┘  └──────────────┘       │ │
│  │                                                                │ │
│  │  ┌──────────────────────────────────────────────────────┐    │ │
│  │  │           Frontend Application                       │    │ │
│  │  │           (HTML + CSS + JavaScript)                  │    │ │
│  │  │                                                       │    │ │
│  │  │  • Code Editor (Monaco)                              │    │ │
│  │  │  • Lesson Selection                                  │    │ │
│  │  │  • UI Components                                     │    │ │
│  │  │  • API Communication                                 │    │ │
│  │  └──────────────────────────────────────────────────────┘    │ │
│  └───────────────────────────┬─────────────────────────────────┘ │
└────────────────────────────────┼───────────────────────────────────┘
                                 │
                                 │ HTTPS POST Request
                                 │ /api/tcl or /api/bash
                                 │ { "code": "...", "timeout": 5 }
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      Hugging Face Spaces                            │
│                      (Cloud Infrastructure)                         │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │                   Docker Container                             │ │
│  │                                                                │ │
│  │  ┌──────────────────────────────────────────────────────┐    │ │
│  │  │              FastAPI Application                      │    │ │
│  │  │                                                       │    │ │
│  │  │  ┌─────────────────┐      ┌─────────────────┐       │    │ │
│  │  │  │  POST /api/tcl  │      │  POST /api/bash │       │    │ │
│  │  │  └────────┬────────┘      └────────┬────────┘       │    │ │
│  │  │           │                        │                │    │ │
│  │  │           ▼                        ▼                │    │ │
│  │  │  ┌─────────────────┐      ┌─────────────────┐       │    │ │
│  │  │  │  Code Validator │      │  Code Validator │       │    │ │
│  │  │  └────────┬────────┘      └────────┬────────┘       │    │ │
│  │  │           │                        │                │    │ │
│  │  │           ▼                        ▼                │    │ │
│  │  │  ┌─────────────────┐      ┌─────────────────┐       │    │ │
│  │  │  │ Temp File Gen   │      │  Direct Execute │       │    │ │
│  │  │  └────────┬────────┘      └────────┬────────┘       │    │ │
│  │  │           │                        │                │    │ │
│  │  │           ▼                        ▼                │    │ │
│  │  │  ┌──────────────────────────────────────────┐       │    │ │
│  │  │  │         Sandboxed Execution              │       │    │ │
│  │  │  │                                          │       │    │ │
│  │  │  │  ┌──────────┐      ┌──────────┐         │       │    │ │
│  │  │  │  │   tclsh  │      │   bash   │         │       │    │ │
│  │  │  │  │  (TCL    │      │  (Shell  │         │       │    │ │
│  │  │  │  │ Interp.) │      │  Interp.)│         │       │    │ │
│  │  │  │  └──────────┘      └──────────┘         │       │    │ │
│  │  │  │                                          │       │    │ │
│  │  │  │  Environment:                            │       │    │ │
│  │  │  │  • Restricted PATH                       │       │    │ │
│  │  │  │  • Limited ENV vars                      │       │    │ │
│  │  │  │  • Timeout protection                    │       │    │ │
│  │  │  │  • No network access                     │       │    │ │
│  │  │  └──────────────────────────────────────────┘       │    │ │
│  │  │                                                       │    │ │
│  │  │  ┌──────────────────────────────────────────┐       │    │ │
│  │  │  │        Response Generator                 │       │    │ │
│  │  │  │  • Capture stdout/stderr                  │       │    │ │
│  │  │  │  • Calculate execution time               │       │    │ │
│  │  │  │  • Format JSON response                   │       │    │ │
│  │  │  │  • Cleanup temp files                     │       │    │ │
│  │  │  └──────────────────────────────────────────┘       │    │ │
│  │  └──────────────────────────────────────────────────────┘    │ │
│  └───────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
                                 │
                                 │ JSON Response
                                 │ { "output": "...", "success": true, ... }
                                 │
                                 ▼
                         (Back to Browser)
```

---

## 🔄 Request Flow

### User Clicks "Run Code"

```
1. Frontend
   └─► app.js captures code from Monaco Editor
   └─► Validates code is not empty
   └─► Shows loading indicator
   └─► Sends HTTPS POST request

2. Network
   └─► Request travels through GitHub Pages CDN
   └─► Reaches Hugging Face Spaces
   └─► CORS validation

3. Backend API
   └─► FastAPI receives request
   └─► Validates JSON schema (Pydantic)
   └─► Checks timeout value (max 30s)
   └─► Routes to /api/tcl or /api/bash

4. Code Execution
   └─► Creates temp file (TCL) or direct string (Bash)
   └─► Sets restricted environment variables
   └─► Spawns subprocess with timeout
   └─► Captures stdout/stderr
   └─► Measures execution time

5. Response Processing
   └─► Formats output as JSON
   └─► Includes success status
   └─► Adds execution time
   └─► Cleans up temp files
   └─► Returns response

6. Frontend Display
   └─► Receives JSON response
   └─► Hides loading indicator
   └─► Updates output display
   └─► Shows execution time
   └─► Colors output (green=success, red=error)
```

**Total time:** ~50-300ms (depending on code complexity)

---

## 📦 Component Breakdown

### Frontend Components

```
┌─────────────────────────────────────────────┐
│          index.html (Structure)              │
├─────────────────────────────────────────────┤
│  • Header                                    │
│    - Title                                   │
│    - Theme toggle                            │
│  • Sidebar                                   │
│    - Language tabs (TCL/Bash)                │
│    - Lessons list                            │
│  • Main Area                                 │
│    - Editor container (Monaco)               │
│    - Action buttons (Run, Reset)             │
│    - Output container                        │
│  • Footer                                    │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│          styles.css (Styling)                │
├─────────────────────────────────────────────┤
│  • CSS Variables (colors, sizes)             │
│  • Layout (Grid/Flexbox)                     │
│  • Responsive breakpoints                    │
│  • Dark/Light theme                          │
│  • Animations                                │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│          config.js (Configuration)           │
├─────────────────────────────────────────────┤
│  • API_URL                                   │
│  • DEFAULT_TIMEOUT                           │
│  • EDITOR settings                           │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│          lessons.js (Data)                   │
├─────────────────────────────────────────────┤
│  • TCL lessons array (8 lessons)             │
│  • Bash lessons array (8 lessons)            │
│  • Each lesson:                              │
│    - id, title, description                  │
│    - code, explanation                       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│          app.js (Logic)                      │
├─────────────────────────────────────────────┤
│  • Editor initialization (Monaco)            │
│  • Lesson loading & selection                │
│  • Code execution (API calls)                │
│  • UI event handlers                         │
│  • Theme toggle                              │
│  • Error handling                            │
└─────────────────────────────────────────────┘
```

### Backend Components

```
┌─────────────────────────────────────────────┐
│          app.py (FastAPI Application)        │
├─────────────────────────────────────────────┤
│                                              │
│  ┌────────────────────────────────────┐     │
│  │      Data Models (Pydantic)        │     │
│  │  • CodeRequest                     │     │
│  │  • CodeResponse                    │     │
│  └────────────────────────────────────┘     │
│                                              │
│  ┌────────────────────────────────────┐     │
│  │      Middleware                    │     │
│  │  • CORS                            │     │
│  └────────────────────────────────────┘     │
│                                              │
│  ┌────────────────────────────────────┐     │
│  │      Endpoints                     │     │
│  │  • GET  /                          │     │
│  │  • GET  /health                    │     │
│  │  • POST /api/tcl                   │     │
│  │  • POST /api/bash                  │     │
│  └────────────────────────────────────┘     │
│                                              │
│  ┌────────────────────────────────────┐     │
│  │   Execution Functions              │     │
│  │  • execute_tcl()                   │     │
│  │  • execute_bash()                  │     │
│  │  • validate_code()                 │     │
│  │  • cleanup_files()                 │     │
│  └────────────────────────────────────┘     │
│                                              │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│          Dockerfile (Container)              │
├─────────────────────────────────────────────┤
│  • Base: python:3.11-slim                    │
│  • Install: tcl, bash                        │
│  • Install: Python packages                  │
│  • Copy: app.py                              │
│  • Expose: 7860                              │
│  • CMD: uvicorn app:app                      │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│          requirements.txt (Dependencies)     │
├─────────────────────────────────────────────┤
│  • fastapi>=0.104.0                          │
│  • uvicorn[standard]>=0.24.0                 │
│  • pydantic>=2.5.0                           │
│  • python-multipart>=0.0.6                   │
└─────────────────────────────────────────────┘
```

---

## 🔐 Security Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Security Layers                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Layer 1: Network Security                                  │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  • HTTPS only (TLS 1.3)                               │ │
│  │  • CORS policy enforcement                            │ │
│  │  • Rate limiting (Hugging Face)                       │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  Layer 2: Application Security                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  • Input validation (Pydantic)                        │ │
│  │  • Timeout enforcement (max 30s)                      │ │
│  │  • No eval() or exec() in frontend                    │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  Layer 3: Execution Security                               │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  • Sandboxed subprocess                               │ │
│  │  • Restricted environment variables                   │ │
│  │  • No network access from code                        │ │
│  │  • Temporary file isolation                           │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  Layer 4: Resource Security                                │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  • CPU limits (container)                             │ │
│  │  • Memory limits (container)                          │ │
│  │  • Disk space limits                                  │ │
│  │  • Process limits                                     │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📊 Data Flow Diagram

### Successful Execution

```
User
  │
  │ 1. Enters code
  │
  ├─► Monaco Editor
  │       │
  │       │ 2. User clicks "Run"
  │       │
  │       ▼
  │   app.js
  │       │
  │       │ 3. Validate code
  │       │ 4. Show loading
  │       │ 5. HTTPS POST
  │       │
  │       ▼
  │   Network (GitHub Pages → Hugging Face)
  │       │
  │       │ 6. CORS check
  │       │
  │       ▼
  │   FastAPI
  │       │
  │       │ 7. Schema validation
  │       │ 8. Route to handler
  │       │
  │       ▼
  │   Execution Handler
  │       │
  │       │ 9. Create temp file/command
  │       │ 10. Set environment
  │       │ 11. subprocess.run()
  │       │
  │       ▼
  │   TCL/Bash Interpreter
  │       │
  │       │ 12. Execute code
  │       │ 13. Generate output
  │       │
  │       ▼
  │   Response Builder
  │       │
  │       │ 14. Capture stdout/stderr
  │       │ 15. Calculate time
  │       │ 16. Build JSON
  │       │ 17. Cleanup
  │       │
  │       ▼
  │   Network (Response back)
  │       │
  │       ▼
  │   app.js
  │       │
  │       │ 18. Parse JSON
  │       │ 19. Hide loading
  │       │ 20. Display output
  │       │ 21. Show time
  │       │
  │       ▼
  │   User sees result
  │
  ▼
Done
```

### Error Handling Flow

```
Error occurs at any step
  │
  ├─► Timeout Error
  │     └─► Return: { success: false, error: "Timeout" }
  │
  ├─► Network Error
  │     └─► Frontend: "API connection failed"
  │
  ├─► Execution Error
  │     └─► Return: { success: false, error: stderr }
  │
  ├─► Validation Error
  │     └─► Return: 400 Bad Request
  │
  └─► Server Error
        └─► Return: 500 Internal Server Error
```

---

## 🎯 Deployment Architecture

### Development Environment

```
┌────────────────────┐         ┌────────────────────┐
│   Local Machine    │         │   Local Machine    │
│                    │         │                    │
│  ┌──────────────┐  │         │  ┌──────────────┐  │
│  │   Backend    │  │         │  │  Frontend    │  │
│  │ localhost:   │  │◄────────┤  │ localhost:   │  │
│  │   7860       │  │  HTTP   │  │   8000       │  │
│  └──────────────┘  │         │  └──────────────┘  │
│                    │         │                    │
└────────────────────┘         └────────────────────┘
```

### Production Environment

```
┌──────────────────────────────┐    ┌──────────────────────────────┐
│     GitHub Pages             │    │   Hugging Face Spaces        │
│     (CDN - Global)           │    │   (Cloud - Regional)         │
│                              │    │                              │
│  ┌────────────────────────┐  │    │  ┌────────────────────────┐  │
│  │   Static Files         │  │    │  │   Docker Container     │  │
│  │   • HTML/CSS/JS        │  │    │  │   • FastAPI            │  │
│  │   • Served via CDN     │  │    │  │   • TCL/Bash           │  │
│  │   • HTTPS enabled      │  │    │  │   • HTTPS endpoint     │  │
│  └────────────────────────┘  │    │  └────────────────────────┘  │
│                              │    │                              │
│  URL: username.github.io     │    │  URL: username-api.hf.space  │
└──────────────┬───────────────┘    └───────────┬──────────────────┘
               │                                │
               │    HTTPS POST /api/{lang}      │
               └────────────────────────────────┘
```

---

## 🔧 Technology Stack Details

### Frontend Stack

```
Layer 1: Structure
  └─► HTML5
      • Semantic elements
      • Responsive meta tags
      • Accessibility attributes

Layer 2: Styling
  └─► CSS3
      • CSS Grid & Flexbox
      • CSS Variables
      • Media queries
      • Animations

Layer 3: Logic
  └─► JavaScript ES6+
      • Async/await
      • Fetch API
      • Event listeners
      • DOM manipulation

Layer 4: Editor
  └─► Monaco Editor
      • Syntax highlighting
      • Auto-completion
      • Keyboard shortcuts
      • Theme support
```

### Backend Stack

```
Layer 1: Web Framework
  └─► FastAPI
      • Async endpoints
      • Pydantic validation
      • Auto docs (Swagger)
      • CORS middleware

Layer 2: Server
  └─► Uvicorn
      • ASGI server
      • HTTP/1.1 & HTTP/2
      • WebSocket support
      • Performance optimized

Layer 3: Interpreters
  ├─► TCL 8.6
  │   • tclsh command
  │   • Standard library
  └─► Bash 5.x
      • Shell interpreter
      • Core utilities

Layer 4: Container
  └─► Docker
      • Isolated environment
      • Reproducible builds
      • Resource limits
```

---

## 📈 Scalability Considerations

### Current Capacity

```
Frontend (GitHub Pages):
  • Bandwidth: 100 GB/month
  • Build minutes: 2,000/month
  • Concurrent users: ~1000s
  • Geographic: Global CDN

Backend (Hugging Face Free):
  • CPU: Shared
  • RAM: Up to 16 GB
  • Concurrent requests: ~10-50
  • Geographic: Single region
```

### Scale-up Options

```
Option 1: Hugging Face Pro
  • Cost: $9/month
  • CPU: Dedicated
  • RAM: More resources
  • Better uptime SLA

Option 2: Self-hosted
  • Platform: Fly.io, Railway, Render
  • Cost: $5-20/month
  • Control: Full
  • Scale: Auto-scaling available

Option 3: Serverless
  • Platform: AWS Lambda, Vercel
  • Cost: Pay per request
  • Scale: Infinite (theoretically)
  • Cold start: 1-3s
```

---

## 🔄 Update & Maintenance Flow

```
Code Changes
  │
  ├─► Frontend Update
  │     │
  │     ├─► 1. Edit files locally
  │     ├─► 2. git commit
  │     ├─► 3. git push to GitHub
  │     ├─► 4. GitHub Actions build
  │     └─► 5. Deploy to Pages (1-2 min)
  │
  └─► Backend Update
        │
        ├─► 1. Edit files locally
        ├─► 2. git commit
        ├─► 3. git push to HF
        ├─► 4. Docker rebuild
        └─► 5. Deploy to Space (2-3 min)
```

---

<div align="center">

**Architecture designed for simplicity, security, and scalability** 🏗️

[Back to Main README](README.md) • [Deployment Guide](DEPLOYMENT_GUIDE.md)

</div>
