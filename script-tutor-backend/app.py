"""
TCL & Bash Script Tutor - Backend API
Hugging Face Spaces deployment
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import subprocess
import tempfile
import os
import uuid
from typing import Optional

app = FastAPI(
    title="TCL & Bash Script Tutor API",
    description="API để thực thi TCL và Bash scripts một cách an toàn",
    version="1.0.0"
)

# CORS configuration - cho phép GitHub Pages gọi API
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "*",  # Development - nên thay bằng domain cụ thể khi production
        "https://*.github.io",
    ],
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

class CodeRequest(BaseModel):
    code: str
    timeout: Optional[int] = 5  # seconds

class CodeResponse(BaseModel):
    output: str
    error: Optional[str] = None
    success: bool
    execution_time: Optional[float] = None

@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "status": "running",
        "message": "TCL & Bash Script Tutor API",
        "endpoints": {
            "tcl": "/api/tcl",
            "bash": "/api/bash",
            "health": "/health"
        }
    }

@app.get("/health")
async def health_check():
    """Kiểm tra sức khỏe của API và interpreters"""
    tcl_available = False
    bash_available = False

    try:
        result = subprocess.run(['tclsh'], input='puts "OK"',
                              capture_output=True, text=True, timeout=1)
        tcl_available = result.returncode == 0
    except:
        pass

    try:
        result = subprocess.run(['bash', '-c', 'echo OK'],
                              capture_output=True, text=True, timeout=1)
        bash_available = result.returncode == 0
    except:
        pass

    return {
        "status": "healthy" if (tcl_available and bash_available) else "degraded",
        "tcl_available": tcl_available,
        "bash_available": bash_available
    }

@app.post("/api/tcl", response_model=CodeResponse)
async def execute_tcl(request: CodeRequest):
    """
    Thực thi TCL code

    - **code**: TCL source code
    - **timeout**: Thời gian timeout (giây), mặc định 5s
    """
    import time

    if not request.code.strip():
        raise HTTPException(status_code=400, detail="Code không được để trống")

    if request.timeout > 30:
        raise HTTPException(status_code=400, detail="Timeout tối đa là 30 giây")

    temp_file = None
    try:
        # Tạo file tạm với tên unique
        temp_file = f"/tmp/tcl_{uuid.uuid4().hex}.tcl"
        with open(temp_file, 'w', encoding='utf-8') as f:
            f.write(request.code)

        # Thực thi với timeout
        start_time = time.time()
        result = subprocess.run(
            ['tclsh', temp_file],
            capture_output=True,
            text=True,
            timeout=request.timeout,
            env={'HOME': '/tmp', 'PATH': '/usr/bin:/bin'}  # Restricted environment
        )
        execution_time = time.time() - start_time

        return CodeResponse(
            output=result.stdout or "(Không có output)",
            error=result.stderr if result.returncode != 0 else None,
            success=result.returncode == 0,
            execution_time=round(execution_time, 3)
        )

    except subprocess.TimeoutExpired:
        return CodeResponse(
            output="",
            error=f"Timeout: Thực thi vượt quá {request.timeout} giây",
            success=False
        )
    except Exception as e:
        return CodeResponse(
            output="",
            error=f"Lỗi: {str(e)}",
            success=False
        )
    finally:
        # Xóa file tạm
        if temp_file and os.path.exists(temp_file):
            try:
                os.unlink(temp_file)
            except:
                pass

@app.post("/api/bash", response_model=CodeResponse)
async def execute_bash(request: CodeRequest):
    """
    Thực thi Bash script

    - **code**: Bash source code
    - **timeout**: Thời gian timeout (giây), mặc định 5s
    """
    import time

    if not request.code.strip():
        raise HTTPException(status_code=400, detail="Code không được để trống")

    if request.timeout > 30:
        raise HTTPException(status_code=400, detail="Timeout tối đa là 30 giây")

    try:
        start_time = time.time()
        result = subprocess.run(
            ['bash', '-c', request.code],
            capture_output=True,
            text=True,
            timeout=request.timeout,
            env={
                'PATH': '/usr/bin:/bin',
                'HOME': '/tmp',
                'SHELL': '/bin/bash'
            }
        )
        execution_time = time.time() - start_time

        return CodeResponse(
            output=result.stdout or "(Không có output)",
            error=result.stderr if result.returncode != 0 else None,
            success=result.returncode == 0,
            execution_time=round(execution_time, 3)
        )

    except subprocess.TimeoutExpired:
        return CodeResponse(
            output="",
            error=f"Timeout: Thực thi vượt quá {request.timeout} giây",
            success=False
        )
    except Exception as e:
        return CodeResponse(
            output="",
            error=f"Lỗi: {str(e)}",
            success=False
        )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=7860)

