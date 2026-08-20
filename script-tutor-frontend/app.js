// Main Application Logic
(function() {
    'use strict';

    // State
    let editor = null;
    let currentLanguage = 'bash';
    let currentLesson = null;
    let isDarkTheme = true;

    // DOM Elements
    const elements = {
        lessonsContainer: document.getElementById('lessonsContainer'),
        editor: document.getElementById('editor'),
        output: document.getElementById('output'),
        runBtn: document.getElementById('runCode'),
        resetBtn: document.getElementById('resetCode'),
        clearOutputBtn: document.getElementById('clearOutput'),
        themeToggle: document.getElementById('themeToggle'),
        sidebarToggle: document.getElementById('sidebarToggle'),
        mobileSidebarToggle: document.getElementById('mobileSidebarToggle'),
        sidebar: document.getElementById('sidebar'),
        currentLessonTitle: document.getElementById('currentLessonTitle'),
        executionTime: document.getElementById('executionTime'),
        loadingIndicator: document.getElementById('loadingIndicator')
    };

    // Initialize Monaco Editor
    function initEditor() {
        require.config({
            paths: {
                vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs'
            }
        });

        require(['vs/editor/editor.main'], function() {
            editor = monaco.editor.create(elements.editor, {
                value: '# Chọn bài học để bắt đầu\nputs "Hello, TCL!"',
                language: 'tcl',
                theme: CONFIG.EDITOR.theme,
                fontSize: CONFIG.EDITOR.fontSize,
                minimap: CONFIG.EDITOR.minimap,
                scrollBeyondLastLine: CONFIG.EDITOR.scrollBeyondLastLine,
                automaticLayout: CONFIG.EDITOR.automaticLayout,
                wordWrap: CONFIG.EDITOR.wordWrap
            });

            // Keyboard shortcut: Ctrl+Enter to run
            editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, runCode);
        });
    }

    // Load lessons for current language
    function loadLessons() {
        const lessons = LESSONS[currentLanguage];
        elements.lessonsContainer.innerHTML = '';

        lessons.forEach(lesson => {
            const lessonEl = document.createElement('div');
            lessonEl.className = 'lesson-item';
            lessonEl.dataset.id = lesson.id;
            lessonEl.innerHTML = `
                <div class="lesson-title">${lesson.title}</div>
                <div class="lesson-description">${lesson.description}</div>
            `;
            lessonEl.addEventListener('click', () => selectLesson(lesson));
            elements.lessonsContainer.appendChild(lessonEl);
        });
    }

    // Select a lesson
    function selectLesson(lesson) {
        currentLesson = lesson;

        // Update UI
        document.querySelectorAll('.lesson-item').forEach(el => {
            el.classList.remove('active');
        });
        document.querySelector(`[data-id="${lesson.id}"]`).classList.add('active');

        // Update editor
        editor.setValue(lesson.code);
        elements.currentLessonTitle.textContent = lesson.title;

        // Clear output
        clearOutput();

        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            elements.sidebar.classList.remove('open');
        }
    }

    // Run code
    async function runCode() {
        const code = editor.getValue().trim();

        if (!code) {
            showOutput('Vui lòng nhập code!', false);
            return;
        }

        // Show loading
        elements.loadingIndicator.style.display = 'flex';
        elements.output.textContent = 'Đang thực thi...';
        elements.output.className = 'output-content';
        elements.executionTime.textContent = '';

        try {
            const startTime = performance.now();

            const response = await fetch(`${CONFIG.API_URL}/${currentLanguage}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    code: code,
                    timeout: CONFIG.DEFAULT_TIMEOUT
                })
            });

            const endTime = performance.now();
            const localTime = ((endTime - startTime) / 1000).toFixed(3);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();

            // Display result
            if (data.success) {
                showOutput(data.output, true);
                elements.executionTime.textContent = `⏱️ ${data.execution_time || localTime}s`;
            } else {
                showOutput(data.error || 'Lỗi không xác định', false);
            }

        } catch (error) {
            showOutput(`❌ Lỗi kết nối API:\n${error.message}\n\nKiểm tra:\n1. API URL trong config.js\n2. Backend đã chạy chưa?\n3. CORS có được cấu hình đúng không?`, false);
        } finally {
            elements.loadingIndicator.style.display = 'none';
        }
    }

    // Show output
    function showOutput(text, isSuccess) {
        elements.output.textContent = text;
        elements.output.className = 'output-content ' + (isSuccess ? 'success' : 'error');
    }

    // Clear output
    function clearOutput() {
        elements.output.textContent = '';
        elements.output.className = 'output-content';
        elements.executionTime.textContent = '';
    }

    // Reset code
    function resetCode() {
        if (currentLesson) {
            editor.setValue(currentLesson.code);
            clearOutput();
        }
    }

    // Toggle theme
    function toggleTheme() {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle('dark-theme');

        const newTheme = isDarkTheme ? 'vs-dark' : 'vs';
        monaco.editor.setTheme(newTheme);

        elements.themeToggle.textContent = isDarkTheme ? '🌙' : '☀️';
    }

    // Toggle sidebar (mobile)
    function toggleSidebar() {
        elements.sidebar.classList.toggle('open');
    }

    // Switch language
    function switchLanguage(lang) {
        currentLanguage = lang;
        currentLesson = null;

        // Update tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });

        // Update editor language
        const model = editor.getModel();
        monaco.editor.setModelLanguage(model, lang === 'tcl' ? 'tcl' : 'shell');

        // Load lessons
        loadLessons();

        // Reset view
        elements.currentLessonTitle.textContent = 'Chọn bài học để bắt đầu';
        clearOutput();
    }

    // Event Listeners
    function setupEventListeners() {
        elements.runBtn.addEventListener('click', runCode);
        elements.resetBtn.addEventListener('click', resetCode);
        elements.clearOutputBtn.addEventListener('click', clearOutput);
        elements.themeToggle.addEventListener('click', toggleTheme);
        elements.sidebarToggle.addEventListener('click', toggleSidebar);
        elements.mobileSidebarToggle.addEventListener('click', toggleSidebar);

        // Language tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
        });
    }

    // Initialize app
    function init() {
        initEditor();
        loadLessons();
        setupEventListeners();

        console.log('✅ Script Tutor initialized');
        console.log('API URL:', CONFIG.API_URL);
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
